'use client';
import { useEffect, useState, useCallback } from 'react';
import { createClient } from '@/lib/supabase/client';

type Category = { id: string; name: string };
type Product = {
  id: string;
  name: string;
  description: string | null;
  image_url: string | null;
  category_id: string | null;
  featured: boolean;
  sort_order: number;
  categories?: { name: string };
};

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [categoryId, setCategoryId] = useState('');
  const [featured, setFeatured] = useState(false);
  const [sortOrder, setSortOrder] = useState(0);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);
  const [loading, setLoading] = useState(true);
  const [editingId, setEditingId] = useState<string | null>(null);

  const fetchData = useCallback(async () => {
    const supabase = createClient();
    const { data: prods } = await supabase.from('products').select('*, categories(name)').order('sort_order', { ascending: true });
    const { data: cats } = await supabase.from('categories').select('id, name').order('sort_order');
    setProducts(prods || []);
    setCategories(cats || []);
    setLoading(false);
  }, []);

  useEffect(() => { fetchData(); }, [fetchData]);

  const startEdit = (product: Product) => {
    setEditingId(product.id);
    setName(product.name);
    setDescription(product.description || '');
    setCategoryId(product.category_id || '');
    setFeatured(product.featured || false);
    setSortOrder(product.sort_order || 0);
  };

  const cancelEdit = () => {
    setEditingId(null);
    setName(''); setDescription(''); setCategoryId(''); setFeatured(false);
    setSortOrder(0); setImageFile(null);
  };

  const saveProduct = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !categoryId) { alert('Name aur category zaroori hai'); return; }

    setUploading(true);
    const supabase = createClient();
    let imageUrl = '';

    if (imageFile) {
      const fileName = `${Date.now()}-${imageFile.name}`;
      const { error: uploadError } = await supabase.storage.from('product-images').upload(fileName, imageFile);
      if (uploadError) { alert('Image upload failed: ' + uploadError.message); setUploading(false); return; }
      const { data: urlData } = supabase.storage.from('product-images').getPublicUrl(fileName);
      imageUrl = urlData.publicUrl;
    }

    if (editingId) {
      const updateData: Record<string, unknown> = { name, description, category_id: categoryId, featured, sort_order: sortOrder };
      if (imageUrl) updateData.image_url = imageUrl;
      const { error } = await supabase.from('products').update(updateData).eq('id', editingId);
      setUploading(false);
      if (error) { alert(error.message); return; }
      cancelEdit(); fetchData();
    } else {
      const { error } = await supabase.from('products').insert({
        name, description, category_id: categoryId,
        image_url: imageUrl || null, featured, sort_order: sortOrder,
      });
      setUploading(false);
      if (error) { alert(error.message); return; }
      cancelEdit(); fetchData();
    }
  };

  const deleteProduct = async (id: string) => {
    if (!confirm('Delete this product?')) return;
    const supabase = createClient();
    await supabase.from('products').delete().eq('id', id);
    fetchData();
  };

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <h1>Products</h1>
      <form onSubmit={saveProduct} style={{ display: 'flex', flexDirection: 'column', gap: 10, maxWidth: 400, margin: '20px 0' }}>
        <input placeholder="Product Name" value={name} onChange={(e) => setName(e.target.value)} style={{ padding: 8 }} />
        <textarea placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} style={{ padding: 8, minHeight: 80 }} />
        <select value={categoryId} onChange={(e) => setCategoryId(e.target.value)} style={{ padding: 8 }}>
          <option value="">Select Category</option>
          {categories.map((c) => <option key={c.id} value={c.id}>{c.name}</option>)}
        </select>
        <input type="file" accept="image/*" onChange={(e) => setImageFile(e.target.files?.[0] || null)} />
        <label style={{ display: 'flex', alignItems: 'center', gap: 5, cursor: 'pointer' }}>
          <input type="checkbox" checked={featured} onChange={(e) => setFeatured(e.target.checked)} />
          <span style={{ fontSize: 14 }}>Featured Product</span>
        </label>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
          <label style={{ fontSize: 14, fontWeight: 'bold' }}>Display Order (lower shows first)</label>
          <input type="number" value={sortOrder} onChange={(e) => setSortOrder(Number(e.target.value))} style={{ padding: 8 }} placeholder="0" />
        </div>
        <button type="submit" disabled={uploading} style={{ padding: '8px 16px' }}>
          {uploading ? 'Saving...' : editingId ? 'Update Product' : 'Add Product'}
        </button>
        {editingId && <button type="button" onClick={cancelEdit} style={{ padding: '8px 16px' }}>Cancel</button>}
      </form>

      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr style={{ textAlign: 'left', borderBottom: '1px solid #ccc' }}>
            <th>Image</th><th>Name</th><th>Category</th><th>Order</th><th>Featured</th><th></th>
          </tr>
        </thead>
        <tbody>
          {products.map((p) => (
            <tr key={p.id} style={{ borderBottom: '1px solid #eee' }}>
              <td>{p.image_url && <img src={p.image_url} alt={p.name} style={{ width: 50, height: 50, objectFit: 'cover' }} />}</td>
              <td>{p.name}</td>
              <td>{p.categories?.name || '-'}</td>
              <td>{p.sort_order}</td>
              <td>
                {p.featured && (
                  <span style={{ backgroundColor: '#EB5324', color: 'white', padding: '2px 8px', borderRadius: 4, fontSize: 11, fontWeight: 'bold' }}>
                    FEATURED
                  </span>
                )}
              </td>
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
