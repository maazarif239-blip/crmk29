import Image from 'next/image';
import Link from 'next/link';
import ProductSidebar from '@/components/ProductSidebar';
import ContactForPricingLink from '@/components/ContactForPricingLink';

export default function ManagerChairCollection() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans selection:bg-[#E5E0D8]">
      
      {/* Hero Section (Contained) */}
      <div className="max-w-[1200px] mx-auto px-4 pt-12 pb-8">
        <section className="relative h-[300px] md:h-[400px] flex items-center justify-center overflow-hidden bg-gray-900">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <img 
              src="/245 (1).png" 
              alt="Manager Chair Collection" 
              className="w-full h-full object-cover opacity-80"
            />
            {/* Center gradient for text readability */}
            <div className="absolute inset-0 bg-black/40"></div>
          </div>

          <div className="relative z-10 w-full text-center px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight font-serif">
              Manager Chair Collection
            </h1>
            <p className="text-gray-200 text-[13px] md:text-sm font-medium leading-relaxed max-w-2xl mx-auto">
              Ergonomically engineered manager and task seating for the modern professional. BIFMA certified performance meets contemporary design across our complete manager chair range.
            </p>
          </div>
        </section>
      </div>

      {/* Main Content Area */}
      <section className="max-w-[1200px] mx-auto px-4 py-12 flex flex-col md:flex-row gap-16">
        
        {/* Sidebar */}
        <ProductSidebar activeCategory="/products/manager-chair-collection" />

        {/* Product Grid */}
        <div className="flex-1">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
            
            {[
              {
                name: 'Orlando-J',
                image: '/245 (1).png',
                description: 'The Orlando-J is a BIFMA Certified mid-back manager chair delivering bold ergonomic performance in a vibrant upholstered form. The fully fabric-upholstered back and seat provide consistent comfort across extended working sessions, while the black frame, fixed T-armrests, and robust five-star castor base ensure lasting durability. Available in a range of fabric colors. BIFMA certification guarantees compliance with internationally recognized standards for safety, durability, and sustainability in office seating.',
                bifma: true,
              },
              {
                name: 'Hudson-J',
                image: '/245 (2).png',
                description: 'The Hudson-J is a BIFMA Certified premium manager chair that stands apart through its distinctive white sculptural outer shell — a bold design statement in any contemporary office environment. The dark grey breathable mesh back panel provides excellent airflow and lumbar support, while the generously padded fabric seat ensures all-day comfort. Height-adjustable white T-armrests and a matching white five-star base complete the cohesive premium aesthetic. A chair that combines serious ergonomic credentials with striking visual presence.',
                bifma: true,
              },
              {
                name: 'Portrait',
                image: '/245 (3).png',
                description: 'The Portrait is a refined mid-back manager task chair that brings quiet sophistication to any professional environment. The fully upholstered back and seat in warm fabric tones offer consistent comfort throughout the working day, while the clean black frame with fixed loop armrests delivers a timeless, understated aesthetic that integrates naturally into any office interior. A reliable, well-proportioned manager chair built for daily professional use.',
                bifma: false,
              },
              {
                name: 'Nero',
                image: '/245 (4).png',
                description: 'The Nero is a contemporary mid-back mesh manager chair that injects energy and personality into the modern office environment. The black breathable mesh back delivers superior ventilation and lumbar support, while the boldly colored fabric seat adds a dynamic accent to open-plan and collaborative workspaces. Adjustable T-armrests and a sturdy black five-star base complete a chair designed for professionals who want both ergonomic performance and visual impact. Available in multiple seat color options.',
                bifma: false,
              },
              {
                name: 'See',
                image: '/245 (5).png',
                description: 'The See is a mid-back mesh manager chair that balances breathable ergonomic performance with a bold color statement. The tall black mesh back panel maximizes airflow and provides excellent lumbar and mid-back support across long work sessions, while the vividly colored fabric seat creates a striking visual contrast. Padded height-adjustable T-armrests and a robust five-star black base complete a chair built for productive, comfortable professional use. Available in a range of seat upholstery colors.',
                bifma: false,
              },
              {
                name: 'Generation',
                image: '/245 (6).png',
                description: 'The Generation is a distinctively styled mid-back manager task chair featuring an eye-catching two-tone upholstery design with contrasting blue upper back panel and deep charcoal seat and lower back. Its generous ergonomic proportions, fixed curved armrests, and solid black five-star base deliver reliable everyday performance for team leaders, supervisors, and department managers who want a professional chair with a memorable design signature.',
                bifma: false,
              },
              {
                name: 'Ego',
                image: '/245 (7).png',
                description: 'The Ego is a BIFMA Certified mid-back mesh manager chair that delivers a premium, light aesthetic through its silver-white frame and base paired with a breathable silver-grey mesh back. The vibrant red fabric seat creates a striking color accent that energizes the workspace. BIFMA certification confirms compliance with rigorous international standards for seating safety, durability, and environmental responsibility. The Ego is ideal for modern, light-toned office interiors where ergonomic performance and visual elegance are equally valued.',
                bifma: true,
              },
              {
                name: 'Gravity-J',
                image: '/245 (8).png',
                description: 'The Gravity-J is a sophisticated mid-back mesh manager chair featuring a warm beige mesh back that combines breathable ergonomic support with a refined, understated aesthetic. The dark charcoal fabric seat provides a complementary contrast, while the height-adjustable black T-armrests and five-star castor base deliver reliable everyday ergonomic adjustment. An ideal choice for professional office environments where comfort, quality, and visual restraint are prioritized.',
                bifma: false,
              },
              {
                name: 'Paris-J',
                image: '/245 (9).png',
                description: 'The Paris-J is a BIFMA Certified mid-back manager chair that makes a bold statement through its vibrant fully upholstered lime green fabric finish. Designed for modern, energetic office environments, creative studios, and collaborative workspaces, the Paris-J combines BIFMA certified ergonomic performance with a color-forward design that commands attention. Fixed open-loop armrests and a robust black five-star castor base ensure durability and stability. Available in a wide range of upholstery color options to suit any office interior palette.',
                bifma: true,
              }
            ].map((product, i) => (
              <div key={i} className="group flex flex-col cursor-pointer h-full border border-gray-100 shadow-sm hover:shadow-md transition-shadow bg-white">
                <div className="aspect-square bg-[#F5F5F5] p-8 flex items-center justify-center relative overflow-hidden transition-colors group-hover:bg-[#f0f0f0]">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-500"
                  />
                  {product.bifma && (
                    <span className="absolute top-3 right-3 text-[8px] font-bold uppercase tracking-widest text-[#EB5324] border border-[#EB5324] rounded px-2 py-1 bg-white/90">
                      BIFMA Certified
                    </span>
                  )}
                </div>
                <div className="p-6 text-left bg-white flex flex-col flex-1">
                  <h3 className="text-[13px] font-bold text-gray-900 group-hover:text-[#EB5324] transition-colors">
                    {product.name}
                  </h3>
                  <p className="mt-3 text-gray-500 text-[11px] leading-relaxed flex-1">
                    {product.description}
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
