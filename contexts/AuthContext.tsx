'use client'

import { createContext, useContext, useEffect, useState, useCallback, useRef } from 'react'
import { User, Session } from '@supabase/supabase-js'
import { createClient } from '@/lib/supabase'
import { UserProfile } from '@/lib/types'

type AuthContextType = {
  user: User | null
  session: Session | null
  profile: UserProfile | null
  isLoading: boolean
  signOut: () => Promise<void>
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [session, setSession] = useState<Session | null>(null)
  const [profile, setProfile] = useState<UserProfile | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const supabase = createClient()
  const initializedRef = useRef(false)

  const fetchProfile = useCallback(async (userId: string, userData?: User) => {
    try {
      let { data: existingProfile, error: fetchError } = await supabase
        .from("profiles")
        .select('*')
        .eq('id', userId)
        .single()

      if (fetchError) {
        // If no profile found (PGRST116 = "JSON object requested, multiple (or no) rows returned"), create one automatically
        if (fetchError.code === 'PGRST116') {
          const newProfile: Partial<UserProfile> = {
            id: userId,
            name: userData?.user_metadata?.name || userData?.email?.split('@')[0] || 'User',
            email: userData?.email || '',
            role: 'editor', // Default role is editor
          }

          const { data: createdProfile, error: createError } = await supabase
            .from('profiles')
            .insert([newProfile])
            .select()
            .single()

          if (createError) {
            console.error('Failed to create profile:', createError?.message || createError)
            return
          }
          setProfile(createdProfile)
        } else {
          console.error('Profile fetch failed:', fetchError?.message || fetchError)
        }
      } else {
        setProfile(existingProfile)
      }
    } catch (err) {
      console.error('Unexpected error in fetchProfile:', err)
    }
  }, [supabase])

  const setData = useCallback(async () => {
    const { data: { session }, error } = await supabase.auth.getSession()
    if (error) console.error(error)
    setSession(session)
    setUser(session?.user ?? null)
    if (session?.user) {
      await fetchProfile(session.user.id, session.user)
    } else {
      setProfile(null)
    }
    setIsLoading(false)
  }, [supabase, fetchProfile])

  const signOut = useCallback(async () => {
    await supabase.auth.signOut()
    setProfile(null)
    setUser(null)
    setSession(null)
  }, [supabase])

  useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange(async (_event, session) => {
      setSession(session)
      setUser(session?.user ?? null)
      if (session?.user) {
        await fetchProfile(session.user.id, session.user)
      } else {
        setProfile(null)
      }
      setIsLoading(false)
    })

    // eslint-disable-next-line react-hooks/set-state-in-effect
    setData()

    return () => {
      subscription.unsubscribe()
    }
  }, [supabase, fetchProfile, setData])

  return (
    <AuthContext.Provider value={{ user, session, profile, isLoading, signOut }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}
