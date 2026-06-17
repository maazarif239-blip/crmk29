import Image from 'next/image';
import Link from 'next/link';
import ProductSidebar from '@/components/ProductSidebar';
import ContactForPricingLink from '@/components/ContactForPricingLink';

export default function ConferenceMeetingTables() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans selection:bg-[#E5E0D8]">
      

      {/* Hero Section (Contained) */}
      <div className="max-w-[1200px] mx-auto px-4 pt-12 pb-8">
        <section className="relative h-[300px] md:h-[400px] flex items-center justify-center overflow-hidden bg-gray-900">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <img 
              src="g.png" 
              alt="Conference & Meeting Tables" 
              className="w-full h-full object-cover opacity-60"
            />
            {/* Center gradient for text readability */}
            <div className="absolute inset-0 bg-black/40"></div>
          </div>

          <div className="relative z-10 w-full text-center px-4 flex flex-col items-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight font-serif max-w-3xl leading-tight">
              Conference & Meeting<br/>Tables
            </h1>
            <div className="w-16 h-1 bg-[#EB5324]"></div>
          </div>
        </section>
      </div>

      {/* Main Content Area */}
      <section className="max-w-[1200px] mx-auto px-4 py-12 flex flex-col md:flex-row gap-16">
        
        {/* Sidebar */}
        <ProductSidebar activeCategory="/conference-meeting-tables" />

        {/* Product Grid */}
        <div className="flex-1">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {[
              { 
                name: 'Brisk Conference Table', 
                desc: 'A sleek boardroom table designed to support fast-paced meetings with a clean executive presence.',
                badge: null,
                image: '/21.jpg'
              },
              { 
                name: 'Dazzle Conference Table', 
                desc: 'Refined contemporary styling brings a polished focal point to conference rooms and client-facing spaces.',
                badge: null,
                image: '/22.jpg'
              },
              { 
                name: 'Gates Conference Table', 
                desc: 'Strong architectural lines create a professional centerpiece for collaborative discussions and formal presentations.',
                badge: null,
                image: '/23.jpg'
              },
              { 
                name: 'Hardwood Conference Table', 
                desc: 'Rich wood character and durable construction make it ideal for premium meeting and executive environments.',
                badge: null,
                image: '/24.jpg'
              },
              { 
                name: 'Odyssey Conference Table', 
                desc: 'A sophisticated conference solution tailored for modern boardrooms, strategy sessions, and team collaboration.',
                badge: null,
                image: '/25.jpg'
              },
              { 
                name: 'Pluto Conference Table', 
                desc: 'Contemporary detailing and generous proportions deliver function and style for high-performance meeting spaces.',
                badge: null,
                image: '/26.jpg'
              },
              { 
                name: 'Poliform Conference Table', 
                desc: 'Minimalist elegance with a premium finish, suited to executive meeting rooms and design-led workspaces.',
                badge: null,
                image: '/27.jpg'
              },
              { 
                name: 'Prestige Conference Table', 
                desc: 'An executive statement piece crafted to elevate formal boardrooms with timeless professionalism.',
                badge: null,
                image: '/28.jpg'
              },
              { 
                name: 'Water House Conference Table', 
                desc: 'A versatile meeting table that blends modern character with practical comfort for collaborative teams.',
                badge: null,
                image: '/29.jpg'
              },
            ].map((product, i) => (
              <div key={i} className="group border border-gray-100 shadow-sm hover:shadow-md transition-shadow bg-white flex flex-col">
                <div className="aspect-[4/3] bg-[#F5F5F5] relative overflow-hidden">
                  {product.badge && (
                    <span className="absolute top-3 left-3 z-10 bg-white/90 text-gray-700 text-[8px] font-bold uppercase tracking-widest px-2 py-1 border border-gray-200">
                      {product.badge}
                    </span>
                  )}
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-[14px] font-bold text-gray-900 mb-2">{product.name}</h3>
                  <p className="text-gray-500 text-[11px] leading-relaxed flex-1">
                    {product.desc}
                  </p>
                  <div className="mt-6">
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
