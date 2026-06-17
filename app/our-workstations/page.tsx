import Link from 'next/link';

export default function OurWorkstations() {
  const tabs = [
    { 
      name: "Workspace Solutions", 
      href: "/workspace-solutions",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800",
      description: "Structured layout clusters providing optimal acoustics and focus.",
      featured: true
    },
    { 
      name: "Modern Workstation Systems", 
      href: "/products/modern-workstation-systems",
      image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=80&w=800",
      description: "Flexible, open-plan desking designed for team coordination.",
      featured: false
    },
    { 
      name: "Lotus 30 Office Workstations", 
      href: "/products/lotus-30-office-workstations",
      image: "https://images.unsplash.com/photo-1503853585906-d5006b52c002?auto=format&fit=crop&q=80&w=800",
      description: "Elegant, economical screen-based modular layouts.",
      featured: false
    }
  ];

  return (
    <div className="bg-[#FAF9F7] text-gray-900 font-sans antialiased min-h-screen selection:bg-[#E5E0D8]">
      
      {/* SECTION 1: PREMIUM HERO */}
      <section className="relative pt-[140px] pb-[80px] px-6 lg:px-12 flex flex-col items-center text-center">
        <div className="max-w-[800px] mx-auto">
          <span className="text-[#EB5324] text-[10px] font-bold uppercase tracking-[0.2em] block mb-6">
            Workspace Collections
          </span>
          <h1 className="font-serif text-[42px] md:text-[56px] lg:text-[64px] leading-[1.1] text-gray-900 mb-8 tracking-tight">
            Our Workstations
          </h1>
          <p className="font-sans text-[16px] md:text-[18px] leading-[1.7] text-gray-500 max-w-[600px] mx-auto font-medium">
            Architectural workstation systems designed for modern offices, collaboration, flexibility, and productivity.
          </p>
        </div>
      </section>

      {/* SECTION 2: WORKSTATION GRID */}
      <section className="max-w-[1400px] mx-auto px-6 lg:px-12 pb-[120px]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {tabs.map((tab, index) => {
            const isFeatured = tab.featured;
            
            return (
              <div 
                key={index} 
                className={`relative group ${isFeatured ? 'lg:col-span-12' : 'lg:col-span-4'} flex flex-col`}
              >
                <Link
                  href={tab.href}
                  className={`block relative rounded-sm overflow-hidden bg-white shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] ${isFeatured ? 'aspect-[16/9] lg:aspect-[21/9]' : 'aspect-[4/5]'}`}
                >
                  <div className="absolute inset-0 bg-gray-100 overflow-hidden">
                    <img
                      alt={tab.name}
                      src={tab.image}
                      className="w-full h-full object-cover transition-transform duration-[1.5s] ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-[1.04]"
                    />
                  </div>
                  
                  {/* Elegant Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500"></div>
                  
                  {/* Card Content */}
                  <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-end">
                    <span className="text-white/70 text-[9px] font-bold uppercase tracking-[0.2em] mb-3 block transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                      Collection
                    </span>
                    <h2 className={`font-serif text-white tracking-tight mb-3 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500 delay-75 ${isFeatured ? 'text-3xl md:text-5xl' : 'text-2xl'}`}>
                      {tab.name}
                    </h2>
                    <p className={`text-white/80 font-sans font-medium transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500 delay-100 ${isFeatured ? 'text-sm md:text-base max-w-lg mb-8' : 'text-sm mb-6'}`}>
                      {tab.description}
                    </p>
                    
                    <div className="flex items-center gap-3 text-white text-[11px] font-bold uppercase tracking-widest transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-150">
                      <span>Explore Collection</span>
                      <span className="w-6 h-[1px] bg-[#EB5324]"></span>
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </section>

      {/* SECTION 3: DESIGN PHILOSOPHY / VALUE SECTION */}
      <section className="bg-white border-t border-gray-100 py-[120px] px-6 lg:px-12">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex flex-col md:flex-row gap-16 md:gap-24 items-start">
            
            {/* Left Header */}
            <div className="md:w-1/3">
              <span className="text-gray-400 text-[10px] font-bold uppercase tracking-[0.2em] block mb-4">
                Philosophy
              </span>
              <h2 className="font-serif text-3xl md:text-4xl text-gray-900 leading-tight mb-6">
                Designed Around Modern Work
              </h2>
              <p className="text-gray-500 text-[14px] leading-[1.8]">
                Our workstation systems combine flexibility, architectural elegance, and productivity-focused layouts for contemporary office environments.
              </p>
            </div>
            
            {/* Right Features Grid */}
            <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-16">
              
              <div className="flex flex-col gap-4">
                <div className="w-10 h-10 rounded-full bg-[#FAF9F7] flex items-center justify-center text-[#EB5324]">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" /></svg>
                </div>
                <h3 className="font-bold text-[13px] uppercase tracking-wider text-gray-900">Modular Configurations</h3>
                <p className="text-[13px] text-gray-500 leading-relaxed">
                  Scalable layouts that adapt effortlessly to changing team sizes and office architectures.
                </p>
              </div>

              <div className="flex flex-col gap-4">
                <div className="w-10 h-10 rounded-full bg-[#FAF9F7] flex items-center justify-center text-[#EB5324]">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg>
                </div>
                <h3 className="font-bold text-[13px] uppercase tracking-wider text-gray-900">Premium Finishes</h3>
                <p className="text-[13px] text-gray-500 leading-relaxed">
                  Curated veneers, durable laminates, and custom fabric panels tailored to your brand identity.
                </p>
              </div>

              <div className="flex flex-col gap-4">
                <div className="w-10 h-10 rounded-full bg-[#FAF9F7] flex items-center justify-center text-[#EB5324]">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                </div>
                <h3 className="font-bold text-[13px] uppercase tracking-wider text-gray-900">Collaborative Layouts</h3>
                <p className="text-[13px] text-gray-500 leading-relaxed">
                  Strategic desk arrangements that balance acoustic privacy with open communication.
                </p>
              </div>

              <div className="flex flex-col gap-4">
                <div className="w-10 h-10 rounded-full bg-[#FAF9F7] flex items-center justify-center text-[#EB5324]">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
                </div>
                <h3 className="font-bold text-[13px] uppercase tracking-wider text-gray-900">Architectural Integration</h3>
                <p className="text-[13px] text-gray-500 leading-relaxed">
                  Concealed wiring paths and structural partitions that seamlessly merge with interior floorplans.
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
