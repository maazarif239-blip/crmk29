import Image from 'next/image';
import Link from 'next/link';
import ContactForPricingLink from '@/components/ContactForPricingLink';
export default function OfficeSets() {
  return (
    <div className="min-h-screen w-full min-w-0 overflow-x-clip bg-white text-gray-900 font-sans selection:bg-[#E5E0D8]">
      
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <section className="bg-white py-16 sm:py-20 md:py-24 text-center">
          <div className="w-full px-4 max-w-2xl mx-auto">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight font-serif">
              Office Sets
            </h1>
            <p className="text-gray-500 text-[13px] md:text-sm font-medium leading-relaxed max-w-2xl mx-auto">
              Modern office table and seating combinations designed for executive cabins, workspaces, and collaborative environments.
            </p>
          </div>
        </section>
      </div>

      {/* Main Content Area */}
      <section className="max-w-[1200px] mx-auto px-4 sm:px-6 py-12 flex flex-col md:flex-row gap-8 md:gap-12 lg:gap-16">
        
        {/* Product Grid */}
        <div className="flex-1">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 sm:gap-x-6 lg:gap-x-8 gap-y-8 sm:gap-y-10 lg:gap-y-12">
            
            {[
              {
                name: 'Executive Office Table Set',
                image: '/10016.jpeg',
                description: 'Masterfully crafted executive office set with expansive work surface, integrated storage aur premium seating for senior leadership.',
              },
              {
                name: 'Modern Office Workstation Set',
                image: '/10008.jpeg',
                description: ' Modern workstation set with clean lines, ergonomic seating aur adaptable desk configuration, perfect for collaborative corporate environments.',
              },
              {
                name: 'Premium Office Table Set',
                image: '/10009.jpeg',
                description: 'Premium desk set with elegant materials, expansive primary desk aur coordinated seating for formal meetings and intense work.',
              },
              {
                name: 'Contemporary Office Desk Set',
                image: '/10003.jpeg',
                description: 'Contemporary minimalist desk set with sleek table surface aur ergonomic chairs, ideal for private cabins or management zones.',
              },
              {
                name: 'Manager Office Table Set',
                image: '/10004.jpeg',
                description: 'Comprehensive manager set with robust primary desk aur comfortable guest seating, perfect for daily operations and team reviews.',
              },
              {
                name: 'Luxury Executive Office Set',
                image: '/10005.jpeg',
                description: 'Luxury executive set with richly finished desk, high-back seating aur refined details for an impressive corner office space.',
              },
              {
                name: 'Modern Corporate Office Set',
                image: '/10012.jpg',
                description: 'Versatile corporate office set with durable work desk aur supportive seating, bringing professional aesthetic to any department.',
              },
              {
                name: 'Executive Office Furniture Set',
                image: '/10010.jpg',
                description: 'Spacious executive desk set with premium ergonomic chairs, refined finish aur solid construction for top-tier management workspace.',
              },
              {
                name: 'Premium Workspace Furniture Set',
                image: '/10007.jpg',
                description: 'Premium workspace set with coordinated desk and seating components, built for enhanced productivity aur quality office aesthetics.',
              }
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
