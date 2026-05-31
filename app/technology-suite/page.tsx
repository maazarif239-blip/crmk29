import Image from 'next/image';
import Link from 'next/link';

export default function TechnologySuite() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans selection:bg-[#E5E0D8]">
      {/* Header (Alternative Style) */}
      <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-[1200px] mx-auto px-4 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="font-bold text-xl tracking-tight text-gray-900">HB Furniture</span>
          </div>

          <nav className="hidden md:flex items-center space-x-8 h-full">
            <Link href="/" className="h-full flex items-center text-[13px] text-gray-500 hover:text-gray-900 transition-colors">
              Home
            </Link>
            <Link href="/projects" className="h-full flex items-center text-[13px] text-gray-500 hover:text-gray-900 transition-colors">
              Projects
            </Link>
            <Link href="/products" className="h-full flex items-center text-[13px] font-semibold text-[#EB5324] border-b-2 border-[#EB5324]">
              Products
            </Link>
            <Link href="/about" className="h-full flex items-center text-[13px] text-gray-500 hover:text-gray-900 transition-colors">
              About Us
            </Link>
          </nav>

          <div className="flex items-center gap-4">
            <Link href="/sign-in" className="border border-gray-300 text-gray-700 px-5 py-2 text-[12px] font-medium hover:bg-gray-50 transition-colors flex items-center justify-center">
              Login
            </Link>
            <Link href="/contact" className="bg-[#EB5324] text-white px-5 py-2 text-[12px] font-medium hover:bg-[#d4481f] transition-colors flex items-center justify-center">
              Contact Us
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section (Light & Contained) */}
      <div className="max-w-[1200px] mx-auto px-4 pt-8 pb-12">
        <section className="relative h-[300px] flex items-center justify-center text-center overflow-hidden border border-gray-100 bg-[#FAFAFA]">
          {/* Background Image with Light Overlay */}
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80&w=2000" 
              alt="Technology" 
              className="w-full h-full object-cover opacity-50 grayscale"
            />
            <div className="absolute inset-0 bg-white/70"></div>
          </div>

          <div className="relative z-10 w-full px-4 flex flex-col items-center">
            <span className="text-[#EB5324] text-[9px] font-bold uppercase tracking-widest mb-3">Product Category</span>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
              Technology
            </h1>
            <p className="text-gray-600 text-[13px] max-w-sm leading-relaxed">
              Advanced power, data, and connectivity integration for the modern workspace.
            </p>
          </div>
        </section>
      </div>

      {/* Main Content Area */}
      <section className="max-w-[1200px] mx-auto px-4 py-8 flex flex-col md:flex-row gap-16">
        
        {/* Sidebar */}
        <aside className="w-full md:w-56 shrink-0">
          <h3 className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-8">Categories</h3>
          <ul className="space-y-5">
            <li><Link href="/study-chairs" className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider text-gray-500 hover:text-gray-900 transition-colors">Study Chairs</Link></li>
            <li><Link href="/office-chairs" className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider text-gray-500 hover:text-gray-900 transition-colors">Office Chairs</Link></li>
            <li><Link href="/visitor-chairs" className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider text-gray-500 hover:text-gray-900 transition-colors">Visitors Chairs</Link></li>
            <li><Link href="/conference-meeting-tables" className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider text-gray-500 hover:text-gray-900 transition-colors leading-tight">Conference & Meeting Tables</Link></li>
            <li><Link href="/reception-counters" className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider text-gray-500 hover:text-gray-900 transition-colors">Reception Counters</Link></li>
            <li><Link href="/sofas-lounge-seating" className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider text-gray-500 hover:text-gray-900 transition-colors">Sofas</Link></li>
            <li>
              <Link href="/technology-suite" className="flex items-start gap-2 text-[11px] font-bold uppercase tracking-wider text-[#EB5324] leading-tight">
                <span className="w-1.5 h-1.5 bg-[#EB5324] rounded-full mt-1 shrink-0"></span>
                Technology
              </Link>
            </li>
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

        {/* Product Grid (2 Columns) */}
        <div className="flex-1">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {[
              {
                name: 'Interactive Display Solution',
                desc: 'A professional display system tailored for smart offices, boardrooms, and engaging team presentations.',
                image: '/36.jpg',
              },
              {
                name: 'Smart Collaboration Screen',
                desc: 'Designed to support seamless communication and content sharing across modern meeting environments.',
                image: '/37.jpg',
              },
              {
                name: 'Video Conferencing System',
                desc: 'An integrated conferencing solution built for executive meetings, hybrid teams, and connected workspaces.',
                image: '/38.jpg',
              },
              {
                name: 'Digital Meeting Hub',
                desc: 'A streamlined technology centerpiece that enhances coordination, presentations, and collaborative workflows.',
                image: '/39.jpg',
              },
              {
                name: 'Integrated Workspace Technology',
                desc: 'A refined corporate technology solution that brings efficiency and connectivity to premium office settings.',
                image: '/40.jpg',
              },
            ].map((product, i) => (
              <div key={i} className="group border border-gray-100 shadow-sm hover:shadow-md transition-shadow bg-white flex flex-col">
                <div className="aspect-[4/3] bg-[#F5F5F5] relative overflow-hidden flex items-center justify-center text-gray-300">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-[14px] font-bold text-gray-900 mb-2">{product.name}</h3>
                  <p className="text-gray-500 text-[11px] leading-relaxed flex-1">
                    {product.desc}
                  </p>
                  <div className="mt-5 pt-4 border-t border-gray-50">
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
