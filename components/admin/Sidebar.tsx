'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { LayoutDashboard, Settings, Users, FileText, Image as ImageIcon, Package } from 'lucide-react'

const navItems = [
  { name: 'Dashboard', href: '/admin/dashboard', icon: LayoutDashboard },
  { name: 'Products', href: '/admin/products', icon: Package },
  { name: 'Pages', href: '/admin/pages', icon: FileText },
  { name: 'Media', href: '/admin/media', icon: ImageIcon },
  { name: 'Users', href: '/admin/users', icon: Users },
  { name: 'Settings', href: '/admin/settings', icon: Settings },
]

export default function Sidebar() {
  const pathname = usePathname()

  return (
    <aside className="hidden w-64 bg-gray-900 text-white md:flex md:flex-col h-screen fixed inset-y-0 left-0 z-50">
      <div className="flex items-center justify-center h-16 bg-gray-950 border-b border-gray-800">
        <span className="text-xl font-bold text-[#EB5324] tracking-tight">HB Admin</span>
      </div>
      
      <div className="flex-1 overflow-y-auto py-4">
        <nav className="space-y-1 px-2">
          {navItems.map((item) => {
            const isActive = pathname === item.href
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`
                  flex items-center px-3 py-2.5 text-sm font-medium rounded-md transition-colors
                  ${isActive 
                    ? 'bg-[#EB5324] text-white' 
                    : 'text-gray-300 hover:bg-gray-800 hover:text-white'}
                `}
              >
                <item.icon className="mr-3 h-5 w-5 flex-shrink-0" />
                {item.name}
              </Link>
            )
          })}
        </nav>
      </div>
      
      <div className="p-4 bg-gray-950 border-t border-gray-800">
        <div className="text-xs text-gray-500 text-center">
          HB Furniture CMS v1.0
        </div>
      </div>
    </aside>
  )
}
