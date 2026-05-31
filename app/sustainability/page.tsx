"use client";

import Link from 'next/link';

export default function Sustainability() {
  return (
    <div className="min-h-screen bg-[#F9F9F9] text-gray-900 font-sans selection:bg-[#E5E0D8]">
      {/* Header */}
      <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-[1200px] mx-auto px-4 h-20 flex items-center justify-between">
          <Link href="/" className="font-bold text-lg tracking-tight text-[#EB5324]">
            HB Furniture
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-[13px] text-gray-500 hover:text-gray-900 transition-colors">
              Home
            </Link>
            <Link href="/products" className="text-[13px] text-gray-500 hover:text-gray-900 transition-colors">
              Products
            </Link>
            <Link href="/about" className="text-[13px] text-[#EB5324] font-bold border-b-2 border-[#EB5324] h-20 flex items-center">
              About
            </Link>
            <Link href="/contact" className="text-[13px] text-gray-500 hover:text-gray-900 transition-colors">
              Contact
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 text-center">
        <div className="max-w-[1200px] mx-auto px-4">
          <span className="text-[#EB5324] text-[10px] font-bold uppercase tracking-widest mb-4 block">
            Our Commitment
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight mb-16">
            Sustainability
          </h1>

          {/* Feature Cards */}
          <div className="flex flex-col md:flex-row justify-center gap-6 max-w-4xl mx-auto">
            <div className="bg-white px-8 py-6 flex items-center gap-4 shadow-sm border border-gray-100 flex-1 justify-center rounded-sm hover:-translate-y-1 transition-transform">
              <svg className="w-8 h-8 text-[#EB5324]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg>
              <span className="font-bold text-[11px] uppercase tracking-wider text-gray-900">Responsible Sourcing</span>
            </div>
            <div className="bg-white px-8 py-6 flex items-center gap-4 shadow-sm border border-gray-100 flex-1 justify-center rounded-sm hover:-translate-y-1 transition-transform">
              <svg className="w-8 h-8 text-[#EB5324]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>
              <span className="font-bold text-[11px] uppercase tracking-wider text-gray-900">Waste Reduction</span>
            </div>
            <div className="bg-white px-8 py-6 flex items-center gap-4 shadow-sm border border-gray-100 flex-1 justify-center rounded-sm hover:-translate-y-1 transition-transform">
              <svg className="w-8 h-8 text-[#EB5324]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
              <span className="font-bold text-[11px] uppercase tracking-wider text-gray-900">Efficient Manufacturing</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="max-w-[1200px] mx-auto px-4 pb-24 relative mt-4">
        
        {/* Content Box */}
        <div className="max-w-4xl mx-auto bg-white shadow-sm border border-gray-100 p-10 md:p-16 rounded-sm">
          <div className="space-y-16">
            
            <div id="section-1" className="scroll-mt-32">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-1 h-5 bg-[#EB5324]"></div>
                <h2 className="text-[15px] font-bold text-gray-900">1. Our Commitment</h2>
              </div>
              <p className="text-gray-500 text-[13px] leading-relaxed pl-4">
                At HB Furniture, sustainability is built into how we operate — from material sourcing to final delivery.
              </p>
            </div>

            <div id="section-2" className="scroll-mt-32">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-1 h-5 bg-[#EB5324]"></div>
                <h2 className="text-[15px] font-bold text-gray-900">2. Responsible Material Sourcing</h2>
              </div>
              <p className="text-gray-500 text-[13px] leading-relaxed pl-4">
                We prioritize locally sourced wood and materials to reduce import dependency and support Pakistan's economy.
              </p>
            </div>

            <div id="section-3" className="scroll-mt-32">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-1 h-5 bg-[#EB5324]"></div>
                <h2 className="text-[15px] font-bold text-gray-900">3. Waste Reduction in Manufacturing</h2>
              </div>
              <p className="text-gray-500 text-[13px] leading-relaxed pl-4">
                Our Islamabad facility follows lean manufacturing practices — minimizing offcuts, recycling materials where possible.
              </p>
            </div>

            <div id="section-4" className="scroll-mt-32">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-1 h-5 bg-[#EB5324]"></div>
                <h2 className="text-[15px] font-bold text-gray-900">4. Durable Products = Less Waste</h2>
              </div>
              <p className="text-gray-500 text-[13px] leading-relaxed pl-4">
                We build furniture to last decades — not years. Long-lasting products mean fewer replacements and less environmental impact.
              </p>
            </div>

            <div id="section-5" className="scroll-mt-32">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-1 h-5 bg-[#EB5324]"></div>
                <h2 className="text-[15px] font-bold text-gray-900">5. Our Future Goals</h2>
              </div>
              <p className="text-gray-500 text-[13px] leading-relaxed pl-4">
                We are working toward greener packaging, reduced energy use in production, and certified sustainable material options for clients.
              </p>
            </div>

            <div id="section-6" className="scroll-mt-32">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-1 h-5 bg-[#EB5324]"></div>
                <h2 className="text-[15px] font-bold text-gray-900">6. Get In Touch</h2>
              </div>
              <p className="text-gray-500 text-[13px] leading-relaxed pl-4 mb-6">
                Want to discuss sustainable workspace solutions for your office? Contact our team.
              </p>
              <div className="pl-4">
                <Link href="/contact" className="bg-[#EB5324] text-white px-6 py-3 text-[11px] font-bold hover:bg-[#d4481f] transition-colors uppercase tracking-widest inline-flex items-center gap-3 shadow-sm rounded-sm">
                  Contact Us
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                </Link>
              </div>
            </div>

          </div>
        </div>

      </section>


    </div>
  );
}
