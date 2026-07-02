'use client'

import { useEffect, useState } from 'react'
import { createClient } from '@/lib/supabase'

function formatRelativeTime(dateString: string): string {
  const date = new Date(dateString)
  const now = new Date()
  const diffMs = now.getTime() - date.getTime()
  
  const diffSec = Math.floor(diffMs / 1000)
  const diffMin = Math.floor(diffSec / 60)
  const diffHour = Math.floor(diffMin / 60)
  const diffDay = Math.floor(diffHour / 24)
  const diffWeek = Math.floor(diffDay / 7)
  const diffMonth = Math.floor(diffDay / 30)
  const diffYear = Math.floor(diffDay / 365)

  if (diffSec < 60) return 'just now'
  if (diffMin < 60) return `${diffMin} minute${diffMin !== 1 ? 's' : ''} ago`
  if (diffHour < 24) return `${diffHour} hour${diffHour !== 1 ? 's' : ''} ago`
  if (diffDay < 7) return `${diffDay} day${diffDay !== 1 ? 's' : ''} ago`
  if (diffWeek < 4) return `${diffWeek} week${diffWeek !== 1 ? 's' : ''} ago`
  if (diffMonth < 12) return `${diffMonth} month${diffMonth !== 1 ? 's' : ''} ago`
  return `${diffYear} year${diffYear !== 1 ? 's' : ''} ago`
}

interface ActivityLogItem {
  id: string
  action: string
  created_at: string
}

export default function DashboardPage() {
  const [loading, setLoading] = useState(true)
  const [totalProjects, setTotalProjects] = useState<number | null>(null)
  const [activePages, setActivePages] = useState<number | null>(null)
  const [recentInquiries, setRecentInquiries] = useState<number | null>(null)
  const [recentActivity, setRecentActivity] = useState<ActivityLogItem[]>([])

  const supabase = createClient()

  useEffect(() => {
    async function fetchData() {
      setLoading(true)
      try {
        // 1. Fetch Total Projects
        const { count: projectsCount, error: projectsError } = await supabase
          .from('products')
          .select('*', { count: 'exact', head: true })
        
        if (projectsError) console.error('Error fetching products count:', projectsError)
        setTotalProjects(projectsCount || 0)

        // 2. Fetch Active Pages
        const { count: activeCount, error: activeError } = await supabase
          .from('products')
          .select('*', { count: 'exact', head: true })
          .eq('status', 'active')
        
        if (activeError) console.error('Error fetching active pages count:', activeError)
        setActivePages(activeCount || 0)

        // 3. Fetch Recent Inquiries (last 7 days)
        const sevenDaysAgo = new Date()
        sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7)
        
        const { count: inquiriesCount, error: inquiriesError } = await supabase
          .from('inquiries')
          .select('*', { count: 'exact', head: true })
          .gte('created_at', sevenDaysAgo.toISOString())
        
        if (inquiriesError) console.error('Error fetching inquiries count:', inquiriesError)
        setRecentInquiries(inquiriesCount || 0)

        // 4. Fetch Recent Activity
        const { data: activityData, error: activityError } = await supabase
          .from('activity_log')
          .select('id, action, created_at')
          .order('created_at', { ascending: false })
          .limit(10)
        
        if (activityError) console.error('Error fetching activity log:', activityError)
        setRecentActivity(activityData || [])

      } catch (error) {
        console.error('Unexpected error fetching dashboard data:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [supabase])

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900 tracking-tight">Dashboard</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-2">Total Projects</h3>
          <p className="text-3xl font-bold text-gray-900">
            {loading ? <span className="animate-pulse">...</span> : totalProjects ?? '0'}
          </p>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-2">Active Pages</h3>
          <p className="text-3xl font-bold text-gray-900">
            {loading ? <span className="animate-pulse">...</span> : activePages ?? '0'}
          </p>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-2">Recent Inquiries</h3>
          <p className="text-3xl font-bold text-gray-900">
            {loading ? <span className="animate-pulse">...</span> : recentInquiries ?? '0'}
          </p>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 min-h-[400px]">
        <h2 className="text-lg font-bold text-gray-900 mb-4">Recent Activity</h2>
        {loading ? (
          <div className="flex items-center justify-center h-64">
            <div className="animate-pulse text-gray-400">Loading activity...</div>
          </div>
        ) : recentActivity.length === 0 ? (
          <div className="flex items-center justify-center h-64 text-gray-500 text-sm">
            No recent activity to display.
          </div>
        ) : (
          <div className="space-y-3">
            {recentActivity.map((item) => (
              <div key={item.id} className="flex items-center justify-between py-2 border-b border-gray-50 last:border-b-0">
                <span className="text-sm text-gray-700">{item.action}</span>
                <span className="text-xs text-gray-400">{formatRelativeTime(item.created_at)}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
