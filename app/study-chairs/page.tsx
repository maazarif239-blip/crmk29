import Image from 'next/image';
import Link from 'next/link';
import ContactForPricingLink from '@/components/ContactForPricingLink';
import ProductPageHeader from '@/components/ProductPageHeader';
export default function StudyChairs() {
  return (
    <div className="min-h-screen w-full min-w-0 overflow-x-clip bg-white text-gray-900 font-sans selection:bg-[#E5E0D8]">
      <ProductPageHeader title="Study Chairs" description="Ergonomic principles meet architectural minimalism. Discover seating designed for sustained focus and comfort." />
{/* Main Content Area */}
      <section className="max-w-[1200px] mx-auto px-4 sm:px-6 py-20 flex flex-col md:flex-row gap-8 md:gap-12 lg:gap-16">
        
        {/* Product Grid */}
        <div className="flex-1">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Product 1 */}
            <div className="group border border-gray-100 shadow-sm hover:shadow-md transition-shadow bg-white flex flex-col">
              <div className="aspect-square bg-[#F5F5F5] p-4 sm:p-6 md:p-8 flex items-center justify-center relative overflow-hidden">
                <img 
                  src="/1.jpg" 
                  alt=" SkyBlue Stackable Study Chair" 
                  className="w-full h-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-[15px] font-bold text-gray-900 mb-2">Cateteria Chair</h3>
                <p className="text-gray-500 text-[11px] leading-relaxed flex-1">
                 Sky blue plastic study chair with metal frame, lightweight, stackable and easy to clean design.
                </p>
                <div className="mt-6">
                  <ContactForPricingLink />
                </div>
              </div>
            </div>

            {/* Product 2 */}
            <div className="group border border-gray-100 shadow-sm hover:shadow-md transition-shadow bg-white flex flex-col">
              <div className="aspect-square bg-[#F5F5F5] p-4 sm:p-6 md:p-8 flex items-center justify-center relative overflow-hidden">
                <img 
                  src="/2.jpg" 
                  alt="Navy Blue Cushioned Study Chair" 
                  className="w-full h-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-[15px] font-bold text-gray-900 mb-2">Circa Task Chair</h3>
                <p className="text-gray-500 text-[11px] leading-relaxed flex-1">
                  Navy blue fabric study chair with thick cushioned back aur seat, foldable armrests, height-adjustable mechanism aur rolling caster wheels. Offers great back support for extended study or work hours.
                </p>
                <div className="mt-6">
                  <ContactForPricingLink />
                </div>
              </div>
            </div>

            {/* Product 3 */}
            <div className="group border border-gray-100 shadow-sm hover:shadow-md transition-shadow bg-white flex flex-col">
              <div className="aspect-square bg-[#F5F5F5] p-4 sm:p-6 md:p-8 flex items-center justify-center relative overflow-hidden">
                <img 
                  src="/3.jpg" 
                  alt="Two-Tone Blue Grey Study Chair" 
                  className="w-full h-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-[15px] font-bold text-gray-900 mb-2">Two-Tone Blue Grey Study Chair</h3>
                <p className="text-gray-500 text-[11px] leading-relaxed flex-1">
                  Stylish blue backrest with grey cushioned seat, fixed armrests aur unique cutout back design. Smooth height adjustment aur rolling wheels make it comfortable for daily study or desk use.
                </p>
                <div className="mt-6">
                  <ContactForPricingLink />
                </div>
              </div>
            </div>

            {/* Product 4 */}
            <div className="group border border-gray-100 shadow-sm hover:shadow-md transition-shadow bg-white flex flex-col">
              <div className="aspect-square bg-[#F5F5F5] p-4 sm:p-6 md:p-8 flex items-center justify-center relative overflow-hidden">
                <img 
                  src="/4.jpg" 
                  alt=" Mesh Back Ergonomic Study Chair" 
                  className="w-full h-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-[15px] font-bold text-gray-900 mb-2">Mesh Back Ergonomic Study Chair</h3>
                <p className="text-gray-500 text-[11px] leading-relaxed flex-1">
                  Breathable black mesh-back study chair with adjustable armrests, lumbar support aur cushioned seat. Smooth-rolling wheels aur tilt mechanism provide flexible comfort for long hours of studying or working.
                </p>
                <div className="mt-6">
                  <ContactForPricingLink />
                </div>
              </div>
            </div>

            {/* Product 5 */}
            <div className="group border border-gray-100 shadow-sm hover:shadow-md transition-shadow bg-white flex flex-col">
              <div className="aspect-square bg-[#F5F5F5] p-4 sm:p-6 md:p-8 flex items-center justify-center relative overflow-hidden">
                <img 
                  src="/5.jpg" 
                  alt="Foldable Tablet Arm Study Chair" 
                  className="w-full h-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-[15px] font-bold text-gray-900 mb-2">Foldable Tablet Arm Study Chair</h3> 
                <p className="text-gray-500 text-[11px] leading-relaxed flex-1">
                  Compact mesh chair with foldable writing tablet, castor wheels aur space-saving foldable frame design.
                </p>
                <div className="mt-6">
                  <ContactForPricingLink />
                </div>
              </div>
            </div>

            {/* Product 6 */}
            <div className="group border border-gray-100 shadow-sm hover:shadow-md transition-shadow bg-white flex flex-col">
              <div className="aspect-square bg-[#F5F5F5] p-4 sm:p-6 md:p-8 flex items-center justify-center relative overflow-hidden">
                <img 
                  src="/6.jpg" 
                  alt="Red & Black Classic Study Chair" 
                  className="w-full h-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-[15px] font-bold text-gray-900 mb-2">Red & Black Classic Study Chair</h3>
                <p className="text-gray-500 text-[11px] leading-relaxed flex-1">
                 Red backrest with black cushioned seat, fixed armrests aur height-adjustable rolling base comfort.
                </p>
                <div className="mt-6">
                  <ContactForPricingLink />
                </div>
              </div>
            </div>

            {/* Product 7 */}
            <div className="group border border-gray-100 shadow-sm hover:shadow-md transition-shadow bg-white flex flex-col">
              <div className="aspect-square bg-[#F5F5F5] p-4 sm:p-6 md:p-8 flex items-center justify-center relative overflow-hidden">
                <img 
                  src="/7.jpg" 
                  alt="Comfort Study Black Fabric Chair" 
                  className="w-full h-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-[15px] font-bold text-gray-900 mb-2">Comfort Study Black Fabric Chair</h3>
                <p className="text-gray-500 text-[11px] leading-relaxed flex-1">
                  Black fabric study chair with padded seat, armrests, adjustable height aur smooth rolling wheels for comfort.
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
