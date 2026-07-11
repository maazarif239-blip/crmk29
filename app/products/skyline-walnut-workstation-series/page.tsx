import Image from 'next/image';
import Link from 'next/link';
import ContactForPricingLink from '@/components/ContactForPricingLink';
import ProductPageHeader from '@/components/ProductPageHeader';

export default function SkylineWalnutWorkstationSeries() {
  return (
    <div className="min-h-screen w-full min-w-0 overflow-x-clip bg-white text-gray-900 font-sans selection:bg-[#E5E0D8]">
      <ProductPageHeader title="Skyline Walnut Workstation Series" description="Elevated walnut-finish workstations with sleek metal frames, privacy screens, and modular storage for modern high-rise office environments." />
{/* Main Content Area */}
      <section className="max-w-[1200px] mx-auto px-4 sm:px-6 py-20">
        

        {/* Product Grid */}
        <div className="w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Skyline Single Desk Workstation",
                src: "/Screenshot 2026-06-23 232800.png",
                desc: "Compact single-seat walnut workstation with slim metal frame, low fabric privacy screen and integrated cable management, refined individual workspace solution."
              },
              {
                name: "Skyline Dual Bench Workstation",
                src: "/Screenshot 2026-06-23 232819.png",
                desc: "Two-person walnut bench workstation with shared center fabric divider, matching mobile pedestals and slim metal leg frame, efficient dual-seat team layout."
              },
              {
                name: "Skyline Cluster Workstation",
                src: "/Screenshot 2026-06-23 232828.png",
                desc: "Four-person cluster workstation with walnut desktops, central privacy screen cross, integrated cable trays and metal frame legs, versatile team collaboration setup."
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
