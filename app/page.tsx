import { createClient } from '@/lib/supabase/server';
import HomeContent from '@/components/HomeContent';

export const revalidate = 0;
export const dynamic = 'force-dynamic';

// Fallback hardcoded client logos
const FALLBACK_CLIENT_LOGOS = [
  '/client-logos/logo1.png',
  '/client-logos/logo2.png',
  '/client-logos/logo3.png',
  '/client-logos/logo4.png',
  '/client-logos/logo5.png',
  '/client-logos/logo6.png',
  '/client-logos/logo7.png',
  '/client-logos/logo8.png',
];

export default async function Home() {
  try {
    const supabase = await createClient();

    // Fetch reviews
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

    // Fetch client logos from database
    const { data: logosData } = await supabase
      .from('client_logos')
      .select('image_url')
      .order('sort_order');

    // Combine database logos with fallback hardcoded logos
    const databaseLogos = (logosData || []).map((logo) => logo.image_url);
    const clientLogos = [...FALLBACK_CLIENT_LOGOS, ...databaseLogos];

    // Fetch featured products for Signature Collection (simplified - no category join)
    const { data: featuredData } = await supabase
      .from('products')
      .select('name, image_url')
      .eq('featured', true)
      .order('sort_order')
      .limit(18);

    const featuredProducts = (featuredData || []).map((product) => ({
      name: product.name,
      image: product.image_url || '/placeholder.png',
      href: '/products/office-sets', // Default fallback
    }));

    return <HomeContent testimonials={testimonials} clientLogos={clientLogos} featuredProducts={featuredProducts} />;
  } catch (error) {
    console.error('Error loading homepage:', error);
    // Return with fallback data
    return <HomeContent testimonials={[]} clientLogos={FALLBACK_CLIENT_LOGOS} featuredProducts={[]} />;
  }
}