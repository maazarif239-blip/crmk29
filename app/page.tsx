import { createClient } from '@/lib/supabase/server';
import HomeContent from '@/components/HomeContent';

export const revalidate = 0;

export default async function Home() {
  const supabase = await createClient();

  const { data: reviewsData } = await supabase
    .from('reviews')
    .select('name, label, review_text, rating')
    .eq('published', true)
    .order('sort_order');

  const testimonials = (reviewsData || []).map((r) => ({
    name: r.name,
    label: r.label,
    review: r.review_text,
  }));

  return <HomeContent testimonials={testimonials} />;
}