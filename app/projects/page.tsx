import Image from 'next/image';
import Link from 'next/link';

export default function Projects() {
  return (
    <div className="min-h-screen bg-[#FDFDFD] text-gray-900 font-sans selection:bg-[#E5E0D8]">
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
  />
</Link>

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

      {/* Projects Grid */}
      <section className="pb-32 max-w-[1200px] mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          
          {/* Card 1 */}
          <div className="bg-white border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.04)] flex flex-col h-full rounded-sm overflow-hidden">
            <div className="relative h-[280px] w-full bg-gray-100 shrink-0">
              <span className="absolute top-4 left-4 z-10 bg-[#EB5324] text-white text-[10px] font-bold uppercase tracking-widest px-4 py-1.5 shadow-sm rounded-full">
                Corporate HQ
              </span>
            <img
  src="/a.jpg"
  alt="HBL Headquarters"
  className="w-full h-full object-cover"
/>
            </div>
            <div className="p-8 flex-1 flex flex-col">
          <h3 className="text-[17px] font-serif text-gray-900 mb-3">
  HBL Headquarters
</h3>
              <p className="text-gray-500 text-[13px] leading-relaxed">
                Complete executive floor furnishing and ergonomic workstation deployment for 500+ employees.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.04)] flex flex-col h-full rounded-sm overflow-hidden">
            <div className="relative h-[280px] w-full bg-gray-100 shrink-0">
              <span className="absolute top-4 left-4 z-10 bg-[#EB5324] text-white text-[10px] font-bold uppercase tracking-widest px-4 py-1.5 shadow-sm rounded-full">
                Government Sector
              </span>
              <img
  src="/b.jpg"
  alt="Ministry of Planning"
  className="w-full h-full object-cover"
/>
            </div>
            <div className="p-8 flex-1 flex flex-col">
              <h3 className="text-[18px] font-serif text-gray-900 mb-3">Ministry of Planning</h3>
              <p className="text-gray-500 text-[13px] leading-relaxed">
                Bespoke conference tables and acoustic solutions for high-security briefing rooms.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.04)] flex flex-col h-full rounded-sm overflow-hidden">
            <div className="relative h-[280px] w-full bg-gray-100 shrink-0">
              <span className="absolute top-4 left-4 z-10 bg-[#EB5324] text-white text-[10px] font-bold uppercase tracking-widest px-4 py-1.5 shadow-sm rounded-full">
                NGO & INGO
              </span>
            <img
  src="/c.jpg"
  alt="UNDP Country Office"
  className="w-full h-full object-cover"
/>
            </div>
            <div className="p-8 flex-1 flex flex-col">
              <h3 className="text-[18px] font-serif text-gray-900 mb-3">UNDP Country Office</h3>
              <p className="text-gray-500 text-[13px] leading-relaxed">
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

          <div className="flex overflow-hidden w-full relative group">
            <div className="flex animate-marquee min-w-max hover:[animation-play-state:paused]">
              {/* First Set */}
              <div className="flex gap-4 pr-4">
                {[
                  { name: 'ICI', width: 'min-w-[120px]' },
                  { name: 'MOU/TAS', width: 'min-w-[120px]' },
                  { name: 'HUAWEI', width: 'min-w-[120px]' },
                  { name: 'ENGRO', width: 'min-w-[120px]' },
                  { name: 'HABIB', width: 'min-w-[120px]' },
                  { name: 'PTCL', width: 'min-w-[120px]' },
                  { name: 'U BANK', width: 'min-w-[120px]' },
                  { name: 'DEVELOPMENT BANK', width: 'min-w-[160px]' },
                  { name: 'WORLD HEALTH ORGANIZATION', width: 'min-w-[160px]' },
                  { name: 'UNDP', width: 'min-w-[160px]' },
                  { name: 'UNICEF', width: 'min-w-[160px]' }
                ].map((logo, i) => (
                  <div key={i} className={`bg-white border border-gray-100 shadow-[0_2px_10px_rgba(0,0,0,0.02)] px-8 py-5 flex items-center justify-center flex-shrink-0 ${logo.width}`}>
                    <span className="text-gray-400 font-bold uppercase tracking-[0.2em] text-[10px]">{logo.name}</span>
                  </div>
                ))}
              </div>
              {/* Second Set */}
              <div className="flex gap-4 pr-4">
                {[
                  { name: 'ICI', width: 'min-w-[120px]' },
                  { name: 'MOU/TAS', width: 'min-w-[120px]' },
                  { name: 'HUAWEI', width: 'min-w-[120px]' },
                  { name: 'ENGRO', width: 'min-w-[120px]' },
                  { name: 'HABIB', width: 'min-w-[120px]' },
                  { name: 'PTCL', width: 'min-w-[120px]' },
                  { name: 'U BANK', width: 'min-w-[120px]' },
                  { name: 'DEVELOPMENT BANK', width: 'min-w-[160px]' },
                  { name: 'WORLD HEALTH ORGANIZATION', width: 'min-w-[160px]' },
                  { name: 'UNDP', width: 'min-w-[160px]' },
                  { name: 'UNICEF', width: 'min-w-[160px]' }
                ].map((logo, i) => (
                  <div key={i} className={`bg-white border border-gray-100 shadow-[0_2px_10px_rgba(0,0,0,0.02)] px-8 py-5 flex items-center justify-center flex-shrink-0 ${logo.width}`}>
                    <span className="text-gray-400 font-bold uppercase tracking-[0.2em] text-[10px]">{logo.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>


    </div>
  );
}
