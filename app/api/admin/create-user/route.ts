import { NextResponse } from 'next/server'
import { createClient as createServerSupabaseClient } from '@/lib/supabase-server'
import { createClient } from '@/lib/supabase'

export async function POST(request: Request) {
  try {
    const supabaseAnon = createClient()
    const supabaseServer = await createServerSupabaseClient()

    // Step 1: Verify current user is authenticated
    const {
      data: { user: currentUser },
      error: authError
    } = await supabaseAnon.auth.getUser()

    if (authError || !currentUser) {
      return NextResponse.json({ error: 'Not authenticated' }, { status: 401 })
    }

    // Step 2: Verify current user is admin
    const { data: currentProfile, error: profileError } = await supabaseServer
      .from('profiles')
      .select('role')
      .eq('id', currentUser.id)
      .single()

    if (profileError || !currentProfile || currentProfile.role !== 'admin') {
      return NextResponse.json({ error: 'Not authorized' }, { status: 403 })
    }

    // Step3: Parse request body
    const { email, password, full_name, role = 'editor' } = await request.json()
    if (!email || !password) {
      return NextResponse.json({ error: 'Email and password are required' }, { status: 400 })
    }

    // Step4: Create user with service role
    const { data: authData, error: createError } = await supabaseServer.auth.admin.createUser({
      email,
      password,
      email_confirm: true,
      user_metadata: {
        full_name
      }
    })

    if (createError) {
      return NextResponse.json({ error: createError.message }, { status: 400 })
    }

    // Ensure role is set correctly
    const { error: updateError } = await supabaseServer
      .from('profiles')
      .upsert({ 
        id: authData.user.id, 
        role,
        full_name,
        email
      })
    
    if (updateError) {
      console.error('Failed to set user profile:', updateError)
    }

    // Log activity
    await supabaseServer.from('activity_log').insert([{
      action: 'User created',
      entity_type: 'user',
      entity_id: authData.user.id,
      performed_by: currentUser.id,
    }])

    return NextResponse.json({ 
      success: true, 
      user: { id: authData.user.id, email: authData.user.email } 
    })
  } catch (error) {
    console.error('Error creating user:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
