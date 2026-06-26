import Image from 'next/image';
import Link from 'next/link';
import ContactForPricingLink from '@/components/ContactForPricingLink';
export default function StorageCabinets() {
  return (
    <div className="min-h-screen w-full min-w-0 overflow-x-clip bg-white text-gray-900 font-sans selection:bg-[#E5E0D8]">
      

      {/* Hero Section */}
      <section className="relative h-[280px] sm:h-[380px] md:h-[450px] flex items-end pb-16 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0 bg-gray-900">
          <img 
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2000" 
            alt="Storage Cabinets" 
            className="w-full h-full object-cover opacity-60"
          />
          {/* Bottom gradient so text is easily readable */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
        </div>

        <div className="relative z-10 w-full max-w-[1200px] mx-auto px-4 sm:px-6">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight font-serif">
            Storage Cabinets
          </h1>
          <p className="text-gray-200 text-[13px] md:text-sm font-medium leading-relaxed max-w-2xl">
            Precision-crafted storage solutions for the modern professional. Discover cabinets designed for secure organization, enduring quality, and seamless workspace integration.
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="max-w-[1200px] mx-auto px-4 sm:px-6 py-20 flex flex-col md:flex-row gap-8 md:gap-12 lg:gap-16">
        
        {/* Product Grid */}
        <div className="flex-1">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Mahogany Display & Storage Hutch",
                src: "/Screenshot 2026-06-23 233940.png",
                desc: "Classic dark wood cabinet with glass-front upper shelving for books and décor, paired with solid lower cabinet doors featuring decorative brass handles. Elegant executive office storage."
              },
              {
                name: "Wooden Bookcase Cabinet with Glass Doors",
                src: "/Screenshot 2026-06-23 233951.png",
                desc: "Light oak finish cabinet combining glass-paneled upper compartments for display with solid wood lower doors, offering tall vertical storage suited for libraries or executive offices."
              },
              {
                name: "Walnut & White Sliding Door Cabinet",
                src: "/Screenshot 2026-06-23 233954.png",
                desc: "Modern two-tone storage unit with walnut wood-grain sliding door over an open shelf compartment, set on a white base. Compact design for side storage."
              },
              {
                name: "Two-Tone Swing Door Storage Cabinet",
                src: "/Screenshot 2026-06-23 234018.png",
                desc: "Contemporary low cabinet with walnut-finish swing doors and a white frame, featuring a sleek top handle bar and tapered legs. Practical mid-height office storage."
              },
              {
                name: "Walnut Cabinet with Lock & Top Handle",
                src: "/Screenshot 2026-06-23 234023.png",
                desc: "Two-tone design with walnut door panels and a white side frame, fitted with a locking mechanism on the top rail for secure document storage."
              },
              {
                name: "Grey Steel Storage Cabinet",
                src: "/Screenshot 2026-06-23 234035.png",
                desc: "Minimalist all-grey metal cabinet with double swing doors and a discreet lock, designed for durable and secure storage of files and office supplies."
              },
              {
                name: "Tambour Roller Shutter Cabinet",
                src: "/Screenshot 2026-06-23 234048.png",
                desc: "Off-white steel cabinet with a horizontal roll-up tambour shutter door and key lock, ideal for easy-access filing and secure storage in compact office spaces."
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
