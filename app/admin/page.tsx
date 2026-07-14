import { createClient } from '@/lib/supabase/server';
import AdminDashboardClient from '@/components/AdminDashboardClient';

export const revalidate = 0;

export default async function AdminDashboard() {
  const supabase = await createClient();

  // Fetch counts
  const { count: productsCount } = await supabase
    .from('products')
    .select('*', { count: 'exact', head: true });

  const { count: categoriesCount } = await supabase
    .from('categories')
    .select('*', { count: 'exact', head: true });

  const { count: logosCount } = await supabase
    .from('client_logos')
    .select('*', { count: 'exact', head: true });

  const { count: reviewsCount } = await supabase
    .from('reviews')
    .select('*', { count: 'exact', head: true });

  const { count: unreadMessagesCount } = await supabase
    .from('contact_messages')
    .select('*', { count: 'exact', head: true })
    .eq('is_read', false);

  // Fetch team members count from site_content
  const { data: teamData } = await supabase
    .from('site_content')
    .select('value')
    .eq('key', 'management_team')
    .single();
  const teamCount = Array.isArray(teamData?.value) ? teamData.value.length : 0;

  return (
    <AdminDashboardClient
      productsCount={productsCount || 0}
      categoriesCount={categoriesCount || 0}
      logosCount={logosCount || 0}
      reviewsCount={reviewsCount || 0}
      unreadMessagesCount={unreadMessagesCount || 0}
      teamCount={teamCount}
    />
  );
}