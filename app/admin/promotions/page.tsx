'use client'

import { useState, useEffect } from 'react'
import { createClient } from '@/lib/supabase'
import { Promotion } from '@/lib/types'
import { Loader2, Plus, Save, Trash2, Edit, Check, X, Megaphone } from 'lucide-react'

type PromotionFormData = Partial<Promotion>

export default function PromotionsManagerPage() {
  const [promotions, setPromotions] = useState<Promotion[]>([])
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState<string | null>(null)
  const [showModal, setShowModal] = useState(false)
  const [editingId, setEditingId] = useState<string | null>(null)
  const [formData, setFormData] = useState<PromotionFormData>({
    title: '',
    type: 'announcement_bar',
    content: '',
    cta_text: '',
    cta_link: '',
    image_url: '',
    enabled: false,
    schedule_enabled: false,
    display_order: 0,
  })
  const supabase = createClient()

  useEffect(() => {
    fetchPromotions()
  }, [])

  const fetchPromotions = async () => {
    setLoading(true)
    try {
      const { data, error } = await supabase
        .from('promotions')
        .select('*')
        .order('display_order', { ascending: true })
      
      if (error) throw error
      setPromotions(data || [])
    } catch (error) {
      console.error('Error fetching promotions:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleEdit = (promotion: Promotion) => {
    setEditingId(promotion.id)
    setFormData(promotion)
    setShowModal(true)
  }

  const handleCreate = () => {
    setEditingId(null)
    setFormData({
      title: '',
      type: 'announcement_bar',
      content: '',
      cta_text: '',
      cta_link: '',
      image_url: '',
      enabled: false,
      schedule_enabled: false,
      display_order: promotions.length,
    })
    setShowModal(true)
  }

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this promotion?')) return
    
    try {
      const { error } = await supabase
        .from('promotions')
        .delete()
        .eq('id', id)
      
      if (error) throw error
      setPromotions(promotions.filter(p => p.id !== id))
    } catch (error) {
      console.error('Error deleting promotion:', error)
      alert('Error deleting promotion')
    }
  }

  const handleSave = async () => {
    setSaving(editingId || 'new')
    try {
      if (editingId) {
        const { error } = await supabase
          .from('promotions')
          .update(formData)
          .eq('id', editingId)
        
        if (error) throw error
        setPromotions(promotions.map(p => 
          p.id === editingId ? { ...p, ...formData } as Promotion : p
        ))
      } else {
        const { data, error } = await supabase
          .from('promotions')
          .insert([formData])
          .select()
        
        if (error) throw error
        if (data) setPromotions([...promotions, data[0]])
      }
      setShowModal(false)
    } catch (error) {
      console.error('Error saving promotion:', error)
      alert('Error saving promotion')
    } finally {
      setSaving(null)
    }
  }

  const toggleEnabled = async (id: string, enabled: boolean) => {
    try {
      const { error } = await supabase
        .from('promotions')
        .update({ enabled })
        .eq('id', id)
      
      if (error) throw error
      setPromotions(promotions.map(p => 
        p.id === id ? { ...p, enabled } : p
      ))
    } catch (error) {
      console.error('Error updating promotion:', error)
    }
  }

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <Loader2 className="h-8 w-8 animate-spin text-[#EB5324]" />
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 tracking-tight">Promotions Manager</h1>
          <p className="text-gray-600 text-sm mt-1">Manage announcements, banners, and popups</p>
        </div>
        <button
          onClick={handleCreate}
          className="flex items-center gap-2 px-4 py-2 bg-[#EB5324] text-white rounded-md hover:bg-[#d4481f] transition-colors text-sm font-medium"
        >
          <Plus className="h-4 w-4" />
          New Promotion
        </button>
      </div>

      <div className="grid gap-4">
        {promotions.map((promotion) => (
          <div key={promotion.id} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex justify-between items-start">
              <div>
                <div className="flex items-center gap-3">
                  <h3 className="font-semibold text-gray-900">{promotion.title}</h3>
                  <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">{promotion.type.replace('_', ' ')}</span>
                  {promotion.enabled ? (
                    <span className="px-2 py-1 bg-green-100 text-green-600 text-xs rounded-full">Enabled</span>
                  ) : (
                    <span className="px-2 py-1 bg-gray-100 text-gray-500 text-xs rounded-full">Disabled</span>
                  )}
                </div>
                {promotion.content && (
                  <p className="text-gray-600 text-sm mt-2">{promotion.content}</p>
                )}
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => toggleEnabled(promotion.id, !promotion.enabled)}
                  className={`p-2 rounded-md transition-colors ${
                    promotion.enabled 
                      ? 'text-green-600 hover:bg-green-50' 
                      : 'text-gray-400 hover:bg-gray-50'
                  }`}
                >
                  {promotion.enabled ? <Check className="h-4 w-4" /> : <X className="h-4 w-4" />}
                </button>
                <button
                  onClick={() => handleEdit(promotion)}
                  className="p-2 text-blue-600 hover:bg-blue-50 rounded-md transition-colors"
                >
                  <Edit className="h-4 w-4" />
                </button>
                <button
                  onClick={() => handleDelete(promotion.id)}
                  className="p-2 text-red-600 hover:bg-red-50 rounded-md transition-colors"
                >
                  <Trash2 className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {promotions.length === 0 && (
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-12 text-center">
          <Megaphone className="h-12 w-12 text-gray-300 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">No promotions yet</h3>
          <p className="text-gray-500 text-sm mb-4">Create your first promotion to get started</p>
          <button
            onClick={handleCreate}
            className="inline-flex items-center gap-2 px-4 py-2 bg-[#EB5324] text-white rounded-md hover:bg-[#d4481f] transition-colors text-sm font-medium"
          >
            <Plus className="h-4 w-4" />
            Create Promotion
          </button>
        </div>
      )}

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="bg-white rounded-xl shadow-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-xl font-semibold text-gray-900">
                {editingId ? 'Edit Promotion' : 'New Promotion'}
              </h2>
            </div>
            <div className="p-6 space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
                <input
                  type="text"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#EB5324] focus:border-transparent text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Type</label>
                <select
                  value={formData.type}
                  onChange={(e) => setFormData({ ...formData, type: e.target.value as any })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#EB5324] focus:border-transparent text-sm bg-white"
                >
                  <option value="announcement_bar">Announcement Bar</option>
                  <option value="popup">Popup</option>
                  <option value="banner">Banner</option>
                  <option value="sale_ribbon">Sale Ribbon</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Content</label>
                <textarea
                  value={formData.content || ''}
                  onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                  rows={4}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#EB5324] focus:border-transparent text-sm"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">CTA Text</label>
                  <input
                    type="text"
                    value={formData.cta_text || ''}
                    onChange={(e) => setFormData({ ...formData, cta_text: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#EB5324] focus:border-transparent text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">CTA Link</label>
                  <input
                    type="text"
                    value={formData.cta_link || ''}
                    onChange={(e) => setFormData({ ...formData, cta_link: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#EB5324] focus:border-transparent text-sm"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Image URL</label>
                <input
                  type="text"
                  value={formData.image_url || ''}
                  onChange={(e) => setFormData({ ...formData, image_url: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#EB5324] focus:border-transparent text-sm"
                />
              </div>
              <div className="flex items-center gap-4">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.enabled}
                    onChange={(e) => setFormData({ ...formData, enabled: e.target.checked })}
                    className="rounded border-gray-300 text-[#EB5324] focus:ring-[#EB5324] h-4 w-4"
                  />
                  <span className="text-sm text-gray-700">Enabled</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.schedule_enabled}
                    onChange={(e) => setFormData({ ...formData, schedule_enabled: e.target.checked })}
                    className="rounded border-gray-300 text-[#EB5324] focus:ring-[#EB5324] h-4 w-4"
                  />
                  <span className="text-sm text-gray-700">Schedule</span>
                </label>
              </div>
              {formData.schedule_enabled && (
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Start Date</label>
                    <input
                      type="datetime-local"
                      value={formData.start_date ? formData.start_date.slice(0, 16) : ''}
                      onChange={(e) => setFormData({ ...formData, start_date: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#EB5324] focus:border-transparent text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">End Date</label>
                    <input
                      type="datetime-local"
                      value={formData.end_date ? formData.end_date.slice(0, 16) : ''}
                      onChange={(e) => setFormData({ ...formData, end_date: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#EB5324] focus:border-transparent text-sm"
                    />
                  </div>
                </div>
              )}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Display Order</label>
                <input
                  type="number"
                  value={formData.display_order}
                  onChange={(e) => setFormData({ ...formData, display_order: parseInt(e.target.value) || 0 })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#EB5324] focus:border-transparent text-sm"
                />
              </div>
            </div>
            <div className="p-6 border-t border-gray-200 flex justify-end gap-3">
              <button
                onClick={() => setShowModal(false)}
                className="px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors text-sm"
              >
                Cancel
              </button>
              <button
                onClick={handleSave}
                disabled={!!saving}
                className="flex items-center gap-2 px-4 py-2 bg-[#EB5324] text-white rounded-md hover:bg-[#d4481f] transition-colors text-sm disabled:opacity-50"
              >
                {saving ? (
                  <Loader2 className="h-4 w-4 animate-spin" />
                ) : (
                  <Save className="h-4 w-4" />
                )}
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}