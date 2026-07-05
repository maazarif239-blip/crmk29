import Link from 'next/link';
import { notFound } from 'next/navigation';
import ContactForPricingLink from '@/components/ContactForPricingLink';
import ImageWithFallback from '@/components/ImageWithFallback';
import { createClient } from '@/lib/supabase-server';
import { ProductWithCategory } from '@/lib/types';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const supabase = await createClient();

  const { data: product } = await supabase
    .from('products')
    .select('name, description')
    .eq('slug', slug)
    .eq('status', 'published')
    .single();

  if (!product) {
    return {
      title: 'Product Not Found',
    };
  }

  return {
    title: product.name || 'Product',
    description: product.description || '',
  };
}

export default async function ProductDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const supabase = await createClient();

  const { data: product, error } = await supabase
    .from('products')
    .select('*, categories(*)')
    .eq('slug', slug)
    .eq('status', 'published')
    .single() as { data: ProductWithCategory | null; error: any };

  if (error || !product) {
    console.error('Error fetching product:', error);
    notFound();
  }

  const productImage =
    product.image_url || product.main_image || product.featured_image || '/placeholder.jpg';
  const galleryImages = product.gallery?.filter(Boolean) || [];


  return (
    <div className="min-h-screen w-full min-w-0 overflow-x-clip bg-white text-gray-900 font-sans selection:bg-[#E5E0D8]">
      <section className="max-w-[1200px] mx-auto px-4 sm:px-6 py-16 sm:py-20">
        {/* Breadcrumbs */}
        <div className="mb-10 flex items-center gap-2 text-xs text-gray-500">
          <Link href="/" className="hover:text-gray-900 transition-colors">Home</Link>
          <span>/</span>
          {product.categories && (
            <>
              <Link
                href={`/products/${product.categories.slug}`}
                className="hover:text-gray-900 transition-colors"
              >
                {product.categories.name}
              </Link>
              <span>/</span>
            </>
          )}
          <span className="text-gray-900 font-medium">{product.name}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Product Gallery */}
          <div className="flex flex-col gap-4">
            {/* Main Image */}
            <div className="aspect-square bg-[#F5F5F5] p-6 flex items-center justify-center">
              <ImageWithFallback
                src={productImage}
                alt={product.name || 'Product'}
                className="max-w-full max-h-full object-contain"
              />
            </div>
            {/* Thumbnails */}
            {galleryImages.length > 0 && (
              <div className="grid grid-cols-4 gap-3">
                {galleryImages.map((img, i) => (
                  <div
                    key={i}
                    className="aspect-square bg-[#F5F5F5] p-2 flex items-center justify-center cursor-pointer hover:bg-gray-100 transition-colors"
                  >
                    <ImageWithFallback
                      src={img}
                      alt={`Product image ${i + 1}`}
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="flex flex-col gap-6">
            {/* Category Link */}
            {product.categories && (
              <Link
                href={`/products/${product.categories.slug}`}
                className="text-[10px] font-bold uppercase tracking-widest text-[#EB5324] hover:text-[#d4481f] transition-colors"
              >
                {product.categories.name}
              </Link>
            )}

            {/* Title */}
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
              {product.name}
            </h1>

            {/* Contact For Pricing */}
            <div className="pt-4">
              <ContactForPricingLink />
            </div>

            {/* Full Description */}
            {product.description && (
              <div className="pt-8 border-t border-gray-100">
                <h3 className="text-sm font-bold text-gray-900 uppercase tracking-widest mb-4">
                  Description
                </h3>
                <div className="text-gray-600 text-sm leading-relaxed whitespace-pre-wrap">
                  {product.description}
                </div>
              </div>
            )}

          </div>
        </div>
      </section>
    </div>
  );
}
