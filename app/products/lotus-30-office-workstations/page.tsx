import Image from 'next/image';
import Link from 'next/link';
import ContactForPricingLink from '@/components/ContactForPricingLink';

export default function Lotus30OfficeWorkstations() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans selection:bg-[#E5E0D8]">
      

      {/* Hero Section (Contained) */}
      <div className="max-w-[1200px] mx-auto px-4 pt-12 pb-8">
        <section className="relative h-[300px] md:h-[400px] flex items-center justify-center overflow-hidden bg-gray-900">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <img 
              src="/screenshot-2026-06-16-183344.png" 
              alt="Lotus 30 Office Workstations" 
              className="w-full h-full object-cover opacity-80"
            />
            {/* Center gradient for text readability */}
            <div className="absolute inset-0 bg-black/40"></div>
          </div>

          <div className="relative z-10 w-full text-center px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight font-serif">
              Lotus 30 Office Workstations
            </h1>
            <p className="text-gray-200 text-[13px] md:text-sm font-medium leading-relaxed max-w-2xl mx-auto">
              An elegant, economical, and architecturally refined screen workstation system. Modular, scalable, and engineered for the modern open-plan office.
            </p>
          </div>
        </section>
      </div>

      {/* Main Content Area */}
      <section className="max-w-[1200px] mx-auto px-4 py-12 flex flex-col md:flex-row gap-16">
        
        {/* Product Grid */}
        <div className="flex-1">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
            
            {[
              {
                name: 'Lotus Aluminum 30mm Workstation',
                image: '/screenshot-2026-06-16-183344.png',
                description: 'The Lotus 30 is an elegant and economical screen workstation system that is architectural in nature. A smart solution and complete modular product — suitable as a touch-down station, carrel, or dividing screen used in conjunction with other products. Features a universal connector hardware system making it very easy to specify and install. Available in a wide range of fabric colors for panel customization.',
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

          {/* Technical Specifications Section */}
          <div className="mt-20 pt-12 border-t border-gray-100">
            <h2 className="text-lg font-bold text-gray-900 tracking-tight mb-2 font-serif">
              Technical Specifications
            </h2>
            <p className="text-gray-400 text-[11px] mb-8">
              Lotus 30 Workstation System — Full specification data from HB Furniture
            </p>

            <div className="space-y-0">
              {[
                {
                  label: 'Tabletop — Straight Top',
                  value: 'D = 1600 / 1800mm — L = 700 / 800mm',
                },
                {
                  label: 'Tabletop — Ergonomic Top',
                  value: 'D = 1200 / 1400 / 1500 / 1600 / 1800mm — L = 600 / 700 / 800mm',
                },
                {
                  label: 'Tabletop — Corner Top',
                  value: 'D = 1400 / 1500 / 1600 / 1800mm — L = 1400 / 1500 / 1600 / 1800mm',
                },
                {
                  label: 'Tabletop — Quarter-Round Top',
                  value: 'D = 1200 / 1400mm — L = 1200 / 1400mm',
                },
                {
                  label: 'Screen Heights',
                  value: '1200mm and 1600mm',
                },
                {
                  label: 'Screen Widths',
                  value: '600 / 800 / 1066 / 1200 / 1600 / 1800mm',
                },
                {
                  label: 'Work Surface Height',
                  value: '750mm',
                },
                {
                  label: 'Panel Frame',
                  value: '30mm aluminum extrusion with universal connector hardware',
                },
                {
                  label: 'Cable Management',
                  value: 'Ducted wire channel for telecom and electricity at bottom of partition screen; optional external cable baskets under desks',
                },
                {
                  label: 'Fabrics',
                  value: 'Multiple colors available for selection',
                },
                {
                  label: 'Support Legs',
                  value: 'Type I, Type II, Type III',
                },
                {
                  label: 'Brackets',
                  value: 'Big Bracket (right), Big Bracket (left), Small Bracket',
                },
                {
                  label: 'Computer Support',
                  value: 'LCD arm support available',
                },
              ].map((spec, i) => (
                <div key={i} className="flex flex-col sm:flex-row py-3 border-b border-gray-100">
                  <span className="text-[11px] font-bold text-gray-700 uppercase tracking-wider sm:w-[240px] shrink-0 mb-1 sm:mb-0">
                    {spec.label}
                  </span>
                  <span className="text-[11px] text-gray-500 leading-relaxed">
                    {spec.value}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>

      </section>

    </div>
  );
}
