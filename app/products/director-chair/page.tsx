import Image from 'next/image';
import Link from 'next/link';
import ContactForPricingLink from '@/components/ContactForPricingLink';
import ProductSidebar from '@/components/ProductSidebar';

export default function DirectorChair() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans selection:bg-[#E5E0D8]">
      
      {/* Hero Section (Contained) */}
      <div className="max-w-[1200px] mx-auto px-4 pt-12 pb-8">
        <section className="relative h-[300px] md:h-[400px] flex items-center justify-center overflow-hidden bg-gray-900">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <img 
              src="/Screenshot 2026-06-16 165028.png" 
              alt="Director Chair" 
              className="w-full h-full object-cover opacity-80"
            />
            {/* Center gradient for text readability */}
            <div className="absolute inset-0 bg-black/40"></div>
          </div>

          <div className="relative z-10 w-full text-center px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight font-serif">
              Director Chair
            </h1>
            <p className="text-gray-200 text-[13px] md:text-sm font-medium leading-relaxed max-w-3xl mx-auto">
              Refined seating for directors, department heads, and senior professionals. Designed to deliver executive comfort and commanding presence in equal measure.
            </p>
          </div>
        </section>
      </div>

      {/* Main Content Area */}
      <section className="max-w-[1200px] mx-auto px-4 py-12 flex flex-col md:flex-row gap-16">
        
        {/* Sidebar */}
        <ProductSidebar 
          activeCategory="/products/director-chair" 
          assistanceText="Our seating specialists are ready to help you find the perfect director chair for your office."
        />

        {/* Product Grid */}
        <div className="flex-1">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
            
            {[
              {
                name: 'Director-J',
                image: '/Screenshot 2026-06-16 165028.png',
                description: 'The Director-J is a distinguished mid-to-high back director chair engineered for senior professionals who demand both ergonomic support and refined visual presence. Its signature two-tone upholstery design — a steel blue fabric upper back paired with a deep black fabric lower back and seat — creates a contemporary, professional aesthetic that elevates any director or department head office. The fixed loop armrests provide consistent arm support, while the premium dark gunmetal five-star base with smooth-rolling dual castors ensures lasting stability and ease of movement. Height-adjustable via pneumatic gas lift for personalized ergonomic positioning. A chair that reflects the authority and discernment of the professional who occupies it.',
              }
            ].map((product, i) => (
              <div key={i} className="group flex flex-col cursor-pointer h-full">
                <div className="aspect-square bg-[#F5F5F5] p-8 flex items-center justify-center relative overflow-hidden transition-colors group-hover:bg-[#f0f0f0]">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="pt-5 bg-white flex flex-col flex-1 text-left px-2">
                  <h3 className="text-[13px] font-bold text-gray-900 group-hover:text-[#E04E1B] transition-colors">
                    {product.name}
                  </h3>
                  <p className="mt-3 text-gray-500 text-[11px] leading-relaxed flex-1">
                    {product.description}
                  </p>
                  <div className="mt-6 mb-2">
                    <ContactForPricingLink />
                  </div>
                </div>
              </div>
            ))}

          </div>
        </div>

      </section>

    </div>
  );
}
