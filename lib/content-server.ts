import { createClient } from './supabase-server'
import type { Promotion } from './types'

export async function getWebsiteContentMap(keys: string[]) {
  const supabase = await createClient()

  try {
    const { data, error } = await supabase
      .from('site_content')
      .select('key, content_value')
      .in('key', keys)

    if (error) {
      console.error('Error fetching site_content:', error)
      return {}
    }

    const contentMap: Record<string, string> = {}
    data?.forEach(item => {
      if (item?.key) {
        contentMap[item.key] = item.content_value
      }
    })

    return contentMap
  } catch (error) {
    console.error('Unexpected error fetching site_content:', error)
    return {}
  }
}

export async function getWebsiteContentValue(key: string, fallback: string = '') {
  const supabase = await createClient()

  try {
    const { data, error } = await supabase
      .from('site_content')
      .select('content_value')
      .eq('key', key)
      .single()

    if (error) {
      console.error(`Error fetching site_content key=${key}:`, error)
      return fallback
    }

    return data?.content_value ?? fallback
  } catch (error) {
    console.error(`Unexpected error fetching site_content key=${key}:`, error)
    return fallback
  }
}

export async function getActivePromotions(): Promise<Promotion[]> {
  const supabase = await createClient()

  try {
    const { data, error } = await supabase
      .from('promotions')
      .select('*')
      .order('created_at', { ascending: false })

    if (error) {
      console.error('Error fetching promotions:', error)
      return []
    }

    const now = new Date()
    const activePromotions = (data || []).filter(promo => {
      if (!promo.enabled && !promo.active) return false
      if (promo.schedule_enabled) {
        const startValid = !promo.start_date || new Date(promo.start_date) <= now
        const endValid = !promo.end_date || new Date(promo.end_date) >= now
        return startValid && endValid
      }
      return true
    })

    return activePromotions
  } catch (error) {
    console.error('Unexpected error fetching promotions:', error)
    return []
  }
}

export async function getMediaMap(keys: string[]) {
  const supabase = await createClient()
  
  try {
    const { data, error } = await supabase
      .from('media')
      .select('media_key, public_url, file_url')
      .in('media_key', keys)

    if (error) {
      console.error('Error fetching media:', error)
      return {}
    }

    const mediaMap: Record<string, string> = {}
    data?.forEach(item => {
      if (item?.media_key) {
        mediaMap[item.media_key] = item.public_url || item.file_url || ''
      }
    })

    return mediaMap
  } catch (error) {
    console.error('Unexpected error fetching media:', error)
    return {}
  }
}

export async function getMediaValue(key: string, fallback: string = '') {
  const supabase = await createClient()

  try {
    const { data, error } = await supabase
      .from('media')
      .select('public_url, file_url')
      .eq('media_key', key)
      .single()

    if (error) {
      console.error(`Error fetching media key=${key}:`, error)
      return fallback
    }

    return data?.public_url || data?.file_url || fallback
  } catch (error) {
    console.error(`Unexpected error fetching media key=${key}:`, error)
    return fallback
  }
}
