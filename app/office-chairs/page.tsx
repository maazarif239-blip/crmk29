import Image from 'next/image';
import Link from 'next/link';
import ContactForPricingLink from '@/components/ContactForPricingLink';
import ProductPageHeader from '@/components/ProductPageHeader';
export default function OfficeChairs() {
  return (
    <div className="min-h-screen w-full min-w-0 overflow-x-clip bg-white text-gray-900 font-sans selection:bg-[#E5E0D8]">
      <ProductPageHeader title="Office Chairs" description="Precision engineering for the modern professional. Discover ergonomic seating designed for peak performance and enduring comfort." />
{/* Main Content Area */}
      <section className="max-w-[1200px] mx-auto px-4 sm:px-6 py-20 flex flex-col md:flex-row gap-8 md:gap-12 lg:gap-16">
        
        {/* Product Grid */}
        <div className="flex-1">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Tufted Grey Accent Office Chair",
                src: "/8.jpg",
                desc: "Grey leather tufted chair with wooden legs, soft armrests, and comfy cushioned seat for office." 
              },
              
              {
                name: "Tan Leather Executive Office Chair",
                src: "/10.jpg",
                desc: "Tan leather office chair with padded armrests, smooth wheels, and adjustable height for comfort."
              },
             
              {
                name: "Beige Mesh Adjustable Office Chair",
                src: "/99-3-.png",
                desc: "Beige mesh-back chair with adjustable armrests, comfy seat aur smooth rolling wheels for office desk."
              },
              
              
              {
                name: "Red Headrest Office Chair",
                src: "/99-8-.png",
                desc: "Red mesh chair with headrest, fixed armrests aur black cushioned seat for long office hours."  
              },
              {
                name: "White Mesh Ergonomic Office Chair",
                src: "/99-9-.png",
                desc: "White frame mesh chair with adjustable armrests, black seat aur smooth wheels for easy movement."
              },
              {
                name: "Red Cushioned Office Chair",
                src: "/99-10-.png",
                desc: "Red fabric office chair with padded armrests, soft backrest aur rolling wheels for comfort."
              },
              {
                name: "Black Mesh Office Chair",
                src: "/99-11-.png",
                desc: "Black mesh-back chair with adjustable armrests, cushioned seat aur smooth rolling wheels for office use."
              },
              {
                name: "Striped Mesh Task Chair",
                src: "/Screenshot 2026-06-24 000146.png",
                desc: "Black mesh back with horizontal stripe pattern, fixed armrests, padded seat, tilt mechanism, and smooth-rolling caster wheels for everyday office use."
              },
              {
                name: "Grey Fabric Executive Chair",
                src: "/Screenshot 2026-06-24 000202.png",
                desc: "Light grey upholstered chair with curved loop armrests, high back support, swivel base, and sturdy five-star nylon legs for comfortable seating."
              },
              {
                name: "Boucle Swivel Accent Chair",
                src: "/Screenshot 2026-06-24 000213.png",
                desc: "Cream textured boucle fabric chair with rounded tub-style back, wrapped armrests, height-adjustable swivel base, ideal for stylish home office setups."
              },
              {
                name: "X-Back Mesh Office Chair",
                src: "/Screenshot 2026-06-24 000242.png",
                desc: "Black mesh chair featuring distinctive X-pattern backrest design, adjustable armrests, cushioned seat, lumbar support, and durable rolling base."
              },
              {
                name: "Compact Mesh Staff Chair",
                src: "/Screenshot 2026-06-24 000314.png",
                desc: "Simple black mesh-back chair with fixed armrests, breathable design, padded seat cushion, tilt-lock mechanism, suited for budget-friendly workstation seating."
              },
              {
                name: "Wave Pattern Mesh Chair",
                src: "/Screenshot 2026-06-24 000329.png",
                desc: "Sleek black mesh chair with subtle wave-line texture, solid loop armrests, ergonomic curved back, smooth recline function, and stable wheeled base."
              },
              {
                name: "Curved Mesh Visitor Chair",
                src: "/Screenshot 2026-06-24 000336.png",
                desc: "Minimalist black mesh chair with curved waterfall seat edge, slim armrests, breathable backrest, adjustable height, perfect for guest or staff seating."
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
