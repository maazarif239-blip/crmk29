'use client'

import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { useParams, usePathname, useRouter } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, Image as ImageIcon, Loader2, Save, Upload, X } from 'lucide-react'
import { createClient } from '@/lib/supabase'
import { uploadMediaLibraryFile } from '@/lib/storage'
import { Category } from '@/lib/types'

type ProductFormData = {
  name: string
  slug: string
  description: string
  category_id: string
  status: 'draft' | 'published'
  featured: boolean
  main_image: string
  featured_image: string
  gallery: string[]
}

const getUniqueImages = (images: Array<string | null | undefined>) =>
  Array.from(new Set(images.filter((image): image is string => Boolean(image?.trim()))))

const buildMediaState = (
  images: string[],
  featuredImage?: string,
  mainImage?: string
) => {
  const uniqueImages = getUniqueImages(images)
  const resolvedFeatured =
    featuredImage && uniqueImages.includes(featuredImage)
      ? featuredImage
      : uniqueImages[0] || ''
  const resolvedMain =
    mainImage && uniqueImages.includes(mainImage)
      ? mainImage
      : uniqueImages.find((image) => image !== resolvedFeatured) || resolvedFeatured || ''

  return {
    featured_image: resolvedFeatured,
    main_image: resolvedMain,
    gallery: uniqueImages.filter(
      (image) => image !== resolvedFeatured && image !== resolvedMain
    )
  }
}

function EditProductInner() {
  const params = useParams()
  const router = useRouter()
  const pathname = usePathname()
  const idFromParams = params.id as string | undefined
  const isNew = pathname?.endsWith('/products/new') ?? false
  const isValidProductId =
    !isNew && idFromParams && idFromParams !== 'undefined' && idFromParams.trim() !== ''

  const [loading, setLoading] = useState(isValidProductId)
  const [saving, setSaving] = useState(false)
  const [isDragging, setIsDragging] = useState(false)
  const [uploadProgress, setUploadProgress] = useState<Record<string, number>>({})
  const [uploadError, setUploadError] = useState<string | null>(null)
  const [categories, setCategories] = useState<Category[]>([])
  const fileInputRef = useRef<HTMLInputElement>(null)

  const [formData, setFormData] = useState<ProductFormData>({
    name: '',
    slug: '',
    description: '',
    category_id: '',
    status: 'draft',
    featured: false,
    main_image: '',
    featured_image: '',
    gallery: []
  })

  const supabase = useMemo(() => createClient(), [])

  useEffect(() => {
    const loadData = async () => {
      try {
        const { data: catData } = await supabase.from('categories').select('*')
        if (catData) setCategories(catData)

        if (isValidProductId && idFromParams) {
          const { data: prodData, error } = await supabase
            .from('products')
            .select('*')
            .eq('id', idFromParams)
            .single()

          if (error) throw error

          if (prodData) {
            const initialImages = getUniqueImages([
              prodData.featured_image,
              prodData.main_image,
              ...(prodData.gallery || [])
            ])

            setFormData({
              name: prodData.name || '',
              slug: prodData.slug || '',
              description: prodData.description || '',
              category_id: prodData.category_id || '',
              status: prodData.status || 'draft',
              featured: Boolean(prodData.featured),
              ...buildMediaState(
                initialImages,
                prodData.featured_image || '',
                prodData.main_image || ''
              )
            })
          }
        }
      } catch (error) {
        console.error('Error loading data:', error)
      } finally {
        setLoading(false)
      }
    }

    loadData()
  }, [idFromParams, isValidProductId, supabase])

  const attachedImages = useMemo(
    () =>
      getUniqueImages([
        formData.featured_image,
        formData.main_image,
        ...formData.gallery
      ]),
    [formData.featured_image, formData.gallery, formData.main_image]
  )

  const activeUploads = useMemo(
    () =>
      Object.entries(uploadProgress).map(([name, progress]) => ({
        name,
        progress
      })),
    [uploadProgress]
  )

  const setProductImages = useCallback(
    (
      updater: (current: {
        images: string[]
        featuredImage: string
        mainImage: string
      }) => { images: string[]; featuredImage?: string; mainImage?: string }
    ) => {
      setFormData((prev) => {
        const current = {
          images: getUniqueImages([
            prev.featured_image,
            prev.main_image,
            ...prev.gallery
          ]),
          featuredImage: prev.featured_image,
          mainImage: prev.main_image
        }
        const next = updater(current)

        return {
          ...prev,
          ...buildMediaState(next.images, next.featuredImage, next.mainImage)
        }
      })
    },
    []
  )

  const handleSlugGenerate = useCallback(() => {
    if (!formData.name) return

    const slug = formData.name
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)+/g, '')

    setFormData((prev) => ({ ...prev, slug }))
  }, [formData.name])

  const handleFilesUpload = useCallback(
    async (files: FileList | File[]) => {
      const fileArray = Array.from(files)
      if (!fileArray.length) return

      setUploadError(null)

      for (const file of fileArray) {
        const uploadKey = `${file.name}-${file.lastModified}-${file.size}`

        try {
          setUploadProgress((prev) => ({ ...prev, [uploadKey]: 0 }))

          const { storageFile } = await uploadMediaLibraryFile(
            file,
            'products',
            (progress) => {
              setUploadProgress((prev) => ({ ...prev, [uploadKey]: progress }))
            }
          )

          setProductImages((current) => ({
            images: [...current.images, storageFile.publicUrl],
            featuredImage: current.featuredImage || storageFile.publicUrl,
            mainImage: current.mainImage || storageFile.publicUrl
          }))
        } catch (error) {
          console.error('Error uploading product image:', error)
          setUploadError(
            error instanceof Error
              ? error.message
              : `Failed to upload ${file.name}`
          )
        } finally {
          setUploadProgress((prev) => {
            const next = { ...prev }
            delete next[uploadKey]
            return next
          })
        }
      }
    },
    [setProductImages]
  )

  const handleRemoveImage = useCallback(
    (imageUrl: string) => {
      setProductImages((current) => {
        const remainingImages = current.images.filter((image) => image !== imageUrl)

        return {
          images: remainingImages,
          featuredImage:
            current.featuredImage === imageUrl ? undefined : current.featuredImage,
          mainImage: current.mainImage === imageUrl ? undefined : current.mainImage
        }
      })
    },
    [setProductImages]
  )

  const handleSetFeaturedImage = useCallback(
    (imageUrl: string) => {
      setProductImages((current) => ({
        images: current.images,
        featuredImage: imageUrl,
        mainImage: current.mainImage
      }))
    },
    [setProductImages]
  )

  const handleSetMainImage = useCallback(
    (imageUrl: string) => {
      setProductImages((current) => ({
        images: current.images,
        featuredImage: current.featuredImage,
        mainImage: imageUrl
      }))
    },
    [setProductImages]
  )

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault()
    setSaving(true)

    try {
      const payload = {
        ...formData,
        category_id:
          formData.category_id && formData.category_id.trim() !== ''
            ? formData.category_id
            : null
      }

      if (isNew) {
        const { data, error } = await supabase
          .from('products')
          .insert([payload])
          .select('*')
          .single()

        if (error) throw error

        const {
          data: { user }
        } = await supabase.auth.getUser()

        if (user && data) {
          const { error: logError } = await supabase.from('activity_log').insert([
            {
              action: 'Product added',
              entity_type: 'product',
              entity_id: data.id,
              performed_by: user.id
            }
          ])

          if (logError) {
            console.error('Error creating activity log entry:', logError)
          }
        }
      } else {
        if (!isValidProductId || !idFromParams) {
          throw new Error('Cannot update product: invalid product ID')
        }

        const { error } = await supabase
          .from('products')
          .update(payload)
          .eq('id', idFromParams)

        if (error) throw error
      }

      router.push('/admin/products')
      router.refresh()
    } catch (error: any) {
      console.error('Error saving product:', error)
      alert(`Error saving product: ${error.message}`)
    } finally {
      setSaving(false)
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
    <form onSubmit={handleSave} className="space-y-6 pb-20">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <Link
            href="/admin/products"
            className="p-2 bg-white border border-gray-200 rounded-md hover:bg-gray-50 transition-colors"
          >
            <ArrowLeft className="h-4 w-4 text-gray-600" />
          </Link>
          <h1 className="text-2xl font-bold text-gray-900 tracking-tight">
            {isNew ? 'Add Product' : 'Edit Product'}
          </h1>
        </div>

        <div className="flex items-center gap-3 w-full sm:w-auto">
          <select
            value={formData.status}
            onChange={(e) =>
              setFormData((prev) => ({
                ...prev,
                status: e.target.value as 'draft' | 'published'
              }))
            }
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
            {saving ? (
              <Loader2 className="h-4 w-4 animate-spin" />
            ) : (
              <Save className="h-4 w-4" />
            )}
            {saving ? 'Saving...' : 'Save'}
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 space-y-4">
            <h2 className="text-lg font-bold text-gray-900 mb-4">Basic Information</h2>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, name: e.target.value }))
                }
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#EB5324] focus:border-transparent text-sm"
              />
            </div>

            <div>
              <div className="flex justify-between items-center mb-1">
                <label className="block text-sm font-medium text-gray-700">Slug</label>
                <button
                  type="button"
                  onClick={handleSlugGenerate}
                  className="text-xs text-[#EB5324] hover:underline"
                >
                  Generate from name
                </button>
              </div>
              <input
                type="text"
                required
                value={formData.slug}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, slug: e.target.value }))
                }
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#EB5324] focus:border-transparent text-sm"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
              <textarea
                rows={5}
                value={formData.description}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    description: e.target.value
                  }))
                }
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#EB5324] focus:border-transparent text-sm"
              />
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 space-y-6">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h2 className="text-lg font-bold text-gray-900">Media</h2>
                <p className="text-sm text-gray-500 mt-1">
                  Drag images here or browse to upload them to the Media Library and
                  attach them to this product automatically.
                </p>
              </div>
            </div>

            <div
              onDragOver={(e) => {
                e.preventDefault()
                e.stopPropagation()
                setIsDragging(true)
              }}
              onDragLeave={(e) => {
                e.preventDefault()
                e.stopPropagation()
                setIsDragging(false)
              }}
              onDrop={(e) => {
                e.preventDefault()
                e.stopPropagation()
                setIsDragging(false)
                if (e.dataTransfer.files?.length) {
                  void handleFilesUpload(e.dataTransfer.files)
                }
              }}
              className={`rounded-xl border-2 border-dashed p-8 transition-colors ${
                isDragging
                  ? 'border-[#EB5324] bg-[#EB5324]/5'
                  : 'border-gray-300 bg-gray-50/60'
              }`}
            >
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                multiple
                className="hidden"
                onChange={(e) => {
                  if (e.target.files?.length) {
                    void handleFilesUpload(e.target.files)
                    e.target.value = ''
                  }
                }}
              />

              <div className="flex flex-col items-center text-center gap-4">
                <div className="h-14 w-14 rounded-full bg-white border border-gray-200 flex items-center justify-center">
                  <Upload className="h-6 w-6 text-[#EB5324]" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">
                    Drag & drop images here
                  </p>
                  <p className="text-xs text-gray-500 mt-1">
                    Supports multiple JPG, PNG, WEBP, and SVG files up to 20MB.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                  className="inline-flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-md bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
                >
                  <Upload className="h-4 w-4" />
                  Browse Files
                </button>
              </div>
            </div>

            {uploadError && (
              <div className="rounded-md border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                {uploadError}
              </div>
            )}

            {activeUploads.length > 0 && (
              <div className="space-y-3">
                {activeUploads.map((upload) => (
                  <div
                    key={upload.name}
                    className="rounded-lg border border-gray-200 bg-gray-50 px-4 py-3"
                  >
                    <div className="flex items-center justify-between gap-4 text-sm">
                      <span className="font-medium text-gray-700 truncate">
                        {upload.name}
                      </span>
                      <span className="text-gray-500">
                        {Math.round(upload.progress)}%
                      </span>
                    </div>
                    <div className="mt-2 h-2 overflow-hidden rounded-full bg-gray-200">
                      <div
                        className="h-full bg-[#EB5324] transition-all duration-200"
                        style={{ width: `${upload.progress}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            )}

            {attachedImages.length > 0 ? (
              <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
                {attachedImages.map((imageUrl) => (
                  <div
                    key={imageUrl}
                    className="rounded-xl overflow-hidden border border-gray-200 bg-white"
                  >
                    <div className="aspect-square bg-gray-50">
                      <img
                        src={imageUrl}
                        alt="Product media"
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="p-3 space-y-3">
                      <div className="flex flex-wrap gap-2">
                        {formData.featured_image === imageUrl && (
                          <span className="inline-flex rounded-full bg-[#EB5324]/10 px-2 py-1 text-[10px] font-semibold uppercase tracking-wide text-[#EB5324]">
                            Featured
                          </span>
                        )}
                        {formData.main_image === imageUrl && (
                          <span className="inline-flex rounded-full bg-gray-100 px-2 py-1 text-[10px] font-semibold uppercase tracking-wide text-gray-700">
                            Card
                          </span>
                        )}
                      </div>

                      <div className="grid grid-cols-2 gap-2">
                        <button
                          type="button"
                          onClick={() => handleSetFeaturedImage(imageUrl)}
                          className="px-2 py-2 rounded-md border border-gray-300 text-xs font-medium text-gray-700 hover:bg-gray-50"
                        >
                          Set Featured
                        </button>
                        <button
                          type="button"
                          onClick={() => handleSetMainImage(imageUrl)}
                          className="px-2 py-2 rounded-md border border-gray-300 text-xs font-medium text-gray-700 hover:bg-gray-50"
                        >
                          Set Card
                        </button>
                      </div>

                      <button
                        type="button"
                        onClick={() => handleRemoveImage(imageUrl)}
                        className="w-full inline-flex items-center justify-center gap-2 rounded-md border border-red-200 bg-red-50 px-3 py-2 text-xs font-medium text-red-700 hover:bg-red-100"
                      >
                        <X className="h-3.5 w-3.5" />
                        Remove
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="rounded-lg border border-dashed border-gray-300 bg-gray-50 px-6 py-10 text-center">
                <ImageIcon className="mx-auto h-8 w-8 text-gray-400" />
                <p className="mt-3 text-sm text-gray-500">
                  No images attached yet.
                </p>
              </div>
            )}
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 space-y-4">
            <h2 className="text-lg font-bold text-gray-900 mb-4">Organization</h2>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
              <select
                value={formData.category_id}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, category_id: e.target.value }))
                }
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#EB5324] focus:border-transparent text-sm bg-white"
              >
                <option value="">Select Category...</option>
                {categories.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="pt-4 border-t border-gray-100">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={formData.featured}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      featured: e.target.checked
                    }))
                  }
                  className="rounded border-gray-300 text-[#EB5324] focus:ring-[#EB5324] h-4 w-4"
                />
                <span className="text-sm font-medium text-gray-700">
                  Featured Product
                </span>
              </label>
            </div>
          </div>
        </div>
      </div>
    </form>
  )
}

export default function EditProductPage() {
  const params = useParams()
  const idFromParams = params.id as string | undefined

  return <EditProductInner key={idFromParams || 'new'} />
}
