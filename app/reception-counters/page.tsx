import Image from 'next/image';
import Link from 'next/link';

export default function ReceptionCounters() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans selection:bg-[#E5E0D8]">
      {/* Header */}
      <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-[1200px] mx-auto px-4 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <Image
              src="/hb-logo.png"
              alt="HB Furniture Logo"
              width={150}
              height={50}
              className="h-10 w-auto object-contain"
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
            <Link href="/sign-in" className="border border-gray-300 text-gray-700 px-5 py-2 text-[11px] font-bold hover:bg-gray-50 transition-colors uppercase tracking-wider">
              Login
            </Link>
            <Link href="/contact" className="bg-[#EB5324] text-white px-5 py-2 text-[11px] font-bold hover:bg-[#d4481f] transition-colors uppercase tracking-wider flex items-center justify-center">
              Contact Us
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section (Edge-to-Edge) */}
      <section className="relative h-[350px] md:h-[450px] flex items-center justify-center text-center bg-[#111111] overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="h.jpg" 
            alt="Reception Counters" 
            className="w-full h-full object-cover opacity-40"
          />
        </div>

        <div className="relative z-10 w-full px-4 flex flex-col items-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight font-sans">
            Reception Counters
          </h1>
          <div className="w-16 h-1 bg-[#EB5324]"></div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="max-w-[1200px] mx-auto px-4 py-16 flex flex-col md:flex-row gap-16">
        
        {/* Sidebar */}
        <aside className="w-full md:w-56 shrink-0">
          <h3 className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-8">Categories</h3>
          <ul className="space-y-5">
            <li><Link href="/study-chairs" className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider text-gray-500 hover:text-gray-900 transition-colors">Study Chairs</Link></li>
            <li><Link href="/office-chairs" className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider text-gray-500 hover:text-gray-900 transition-colors">Office Chairs</Link></li>
            <li><Link href="/visitor-chairs" className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider text-gray-500 hover:text-gray-900 transition-colors">Visitors Chairs</Link></li>
            <li><Link href="/conference-meeting-tables" className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider text-gray-500 hover:text-gray-900 transition-colors">Conference Tables</Link></li>
            <li>
              <Link href="/reception-counters" className="flex items-start gap-2 text-[11px] font-bold uppercase tracking-wider text-[#EB5324] leading-tight">
                <span className="w-1.5 h-1.5 bg-[#EB5324] rounded-full mt-1 shrink-0"></span>
                Reception Counters
              </Link>
            </li>
            <li><Link href="/sofas-lounge-seating" className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider text-gray-500 hover:text-gray-900 transition-colors">Sofas</Link></li>
            <li><Link href="/technology-suite" className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider text-gray-500 hover:text-gray-900 transition-colors">Technology</Link></li>
          </ul>

          <div className="mt-12 bg-[#F9F9F9] p-6 border border-gray-100 shadow-sm">
            <h4 className="text-[13px] font-bold text-gray-900 mb-2">Need Assistance?</h4>
            <p className="text-gray-500 text-[11px] leading-relaxed mb-6">
              Our design team is ready to help you plan your workspace.
            </p>
            <Link href="/contact" className="block text-center w-full border border-gray-300 bg-white text-gray-700 py-2.5 text-[10px] font-bold uppercase tracking-widest hover:bg-gray-50 transition-colors">
              Contact Experts
            </Link>
          </div>
        </aside>

        {/* Product Grid */}
        <div className="flex-1">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {[
              { 
                name: 'Corby Reception', 
                desc: 'A sleek modern reception counter designed for corporate offices, featuring clean lines and professional aesthetics.',
                badge: null,
                image: '/a.jpg',
                isPlaceholder: false
              },
              { 
                name: 'Halton Reception', 
                desc: 'Elegant reception desk solution perfect for executive environments and premium commercial workspaces.',
                badge: null,
                image: '/b.jpg',
                isPlaceholder: false
              },
              { 
                name: 'Lufton Reception', 
                desc: 'Contemporary front desk design offering both style and functionality for high-traffic reception areas.',
                badge: null,
                image: '/c.jpg',
                isPlaceholder: false
              },
              { 
                name: 'Princeton Reception', 
                desc: 'Sophisticated reception counter crafted for corporate headquarters and professional office settings.',
                badge: null,
                image: '/d.jpg',
                isPlaceholder: false
              },
              { 
                name: 'Zara Reception', 
                desc: 'Modern minimalist reception desk ideal for creating a welcoming first impression in commercial spaces.',
                badge: null,
                image: '/e.jpg',
                isPlaceholder: false
              },
            ].map((product, i) => (
              <div key={i} className="group border border-gray-100 shadow-sm hover:shadow-md transition-shadow bg-white flex flex-col">
                <div className="aspect-[4/3] bg-[#F5F5F5] relative overflow-hidden flex items-center justify-center text-gray-300">
                  {product.badge && (
                    <span className="absolute top-3 left-3 z-10 bg-white/90 text-gray-700 text-[8px] font-bold uppercase tracking-widest px-2 py-1 border border-gray-200">
                      {product.badge}
                    </span>
                  )}
                  {product.isPlaceholder ? (
                    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  ) : (
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 mix-blend-multiply"
                    />
                  )}
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-[14px] font-bold text-gray-900 mb-2">{product.name}</h3>
                  <p className="text-gray-500 text-[11px] leading-relaxed flex-1">
                     {product.desc}
                   </p>
                  <div className="mt-4 pt-4 border-t border-gray-50">
                    <span className="text-[#EB5324] text-[9px] font-bold uppercase tracking-widest cursor-pointer hover:underline underline-offset-4">
                      Contact for Pricing
                    </span>
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
