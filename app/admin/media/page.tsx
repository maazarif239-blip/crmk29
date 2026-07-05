'use client'

import { useState, useEffect, useMemo } from 'react'
import { createClient } from '@/lib/supabase'
import { Media } from '@/lib/types'
import { Trash2, Copy, Search, Loader2, Image as ImageIcon, FileText, RefreshCw } from 'lucide-react'

export default function MediaLibraryPage() {
  const [media, setMedia] = useState<Media[]>([])
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState('')
  const supabase = useMemo(() => createClient(), [])

  const fetchMedia = async () => {
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

  useEffect(() => {
    fetchMedia()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleDelete = async (id: string, filePath: string) => {
    if (!confirm('Are you sure you want to delete this image? It will be removed from storage and the library.')) return
    
    try {
      // Delete from DB
      const { error: dbError } = await supabase
        .from('media')
        .delete()
        .eq('id', id)
        
      if (dbError) throw dbError

      // Delete from storage
      if (filePath) {
        const { error: storageError } = await supabase.storage
          .from('media')
          .remove([filePath])

        if (storageError) {
          console.warn('Storage delete warning:', storageError)
        }
      }

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
    (m.file_name?.toLowerCase() || '').includes(search.toLowerCase()) ||
    (m.media_key?.toLowerCase() || '').includes(search.toLowerCase())
  )

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 tracking-tight">Media Library</h1>
          <p className="text-gray-500 text-sm mt-1">
            Images uploaded through products appear here automatically.
          </p>
        </div>
        
        <div className="flex items-center gap-3 w-full sm:w-auto">
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
          
          <button
            onClick={fetchMedia}
            disabled={loading}
            className="flex items-center gap-2 px-3 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors text-sm font-medium whitespace-nowrap disabled:opacity-50"
            title="Refresh"
          >
            <RefreshCw className={`h-4 w-4 ${loading ? 'animate-spin' : ''}`} />
          </button>
        </div>
      </div>

      {/* Stats bar */}
      <div className="flex gap-4 text-sm text-gray-500">
        <span>{media.length} file{media.length !== 1 ? 's' : ''} total</span>
        {search && <span>· {filteredMedia.length} matching</span>}
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
          <h3 className="text-lg font-medium text-gray-900 mb-1">
            {search ? 'No matching media' : 'No media files yet'}
          </h3>
          <p className="text-gray-500 text-sm">
            {search
              ? 'Try a different search term.'
              : 'Upload images through the Product editor — they will appear here automatically.'}
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {filteredMedia.map((item) => (
            <div key={item.id} className="bg-white border border-gray-200 rounded-lg overflow-hidden group">
              <div className="aspect-square relative bg-gray-100 flex items-center justify-center">
                {(item.mime_type || '').startsWith('image/') ? (
                  <img
                    src={item.public_url || item.file_url}
                    alt={item.file_name || item.title || ''}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <FileText className="h-10 w-10 text-gray-400" />
                )}
              </div>
              <div className="p-3">
                <p className="text-xs font-medium text-gray-900 truncate" title={item.file_name || item.title || ''}>
                  {item.file_name || item.title || 'Unnamed'}
                </p>
                {item.media_key && (
                  <p className="text-[10px] text-[#EB5324] mt-1 truncate" title={item.media_key}>
                    Key: {item.media_key}
                  </p>
                )}
                <div className="mt-2 flex gap-2">
                  <button 
                    onClick={() => copyToClipboard(item.public_url || item.file_url || '')}
                    className="p-1 bg-gray-100 text-gray-700 rounded hover:bg-gray-200 transition-colors"
                    title="Copy URL"
                  >
                    <Copy className="h-3 w-3" />
                  </button>
                  <button 
                    onClick={() => handleDelete(item.id, item.file_path || '')}
                    className="p-1 bg-red-100 text-red-700 rounded hover:bg-red-200 transition-colors"
                    title="Delete"
                  >
                    <Trash2 className="h-3 w-3" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
