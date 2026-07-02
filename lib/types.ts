// ===================================
// CORE TYPES
// ===================================

export type Category = {
  id: string
  name: string
  slug: string
  description: string | null
  image: string | null
  sort_order: number
  created_at: string
}

export type Media = {
  id: string
  // Old structure (backwards compatible)
  file_name?: string
  file_path?: string
  file_size?: number
  mime_type?: string
  public_url?: string
  // New structure
  title?: string | null
  bucket: string
  file_url: string
  uploaded_at: string
}

export type Product = {
  id: string
  // Old structure (backwards compatible)
  title?: string
  slug: string
  category_id?: string | null
  status?: 'draft' | 'published'
  featured?: boolean
  seo_title?: string | null
  seo_description?: string | null
  main_image?: string | null
  gallery?: string[] | null
  image_url?: string | null
  featured_image?: string | null
  // New structure
  name?: string
  short_description?: string | null
  description?: string | null
  specifications?: Record<string, any>
  sort_order?: number
  created_at: string
  updated_at: string
}

export type ProductWithCategory = Product & {
  categories: Category | null
}

export type WebsiteContent = {
  id: string
  // Old structure (backwards compatible)
  content_key?: string | null
  content_value?: string | null
  content_type?: 'text' | 'html' | 'image' | 'array' | 'json' | null
  group_name?: string | null
  label?: string | null
  description?: string | null
  // New structure
  section?: string | null
  title?: string | null
  subtitle?: string | null
  image?: string | null
  button_text?: string | null
  button_link?: string | null
  updated_at: string
}

export type Promotion = {
  id: string
  // Old structure (backwards compatible)
  type?: 'announcement_bar' | 'popup' | 'banner' | 'sale_ribbon' | null
  content?: string | null
  cta_text?: string | null
  cta_link?: string | null
  image_url?: string | null
  enabled?: boolean
  schedule_enabled?: boolean
  display_order?: number
  style?: string | null
  // New structure
  title: string
  description?: string | null
  ribbon_text?: string | null
  discount?: string | null
  banner_image?: string | null
  start_date?: string | null
  end_date?: string | null
  active?: boolean
  created_at: string
  updated_at: string
}

export type Setting = {
  id: string
  key: string
  value: string | null
  type: 'text' | 'json' | 'boolean' | 'image' | 'number'
  group_name: 'general' | 'social' | 'seo' | 'theme'
  label: string
  description: string | null
  updated_at: string
}

export type UserProfile = {
  id: string
  // Old structure (backwards compatible)
  full_name?: string | null
  avatar_url?: string | null
  // New structure
  name?: string | null
  email: string
  role: 'admin' | 'editor'
  created_at: string
  updated_at: string
}

// ===================================
// STORAGE TYPES
// ===================================
export type StorageBucket = 
  | 'products'
  | 'homepage'
  | 'clients'
  | 'banners'
  | 'logos'
  | 'general'

export type UploadProgressCallback = (progress: number) => void

export type StorageFile = {
  id: string
  path: string
  name: string
  size: number
  mimeType: string
  publicUrl: string
  bucketId: StorageBucket
  uploadedAt: string
}
