import Image from 'next/image';
import Link from 'next/link';
import ProductSidebar from '@/components/ProductSidebar';

export default function ReceptionCounters() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans selection:bg-[#E5E0D8]">
      

      {/* Hero Section (Edge-to-Edge) */}
      <section className="relative h-[350px] md:h-[450px] flex items-center justify-center text-center bg-[#111111] overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="h.jpg" 
            alt="Reception Counters" 
            className="w-full h-full object-cover opacity-40"
          />
        </div>

        <div className="relative z-10 w-full px-4 flex flex-col items-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight font-sans">
            Reception Counters
          </h1>
          <div className="w-16 h-1 bg-[#EB5324]"></div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="max-w-[1200px] mx-auto px-4 py-16 flex flex-col md:flex-row gap-16">
        
        {/* Sidebar */}
        <ProductSidebar activeCategory="/reception-counters" />

        {/* Product Grid */}
        <div className="flex-1">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {[
              { 
                name: 'Corby Reception', 
                desc: 'A sleek modern reception counter designed for corporate offices, featuring clean lines and professional aesthetics.',
                badge: null,
                image: '/a.jpg',
                isPlaceholder: false
              },
              { 
                name: 'Halton Reception', 
                desc: 'Elegant reception desk solution perfect for executive environments and premium commercial workspaces.',
                badge: null,
                image: '/b.jpg',
                isPlaceholder: false
              },
              { 
                name: 'Lufton Reception', 
                desc: 'Contemporary front desk design offering both style and functionality for high-traffic reception areas.',
                badge: null,
                image: '/c.jpg',
                isPlaceholder: false
              },
              { 
                name: 'Princeton Reception', 
                desc: 'Sophisticated reception counter crafted for corporate headquarters and professional office settings.',
                badge: null,
                image: '/d.jpg',
                isPlaceholder: false
              },
              { 
                name: 'Zara Reception', 
                desc: 'Modern minimalist reception desk ideal for creating a welcoming first impression in commercial spaces.',
                badge: null,
                image: '/e.jpg',
                isPlaceholder: false
              },
            ].map((product, i) => (
              <div key={i} className="group border border-gray-100 shadow-sm hover:shadow-md transition-shadow bg-white flex flex-col">
                <div className="aspect-[4/3] bg-[#F5F5F5] relative overflow-hidden flex items-center justify-center text-gray-300">
                  {product.badge && (
                    <span className="absolute top-3 left-3 z-10 bg-white/90 text-gray-700 text-[8px] font-bold uppercase tracking-widest px-2 py-1 border border-gray-200">
                      {product.badge}
                    </span>
                  )}
                  {product.isPlaceholder ? (
                    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  ) : (
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 mix-blend-multiply"
                    />
                  )}
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-[14px] font-bold text-gray-900 mb-2">{product.name}</h3>
                  <p className="text-gray-500 text-[11px] leading-relaxed flex-1">
                     {product.desc}
                   </p>
                  <div className="mt-4 pt-4 border-t border-gray-50">
                    <Link href="/contact" className="text-[#EB5324] text-[9px] font-bold uppercase tracking-widest cursor-pointer hover:underline underline-offset-4">Contact for Pricing</Link>
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
