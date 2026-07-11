import Link from 'next/link';
import { createClient } from '@/lib/supabase/server';
import { redirect } from 'next/navigation';

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ display: 'flex', minHeight: '100vh' }}>
      <aside style={{ width: 220, background: '#121212', color: '#fff', padding: 20 }}>
        <h3 style={{ marginBottom: 30 }}>HB Admin</h3>
        <nav style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          <Link href="/admin" style={{ color: '#ccc' }}>Dashboard</Link>
          <Link href="/admin/categories" style={{ color: '#ccc' }}>Categories</Link>
          <Link href="/admin/products" style={{ color: '#ccc' }}>Products</Link>
          <form action="/admin/logout" method="post">
            <button type="submit" style={{ marginTop: 20, color: '#EB5324', background: 'none', border: 'none', cursor: 'pointer' }}>
              Logout
            </button>
          </form>
        </nav>
      </aside>
      <main style={{ flex: 1, padding: 30 }}>{children}</main>
    </div>
  );
}