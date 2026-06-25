import Image from 'next/image';
import Link from 'next/link';
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
              src="/245-1-.png" 
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
        
        {/* Product Grid */}
        <div className="flex-1">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
            
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
