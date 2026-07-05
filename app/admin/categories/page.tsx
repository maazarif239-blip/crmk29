'use client'

import { useState, useEffect, useMemo } from 'react'
import { createClient } from '@/lib/supabase'
import { Category } from '@/lib/types'
import { Plus, Search, Pencil, Trash2, Loader2, X, Check } from 'lucide-react'

export default function CategoriesPage() {
  const [categories, setCategories] = useState<Category[]>([])
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState('')
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [editingCategory, setEditingCategory] = useState<Category | null>(null)
  const [formData, setFormData] = useState({
    name: '',
    slug: '',
    sort_order: 0
  })
  const [saving, setSaving] = useState(false)
  const supabase = useMemo(() => createClient(), [])

  const fetchCategories = async () => {
    setLoading(true)
    try {
      const { data, error } = await supabase
        .from('categories')
        .select('*')
        .order('sort_order', { ascending: true })
      
      if (error) throw error
      setCategories(data || [])
    } catch (error) {
      console.error('Error fetching categories:', error)
      alert('Error fetching categories')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchCategories()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleSlugGenerate = () => {
    if (formData.name) {
      const slug = formData.name
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/(^-|-$)+/g, '')
      setFormData(prev => ({ ...prev, slug }))
    }
  }

  const handleOpenModal = (category?: Category) => {
    if (category) {
      setEditingCategory(category)
      setFormData({
        name: category.name,
        slug: category.slug,
        sort_order: category.sort_order
      })
    } else {
      setEditingCategory(null)
      setFormData({
        name: '',
        slug: '',
        sort_order: categories.length
      })
    }
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setEditingCategory(null)
    setFormData({
      name: '',
      slug: '',
      sort_order: 0
    })
  }

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault()
    setSaving(true)
    
    try {
      const desiredOrder = formData.sort_order

      if (editingCategory) {
        // Update the category's own data first
        const { error } = await supabase
          .from('categories')
          .update({ name: formData.name, slug: formData.slug, sort_order: desiredOrder })
          .eq('id', editingCategory.id)
        if (error) throw error

        // Rebuild the sequence: take all categories, apply the edit, then re-sequence
        const updated = categories.map(c =>
          c.id === editingCategory.id ? { ...c, ...formData, sort_order: desiredOrder } : c
        )
        await resequenceCategories(updated, editingCategory.id, desiredOrder)
      } else {
        // Insert new category
        const { data, error } = await supabase
          .from('categories')
          .insert([{ name: formData.name, slug: formData.slug, sort_order: desiredOrder }])
          .select()
        if (error) throw error

        if (data) {
          const all = [...categories, data[0]]
          await resequenceCategories(all, data[0].id, desiredOrder)
        }
      }

      handleCloseModal()
      await fetchCategories()
    } catch (error: any) {
      console.error('Error saving category:', error)
      alert(`Error saving category: ${error.message}`)
    } finally {
      setSaving(false)
    }
  }

  /**
   * Resequences all categories to maintain a contiguous 0-based order with no gaps or duplicates.
   * The category identified by `priorityId` gets the `desiredOrder` slot.
   * All others shift around it to fill the sequence.
   */
  const resequenceCategories = async (allCategories: Category[], priorityId: string, desiredOrder: number) => {
    // Clamp desired order to valid range
    const maxOrder = allCategories.length - 1
    const clampedOrder = Math.max(0, Math.min(desiredOrder, maxOrder))

    // Separate the priority item from the rest
    const priorityItem = allCategories.find(c => c.id === priorityId)
    const others = allCategories.filter(c => c.id !== priorityId)

    // Sort the others by their current sort_order
    others.sort((a, b) => a.sort_order - b.sort_order)

    // Build the final ordered array by inserting the priority item at the desired position
    const finalOrder: Category[] = []
    let otherIdx = 0
    for (let i = 0; i <= maxOrder; i++) {
      if (i === clampedOrder && priorityItem) {
        finalOrder.push(priorityItem)
      } else {
        if (otherIdx < others.length) {
          finalOrder.push(others[otherIdx])
          otherIdx++
        }
      }
    }
    // If there are remaining others (edge case), append them
    while (otherIdx < others.length) {
      finalOrder.push(others[otherIdx])
      otherIdx++
    }

    // Update each category's sort_order in the database if it changed
    for (let i = 0; i < finalOrder.length; i++) {
      if (finalOrder[i].sort_order !== i) {
        await supabase
          .from('categories')
          .update({ sort_order: i })
          .eq('id', finalOrder[i].id)
      }
    }
  }

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this category?')) return
    
    try {
      const { error } = await supabase
        .from('categories')
        .delete()
        .eq('id', id)
        
      if (error) throw error

      // After delete, resequence the remaining categories to fill the gap
      const remaining = categories.filter(c => c.id !== id).sort((a, b) => a.sort_order - b.sort_order)
      for (let i = 0; i < remaining.length; i++) {
        if (remaining[i].sort_order !== i) {
          await supabase
            .from('categories')
            .update({ sort_order: i })
            .eq('id', remaining[i].id)
        }
      }

      await fetchCategories()
    } catch (error) {
      console.error('Error deleting category:', error)
      alert('Error deleting category')
    }
  }

  const filteredCategories = categories.filter(c => {
    return (c.name.toLowerCase().includes(search.toLowerCase()) || 
            c.slug.toLowerCase().includes(search.toLowerCase()))
  })

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <h1 className="text-2xl font-bold text-gray-900 tracking-tight">Categories</h1>
        <button 
          onClick={() => handleOpenModal()}
          className="flex items-center gap-2 px-4 py-2 bg-[#EB5324] text-white rounded-md hover:bg-[#d4481f] transition-colors text-sm font-medium"
        >
          <Plus className="h-4 w-4" />
          Add Category
        </button>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        {/* Toolbar */}
        <div className="p-4 border-b border-gray-200 bg-gray-50/50">
          <div className="relative w-full sm:w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search categories..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#EB5324] focus:border-transparent text-sm w-full"
            />
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Order
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Name
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Slug
                </th>
                <th scope="col" className="relative px-6 py-3 w-20">
                  <span className="sr-only">Actions</span>
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {loading ? (
                <tr>
                  <td colSpan={4} className="px-6 py-12 text-center">
                    <Loader2 className="h-6 w-6 animate-spin text-[#EB5324] mx-auto" />
                  </td>
                </tr>
              ) : filteredCategories.length === 0 ? (
                <tr>
                  <td colSpan={4} className="px-6 py-12 text-center text-sm text-gray-500">
                    No categories found.
                  </td>
                </tr>
              ) : (
                filteredCategories.map((category) => (
                  <tr key={category.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-gray-100 text-sm font-semibold text-gray-700">
                        {category.sort_order}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm font-medium text-gray-900">{category.name}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      /{category.slug}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <div className="flex items-center justify-end gap-2">
                        <button onClick={() => handleOpenModal(category)} className="text-indigo-600 hover:text-indigo-900">
                          <Pencil className="h-4 w-4" />
                        </button>
                        <button onClick={() => handleDelete(category.id)} className="text-red-600 hover:text-red-900">
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="bg-white rounded-xl shadow-xl w-full max-w-lg max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-gray-200 flex justify-between items-center">
              <h2 className="text-xl font-semibold text-gray-900">
                {editingCategory ? 'Edit Category' : 'Add Category'}
              </h2>
              <button 
                onClick={handleCloseModal}
                className="p-1 text-gray-500 hover:text-gray-700"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <form onSubmit={handleSave} className="p-6 space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#EB5324] focus:border-transparent text-sm"
                />
              </div>

              <div>
                <div className="flex justify-between items-center mb-1">
                  <label className="block text-sm font-medium text-gray-700">Slug</label>
                  <button type="button" onClick={handleSlugGenerate} className="text-xs text-[#EB5324] hover:underline">
                    Generate from name
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
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Display Order
                  <span className="text-gray-400 font-normal ml-1">(0 = first)</span>
                </label>
                <input
                  type="number"
                  min={0}
                  max={editingCategory ? categories.length - 1 : categories.length}
                  value={formData.sort_order}
                  onChange={(e) => setFormData(prev => ({ ...prev, sort_order: parseInt(e.target.value) || 0 }))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#EB5324] focus:border-transparent text-sm"
                />
                <p className="text-xs text-gray-400 mt-1">
                  Other categories will shift automatically to maintain order.
                </p>
              </div>

              <div className="flex justify-end gap-3 pt-4">
                <button
                  type="button"
                  onClick={handleCloseModal}
                  className="px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors text-sm font-medium"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={saving}
                  className="flex items-center gap-2 px-4 py-2 bg-[#EB5324] text-white rounded-md hover:bg-[#d4481f] transition-colors text-sm font-medium disabled:opacity-50"
                >
                  {saving ? <Loader2 className="h-4 w-4 animate-spin" /> : <Check className="h-4 w-4" />}
                  {saving ? 'Saving...' : 'Save'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}
