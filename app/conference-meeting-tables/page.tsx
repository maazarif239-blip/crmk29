import Image from 'next/image';
import Link from 'next/link';
import ContactForPricingLink from '@/components/ContactForPricingLink';
import ProductPageHeader from '@/components/ProductPageHeader';

export default function ConferenceMeetingTables() {
  return (
    <div className="min-h-screen w-full min-w-0 overflow-x-clip bg-white text-gray-900 font-sans selection:bg-[#E5E0D8]">
      <ProductPageHeader title="Conference & Meeting Tables" />
{/* Main Content Area */}
      <section className="max-w-[1200px] mx-auto px-4 sm:px-6 py-12 flex flex-col md:flex-row gap-8 md:gap-12 lg:gap-16">
        
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
              { 
                name: 'Diagonal Inlay Conference Table', 
                desc: 'Rectangular walnut finish table with diagonal black inlay design, slim X-shaped metal legs, modern aesthetic, ideal for boardrooms and meeting spaces.',
                badge: null,
                image: '/Screenshot 2026-06-24 001228.png'
              },
              { 
                name: 'Geometric Top Meeting Table', 
                desc: 'Long walnut conference table featuring angular black geometric pattern on tabletop, sleek criss-cross metal legs, contemporary look for executive meeting rooms.',
                badge: null,
                image: '/Screenshot 2026-06-24 001231.png'
              },
              { 
                name: 'Lift-Top Convertible Conference Table', 
                desc: 'Walnut finish table with raised center lift panel, X-frame metal legs, versatile design allowing height adjustment for laptop or presentation use.',
                badge: null,
                image: '/Screenshot 2026-06-24 001236.png'
              },
              { 
                name: 'Triangle Inlay Meeting Table', 
                desc: 'Compact rectangular table with triangular black inlay accent, crossed metal leg base, walnut wood finish, suited for small meeting or discussion rooms.',
                badge: null,
                image: '/Screenshot 2026-06-24 001244.png'
              },
              { 
                name: 'White Frame Modular Meeting Table', 
                desc: 'Light wood-top table with white metal legs, seats 10. Simple, modern design with cream leather chairs.',
                badge: null,
                image: '/25.jpg'
              },
              { 
                name: 'Natural Wood Rectangular Meeting Table', 
                desc: 'Plain rectangular table in natural wood finish, seats 8–10. Mixed black and cream chairs create a clean modern appearance.',
                badge: null,
                image: '/26.jpg'
              },
              { 
                name: 'Oak Boat-Shape Conference Table', 
                desc: 'Boat-shaped oak conference table with curved wood base, seats 14. Black leather chairs provide a refined professional appearance.',
                badge: null,
                image: '/27.jpg'
              },
              { 
                name: 'Classic Mahogany Conference Table', 
                desc: 'Traditional mahogany conference table with wood-panel base, seats 8. Includes matching wood-arm leather chairs for a timeless executive look.',
                badge: null,
                image: '/28.jpg'
              },
              { 
                name: 'Modern Chrome-Leg Meeting Table', 
                desc: 'Compact wood-top meeting table with chrome angular legs, seats 6–8. Black leather chairs complement its sleek contemporary design.',
                badge: null,
                image: '/29.jpg'
              }
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
