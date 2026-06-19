import Image from 'next/image';
import Link from 'next/link';

export default function Products() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans selection:bg-[#E5E0D8]">
      

      {/* Hero Section */}
      <section className="bg-[#F9F9F9] pt-24 pb-20 text-center px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6 tracking-tight">
            Our Products
          </h1>
          <p className="text-gray-500 text-sm md:text-base font-medium leading-relaxed max-w-2xl mx-auto">
            Precision-crafted. Delivered in-house. Explore our comprehensive suite of legacy-grade workspace solutions engineered for modern professional environments.
          </p>
        </div>
      </section>

      {/* Shop by Category */}
      <section className="py-20 max-w-[1200px] mx-auto px-4">
        <div className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 tracking-tight">Shop by Category</h2>
          <div className="w-10 h-1 bg-[#EB5324] mt-3"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
       {[
  {
    name: 'Study Chairs',
    href: '/study-chairs',
    image: '/d.jpg'
  },

  {
    name: 'Office Chairs',
    href: '/office-chairs',
    image: '/e.jpg'
  },

  {
    name: 'Visitors Chairs',
    href: '/visitor-chairs',
    image: '/f.jpg'
  },

  {
    name: 'Conference and Meeting Tables',
    href: '/products/conference-and-meeting-tables',
    image: '/175 (1).png'
  },

  {
    name: 'Reception Counters',
    href: '/reception-counters',
    image: '/h.jpg'
  },

  {
    name: 'Sofas and Lounge Setting',
    href: '/sofas-lounge-seating',
    image: '/i.jpg'
  },

  {
    name: 'Technology',
    href: '/technology-suite',
    image: '/j.jpg'
  },
  {
    name: 'Workspace Solutions',
    href: '/workspace-solutions',
    image: '/Screenshot 2026-06-16 163413.png'
  },
  {
    name: 'Guest Chairs',
    href: '/guest-chairs',
    image: '/101 (3).png'
  },
  {
    name: 'Gravity Workstations',
    href: '/gravity-workstations',
    image: '/Screenshot 2026-06-16 164124.png'
  },
  {
    name: 'Hardwood Executive Tables',
    href: '/hardwood-executive-tables',
    image: '/Screenshot 2026-06-16 164439.png'
  },
  {
    name: 'Ant Chair',
    href: '/ant-chairs',
    image: '/129.png'
  },
  {
    name: 'Library Shelves',
    href: '/library-shelves',
    image: '/155 (3).png'
  },
  {
    name: 'Modern Workstation System',
    href: '/products/modern-workstation-systems',
    image: '/Screenshot 2026-06-16 164657.png'
  },
  {
    name: 'Lotus 30 Office Workstation',
    href: '/products/lotus-30-office-workstations',
    image: '/Screenshot 2026-06-16 164809.png'
  },
  {
    name: 'Executive Chairs',
    href: '/products/executive-chairs',
    image: '/230 (1).png'
  },
  {
    name: 'Paris Chairs',
    href: '/products/paris-chairs',
    image: '/231.png'
  },
  {
    name: 'Director Chair',
    href: '/products/director-chair',
    image: '/Screenshot 2026-06-16 165028.png'
  },
  {
    name: 'Executive Furniture',
    href: '/products/executive-furniture',
    image: '/240(1).png'
  },
  {
    name: 'Manager Chair Collection',
    href: '/products/manager-chair-collection',
    image: '/Screenshot 2026-06-16 165302.png'
  },
  {
    name: 'Laboratory Solution',
    href: '/products/laboratory-solutions',
    image: '/skylab-page-1.png'
  },
  {
    name: 'Coffee Sets',
    href: '/products/coffee-sets',
    image: '/54e5b0c3-88a1-4b2f-a846-b92291f11681.png'
  },
  {
    name: 'Coffee Tables',
    href: '/products/coffee-tables',
    image: '/10001.png'
  },
  {
    name: 'Coffee Chairs',
    href: '/products/coffee-chairs',
    image: '/10004.png'
  },
  {
    name: 'Stools',
    href: '/products/stools',
    image: '/10010.png'
  },
  {
    name: 'Office Sets',
    href: '/products/office-sets',
    image: '/10028.png'
  },
  {
    name: 'Almirahs',
    href: '/products/almirahs',
    image: '/f8f1903f-3a91-4b6f-9db7-6efdb338568b.png'
  }
].map((cat, i) => (
            <Link href={cat.href} key={i} className="group cursor-pointer relative aspect-square overflow-hidden bg-gray-100 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300">
              <img 
                src={cat.image} 
                alt={cat.name} 
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black/60 via-black/20 to-transparent"></div>
              <h3 className="absolute top-6 left-6 text-white text-[15px] font-bold tracking-wide z-10">
                {cat.name}
              </h3>
            </Link>
          ))}
        </div>
      </section>


    </div>
  );
}
