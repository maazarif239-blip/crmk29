import Image from 'next/image';
import Link from 'next/link';
import ProductSidebar from '@/components/ProductSidebar';
import ContactForPricingLink from '@/components/ContactForPricingLink';

export default function OfficeSets() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans selection:bg-[#E5E0D8]">
      
      {/* Hero Section (Contained) */}
      <div className="max-w-[1200px] mx-auto px-4 pt-12 pb-8">
        <section className="relative h-[300px] md:h-[400px] flex items-center justify-center overflow-hidden bg-gray-900">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <img 
              src="/10028.png" 
              alt="Office Sets" 
              className="w-full h-full object-cover opacity-80"
            />
            {/* Center gradient for text readability */}
            <div className="absolute inset-0 bg-black/40"></div>
          </div>

          <div className="relative z-10 w-full text-center px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight font-serif">
              Office Sets
            </h1>
            <p className="text-gray-200 text-[13px] md:text-sm font-medium leading-relaxed max-w-2xl mx-auto">
              Complete office furniture sets designed to create cohesive, professional workspaces with matching desks, chairs, and storage solutions.
            </p>
          </div>
        </section>
      </div>

      {/* Main Content Area */}
      <section className="max-w-[1200px] mx-auto px-4 py-12 flex flex-col md:flex-row gap-16">
        
        {/* Sidebar */}
        <ProductSidebar activeCategory="/products/office-sets" />

        {/* Product Grid */}
        <div className="flex-1">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
            
            {[
              {
                name: 'Executive Office Set',
                image: '/240(1).png',
                description: 'Premium executive office set featuring a spacious desk, ergonomic chair, and matching storage for a complete professional workspace.',
              },
              {
                name: 'Manager Office Set',
                image: '/Screenshot 2026-06-16 165302.png',
                description: 'Complete manager office set with elegant design, perfect for creating a sophisticated and functional workspace.',
              },
              {
                name: 'Modern Office Set',
                image: '/Screenshot 2026-06-16 164657.png',
                description: 'Contemporary office set with clean lines and modern aesthetics, ideal for forward-thinking workplaces.',
              },
              {
                name: 'Compact Office Set',
                image: '/Screenshot 2026-06-16 164809.png',
                description: 'Space-saving compact office set designed for smaller offices and home workspaces without compromising style.',
              },
              {
                name: 'Luxury Office Set',
                image: '/230 (1).png',
                description: 'High-end luxury office set with premium materials and finishes, perfect for executive suites and upscale offices.',
              },
              {
                name: 'Home Office Set',
                image: '/Screenshot 2026-06-16 164124.png',
                description: 'Versatile home office set that blends seamlessly with home decor while providing professional functionality.',
              },
              {
                name: 'Open Plan Office Set',
                image: '/Screenshot 2026-06-16 163413.png',
                description: 'Modular open plan office set designed for collaborative work environments and shared spaces.',
              },
              {
                name: 'Traditional Office Set',
                image: '/Screenshot 2026-06-16 164439.png',
                description: 'Classic traditional office set with timeless design elements, perfect for established professional settings.',
              },
              {
                name: 'Minimalist Office Set',
                image: '/129.png',
                description: 'Sleek minimalist office set with clean aesthetics and functional design, ideal for modern minimalistic workspaces.',
              },
            ].map((product, i) => (
              <div key={i} className="group flex flex-col cursor-pointer h-full">
                <div className="aspect-square bg-[#F5F5F5] p-8 flex items-center justify-center relative overflow-hidden transition-colors group-hover:bg-[#f0f0f0]">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="pt-5 text-left bg-white flex flex-col flex-1 px-2">
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
