import { useState, useEffect, useCallback, useMemo } from 'react'
import { createClient } from './supabase'
import { WebsiteContent, Promotion } from './types'

export function useWebsiteContent() {
  const [content, setContent] = useState<Record<string, string | null>>({})
  const [loading, setLoading] = useState(true)
  const supabase = createClient()

  const fetchContent = useCallback(async () => {
    try {
      const { data, error } = await supabase
        .from('website_content')
        .select('content_key, content_value')
      
      if (error) throw error
      
      const contentMap: Record<string, string | null> = {}
      data?.forEach(item => {
        contentMap[item.content_key] = item.content_value
      })
      setContent(contentMap)
    } catch (error) {
      console.error('Error fetching website content:', error)
    } finally {
      setLoading(false)
    }
  }, [supabase])

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    fetchContent()
  }, [fetchContent])

  const getContent = useCallback((key: string, defaultValue: string = '') => {
    return content[key] ?? defaultValue
  }, [content])

  return { content, getContent, loading, refresh: fetchContent }
}

export function usePromotions() {
  const [promotions, setPromotions] = useState<Promotion[]>([])
  const [loading, setLoading] = useState(true)
  const supabase = createClient()

  const fetchPromotions = useCallback(async () => {
    try {
      const { data, error } = await supabase
        .from('promotions')
        .select('*')
        .order('display_order', { ascending: true })
      
      if (error) throw error
      setPromotions(data || [])
    } catch (error) {
      console.error('Error fetching promotions:', error)
    } finally {
      setLoading(false)
    }
  }, [supabase])

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    fetchPromotions()
  }, [fetchPromotions])

  const getActivePromotions = useCallback(() => {
    const now = new Date()
    return promotions.filter(p => {
      if (!p.enabled) return false
      if (p.schedule_enabled) {
        const start = p.start_date ? new Date(p.start_date) : null
        const end = p.end_date ? new Date(p.end_date) : null
        if (start && now < start) return false
        if (end && now > end) return false
      }
      return true
    })
  }, [promotions])

  return { promotions, getActivePromotions, loading, refresh: fetchPromotions }
}
