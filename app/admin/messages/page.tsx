'use client';
import { useEffect, useState, useCallback } from 'react';
import { createClient } from '@/lib/supabase/client';

type ContactMessage = {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  is_read: boolean;
  created_at: string;
};

export default function MessagesPage() {
  const [messages, setMessages] = useState<ContactMessage[]>([]);
  const [loading, setLoading] = useState(true);
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const fetchMessages = useCallback(async () => {
    const supabase = createClient();
    const { data } = await supabase
      .from('contact_messages')
      .select('*')
      .order('created_at', { ascending: false });
    setMessages(data || []);
    setLoading(false);
  }, []);

  useEffect(() => { fetchMessages(); }, [fetchMessages]);

  const handleRowClick = async (msg: ContactMessage) => {
    if (!msg.is_read) {
      const supabase = createClient();
      await supabase.from('contact_messages').update({ is_read: true }).eq('id', msg.id);
      fetchMessages();
    }
    setExpandedId(expandedId === msg.id ? null : msg.id);
  };

  const deleteMessage = async (id: string) => {
    if (!confirm('Delete this message?')) return;
    const supabase = createClient();
    await supabase.from('contact_messages').delete().eq('id', id);
    if (expandedId === id) setExpandedId(null);
    fetchMessages();
  };

  const formatDate = (dateStr: string) => {
    return new Date(dateStr).toLocaleString('en-US', {
      month: 'short', day: 'numeric', year: 'numeric', hour: '2-digit', minute: '2-digit',
    });
  };

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <h1>Contact Messages ({messages.filter((m) => !m.is_read).length} unread)</h1>
      <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: 20 }}>
        <thead>
          <tr style={{ textAlign: 'left', borderBottom: '2px solid #ccc' }}>
            <th style={{ padding: '8px 4px' }}>Status</th>
            <th style={{ padding: '8px 4px' }}>Name</th>
            <th style={{ padding: '8px 4px' }}>Email</th>
            <th style={{ padding: '8px 4px' }}>Subject</th>
            <th style={{ padding: '8px 4px' }}>Date</th>
            <th style={{ padding: '8px 4px' }}></th>
          </tr>
        </thead>
        <tbody>
          {messages.map((msg) => (
            <>
              <tr
                key={msg.id}
                onClick={() => handleRowClick(msg)}
                style={{
                  borderBottom: '1px solid #eee',
                  cursor: 'pointer',
                  fontWeight: msg.is_read ? 'normal' : 'bold',
                  backgroundColor: msg.is_read ? 'transparent' : '#fffbeb',
                }}
              >
                <td style={{ padding: '12px 4px' }}>{msg.is_read ? '📭' : '📬'}</td>
                <td style={{ padding: '12px 4px' }}>{msg.name}</td>
                <td style={{ padding: '12px 4px' }}>{msg.email}</td>
                <td style={{ padding: '12px 4px' }}>{msg.subject}</td>
                <td style={{ padding: '12px 4px', fontSize: '0.9em', color: '#666' }}>
                  {formatDate(msg.created_at)}
                </td>
                <td style={{ padding: '12px 4px' }}>
                  <button
                    onClick={(e) => { e.stopPropagation(); deleteMessage(msg.id); }}
                    style={{ color: 'red', padding: '4px 8px' }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
              {expandedId === msg.id && (
                <tr key={`${msg.id}-expanded`}>
                  <td colSpan={6} style={{ padding: 20, backgroundColor: '#f9fafb', borderBottom: '2px solid #ddd' }}>
                    <div style={{ marginBottom: 10 }}><strong>From:</strong> {msg.name} ({msg.email})</div>
                    <div style={{ marginBottom: 10 }}><strong>Subject:</strong> {msg.subject}</div>
                    <div style={{ marginBottom: 10 }}><strong>Date:</strong> {formatDate(msg.created_at)}</div>
                    <div style={{ marginTop: 15, padding: 15, backgroundColor: 'white', borderLeft: '3px solid #3b82f6', whiteSpace: 'pre-wrap' }}>
                      {msg.message}
                    </div>
                  </td>
                </tr>
              )}
            </>
          ))}
        </tbody>
      </table>
      {messages.length === 0 && (
        <p style={{ textAlign: 'center', padding: 40, color: '#999' }}>No contact messages yet.</p>
      )}
    </div>
  );
}
