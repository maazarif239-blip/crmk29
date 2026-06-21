import Image from 'next/image';
import Link from 'next/link';
import ContactForPricingLink from '@/components/ContactForPricingLink';
import ProductSidebar from '@/components/ProductSidebar';

export default function VisitorChairs() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans selection:bg-[#E5E0D8]">
      

      {/* Hero Section (Contained) */}
      <div className="max-w-[1200px] mx-auto px-4 pt-12 pb-8">
        <section className="relative h-[300px] md:h-[400px] flex items-center justify-center overflow-hidden bg-gray-900">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <img 
              src="/f.jpg" 
              alt="Visitor Chairs" 
              className="w-full h-full object-cover opacity-80"
            />
            {/* Center gradient for text readability */}
            <div className="absolute inset-0 bg-black/40"></div>
          </div>

          <div className="relative z-10 w-full text-center px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight font-serif">
              Visitor Chairs
            </h1>
            <p className="text-gray-200 text-[13px] md:text-sm font-medium leading-relaxed">
              Elegant first impressions for your reception and meeting spaces.
            </p>
          </div>
        </section>
      </div>

      {/* Main Content Area */}
      <section className="max-w-[1200px] mx-auto px-4 py-12 flex flex-col md:flex-row gap-16">
        
        {/* Sidebar */}
        <ProductSidebar activeCategory="/visitor-chairs" />

        {/* Product Grid */}
        <div className="flex-1">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
            
            {[
              {
                name: 'Austin',
                image: '/11.jpg',
                description: 'A refined visitor chair with clean lines and supportive comfort for reception areas and executive waiting spaces.',
              },
              {
                name: 'Cambri',
                image: '/12.jpg',
                description: 'Contemporary guest seating designed to bring a polished look and dependable comfort to modern office interiors.',
              },
              {
                name: 'Classic Chair',
                image: '/13.jpg',
                description: 'Timeless office seating solution offering an elegant silhouette ideal for meeting rooms and visitor zones.',
              },
              {
                name: 'Classic Visitor Chair',
                image: '/14.jpg',
                description: 'Professional visitor chair crafted for welcoming clients with balanced comfort and enduring everyday performance.',
              },
              {
                name: 'Conte Visitor Chair',
                image: '/15.jpg',
                description: 'Sleek guest chair that complements collaborative spaces, reception counters, and corporate meeting environments.',
              },
              {
                name: 'Dallas Red',
                image: '/16.jpg',
                description: 'Bold visitor seating option that adds a vibrant accent while maintaining comfort for office guests and clients.',
              },
              {
                name: 'Dallas',
                image: '/17.jpg',
                description: 'Versatile seating piece with a modern profile, suitable for lobbies, breakout spaces, and conference waiting areas.',
              },
              {
                name: 'Ring Chair',
                image: '/18.jpg',
                description: 'Stylish contemporary chair designed for informal meeting spaces and high-traffic visitor seating applications.',
              },
              {
                name: 'Swiss',
                image: '/19.jpg',
                description: 'Minimalist visitor chair that delivers a sophisticated presence and reliable comfort in premium office settings.',
              },
              {
                name: 'Visitor Chair',
                image: '/20.jpg',
                description: 'Practical and professional guest chair built to support daily use across receptions, offices, and meeting rooms.',
              },
              {
                name: 'Aurora Visitor Chair',
                image: '/99 (17).png',
                description: 'An elegant guest seating solution combining a contoured mesh backrest with a stable base for reception areas.',
              },
              {
                name: 'Orion Chair Visitor',
                image: '/99 (18).png',
                description: 'A premium office visitor chair featuring padded armrests and reliable lumbar support for client meeting rooms.',
              },
              {
                name: 'Minos Visitor Chair',
                image: '/99 (19).png',
                description: 'A modern lobby chair built with durable steel frames and cushioned seats for busy professional reception zones.',
              },
              {
                name: 'Circa-v',
                image: '/113 (1).png',
                description: 'A sophisticated guest chair offering superior lumbar alignment and modern aesthetics for waiting halls and meetings.',
              },
              {
                name: 'Generation-v',
                image: '/113 (2).png',
                description: 'An innovative visitor chair engineered with a responsive backrest to ensure dynamic, long-lasting comfort.',
              },
              {
                name: 'Dwell-v',
                image: '/113 (3).png',
                description: 'A premium lobby chair featuring elegant fabric upholstery and cushioned support to put clients at ease.',
              },
              {
                name: 'Syntax-v',
                image: '/113 (4).png',
                description: 'Contemporary meeting room chair showcasing a sleek profile and highly breathable mesh ventilation.',
              },
              {
                name: 'Nano',
                image: '/113 (5).png',
                description: 'A compact and stackable visitor chair built with a heavy-duty chrome frame for flexible office utility.',
              },
              {
                name: 'Apollo-v',
                image: '/113 (6).png',
                description: 'Executive-class guest chair boasting thick foam padding and classic structural support for reception rooms.',
              },
              {
                name: 'Orlando-v',
                image: '/113 (7).png',
                description: 'A stylish guest armchair designed with padded rest guards and premium contouring for professional spaces.',
              },
              {
                name: 'Ring-v',
                image: '/113 (8).png',
                description: 'Modern circular-back visitor chair providing space-saving elegance and robust stability for office environments.',
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
