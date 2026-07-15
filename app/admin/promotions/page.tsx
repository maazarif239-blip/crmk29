'use client';
import { useEffect, useState, useCallback } from 'react';
import { createClient } from '@/lib/supabase/client';
import { Megaphone, Trash2, Plus, Eye, EyeOff } from 'lucide-react';

type Promotion = {
  id: string;
  message: string;
  cta_text: string | null;
  cta_link: string | null;
  is_active: boolean;
  created_at: string;
};

export default function PromotionsPage() {
  const [promotions, setPromotions] = useState<Promotion[]>([]);
  const [loading, setLoading] = useState(true);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [showAddForm, setShowAddForm] = useState(false);

  // Add form state
  const [addMessage, setAddMessage] = useState('');
  const [addHasCTA, setAddHasCTA] = useState(false);
  const [addCtaText, setAddCtaText] = useState('');
  const [addCtaLink, setAddCtaLink] = useState('');

  // Edit form state
  const [editMessage, setEditMessage] = useState('');
  const [editHasCTA, setEditHasCTA] = useState(false);
  const [editCtaText, setEditCtaText] = useState('');
  const [editCtaLink, setEditCtaLink] = useState('');

  const fetchPromotions = useCallback(async () => {
    const supabase = createClient();
    const { data } = await supabase
      .from('promotions')
      .select('*')
      .order('created_at', { ascending: false });
    setPromotions(data || []);
    setLoading(false);
  }, []);

  useEffect(() => {
    fetchPromotions();
  }, [fetchPromotions]);

  const resetAddForm = () => {
    setAddMessage('');
    setAddHasCTA(false);
    setAddCtaText('');
    setAddCtaLink('');
    setShowAddForm(false);
  };

  const addPromotion = async () => {
    if (!addMessage.trim()) {
      alert('Message is required');
      return;
    }
    const supabase = createClient();
    const { error } = await supabase.from('promotions').insert({
      message: addMessage.trim(),
      cta_text: addHasCTA ? addCtaText.trim() || null : null,
      cta_link: addHasCTA ? addCtaLink.trim() || null : null,
      is_active: false,
    });
    if (error) alert('Error adding promotion: ' + error.message);
    else {
      resetAddForm();
      fetchPromotions();
    }
  };

  const toggleActive = async (id: string, currentStatus: boolean) => {
    const supabase = createClient();
    if (!currentStatus) {
      await supabase.from('promotions').update({ is_active: false }).neq('id', id);
    }
    const { error } = await supabase
      .from('promotions')
      .update({ is_active: !currentStatus })
      .eq('id', id);
    if (error) alert('Error updating promotion: ' + error.message);
    else fetchPromotions();
  };

  const startEdit = (promo: Promotion) => {
    setEditingId(promo.id);
    setEditMessage(promo.message);
    setEditHasCTA(!!(promo.cta_text && promo.cta_link));
    setEditCtaText(promo.cta_text || '');
    setEditCtaLink(promo.cta_link || '');
  };

  const saveEdit = async (id: string) => {
    if (!editMessage.trim()) {
      alert('Message cannot be empty');
      return;
    }
    const supabase = createClient();
    const { error } = await supabase.from('promotions').update({
      message: editMessage.trim(),
      cta_text: editHasCTA ? editCtaText.trim() || null : null,
      cta_link: editHasCTA ? editCtaLink.trim() || null : null,
    }).eq('id', id);
    if (error) alert('Error updating: ' + error.message);
    else {
      setEditingId(null);
      fetchPromotions();
    }
  };

  const cancelEdit = () => {
    setEditingId(null);
  };

  const deletePromotion = async (id: string) => {
    if (!confirm('Delete this promotion?')) return;
    const supabase = createClient();
    const { error } = await supabase.from('promotions').delete().eq('id', id);
    if (error) alert('Error deleting: ' + error.message);
    else fetchPromotions();
  };

  const formatDate = (dateStr: string) =>
    new Date(dateStr).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });

  if (loading)
    return (
      <div className="flex items-center justify-center h-64">
        <p className="text-gray-500">Loading promotions...</p>
      </div>
    );

  const activePromo = promotions.find((p) => p.is_active);

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Promotion Banners</h1>
          <p className="text-gray-600">
            Manage sitewide promotion messages (only one can be active at a time)
          </p>
        </div>
        <button
          onClick={() => setShowAddForm(!showAddForm)}
          className="flex items-center gap-2 bg-[#EB5324] text-white px-4 py-2 rounded-lg hover:bg-[#d4481f] transition-colors"
        >
          <Plus className="w-4 h-4" />
          Add Promotion
        </button>
      </div>

      {/* Add Form */}
      {showAddForm && (
        <div className="mb-6 bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h3 className="font-bold text-gray-900 mb-4">New Promotion</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Message <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                value={addMessage}
                onChange={(e) => setAddMessage(e.target.value)}
                placeholder="Enter promotion message..."
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#EB5324] focus:border-transparent"
              />
            </div>

            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={addHasCTA}
                onChange={(e) => setAddHasCTA(e.target.checked)}
                className="w-4 h-4 text-[#EB5324] border-gray-300 rounded focus:ring-[#EB5324]"
              />
              <span className="text-sm font-medium text-gray-700">Add CTA button</span>
            </label>

            {addHasCTA && (
              <div className="space-y-4 pl-6 border-l-2 border-[#EB5324]">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    CTA Text
                  </label>
                  <input
                    type="text"
                    value={addCtaText}
                    onChange={(e) => setAddCtaText(e.target.value)}
                    placeholder="e.g. Shop Now"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#EB5324] focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    CTA Link
                  </label>
                  <input
                    type="text"
                    value={addCtaLink}
                    onChange={(e) => setAddCtaLink(e.target.value)}
                    placeholder="https://..."
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#EB5324] focus:border-transparent"
                  />
                </div>
              </div>
            )}

            <div className="flex gap-2 pt-4">
              <button
                onClick={addPromotion}
                className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors"
              >
                Save
              </button>
              <button
                onClick={resetAddForm}
                className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-300 transition-colors"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Active Banner Preview */}
      {activePromo && (
        <div className="mb-6 bg-blue-50 border border-blue-200 rounded-lg p-4">
          <div className="flex items-start gap-3 mb-3">
            <Megaphone className="w-5 h-5 text-blue-600 mt-0.5" />
            <div className="flex-1">
              <p className="text-sm font-medium text-blue-900">Currently Active Banner Preview</p>
            </div>
          </div>

          {/* Preview matching real banner */}
          <div className="bg-[#EB5324] text-white rounded-lg p-4 overflow-hidden">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-[#EB5324] via-[#FF6B3D] to-[#EB5324] opacity-40"></div>
              <div className="relative">
                {activePromo.cta_text && activePromo.cta_link ? (
                  <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                    <div className="px-5 py-2 border-2 border-white text-white rounded-full font-semibold text-sm whitespace-nowrap">
                      {activePromo.cta_text}
                    </div>
                    <p className="font-bold text-sm md:text-base tracking-wide text-center md:text-right">
                      {activePromo.message}
                    </p>
                  </div>
                ) : (
                  <p className="font-bold text-sm md:text-base tracking-wide text-center">{activePromo.message}</p>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Promotions List */}
      <div className="space-y-3">
        {promotions.length === 0 ? (
          <div className="text-center py-12 bg-white rounded-lg shadow-sm border border-gray-200">
            <Megaphone className="w-12 h-12 text-gray-300 mx-auto mb-3" />
            <p className="text-gray-500 mb-4">No promotions yet. Click &quot;Add Promotion&quot; to create one.</p>
          </div>
        ) : (
          promotions.map((promo) => (
            <div
              key={promo.id}
              className={`bg-white rounded-lg shadow-sm border p-4 ${
                promo.is_active ? 'border-[#EB5324] ring-2 ring-[#EB5324] ring-opacity-20' : 'border-gray-200'
              }`}
            >
              <div className="flex items-start gap-4">
                <button
                  onClick={() => toggleActive(promo.id, promo.is_active)}
                  className={`p-2 rounded-lg transition-colors flex-shrink-0 ${
                    promo.is_active
                      ? 'bg-green-100 text-green-700 hover:bg-green-200'
                      : 'bg-gray-100 text-gray-400 hover:bg-gray-200'
                  }`}
                  title={promo.is_active ? 'Active' : 'Inactive'}
                >
                  {promo.is_active ? (
                    <Eye className="w-5 h-5" />
                  ) : (
                    <EyeOff className="w-5 h-5" />
                  )}
                </button>

                <div className="flex-1 min-w-0">
                  {editingId === promo.id ? (
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Message
                        </label>
                        <input
                          type="text"
                          value={editMessage}
                          onChange={(e) => setEditMessage(e.target.value)}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#EB5324] focus:border-transparent"
                          autoFocus
                        />
                      </div>

                      <label className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={editHasCTA}
                          onChange={(e) => setEditHasCTA(e.target.checked)}
                          className="w-4 h-4 text-[#EB5324] border-gray-300 rounded focus:ring-[#EB5324]"
                        />
                        <span className="text-sm font-medium text-gray-700">Has CTA button</span>
                      </label>

                      {editHasCTA && (
                        <div className="space-y-3 pl-6 border-l-2 border-[#EB5324]">
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                              CTA Text
                            </label>
                            <input
                              type="text"
                              value={editCtaText}
                              onChange={(e) => setEditCtaText(e.target.value)}
                              placeholder="e.g. Shop Now"
                              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#EB5324] focus:border-transparent"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                              CTA Link
                            </label>
                            <input
                              type="text"
                              value={editCtaLink}
                              onChange={(e) => setEditCtaLink(e.target.value)}
                              placeholder="https://..."
                              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#EB5324] focus:border-transparent"
                            />
                          </div>
                        </div>
                      )}

                      <div className="flex gap-2 pt-2">
                        <button
                          onClick={() => saveEdit(promo.id)}
                          className="bg-green-600 text-white px-4 py-1.5 rounded text-sm hover:bg-green-700 transition-colors"
                        >
                          Save
                        </button>
                        <button
                          onClick={cancelEdit}
                          className="bg-gray-200 text-gray-700 px-4 py-1.5 rounded text-sm hover:bg-gray-300 transition-colors"
                        >
                          Cancel
                        </button>
                      </div>
                    </div>
                  ) : (
                    <>
                      <p className="font-medium text-gray-900 mb-1">{promo.message}</p>
                      {promo.cta_text && (
                        <div className="mb-2">
                          <span className="inline-block bg-[#EB5324] text-white text-xs font-semibold px-3 py-1 rounded-full">
                            {promo.cta_text}
                          </span>
                          {promo.cta_link && (
                            <p className="text-xs text-gray-500 mt-1">Link: {promo.cta_link}</p>
                          )}
                        </div>
                      )}
                      <p className="text-xs text-gray-500">Created: {formatDate(promo.created_at)}</p>
                    </>
                  )}
                </div>

                {editingId !== promo.id && (
                  <div className="flex gap-2 flex-shrink-0">
                    <button
                      onClick={() => startEdit(promo)}
                      className="text-blue-600 text-sm font-medium hover:text-blue-700 transition-colors"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => deletePromotion(promo.id)}
                      className="text-red-600 hover:text-red-700 transition-colors"
                      title="Delete"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
