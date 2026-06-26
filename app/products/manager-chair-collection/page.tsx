import Image from 'next/image';
import Link from 'next/link';
import ContactForPricingLink from '@/components/ContactForPricingLink';

export default function ManagerChairCollection() {
  return (
    <div className="min-h-screen w-full min-w-0 overflow-x-clip bg-white text-gray-900 font-sans selection:bg-[#E5E0D8]">
      
            <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <section className="bg-white py-16 sm:py-20 md:py-24 text-center">
          <div className="w-full px-4 max-w-2xl mx-auto">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight font-serif mx-auto">
              Manager Chair Collection
            </h1>
          <p className="text-gray-500 text-[13px] md:text-sm font-medium leading-relaxed max-w-2xl mx-auto">
            Ergonomically engineered manager and task seating for the modern professional. BIFMA certified performance meets contemporary design across our complete manager chair range.
          </p>
          </div>
        </section>
      </div>
{/* Main Content Area */}
      <section className="max-w-[1200px] mx-auto px-4 sm:px-6 py-12 flex flex-col md:flex-row gap-8 md:gap-12 lg:gap-16">
        
        {/* Product Grid */}
        <div className="flex-1">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 sm:gap-x-6 lg:gap-x-8 gap-y-8 sm:gap-y-10 lg:gap-y-12">
            
            {[
              {
                name: 'Pink High-Back Manager Chair',
                image: '/245-1-.png',
                description: 'BIFMA certified pink fabric chair with high back support and black base. Smooth wheels, ideal for comfortable daily office work.',
                bifma: true,
              },
              {
                name: 'White Frame Mesh Manager Chair Black & Grey',
                image: '/245-2-.png',
                description: 'Premium mesh-back chair with white frame, adjustable arms and headrest support. Ergonomic design for executive-level comfort.',
                bifma: true,
              },
              {
                name: 'Brown Fabric Manager Chair',
                image: '/245-3-.png',
                description: 'Simple brown fabric manager chair with adjustable armrests and black base. Comfortable padded seat, suitable for regular office use.',
                bifma: false,
              },
              {
                name: ' White Frame Mesh Manager Chair Red Seat',
                image: '/245-7-.png',
                description: 'BIFMA certified mesh-back chair with white frame and bold red cushion. Adjustable arms and lumbar support for better posture.',
                bifma: true,
              },
              {
                name: ' Beige Mesh High-Back Manager Chair',
                image: '/245-8-.png',
                description: 'Breathable beige mesh back chair with adjustable arms and dark seat cushion. Great airflow and comfort for long working hours.',
                bifma: false,
              },
              {
                name: ' Green Mid-Back Manager Chair',
                image: '/245-9-.png',
                description: 'BIFMA certified green fabric chair with fixed armrests and black base. Simple modern design, good for everyday manager seating.',
                bifma: true,
              }
            ].map((product, i) => (
              <div key={i} className="group flex flex-col cursor-pointer h-full border border-gray-100 shadow-sm hover:shadow-md transition-shadow bg-white">
                <div className="aspect-square bg-[#F5F5F5] p-4 sm:p-6 md:p-8 flex items-center justify-center relative overflow-hidden transition-colors group-hover:bg-[#f0f0f0]">
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
