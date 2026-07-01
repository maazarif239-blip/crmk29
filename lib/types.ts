export type Category = {
  id: string
  name: string
  slug: string
  created_at: string
}

export type Media = {
  id: string
  file_name: string
  file_path: string
  file_size: number
  mime_type: string
  public_url: string
  created_at: string
}

export type Product = {
  id: string
  title: string
  slug: string
  description: string | null
  category_id: string | null
  status: 'draft' | 'published'
  featured: boolean
  seo_title: string | null
  seo_description: string | null
  main_image: string | null
  gallery: string[] | null
  created_at: string
  updated_at: string
}

// For joins
export type ProductWithCategory = Product & {
  categories: Category | null
}

export type WebsiteContent = {
  id: string
  content_key: string
  content_value: string | null
  content_type: 'text' | 'html' | 'image' | 'array' | 'json'
  group_name: string | null
  label: string
  description: string | null
  updated_at: string
}

export type Promotion = {
  id: string
  title: string
  type: 'announcement_bar' | 'popup' | 'banner' | 'sale_ribbon'
  content: string | null
  cta_text: string | null
  cta_link: string | null
  image_url: string | null
  enabled: boolean
  schedule_enabled: boolean
  start_date: string | null
  end_date: string | null
  display_order: number
  style: string | null
  created_at: string
  updated_at: string
}

export type UserProfile = {
  id: string
  role: 'admin' | 'editor'
  full_name: string | null
  avatar_url: string | null
  created_at?: string
}

export type Setting = {
  id?: string
  key: string
  value: string | null
  group_name: string | null
  label: string | null
  type: string
  updated_at?: string
}
