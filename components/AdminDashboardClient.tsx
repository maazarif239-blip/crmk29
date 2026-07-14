'use client';

import { Package, FolderTree, Images, Star, MessageSquare, Users } from 'lucide-react';

type StatCardProps = {
  productsCount: number;
  categoriesCount: number;
  logosCount: number;
  reviewsCount: number;
  unreadMessagesCount: number;
  teamCount: number;
};

export default function AdminDashboardClient({
  productsCount,
  categoriesCount,
  logosCount,
  reviewsCount,
  unreadMessagesCount,
  teamCount,
}: StatCardProps) {
  const stats = [
    {
      label: 'Total Products',
      value: productsCount,
      icon: Package,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
    },
    {
      label: 'Total Categories',
      value: categoriesCount,
      icon: FolderTree,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
    },
    {
      label: 'Client Logos',
      value: logosCount,
      icon: Images,
      color: 'text-green-600',
      bgColor: 'bg-green-50',
    },
    {
      label: 'Total Reviews',
      value: reviewsCount,
      icon: Star,
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-50',
    },
    {
      label: 'Unread Messages',
      value: unreadMessagesCount,
      icon: MessageSquare,
      color: 'text-[#EB5324]',
      bgColor: 'bg-orange-50',
    },
    {
      label: 'Team Members',
      value: teamCount,
      icon: Users,
      color: 'text-indigo-600',
      bgColor: 'bg-indigo-50',
    },
  ];

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Dashboard</h1>
        <p className="text-gray-600">Welcome to HB Furniture Admin Panel</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <div
              key={stat.label}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-200"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600 mb-1">
                    {stat.label}
                  </p>
                  <p className={`text-3xl font-bold ${stat.color}`}>
                    {stat.value}
                  </p>
                </div>
                <div className={`${stat.bgColor} p-3 rounded-lg`}>
                  <Icon className={`w-8 h-8 ${stat.color}`} />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
