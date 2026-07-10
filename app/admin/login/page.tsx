'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { createClient } from '@/lib/supabase/client';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    const supabase = createClient();
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) setError(error.message);
    else {
      router.push('/admin');
      router.refresh();
    }
  };

  return (
    <div style={{ display: 'flex', minHeight: '100vh', alignItems: 'center', justifyContent: 'center' }}>
      <form onSubmit={handleLogin} style={{ width: 320 }}>
        <h2>Admin Login</h2>
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required style={{ width: '100%', padding: 8, marginBottom: 10 }} />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required style={{ width: '100%', padding: 8, marginBottom: 10 }} />
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <button type="submit" style={{ width: '100%', padding: 10 }}>Login</button>
      </form>
    </div>
  );
}