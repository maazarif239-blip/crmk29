import Image from 'next/image';
import Link from 'next/link';
import ContactForPricingLink from '@/components/ContactForPricingLink';
import ProductPageHeader from '@/components/ProductPageHeader';

export default function SofasLoungeSeating() {
  return (
    <div className="min-h-screen w-full min-w-0 overflow-x-clip bg-white text-gray-900 font-sans selection:bg-[#E5E0D8]">
      <ProductPageHeader title="Sofas & Lounge Seating" />
{/* Main Content Area */}
      <section className="max-w-[1200px] mx-auto px-4 sm:px-6 py-16 flex flex-col md:flex-row gap-8 md:gap-12 lg:gap-16">
        
        {/* Product Grid */}
        <div className="flex-1">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {[
              {
                name: 'Black Leather Single Sofa Chair',
                desc: 'Black leather single sofa chair with metal legs, soft cushions, and modern boxy design for lounge.',
                image: '/35.jpg',
                isPlaceholder: false
              },
              {
                name: ' Classic Chesterfield Leather Sofa',
                image: '/270-1-.png',
                desc: 'Traditional tufted leather sofa with rolled arms and button detailing. Adds a rich, classic touch to any lounge or office space.',
              },
              {
                name: 'Grey Boxy Lounge Sofa',
                image: '/270-2-.png',
                desc: 'Grey fabric sofa with wooden legs, two cushioned backrests, and simple modern style for office lounge.',
              },
              {
                name: 'White Leather Sofa Set',
                image: '/270-3-.png',
                desc: 'White leather loveseat aur armchair set with glass coffee table, elegant and comfortable lounge seating.',
              },
              {
                name: ' Curved Striped Lounge Sofa Set',
                image: '/270-4-.png',
                desc: 'Curved striped fabric sofa with matching chairs aur round wooden coffee table, stylish lounge seating set.',
              },
              {
                name: 'Blue Curved Modular Lounge Set',
                image: '/270-5-.png',
                desc: 'Blue curved modular sofa with wooden side table aur round coffee table, modern lounge seating design.',
              },
              {
                name: 'Round Wooden Coffee Table',
                image: '/270-6-.png',
                desc: 'Round wooden coffee table with hollow center design, sturdy legs aur smooth polished modern finish.',
              },
              {
                name: ' Blue Modular Lounge Chairs with Table',
                image: '/270-7-.png',
                desc: 'Two blue modular lounge chairs with wooden side table in between, comfy aur space-saving design.',
              },
              {
                name: 'Wooden Side Table with Shelf',
                image: '/270-8-.png',
                desc: 'Wooden side table with open shelf storage, tapered legs aur compact modern lounge furniture design.',
              },
              {
                name: 'Walnut Round Coffee Table',
                image: '/270-9-.png',
                desc: 'Walnut wood round coffee table with metal legs aur sleek modern finish for lounge area.',
              },
              {
                name: 'Wooden Rectangular Coffee Table',
                image: '/270-10-.png',
                desc: 'Simple wooden rectangular coffee table with tapered legs, sturdy build aur minimal modern design.',
              },
              {
                name: 'Sage Green Sofa',
                image: '/270-11-.png',
                desc: 'Sage green fabric loveseat with curved armrests, wooden legs aur soft cushioned comfortable seating.',
              },
              {
                name: 'Green Modular Lounge Sofa Set',
                image: '/270-12-.png',
                desc: 'Green fabric modular sofa set with wooden legs aur side table, perfect for spacious lounge area.',
              },
              {
                name: 'Beige Tablet Arm Lounge Sofas',
                image: '/270-15-.png',
                desc: 'Beige fabric lounge sofas with foldable tablet arms, comfy cushions aur modern waiting area design.',
              },
              {
                name: 'Grey & Blue Leather Sofa Set',
                image: '/270-16-.png',
                desc: 'Grey leather armchair with matching blue leather loveseat, wooden legs aur sleek modern lounge design.',
              },
              {
                name: ' Classic Beige Three-Seater Sofa',
                image: '/270-18-.png',
                desc: 'Beige fabric three-seater sofa with soft cushions, simple armrests aur comfortable modern lounge design.',
              }
            ].map((product, i) => (
              <div key={i} className="group border border-gray-100 shadow-sm hover:shadow-md transition-shadow bg-white flex flex-col">
                <div className="aspect-[4/3] bg-[#F5F5F5] relative overflow-hidden flex items-center justify-center text-gray-300">
                  {/* @ts-ignore - isPlaceholder is not on all objects */}
                  {product.isPlaceholder ? (
                    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  ) : (
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 mix-blend-multiply"
                    />
                  )}
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-[14px] font-bold text-gray-900 mb-1">{product.name}</h3>
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
