'use client';
import { useEffect, useState } from 'react';
import { createClient } from '@/lib/supabase/client';

type Category = { id: string; slug: string; name: string; description: string | null; sort_order: number };

export default function CategoriesPage() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [name, setName] = useState('');
  const [slug, setSlug] = useState('');
  const [loading, setLoading] = useState(true);
  const supabase = createClient();

  const fetchCategories = async () => {
    const { data } = await supabase.from('categories').select('*').order('sort_order');
    setCategories(data || []);
    setLoading(false);
  };

  useEffect(() => { fetchCategories(); }, []);

  const generateSlug = () => {
    const s = name.toLowerCase().trim().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
    setSlug(s);
  };

  const addCategory = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !slug) return;
    const { error } = await supabase.from('categories').insert({ name, slug });
    if (error) alert(error.message);
    else {
      setName(''); setSlug('');
      fetchCategories();
    }
  };

  const deleteCategory = async (id: string) => {
    if (!confirm('Delete this category?')) return;
    await supabase.from('categories').delete().eq('id', id);
    fetchCategories();
  };

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <h1>Categories</h1>
      <form onSubmit={addCategory} style={{ display: 'flex', gap: 10, margin: '20px 0' }}>
        <input placeholder="Name (e.g. Office Sets)" value={name} onChange={(e) => setName(e.target.value)} style={{ padding: 8 }} />
        <input placeholder="Slug (e.g. office-sets)" value={slug} onChange={(e) => setSlug(e.target.value)} style={{ padding: 8 }} />
        <button type="button" onClick={generateSlug} style={{ padding: '8px 12px' }}>Slug from Name</button>
        <button type="submit" style={{ padding: '8px 16px' }}>Add</button>
      </form>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr style={{ textAlign: 'left', borderBottom: '1px solid #ccc' }}>
            <th>Name</th><th>Slug</th><th></th>
          </tr>
        </thead>
        <tbody>
          {categories.map((c) => (
            <tr key={c.id} style={{ borderBottom: '1px solid #eee' }}>
              <td>{c.name}</td>
              <td>{c.slug}</td>
              <td><button onClick={() => deleteCategory(c.id)} style={{ color: 'red' }}>Delete</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}