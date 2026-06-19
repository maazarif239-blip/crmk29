import Image from 'next/image';
import Link from 'next/link';
import ProductSidebar from '@/components/ProductSidebar';
import ContactForPricingLink from '@/components/ContactForPricingLink';

export default function Stools() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans selection:bg-[#E5E0D8]">
      
      {/* Hero Section (Contained) */}
      <div className="max-w-[1200px] mx-auto px-4 pt-12 pb-8">
        <section className="relative h-[300px] md:h-[400px] flex items-center justify-center overflow-hidden bg-gray-900">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <img 
              src="/10010.png" 
              alt="Stools" 
              className="w-full h-full object-cover opacity-80"
            />
            {/* Center gradient for text readability */}
            <div className="absolute inset-0 bg-black/40"></div>
          </div>

          <div className="relative z-10 w-full text-center px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight font-serif">
              Stools
            </h1>
            <p className="text-gray-200 text-[13px] md:text-sm font-medium leading-relaxed max-w-2xl mx-auto">
              Elegant stools and bar seating for restaurants, cafes, and modern spaces.
            </p>
          </div>
        </section>
      </div>

      {/* Main Content Area */}
      <section className="max-w-[1200px] mx-auto px-4 py-12 flex flex-col md:flex-row gap-16">
        
        {/* Sidebar */}
        <ProductSidebar activeCategory="/products/stools" />

        {/* Product Grid */}
        <div className="flex-1">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
            
            {[
              {
                name: 'Modern Stool',
                image: '/10004.png',
                description: 'A sleek modern stool with clean lines and durable construction, perfect for contemporary interiors and commercial spaces.',
              },
              {
                name: 'Upholstered Bar Stool',
                image: '/10005.png',
                description: 'Comfortable upholstered bar stool with elegant design, ideal for cafes and upscale dining environments.',
              },
              {
                name: 'Premium Velvet Bar Stool',
                image: '/10006.png',
                description: 'Luxurious velvet bar stool with sophisticated styling, designed to elevate any bar or lounge area.',
              },
              {
                name: 'Contemporary Wooden Stool',
                image: '/10007.png',
                description: 'Timeless wooden stool with contemporary design, combining natural materials with modern comfort.',
              },
              {
                name: 'Elegant Fabric Bar Stool',
                image: '/10008.png',
                description: 'Stylish fabric bar stool with elegant details, providing both comfort and visual appeal for modern spaces.',
              },
              {
                name: 'Minimalist Bar Stool',
                image: '/10009.png',
                description: 'Sleek minimalist bar stool with clean aesthetics, perfect for contemporary cafes and restaurants.',
              },
              {
                name: 'Luxury Velvet Bar Stool with Gold Base',
                image: '/10010.png',
                description: 'Opulent velvet bar stool with a glamorous gold base, adding a touch of luxury to any interior setting.',
              },
              {
                name: 'Modern White Bar Stool with Adjustable Height',
                image: '/10011.png',
                description: 'Versatile white bar stool with adjustable height functionality, ideal for both residential and commercial use.',
              },
              {
                name: 'Luxury Velvet Bar Stool with Gold Base',
                image: '/10012.png',
                description: 'Premium velvet bar stool with elegant gold accents, designed for sophisticated and upscale environments.',
              },
              {
                name: 'Contemporary Stool',
                image: '/10013.png',
                description: 'Modern contemporary stool with streamlined design, perfectly suited for contemporary interiors.',
              },
              {
                name: 'Luxury Adjustable Bar Stool with Padded Backrest',
                image: '/10014.png',
                description: 'Ergonomic adjustable bar stool with padded backrest, providing superior comfort for extended seating.',
              },
              {
                name: 'Modern Bar Stool with Chrome Base',
                image: '/10015.png',
                description: 'Sleek modern bar stool featuring a polished chrome base, adding a touch of contemporary elegance.',
              },
              {
                name: 'Elegant Blue Bar Stool with Gold Base',
                image: '/10016.png',
                description: 'Stunning blue bar stool with glamorous gold base, creating a sophisticated focal point in any space.',
              },
              {
                name: 'Modern Adjustable Bar Stool',
                image: '/10017.png',
                description: 'Versatile adjustable bar stool with modern design, perfect for flexible seating arrangements.',
              },
              {
                name: 'Contemporary Adjustable Bar Stool',
                image: '/10018.png',
                description: 'Stylish contemporary bar stool with adjustable height, blending functionality with modern aesthetics.',
              },
              {
                name: 'Premium Stool',
                image: '/10019.png',
                description: 'High-quality premium stool crafted with attention to detail, perfect for discerning interiors.',
              },
              {
                name: 'Designer Bar Stool',
                image: '/10020.png',
                description: 'Exclusive designer bar stool with unique styling, making a statement in any contemporary setting.',
              },
              {
                name: 'Modern Two-Tone Adjustable Bar Stool',
                image: '/10021.png',
                description: 'Trendy two-tone adjustable bar stool with modern design, adding visual interest to any space.',
              },
              {
                name: 'Premium Adjustable Bar Stool with Padded Backrest',
                image: '/10022.png',
                description: 'Luxurious adjustable bar stool with padded backrest, offering premium comfort and style.',
              },
              {
                name: 'Modern Adjustable Bar Stool with Cushioned Backrest',
                image: '/10023.png',
                description: 'Comfort-focused adjustable bar stool with cushioned backrest, designed for prolonged seating comfort.',
              },
              {
                name: 'Modern Cushioned Bar Stool',
                image: '/10024.png',
                description: 'Comfortable cushioned bar stool with modern design, perfect for both residential and commercial use.',
              },
              {
                name: 'Modern Backless Bar Stool',
                image: '/10025.png',
                description: 'Sleek backless bar stool with minimalist design, ideal for compact spaces and contemporary interiors.',
              },
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
