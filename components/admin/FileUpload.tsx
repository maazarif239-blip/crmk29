'use client'

import { useState, useCallback, useRef } from 'react'
import { uploadFile, type StorageBucket, type StorageFile } from '@/lib/storage'
import { Upload, X, Image as ImageIcon, Loader2 } from 'lucide-react'

interface FileUploadProps {
  bucket: StorageBucket
  path?: string
  onUploadComplete?: (file: StorageFile) => void
  onError?: (error: string) => void
  acceptedFileTypes?: string[]
  multiple?: boolean
  label?: string
  compress?: boolean
}

export default function FileUpload({
  bucket,
  path = '',
  onUploadComplete,
  onError,
  acceptedFileTypes = ['image/*'],
  multiple = false,
  label = 'Drag & drop an image here, or click to select',
  compress = true
}: FileUploadProps) {
  const [isDragging, setIsDragging] = useState(false)
  const [isUploading, setIsUploading] = useState(false)
  const [uploadProgress, setUploadProgress] = useState(0)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleFiles = useCallback(async (files: FileList | File[]) => {
    const fileArray = Array.from(files)
    
    for (const file of fileArray) {
      try {
        setIsUploading(true)
        const uploadedFile = await uploadFile(
          bucket,
          file,
          path,
          (progress) => setUploadProgress(progress),
          compress
        )
        
        if (onUploadComplete) {
          onUploadComplete(uploadedFile)
        }
      } catch (err) {
        const errorMessage = err instanceof Error ? err.message : 'Unknown error occurred'
        if (onError) {
          onError(errorMessage)
        }
      } finally {
        setIsUploading(false)
        setUploadProgress(0)
      }
    }
  }, [bucket, path, compress, onUploadComplete, onError])

  const onDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setIsDragging(true)
  }, [])

  const onDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setIsDragging(false)
  }, [])

  const onDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setIsDragging(false)
    
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      handleFiles(e.dataTransfer.files)
    }
  }, [handleFiles])

  const onClick = useCallback(() => {
    fileInputRef.current?.click()
  }, [])

  return (
    <div className="w-full">
      <div
        onClick={onClick}
        onDragOver={onDragOver}
        onDragLeave={onDragLeave}
        onDrop={onDrop}
        className={`
          relative
          flex flex-col items-center justify-center
          p-8
          border-2 border-dashed rounded-lg cursor-pointer
          transition-all duration-200
          ${isDragging 
            ? 'border-[#EB5324] bg-[#EB5324]/5' 
            : 'border-gray-300 hover:border-[#EB5324] hover:bg-gray-50'
          }
          ${isUploading ? 'pointer-events-none opacity-60' : ''}
        `}
      >
        {isUploading ? (
          <div className="flex flex-col items-center gap-3">
            <Loader2 className="h-12 w-12 animate-spin text-[#EB5324]" />
            <div className="text-lg font-medium text-gray-700">
              Uploading... {Math.round(uploadProgress)}%
            </div>
            <div className="w-full max-w-xs h-2 bg-gray-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-[#EB5324] transition-all duration-300"
                style={{ width: `${uploadProgress}%` }}
              />
            </div>
          </div>
        ) : (
          <>
            <div className="mb-4 text-center">
              <ImageIcon className="mx-auto h-12 w-12 text-gray-400" />
            </div>
            <div className="text-center">
              <label className="cursor-pointer">
                <span className="mt-2 block text-sm font-semibold text-gray-700">
                  {label}
                </span>
                <span className="mt-1 block text-xs text-gray-500">
                  PNG, JPG, JPEG, WEBP or SVG up to 20MB
                </span>
              </label>
            </div>
          </>
        )}
      </div>

      <input
        type="file"
        ref={fileInputRef}
        onChange={(e) => {
          if (e.target.files && e.target.files.length > 0) {
            handleFiles(e.target.files)
          }
        }}
        accept={acceptedFileTypes.join(',')}
        multiple={multiple}
        className="hidden"
        disabled={isUploading}
      />
    </div>
  )
}
