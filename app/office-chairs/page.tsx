import Image from 'next/image';
import Link from 'next/link';
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
            
            {/* Product 1 */}
            <div className="group border border-gray-100 shadow-sm hover:shadow-md transition-shadow bg-white flex flex-col">
              <div className="aspect-square bg-[#F5F5F5] p-8 flex items-center justify-center relative overflow-hidden">
                <Image 
                  src="/8.jpg" 
                  alt="Chesterfield Tufted Accent Chair" 
                  fill
                  className="object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-500 p-8"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-[15px] font-bold text-gray-900 mb-2">Chesterfield Tufted Accent Chair</h3>
                <p className="text-gray-500 text-[11px] leading-relaxed flex-1">
                  Elegant tufted accent chair designed for executive spaces, lounges, and premium office interiors.
                </p>
                <div className="mt-4 pt-4 border-t border-gray-50">
                  <Link href="/contact" className="text-[#EB5324] text-[9px] font-bold uppercase tracking-widest cursor-pointer hover:underline underline-offset-4">Contact for Pricing</Link>
                </div>
              </div>
            </div>

            {/* Product 2 */}
            <div className="group border border-gray-100 shadow-sm hover:shadow-md transition-shadow bg-white flex flex-col">
              <div className="aspect-square bg-[#F5F5F5] p-8 flex items-center justify-center relative overflow-hidden">
                <Image 
                  src="/9.jpg" 
                  alt="Light Hounslow Flushmount" 
                  fill
                  className="object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-500 p-8"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-[15px] font-bold text-gray-900 mb-2">Light Hounslow Flushmount</h3>
                <p className="text-gray-500 text-[11px] leading-relaxed flex-1">
                  Contemporary lighting fixture that enhances workspace ambiance with clean and modern aesthetics.
                </p>
                <div className="mt-4 pt-4 border-t border-gray-50">
                  <Link href="/contact" className="text-[#EB5324] text-[9px] font-bold uppercase tracking-widest cursor-pointer hover:underline underline-offset-4">Contact for Pricing</Link>
                </div>
              </div>
            </div>

            {/* Product 3 */}
            <div className="group border border-gray-100 shadow-sm hover:shadow-md transition-shadow bg-white flex flex-col">
              <div className="aspect-square bg-[#F5F5F5] p-8 flex items-center justify-center relative overflow-hidden">
                <Image 
                  src="/10.jpg" 
                  alt="Tilton Copper and Wood Table Lamp" 
                  fill
                  className="object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-500 p-8"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-[15px] font-bold text-gray-900 mb-2">Tilton Copper and Wood Table Lamp</h3>
                <p className="text-gray-500 text-[11px] leading-relaxed flex-1">
                  Stylish copper and wood table lamp offering warm illumination for offices, reception areas, and meeting spaces.
                </p>
                <div className="mt-4 pt-4 border-t border-gray-50">
                  <Link href="/contact" className="text-[#EB5324] text-[9px] font-bold uppercase tracking-widest cursor-pointer hover:underline underline-offset-4">Contact for Pricing</Link>
                </div>
              </div>
            </div>

          </div>
        </div>

      </section>


    </div>
  );
}
