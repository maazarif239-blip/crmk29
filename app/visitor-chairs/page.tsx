import Image from 'next/image';
import Link from 'next/link';
import ContactForPricingLink from '@/components/ContactForPricingLink';
import ProductPageHeader from '@/components/ProductPageHeader';
export default function VisitorChairs() {
  return (
    <div className="min-h-screen w-full min-w-0 overflow-x-clip bg-white text-gray-900 font-sans selection:bg-[#E5E0D8]">
      <ProductPageHeader title="Visitor Chairs" description="Elegant first impressions for your reception and meeting spaces." />
{/* Main Content Area */}
      <section className="max-w-[1200px] mx-auto px-4 sm:px-6 py-12 flex flex-col md:flex-row gap-8 md:gap-12 lg:gap-16">
        
        {/* Product Grid */}
        <div className="flex-1">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 sm:gap-x-6 lg:gap-x-8 gap-y-8 sm:gap-y-10 lg:gap-y-12">
            
            {[
              {
                name: 'Wooden Modern Visitor Chair',
                image: '/11.jpg',
                description: 'Wooden frame visitor chair with black cushioned seat and stylish open armrest design for guests.',
              },
              {
                name: 'White Fabric Visitor Chair',
                image: '/12.jpg',
                description: 'White fabric visitor chair with wooden legs, soft armrests, and simple elegant look for office.',
              },
             
              
              {
                name: 'Maroon Cantilever Visitor Chair',
                image: '/16.jpg',
                description: 'Maroon and black visitor chair with chrome base, padded armrests, and comfy cushioned seat design.',
              },
              {
                name: 'Blue Cantilever Visitor Chair',
                image: '/17.jpg',
                description: 'Blue fabric visitor chair with chrome frame, curved armrests, and smooth cantilever base for guests.',
              },
              
              {
                name: 'Wooden Slat Back Visitor Chair',
                image: '/19.jpg',
                description: 'Light wood visitor chair with slatted backrest, grey cushioned seat, and simple sturdy armrest design.',
              },
              {
                name: 'Striped Cantilever Visitor Chair',
                image: '/20.jpg',
                description: 'Black and white striped visitor chair with metal base, padded armrests, and comfy cushioned seat design.',
              },
              {
                name: 'Black Leather Cantilever Visitor Chair',
                image: '/Screenshot 2026-06-24 001523.png',
                description: 'Elegant black leather visitor chair with padded armrests and a chrome cantilever sleigh base, offering a sleek, executive look for guest seating in offices.',
              },
              {
                name: 'Grey Fabric Sled-Base Visitor Chair',
                image: '/Screenshot 2026-06-24 001528.png',
                description: 'Contemporary visitor chair upholstered in light grey fabric with curved black armrests and a black sled base, combining comfort with a soft modern aesthetic.',
              },
              {
                name: 'Mesh Back Chrome Cantilever Visitor Chair',
                image: '/Screenshot 2026-06-24 001548.png',
                description: 'Breathable mesh-back visitor chair with black fabric seat, chrome armrests, and a polished chrome cantilever frame, practical and durable for reception or meeting areas.',
              },
            ].map((product, i) => (
              <div key={i} className="group flex flex-col cursor-pointer h-full">
                <div className="aspect-square bg-[#F5F5F5] p-4 sm:p-6 md:p-8 flex items-center justify-center relative overflow-hidden transition-colors group-hover:bg-[#f0f0f0]">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="pt-5 text-left bg-white flex flex-col flex-1 px-2">
                  <h3 className="text-[13px] font-bold text-gray-900 group-hover:text-[#EB5324] transition-colors">
                    {product.name}
                  </h3>
                  <p className="mt-3 text-gray-500 text-[11px] leading-relaxed flex-1">
                    {product.description}
                  </p>
                  <div className="mt-6 mb-2">
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
