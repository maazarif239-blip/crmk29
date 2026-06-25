import Image from 'next/image';
import Link from 'next/link';
import ContactForPricingLink from '@/components/ContactForPricingLink';

export default function ClassicCubicleWorkstationSeries() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans selection:bg-[#E5E0D8]">
      

      {/* Hero Section */}
      <section className="relative h-[450px] flex items-end pb-16 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0 bg-gray-900">
          <img 
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2000" 
            alt="Classic Cubicle Workstation Series" 
            className="w-full h-full object-cover opacity-60"
          />
          {/* Bottom gradient so text is easily readable */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
        </div>

        <div className="relative z-10 w-full max-w-[1200px] mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight font-serif">
            Classic Cubicle Workstation Series
          </h1>
          <p className="text-gray-200 text-[13px] md:text-sm font-medium leading-relaxed max-w-2xl">
            Traditional panel-based cubicle workstations with wood-finish desks, overhead storage, and privacy screens for structured corporate environments.
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="max-w-[1200px] mx-auto px-4 py-20">
        

        {/* Product Grid */}
        <div className="w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Linear Run Workstation",
                src: "/Screenshot 2026-06-23 232952.png",
                desc: "Multi-bay panel workstation with wood-finish desks, overhead storage cabinets and mobile pedestals, efficient row layout for large teams and call centers."
              },
              {
                name: "Corner Bay Workstation",
                src: "/Screenshot 2026-06-23 233000.png",
                desc: "Compact corner-shaped panel workstation with translucent privacy screens, under-desk storage and CPU holders, designed for focused individual work."
              },
              {
                name: "Double Cluster Workstation",
                src: "/Screenshot 2026-06-23 233010.png",
                desc: "Back-to-back panel workstation cluster with curved desks, mobile drawer units and frosted glass dividers, balanced privacy-sharing setup for four-person teams."
              },
            ].map((product, index) => (
              <div key={index} className="group border border-gray-100 shadow-sm hover:shadow-md transition-shadow bg-white flex flex-col">
                <div className="aspect-square bg-[#F5F5F5] p-8 flex items-center justify-center relative overflow-hidden">
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
