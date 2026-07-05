'use client'

import { useState, useEffect, useCallback, useMemo } from 'react'
import { createClient } from './supabase'
import { WebsiteContent, Promotion, Media } from './types'

export function useWebsiteContent() {
  const [content, setContent] = useState<Record<string, string | null>>({})
  const [loading, setLoading] = useState(true)
  const supabase = useMemo(() => createClient(), [])

  const fetchContent = useCallback(async () => {
    try {
      const { data, error } = await supabase
        .from('site_content')
        .select('key, content_value')
      
      if (error) throw error
      
      const contentMap: Record<string, string | null> = {}
      data?.forEach(item => {
        if (item?.key) {
          contentMap[item.key] = item.content_value
        }
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
  const supabase = useMemo(() => createClient(), [])

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

export function useMedia() {
  const [media, setMedia] = useState<Record<string, string | null>>({})
  const [loading, setLoading] = useState(true)
  const supabase = useMemo(() => createClient(), [])

  const fetchMedia = useCallback(async () => {
    try {
      const { data, error } = await supabase
        .from('media')
        .select('media_key, public_url, file_url')
      
      if (error) throw error
      
      const mediaMap: Record<string, string | null> = {}
      data?.forEach(item => {
        if (item?.media_key) {
          mediaMap[item.media_key] = item.public_url || item.file_url || null
        }
      })
      setMedia(mediaMap)
    } catch (error) {
      console.error('Error fetching media:', error)
    } finally {
      setLoading(false)
    }
  }, [supabase])

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    fetchMedia()
  }, [fetchMedia])

  const getMedia = useCallback((key: string, defaultValue: string = '') => {
    return media[key] ?? defaultValue
  }, [media])

  return { media, getMedia, loading, refresh: fetchMedia }
}
