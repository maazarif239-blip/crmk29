import Image from 'next/image';
import Link from 'next/link';
import ContactForPricingLink from '@/components/ContactForPricingLink';
import ProductSidebar from '@/components/ProductSidebar';

export default function OfficeChairs() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans selection:bg-[#E5E0D8]">
      

      {/* Hero Section */}
      <section className="relative h-[450px] flex items-end pb-16 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0 bg-gray-900">
          <img 
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2000" 
            alt="Office Chairs" 
            className="w-full h-full object-cover opacity-60"
          />
          {/* Bottom gradient so text is easily readable */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
        </div>

        <div className="relative z-10 w-full max-w-[1200px] mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight font-serif">
            Office Chairs
          </h1>
          <p className="text-gray-200 text-[13px] md:text-sm font-medium leading-relaxed max-w-2xl">
            Precision engineering for the modern professional. Discover ergonomic seating designed for peak performance and enduring comfort.
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="max-w-[1200px] mx-auto px-4 py-20 flex flex-col md:flex-row gap-16">
        
        {/* Sidebar */}
        <ProductSidebar activeCategory="/office-chairs" />

        {/* Product Grid */}
        <div className="flex-1">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Chesterfield Tufted Accent Chair",
                src: "/8.jpg",
                desc: "Elegant tufted accent chair designed for executive spaces, lounges, and premium office interiors."
              },
              {
                name: "Light Hounslow Flushmount",
                src: "/9.jpg",
                desc: "Contemporary lighting fixture that enhances workspace ambiance with clean and modern aesthetics."
              },
              {
                name: "Tilton Copper and Wood Table Lamp",
                src: "/10.jpg",
                desc: "Stylish copper and wood table lamp offering warm illumination for offices, reception areas, and meeting spaces."
              },
              {
                name: "RICH Hi-Back Chair",
                src: "/99 (1).png",
                desc: "An ergonomic high-back chair engineered with premium lumbar support and breathable mesh for executive workspaces."
              },
              {
                name: "Glory Chair",
                src: "/99 (2).png",
                desc: "A premium corporate desk chair featuring synchronous tilt mechanics and plush cushioning for all-day comfort."
              },
              {
                name: "Glory Chair without Neck Back",
                src: "/99 (3).png",
                desc: "A sleek mid-back office chair offering excellent lumbar alignment and freedom of motion for dynamic tasks."
              },
              {
                name: "Radius 17",
                src: "/99 (4).png",
                desc: "A contemporary office chair designed with a flexible backrest and contour molding for optimal ergonomic posture."
              },
              {
                name: "S3",
                src: "/99 (5).png",
                desc: "An ultra-modern task chair utilizing premium responsive mesh and adjustable armrests for tailored seating comfort."
              },
              {
                name: "Calypso Chair",
                src: "/99 (6).png",
                desc: "A high-performance ergonomic chair built with full body support, dynamic neck cradle, and active response tension."
              },
              {
                name: "Calypso Chair without Neck Back",
                src: "/99 (7).png",
                desc: "A mid-back professional seating option combining breathable mesh ventilation with premium lumbar cushioning."
              },
              {
                name: "Aurora High Back",
                src: "/99 (8).png",
                desc: "An executive-class high-back chair with luxurious foam padding and a heavy-duty chrome frame for lasting comfort."
              },
              {
                name: "J-1 Chair",
                src: "/99 (9).png",
                desc: "A versatile office chair featuring customizable tension adjustability and a contoured seat for daily productivity."
              },
              {
                name: "J-2 Chair",
                src: "/99 (10).png",
                desc: "A durable and compact task chair designed with high-density foam and smooth swivel controls for agile office use."
              },
              {
                name: "E-1 Luxury Chair",
                src: "/99 (11).png",
                desc: "A premium executive armchair boasting high-end upholstery, polished aluminum accents, and fully customizable tilt angles."
              },
              {
                name: "E-1 Simple Chair",
                src: "/99 (12).png",
                desc: "An elegant and minimalist task chair designed with sleek structural lines and comfortable mesh seating for modern workspaces."
              },
              {
                name: "Dallas Chair",
                src: "/99 (13).png",
                desc: "A classic conference room chair offering superior foam support, refined fabric stitching, and an elegant profile."
              },
              {
                name: "Orion Chair",
                src: "/99 (14).png",
                desc: "An advanced ergonomic office chair engineered with 3D armrests and intuitive weight-sensing tilt technology."
              },
              {
                name: "Aurora Chair",
                src: "/99 (15).png",
                desc: "A stylish mid-back desk chair featuring a breathable flex-back design and a heavy-duty nylon base for everyday office comfort."
              },
              {
                name: "Leto Chair",
                src: "/99 (16).png",
                desc: "A premium architectural task chair designed to provide precise spine alignment and modern aesthetic appeal."
              }
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
