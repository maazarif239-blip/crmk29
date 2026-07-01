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
