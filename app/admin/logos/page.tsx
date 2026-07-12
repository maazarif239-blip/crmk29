'use client';
import { useEffect, useState } from 'react';
import { createClient } from '@/lib/supabase/client';

type Logo = { id: string; name: string | null; image_url: string; sort_order: number };

export default function LogosPage() {
  const [logos, setLogos] = useState<Logo[]>([]);
  const [name, setName] = useState('');
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);
  const [loading, setLoading] = useState(true);
  const supabase = createClient();

  const fetchLogos = async () => {
    const { data } = await supabase.from('client_logos').select('*').order('sort_order');
    setLogos(data || []);
    setLoading(false);
  };

  useEffect(() => { fetchLogos(); }, []);

  const addLogo = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!imageFile) { alert('Logo image zaroori hai'); return; }

    setUploading(true);
    const fileName = `logo-${Date.now()}-${imageFile.name}`;
    const { error: uploadError } = await supabase.storage.from('product-images').upload(fileName, imageFile);
    if (uploadError) { alert('Upload failed: ' + uploadError.message); setUploading(false); return; }
    const { data: urlData } = supabase.storage.from('product-images').getPublicUrl(fileName);

    const { error } = await supabase.from('client_logos').insert({
      name: name || null,
      image_url: urlData.publicUrl,
    });

    setUploading(false);
    if (error) alert(error.message);
    else {
      setName(''); setImageFile(null);
      fetchLogos();
    }
  };

  const deleteLogo = async (id: string) => {
    if (!confirm('Delete this logo?')) return;
    await supabase.from('client_logos').delete().eq('id', id);
    fetchLogos();
  };

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <h1>Client Logos</h1>

      <form onSubmit={addLogo} style={{ display: 'flex', flexDirection: 'column', gap: 10, maxWidth: 400, margin: '20px 0' }}>
        <input placeholder="Client Name (optional)" value={name} onChange={(e) => setName(e.target.value)} style={{ padding: 8 }} />
        <input type="file" accept="image/*" onChange={(e) => setImageFile(e.target.files?.[0] || null)} />
        <button type="submit" disabled={uploading} style={{ padding: '8px 16px' }}>
          {uploading ? 'Uploading...' : 'Add Logo'}
        </button>
      </form>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16 }}>
        {logos.map((logo) => (
          <div key={logo.id} style={{ border: '1px solid #eee', padding: 12, width: 140, textAlign: 'center' }}>
            <img src={logo.image_url} alt={logo.name || 'Client logo'} style={{ width: '100%', height: 60, objectFit: 'contain' }} />
            <p style={{ fontSize: 12, margin: '8px 0' }}>{logo.name || '-'}</p>
            <button onClick={() => deleteLogo(logo.id)} style={{ color: 'red' }}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}