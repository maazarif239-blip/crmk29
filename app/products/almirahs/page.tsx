import Image from 'next/image';
import Link from 'next/link';
import ContactForPricingLink from '@/components/ContactForPricingLink';
import ProductPageHeader from '@/components/ProductPageHeader';

export default function Almirahs() {
  return (
    <div className="min-h-screen w-full min-w-0 overflow-x-clip bg-white text-gray-900 font-sans selection:bg-[#E5E0D8]">
      <ProductPageHeader title="Almirahs" description="Premium storage cabinets and wardrobe solutions designed for offices, homes, and modern interiors." />
{/* Main Content Area */}
      <section className="max-w-[1200px] mx-auto px-4 sm:px-6 py-12 flex flex-col md:flex-row gap-8 md:gap-12 lg:gap-16">
        
        {/* Product Grid */}
        <div className="flex-1">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 sm:gap-x-6 lg:gap-x-8 gap-y-8 sm:gap-y-10 lg:gap-y-12">
            
            {[
              {
                name: 'Executive Storage Almirah',
                image: '/f8f1903f-3a91-4b6f-9db7-6efdb338568b.png',
                description: 'Spacious executive almirah with multiple compartments, ideal for office storage with a professional finish.',
              },
              {
                name: 'Premium Steel Almirah',
                image: '/1f6a1a87-8fc6-434f-bed8-10d6459de6e1.png',
                description: 'Durable steel almirah with secure locking mechanism, perfect for keeping documents and valuables safe.',
              },
              {
                name: 'Modern Wardrobe Cabinet',
                image: '/3be66843-c11c-4079-9ca9-0346a717bb2d.png',
                description: 'Sleek modern wardrobe cabinet designed for contemporary homes with ample hanging and shelf space.',
              },
              {
                name: 'Double Door Storage Cabinet',
                image: '/5a550a25-16d2-49ab-baab-8b1470201831.png',
                description: 'Double door almirah offering generous storage capacity for both office and residential use.',
              },
              {
                name: 'Office Filing Almirah',
                image: '/8a71e3c2-b151-4768-aa5a-22cb4be0b797.jpg',
                description: 'Organized office filing almirah with dedicated shelves for documents, files, and stationery.',
              },
              {
                name: 'Contemporary Storage Unit',
                image: '/8d8dd51e-52ed-47d4-a895-0c6ffa704864.png',
                description: 'Stylish contemporary storage unit that blends functionality with modern interior aesthetics.',
              },
              {
                name: 'Multi-Purpose Metal Cabinet',
                image: '/9b4d5018-0406-47e6-a44a-1cfbe7e25358.png',
                description: 'Versatile metal cabinet suitable for various storage needs, from office supplies to personal items.',
              },
              {
                name: 'Classic Wooden Almirah',
                image: '/9cfde62b-875f-44a3-bed4-5224a935ef58.png',
                description: 'Timeless wooden almirah with elegant design, adding a touch of sophistication to any space.',
              },
              {
                name: 'Space-Saving Storage Cabinet',
                image: '/9ee3b4a8-2af0-4754-b680-a3ab5dd243c8.png',
                description: 'Compact yet spacious storage cabinet perfect for smaller rooms and offices.',
              },
              {
                name: 'Designer Wardrobe Almirah',
                image: '/35b05d1c-99da-4e8f-93a0-744ecdf01989.png',
                description: 'Designer wardrobe almirah with premium finishes, ideal for luxury home interiors.',
              },
              {
                name: 'Heavy-Duty Office Almirah',
                image: '/46b474e4-6f3a-4016-b935-948fcbc9322a.png',
                description: 'Robust heavy-duty almirah built to withstand daily office use with maximum durability.',
              },
              {
                name: 'Elegant Glass Door Almirah',
                image: '/47fc38d0-eac8-4a6e-8e35-f2fb6ff18079.png',
                description: 'Elegant almirah with glass doors, showcasing stored items while keeping them protected.',
              },
              {
                name: 'Adjustable Shelf Almirah',
                image: '/274c4924-eb73-477a-bc72-fdb615b32853.png',
                description: 'Practical almirah with adjustable shelves to accommodate items of different sizes.',
              },
              {
                name: 'Premium Locker Almirah',
                image: '/891bd924-57bf-4a59-b966-090f39eb36a9.png',
                description: 'Secure locker almirah with individual compartments, perfect for shared office spaces.',
              },
              {
                name: 'Modern Sliding Door Almirah',
                image: '/7958be22-0e3c-43ab-9778-162ab9a5218c.png',
                description: 'Contemporary sliding door almirah saving space while offering stylish storage solutions.',
              },
              {
                name: 'Luxury Storage Cabinet',
                image: '/2164255b-f2f9-4cff-9055-adc489bcec81.png',
                description: 'Luxury storage cabinet crafted with premium materials for high-end interiors.',
              },
              {
                name: 'Compact Office Almirah',
                image: '/a35f325c-d7f7-424c-b13a-207dbca09191.png',
                description: 'Compact office almirah designed for efficient use of limited workspace.',
              },
              {
                name: 'Classic Double Door Wardrobe',
                image: '/c03ea513-37ed-457c-be39-f0ac26b96e3e.png',
                description: 'Classic double door wardrobe with ample storage for clothing and personal belongings.',
              },
              {
                name: 'Modern Metal Storage Almirah',
                image: '/d8f5a5e7-383f-4992-aac5-c84cea482965.png',
                description: 'Modern metal almirah with clean lines and durable construction for everyday use.',
              },
              {
                name: 'Elegant Wooden Wardrobe',
                image: '/dcee3b98-e835-4b9e-8fe9-9125da70b072.png',
                description: 'Elegant wooden wardrobe with intricate detailing, perfect for classic home decor.',
              },
              {
                name: 'Functional Office Cabinet',
                image: '/e2d3438b-d2d5-4060-809b-1ce999855526.png',
                description: 'Highly functional office cabinet with multiple drawers and shelves for organized storage.',
              },
              {
                name: 'Designer Storage Almirah',
                image: '/e8655904-e133-4702-9bb0-e9347560d99d.png',
                description: 'Designer almirah combining artistic design with practical storage functionality.',
              },
              {
                name: 'Premium Office Storage Unit',
                image: '/f5c51d10-27a8-4665-8860-343d2095fed9.png',
                description: 'Premium office storage unit built to meet the demands of modern workplaces.',
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
