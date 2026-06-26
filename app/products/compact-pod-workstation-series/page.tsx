import Image from 'next/image';
import Link from 'next/link';
import ContactForPricingLink from '@/components/ContactForPricingLink';

export default function CompactPodWorkstationSeries() {
  return (
    <div className="min-h-screen w-full min-w-0 overflow-x-clip bg-white text-gray-900 font-sans selection:bg-[#E5E0D8]">
      

      {/* Hero Section */}
      <section className="relative h-[280px] sm:h-[380px] md:h-[450px] flex items-end pb-16 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0 bg-gray-900">
          <img 
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2000" 
            alt="Compact Pod Workstation Series" 
            className="w-full h-full object-cover opacity-60"
          />
          {/* Bottom gradient so text is easily readable */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
        </div>

        <div className="relative z-10 w-full max-w-[1200px] mx-auto px-4 sm:px-6">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight font-serif">
            Compact Pod Workstation Series
          </h1>
          <p className="text-gray-200 text-[13px] md:text-sm font-medium leading-relaxed max-w-2xl">
            Space-efficient pod workstations with fabric panel dividers, monitor mounts, and modular configurations for startups, call centers, and compact offices.
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="max-w-[1200px] mx-auto px-4 sm:px-6 py-20">
        

        {/* Product Grid */}
        <div className="w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Single Pod Workstation",
                src: "/Screenshot 2026-06-23 231939.png",
                desc: "Compact single-seat workstation with green fabric panel, monitor mount support and side storage drawer, efficient solution for small offices."
              },
              {
                name: "Mini Cubicle Workstation",
                src: "/Screenshot 2026-06-23 231952.png",
                desc: "Space-saving single workstation with grey-green panel divider and built-in cable management, compact and budget-friendly individual desk setup."
              },
              {
                name: "Corner Twin Workstation",
                src: "/Screenshot 2026-06-23 231956.png",
                desc: "L-shaped twin workstation with dual monitor panels and green fabric dividers, suitable for small teams and reception areas."
              },
              {
                name: "Twin Pod Workstation",
                src: "/Screenshot 2026-06-23 232009.png",
                desc: "Two-seater linear pod workstation with shared green fabric divider and matching monitor mounts, compact dual-desk setup for startups and call centers."
              },
              {
                name: "Pedestal Pod Workstation",
                src: "/Screenshot 2026-06-23 232014.png",
                desc: "Single workstation pod with filing pedestal storage, dual monitor stands and fabric panel divider, complete setup for organized individual workspaces."
              },
              {
                name: "Multi-Bay Pod Workstation",
                src: "/Screenshot 2026-06-23 232021.png",
                desc: "Four-unit linear pod workstation row with uniform green panels and monitor mounts, scalable high-density seating solution for BPO and call center environments."
              },
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
