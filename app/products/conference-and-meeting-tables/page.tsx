import Image from 'next/image';
import Link from 'next/link';
import ContactForPricingLink from '@/components/ContactForPricingLink';
import ProductPageHeader from '@/components/ProductPageHeader';

export default function ConferenceAndMeetingTables() {
  return (
    <div className="min-h-screen w-full min-w-0 overflow-x-clip bg-white text-gray-900 font-sans selection:bg-[#E5E0D8]">
      <ProductPageHeader title="Conference & Meeting Tables" description="Precision-engineered meeting tables for boardrooms, executive suites, and collaborative workspaces. Built to make every meeting count." />
{/* Main Content Area */}
      <section className="max-w-[1200px] mx-auto px-4 sm:px-6 py-12 flex flex-col md:flex-row gap-8 md:gap-12 lg:gap-16">
        
        {/* Product Grid */}
        <div className="flex-1">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 sm:gap-x-6 lg:gap-x-8 gap-y-8 sm:gap-y-10 lg:gap-y-12">
            
            {[
              {
                name: 'Walnut Executive Conference Table',
                image: '/175-1-.png',
                description: 'Spacious walnut boardroom table with built-in cable ports, seats 14. Comes with black mesh executive chairs for daily meetings.',
              }, 
              {
                name: 'Curved Boardroom Table with Center Display',
                image: '/175-2-.png',
                description: 'Boat-shaped oak table with center flower space, seats 12-14. Black leather chairs give it a premium, elegant look.',
              },
              {
                name: ' Extra Long Boardroom Conference Table',
                image: '/175-3-.png',
                description: ' Long oak conference table for big teams, seats 20+. Has center cable channel and matching black leather chairs.',
              },
              {
                name: 'Diagonal Inlay Conference Table',
                image: '/Screenshot 2026-06-24 001228.png',
                description: 'Rectangular walnut finish table with diagonal black inlay design, slim X-shaped metal legs, modern aesthetic, ideal for boardrooms and meeting spaces.',
              },
              {
                name: 'Geometric Top Meeting Table',
                image: '/Screenshot 2026-06-24 001231.png',
                description: 'Long walnut conference table featuring angular black geometric pattern on tabletop, sleek criss-cross metal legs, contemporary look for executive meeting rooms.',
              },
              {
                name: 'Lift-Top Convertible Conference Table',
                image: '/Screenshot 2026-06-24 001236.png',
                description: 'Walnut finish table with raised center lift panel, X-frame metal legs, versatile design allowing height adjustment for laptop or presentation use.',
              },
              {
                name: 'Triangle Inlay Meeting Table',
                image: '/Screenshot 2026-06-24 001244.png',
                description: 'Compact rectangular table with triangular black inlay accent, crossed metal leg base, walnut wood finish, suited for small meeting or discussion rooms.',
              },
              {
                name: 'White Frame Modular Meeting Table',
                image: '/25.jpg',
                description: 'Light wood-top table with white metal legs, seats 10. Simple, modern design with cream leather chairs.',
              },
              {
                name: 'Natural Wood Rectangular Meeting Table',
                image: '/26.jpg',
                description: 'Plain rectangular table in natural wood finish, seats 8–10. Mixed black and cream chairs create a clean modern appearance.',
              },
              {
                name: 'Oak Boat-Shape Conference Table',
                image: '/27.jpg',
                description: 'Boat-shaped oak conference table with curved wood base, seats 14. Black leather chairs provide a refined professional appearance.',
              },
              {
                name: 'Classic Mahogany Conference Table',
                image: '/28.jpg',
                description: 'Traditional mahogany conference table with wood-panel base, seats 8. Includes matching wood-arm leather chairs for a timeless executive look.',
              },
              {
                name: 'Modern Chrome-Leg Meeting Table',
                image: '/29.jpg',
                description: 'Compact wood-top meeting table with chrome angular legs, seats 6–8. Black leather chairs complement its sleek contemporary design.',
              }
            ].map((product, i) => (
              <div key={i} className="group flex flex-col cursor-pointer h-full">
                <div className="aspect-square bg-[#F5F5F5] p-4 sm:p-6 md:p-8 flex items-center justify-center relative overflow-hidden transition-colors group-hover:bg-[#f0f0f0]">
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
