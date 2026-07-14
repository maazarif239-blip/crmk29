'use client';
import { useEffect, useState, useCallback } from 'react';
import { createClient } from '@/lib/supabase/client';

type Category = { id: string; slug: string; name: string; description: string | null; sort_order: number };
type NavItem = { id: string; label: string; href: string | null; parent_id: string | null };
type PlacementType = 'top-level' | 'dropdown';

export default function CategoriesPage() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [name, setName] = useState('');
  const [slug, setSlug] = useState('');
  const [loading, setLoading] = useState(true);
  const [editingId, setEditingId] = useState<string | null>(null);

  // Navbar placement state
  const [showNavbarPrompt, setShowNavbarPrompt] = useState(false);
  const [newCategoryName, setNewCategoryName] = useState('');
  const [newCategorySlug, setNewCategorySlug] = useState('');
  const [placementType, setPlacementType] = useState<PlacementType>('top-level');
  const [parentDropdownId, setParentDropdownId] = useState('');
  const [position, setPosition] = useState(0);
  const [availableDropdowns, setAvailableDropdowns] = useState<NavItem[]>([]);

  const fetchCategories = useCallback(async () => {
    const supabase = createClient();
    const { data } = await supabase.from('categories').select('*').order('sort_order');
    setCategories(data || []);
    setLoading(false);
  }, []);

  const fetchAvailableDropdowns = useCallback(async () => {
    try {
      const supabase = createClient();
      const { data: topLevel } = await supabase
        .from('nav_items')
        .select('id, label, href, parent_id')
        .is('parent_id', null);

      if (!topLevel || topLevel.length === 0) return;

      // Get all children in one query
      const { data: children } = await supabase
        .from('nav_items')
        .select('parent_id')
        .not('parent_id', 'is', null);

      if (!children) return;

      // Find which top-level items have at least one child
      const parentIds = new Set(children.map((c) => c.parent_id));
      const dropdowns = topLevel.filter((item) => parentIds.has(item.id));
      setAvailableDropdowns(dropdowns);
    } catch (err) {
      console.warn('Could not fetch dropdowns');
    }
  }, []);

  useEffect(() => {
    fetchCategories();
    fetchAvailableDropdowns();
  }, [fetchCategories, fetchAvailableDropdowns]);

  const generateSlug = () => {
    const s = name.toLowerCase().trim().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
    setSlug(s);
  };

  const startEdit = (category: Category) => {
    setEditingId(category.id);
    setName(category.name);
    setSlug(category.slug);
  };

  const cancelEdit = () => {
    setEditingId(null);
    setName('');
    setSlug('');
  };

  const resetNavbarState = () => {
    setShowNavbarPrompt(false);
    setNewCategoryName('');
    setNewCategorySlug('');
    setPlacementType('top-level');
    setParentDropdownId('');
    setPosition(0);
  };

  const saveCategory = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !slug) return;
    const supabase = createClient();

    if (editingId) {
      const { error } = await supabase.from('categories').update({ name, slug }).eq('id', editingId);
      if (error) { alert(error.message); return; }
      cancelEdit();
      fetchCategories();
    } else {
      const { error } = await supabase.from('categories').insert({ name, slug });
      if (error) { alert(error.message); return; }
      setNewCategoryName(name);
      setNewCategorySlug(slug);
      setShowNavbarPrompt(true);
      setName('');
      setSlug('');
      fetchCategories();
      fetchAvailableDropdowns();
    }
  };

  const addToNavbar = async () => {
    const supabase = createClient();
    const categoryHref = `/category/${newCategorySlug}`;

    try {
      if (placementType === 'top-level') {
        const { data: itemsToShift } = await supabase
          .from('nav_items')
          .select('id, position')
          .is('parent_id', null)
          .gte('position', position);

        if (itemsToShift) {
          for (const item of itemsToShift) {
            await supabase
              .from('nav_items')
              .update({ position: item.position + 1 })
              .eq('id', item.id);
          }
        }

        await supabase.from('nav_items').insert({
          label: newCategoryName,
          href: categoryHref,
          position,
          parent_id: null,
          is_visible: true,
        });
      } else {
        const { data: childrenToShift } = await supabase
          .from('nav_items')
          .select('id, position')
          .eq('parent_id', parentDropdownId)
          .gte('position', position);

        if (childrenToShift) {
          for (const item of childrenToShift) {
            await supabase
              .from('nav_items')
              .update({ position: item.position + 1 })
              .eq('id', item.id);
          }
        }

        await supabase.from('nav_items').insert({
          label: newCategoryName,
          href: categoryHref,
          position,
          parent_id: parentDropdownId,
          is_visible: true,
        });
      }

      resetNavbarState();
    } catch (err) {
      alert('Error adding to navbar');
      console.error(err);
    }
  };

  const deleteCategory = async (id: string) => {
    if (!confirm('Delete this category?')) return;
    const supabase = createClient();
    await supabase.from('categories').delete().eq('id', id);
    fetchCategories();
  };

  if (loading) return <p>Loading...</p>;

  return (
    <div style={{ padding: '20px' }}>
      <h1>Categories</h1>

      {showNavbarPrompt && (
        <div style={{
          position: 'fixed',
          top: 0, left: 0, right: 0, bottom: 0,
          background: 'rgba(0,0,0,0.5)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1000,
        }}>
          <div style={{
            background: 'white',
            padding: '24px',
            borderRadius: '8px',
            maxWidth: '500px',
            width: '90%',
          }}>
            <h2 style={{ marginTop: 0 }}>Add to Navbar?</h2>
            <p>Category &quot;{newCategoryName}&quot; created! Do you want to add it to the navbar?</p>

            <div style={{ marginBottom: '16px' }}>
              <label style={{ display: 'block', marginBottom: '8px' }}>
                <input
                  type="radio"
                  value="top-level"
                  checked={placementType === 'top-level'}
                  onChange={() => setPlacementType('top-level')}
                  style={{ marginRight: '8px' }}
                />
                Add as top-level navbar item
              </label>
              <label style={{ display: 'block' }}>
                <input
                  type="radio"
                  value="dropdown"
                  checked={placementType === 'dropdown'}
                  onChange={() => setPlacementType('dropdown')}
                  style={{ marginRight: '8px' }}
                />
                Add inside existing dropdown
              </label>
            </div>

            {placementType === 'dropdown' && (
              <div style={{ marginBottom: '16px' }}>
                <label style={{ display: 'block', marginBottom: '4px' }}>Dropdown:</label>
                <select
                  value={parentDropdownId}
                  onChange={(e) => setParentDropdownId(e.target.value)}
                  style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
                >
                  <option value="">Select a dropdown...</option>
                  {availableDropdowns.map((dropdown) => (
                    <option key={dropdown.id} value={dropdown.id}>
                      {dropdown.label}
                    </option>
                  ))}
                </select>
              </div>
            )}

            <div style={{ marginBottom: '16px' }}>
              <label style={{ display: 'block', marginBottom: '4px' }}>
                Position (0-based index):
              </label>
              <input
                type="number"
                min="0"
                value={position}
                onChange={(e) => setPosition(parseInt(e.target.value) || 0)}
                style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
              />
              <small style={{ color: '#666' }}>
                {placementType === 'top-level'
                  ? 'Items at/after this position will shift down'
                  : 'Sub-items at/after this position will shift down'}
              </small>
            </div>

            <div style={{ display: 'flex', gap: '8px', justifyContent: 'flex-end' }}>
              <button
                onClick={resetNavbarState}
                style={{ padding: '8px 16px', background: '#ccc', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
              >
                Skip
              </button>
              <button
                onClick={addToNavbar}
                disabled={placementType === 'dropdown' && !parentDropdownId}
                style={{
                  padding: '8px 16px',
                  background: placementType === 'dropdown' && !parentDropdownId ? '#ccc' : '#EB5324',
                  color: 'white',
                  border: 'none',
                  borderRadius: '4px',
                  cursor: placementType === 'dropdown' && !parentDropdownId ? 'not-allowed' : 'pointer',
                }}
              >
                Add to Navbar
              </button>
            </div>
          </div>
        </div>
      )}

      <form onSubmit={saveCategory} style={{ display: 'flex', gap: 10, margin: '20px 0', flexWrap: 'wrap' }}>
        <input
          placeholder="Name (e.g. Office Sets)"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{ padding: 8, flex: 1, minWidth: '150px' }}
        />
        <input
          placeholder="Slug (e.g. office-sets)"
          value={slug}
          onChange={(e) => setSlug(e.target.value)}
          style={{ padding: 8, flex: 1, minWidth: '150px' }}
        />
        <button type="button" onClick={generateSlug} style={{ padding: '8px 12px' }}>
          Slug from Name
        </button>
        <button type="submit" style={{ padding: '8px 16px' }}>
          {editingId ? 'Update' : 'Add'}
        </button>
        {editingId && (
          <button type="button" onClick={cancelEdit} style={{ padding: '8px 16px' }}>
            Cancel
          </button>
        )}
      </form>

      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr style={{ textAlign: 'left', borderBottom: '1px solid #ccc' }}>
            <th style={{ padding: '8px' }}>Name</th>
            <th style={{ padding: '8px' }}>Slug</th>
            <th style={{ padding: '8px' }}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {categories.map((c) => (
            <tr key={c.id} style={{ borderBottom: '1px solid #eee' }}>
              <td style={{ padding: '8px' }}>{c.name}</td>
              <td style={{ padding: '8px' }}>{c.slug}</td>
              <td style={{ padding: '8px' }}>
                <button onClick={() => startEdit(c)} style={{ marginRight: 8, padding: '4px 8px' }}>
                  Edit
                </button>
                <button onClick={() => deleteCategory(c.id)} style={{ color: 'red', padding: '4px 8px' }}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
