import Image from 'next/image';
import Link from 'next/link';

export default function StudyChairs() {
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
            
            <Link href="/contact" className="bg-[#EB5324] text-white px-5 py-2 text-[11px] font-bold hover:bg-[#d4481f] transition-colors uppercase tracking-wider flex items-center justify-center">
              Contact Us
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center text-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0 bg-[#f4f4f4]">
          <img 
            src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&q=80&w=2000" 
            alt="Study Chairs" 
            className="w-full h-full object-cover opacity-80"
          />
          {/* Faint white gradient to ensure dark text pops while matching image look */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/40 to-white/80"></div>
        </div>

        <div className="relative z-10 max-w-2xl mx-auto px-4 mt-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight font-serif">
            Study Chairs
          </h1>
          <p className="text-gray-700 text-[13px] md:text-sm font-medium leading-relaxed max-w-xl mx-auto">
            Ergonomic principles meet architectural minimalism. Discover seating designed for sustained focus and comfort.
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="max-w-[1200px] mx-auto px-4 py-20 flex flex-col md:flex-row gap-16">
        
        {/* Sidebar */}
        <aside className="w-full md:w-56 shrink-0">
          <h3 className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-8">Categories</h3>
          <ul className="space-y-5">
            <li>
              <Link href="/study-chairs" className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider text-[#EB5324]">
                <span className="w-1.5 h-1.5 bg-[#EB5324] rounded-full"></span>
                Study Chairs
              </Link>
            </li>
            <li><Link href="/office-chairs" className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider text-gray-500 hover:text-gray-900 transition-colors">Office Chairs</Link></li>
            <li><Link href="/visitor-chairs" className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider text-gray-500 hover:text-gray-900 transition-colors">Visitor Chairs</Link></li>
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Product 1 */}
            <div className="group border border-gray-100 shadow-sm hover:shadow-md transition-shadow bg-white flex flex-col">
              <div className="aspect-square bg-[#F5F5F5] p-8 flex items-center justify-center relative overflow-hidden">
                <img 
                  src="/1.jpg" 
                  alt="Cateteria Chair" 
                  className="w-full h-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-[15px] font-bold text-gray-900 mb-2">Cateteria Chair</h3>
                <p className="text-gray-500 text-[11px] leading-relaxed flex-1">
                  Comfortable and durable seating solution designed for collaborative learning and cafeteria environments.
                </p>
                <div className="mt-4 pt-4 border-t border-gray-50">
                  <span className="text-[#EB5324] text-[9px] font-bold uppercase tracking-widest cursor-pointer hover:underline underline-offset-4">
                    Contact for Pricing
                  </span>
                </div>
              </div>
            </div>

            {/* Product 2 */}
            <div className="group border border-gray-100 shadow-sm hover:shadow-md transition-shadow bg-white flex flex-col">
              <div className="aspect-square bg-[#F5F5F5] p-8 flex items-center justify-center relative overflow-hidden">
                <img 
                  src="/2.jpg" 
                  alt="Circa Task Chair" 
                  className="w-full h-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-[15px] font-bold text-gray-900 mb-2">Circa Task Chair</h3>
                <p className="text-gray-500 text-[11px] leading-relaxed flex-1">
                  Ergonomic task chair engineered for daily office productivity and comfort.
                </p>
                <div className="mt-4 pt-4 border-t border-gray-50">
                  <span className="text-[#EB5324] text-[9px] font-bold uppercase tracking-widest cursor-pointer hover:underline underline-offset-4">
                    Contact for Pricing
                  </span>
                </div>
              </div>
            </div>

            {/* Product 3 */}
            <div className="group border border-gray-100 shadow-sm hover:shadow-md transition-shadow bg-white flex flex-col">
              <div className="aspect-square bg-[#F5F5F5] p-8 flex items-center justify-center relative overflow-hidden">
                <img 
                  src="/3.jpg" 
                  alt="Generation Task Chair" 
                  className="w-full h-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-[15px] font-bold text-gray-900 mb-2">Generation Task Chair</h3>
                <p className="text-gray-500 text-[11px] leading-relaxed flex-1">
                  Modern, responsive task chair offering dynamic back support and sleek aesthetics.
                </p>
                <div className="mt-4 pt-4 border-t border-gray-50">
                  <span className="text-[#EB5324] text-[9px] font-bold uppercase tracking-widest cursor-pointer hover:underline underline-offset-4">
                    Contact for Pricing
                  </span>
                </div>
              </div>
            </div>

            {/* Product 4 */}
            <div className="group border border-gray-100 shadow-sm hover:shadow-md transition-shadow bg-white flex flex-col">
              <div className="aspect-square bg-[#F5F5F5] p-8 flex items-center justify-center relative overflow-hidden">
                <img 
                  src="/4.jpg" 
                  alt="Puma Task Chair" 
                  className="w-full h-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-[15px] font-bold text-gray-900 mb-2">Puma Task Chair</h3>
                <p className="text-gray-500 text-[11px] leading-relaxed flex-1">
                  Agile and breathable seating solution perfect for intensive work or study sessions.
                </p>
                <div className="mt-4 pt-4 border-t border-gray-50">
                  <span className="text-[#EB5324] text-[9px] font-bold uppercase tracking-widest cursor-pointer hover:underline underline-offset-4">
                    Contact for Pricing
                  </span>
                </div>
              </div>
            </div>

            {/* Product 5 */}
            <div className="group border border-gray-100 shadow-sm hover:shadow-md transition-shadow bg-white flex flex-col">
              <div className="aspect-square bg-[#F5F5F5] p-8 flex items-center justify-center relative overflow-hidden">
                <img 
                  src="/5.jpg" 
                  alt="Ring Chair" 
                  className="w-full h-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-[15px] font-bold text-gray-900 mb-2">Ring Chair</h3>
                <p className="text-gray-500 text-[11px] leading-relaxed flex-1">
                  Versatile, minimalist chair ideal for quick meetings and dynamic workspaces.
                </p>
                <div className="mt-4 pt-4 border-t border-gray-50">
                  <span className="text-[#EB5324] text-[9px] font-bold uppercase tracking-widest cursor-pointer hover:underline underline-offset-4">
                    Contact for Pricing
                  </span>
                </div>
              </div>
            </div>

            {/* Product 6 */}
            <div className="group border border-gray-100 shadow-sm hover:shadow-md transition-shadow bg-white flex flex-col">
              <div className="aspect-square bg-[#F5F5F5] p-8 flex items-center justify-center relative overflow-hidden">
                <img 
                  src="/6.jpg" 
                  alt="Syntex Task Chair" 
                  className="w-full h-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-[15px] font-bold text-gray-900 mb-2">Syntex Task Chair</h3>
                <p className="text-gray-500 text-[11px] leading-relaxed flex-1">
                  High-performance task chair featuring breathable mesh and intuitive ergonomic controls.
                </p>
                <div className="mt-4 pt-4 border-t border-gray-50">
                  <span className="text-[#EB5324] text-[9px] font-bold uppercase tracking-widest cursor-pointer hover:underline underline-offset-4">
                    Contact for Pricing
                  </span>
                </div>
              </div>
            </div>

            {/* Product 7 */}
            <div className="group border border-gray-100 shadow-sm hover:shadow-md transition-shadow bg-white flex flex-col">
              <div className="aspect-square bg-[#F5F5F5] p-8 flex items-center justify-center relative overflow-hidden">
                <img 
                  src="/7.jpg" 
                  alt="Trend Task Chair" 
                  className="w-full h-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-[15px] font-bold text-gray-900 mb-2">Trend Task Chair</h3>
                <p className="text-gray-500 text-[11px] leading-relaxed flex-1">
                  Contemporary seating combining aesthetic appeal with all-day ergonomic support.
                </p>
                <div className="mt-4 pt-4 border-t border-gray-50">
                  <span className="text-[#EB5324] text-[9px] font-bold uppercase tracking-widest cursor-pointer hover:underline underline-offset-4">
                    Contact for Pricing
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>

      </section>


    </div>
  );
}
