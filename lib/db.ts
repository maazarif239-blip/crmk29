'use client'

import { createClient } from './supabase'
import type {
  Category,
  Media,
  Product,
  ProductWithCategory,
  WebsiteContent,
  Promotion,
  Setting,
  UserProfile
} from './types'

// ===================================
// UTILITIES
// ===================================

/**
 * Generate a slug from a string
 */
export function generateSlug(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .trim()
    .substring(0, 100)
}

// ===================================
// CATEGORIES
// ===================================

export const categories = {
  getAll: async (): Promise<Category[]> => {
    const supabase = createClient()
    const { data, error } = await supabase
      .from('categories')
      .select('*')
      .order('sort_order', { ascending: true })

    if (error) throw error
    return data
  },

  getById: async (id: string): Promise<Category | null> => {
    const supabase = createClient()
    const { data, error } = await supabase
      .from('categories')
      .select('*')
      .eq('id', id)
      .single()

    if (error) return null
    return data
  },

  getBySlug: async (slug: string): Promise<Category | null> => {
    const supabase = createClient()
    const { data, error } = await supabase
      .from('categories')
      .select('*')
      .eq('slug', slug)
      .single()

    if (error) return null
    return data
  },

  create: async (category: Omit<Category, 'id' | 'created_at'>): Promise<Category> => {
    const supabase = createClient()
    const { data, error } = await supabase
      .from('categories')
      .insert([category])
      .select()
      .single()

    if (error) throw error
    return data
  },

  update: async (id: string, updates: Partial<Category>): Promise<Category> => {
    const supabase = createClient()
    const { data, error } = await supabase
      .from('categories')
      .update(updates)
      .eq('id', id)
      .select()
      .single()

    if (error) throw error
    return data
  },

  delete: async (id: string): Promise<void> => {
    const supabase = createClient()
    const { error } = await supabase
      .from('categories')
      .delete()
      .eq('id', id)

    if (error) throw error
  },

  checkSlugExists: async (slug: string, excludeId?: string): Promise<boolean> => {
    const supabase = createClient()
    let query = supabase.from('categories').select('id').eq('slug', slug)

    if (excludeId) {
      query = query.neq('id', excludeId)
    }

    const { data } = await query

    return (data?.length || 0) > 0
  }
}

// ===================================
// PRODUCTS
// ===================================

export const products = {
  getAll: async (): Promise<ProductWithCategory[]> => {
    const supabase = createClient()
    const { data, error } = await supabase
      .from('products')
      .select(`
        *,
        categories (*)
      `)
      .order('sort_order', { ascending: true })

    if (error) throw error
    return data as ProductWithCategory[]
  },

  getPublished: async (): Promise<ProductWithCategory[]> => {
    const supabase = createClient()
    const { data, error } = await supabase
      .from('products')
      .select(`
        *,
        categories (*)
      `)
      .eq('status', 'published')
      .order('sort_order', { ascending: true })

    if (error) throw error
    return data as ProductWithCategory[]
  },

  getById: async (id: string): Promise<ProductWithCategory | null> => {
    const supabase = createClient()
    const { data, error } = await supabase
      .from('products')
      .select(`
        *,
        categories (*)
      `)
      .eq('id', id)
      .single()

    if (error) return null
    return data as ProductWithCategory
  },

  getBySlug: async (slug: string): Promise<ProductWithCategory | null> => {
    const supabase = createClient()
    const { data, error } = await supabase
      .from('products')
      .select(`
        *,
        categories (*)
      `)
      .eq('slug', slug)
      .single()

    if (error) return null
    return data as ProductWithCategory
  },

  getByCategory: async (categoryId: string): Promise<ProductWithCategory[]> => {
    const supabase = createClient()
    const { data, error } = await supabase
      .from('products')
      .select(`
        *,
        categories (*)
      `)
      .eq('category_id', categoryId)
      .eq('status', 'published')
      .order('sort_order', { ascending: true })

    if (error) throw error
    return data as ProductWithCategory[]
  },

  getFeatured: async (): Promise<ProductWithCategory[]> => {
    const supabase = createClient()
    const { data, error } = await supabase
      .from('products')
      .select(`
        *,
        categories (*)
      `)
      .eq('featured', true)
      .eq('status', 'published')
      .order('sort_order', { ascending: true })

    if (error) throw error
    return data as ProductWithCategory[]
  },

  create: async (product: Omit<Product, 'id' | 'created_at' | 'updated_at'>): Promise<Product> => {
    const supabase = createClient()
    const { data, error } = await supabase
      .from('products')
      .insert([product])
      .select()
      .single()

    if (error) throw error
    return data
  },

  update: async (id: string, updates: Partial<Product>): Promise<Product> => {
    const supabase = createClient()
    const { data, error } = await supabase
      .from('products')
      .update(updates)
      .eq('id', id)
      .select()
      .single()

    if (error) throw error
    return data
  },

  delete: async (id: string): Promise<void> => {
    const supabase = createClient()
    const { error } = await supabase
      .from('products')
      .delete()
      .eq('id', id)

    if (error) throw error
  },

  checkSlugExists: async (slug: string, excludeId?: string): Promise<boolean> => {
    const supabase = createClient()
    let query = supabase.from('products').select('id').eq('slug', slug)

    if (excludeId) {
      query = query.neq('id', excludeId)
    }

    const { data } = await query
    return (data?.length || 0) > 0
  }
}

// ===================================
// MEDIA
// ===================================

export const media = {
  getAll: async (): Promise<Media[]> => {
    const supabase = createClient()
    const { data, error } = await supabase
      .from('media')
      .select('*')
      .order('uploaded_at', { ascending: false })

    if (error) throw error
    return data
  },

  getByBucket: async (bucket: string): Promise<Media[]> => {
    const supabase = createClient()
    const { data, error } = await supabase
      .from('media')
      .select('*')
      .eq('bucket', bucket)
      .order('uploaded_at', { ascending: false })

    if (error) throw error
    return data
  },

  getById: async (id: string): Promise<Media | null> => {
    const supabase = createClient()
    const { data, error } = await supabase
      .from('media')
      .select('*')
      .eq('id', id)
      .single()

    if (error) return null
    return data
  },

  create: async (file: Omit<Media, 'id' | 'uploaded_at'>): Promise<Media> => {
    const supabase = createClient()
    const { data, error } = await supabase
      .from('media')
      .insert([file])
      .select()
      .single()

    if (error) throw error
    return data
  },

  update: async (id: string, updates: Partial<Media>): Promise<Media> => {
    const supabase = createClient()
    const { data, error } = await supabase
      .from('media')
      .update(updates)
      .eq('id', id)
      .select()
      .single()

    if (error) throw error
    return data
  },

  delete: async (id: string): Promise<void> => {
    const supabase = createClient()
    const { error } = await supabase
      .from('media')
      .delete()
      .eq('id', id)

    if (error) throw error
  }
}

// ===================================
// WEBSITE CONTENT
// ===================================

export const websiteContent = {
  getAll: async (): Promise<WebsiteContent[]> => {
    const supabase = createClient()
    const { data, error } = await supabase
      .from('site_content')
      .select('*')

    if (error) throw error
    return data
  },

  getByKey: async (key: string): Promise<WebsiteContent | null> => {
    const supabase = createClient()
    const { data, error } = await supabase
      .from('site_content')
      .select('*')
      .eq('key', key)
      .single()

    if (error) return null
    return data
  },

  getById: async (id: string): Promise<WebsiteContent | null> => {
    const supabase = createClient()
    const { data, error } = await supabase
      .from('site_content')
      .select('*')
      .eq('id', id)
      .single()

    if (error) return null
    return data
  },

  create: async (content: Omit<WebsiteContent, 'id' | 'updated_at'>): Promise<WebsiteContent> => {
    const supabase = createClient()
    const { data, error } = await supabase
      .from('site_content')
      .insert([content])
      .select()
      .single()

    if (error) throw error
    return data
  },

  update: async (id: string, updates: Partial<WebsiteContent>): Promise<WebsiteContent> => {
    const supabase = createClient()
    const { data, error } = await supabase
      .from('site_content')
      .update(updates)
      .eq('id', id)
      .select()
      .single()

    if (error) throw error
    return data
  },

  delete: async (id: string): Promise<void> => {
    const supabase = createClient()
    const { error } = await supabase
      .from('site_content')
      .delete()
      .eq('id', id)

    if (error) throw error
  }
}

// ===================================
// PROMOTIONS
// ===================================

export const promotions = {
  getAll: async (): Promise<Promotion[]> => {
    const supabase = createClient()
    const { data, error } = await supabase
      .from('promotions')
      .select('*')
      .order('created_at', { ascending: false })

    if (error) throw error
    return data
  },

  getActive: async (): Promise<Promotion[]> => {
    const supabase = createClient()
    const now = new Date().toISOString()
    let query = supabase
      .from('promotions')
      .select('*')
      .or('enabled.eq.true,active.eq.true')
      .order('created_at', { ascending: false })

    const { data: allData, error } = await query
    if (error) throw error

    // Filter scheduled promotions client-side
    return (allData || []).filter(promo => {
      if (promo.schedule_enabled) {
        const startValid = !promo.start_date || new Date(promo.start_date) <= new Date()
        const endValid = !promo.end_date || new Date(promo.end_date) >= new Date()
        return startValid && endValid
      }
      return true
    })
  },

  getById: async (id: string): Promise<Promotion | null> => {
    const supabase = createClient()
    const { data, error } = await supabase
      .from('promotions')
      .select('*')
      .eq('id', id)
      .single()

    if (error) return null
    return data
  },

  create: async (promo: Omit<Promotion, 'id' | 'created_at' | 'updated_at'>): Promise<Promotion> => {
    const supabase = createClient()
    const { data, error } = await supabase
      .from('promotions')
      .insert([promo])
      .select()
      .single()

    if (error) throw error
    return data
  },

  update: async (id: string, updates: Partial<Promotion>): Promise<Promotion> => {
    const supabase = createClient()
    const { data, error } = await supabase
      .from('promotions')
      .update(updates)
      .eq('id', id)
      .select()
      .single()

    if (error) throw error
    return data
  },

  delete: async (id: string): Promise<void> => {
    const supabase = createClient()
    const { error } = await supabase
      .from('promotions')
      .delete()
      .eq('id', id)

    if (error) throw error
  }
}

// ===================================
// SETTINGS
// ===================================

export const settings = {
  getAll: async (): Promise<Setting[]> => {
    const supabase = createClient()
    const { data, error } = await supabase
      .from('settings')
      .select('*')

    if (error) throw error
    return data
  },

  getByGroup: async (group: string): Promise<Setting[]> => {
    const supabase = createClient()
    const { data, error } = await supabase
      .from('settings')
      .select('*')
      .eq('group_name', group)

    if (error) throw error
    return data
  },

  getByKey: async (key: string): Promise<Setting | null> => {
    const supabase = createClient()
    const { data, error } = await supabase
      .from('settings')
      .select('*')
      .eq('key', key)
      .single()

    if (error) return null
    return data
  },

  update: async (key: string, value: string): Promise<Setting> => {
    const supabase = createClient()
    const { data, error } = await supabase
      .from('settings')
      .update({ value })
      .eq('key', key)
      .select()
      .single()

    if (error) throw error
    return data
  },

  bulkUpdate: async (updates: Record<string, string>): Promise<Setting[]> => {
    const results: Setting[] = []
    for (const [key, value] of Object.entries(updates)) {
      const result = await settings.update(key, value)
      results.push(result)
    }
    return results
  }
}

// ===================================
// USER PROFILES
// ===================================

export const userProfiles = {
  getAll: async (): Promise<UserProfile[]> => {
    const supabase = createClient()
    const { data, error } = await supabase
      .from('profiles')
      .select('*')
      .order('created_at', { ascending: false })

    if (error) throw error
    return data
  },

  getById: async (id: string): Promise<UserProfile | null> => {
    const supabase = createClient()
    const { data, error } = await supabase
      .from('profiles')
      .select('*')
      .eq('id', id)
      .single()

    if (error) return null
    return data
  },

  update: async (id: string, updates: Partial<UserProfile>): Promise<UserProfile> => {
    const supabase = createClient()
    const { data, error } = await supabase
      .from('profiles')
      .update(updates)
      .eq('id', id)
      .select()
      .single()

    if (error) throw error
    return data
  }
}
