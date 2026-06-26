import Image from 'next/image';
import Link from 'next/link';
import ContactForPricingLink from '@/components/ContactForPricingLink';

export default function UrbanLoftWorkstationSeries() {
  return (
    <div className="min-h-screen w-full min-w-0 overflow-x-clip bg-white text-gray-900 font-sans selection:bg-[#E5E0D8]">
      

            <section className="bg-white">
        <div className="w-full max-w-[1200px] mx-auto px-4 sm:px-6 py-16 sm:py-20 md:py-24">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight font-serif">
            Urban Loft Workstation Series
          </h1>
          <p className="text-gray-500 text-[13px] md:text-sm font-medium leading-relaxed max-w-2xl">
            Industrial-inspired workstation designs combining walnut finishes, metal frames, and modular layouts for contemporary loft-style offices.
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
                name: "Open Bay Workstation",
                src: "/Screenshot 2026-06-23 225900.png",
                desc: "Industrial-style open workstation with walnut storage credenzas, sleek metal-leg desks and ergonomic chairs, featuring a spacious dual-seat layout for modern loft offices."
              },
              {
                name: "Panel System Workstation",
                src: "/Screenshot 2026-06-23 225905.png",
                desc: "Cubicle-style panel workstations with overhead bookshelf storage, fabric privacy dividers and mobile pedestals, structured workspace solution for corporate offices."
              },
              {
                name: "Pergola Meeting Pod Workstation",
                src: "/Screenshot 2026-06-23 225917.png",
                desc: "Open-plan cubicle workstations surrounding a wooden pergola-style meeting pod, combining collaborative workspaces with private meeting zones."
              },
              {
                name: "Executive Media Workstation",
                src: "/Screenshot 2026-06-23 225940.png",
                desc: "Premium walnut executive desk with matching wall-mounted credenza and built-in display unit, sophisticated setup for executive offices and boardrooms."
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
