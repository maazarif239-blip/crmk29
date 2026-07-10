import Image from 'next/image';
import Link from 'next/link';
import ContactForPricingLink from '@/components/ContactForPricingLink';
import ProductPageHeader from '@/components/ProductPageHeader';

export default function CrossLegWalnutWorkstationSeries() {
  return (
    <div className="min-h-screen w-full min-w-0 overflow-x-clip bg-white text-gray-900 font-sans selection:bg-[#E5E0D8]">
      <ProductPageHeader title="Cross-Leg Walnut Workstation Series" description="Elegant walnut-top workstations with distinctive X-shaped metal leg frames, privacy screens, and integrated storage for contemporary executive workspaces." />
{/* Main Content Area */}
      <section className="max-w-[1200px] mx-auto px-4 sm:px-6 py-20">
        

        {/* Product Grid */}
        <div className="w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Twin X-Leg Workstation",
                src: "/Screenshot 2026-06-23 231423.png",
                desc: "Dual-seater walnut desk with angular black X-shaped legs, triangular privacy screens and center drawer storage, modern minimalist workstation setup."
              },
              {
                name: "Single X-Leg Workstation",
                src: "/Screenshot 2026-06-23 231436.png",
                desc: "Compact workstation with rich walnut top, criss-cross metal legs and fold-up privacy screen with built-in drawer, sleek solution for individual workspaces."
              },
              {
                name: "Open Top X-Leg Workstation",
                src: "/Screenshot 2026-06-23 231444.png",
                desc: "Single-seat walnut workstation with bold X-frame metal legs, raised triangular screen panel and side drawer, stylish contemporary executive workspace."
              },
              {
                name: "Four-Way Cluster X-Leg Workstation",
                src: "/Screenshot 2026-06-23 231458.png",
                desc: "Four-person star-shaped cluster workstation with shared center privacy screens and criss-cross legs, compact walnut-finish collaboration setup."
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
