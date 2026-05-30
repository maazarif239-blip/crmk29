import Image from 'next/image';
import Link from 'next/link';

export default function Projects() {
  return (
    <div className="min-h-screen bg-[#FDFDFD] text-gray-900 font-sans selection:bg-[#E5E0D8]">
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
            <Link href="/projects" className="h-full flex items-center text-[11px] font-bold text-[#EB5324] uppercase tracking-wider border-b-2 border-[#EB5324]">
              Projects
            </Link>
            <Link href="/products" className="h-full flex items-center text-[11px] font-bold text-gray-400 hover:text-gray-900 uppercase tracking-wider transition-colors">
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

      {/* Hero Section */}
      <section className="pt-24 pb-12 max-w-[1200px] mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-serif text-[#111111] mb-4 tracking-tight">
          Projects That Define Our Legacy
        </h1>
        <p className="text-gray-500 text-sm font-medium">
          Delivered across Pakistan's most demanding sectors.
        </p>
      </section>

      {/* Projects Grid (Staggered) */}
      <section className="pb-32 max-w-[1200px] mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          
          {/* Card 1 */}
          <div className="bg-white border border-gray-100 shadow-sm flex flex-col">
            <div className="relative aspect-[4/3] w-full bg-gray-100">
              <span className="absolute top-4 left-4 z-10 bg-[#EB5324] text-white text-[9px] font-bold uppercase tracking-widest px-3 py-1.5 shadow-sm">
                Corporate HQ
              </span>
              <img 
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800" 
                alt="IBL Headquarters" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-8">
              <h3 className="text-[17px] font-serif text-gray-900 mb-3">IBL Headquarters</h3>
              <p className="text-gray-500 text-[12px] leading-relaxed">
                Complete executive floor furnishing and ergonomic workstation deployment for 500+ employees.
              </p>
            </div>
          </div>

          {/* Card 2 (Pushed Down) */}
          <div className="bg-white border border-gray-100 shadow-sm flex flex-col md:mt-16">
            <div className="relative aspect-[4/3] w-full bg-gray-100">
              <span className="absolute top-4 left-4 z-10 bg-[#EB5324] text-white text-[9px] font-bold uppercase tracking-widest px-3 py-1.5 shadow-sm">
                Government Sector
              </span>
              <img 
                src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=800" 
                alt="Ministry of Planning" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-8">
              <h3 className="text-[17px] font-serif text-gray-900 mb-3">Ministry of Planning</h3>
              <p className="text-gray-500 text-[12px] leading-relaxed">
                Bespoke conference tables and acoustic solutions for high-security briefing rooms.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white border border-gray-100 shadow-sm flex flex-col">
            <div className="relative aspect-[4/3] w-full bg-gray-100">
              <span className="absolute top-4 left-4 z-10 bg-[#EB5324] text-white text-[9px] font-bold uppercase tracking-widest px-3 py-1.5 shadow-sm">
                NGO & INGO
              </span>
              <img 
                src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&q=80&w=800" 
                alt="UNDP Country Office" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-8">
              <h3 className="text-[17px] font-serif text-gray-900 mb-3">UNDP Country Office</h3>
              <p className="text-gray-500 text-[12px] leading-relaxed">
                Sustainable modular workspace systems designed for team collaboration and agility.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Sectors We Serve */}
      <section className="py-16 border-y border-gray-100 bg-white">
        <div className="max-w-[1200px] mx-auto px-4 text-center">
          <h2 className="text-2xl font-serif text-gray-900 mb-10 tracking-tight">Sectors We Serve</h2>
          
          <div className="flex flex-wrap justify-center items-center gap-y-4 gap-x-6">
            {['Telecom & IT', 'Pharma Industry', 'Oil & Energy', 'Educational Institutes', 'NGO & Foreign Missions'].map((sector, idx, arr) => (
              <div key={idx} className="flex items-center gap-6">
                <span className="text-gray-500 text-[13px] font-medium tracking-wide">{sector}</span>
                {idx !== arr.length - 1 && (
                  <span className="text-[#EB5324] font-light text-lg opacity-50">|</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Organizations Trust Section */}
      <section className="py-24 bg-[#FDFDFD]">
        <div className="max-w-[1000px] mx-auto px-4 text-center">
          <h2 className="text-2xl font-serif text-gray-900 mb-3 tracking-tight">
            300+ Organizations Trust HB Furniture
          </h2>
          <p className="text-gray-400 text-[12px] italic font-serif mb-16">
            A legacy built on enduring partnerships.
          </p>

          <div className="flex flex-col gap-6">
            {/* Row 1 */}
            <div className="flex flex-wrap justify-center gap-4">
              {['ICI', 'MOU/TAS', 'HUAWEI', 'ENGRO', 'HABIB', 'PTCL', 'U BANK'].map((logo, i) => (
                <div key={i} className="bg-white border border-gray-100 shadow-[0_2px_10px_rgba(0,0,0,0.02)] px-8 py-5 flex items-center justify-center min-w-[120px]">
                  <span className="text-gray-400 font-bold uppercase tracking-[0.2em] text-[10px]">{logo}</span>
                </div>
              ))}
            </div>
            {/* Row 2 */}
            <div className="flex flex-wrap justify-center gap-4">
              {['DEVELOPMENT BANK', 'WORLD HEALTH ORGANIZATION', 'UNDP', 'UNICEF'].map((logo, i) => (
                <div key={i} className="bg-white border border-gray-100 shadow-[0_2px_10px_rgba(0,0,0,0.02)] px-8 py-5 flex items-center justify-center min-w-[160px]">
                  <span className="text-gray-400 font-bold uppercase tracking-[0.2em] text-[10px]">{logo}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>


    </div>
  );
}
