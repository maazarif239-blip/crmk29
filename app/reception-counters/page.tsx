import Image from 'next/image';
import Link from 'next/link';
import ContactForPricingLink from '@/components/ContactForPricingLink';

export default function ReceptionCounters() {
  return (
    <div className="min-h-screen w-full min-w-0 overflow-x-clip bg-white text-gray-900 font-sans selection:bg-[#E5E0D8]">
      

      {/* Hero Section (Edge-to-Edge) */}
      <section className="relative h-[350px] md:h-[280px] sm:h-[380px] md:h-[450px] flex items-center justify-center text-center bg-[#111111] overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/h.jpg" 
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
      <section className="max-w-[1200px] mx-auto px-4 sm:px-6 py-16 flex flex-col md:flex-row gap-8 md:gap-12 lg:gap-16">
        
        {/* Product Grid */}
        <div className="flex-1">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {[
              { 
                name: 'Walnut L-Shape Reception Counter', 
                desc: 'Wooden L-shape reception counter with raised top panel, spacious desk area, and modern elegant finish.',
                badge: null,
                image: '48c3f57d-f393-48fc-96d1-fbcde25cdb07.jpg',
                isPlaceholder: false
              },
              { 
                name: 'Geometric Walnut Reception Counter', 
                desc: 'Wooden reception counter with unique geometric line design, sturdy build, and stylish corner L-shape layout.',
                badge: null,
                image: '/325b49eb-d282-4810-a1e2-cc13f320242e.jpg',
                isPlaceholder: false
              },
              { 
                name: 'Striped Walnut Reception Desk', 
                desc: 'Long wooden reception desk with striped front panel, sleek white base, and clean modern design.',
                badge: null,
                image: '/9953db69-dc1c-4496-aa2d-f8d7e98a333d.jpg',
                isPlaceholder: false
              },
              { 
                name: 'White & Walnut Reception Counter', 
                desc: 'White and wooden reception counter with raised display top, dual-tone finish, and compact modern style.',
                badge: null,
                image: '/ac2f479c-caae-4392-9e41-254be366a5fb.jpg',
                isPlaceholder: false
              },
              { 
                name: 'Dark Wood Glass Reception Counter', 
                desc: 'Dark wood reception counter with frosted glass panels, layered design, and sleek contemporary office look.',
                badge: null,
                image: '/eb89f3e7-13bb-41c2-8692-a3836f1503ce.jpg',
                isPlaceholder: false
              },
              { 
                name: 'Curved Wood-Black Reception Counter', 
                desc: 'Elegant curved reception desk with walnut wood panels, black metal accents, perforated dot pattern detailing, modern design for stylish front-office areas.',
                badge: null,
                image: '/Screenshot 2026-06-24 000733.png',
                isPlaceholder: false
              },
              { 
                name: 'Slate & Walnut Reception Desk', 
                desc: 'Sleek rectangular reception counter with dark slate front panel, contrasting walnut wood transaction top, minimalist modern design for compact reception areas.',
                badge: null,
                image: '/Screenshot 2026-06-24 000752.png',
                isPlaceholder: false
              },
              { 
                name: 'Angular Wood-Charcoal Reception Counter', 
                desc: 'Bold rectangular reception desk with charcoal grey body, diagonal walnut wood panel accent, floating wood top, contemporary design for modern offices.',
                badge: null,
                image: '/Screenshot 2026-06-24 000953.png',
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
