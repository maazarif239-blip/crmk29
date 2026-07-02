'use client'

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { products } from '@/lib/db';
import type { ProductWithCategory } from '@/lib/types';

export default function SignatureCollection() {
  const [featuredProducts, setFeaturedProducts] = useState<ProductWithCategory[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await products.getFeatured();
        setFeaturedProducts(data);
      } catch (error) {
        console.error('Error fetching featured products:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  const displayProducts = featuredProducts.length > 0 ? featuredProducts : [
    { name: 'Classic Mahogany Executive Desk Set', featured_image: '/Screenshot 2026-06-23 234454.png', slug: 'executive-office-tables' },
    { name: 'Carved Wood Executive Office Set', featured_image: '/Screenshot 2026-06-23 234504.png', slug: 'executive-office-tables' },
    { name: 'Walnut Executive Desk with Bookcase', featured_image: '/Screenshot 2026-06-23 234512.png', slug: 'executive-office-tables' },
    { name: 'Executive Office Table Set', featured_image: '/10016.jpeg', slug: 'office-sets' },
    { name: 'Modern Office Workstation Set', featured_image: '/10008.jpeg', slug: 'office-sets' },
    { name: 'Premium Office Table Set', featured_image: '/10009.jpeg', slug: 'office-sets' },
    { name: 'Walnut Executive Conference Table', featured_image: '/175-1-.png', slug: 'conference-and-meeting-tables' },
    { name: 'Curved Boardroom Table with Center Display', featured_image: '/175-2-.png', slug: 'conference-and-meeting-tables' },
    { name: 'Extra Long Boardroom Conference Table', featured_image: '/175-3-.png', slug: 'conference-and-meeting-tables' },
    { name: 'Pink High-Back Manager Chair', featured_image: '/245-1-.png', slug: 'manager-chair-collection' },
    { name: 'White Frame Mesh Manager Chair Black & Grey', featured_image: '/245-2-.png', slug: 'manager-chair-collection' },
    { name: 'Classic Wood Side Table', featured_image: '/Screenshot 2026-06-23 235247.png', slug: 'center-and-side-tables' },
  ] as any[];

  const marqueeItems = [...displayProducts, ...displayProducts];

  const getProductHref = (product: any) => {
    if (product.slug) {
      if (product.categories?.slug) {
        return `/${product.categories.slug}`;
      }
      return `/products/${product.slug}`;
    }
    return '/products';
  };

  return (
    <section className="relative z-10 pt-12 sm:pt-16 md:pt-20 pb-16 sm:pb-20 md:pb-24 bg-[#fafafa] overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 md:px-8">
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <span className="text-[10px] font-bold text-[#EB5324] uppercase tracking-[0.2em] mb-3 block">
            
          </span>
          <h2 className="text-[clamp(1.75rem,4vw,2.75rem)] font-bold text-gray-900 mb-4 sm:mb-5 font-serif tracking-tight">
            Signature Collection
          </h2>
          <p className="text-gray-500 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            Explore our finest office furniture solutions crafted for modern workplaces and executive environments.
          </p>
        </div>

        {loading ? (
          <div className="flex justify-center items-center py-12">
            <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-[#EB5324]"></div>
          </div>
        ) : (
          <div
            className="relative group/marquee"
            style={{
              maskImage: 'linear-gradient(to right, transparent, black 4%, black 96%, transparent)',
              WebkitMaskImage: 'linear-gradient(to right, transparent, black 4%, black 96%, transparent)',
            }}
          >
            <div className="overflow-hidden">
              <div className="flex w-max gap-4 sm:gap-5 md:gap-6 animate-marquee-slow will-change-transform group-hover/marquee:[animation-play-state:paused]">
                {marqueeItems.map((product, i) => {
                  const productName = product.name || product.title || 'Product';
                  const productImage = product.featured_image || product.main_image || '/placeholder.png';
                  return (
                    <Link
                      key={`${product.id || productName}-${i}`}
                      href={getProductHref(product)}
                      className="group/card flex-shrink-0 w-[180px] sm:w-[220px] md:w-[260px] lg:w-[280px] flex flex-col bg-white rounded-[16px] sm:rounded-[18px] border border-gray-200/80 shadow-[0_4px_24px_-4px_rgba(0,0,0,0.08)] hover:shadow-[0_12px_40px_-8px_rgba(0,0,0,0.14)] hover:-translate-y-1.5 transition-all duration-500 ease-out overflow-hidden"
                    >
                      <div className="relative w-full aspect-[4/5] bg-[#f5f5f5] flex items-center justify-center overflow-hidden">
                        <Image
                          src={productImage}
                          alt={productName}
                          fill
                          sizes="(max-width: 390px) 180px, (max-width: 640px) 200px, (max-width: 768px) 230px, (max-width: 1024px) 260px, 280px"
                          className="object-contain p-4 sm:p-5 md:p-6 transition-transform duration-700 ease-out group-hover/card:scale-105"
                        />
                      </div>
                      <div className="px-5 py-5 md:py-6 flex items-center justify-center text-center min-h-[72px]">
                        <h3 className="text-[12px] md:text-[13px] font-medium text-gray-800 leading-snug line-clamp-2 group-hover/card:text-[#EB5324] transition-colors duration-300">
                          {productName}
                        </h3>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
