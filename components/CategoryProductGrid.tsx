import Link from 'next/link';
import ContactForPricingLink from '@/components/ContactForPricingLink';
import ProductPageHeader from '@/components/ProductPageHeader';
import { createClient } from '@/lib/supabase-server';
import ImageWithFallback from '@/components/ImageWithFallback';

interface CategoryProductGridProps {
  categorySlug: string;
  pageTitle?: string;
  pageDescription?: string;
}

export default async function CategoryProductGrid({
  categorySlug,
  pageTitle,
  pageDescription,
}: CategoryProductGridProps) {
  const supabase = await createClient();
  const pageContentKeys = [
    `category.${categorySlug}.title`,
    `category.${categorySlug}.description`,
  ];

  const { data: headerContent } = await supabase
    .from('website_content')
    .select('content_key, content_value')
    .in('content_key', pageContentKeys);

  const headerMap: Record<string, string> = {};
  headerContent?.forEach(item => {
    if (item?.content_key) {
      headerMap[item.content_key] = item.content_value
    }
  });

  const resolvedTitle = headerMap[`category.${categorySlug}.title`] ?? pageTitle ?? categorySlug.replace(/-/g, ' ');
  const resolvedDescription = headerMap[`category.${categorySlug}.description`] ?? pageDescription ?? '';

  let products = [];
  let error = null;

  try {
    // First, find category with given slug
    const { data: category, error: categoryError } = await supabase
      .from('categories')
      .select('id')
      .eq('slug', categorySlug)
      .single();

    if (categoryError || !category) {
      console.error('Error fetching category:', categoryError);
      error = 'Failed to load category';
    } else {
      // Now fetch products for this category with status='published'
      const { data, error: productsError } = await supabase
        .from('products')
        .select('*')
        .eq('category_id', category.id)
        .eq('status', 'published')
        .order('created_at', { ascending: false });

      if (productsError) {
        console.error('Error fetching products:', productsError);
        error = 'Failed to load products';
      } else {
        products = data || [];
      }
    }
  } catch (err) {
    console.error('Unexpected error:', err);
    error = 'An unexpected error occurred';
  }

  if (error) {
    return (
      <div className="min-h-screen w-full min-w-0 overflow-x-clip bg-white text-gray-900 font-sans selection:bg-[#E5E0D8]">
        <ProductPageHeader title={resolvedTitle} description={resolvedDescription} />
        <section className="max-w-[1200px] mx-auto px-4 sm:px-6 py-20 text-center text-gray-500">
          {error}
        </section>
      </div>
    );
  }

  return (
    <div className="min-h-screen w-full min-w-0 overflow-x-clip bg-white text-gray-900 font-sans selection:bg-[#E5E0D8]">
      <ProductPageHeader title={resolvedTitle} description={resolvedDescription} />
      {/* Main Content Area */}
      <section className="max-w-[1200px] mx-auto px-4 sm:px-6 py-20 flex flex-col md:flex-row gap-8 md:gap-12 lg:gap-16">
        
        {/* Product Grid */}
        <div className="flex-1">
          {products.length === 0 ? (
            <div className="text-center py-20 text-gray-500">
              No products in this category yet
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product) => (
                <Link href={`/products/${product.slug}`} key={product.id} className="group border border-gray-100 shadow-sm hover:shadow-md transition-shadow bg-white flex flex-col">
                  <div className="aspect-square bg-[#F5F5F5] p-4 sm:p-6 md:p-8 flex items-center justify-center relative overflow-hidden">
                    <ImageWithFallback 
                      src={product.image_url || product.main_image || product.featured_image || '/placeholder.jpg'} 
                      alt={product.name} 
                      className="w-full h-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-[15px] font-bold text-gray-900 mb-2">{product.name}</h3>
                    <p className="text-gray-500 text-[11px] leading-relaxed flex-1">
                      {product.description}
                    </p>
                    <div className="mt-6">
                      <ContactForPricingLink />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>

      </section>
    </div>
  );
}
