import Image from 'next/image';
import Link from 'next/link';

export default function VisitorChairs() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans selection:bg-[#E5E0D8]">
      {/* Header */}
      <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-[1200px] mx-auto px-4 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 text-[#EB5324]" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 6h16v2H4V6zm0 5h16v2H4v-2zm0 5h16v2H4v-2z" fill="currentColor" />
            </svg>
            <span className="font-bold text-lg tracking-tight">HB Furniture</span>
          </div>

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

      {/* Hero Section (Contained) */}
      <div className="max-w-[1200px] mx-auto px-4 pt-12 pb-8">
        <section className="relative h-[300px] md:h-[400px] flex items-center justify-center overflow-hidden bg-gray-900">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2000" 
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
        <aside className="w-full md:w-56 shrink-0">
          <h3 className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-8">Categories</h3>
          <ul className="space-y-5">
            <li><Link href="/study-chairs" className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider text-gray-500 hover:text-gray-900 transition-colors">Study Chairs</Link></li>
            <li><Link href="/office-chairs" className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider text-gray-500 hover:text-gray-900 transition-colors">Office Chairs</Link></li>
            <li>
              <Link href="/visitor-chairs" className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider text-[#EB5324]">
                <span className="w-1.5 h-1.5 bg-[#EB5324] rounded-full"></span>
                Visitor Chairs
              </Link>
            </li>
            <li><Link href="/conference-meeting-tables" className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider text-gray-500 hover:text-gray-900 transition-colors leading-tight">Conference & Meeting Tables</Link></li>
            <li><Link href="/reception-counters" className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider text-gray-500 hover:text-gray-900 transition-colors">Reception Counters</Link></li>
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
            
            {[
              { name: 'Aero Sled Base', image: 'https://images.unsplash.com/photo-1505843490538-5133c6c7d0e1?auto=format&fit=crop&q=80&w=600' },
              { name: 'Forma Conference', image: 'https://images.unsplash.com/photo-1592078615290-033ee584e267?auto=format&fit=crop&q=80&w=600' },
              { name: 'Linea Guest', image: 'https://images.unsplash.com/photo-1580480055273-228ff5388ef8?auto=format&fit=crop&q=80&w=600' },
              { name: 'Modus Reception', image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&q=80&w=600' },
              { name: 'Vanguard Stack', image: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&q=80&w=600' },
              { name: 'Axiom Side Chair', image: 'https://images.unsplash.com/photo-1540574163026-643ea20ade25?auto=format&fit=crop&q=80&w=600' },
              { name: 'Nova Lounge', image: 'https://images.unsplash.com/photo-1506898667547-42e22a46e125?auto=format&fit=crop&q=80&w=600' },
              { name: 'Datum Armchair', image: 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&q=80&w=600' },
              { name: 'Apex Classic', image: 'https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&q=80&w=600' },
              { name: 'Heritage Tufted', image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&q=80&w=600' },
            ].map((product, i) => (
              <div key={i} className="group flex flex-col cursor-pointer">
                <div className="aspect-square bg-[#F5F5F5] p-8 flex items-center justify-center relative overflow-hidden transition-colors group-hover:bg-[#f0f0f0]">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="pt-5 text-center bg-white">
                  <h3 className="text-[13px] font-bold text-gray-900 group-hover:text-[#EB5324] transition-colors">{product.name}</h3>
                </div>
              </div>
            ))}

          </div>
        </div>

      </section>


    </div>
  );
}
