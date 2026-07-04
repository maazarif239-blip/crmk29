'use client'

import { useState, useEffect, useCallback } from 'react'
import { createClient } from '@/lib/supabase'
import { useAuth } from '@/contexts/AuthContext'
import { useRouter } from 'next/navigation'
import { Loader2, Shield, User as UserIcon, UserMinus, AlertCircle, Plus, X, RefreshCw, CheckCircle } from 'lucide-react'
import { UserProfile } from '@/lib/types'

// Generate a random password
const generateRandomPassword = () => {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*'
  let password = ''
  for (let i = 0; i < 12; i++) {
    password += chars.charAt(Math.floor(Math.random() * chars.length))
  }
  return password
}

export default function UsersPage() {
  const [users, setUsers] = useState<UserProfile[]>([])
  const [loading, setLoading] = useState(true)
  const [removingUserId, setRemovingUserId] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [successMessage, setSuccessMessage] = useState<string | null>(null)
  const [showCreateForm, setShowCreateForm] = useState(false)
  const [createLoading, setCreateLoading] = useState(false)
  const [newUser, setNewUser] = useState({
    full_name: '',
    email: '',
    password: '',
    role: 'editor' as 'admin' | 'editor'
  })
  const { profile, isLoading: authLoading } = useAuth()
  const router = useRouter()
  const supabase = createClient()

  useEffect(() => {
    if (!authLoading && profile?.role !== 'admin') {
      router.push('/admin/dashboard')
    }
  }, [authLoading, profile, router])

  const fetchUsers = useCallback(async () => {
    try {
      setError(null)
      const { data, error: fetchError } = await supabase
        .from('profiles')
        .select('*')
        .order('created_at', { ascending: false })
      
      if (fetchError) {
        throw fetchError
      } else {
        setUsers(data || [])
      }
    } catch (err: any) {
      console.error('Error fetching users:', err)
      setError(err.message || 'Failed to load users')
    } finally {
      setLoading(false)
    }
  }, [supabase])

  useEffect(() => {
    if (profile?.role === 'admin') {
      fetchUsers()
    }
  }, [fetchUsers, profile])

  const logActivity = useCallback(async (action: string, entityId: string) => {
    try {
      await supabase
        .from('activity_log')
        .insert([{
          action,
          entity_type: 'user',
          entity_id: entityId,
          performed_by: profile?.id,
        }])
    } catch (err: any) {
      console.error('Failed to log activity:', err)
    }
  }, [profile, supabase])

  const handleRoleChange = useCallback(async (userId: string, newRole: 'admin' | 'editor') => {
    try {
      // Don't allow changing your own role to prevent accidental lockout
      if (userId === profile?.id) {
        alert("You cannot change your own role.")
        return
      }

      setError(null)
      setSuccessMessage(null)
      
      const { error: updateError } = await supabase
        .from('profiles')
        .update({ role: newRole })
        .eq('id', userId)

      if (updateError) throw updateError

      await logActivity('User role updated', userId)
      setUsers(users.map(u => u.id === userId ? { ...u, role: newRole } : u))
      setSuccessMessage('User role updated successfully!')
      setTimeout(() => setSuccessMessage(null), 3000)
    } catch (err: any) {
      console.error(err)
      setError(err.message || 'Failed to update user role')
    }
  }, [supabase, users, profile, logActivity])

  const handleRemoveAccess = useCallback(async (userId: string) => {
    try {
      setRemovingUserId(userId)
      setError(null)
      setSuccessMessage(null)

      const confirmed = window.confirm(
        "Are you sure you want to remove this user's admin access? This will downgrade them to Editor and cannot be undone."
      )

      if (!confirmed) {
        return
      }
      
      const { error: updateError } = await supabase
        .from('profiles')
        .update({ role: 'editor' })
        .eq('id', userId)

      if (updateError) throw updateError

      await logActivity('User role updated', userId)
      setUsers(users.map(u => u.id === userId ? { ...u, role: 'editor' } : u))
      setSuccessMessage('User access removed successfully!')
      setTimeout(() => setSuccessMessage(null), 3000)
    } catch (err: any) {
      console.error(err)
      setError(err.message || 'Failed to remove access')
    } finally {
      setRemovingUserId(null)
    }
  }, [supabase, users, logActivity])

  const handleGeneratePassword = () => {
    setNewUser({ ...newUser, password: generateRandomPassword() })
  }

  const handleCreateUser = useCallback(async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      setCreateLoading(true)
      setError(null)
      setSuccessMessage(null)

      const res = await fetch('/api/admin/create-user', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newUser)
      })

      const data = await res.json()
      if (!res.ok) {
        throw new Error(data.error || 'Failed to create user')
      }

      // Show success message
      setSuccessMessage(`Successfully created user: ${newUser.email}`)
      // Refetch users
      await fetchUsers()
      // Reset form
      setNewUser({
        full_name: '',
        email: '',
        password: '',
        role: 'editor'
      })
      setShowCreateForm(false)
      setTimeout(() => setSuccessMessage(null), 5000)
    } catch (err: any) {
      console.error(err)
      setError(err.message || 'Failed to create user')
    } finally {
      setCreateLoading(false)
    }
  }, [newUser, fetchUsers])

  if (loading || authLoading) {
    return <div className="flex items-center justify-center h-64"><Loader2 className="w-8 h-8 animate-spin text-gray-400" /></div>
  }

  if (profile?.role !== 'admin') return null

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900">User Management</h1>
        <button
          onClick={() => setShowCreateForm(!showCreateForm)}
          className="flex items-center gap-2 px-4 py-2 bg-orange-600 text-white rounded-md hover:bg-orange-700"
        >
          <Plus className="w-4 h-4" />
          {showCreateForm ? 'Cancel' : 'Add New User'}
        </button>
      </div>

      {error && (
        <div className="bg-red-50 border border-red-200 rounded-md p-4 flex items-center gap-2">
          <AlertCircle className="w-5 h-5 text-red-500" />
          <p className="text-red-700">{error}</p>
        </div>
      )}

      {successMessage && (
        <div className="bg-green-50 border border-green-200 rounded-md p-4 flex items-center gap-2">
          <CheckCircle className="w-5 h-5 text-green-500" />
          <p className="text-green-700">{successMessage}</p>
        </div>
      )}

      {showCreateForm && (
        <div className="bg-white p-6 rounded-lg shadow">
          <form onSubmit={handleCreateUser} className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="col-span-1 md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
              <input
                type="text"
                value={newUser.full_name}
                onChange={(e) => setNewUser({ ...newUser, full_name: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-orange-500 focus:border-orange-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input
                type="email"
                required
                value={newUser.email}
                onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-orange-500 focus:border-orange-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
              <div className="flex gap-2">
                <input
                  type="text"
                  required
                  value={newUser.password}
                  onChange={(e) => setNewUser({ ...newUser, password: e.target.value })}
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-orange-500 focus:border-orange-500"
                />
                <button
                  type="button"
                  onClick={handleGeneratePassword}
                  className="flex items-center justify-center px-3 py-2 bg-gray-100 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-200"
                  title="Generate random password"
                >
                  <RefreshCw className="w-4 h-4" />
                </button>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Role</label>
              <select
                value={newUser.role}
                onChange={(e) => setNewUser({ ...newUser, role: e.target.value as 'admin' | 'editor' })}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-orange-500 focus:border-orange-500"
              >
                <option value="editor">Editor</option>
                <option value="admin">Admin</option>
              </select>
            </div>
            <div className="col-span-1 md:col-span-2 flex items-center gap-2 justify-end mt-2">
              <button
                type="button"
                onClick={() => setShowCreateForm(false)}
                className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
                disabled={createLoading}
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-orange-600 text-white rounded-md hover:bg-orange-700 flex items-center gap-2"
                disabled={createLoading}
              >
                {createLoading && <Loader2 className="w-4 h-4 animate-spin" />}
                Add New User
              </button>
            </div>
          </form>
        </div>
      )}

      <div className="bg-white shadow rounded-lg overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">User</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Role</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Joined</th>
              <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {users.map((user) => {
              const isOwnProfile = user.id === profile?.id
              const isAdmin = user.role === 'admin'

              return (
                <tr key={user.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-10 w-10">
                        {user.avatar_url ? (
                          <img className="h-10 w-10 rounded-full object-cover" src={user.avatar_url} alt="" />
                        ) : (
                          <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center">
                            <UserIcon className="h-5 w-5 text-gray-500" />
                          </div>
                        )}
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">
                          {user.full_name || user.name || 'Unnamed User'}
                        </div>
                        <div className="text-sm text-gray-500 truncate max-w-[250px]">
                          {user.email}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      user.role === 'admin' ? 'bg-purple-100 text-purple-800' : 'bg-green-100 text-green-800'
                    }`}>
                      {user.role === 'admin' ? <Shield className="w-4 h-4 mr-1" /> : null}
                      {user.role.charAt(0).toUpperCase() + user.role.slice(1)}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {user.created_at ? new Date(user.created_at).toLocaleDateString() : 'N/A'}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    {isOwnProfile ? (
                      <span className="text-gray-400 text-xs">This is you - cannot change</span>
                    ) : (
                      <div className="flex items-center justify-end gap-3">
                        <select
                          value={user.role}
                          onChange={(e) => handleRoleChange(user.id, e.target.value as 'admin' | 'editor')}
                          className="mt-1 block pl-3 pr-10 py-2 text-sm border-gray-300 focus:outline-none focus:ring-[#EB5324] focus:border-[#EB5324] rounded-md"
                        >
                          <option value="editor">Editor</option>
                          <option value="admin">Admin</option>
                        </select>
                        {isAdmin && (
                          <button
                            onClick={() => handleRemoveAccess(user.id)}
                            disabled={removingUserId === user.id}
                            className="text-red-600 hover:text-red-800 disabled:opacity-50 disabled:cursor-not-allowed"
                            title="Downgrade to Editor"
                          >
                            <UserMinus className="w-5 h-5" />
                          </button>
                        )}
                      </div>
                    )}
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
        {users.length === 0 && (
          <div className="p-6 text-center text-gray-500">
            No users found.
          </div>
        )}
      </div>
    </div>
  )
}
