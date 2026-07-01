import { createBrowserClient } from '@supabase/ssr'

export const createClient = () => {
  return createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://ivqnaqopmgtpiatxzdfn.supabase.co',
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'sb_publishable_pyEwrGQkq5fQpuNNEBA9cw_dA5FyGdx'
  )
}
