"use client";

import Link from 'next/link';
import ProductSidebar from '@/components/ProductSidebar';
import ContactForPricingLink from '@/components/ContactForPricingLink';

const products = [
  {
    title: "Grande Executive Desk Series",
    image: "/Screenshot 2026-06-16 175833.png",
    description: "Grande offers the finest craftsmanship, demonstrating a broad range of aesthetic options, selected to reflect contemporary work styles."
  },
  {
    title: "Presidential Executive Desk Series",
    image: "/Screenshot 2026-06-16 175937.png",
    description: "Fit easily in both home and office settings, illustrating a new approach to the traditional personal workspace and fusing insightful work process solutions with beauty and comfort."
  },
  {
    title: "Nautica Executive Desk Series",
    image: "/Screenshot 2026-06-16 180108.png",
    description: "A distinguished line of desking system, Hardwood Nautica provides the ultimate executive wood desking experience. Nautica represents exceptional workmanship at the best possible price range."
  }
];

export default function HardwoodExecutiveTables() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans selection:bg-[#E5E0D8]">
      
      {/* Hero Header Section */}
      <section className="relative h-[450px] flex items-end pb-16 overflow-hidden">
        {/* Background Image with Dark Mask overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="/screenshot-2026-06-16-164439.png"
            alt="Hardwood Executive Tables Background"
            className="w-full h-full object-cover opacity-50 grayscale hover:scale-105 transition-transform duration-[8s]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
        </div>

        <div className="relative z-10 w-full max-w-[1200px] mx-auto px-4">
          <div className="flex flex-col gap-2 max-w-2xl">
            <span className="text-[#EB5324] text-[10px] font-bold uppercase tracking-widest">
              Premium Office Collections
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight font-serif">
              Hardwood Executive Tables
            </h1>
            <p className="text-gray-300 text-xs md:text-sm font-medium leading-relaxed mt-2">
              Hardwood Grande offers the finest craftmanship, demonstrating a broad range of aesthetic options, selected to reflect contemporary work styles.
            </p>
          </div>
        </div>
      </section>

      {/* Main Catalog Area */}
      <section className="max-w-[1200px] mx-auto px-4 py-20">
        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* Sidebar Area */}
          <ProductSidebar activeCategory="/hardwood-executive-tables" />

          {/* Product Detail Spotlight Column */}
          <div className="flex-1">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((product, idx) => (
                <div key={idx} className="bg-white border border-gray-200 rounded-lg p-6 flex flex-col h-full">
                  <div className="w-full aspect-[4/3] bg-[#f5f5f5] mb-6 overflow-hidden flex items-center justify-center">
                    <img 
                      src={product.image} 
                      alt={product.title} 
                      className="w-full h-full object-contain mix-blend-multiply"
                    />
                  </div>
                  <h3 className="text-[18px] font-medium text-[#1a1a1a] mb-3">
                    {product.title}
                  </h3>
                  <p className="text-[13px] text-[#666666] leading-[1.6] line-clamp-3 mb-6">
                    {product.description}
                  </p>
                  <div className="mt-auto">
                    <ContactForPricingLink />
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
