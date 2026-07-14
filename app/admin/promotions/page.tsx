'use client';
import { useEffect, useState, useCallback } from 'react';
import { createClient } from '@/lib/supabase/client';
import { Megaphone, Trash2, Plus, Eye, EyeOff } from 'lucide-react';

type Promotion = {
  id: string;
  message: string;
  is_active: boolean;
  created_at: string;
};

export default function PromotionsPage() {
  const [promotions, setPromotions] = useState<Promotion[]>([]);
  const [loading, setLoading] = useState(true);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editMessage, setEditMessage] = useState('');

  const fetchPromotions = useCallback(async () => {
    const supabase = createClient();
    const { data } = await supabase
      .from('promotions')
      .select('*')
      .order('created_at', { ascending: false });
    setPromotions(data || []);
    setLoading(false);
  }, []);

  useEffect(() => { fetchPromotions(); }, [fetchPromotions]);

  const addPromotion = async () => {
    const message = prompt('Enter promotion message:');
    if (!message?.trim()) return;
    const supabase = createClient();
    const { error } = await supabase.from('promotions').insert({ message: message.trim(), is_active: false });
    if (error) alert('Error adding promotion: ' + error.message);
    else fetchPromotions();
  };

  const toggleActive = async (id: string, currentStatus: boolean) => {
    const supabase = createClient();
    if (!currentStatus) {
      await supabase.from('promotions').update({ is_active: false }).neq('id', id);
    }
    const { error } = await supabase.from('promotions').update({ is_active: !currentStatus }).eq('id', id);
    if (error) alert('Error updating promotion: ' + error.message);
    else fetchPromotions();
  };

  const startEdit = (promo: Promotion) => {
    setEditingId(promo.id);
    setEditMessage(promo.message);
  };

  const saveEdit = async (id: string) => {
    if (!editMessage.trim()) { alert('Message cannot be empty'); return; }
    const supabase = createClient();
    const { error } = await supabase.from('promotions').update({ message: editMessage.trim() }).eq('id', id);
    if (error) alert('Error updating: ' + error.message);
    else { setEditingId(null); setEditMessage(''); fetchPromotions(); }
  };

  const cancelEdit = () => { setEditingId(null); setEditMessage(''); };

  const deletePromotion = async (id: string) => {
    if (!confirm('Delete this promotion?')) return;
    const supabase = createClient();
    const { error } = await supabase.from('promotions').delete().eq('id', id);
    if (error) alert('Error deleting: ' + error.message);
    else fetchPromotions();
  };

  const formatDate = (dateStr: string) => {
    return new Date(dateStr).toLocaleDateString('en-US', {
      month: 'short', day: 'numeric', year: 'numeric', hour: '2-digit', minute: '2-digit',
    });
  };

  if (loading) {
    return <div className="flex items-center justify-center h-64"><p className="text-gray-500">Loading promotions...</p></div>;
  }

  const activePromo = promotions.find((p) => p.is_active);

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Promotion Banners</h1>
          <p className="text-gray-600">Manage sitewide promotion messages (only one can be active at a time)</p>
        </div>
        <button onClick={addPromotion} className="flex items-center gap-2 bg-[#EB5324] text-white px-4 py-2 rounded-lg hover:bg-[#d4481f] transition-colors">
          <Plus className="w-4 h-4" />
          Add Promotion
        </button>
      </div>

      {activePromo && (
        <div className="mb-6 bg-blue-50 border border-blue-200 rounded-lg p-4">
          <div className="flex items-start gap-3">
            <Megaphone className="w-5 h-5 text-blue-600 mt-0.5" />
            <div className="flex-1">
              <p className="text-sm font-medium text-blue-900 mb-1">Currently Active Banner</p>
              <div className="bg-[#EB5324] text-white text-center py-2 px-4 rounded font-bold text-sm">{activePromo.message}</div>
              <p className="text-xs text-blue-700 mt-2">This banner is visible on all pages across the website.</p>
            </div>
          </div>
        </div>
      )}

      <div className="space-y-3">
        {promotions.length === 0 ? (
          <div className="text-center py-12 bg-white rounded-lg shadow-sm border border-gray-200">
            <Megaphone className="w-12 h-12 text-gray-300 mx-auto mb-3" />
            <p className="text-gray-500 mb-4">No promotions yet. Click &quot;Add Promotion&quot; to create one.</p>
          </div>
        ) : (
          promotions.map((promo) => (
            <div key={promo.id} className={`bg-white rounded-lg shadow-sm border p-4 ${promo.is_active ? 'border-[#EB5324] ring-2 ring-[#EB5324] ring-opacity-20' : 'border-gray-200'}`}>
              <div className="flex items-start gap-4">
                <div className="pt-1">
                  <button
                    onClick={() => toggleActive(promo.id, promo.is_active)}
                    className={`p-2 rounded-lg transition-colors ${promo.is_active ? 'bg-green-100 text-green-700 hover:bg-green-200' : 'bg-gray-100 text-gray-400 hover:bg-gray-200'}`}
                    title={promo.is_active ? 'Active (click to deactivate)' : 'Inactive (click to activate)'}
                  >
                    {promo.is_active ? <Eye className="w-5 h-5" /> : <EyeOff className="w-5 h-5" />}
                  </button>
                </div>
                <div className="flex-1">
                  {editingId === promo.id ? (
                    <div className="space-y-3">
                      <input
                        type="text"
                        value={editMessage}
                        onChange={(e) => setEditMessage(e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#EB5324] focus:border-transparent"
                        placeholder="Promotion message..."
                        autoFocus
                      />
                      <div className="flex gap-2">
                        <button onClick={() => saveEdit(promo.id)} className="bg-green-600 text-white px-4 py-1.5 rounded text-sm hover:bg-green-700">Save</button>
                        <button onClick={cancelEdit} className="bg-gray-200 text-gray-700 px-4 py-1.5 rounded text-sm hover:bg-gray-300">Cancel</button>
                      </div>
                    </div>
                  ) : (
                    <>
                      <p className="font-medium text-gray-900 mb-1">{promo.message}</p>
                      <p className="text-xs text-gray-500">Created: {formatDate(promo.created_at)}</p>
                    </>
                  )}
                </div>
                {editingId !== promo.id && (
                  <div className="flex gap-2">
                    <button onClick={() => startEdit(promo)} className="text-blue-600 hover:text-blue-700 text-sm font-medium">Edit</button>
                    <button onClick={() => deletePromotion(promo.id)} className="text-red-600 hover:text-red-700"><Trash2 className="w-4 h-4" /></button>
                  </div>
                )}
              </div>
            </div>
          ))
        )}
      </div>

      <div className="mt-6 bg-amber-50 border border-amber-200 rounded-lg p-4">
        <div className="flex gap-3">
          <div className="text-amber-600 mt-0.5">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div className="flex-1">
            <p className="text-sm text-amber-900 font-medium mb-1">Important Notes</p>
            <ul className="text-xs text-amber-800 leading-relaxed space-y-1">
              <li>• Only ONE promotion can be active at a time</li>
              <li>• Activating a promotion automatically deactivates all others</li>
              <li>• The active banner appears at the top of every page on the website</li>
              <li>• Keep messages short and clear for best visibility</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
