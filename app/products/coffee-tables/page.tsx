import Image from 'next/image';
import Link from 'next/link';
import ProductSidebar from '@/components/ProductSidebar';
import ContactForPricingLink from '@/components/ContactForPricingLink';

export default function CoffeeTables() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans selection:bg-[#E5E0D8]">
      
      {/* Hero Section (Contained) */}
      <div className="max-w-[1200px] mx-auto px-4 pt-12 pb-8">
        <section className="relative h-[300px] md:h-[400px] flex items-center justify-center overflow-hidden bg-gray-900">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <img 
              src="/10001.png" 
              alt="Coffee Tables" 
              className="w-full h-full object-cover opacity-80"
            />
            {/* Center gradient for text readability */}
            <div className="absolute inset-0 bg-black/40"></div>
          </div>

          <div className="relative z-10 w-full text-center px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight font-serif">
              Coffee Tables
            </h1>
            <p className="text-gray-200 text-[13px] md:text-sm font-medium leading-relaxed max-w-2xl mx-auto">
              Elegant coffee tables designed for lounges, cafés, waiting areas and contemporary interiors.
            </p>
          </div>
        </section>
      </div>

      {/* Main Content Area */}
      <section className="max-w-[1200px] mx-auto px-4 py-12 flex flex-col md:flex-row gap-16">
        
        {/* Sidebar */}
        <ProductSidebar activeCategory="/products/coffee-tables" />

        {/* Product Grid */}
        <div className="flex-1">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
            
            {[
              {
                name: 'Center Table',
                image: '/10001.png',
                description: 'A versatile and elegant center table designed to be the focal point of any living room, lounge, or waiting area. Features a balanced design, premium materials, and a timeless aesthetic that complements both modern and traditional interior styles perfectly.',
              },
              {
                name: 'Coffee Table',
                image: '/10002.png',
                description: 'This classic coffee table combines functionality with sophisticated design, making it ideal for residential living rooms, hotel lobbies, and corporate lounge spaces. Crafted with attention to detail, it offers a sturdy surface for both decorative display and everyday use.',
              },
              {
                name: 'Round Coffee Table',
                image: '/10003.png',
                description: 'A beautifully designed round coffee table that brings a sense of warmth and organic flow to any interior space. The circular shape encourages conversation and creates a welcoming atmosphere, perfect for cafés, boutique hotels, and contemporary home environments.',
              },
              {
                name: 'Coffee Table Ceramic',
                image: '/10004.png',
                description: 'A stunning coffee table featuring premium ceramic details, adding a touch of artisanal craftsmanship to any space. This unique piece blends traditional techniques with modern design sensibilities, making it a statement piece for discerning interiors.',
              },
              {
                name: 'Luxury Coffee Table',
                image: '/10005.png',
                description: 'An exquisite luxury coffee table crafted for high-end residential spaces, executive suites, and premium hospitality environments. Features superior materials, impeccable finish, and a design that exudes sophistication and refined taste.',
              },
              {
                name: 'Modern Marble Coffee Table',
                image: '/10006.png',
                description: 'A sleek modern marble coffee table that elevates any interior with its natural beauty and contemporary design. The elegant marble top paired with a carefully crafted base creates a timeless piece that works beautifully in both modern and classic settings.',
              },
              {
                name: 'Premium Designer Coffee Table',
                image: '/10010.png',
                description: 'A premium designer coffee table that showcases exceptional design and superior craftsmanship. This statement piece is perfect for design-forward interiors, luxury residences, and high-end commercial spaces seeking unique, eye-catching furniture.',
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
