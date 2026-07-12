'use client';
import { useEffect, useState } from 'react';
import { createClient } from '@/lib/supabase/client';

type Category = { id: string; name: string };
type Product = { id: string; name: string; description: string | null; image_url: string | null; category_id: string | null; featured: boolean; categories?: { name: string } };

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [categoryId, setCategoryId] = useState('');
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);
  const [loading, setLoading] = useState(true);
  const [editingId, setEditingId] = useState<string | null>(null);
  const supabase = createClient();

  const fetchData = async () => {
    const { data: prods } = await supabase.from('products').select('*, categories(name)').order('created_at', { ascending: false });
    const { data: cats } = await supabase.from('categories').select('id, name').order('sort_order');
    setProducts(prods || []);
    setCategories(cats || []);
    setLoading(false);
  };

  useEffect(() => { fetchData(); }, []);

  const startEdit = (product: Product) => {
    setEditingId(product.id);
    setName(product.name);
    setDescription(product.description || '');
    setCategoryId(product.category_id || '');
  };

  const cancelEdit = () => {
    setEditingId(null);
    setName(''); setDescription(''); setCategoryId(''); setImageFile(null);
  };

  const saveProduct = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !categoryId) { alert('Name aur category zaroori hai'); return; }

    setUploading(true);
    let imageUrl = '';

    if (imageFile) {
      const fileName = `${Date.now()}-${imageFile.name}`;
      const { error: uploadError } = await supabase.storage.from('product-images').upload(fileName, imageFile);
      if (uploadError) { alert('Image upload failed: ' + uploadError.message); setUploading(false); return; }
      const { data: urlData } = supabase.storage.from('product-images').getPublicUrl(fileName);
      imageUrl = urlData.publicUrl;
    }

    if (editingId) {
      const updateData: any = { name, description, category_id: categoryId };
      if (imageUrl) updateData.image_url = imageUrl;
      const { error } = await supabase.from('products').update(updateData).eq('id', editingId);
      setUploading(false);
      if (error) { alert(error.message); return; }
      cancelEdit();
      fetchData();
    } else {
      const { error } = await supabase.from('products').insert({
        name, description, category_id: categoryId, image_url: imageUrl || null,
      });
      setUploading(false);
      if (error) { alert(error.message); return; }
      cancelEdit();
      fetchData();
    }
  };

  const deleteProduct = async (id: string) => {
    if (!confirm('Delete this product?')) return;
    await supabase.from('products').delete().eq('id', id);
    fetchData();
  };

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <h1>Products</h1>

      <form onSubmit={saveProduct} style={{ display: 'flex', flexDirection: 'column', gap: 10, maxWidth: 400, margin: '20px 0' }}>
        <input placeholder="Product Name" value={name} onChange={(e) => setName(e.target.value)} style={{ padding: 8 }} />
        <textarea placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} style={{ padding: 8 }} />
        <select value={categoryId} onChange={(e) => setCategoryId(e.target.value)} style={{ padding: 8 }}>
          <option value="">Select Category</option>
          {categories.map((c) => <option key={c.id} value={c.id}>{c.name}</option>)}
        </select>
        <input type="file" accept="image/*" onChange={(e) => setImageFile(e.target.files?.[0] || null)} />
        <button type="submit" disabled={uploading} style={{ padding: '8px 16px' }}>
          {uploading ? 'Saving...' : editingId ? 'Update Product' : 'Add Product'}
        </button>
        {editingId && (
          <button type="button" onClick={cancelEdit} style={{ padding: '8px 16px' }}>Cancel</button>
        )}
      </form>

      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr style={{ textAlign: 'left', borderBottom: '1px solid #ccc' }}>
            <th>Image</th><th>Name</th><th>Category</th><th></th>
          </tr>
        </thead>
        <tbody>
          {products.map((p) => (
            <tr key={p.id} style={{ borderBottom: '1px solid #eee' }}>
              <td>{p.image_url && <img src={p.image_url} alt={p.name} style={{ width: 50, height: 50, objectFit: 'cover' }} />}</td>
              <td>{p.name}</td>
              <td>{p.categories?.name || '-'}</td>
              <td>
                <button onClick={() => startEdit(p)} style={{ marginRight: 8 }}>Edit</button>
                <button onClick={() => deleteProduct(p.id)} style={{ color: 'red' }}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}