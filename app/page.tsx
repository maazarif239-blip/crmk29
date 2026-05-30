import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      {/* Header */}
      <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-[1200px] mx-auto px-4 h-20 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 text-[#EB5324]" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 6h16v2H4V6zm0 5h16v2H4v-2zm0 5h16v2H4v-2z" fill="currentColor" />
            </svg>
            <span className="font-bold text-lg tracking-tight">HB Furniture</span>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8 h-full">
            <Link href="#" className="h-full flex items-center text-[11px] font-bold text-[#EB5324] uppercase tracking-wider border-b-2 border-[#EB5324]">
              Home
            </Link>
            <Link href="/projects" className="h-full flex items-center text-[11px] font-bold text-gray-400 hover:text-gray-900 uppercase tracking-wider transition-colors">
              Projects
            </Link>
            <Link href="/products" className="h-full flex items-center text-[11px] font-bold text-gray-400 hover:text-gray-900 uppercase tracking-wider transition-colors">
              Products
            </Link>
            <Link href="/about" className="h-full flex items-center text-[11px] font-bold text-gray-400 hover:text-gray-900 uppercase tracking-wider transition-colors">
              About Us
            </Link>
          </nav>

          {/* Actions */}
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
      <section className="relative min-h-[600px] flex items-center justify-center flex-col text-center px-4 py-24">
        {/* Background Image Overlay */}
        <div className="absolute inset-0 bg-black/70 z-0"></div>
        <img 
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2000" 
          alt="Workspace" 
          className="absolute inset-0 w-full h-full object-cover -z-10"
        />

        <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-2 tracking-tight">
            Since 1964 —
          </h1>
          <h1 className="text-4xl md:text-5xl font-bold text-[#EB5324] mb-6 tracking-tight">
            Building Workspaces That <br className="hidden md:block" /> Perform
          </h1>
          
          <p className="text-gray-200 text-sm md:text-base max-w-2xl mx-auto font-medium leading-relaxed mb-8">
            Precision engineering meets architectural elegance. We deliver premium <br className="hidden md:block" /> turnkey solutions for the modern corporate environment.
          </p>

          <button className="bg-[#EB5324] hover:bg-[#d4481f] text-white px-6 py-3 text-[11px] font-bold uppercase tracking-wider flex items-center gap-3 transition-colors">
            Explore Projects
            <span className="w-5 h-5 border border-white/50 flex items-center justify-center">
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </span>
          </button>
        </div>
      </section>

      {/* Stats Bar */}
      <div className="relative z-20 max-w-4xl mx-auto -mt-12 bg-white shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)]">
        <div className="grid grid-cols-3 divide-x divide-gray-100 py-8">
          <div className="flex flex-col items-center justify-center text-center px-4">
            <span className="text-4xl font-bold text-[#EB5324] mb-2">60+</span>
            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Years of Heritage</span>
          </div>
          <div className="flex flex-col items-center justify-center text-center px-4">
            <span className="text-4xl font-bold text-[#EB5324] mb-2">300+</span>
            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Corporate Clients</span>
          </div>
          <div className="flex flex-col items-center justify-center text-center px-4">
            <span className="text-4xl font-bold text-[#EB5324] mb-2">500+</span>
            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Projects Delivered</span>
          </div>
        </div>
      </div>

      {/* About Section */}
      <section className="py-24 max-w-[1200px] mx-auto px-4 mt-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Left Text */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight leading-tight mb-2">
              A Legacy of <br />
              <span className="text-[#EB5324]">Craftsmanship</span>
            </h2>
            
            <p className="text-gray-500 text-[13px] leading-relaxed mt-8 mb-6">
              Founded by Mr. Tahir Hassan Qureshi, HB Furniture has stood as a paragon of industrial excellence since 1964. What began as a visionary pursuit of quality has evolved into a comprehensive institution for workspace creation.
            </p>
            <p className="text-gray-500 text-[13px] leading-relaxed mb-10">
              Our approach blends heritage manufacturing principles with cutting-edge architectural design. We don't just supply furniture; we engineer environments that foster productivity, well-being, and corporate prestige.
            </p>

            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white border border-gray-100 shadow-sm p-6">
                <svg className="w-6 h-6 text-[#EB5324] mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
                <h4 className="text-[10px] font-bold text-gray-900 uppercase tracking-widest mb-2">In-House Production</h4>
                <p className="text-gray-500 text-[11px] leading-relaxed">
                  Complete control over quality from raw material to finished product.
                </p>
              </div>
              <div className="bg-white border border-gray-100 shadow-sm p-6">
                <svg className="w-6 h-6 text-[#EB5324] mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                </svg>
                <h4 className="text-[10px] font-bold text-gray-900 uppercase tracking-widest mb-2">Design Integration</h4>
                <p className="text-gray-500 text-[11px] leading-relaxed">
                  Seamless collaboration with architects and corporate planners.
                </p>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative h-[600px] rounded-xl overflow-hidden shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1540574163026-643ea20ade25?auto=format&fit=crop&q=80&w=1000" 
              alt="Craftsmanship" 
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-[#f9f9f9] py-24 border-t border-gray-100">
        <div className="max-w-[1200px] mx-auto px-4 text-center">
          <span className="text-[#EB5324] text-[10px] font-bold uppercase tracking-widest block mb-3">Google Reviews</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 tracking-tight">What Our Clients Say</h2>
          <p className="text-gray-500 text-[13px]">Real experiences from real customers — verified on Google.</p>

          <div className="flex justify-center items-center gap-1 mt-6 text-[#EB5324]">
            {[1, 2, 3, 4, 5].map((star) => (
              <svg key={star} className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
              </svg>
            ))}
          </div>
          <p className="text-gray-400 text-[10px] font-bold uppercase tracking-widest mt-4">
            4.9 Rating | 150+ Satisfied Clients
          </p>

          <div className="mt-12 relative flex items-center justify-center">
            {/* Left Arrow */}
            <button className="absolute left-0 lg:-left-6 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-400 hover:text-gray-900 z-10 transition-colors">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Cards Container */}
            <div className="flex gap-6 w-full max-w-4xl px-12 overflow-hidden">
              {/* Card 1 */}
              <div className="bg-white p-8 border border-gray-100 shadow-sm flex-1 text-left relative">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-sm">
                    A
                  </div>
                  <div>
                    <h4 className="text-[13px] font-bold text-gray-900">Ahmad Rehan</h4>
                    <span className="text-[10px] text-gray-400 uppercase tracking-widest">Manager</span>
                  </div>
                  <div className="ml-auto">
                    <img src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png" alt="Google" className="h-4 object-contain grayscale opacity-50" />
                  </div>
                </div>
                <p className="text-gray-600 text-[13px] leading-relaxed italic">
                  "...after-sales support. HB Furniture truly cares about long-term client relationships."
                </p>
              </div>

              {/* Card 2 */}
              <div className="bg-white p-8 border border-[#EB5324] shadow-md flex-1 text-left relative">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600 font-bold text-sm">
                    D
                  </div>
                  <div>
                    <h4 className="text-[13px] font-bold text-gray-900">Dua Awan</h4>
                    <span className="text-[10px] text-gray-400 uppercase tracking-widest">Manager (Admin)</span>
                  </div>
                  <div className="ml-auto">
                    <img src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png" alt="Google" className="h-4 object-contain grayscale opacity-50" />
                  </div>
                </div>
                <p className="text-gray-600 text-[13px] leading-relaxed italic">
                  "Beautiful, functional, and sturdy. Our office looks completely transformed."
                </p>
              </div>
            </div>

            {/* Right Arrow */}
            <button className="absolute right-0 lg:-right-6 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-400 hover:text-gray-900 z-10 transition-colors">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          <div className="mt-12 flex items-center justify-center gap-2 text-[11px] text-gray-500 font-medium">
            <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
              <path d="M21.35 11.1h-9.17v2.73h6.51c-.33 3.81-3.5 5.44-6.5 5.44C8.36 19.27 5 16.25 5 12c0-4.1 3.2-7.27 7.2-7.27 3.09 0 4.9 1.97 4.9 1.97L19 4.72S16.56 2 12.1 2C6.42 2 2.03 6.8 2.03 12c0 5.05 4.13 10 10.22 10 5.35 0 9.25-3.67 9.25-9.09 0-1.15-.15-1.81-.15-1.81z"/>
            </svg>
            Based on reviews on Google
          </div>
        </div>
      </section>


    </div>
  );
}
