import Image from 'next/image';
import Link from 'next/link';

export default function Products() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans selection:bg-[#E5E0D8]">
      {/* Header */}
      <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-[1200px] mx-auto px-4 h-20 flex items-center justify-between">
       <Link href="/" className="flex items-center">
  <Image
    src="/hb-logo.png.png"
    alt="HB Furniture Logo"
    width={80}
    height={80}
    className="object-contain"
    priority
  />
</Link>

          <nav className="hidden md:flex items-center space-x-8 h-full">
            <Link href="/" className="h-full flex items-center text-[11px] font-bold text-gray-400 hover:text-gray-900 uppercase tracking-wider transition-colors">
              Home
            </Link>
            <Link href="/projects" className="h-full flex items-center text-[11px] font-bold text-gray-400 hover:text-gray-900 uppercase tracking-wider transition-colors">
              Projects
            </Link>
            <Link href="/products" className="h-full flex items-center text-[11px] font-bold text-[#EB5324] uppercase tracking-wider border-b-2 border-[#EB5324]">
              Products
            </Link>
            <Link href="/about" className="h-full flex items-center text-[11px] font-bold text-gray-400 hover:text-gray-900 uppercase tracking-wider transition-colors">
              About Us
            </Link>
          </nav>

          <div className="flex items-center gap-4">
            
            <Link href="/contact" className="bg-[#EB5324] text-white px-5 py-2 text-[11px] font-bold hover:bg-[#d4481f] transition-colors uppercase tracking-wider flex items-center justify-center">
              Contact Us
            </Link>
          </div>
        </div>
      </header>

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
    name: 'Visitor Chairs',
    href: '/visitor-chairs',
    image: '/f.jpg'
  },

  {
    name: 'Conference & Meeting Tables',
    href: '/conference-meeting-tables',
    image: '/g.png'
  },

  {
    name: 'Reception Counters',
    href: '/reception-counters',
    image: '/h.jpg'
  },

  {
    name: 'Sofas & Lounge Seating',
    href: '/sofas-lounge-seating',
    image: '/i.jpg'
  },

  {
    name: 'Technology',
    href: '/technology-suite',
    image: '/j.jpg'
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
