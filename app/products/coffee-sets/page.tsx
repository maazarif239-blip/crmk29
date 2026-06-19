import Image from 'next/image';
import Link from 'next/link';
import ProductSidebar from '@/components/ProductSidebar';
import ContactForPricingLink from '@/components/ContactForPricingLink';

export default function CoffeeSets() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans selection:bg-[#E5E0D8]">
      
      {/* Hero Section (Contained) */}
      <div className="max-w-[1200px] mx-auto px-4 pt-12 pb-8">
        <section className="relative h-[300px] md:h-[400px] flex items-center justify-center overflow-hidden bg-gray-900">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <img 
              src="/54e5b0c3-88a1-4b2f-a846-b92291f11681.png" 
              alt="Coffee Sets" 
              className="w-full h-full object-cover opacity-80"
            />
            {/* Center gradient for text readability */}
            <div className="absolute inset-0 bg-black/40"></div>
          </div>

          <div className="relative z-10 w-full text-center px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight font-serif">
              Coffee Sets
            </h1>
            <p className="text-gray-200 text-[13px] md:text-sm font-medium leading-relaxed max-w-2xl mx-auto">
              Elegant coffee seating and table combinations designed for cafés, lounges, waiting areas and modern interiors.
            </p>
          </div>
        </section>
      </div>

      {/* Main Content Area */}
      <section className="max-w-[1200px] mx-auto px-4 py-12 flex flex-col md:flex-row gap-16">
        
        {/* Sidebar */}
        <ProductSidebar activeCategory="/products/coffee-sets" />

        {/* Product Grid */}
        <div className="flex-1">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
            
            {[
              {
                name: 'Modern Accent Coffee Chair & Table Set',
                image: '/54e5b0c3-88a1-4b2f-a846-b92291f11681.png',
                description: 'A sophisticated modern accent coffee chair and table set designed for contemporary lounge environments, hotel lobbies, and upscale café interiors. Features clean lines, premium upholstery, and a complementary table that create a cohesive, inviting seating arrangement perfect for casual conversations and relaxed gatherings.',
              },
              {
                name: 'Contemporary Coffee Chair & Table Set',
                image: '/051bf99b-5db5-4849-8ed3-f23b4fe31b08.png',
                description: 'The contemporary coffee chair and table set combines minimalist aesthetics with exceptional comfort, making it ideal for corporate waiting areas, modern office break rooms, and boutique café spaces. The streamlined design and carefully selected materials ensure it complements a wide range of interior styles while maintaining a professional, polished appearance.',
              },
              {
                name: 'Stylish Coffee Table With Fabric Chairs',
                image: '/7fc2df0a-b586-4b8d-a495-b96d1f6a4664.png',
                description: 'This stylish coffee table with fabric chairs offers the perfect balance of functionality and visual appeal for residential and commercial interiors. The plush fabric chairs provide comfortable seating, while the elegant coffee table serves as a central focal point for both decorative display and practical use in living rooms, lounges, and reception areas.',
              },
              {
                name: 'Luxury Upholstered Coffee Chair & Table Set',
                image: '/12a90b09-8e57-4555-91b8-76341cdfe710.png',
                description: 'An exquisite luxury upholstered coffee chair and table set crafted for high-end hospitality environments, executive lounge areas, and premium residential spaces. Features premium-grade upholstery, meticulous craftsmanship, and sophisticated design elements that create an atmosphere of refined comfort and timeless elegance.',
              },
              {
                name: 'Premium Lounge Coffee Chair & Table Set',
                image: '/613102d9-21a1-447d-8d5b-17f131501e5b.png',
                description: 'The premium lounge coffee chair and table set is engineered for maximum comfort and visual appeal in premium lounge settings, airport business lounges, and exclusive club facilities. Designed with ergonomic principles in mind, this set provides exceptional support while maintaining a sleek, modern aesthetic that enhances any sophisticated interior.',
              },
              {
                name: 'Modern Round Coffee Table with Accent Chairs Set',
                image: '/5d786d0f-33c7-47eb-83bf-3f8926e29d8a.png',
                description: 'A stunning modern round coffee table with accent chairs set that brings a sense of organic flow and contemporary style to any interior space. The circular table design encourages conversation and connection, while the coordinating accent chairs provide comfortable, stylish seating perfect for hotel lobbies, modern offices, and upscale residential living areas.',
              }
            ].map((product, i) => (
              <div key={i} className="group flex flex-col cursor-pointer h-full">
                <div className="aspect-square bg-[#F5F5F5] p-8 flex items-center justify-center relative overflow-hidden transition-colors group-hover:bg-[#f0f0f0]">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="pt-5 text-left bg-white flex flex-col flex-1 px-2">
                  <h3 className="text-[13px] font-bold text-gray-900 group-hover:text-[#E04E1B] transition-colors">
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
