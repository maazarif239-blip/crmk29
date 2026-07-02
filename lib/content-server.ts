import { createClient } from './supabase-server'

export async function getSiteContent() {
  const supabase = await createClient()
  try {
    const { data, error } = await supabase
      .from('site_content')
      .select('key, value')
    
    if (error) {
      console.error('Error fetching site_content:', error)
      return {}
    }
    
    const contentMap: Record<string, string> = {}
    data?.forEach(item => {
      contentMap[item.key] = item.value
    })
    return contentMap
  } catch (error) {
    console.error('Unexpected error fetching site_content:', error)
    return {}
  }
}
