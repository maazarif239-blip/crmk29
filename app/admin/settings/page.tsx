'use client'

import { useState, useEffect, useCallback } from 'react'
import { createClient } from '@/lib/supabase'
import { Save, Loader2 } from 'lucide-react'
import { useAuth } from '@/contexts/AuthContext'
import { useRouter } from 'next/navigation'
import { Setting } from '@/lib/types'

export default function SettingsPage() {
  const [settings, setSettings] = useState<Record<string, string>>({})
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [message, setMessage] = useState({ type: '', text: '' })
  const supabase = createClient()
  const { profile, isLoading: authLoading } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!authLoading && profile?.role !== 'admin') {
      router.push('/admin/dashboard')
    }
  }, [authLoading, profile, router])

  const fetchSettings = useCallback(async () => {
    const { data, error } = await supabase.from('settings').select('*')
    if (error) {
      console.error('Error fetching settings:', error)
    } else if (data) {
      const settingsMap: Record<string, string> = {}
      data.forEach((s) => {
        settingsMap[s.key] = s.value || ''
      })
      setSettings(settingsMap)
    }
    setLoading(false)
  }, [supabase])

  useEffect(() => {
    if (profile?.role === 'admin') {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      fetchSettings()
    }
  }, [fetchSettings, profile])

  const handleChange = useCallback((key: string, value: string) => {
    setSettings(prev => ({ ...prev, [key]: value }))
  }, [])

  const handleSave = useCallback(async (e: React.FormEvent) => {
    e.preventDefault()
    setSaving(true)
    setMessage({ type: '', text: '' })

    const updates: Setting[] = Object.entries(settings).map(([key, value]) => ({
      key,
      value,
      group_name: key.startsWith('meta_') || key === 'og_image' || key === 'canonical_url' || key === 'robots' || key === 'json_ld' ? 'seo' :
                  key.endsWith('_color') ? 'theme' : 'general',
      label: key.split('_').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' '),
      type: 'text'
    }))

    try {
      // Upsert settings
      const { error } = await supabase.from('settings').upsert(updates, { onConflict: 'key' })
      if (error) throw error
      setMessage({ type: 'success', text: 'Settings saved successfully' })
    } catch (err: any) {
      console.error(err)
      setMessage({ type: 'error', text: err.message || 'Failed to save settings' })
    } finally {
      setSaving(false)
    }
  }, [settings, supabase])

  if (loading || authLoading) {
    return <div className="flex items-center justify-center h-64"><Loader2 className="w-8 h-8 animate-spin text-gray-400" /></div>
  }

  if (profile?.role !== 'admin') return null

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900">Website Settings</h1>
        <button
          onClick={handleSave}
          disabled={saving}
          className="flex items-center px-4 py-2 bg-[#EB5324] text-white rounded-md hover:bg-[#d4481d] disabled:opacity-50"
        >
          {saving ? <Loader2 className="w-5 h-5 mr-2 animate-spin" /> : <Save className="w-5 h-5 mr-2" />}
          Save Changes
        </button>
      </div>

      {message.text && (
        <div className={`p-4 rounded-md ${message.type === 'success' ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'}`}>
          {message.text}
        </div>
      )}

      <form onSubmit={handleSave} className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* General Settings */}
        <div className="bg-white shadow rounded-lg p-6 space-y-4">
          <h2 className="text-xl font-semibold border-b pb-2">General Settings</h2>
          
          <div>
            <label className="block text-sm font-medium text-gray-700">Company Name</label>
            <input type="text" value={settings.company_name || ''} onChange={e => handleChange('company_name', e.target.value)} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#EB5324] focus:ring-[#EB5324] sm:text-sm p-2 border" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Phone</label>
            <input type="text" value={settings.phone || ''} onChange={e => handleChange('phone', e.target.value)} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#EB5324] focus:ring-[#EB5324] sm:text-sm p-2 border" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input type="email" value={settings.email || ''} onChange={e => handleChange('email', e.target.value)} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#EB5324] focus:ring-[#EB5324] sm:text-sm p-2 border" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Address</label>
            <textarea value={settings.address || ''} onChange={e => handleChange('address', e.target.value)} rows={3} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#EB5324] focus:ring-[#EB5324] sm:text-sm p-2 border" />
          </div>
          
          <h3 className="text-lg font-medium pt-4 border-t">Social Links</h3>
          <div>
            <label className="block text-sm font-medium text-gray-700">Facebook URL</label>
            <input type="url" value={settings.facebook_url || ''} onChange={e => handleChange('facebook_url', e.target.value)} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#EB5324] focus:ring-[#EB5324] sm:text-sm p-2 border" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Instagram URL</label>
            <input type="url" value={settings.instagram_url || ''} onChange={e => handleChange('instagram_url', e.target.value)} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#EB5324] focus:ring-[#EB5324] sm:text-sm p-2 border" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">LinkedIn URL</label>
            <input type="url" value={settings.linkedin_url || ''} onChange={e => handleChange('linkedin_url', e.target.value)} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#EB5324] focus:ring-[#EB5324] sm:text-sm p-2 border" />
          </div>
        </div>

        {/* SEO & Theme */}
        <div className="space-y-8">
          <div className="bg-white shadow rounded-lg p-6 space-y-4">
            <h2 className="text-xl font-semibold border-b pb-2">SEO Manager</h2>
            <div>
              <label className="block text-sm font-medium text-gray-700">Meta Title</label>
              <input type="text" value={settings.meta_title || ''} onChange={e => handleChange('meta_title', e.target.value)} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#EB5324] focus:ring-[#EB5324] sm:text-sm p-2 border" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Meta Description</label>
              <textarea value={settings.meta_description || ''} onChange={e => handleChange('meta_description', e.target.value)} rows={3} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#EB5324] focus:ring-[#EB5324] sm:text-sm p-2 border" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">OG Image URL</label>
              <input type="text" value={settings.og_image || ''} onChange={e => handleChange('og_image', e.target.value)} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#EB5324] focus:ring-[#EB5324] sm:text-sm p-2 border" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Canonical URL</label>
              <input type="url" value={settings.canonical_url || ''} onChange={e => handleChange('canonical_url', e.target.value)} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#EB5324] focus:ring-[#EB5324] sm:text-sm p-2 border" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Robots (e.g., index, follow)</label>
              <input type="text" value={settings.robots || ''} onChange={e => handleChange('robots', e.target.value)} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#EB5324] focus:ring-[#EB5324] sm:text-sm p-2 border" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">JSON-LD</label>
              <textarea value={settings.json_ld || ''} onChange={e => handleChange('json_ld', e.target.value)} rows={4} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#EB5324] focus:ring-[#EB5324] sm:text-sm p-2 border font-mono text-xs" />
            </div>
          </div>

          <div className="bg-white shadow rounded-lg p-6 space-y-4">
            <h2 className="text-xl font-semibold border-b pb-2">Theme Colors</h2>
            <div className="flex items-center space-x-4">
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-700">Primary Color</label>
                <div className="mt-1 flex items-center">
                  <input type="color" value={settings.primary_color || '#EB5324'} onChange={e => handleChange('primary_color', e.target.value)} className="h-10 w-10 p-0 border-0 rounded" />
                  <input type="text" value={settings.primary_color || ''} onChange={e => handleChange('primary_color', e.target.value)} className="ml-3 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#EB5324] focus:ring-[#EB5324] sm:text-sm p-2 border" placeholder="#EB5324" />
                </div>
              </div>
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-700">Secondary Color</label>
                <div className="mt-1 flex items-center">
                  <input type="color" value={settings.secondary_color || '#111827'} onChange={e => handleChange('secondary_color', e.target.value)} className="h-10 w-10 p-0 border-0 rounded" />
                  <input type="text" value={settings.secondary_color || ''} onChange={e => handleChange('secondary_color', e.target.value)} className="ml-3 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#EB5324] focus:ring-[#EB5324] sm:text-sm p-2 border" placeholder="#111827" />
                </div>
              </div>
            </div>
          </div>
        </div>

      </form>
    </div>
  )
}
