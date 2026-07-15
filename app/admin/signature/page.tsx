'use client';
import { useEffect, useState, useCallback } from 'react';
import { createClient } from '@/lib/supabase/client';

type SignatureItem = {
  id: string;
  name: string;
  description: string | null;
  image_url: string;
  sort_order: number;
};

export default function SignatureCollectionPage() {
  const [items, setItems] = useState<SignatureItem[]>([]);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [sortOrder, setSortOrder] = useState(0);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);
  const [loading, setLoading] = useState(true);
  const [editingId, setEditingId] = useState<string | null>(null);

  const fetchItems = useCallback(async () => {
    const supabase = createClient();
    const { data } = await supabase
      .from('signature_collection')
      .select('*')
      .order('sort_order', { ascending: true });
    setItems(data || []);
    setLoading(false);
  }, []);

  useEffect(() => {
    fetchItems();
  }, [fetchItems]);

  const startEdit = (item: SignatureItem) => {
    setEditingId(item.id);
    setName(item.name);
    setDescription(item.description || '');
    setSortOrder(item.sort_order || 0);
  };

  const cancelEdit = () => {
    setEditingId(null);
    setName('');
    setDescription('');
    setSortOrder(0);
    setImageFile(null);
  };

  const saveItem = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name) {
      alert('Name is required');
      return;
    }

    if (!editingId && !imageFile) {
      alert('Image is required for new items');
      return;
    }

    setUploading(true);
    const supabase = createClient();
    let imageUrl = '';

    if (imageFile) {
      const fileName = `${Date.now()}-${imageFile.name}`;
      const { error: uploadError } = await supabase.storage
        .from('product-images')
        .upload(fileName, imageFile);

      if (uploadError) {
        alert('Image upload failed: ' + uploadError.message);
        setUploading(false);
        return;
      }

      const { data: urlData } = supabase.storage
        .from('product-images')
        .getPublicUrl(fileName);
      imageUrl = urlData.publicUrl;
    }

    if (editingId) {
      const updateData: Record<string, unknown> = {
        name,
        description,
        sort_order: sortOrder,
      };
      if (imageUrl) updateData.image_url = imageUrl;

      const { error } = await supabase
        .from('signature_collection')
        .update(updateData)
        .eq('id', editingId);

      setUploading(false);
      if (error) {
        alert(error.message);
        return;
      }
      cancelEdit();
      fetchItems();
    } else {
      const { error } = await supabase.from('signature_collection').insert({
        name,
        description,
        image_url: imageUrl,
        sort_order: sortOrder,
      });

      setUploading(false);
      if (error) {
        alert(error.message);
        return;
      }
      cancelEdit();
      fetchItems();
    }
  };

  const deleteItem = async (id: string) => {
    if (!confirm('Delete this item?')) return;
    const supabase = createClient();
    await supabase.from('signature_collection').delete().eq('id', id);
    fetchItems();
  };

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Signature Collection</h1>

      <form
        onSubmit={saveItem}
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 10,
          maxWidth: 500,
          margin: '20px 0',
          padding: '20px',
          backgroundColor: '#f9f9f9',
          borderRadius: '8px',
        }}
      >
        <input
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{ padding: 8, borderRadius: 4, border: '1px solid #ddd' }}
          required
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          style={{ padding: 8, minHeight: 80, borderRadius: 4, border: '1px solid #ddd' }}
        />
        <div>
          <label style={{ display: 'block', marginBottom: 5, fontWeight: 'bold' }}>
            Image {editingId && '(leave empty to keep current)'}
          </label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setImageFile(e.target.files?.[0] || null)}
          />
        </div>
        <div>
          <label style={{ display: 'block', marginBottom: 5, fontWeight: 'bold' }}>
            Display Order
          </label>
          <input
            type="number"
            value={sortOrder}
            onChange={(e) => setSortOrder(Number(e.target.value))}
            style={{ padding: 8, borderRadius: 4, border: '1px solid #ddd', width: '100%' }}
          />
        </div>
        <div style={{ display: 'flex', gap: 10 }}>
          <button
            type="submit"
            disabled={uploading}
            style={{
              padding: '10px 20px',
              backgroundColor: uploading ? '#ccc' : '#EB5324',
              color: 'white',
              border: 'none',
              borderRadius: 4,
              cursor: uploading ? 'not-allowed' : 'pointer',
            }}
          >
            {uploading ? 'Saving...' : editingId ? 'Update Item' : 'Add Item'}
          </button>
          {editingId && (
            <button
              type="button"
              onClick={cancelEdit}
              style={{
                padding: '10px 20px',
                backgroundColor: '#666',
                color: 'white',
                border: 'none',
                borderRadius: 4,
                cursor: 'pointer',
              }}
            >
              Cancel
            </button>
          )}
        </div>
      </form>

      <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: 30 }}>
        <thead>
          <tr style={{ textAlign: 'left', borderBottom: '2px solid #ccc' }}>
            <th style={{ padding: 8 }}>Image</th>
            <th style={{ padding: 8 }}>Name</th>
            <th style={{ padding: 8 }}>Description</th>
            <th style={{ padding: 8 }}>Order</th>
            <th style={{ padding: 8 }}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.id} style={{ borderBottom: '1px solid #eee' }}>
              <td style={{ padding: 8 }}>
                <img
                  src={item.image_url}
                  alt={item.name}
                  style={{ width: 60, height: 60, objectFit: 'cover', borderRadius: 4 }}
                />
              </td>
              <td style={{ padding: 8 }}>{item.name}</td>
              <td style={{ padding: 8, maxWidth: 300 }}>
                {item.description || <em style={{ color: '#999' }}>No description</em>}
              </td>
              <td style={{ padding: 8 }}>{item.sort_order}</td>
              <td style={{ padding: 8 }}>
                <button
                  onClick={() => startEdit(item)}
                  style={{ marginRight: 8, padding: '6px 12px', cursor: 'pointer' }}
                >
                  Edit
                </button>
                <button
                  onClick={() => deleteItem(item.id)}
                  style={{ color: 'red', padding: '6px 12px', cursor: 'pointer' }}
                >
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
