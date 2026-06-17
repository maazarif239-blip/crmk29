import Image from 'next/image';
import Link from 'next/link';
import ContactForPricingLink from '@/components/ContactForPricingLink';
import ProductSidebar from '@/components/ProductSidebar';

export default function ExecutiveChairs() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans selection:bg-[#E5E0D8]">
      

      {/* Hero Section (Contained) */}
      <div className="max-w-[1200px] mx-auto px-4 pt-12 pb-8">
        <section className="relative h-[300px] md:h-[400px] flex items-center justify-center overflow-hidden bg-gray-900">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <img 
              src="/230 (1).png" 
              alt="Executive Chairs" 
              className="w-full h-full object-cover opacity-80"
            />
            {/* Center gradient for text readability */}
            <div className="absolute inset-0 bg-black/40"></div>
          </div>

          <div className="relative z-10 w-full text-center px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight font-serif">
              Executive Chairs
            </h1>
            <p className="text-gray-200 text-[13px] md:text-sm font-medium leading-relaxed max-w-2xl mx-auto">
              Commanding presence. Uncompromising comfort. Explore our range of executive seating engineered for leadership environments and premium office interiors.
            </p>
          </div>
        </section>
      </div>

      {/* Main Content Area */}
      <section className="max-w-[1200px] mx-auto px-4 py-12 flex flex-col md:flex-row gap-16">
        
        {/* Sidebar */}
        <ProductSidebar activeCategory="/products/executive-chairs" />

        {/* Product Grid */}
        <div className="flex-1">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
            
            {[
              {
                name: 'Gravity',
                image: '/230 (1).png',
                description: 'The Gravity is a flagship executive chair engineered for senior leadership environments. Its commanding high-back profile, premium upholstery, and robust synchronized tilt mechanism deliver an unmatched combination of authority and ergonomic support. Designed for long-duration use in executive offices, boardrooms, and CEO suites where presence and performance are equally demanded.',
              },
              {
                name: 'Synthesis',
                image: '/230 (2).png',
                description: 'The Synthesis executive chair merges contemporary design with advanced ergonomic engineering. A refined high-back structure with adjustable lumbar support, synchronized mechanism, and premium upholstered finish makes it ideal for senior managers and directors who require sustained comfort without compromising on executive aesthetic. A chair that works as hard as the person sitting in it.',
              },
              {
                name: 'Apollo',
                image: '/230 (3).png',
                description: 'The Apollo delivers bold executive presence with a sculpted high-back silhouette and premium leather or fabric upholstery options. Engineered for corner offices and executive suites, its robust tilt mechanism, adjustable armrests, and deep seat cushioning provide all-day ergonomic support for senior professionals who spend extended hours at their desk.',
              },
              {
                name: 'Rich',
                image: '/230 (4).png',
                description: 'The Rich executive chair combines classic boardroom elegance with modern ergonomic function. Its generously padded seat and back, premium upholstery finish, and polished base deliver a distinguished look suited to the most formal executive environments. An ideal choice for managing directors, senior partners, and C-suite professionals who value understated luxury.',
              },
              {
                name: 'Orlando',
                image: '/230 (5).png',
                description: 'The Orlando is a versatile executive chair that transitions effortlessly between formal office settings and contemporary open-plan environments. Its mid-to-high back design, ergonomic seat contour, and clean professional finish make it equally suited to executive offices, department head workstations, and premium meeting room seating configurations.',
              },
              {
                name: 'Prestige',
                image: '/230 (6).png',
                description: 'The Prestige lives up to its name — a high-back executive chair defined by its refined silhouette, superior build quality, and premium upholstery. Featuring an advanced tilt mechanism with tension control, height-adjustable armrests, and a polished five-star base, the Prestige is designed for executives who accept nothing less than the finest in workplace seating.',
              },
              {
                name: 'Humber',
                image: '/230 (7).png',
                description: 'The Humber is a distinguished executive chair with a timeless high-back design and premium padded upholstery. Its solid construction, ergonomic lumbar zone, and smooth height adjustment mechanism make it a reliable and refined choice for executive offices, boardroom head positions, and senior management workstations across corporate and institutional environments.',
              },
              {
                name: 'Hudson',
                image: '/230 (8).png',
                description: 'The Hudson executive chair delivers a contemporary take on classic boardroom seating. A sculpted high-back frame, premium upholstery with contrast stitching details, and a smooth multi-function tilt mechanism combine to create a seating experience that matches the demands of modern executive life. Suitable for CEO offices, partner desks, and high-specification boardroom environments.',
              },
              {
                name: 'Director',
                image: '/230 (9).png',
                description: 'The Director is precisely what its name suggests — a commanding, authoritative executive chair built for those at the top. Its imposing high-back profile, deeply cushioned seat, premium leather upholstery, and heavy-duty polished base make an immediate statement in any executive office or boardroom. The Director chair is the definitive seating choice for those who lead.',
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
