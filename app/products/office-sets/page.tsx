import Image from 'next/image';
import Link from 'next/link';
import ContactForPricingLink from '@/components/ContactForPricingLink';
import ProductSidebar from '@/components/ProductSidebar';

export default function OfficeSets() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans selection:bg-[#E5E0D8]">
      
      {/* Hero Section (Contained) */}
      <div className="max-w-[1200px] mx-auto px-4 pt-12 pb-8">
        <section className="relative h-[300px] md:h-[400px] flex items-center justify-center overflow-hidden bg-gray-900">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <img 
              src="/10016.jpeg" 
              alt="Office Sets" 
              className="w-full h-full object-cover opacity-80"
            />
            {/* Center gradient for text readability */}
            <div className="absolute inset-0 bg-black/40"></div>
          </div>

          <div className="relative z-10 w-full text-center px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight font-serif">
              Office Sets
            </h1>
            <p className="text-gray-200 text-[13px] md:text-sm font-medium leading-relaxed max-w-2xl mx-auto">
              Modern office table and seating combinations designed for executive cabins, workspaces, and collaborative environments.
            </p>
          </div>
        </section>
      </div>

      {/* Main Content Area */}
      <section className="max-w-[1200px] mx-auto px-4 py-12 flex flex-col md:flex-row gap-16">
        
        {/* Sidebar */}
        <ProductSidebar activeCategory="/products/office-sets" />

        {/* Product Grid */}
        <div className="flex-1">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
            
            {[
              {
                name: 'Executive Office Table Set',
                image: '/10016.jpeg',
                description: 'Transform your executive suite with this masterfully crafted office table set. It blends expansive work surfaces with integrated storage and premium seating, creating an environment that balances sophisticated aesthetics with everyday functionality for senior leadership.',
              },
              {
                name: 'Modern Office Workstation Set',
                image: '/10008.jpeg',
                description: 'Engineered for dynamic and collaborative environments, this modern workstation set delivers clean lines and ergonomic comfort. Featuring adaptable desk configurations and matching supportive seating, it optimizes space while maintaining a high-end corporate look.',
              },
              {
                name: 'Premium Office Table Set',
                image: '/10009.jpeg',
                description: 'A striking combination of elegant materials and precise engineering, this premium set redefines workspace luxury. It provides an expansive primary desk alongside coordinated seating, ensuring a commanding presence that caters to intense work sessions and formal meetings alike.',
              },
              {
                name: 'Contemporary Office Desk Set',
                image: '/10003.jpeg',
                description: 'Designed for the modern professional, this contemporary desk set pairs minimalist architecture with uncompromising durability. The integrated layout includes sleek table surfaces and ergonomic chairs, perfectly suited for private cabins or focused management zones.',
              },
              {
                name: 'Manager Office Table Set',
                image: '/10004.jpeg',
                description: 'This comprehensive manager set is tailored for mid-to-senior level executives who require both style and substance. It seamlessly integrates a robust primary desk with comfortable guest seating, establishing a welcoming yet professional atmosphere for daily operations and team reviews.',
              },
              {
                name: 'Luxury Executive Office Set',
                image: '/10005.jpeg',
                description: 'Exuding prestige and authority, this luxury executive set represents the pinnacle of corporate furniture design. With richly finished table surfaces, distinguished high-back seating, and refined details, it instantly elevates any corner office to an impressive leadership space.',
              },
              {
                name: 'Modern Corporate Office Set',
                image: '/10012.jpg',
                description: 'Versatile and highly functional, this corporate office set is built to meet the rigorous demands of fast-paced business environments. It offers a cohesive pairing of a durable work desk and supportive seating, bringing a unified and professional aesthetic to any department.',
              },
              {
                name: 'Executive Office Furniture Set',
                image: '/10010.jpg',
                description: 'Crafted to make a lasting impression, this cohesive furniture set integrates a spacious executive desk with premium ergonomic chairs. The refined finish and solid construction provide a durable, high-performance workspace designed specifically for top-tier management.',
              },
              {
                name: 'Premium Workspace Furniture Set',
                image: '/10007.jpg',
                description: 'This premium set delivers an all-encompassing workspace solution with meticulously coordinated desk and seating components. Built to enhance both productivity and office aesthetics, it stands as a testament to quality craftsmanship and thoughtful architectural design.',
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
