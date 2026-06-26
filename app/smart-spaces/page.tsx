import Image from 'next/image';
import Link from 'next/link';
import ContactForPricingLink from '@/components/ContactForPricingLink';

export default function SmartSpaces() {
  return (
    <div className="min-h-screen w-full min-w-0 overflow-x-clip bg-white text-gray-900 font-sans selection:bg-[#E5E0D8]">
      
            <section className="bg-white">
        <div className="w-full max-w-[1200px] mx-auto px-4 sm:px-6 py-16 sm:py-20 md:py-24">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight font-serif">
            Breakout & Lounge Pods
          </h1>
          <p className="text-gray-500 text-[13px] md:text-sm font-medium leading-relaxed max-w-2xl">
            Dynamic, collaborative, and flexible layouts designed for the modern agile workforce. Discover ergonomic seating and pods designed for peak performance and enduring comfort.
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
                name: "High-Back Privacy Booth Pods",
                src: "/Screenshot 2026-06-23 230211.png",
                desc: "Grey upholstered high-back booth seating with cutout windows, modular design, paired with sleek coffee tables, ideal for semi-private breakout discussions." 
              },
              {
                name: "Nature-Themed Relaxation Pod",
                src: "/Screenshot 2026-06-23 230220.png",
                desc: "Enclosed lounge pod with forest mural wallpaper, artificial grass flooring, hanging rattan swing chair, orange bean bags, designed for relaxation and recharge zones."
              },
              {
                name: "Cylindrical Privacy Cocoon Seats",
                src: "/Screenshot 2026-06-23 230229.png",
                desc: "Tall cylindrical privacy seating pods with bold red interiors, paired with colorful modular ottomans and soft seating, ideal for vibrant collaborative lounge environments."
              }
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
