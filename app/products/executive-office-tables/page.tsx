import Image from 'next/image';
import Link from 'next/link';
import ContactForPricingLink from '@/components/ContactForPricingLink';
export default function ExecutiveOfficeTables() {
  return (
    <div className="min-h-screen w-full min-w-0 overflow-x-clip bg-white text-gray-900 font-sans selection:bg-[#E5E0D8]">
      

      {/* Hero Section */}
      <section className="relative h-[280px] sm:h-[380px] md:h-[450px] flex items-end pb-16 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0 bg-gray-900">
          <img 
            src="/screenshot-2026-06-16-164439.png" 
            alt="Executive Office Tables" 
            className="w-full h-full object-cover opacity-60"
          />
          {/* Bottom gradient so text is easily readable */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
        </div>

        <div className="relative z-10 w-full max-w-[1200px] mx-auto px-4 sm:px-6">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight font-serif">
            Executive Office Tables
          </h1>
          <p className="text-gray-200 text-[13px] md:text-sm font-medium leading-relaxed max-w-2xl">
            Precision engineering for the modern professional. Discover premium executive tables designed for peak performance and enduring elegance.
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="max-w-[1200px] mx-auto px-4 sm:px-6 py-20 flex flex-col md:flex-row gap-8 md:gap-12 lg:gap-16">
        
        {/* Product Grid */}
        <div className="flex-1">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Classic Mahogany Executive Desk Set",
                src: "/Screenshot 2026-06-23 234454.png",
                desc: "Rich mahogany executive desk with green leather top, intricate brass detailing, matching credenza, tufted leather chairs, traditional luxury office furniture set." 
              },
              {
                name: "Carved Wood Executive Office Set",
                src: "/Screenshot 2026-06-23 234504.png",
                desc: "Elegant carved wooden executive desk with green leather inlay, matching sideboard storage, decorative trim, classic design suited for premium offices."
              },
              {
                name: "Walnut Executive Desk with Bookcase",
                src: "/Screenshot 2026-06-23 234512.png",
                desc: "Large walnut executive desk with decorative star-pattern panels, matching glass-front bookcase cabinet, traditional design for executive office setups."
              },
              {
                name: "Modern Wood Panel Executive Desk",
                src: "/Screenshot 2026-06-23 234520.png",
                desc: "Sleek L-shaped wooden executive desk with dark wood-grain finish, matching storage cabinet, contemporary design suited for modern executive offices."
              },
              {
                name: "Boat-Shape Executive Desk",
                src: "/Screenshot 2026-06-23 234528.png",
                desc: "Curved boat-shaped executive desk with walnut top, dark cylindrical metal legs, modern design featuring rounded conference-style extension."
              },
              {
                name: "Glossy White-Top Executive Desk",
                src: "/Screenshot 2026-06-23 234537.png",
                desc: "Modern executive desk with glossy white edge, walnut wood body, floating pedestal storage, sleek minimalist design for contemporary offices."
              },
              {
                name: "Wood Block Executive Desk",
                src: "/Screenshot 2026-06-23 234546.png",
                desc: "L-shaped executive desk with warm wood finish, built-in open bookshelf unit, matching side cabinet, modern functional design for offices."
              },
              {
                name: "L-Shaped Mahogany Executive Desk",
                src: "/Screenshot 2026-06-23 234553.png",
                desc: "Glossy mahogany L-shaped executive desk with extended return unit, rich wood-grain finish, classic design suited for spacious executive offices."
              }
            ].map((product, index) => (
              <div key={index} className="group border border-gray-100 shadow-sm hover:shadow-md transition-shadow bg-white flex flex-col">
                <div className="aspect-square bg-[#F5F5F5] p-4 sm:p-6 md:p-8 flex items-center justify-center relative overflow-hidden">
                  <Image 
                    src={product.src} 
                    alt={product.name} 
                    fill
                    className="object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-500 p-8"
                  />
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-[15px] font-bold text-gray-900 mb-2">{product.name}</h3>
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
