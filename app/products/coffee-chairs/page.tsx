import Image from 'next/image';
import Link from 'next/link';
import ProductSidebar from '@/components/ProductSidebar';
import ContactForPricingLink from '@/components/ContactForPricingLink';

export default function CoffeeChairs() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans selection:bg-[#E5E0D8]">
      
      {/* Hero Section (Contained) */}
      <div className="max-w-[1200px] mx-auto px-4 pt-12 pb-8">
        <section className="relative h-[300px] md:h-[400px] flex items-center justify-center overflow-hidden bg-gray-900">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <img 
              src="/10004.png" 
              alt="Coffee Chairs" 
              className="w-full h-full object-cover opacity-80"
            />
            {/* Center gradient for text readability */}
            <div className="absolute inset-0 bg-black/40"></div>
          </div>

          <div className="relative z-10 w-full text-center px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight font-serif">
              Coffee Chairs
            </h1>
            <p className="text-gray-200 text-[13px] md:text-sm font-medium leading-relaxed max-w-2xl mx-auto">
              Elegant coffee chairs designed for restaurants, cafes, and modern homes.
            </p>
          </div>
        </section>
      </div>

      {/* Main Content Area */}
      <section className="max-w-[1200px] mx-auto px-4 py-12 flex flex-col md:flex-row gap-16">
        
        {/* Sidebar */}
        <ProductSidebar activeCategory="/products/coffee-chairs" />

        {/* Product Grid */}
        <div className="flex-1">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
            
            {[
              {
                name: 'Modern Accent Chair',
                image: '/10004.png',
                description: 'Comfortable contemporary chair with clean lines and durable construction, suitable for offices, lounges, and collaborative spaces.',
              },
              {
                name: 'Elegant Dining Chair',
                image: '/10005.png',
                description: 'A refined dining chair offering comfort and modern styling for residential and commercial interiors.',
              },
              {
                name: 'Premium Upholstered Dining Chair',
                image: '/10006.png',
                description: 'Soft upholstered seating with a sleek profile designed for stylish dining environments.',
              },
              {
                name: 'Contemporary Wooden Dining Chair',
                image: '/10007.png',
                description: 'Combines timeless craftsmanship with modern comfort for everyday dining and hospitality spaces.',
              },
              {
                name: 'Luxury Fabric Dining Chair',
                image: '/10008.png',
                description: 'Elegant fabric finish and ergonomic support create a premium seating experience.',
              },
              {
                name: 'Modern Side Dining Chair',
                image: '/10009.png',
                description: 'Minimalist styling with comfortable seating suitable for cafes, restaurants, and homes.',
              },
              {
                name: 'Designer Accent Dining Chair',
                image: '/10010.png',
                description: 'Stylish seating solution with a sophisticated look and durable frame.',
              },
              {
                name: 'Classic Lounge Chair',
                image: '/10011.png',
                description: 'Versatile chair offering comfort and refined aesthetics for multiple interior settings.',
              },
              {
                name: 'Premium Dining Chair',
                image: '/10012.png',
                description: 'Designed with comfort and durability in mind, making it ideal for daily use.',
              },
              {
                name: 'Modern Curved Dining Chair',
                image: '/10014.png',
                description: 'Smooth contours and quality materials provide both style and support.',
              },
              {
                name: 'Luxury Upholstered Side Chair',
                image: '/10016.png',
                description: 'Premium craftsmanship with elegant upholstery suited for modern interiors.',
              },
              {
                name: 'Executive Dining Chair',
                image: '/10017.png',
                description: 'Sophisticated design with comfortable seating for upscale dining spaces.',
              },
              {
                name: 'Contemporary Comfort Chair',
                image: '/10020.png',
                description: 'Balanced combination of style and functionality for residential and commercial use.',
              },
              {
                name: 'Minimalist Dining Chair',
                image: '/10021.png',
                description: 'Clean modern aesthetics with reliable comfort and durable construction.',
              },
              {
                name: 'Designer Upholstered Chair',
                image: '/10022.png',
                description: 'Premium materials and elegant lines create a stylish seating solution.',
              },
              {
                name: 'Modern Hospitality Chair',
                image: '/10023.png',
                description: 'Built for comfort and everyday use in restaurants, cafes, and meeting areas.',
              },
              {
                name: 'Luxury Contemporary Chair',
                image: '/10024.png',
                description: 'A sophisticated seating option blending comfort with modern elegance.',
              },
              {
                name: 'Classic Accent Chair',
                image: '/10025.png',
                description: 'Comfortable seating with timeless styling suitable for various interiors.',
              },
              {
                name: 'Premium Modern Dining Chair',
                image: '/10026.png',
                description: 'High-quality construction with ergonomic comfort and contemporary appeal.',
              },
              {
                name: 'Coffee Lounge Chair',
                image: '/10027.png',
                description: 'Stylish and inviting chair designed for lounges, cafés, and waiting areas.',
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
