'use client';
import { useEffect, useState, useCallback } from 'react';
import { createClient } from '@/lib/supabase/client';

type Logo = { id: string; name: string | null; image_url: string; sort_order: number };

export default function LogosPage() {
  const [logos, setLogos] = useState<Logo[]>([]);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);
  const [loading, setLoading] = useState(true);

  const fetchLogos = useCallback(async () => {
    const supabase = createClient();
    const { data } = await supabase.from('client_logos').select('*').order('sort_order');
    setLogos(data || []);
    setLoading(false);
  }, []);

  useEffect(() => { fetchLogos(); }, [fetchLogos]);

  const addLogo = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!imageFile) { alert('Logo image required'); return; }

    setUploading(true);
    const supabase = createClient();
    const fileName = `logo-${Date.now()}-${imageFile.name}`;
    const { error: uploadError } = await supabase.storage.from('product-images').upload(fileName, imageFile);
    if (uploadError) { alert('Upload failed: ' + uploadError.message); setUploading(false); return; }
    const { data: urlData } = supabase.storage.from('product-images').getPublicUrl(fileName);

    const { error } = await supabase.from('client_logos').insert({
      name: null,
      image_url: urlData.publicUrl,
    });

    setUploading(false);
    if (error) alert(error.message);
    else { setImageFile(null); fetchLogos(); }
  };

  const deleteLogo = async (id: string) => {
    if (!confirm('Delete this logo?')) return;
    const supabase = createClient();
    await supabase.from('client_logos').delete().eq('id', id);
    fetchLogos();
  };

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <h1>Client Logos</h1>
      <form onSubmit={addLogo} style={{ display: 'flex', flexDirection: 'column', gap: 10, maxWidth: 400, margin: '20px 0' }}>
        <input type="file" accept="image/*" onChange={(e) => setImageFile(e.target.files?.[0] || null)} required />
        <button type="submit" disabled={uploading} style={{ padding: '8px 16px' }}>
          {uploading ? 'Uploading...' : 'Add Client Logo'}
        </button>
      </form>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16 }}>
        {logos.map((logo) => (
          <div key={logo.id} style={{ border: '1px solid #eee', padding: 12, width: 140, textAlign: 'center' }}>
            <img src={logo.image_url} alt="Client logo" style={{ width: '100%', height: 60, objectFit: 'contain' }} />
            <button onClick={() => deleteLogo(logo.id)} style={{ color: 'red', marginTop: 8 }}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}
