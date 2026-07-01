'use client'

import { createClient } from './supabase'
import type { StorageBucket, StorageFile, UploadProgressCallback } from './types'
import { v4 as uuidv4 } from 'uuid'

export type { StorageBucket, StorageFile, UploadProgressCallback }

const MAX_FILE_SIZE = 20 * 1024 * 1024 // 20 MB
const ALLOWED_MIME_TYPES = [
  'image/jpg',
  'image/jpeg',
  'image/png',
  'image/webp',
  'image/svg+xml'
]

// Helper to extract file extension
const getFileExtension = (filename: string): string => {
  const parts = filename.split('.')
  return parts.length > 1 ? parts.pop()!.toLowerCase() : ''
}

// Helper to generate unique filename
const generateUniqueFilename = (originalName: string): string => {
  const extension = getFileExtension(originalName)
  const uuid = uuidv4()
  const timestamp = Date.now()
  return `${timestamp}-${uuid}.${extension}`
}

// Helper to check if filename exists
const filenameExists = async (bucket: StorageBucket, path: string, filename: string): Promise<boolean> => {
  const supabase = createClient()
  const { data } = await supabase.storage
    .from(bucket)
    .list(path)
  
  if (!data) return false
  return data.some(file => file.name === filename)
}

// Helper to handle filename conflicts
const resolveFilenameConflict = async (
  bucket: StorageBucket,
  path: string,
  originalName: string
): Promise<string> => {
  let filename = generateUniqueFilename(originalName)
  let counter = 1
  
  while (await filenameExists(bucket, path, filename)) {
    const extension = getFileExtension(originalName)
    const uuid = uuidv4()
    filename = `${Date.now()}-${uuid}-${counter}.${extension}`
    counter++
  }
  
  return filename
}

// Helper to validate file
const validateFile = (file: File): { valid: boolean; error?: string } => {
  if (!file) {
    return { valid: false, error: 'No file provided' }
  }

  if (!ALLOWED_MIME_TYPES.includes(file.type)) {
    return { valid: false, error: `File type not allowed. Allowed types: ${ALLOWED_MIME_TYPES.join(', ')}` }
  }

  if (file.size > MAX_FILE_SIZE) {
    return { valid: false, error: `File size too large. Maximum allowed: ${MAX_FILE_SIZE / 1024 / 1024} MB` }
  }

  return { valid: true }
}

// Compress image (simple client-side compression)
const compressImage = async (file: File): Promise<File> => {
  if (!file.type.startsWith('image/')) return file
  
  // Skip SVG for compression
  if (file.type === 'image/svg+xml') return file
  
  // Simple compression using canvas
  try {
    return await new Promise((resolve) => {
      const reader = new FileReader()
      reader.onload = (e) => {
        const img = new Image()
        img.onload = () => {
          const canvas = document.createElement('canvas')
          const ctx = canvas.getContext('2d')!
          
          // Keep original dimensions for now
          canvas.width = img.width
          canvas.height = img.height
          ctx.drawImage(img, 0, 0)
          
          canvas.toBlob((blob) => {
            if (blob) {
              const compressedFile = new File([blob], file.name, { type: file.type })
              resolve(compressedFile)
            } else {
              resolve(file)
            }
          }, file.type, 0.8) // 80% quality
        }
        img.src = e.target!.result as string
      }
      reader.readAsDataURL(file)
    })
  } catch {
    // Fallback to original file if compression fails
    return file
  }
}

/**
 * Upload a file to a bucket
 */
export const uploadFile = async (
  bucket: StorageBucket,
  file: File,
  path: string = '',
  onProgress?: UploadProgressCallback,
  compress: boolean = true
): Promise<StorageFile> => {
  // Validate file
  const validation = validateFile(file)
  if (!validation.valid) {
    throw new Error(validation.error)
  }

  // Compress if needed
  const processedFile = compress ? await compressImage(file) : file

  // Resolve filename conflict
  const filename = await resolveFilenameConflict(bucket, path, file.name)
  const filePath = path ? `${path}/${filename}` : filename

  const supabase = createClient()

  // Simulate progress (Supabase JS v2 doesn't track progress by default)
  if (onProgress) {
    onProgress(10)
  }

  const { data, error } = await supabase.storage
    .from(bucket)
    .upload(filePath, processedFile, {
      cacheControl: '3600',
      upsert: false
    })

  if (error) {
    throw new Error(`Upload failed: ${error.message}`)
  }

  if (onProgress) {
    onProgress(100)
  }

  // Get public URL
  const publicUrlResult = await getPublicUrl(bucket, filePath)

  return {
    id: data.path,
    path: data.path,
    name: filename,
    size: processedFile.size,
    mimeType: file.type,
    publicUrl: publicUrlResult,
    bucketId: bucket,
    uploadedAt: new Date().toISOString()
  }
}

/**
 * Replace an existing file
 */
export const replaceFile = async (
  bucket: StorageBucket,
  existingPath: string,
  newFile: File,
  onProgress?: UploadProgressCallback,
  compress: boolean = true
): Promise<StorageFile> => {
  // Validate file
  const validation = validateFile(newFile)
  if (!validation.valid) {
    throw new Error(validation.error)
  }

  // Compress if needed
  const processedFile = compress ? await compressImage(newFile) : newFile

  if (onProgress) {
    onProgress(10)
  }

  const supabase = createClient()
  const { data, error } = await supabase.storage
    .from(bucket)
    .upload(existingPath, processedFile, {
      cacheControl: '3600',
      upsert: true
    })

  if (error) {
    throw new Error(`Replace failed: ${error.message}`)
  }

  if (onProgress) {
    onProgress(100)
  }

  const publicUrlResult = await getPublicUrl(bucket, existingPath)
  const filename = existingPath.split('/').pop() || existingPath

  return {
    id: data.path,
    path: data.path,
    name: filename,
    size: processedFile.size,
    mimeType: newFile.type,
    publicUrl: publicUrlResult,
    bucketId: bucket,
    uploadedAt: new Date().toISOString()
  }
}

/**
 * Delete a file
 */
export const deleteFile = async (
  bucket: StorageBucket,
  filePath: string
): Promise<void> => {
  const supabase = createClient()
  const { error } = await supabase.storage
    .from(bucket)
    .remove([filePath])

  if (error) {
    throw new Error(`Delete failed: ${error.message}`)
  }
}

/**
 * Get public URL for a file
 */
export const getPublicUrl = (
  bucket: StorageBucket,
  filePath: string
): string => {
  const supabase = createClient()
  const { data } = supabase.storage
    .from(bucket)
    .getPublicUrl(filePath)

  return data.publicUrl
}

/**
 * Rename a file (move it to a new path)
 */
export const renameFile = async (
  bucket: StorageBucket,
  oldPath: string,
  newPath: string
): Promise<string> => {
  const supabase = createClient()
  
  // First download the file
  const { data: downloadData, error: downloadError } = await supabase.storage
    .from(bucket)
    .download(oldPath)

  if (downloadError) {
    throw new Error(`Failed to download file for rename: ${downloadError.message}`)
  }

  // Upload to new path
  const { data: uploadData, error: uploadError } = await supabase.storage
    .from(bucket)
    .upload(newPath, downloadData, {
      cacheControl: '3600',
      upsert: false
    })

  if (uploadError) {
    throw new Error(`Failed to upload renamed file: ${uploadError.message}`)
  }

  // Delete old file
  await deleteFile(bucket, oldPath)

  return getPublicUrl(bucket, newPath)
}

/**
 * List files in a bucket or path
 */
export const listFiles = async (
  bucket: StorageBucket,
  path: string = ''
): Promise<StorageFile[]> => {
  const supabase = createClient()
  const { data, error } = await supabase.storage
    .from(bucket)
    .list(path, {
      limit: 100,
      offset: 0,
      sortBy: { column: 'created_at', order: 'desc' }
    })

  if (error) {
    throw new Error(`List files failed: ${error.message}`)
  }

  // Filter out folders
  const files = data.filter(item => !item.name.startsWith('.'))

  return files.map(file => ({
    id: file.id || uuidv4(),
    path: path ? `${path}/${file.name}` : file.name,
    name: file.name,
    size: file.metadata?.size || 0,
    mimeType: file.metadata?.mimetype || '',
    publicUrl: getPublicUrl(bucket, path ? `${path}/${file.name}` : file.name),
    bucketId: bucket,
    uploadedAt: file.created_at || new Date().toISOString()
  }))
}
