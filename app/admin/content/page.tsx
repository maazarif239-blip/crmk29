'use client'

import { useState, useEffect, useMemo } from 'react'
import { createClient } from '@/lib/supabase'
import { WebsiteContent } from '@/lib/types'
import { Loader2, Save, RefreshCw, Plus, Trash2, X } from 'lucide-react'

const emptyNewItem: Omit<WebsiteContent, 'id' | 'updated_at'> = {
  key: '',
  content_value: '',
  group_name: '',
  label: '',
}

export default function ContentManagerPage() {
  const [content, setContent] = useState<WebsiteContent[]>([])
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState<string | null>(null)
  const [creating, setCreating] = useState(false)
  const [search, setSearch] = useState('')
  const [selectedGroup, setSelectedGroup] = useState<string>('all')
  const [newItem, setNewItem] = useState(emptyNewItem)
  const [createError, setCreateError] = useState<string | null>(null)
  const supabase = useMemo(() => createClient(), [])

  const fetchContent = async () => {
    setLoading(true)
    try {
      const { data, error } = await supabase
        .from('site_content')
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
    fetchContent()
  }, [])

  const groups = ['all', ...Array.from(new Set(content.map(c => c.group_name).filter((g): g is string => typeof g === 'string' && g !== '')))]

  const handleChange = (id: string, value: string) => {
    setContent(content.map(c => 
      c.id === id ? { ...c, content_value: value } : c
    ))
  }

  const handleSave = async (item: WebsiteContent) => {
    setSaving(item.id)
    try {
      const { error } = await supabase
        .from('site_content')
        .update({ content_value: item.content_value })
        .eq('id', item.id)
      
      if (error) throw error
      alert('Content saved successfully')
    } catch (error) {
      console.error('Error saving content:', error)
      alert('Error saving content')
    } finally {
      setSaving(null)
    }
  }

  const handleClear = async (id: string) => {
    const itemToUpdate = content.find(c => c.id === id)
    if (!itemToUpdate) return

    setSaving(id)
    try {
      const { error } = await supabase
        .from('site_content')
        .update({ content_value: '' })
        .eq('id', id)
      
      if (error) throw error
      setContent(content.map(c => c.id === id ? { ...c, content_value: '' } : c))
      alert('Content cleared successfully')
    } catch (error) {
      console.error('Error clearing content:', error)
      alert('Error clearing content')
    } finally {
      setSaving(null)
    }
  }

  const handleCreate = async () => {
    setCreateError(null)
    if (!newItem.key || !newItem.label) {
      setCreateError('Key and label are required.')
      return
    }

    // Check for duplicate key
    const duplicateKey = content.some(c => c.key === newItem.key)
    if (duplicateKey) {
      setCreateError('A content item with this key already exists. Please choose a unique key.')
      return
    }

    setCreating(true)
    try {
      const { data, error } = await supabase
        .from('site_content')
        .insert([newItem])
        .select()
        .single()

      if (error) throw error
      if (data) {
        setContent([data, ...content])
        setNewItem(emptyNewItem)
      }
    } catch (error) {
      console.error('Error creating content item:', error)
      setCreateError('Error creating content item. Please try again.')
    } finally {
      setCreating(false)
    }
  }

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this content item? This cannot be undone.')) return

    try {
      const { error } = await supabase
        .from('site_content')
        .delete()
        .eq('id', id)

      if (error) throw error
      setContent(content.filter(item => item.id !== id))
    } catch (error) {
      console.error('Error deleting content item:', error)
      alert('Error deleting content item')
    }
  }

  const filteredContent = content.filter(c => {
    const matchesSearch = [
      c.label,
      c.key,
      c.content_value,
      c.group_name,
    ]
    .filter(Boolean)
    .some(value => value?.toLowerCase().includes(search.toLowerCase()));
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
        <div className="flex-1">
          <label className="block text-sm font-medium text-gray-700 mb-1">Search</label>
          <div className="relative">
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search by key, label, value, or group..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#EB5324] focus:border-transparent text-sm"
            />
            {search && (
              <button
                onClick={() => setSearch('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
              >
                <X className="h-4 w-4" />
              </button>
            )}
          </div>
        </div>
        <div className="w-full sm:w-64">
          <label className="block text-sm font-medium text-gray-700 mb-1">Filter by group</label>
          <select
            value={selectedGroup}
            onChange={(e) => setSelectedGroup(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#EB5324] focus:border-transparent text-sm bg-white"
          >
            {groups.map(group => (
              <option key={group} value={group}>{group === 'all' ? 'All groups' : group}</option>
            ))}
          </select>
        </div>
      </div>

      <section className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
        <div className="flex flex-col lg:flex-row gap-4 lg:items-end justify-between mb-4">
          <div>
            <h2 className="text-lg font-semibold text-gray-900">Create new content item</h2>
            <p className="text-sm text-gray-500">Add an editable content entry that can be used across the website.</p>
          </div>
          <button
            onClick={handleCreate}
            disabled={creating}
            className="inline-flex items-center gap-2 px-4 py-2 bg-[#EB5324] text-white rounded-md hover:bg-[#d4481f] transition-colors text-sm disabled:opacity-50"
          >
            {creating ? <Loader2 className="h-4 w-4 animate-spin" /> : <Plus className="h-4 w-4" />}
            Create item
          </button>
        </div>

        {createError && (
          <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-md">
            <p className="text-sm text-red-700">{createError}</p>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <input
            value={newItem.key}
            onChange={(e) => setNewItem({ ...newItem, key: e.target.value })}
            placeholder="key"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#EB5324] focus:border-transparent text-sm"
          />
          <input
            value={newItem.label}
            onChange={(e) => setNewItem({ ...newItem, label: e.target.value })}
            placeholder="label"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#EB5324] focus:border-transparent text-sm"
          />
          <input
            value={newItem.group_name ?? ''}
            onChange={(e) => setNewItem({ ...newItem, group_name: e.target.value || null })}
            placeholder="group_name (optional)"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#EB5324] focus:border-transparent text-sm"
          />
        </div>

        <textarea
          value={newItem.content_value}
          onChange={(e) => setNewItem({ ...newItem, content_value: e.target.value })}
          rows={4}
          placeholder="content_value"
          className="w-full mt-4 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#EB5324] focus:border-transparent text-sm"
        />
      </section>

      <div className="space-y-4">
        {filteredContent.map((item) => (
          <div key={item.id} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="font-semibold text-gray-900">{item.label}</h3>
                <p className="text-xs text-gray-500 mt-1">{item.key}</p>
              </div>
              <div className="flex items-center gap-2">
                {item.group_name && (
                  <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">{item.group_name}</span>
                )}
                <button
                  onClick={() => handleClear(item.id)}
                  className="p-2 text-yellow-600 hover:text-yellow-800 transition-colors"
                  title="Clear text"
                >
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
                <button
                  onClick={() => handleDelete(item.id)}
                  className="p-2 text-red-600 hover:text-red-800 transition-colors"
                  title="Delete item permanently"
                >
                  <Trash2 className="h-4 w-4" />
                </button>
              </div>
            </div>

            <textarea
              value={item.content_value}
              onChange={(e) => handleChange(item.id, e.target.value)}
              rows={3}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#EB5324] focus:border-transparent text-sm"
            />

            <div className="mt-4 flex justify-end gap-3">
              <button
                onClick={() => handleClear(item.id)}
                disabled={saving === item.id}
                className="flex items-center gap-2 px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors text-sm disabled:opacity-50"
              >
                Clear text
              </button>
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