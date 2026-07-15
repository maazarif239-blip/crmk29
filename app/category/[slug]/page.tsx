import { notFound } from 'next/navigation';
import { createClient } from '@/lib/supabase/server';
import Image from 'next/image';

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function CategoryPage({ params }: Props) {
  const resolvedParams = await params;
  const { slug } = resolvedParams;
  const supabase = await createClient();

  // Fetch category by slug
  const { data: category, error: categoryError } = await supabase
    .from('categories')
    .select('id, name, slug, description')
    .eq('slug', slug)
    .single();

  if (categoryError || !category) {
    notFound();
  }

  // Fetch products for this category, ordered by sort_order
  const { data: products } = await supabase
    .from('products')
    .select('id, name, description, image_url, featured, sort_order')
    .eq('category_id', category.id)
    .order('sort_order', { ascending: true });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section - Matching other pages style */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Georgia, serif' }}>
            {category.name}
          </h1>
          {category.description && (
            <p className="text-lg md:text-xl text-gray-600 max-w-4xl leading-relaxed">
              {category.description}
            </p>
          )}
        </div>
      </div>

      {/* Products Grid */}
      <div className="container mx-auto px-4 py-12">
        {!products || products.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-gray-500 text-lg">No products found in this category yet.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                {/* Product Image */}
                <div className="relative w-full h-64 bg-gray-100">
                  {product.image_url ? (
                    <Image
                      src={product.image_url}
                      alt={product.name}
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-gray-400">
                      <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                  )}
                  {product.featured && (
                    <div className="absolute top-2 right-2 bg-[#EB5324] text-white px-3 py-1 rounded-full text-xs font-bold">
                      FEATURED
                    </div>
                  )}
                </div>

                {/* Product Info */}
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
                    {product.name}
                  </h3>
                  {product.description && (
                    <p className="text-sm text-gray-600 line-clamp-3">
                      {product.description}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

// Generate static params for all categories
export async function generateStaticParams() {
  // Use direct fetch instead of createClient for build-time static generation
  try {
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
    
    if (!supabaseUrl || !supabaseAnonKey) return [];
    
    const response = await fetch(`${supabaseUrl}/rest/v1/categories?select=slug`, {
      headers: {
        'apikey': supabaseAnonKey,
        'Authorization': `Bearer ${supabaseAnonKey}`,
      },
    });
    
    if (!response.ok) return [];
    
    const categories = await response.json();
    return categories.map((category: { slug: string }) => ({
      slug: category.slug,
    }));
  } catch (error) {
    console.error('Error generating static params:', error);
    return [];
  }
}

// Generate metadata for SEO
export async function generateMetadata({ params }: Props) {
  const resolvedParams = await params;
  const { slug } = resolvedParams;
  
  // Use direct fetch instead of createClient for build-time metadata generation
  try {
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
    
    if (!supabaseUrl || !supabaseAnonKey) {
      return { title: 'Category Not Found' };
    }
    
    const response = await fetch(
      `${supabaseUrl}/rest/v1/categories?slug=eq.${slug}&select=name,description`,
      {
        headers: {
          'apikey': supabaseAnonKey,
          'Authorization': `Bearer ${supabaseAnonKey}`,
        },
      }
    );
    
    if (!response.ok) {
      return { title: 'Category Not Found' };
    }
    
    const categories = await response.json();
    const category = categories[0];

    if (!category) {
      return { title: 'Category Not Found' };
    }

    return {
      title: `${category.name} | HB Furniture`,
      description: category.description || `Browse our ${category.name} collection at HB Furniture`,
    };
  } catch (error) {
    console.error('Error generating metadata:', error);
    return { title: 'Category | HB Furniture' };
  }
}
