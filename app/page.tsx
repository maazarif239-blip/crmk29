import Image from 'next/image';
import Link from 'next/link';
import TestimonialsSection from '../components/TestimonialsSection';

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      

      {/* Hero Section */}
      <section className="relative min-h-[600px] flex items-center justify-center flex-col text-center px-4 py-24">
        {/* Background Image Overlay */}
       <img
 src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=2000&q=80"
  alt="Workspace"
  className="absolute inset-0 w-full h-full object-cover"
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
          
         <Link
  href="/products"
  className="inline-flex items-center gap-3 bg-[#EB5324] hover:bg-[#d4481f] text-white px-6 py-3 text-[11px] font-bold uppercase tracking-wider transition-all duration-300"
>
  Explore Products

  <span className="w-5 h-5 border border-white/50 flex items-center justify-center">
    →
  </span>
</Link>
        </div>
      </section>

      {/* Stats Bar */}
      <div className="relative z-20 max-w-4xl mx-auto -mt-12 bg-white shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)]">
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-100 py-8 gap-y-8 md:gap-y-0">
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
      <section className="py-24 max-w-[1200px] mx-auto px-4 mt-12">
        <div className="flex flex-col-reverse md:grid md:grid-cols-2 gap-16 items-center">
          {/* Left Text */}
          <div className="text-center md:text-left">
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

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-white border border-gray-100 shadow-sm p-6 relative z-10">
                <svg className="w-6 h-6 text-[#EB5324] mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
                <h4 className="text-[10px] font-bold text-gray-900 uppercase tracking-widest mb-2">In-House Production</h4>
                <p className="text-gray-500 text-[11px] leading-relaxed">
                  Complete control over quality from raw material to finished product.
                </p>
              </div>
              <div className="bg-white border border-gray-100 shadow-sm p-6 relative z-10">
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
          <div className="relative h-[400px] md:h-[600px] w-full rounded-xl overflow-hidden shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1540574163026-643ea20ade25?auto=format&fit=crop&q=80&w=1000" 
              alt="Craftsmanship" 
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialsSection />

    </div>
  );
}
