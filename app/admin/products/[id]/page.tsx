'use client'

import { useState, useEffect } from 'react'
import { useRouter, useParams } from 'next/navigation'
import { createClient } from '@/lib/supabase'
import { ArrowLeft, Save, Loader2, Image as ImageIcon, X } from 'lucide-react'
import Link from 'next/link'
import { Category } from '@/lib/types'

export default function EditProductPage() {
  const params = useParams()
  const router = useRouter()
  const isNew = params.id === 'new'
  const id = params.id as string

  const [loading, setLoading] = useState(!isNew)
  const [saving, setSaving] = useState(false)
  const [categories, setCategories] = useState<Category[]>([])
  
  const [formData, setFormData] = useState({
    title: '',
    slug: '',
    description: '',
    category_id: '',
    status: 'draft' as 'draft' | 'published',
    featured: false,
    seo_title: '',
    seo_description: '',
    main_image: '',
    gallery: [] as string[]
  })

  useEffect(() => {
    const supabase = createClient()
    
    const loadData = async () => {
      try {
        const { data: catData } = await supabase.from('categories').select('*')
        if (catData) setCategories(catData)

        if (!isNew) {
          const { data: prodData, error } = await supabase
            .from('products')
            .select('*')
            .eq('id', id)
            .single()
          
          if (error) throw error
          if (prodData) {
            setFormData({
              title: prodData.title,
              slug: prodData.slug,
              description: prodData.description || '',
              category_id: prodData.category_id || '',
              status: prodData.status,
              featured: prodData.featured,
              seo_title: prodData.seo_title || '',
              seo_description: prodData.seo_description || '',
              main_image: prodData.main_image || '',
              gallery: prodData.gallery || []
            })
          }
        }
      } catch (error) {
        console.error('Error loading data:', error)
      } finally {
        if (!isNew) setLoading(false)
      }
    }

    loadData()
  }, [isNew, id])

  const supabase = createClient()

  const handleSlugGenerate = () => {
    if (formData.title) {
      const slug = formData.title
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/(^-|-$)+/g, '')
      setFormData(prev => ({ ...prev, slug }))
    }
  }

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault()
    setSaving(true)
    
    try {
      const payload = {
        ...formData,
        category_id: formData.category_id || null
      }

      if (isNew) {
        const { error } = await supabase.from('products').insert([payload])
        if (error) throw error
        router.push('/admin/products')
      } else {
        const { error } = await supabase
          .from('products')
          .update(payload)
          .eq('id', id)
        if (error) throw error
        router.push('/admin/products')
      }
      router.refresh()
    } catch (error: any) {
      console.error('Error saving product:', error)
      alert(`Error saving product: ${error.message}`)
    } finally {
      setSaving(false)
    }
  }

  const addGalleryImage = () => {
    const url = prompt('Enter image URL:')
    if (url) {
      setFormData(prev => ({ ...prev, gallery: [...prev.gallery, url] }))
    }
  }

  const removeGalleryImage = (index: number) => {
    setFormData(prev => ({
      ...prev,
      gallery: prev.gallery.filter((_, i) => i !== index)
    }))
  }

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <Loader2 className="h-8 w-8 animate-spin text-[#EB5324]" />
      </div>
    )
  }

  return (
    <form onSubmit={handleSave} className="space-y-6 pb-20">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <Link href="/admin/products" className="p-2 bg-white border border-gray-200 rounded-md hover:bg-gray-50 transition-colors">
            <ArrowLeft className="h-4 w-4 text-gray-600" />
          </Link>
          <h1 className="text-2xl font-bold text-gray-900 tracking-tight">
            {isNew ? 'Add Product' : 'Edit Product'}
          </h1>
        </div>
        
        <div className="flex items-center gap-3 w-full sm:w-auto">
          <select
            value={formData.status}
            onChange={(e) => setFormData(prev => ({ ...prev, status: e.target.value as any }))}
            className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#EB5324] focus:border-transparent text-sm bg-white"
          >
            <option value="draft">Draft</option>
            <option value="published">Published</option>
          </select>
          <button
            type="submit"
            disabled={saving}
            className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-6 py-2 bg-[#EB5324] text-white rounded-md hover:bg-[#d4481f] transition-colors text-sm font-medium disabled:opacity-50"
          >
            {saving ? <Loader2 className="h-4 w-4 animate-spin" /> : <Save className="h-4 w-4" />}
            {saving ? 'Saving...' : 'Save'}
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          {/* Basic Info */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 space-y-4">
            <h2 className="text-lg font-bold text-gray-900 mb-4">Basic Information</h2>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
              <input
                type="text"
                required
                value={formData.title}
                onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#EB5324] focus:border-transparent text-sm"
              />
            </div>

            <div>
              <div className="flex justify-between items-center mb-1">
                <label className="block text-sm font-medium text-gray-700">Slug</label>
                <button type="button" onClick={handleSlugGenerate} className="text-xs text-[#EB5324] hover:underline">
                  Generate from title
                </button>
              </div>
              <input
                type="text"
                required
                value={formData.slug}
                onChange={(e) => setFormData(prev => ({ ...prev, slug: e.target.value }))}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#EB5324] focus:border-transparent text-sm"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
              <textarea
                rows={5}
                value={formData.description}
                onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#EB5324] focus:border-transparent text-sm"
              />
            </div>
          </div>

          {/* Media */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 space-y-6">
            <h2 className="text-lg font-bold text-gray-900 mb-4">Media</h2>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Main Image URL</label>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={formData.main_image}
                  onChange={(e) => setFormData(prev => ({ ...prev, main_image: e.target.value }))}
                  placeholder="https://..."
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#EB5324] focus:border-transparent text-sm"
                />
              </div>
              {formData.main_image && (
                <div className="mt-3 aspect-video max-w-xs relative rounded-lg overflow-hidden border border-gray-200 bg-gray-50">
                  <img src={formData.main_image} alt="Preview" className="w-full h-full object-contain" />
                </div>
              )}
            </div>

            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="block text-sm font-medium text-gray-700">Gallery</label>
                <button type="button" onClick={addGalleryImage} className="text-xs px-2 py-1 bg-gray-100 text-gray-700 rounded hover:bg-gray-200">
                  Add Image URL
                </button>
              </div>
              
              {formData.gallery.length > 0 ? (
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  {formData.gallery.map((url, i) => (
                    <div key={i} className="aspect-square relative rounded-lg overflow-hidden border border-gray-200 bg-gray-50 group">
                      <img src={url} alt={`Gallery ${i}`} className="w-full h-full object-cover" />
                      <button
                        type="button"
                        onClick={() => removeGalleryImage(i)}
                        className="absolute top-1 right-1 p-1 bg-red-600 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        <X className="h-3 w-3" />
                      </button>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-sm text-gray-500 italic p-4 bg-gray-50 rounded-md text-center border border-dashed border-gray-300">
                  No gallery images added yet.
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="space-y-6">
          {/* Organization */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 space-y-4">
            <h2 className="text-lg font-bold text-gray-900 mb-4">Organization</h2>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
              <select
                value={formData.category_id}
                onChange={(e) => setFormData(prev => ({ ...prev, category_id: e.target.value }))}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#EB5324] focus:border-transparent text-sm bg-white"
              >
                <option value="">Select Category...</option>
                {categories.map(c => (
                  <option key={c.id} value={c.id}>{c.name}</option>
                ))}
              </select>
            </div>

            <div className="pt-4 border-t border-gray-100">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={formData.featured}
                  onChange={(e) => setFormData(prev => ({ ...prev, featured: e.target.checked }))}
                  className="rounded border-gray-300 text-[#EB5324] focus:ring-[#EB5324] h-4 w-4"
                />
                <span className="text-sm font-medium text-gray-700">Featured Product</span>
              </label>
            </div>
          </div>

          {/* SEO */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 space-y-4">
            <h2 className="text-lg font-bold text-gray-900 mb-4">Search Engine Optimization</h2>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">SEO Title</label>
              <input
                type="text"
                value={formData.seo_title}
                onChange={(e) => setFormData(prev => ({ ...prev, seo_title: e.target.value }))}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#EB5324] focus:border-transparent text-sm"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">SEO Description</label>
              <textarea
                rows={3}
                value={formData.seo_description}
                onChange={(e) => setFormData(prev => ({ ...prev, seo_description: e.target.value }))}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#EB5324] focus:border-transparent text-sm"
              />
            </div>
          </div>
        </div>
      </div>
    </form>
  )
}
