import Image from 'next/image';
import Link from 'next/link';
import ContactForPricingLink from '@/components/ContactForPricingLink';
import ProductSidebar from '@/components/ProductSidebar';

export default function StudyChairs() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans selection:bg-[#E5E0D8]">
      

      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center text-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0 bg-[#f4f4f4]">
          <img 
            src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&q=80&w=2000" 
            alt="Study Chairs" 
            className="w-full h-full object-cover opacity-80"
          />
          {/* Faint white gradient to ensure dark text pops while matching image look */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/40 to-white/80"></div>
        </div>

        <div className="relative z-10 max-w-2xl mx-auto px-4 mt-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight font-serif">
            Study Chairs
          </h1>
          <p className="text-gray-700 text-[13px] md:text-sm font-medium leading-relaxed max-w-xl mx-auto">
            Ergonomic principles meet architectural minimalism. Discover seating designed for sustained focus and comfort.
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="max-w-[1200px] mx-auto px-4 py-20 flex flex-col md:flex-row gap-16">
        
        {/* Sidebar */}
        <ProductSidebar activeCategory="/study-chairs" />

        {/* Product Grid */}
        <div className="flex-1">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Product 1 */}
            <div className="group border border-gray-100 shadow-sm hover:shadow-md transition-shadow bg-white flex flex-col">
              <div className="aspect-square bg-[#F5F5F5] p-8 flex items-center justify-center relative overflow-hidden">
                <img 
                  src="/1.jpg" 
                  alt="Cateteria Chair" 
                  className="w-full h-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-[15px] font-bold text-gray-900 mb-2">Cateteria Chair</h3>
                <p className="text-gray-500 text-[11px] leading-relaxed flex-1">
                  Comfortable and durable seating solution designed for collaborative learning and cafeteria environments.
                </p>
                <div className="mt-6">
                  <ContactForPricingLink />
                </div>
              </div>
            </div>

            {/* Product 2 */}
            <div className="group border border-gray-100 shadow-sm hover:shadow-md transition-shadow bg-white flex flex-col">
              <div className="aspect-square bg-[#F5F5F5] p-8 flex items-center justify-center relative overflow-hidden">
                <img 
                  src="/2.jpg" 
                  alt="Circa Task Chair" 
                  className="w-full h-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-[15px] font-bold text-gray-900 mb-2">Circa Task Chair</h3>
                <p className="text-gray-500 text-[11px] leading-relaxed flex-1">
                  Ergonomic task chair engineered for daily office productivity and comfort.
                </p>
                <div className="mt-6">
                  <ContactForPricingLink />
                </div>
              </div>
            </div>

            {/* Product 3 */}
            <div className="group border border-gray-100 shadow-sm hover:shadow-md transition-shadow bg-white flex flex-col">
              <div className="aspect-square bg-[#F5F5F5] p-8 flex items-center justify-center relative overflow-hidden">
                <img 
                  src="/3.jpg" 
                  alt="Generation Task Chair" 
                  className="w-full h-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-[15px] font-bold text-gray-900 mb-2">Generation Task Chair</h3>
                <p className="text-gray-500 text-[11px] leading-relaxed flex-1">
                  Modern, responsive task chair offering dynamic back support and sleek aesthetics.
                </p>
                <div className="mt-6">
                  <ContactForPricingLink />
                </div>
              </div>
            </div>

            {/* Product 4 */}
            <div className="group border border-gray-100 shadow-sm hover:shadow-md transition-shadow bg-white flex flex-col">
              <div className="aspect-square bg-[#F5F5F5] p-8 flex items-center justify-center relative overflow-hidden">
                <img 
                  src="/4.jpg" 
                  alt="Puma Task Chair" 
                  className="w-full h-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-[15px] font-bold text-gray-900 mb-2">Puma Task Chair</h3>
                <p className="text-gray-500 text-[11px] leading-relaxed flex-1">
                  Agile and breathable seating solution perfect for intensive work or study sessions.
                </p>
                <div className="mt-6">
                  <ContactForPricingLink />
                </div>
              </div>
            </div>

            {/* Product 5 */}
            <div className="group border border-gray-100 shadow-sm hover:shadow-md transition-shadow bg-white flex flex-col">
              <div className="aspect-square bg-[#F5F5F5] p-8 flex items-center justify-center relative overflow-hidden">
                <img 
                  src="/5.jpg" 
                  alt="Ring Chair" 
                  className="w-full h-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-[15px] font-bold text-gray-900 mb-2">Ring Chair</h3>
                <p className="text-gray-500 text-[11px] leading-relaxed flex-1">
                  Versatile, minimalist chair ideal for quick meetings and dynamic workspaces.
                </p>
                <div className="mt-6">
                  <ContactForPricingLink />
                </div>
              </div>
            </div>

            {/* Product 6 */}
            <div className="group border border-gray-100 shadow-sm hover:shadow-md transition-shadow bg-white flex flex-col">
              <div className="aspect-square bg-[#F5F5F5] p-8 flex items-center justify-center relative overflow-hidden">
                <img 
                  src="/6.jpg" 
                  alt="Syntex Task Chair" 
                  className="w-full h-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-[15px] font-bold text-gray-900 mb-2">Syntex Task Chair</h3>
                <p className="text-gray-500 text-[11px] leading-relaxed flex-1">
                  High-performance task chair featuring breathable mesh and intuitive ergonomic controls.
                </p>
                <div className="mt-6">
                  <ContactForPricingLink />
                </div>
              </div>
            </div>

            {/* Product 7 */}
            <div className="group border border-gray-100 shadow-sm hover:shadow-md transition-shadow bg-white flex flex-col">
              <div className="aspect-square bg-[#F5F5F5] p-8 flex items-center justify-center relative overflow-hidden">
                <img 
                  src="/7.jpg" 
                  alt="Trend Task Chair" 
                  className="w-full h-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-[15px] font-bold text-gray-900 mb-2">Trend Task Chair</h3>
                <p className="text-gray-500 text-[11px] leading-relaxed flex-1">
                  Contemporary seating combining aesthetic appeal with all-day ergonomic support.
                </p>
                <div className="mt-6">
                  <ContactForPricingLink />
                </div>
              </div>
            </div>

          </div>
        </div>

      </section>


    </div>
  );
}
