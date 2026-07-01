'use client'

import { useState, useEffect, useRef } from 'react'
import { createClient } from '@/lib/supabase'
import { Media } from '@/lib/types'
import { Upload, Trash2, Copy, Search, Loader2, Image as ImageIcon, FileText } from 'lucide-react'
import Image from 'next/image'

export default function MediaLibraryPage() {
  const [media, setMedia] = useState<Media[]>([])
  const [loading, setLoading] = useState(true)
  const [uploading, setUploading] = useState(false)
  const [search, setSearch] = useState('')
  const fileInputRef = useRef<HTMLInputElement>(null)
  const supabase = createClient()

  useEffect(() => {
    const fetchMedia = async () => {
      try {
        const { data, error } = await supabase
          .from('media')
          .select('*')
          .order('created_at', { ascending: false })

        if (error) throw error
        setMedia(data || [])
      } catch (error) {
        console.error('Error fetching media:', error)
        alert('Error fetching media')
      } finally {
        setLoading(false)
      }
    }

    fetchMedia()
  }, [supabase])

  const fetchMediaManual = async () => {
    setLoading(true)
    try {
      const { data, error } = await supabase
        .from('media')
        .select('*')
        .order('created_at', { ascending: false })

      if (error) throw error
      setMedia(data || [])
    } catch (error) {
      console.error('Error fetching media:', error)
      alert('Error fetching media')
    } finally {
      setLoading(false)
    }
  }

  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || e.target.files.length === 0) return
    
    setUploading(true)
    const files = Array.from(e.target.files)
    
    for (const file of files) {
      try {
        const fileExt = file.name.split('.').pop()
        const fileName = `${Math.random().toString(36).substring(2, 15)}_${Date.now()}.${fileExt}`
        const filePath = `${fileName}`

        // Upload to storage
        const { error: uploadError } = await supabase.storage
          .from('media')
          .upload(filePath, file)

        if (uploadError) throw uploadError

        // Get public URL
        const { data: { publicUrl } } = supabase.storage
          .from('media')
          .getPublicUrl(filePath)

        // Save to DB
        const { error: dbError } = await supabase
          .from('media')
          .insert({
            file_name: file.name,
            file_path: filePath,
            file_size: file.size,
            mime_type: file.type,
            public_url: publicUrl
          })

        if (dbError) throw dbError

      } catch (error) {
        console.error('Error uploading file:', error)
        alert(`Error uploading ${file.name}`)
      }
    }
    
    setUploading(false)
    if (fileInputRef.current) fileInputRef.current.value = ''
    fetchMediaManual()
  }

  const handleDelete = async (id: string, filePath: string) => {
    if (!confirm('Are you sure you want to delete this image?')) return
    
    try {
      // Delete from DB
      const { error: dbError } = await supabase
        .from('media')
        .delete()
        .eq('id', id)
        
      if (dbError) throw dbError

      // Delete from storage
      const { error: storageError } = await supabase.storage
        .from('media')
        .remove([filePath])

      if (storageError) throw storageError

      setMedia(media.filter(m => m.id !== id))
    } catch (error) {
      console.error('Error deleting media:', error)
      alert('Error deleting media')
    }
  }

  const copyToClipboard = (url: string) => {
    navigator.clipboard.writeText(url)
    alert('URL copied to clipboard!')
  }

  const filteredMedia = media.filter(m => 
    m.file_name.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <h1 className="text-2xl font-bold text-gray-900 tracking-tight">Media Library</h1>
        
        <div className="flex items-center gap-4 w-full sm:w-auto">
          <div className="relative flex-1 sm:w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search media..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-[#EB5324] focus:border-transparent text-sm"
            />
          </div>
          
          <input 
            type="file" 
            ref={fileInputRef} 
            onChange={handleUpload} 
            multiple 
            accept="image/*" 
            className="hidden" 
          />
          <button
            onClick={() => fileInputRef.current?.click()}
            disabled={uploading}
            className="flex items-center gap-2 px-4 py-2 bg-[#EB5324] text-white rounded-md hover:bg-[#d4481f] transition-colors text-sm font-medium whitespace-nowrap disabled:opacity-50"
          >
            {uploading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Upload className="h-4 w-4" />}
            {uploading ? 'Uploading...' : 'Upload Files'}
          </button>
        </div>
      </div>

      {loading ? (
        <div className="flex justify-center items-center h-64">
          <Loader2 className="h-8 w-8 animate-spin text-[#EB5324]" />
        </div>
      ) : filteredMedia.length === 0 ? (
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-12 text-center">
          <div className="mx-auto w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
            <ImageIcon className="h-8 w-8 text-gray-400" />
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-1">No media files</h3>
          <p className="text-gray-500 text-sm mb-4">Upload some images to get started.</p>
          <button
            onClick={() => fileInputRef.current?.click()}
            className="px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors text-sm font-medium"
          >
            Upload Files
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {filteredMedia.map((item) => (
            <div key={item.id} className="bg-white border border-gray-200 rounded-lg overflow-hidden group">
              <div className="aspect-square relative bg-gray-100 flex items-center justify-center">
                {item.mime_type.startsWith('image/') ? (
                  <img
                    src={item.public_url}
                    alt={item.file_name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <FileText className="h-10 w-10 text-gray-400" />
                )}
                
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                  <button 
                    onClick={() => copyToClipboard(item.public_url)}
                    className="p-2 bg-white text-gray-900 rounded-full hover:bg-gray-100 transition-colors"
                    title="Copy URL"
                  >
                    <Copy className="h-4 w-4" />
                  </button>
                  <button 
                    onClick={() => handleDelete(item.id, item.file_path)}
                    className="p-2 bg-red-600 text-white rounded-full hover:bg-red-700 transition-colors"
                    title="Delete"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              </div>
              <div className="p-3">
                <p className="text-xs font-medium text-gray-900 truncate" title={item.file_name}>
                  {item.file_name}
                </p>
                <p className="text-[10px] text-gray-500 mt-1">
                  {(item.file_size / 1024).toFixed(1)} KB
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
