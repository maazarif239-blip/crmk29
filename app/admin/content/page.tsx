'use client'

import { useState, useEffect } from 'react'
import { createClient } from '@/lib/supabase'
import { WebsiteContent } from '@/lib/types'
import { Loader2, Save, RefreshCw, Image, Edit } from 'lucide-react'

export default function ContentManagerPage() {
  const [content, setContent] = useState<WebsiteContent[]>([])
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState<string | null>(null)
  const [search, setSearch] = useState('')
  const [selectedGroup, setSelectedGroup] = useState<string>('all')
  const supabase = createClient()

  const fetchContent = async () => {
    setLoading(true)
    try {
      const { data, error } = await supabase
        .from('website_content')
        .select('*')
        .order('group_name', { ascending: true })
        .order('label', { ascending: true })
      
      if (error) throw error
      setContent(data || [])
    } catch (error) {
      console.error('Error fetching content:', error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    fetchContent()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const groups = ['all', ...Array.from(new Set(content.map(c => c.group_name).filter(Boolean)))]

  const handleChange = (id: string, value: string) => {
    setContent(content.map(c => 
      c.id === id ? { ...c, content_value: value } : c
    ))
  }

  const handleSave = async (item: WebsiteContent) => {
    setSaving(item.id)
    try {
      const { error } = await supabase
        .from('website_content')
        .update({ content_value: item.content_value })
        .eq('id', item.id)
      
      if (error) throw error
    } catch (error) {
      console.error('Error saving content:', error)
      alert('Error saving content')
    } finally {
      setSaving(null)
    }
  }

  const filteredContent = content.filter(c => {
    const matchesSearch = c.label.toLowerCase().includes(search.toLowerCase()) || 
                         c.content_key.toLowerCase().includes(search.toLowerCase())
    const matchesGroup = selectedGroup === 'all' || c.group_name === selectedGroup
    return matchesSearch && matchesGroup
  })

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
          <h1 className="text-2xl font-bold text-gray-900 tracking-tight">Content Manager</h1>
          <p className="text-gray-600 text-sm mt-1">Edit website content without touching code</p>
        </div>
        <button
          onClick={fetchContent}
          className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors text-sm"
        >
          <RefreshCw className="h-4 w-4" />
          Refresh
        </button>
      </div>

      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <input
            type="text"
            placeholder="Search content..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#EB5324] focus:border-transparent text-sm"
          />
          <Edit className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
        </div>
        <select
          value={selectedGroup}
          onChange={(e) => setSelectedGroup(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#EB5324] focus:border-transparent text-sm bg-white"
        >
          {groups.map(group => (
            <option key={group || 'null-group'} value={group || ''}>
              {group === 'all' ? 'All Groups' : (group || 'Uncategorized')}
            </option>
          ))}
        </select>
      </div>

      <div className="space-y-4">
        {filteredContent.map((item) => (
          <div key={item.id} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="font-semibold text-gray-900">{item.label}</h3>
                <p className="text-xs text-gray-500 mt-1">{item.content_key}</p>
                {item.description && (
                  <p className="text-xs text-gray-400 mt-1">{item.description}</p>
                )}
              </div>
              <div className="flex items-center gap-2">
                {item.group_name && (
                  <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">{item.group_name}</span>
                )}
                <span className="px-2 py-1 bg-blue-100 text-blue-600 text-xs rounded-full">{item.content_type}</span>
              </div>
            </div>

            {item.content_type === 'text' || item.content_type === 'html' ? (
              <textarea
                value={item.content_value || ''}
                onChange={(e) => handleChange(item.id, e.target.value)}
                rows={item.content_type === 'html' ? 8 : 3}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#EB5324] focus:border-transparent text-sm"
              />
            ) : item.content_type === 'image' ? (
              <div className="space-y-3">
                <input
                  type="text"
                  value={item.content_value || ''}
                  onChange={(e) => handleChange(item.id, e.target.value)}
                  placeholder="https://..."
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#EB5324] focus:border-transparent text-sm"
                />
                {item.content_value && (
                  <div className="h-32 bg-gray-100 rounded-md overflow-hidden border border-gray-200">
                    <img src={item.content_value} alt="" className="w-full h-full object-contain" />
                  </div>
                )}
              </div>
            ) : (
              <textarea
                value={item.content_value || ''}
                onChange={(e) => handleChange(item.id, e.target.value)}
                rows={4}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#EB5324] focus:border-transparent text-sm font-mono"
              />
            )}

            <div className="mt-4 flex justify-end">
              <button
                onClick={() => handleSave(item)}
                disabled={saving === item.id}
                className="flex items-center gap-2 px-4 py-2 bg-[#EB5324] text-white rounded-md hover:bg-[#d4481f] transition-colors text-sm disabled:opacity-50"
              >
                {saving === item.id ? (
                  <Loader2 className="h-4 w-4 animate-spin" />
                ) : (
                  <Save className="h-4 w-4" />
                )}
                Save
              </button>
            </div>
          </div>
        ))}
      </div>

      {filteredContent.length === 0 && (
        <div className="text-center py-12 text-gray-500">
          No content found
        </div>
      )}
    </div>
  )
}