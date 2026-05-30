"use client";

import Link from 'next/link';

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans selection:bg-[#E5E0D8]">
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
            <Link href="/about" className="text-[13px] text-gray-500 hover:text-gray-900 transition-colors">
              About
            </Link>
            <Link href="/contact" className="text-[13px] text-gray-500 hover:text-gray-900 transition-colors">
              Contact
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-[#F9F9F9] py-24 text-center border-b border-gray-100">
        <div className="max-w-[1200px] mx-auto px-4">
          <span className="text-[#EB5324] text-[10px] font-bold uppercase tracking-widest mb-4 block">
            Legal
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">
            Terms of Service
          </h1>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="max-w-[1200px] mx-auto px-4 py-20 flex flex-col md:flex-row gap-16 relative">
        
        {/* Sidebar Navigation */}
        <aside className="w-full md:w-[250px] shrink-0">
          <div className="sticky top-32">
            <h3 className="text-[#EB5324] text-[13px] font-bold mb-1">Navigation</h3>
            <p className="text-[9px] font-medium text-gray-400 uppercase tracking-widest mb-8">Table of Contents</p>
            
            <ul className="space-y-6 text-[11px] font-medium text-gray-500">
              <li><a href="#section-1" className="hover:text-gray-900 transition-colors block">1. Acceptance of Terms</a></li>
              <li><a href="#section-2" className="hover:text-gray-900 transition-colors block">2. Use of Website</a></li>
              <li><a href="#section-3" className="hover:text-gray-900 transition-colors block leading-relaxed">3. Product & Pricing<br/>Information</a></li>
              <li><a href="#section-4" className="hover:text-gray-900 transition-colors block">4. Orders & Agreements</a></li>
              <li><a href="#section-5" className="hover:text-gray-900 transition-colors block">5. Intellectual Property</a></li>
              <li><a href="#section-6" className="hover:text-gray-900 transition-colors block">6. Limitation of Liability</a></li>
              <li><a href="#section-7" className="hover:text-gray-900 transition-colors block">7. Changes to Terms</a></li>
              <li className="relative">
                <div className="absolute -left-4 top-0 bottom-0 w-[3px] bg-[#EB5324] rounded-full"></div>
                <a href="#section-8" className="text-[#EB5324] font-bold block">8. Contact Us</a>
              </li>
            </ul>
          </div>
        </aside>

        {/* Content Box */}
        <div className="flex-1 max-w-3xl space-y-16">
            
          <div id="section-1" className="scroll-mt-32">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-1 h-5 bg-[#EB5324]"></div>
              <h2 className="text-[15px] font-bold text-gray-900">1. Acceptance of Terms</h2>
            </div>
            <p className="text-gray-500 text-[13px] leading-relaxed pl-4">
              By using this website you agree to these terms and conditions.
            </p>
          </div>

          <div id="section-2" className="scroll-mt-32">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-1 h-5 bg-[#EB5324]"></div>
              <h2 className="text-[15px] font-bold text-gray-900">2. Use of Website</h2>
            </div>
            <p className="text-gray-500 text-[13px] leading-relaxed pl-4">
              This site is for informational and business enquiry purposes only. Unauthorized use is prohibited.
            </p>
          </div>

          <div id="section-3" className="scroll-mt-32">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-1 h-5 bg-[#EB5324]"></div>
              <h2 className="text-[15px] font-bold text-gray-900">3. Product & Pricing Information</h2>
            </div>
            <p className="text-gray-500 text-[13px] leading-relaxed pl-4">
              All products are subject to availability. Prices are provided via custom quote only.
            </p>
          </div>

          <div id="section-4" className="scroll-mt-32">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-1 h-5 bg-[#EB5324]"></div>
              <h2 className="text-[15px] font-bold text-gray-900">4. Orders & Agreements</h2>
            </div>
            <p className="text-gray-500 text-[13px] leading-relaxed pl-4">
              All orders are confirmed via written agreement or purchase order signed by both parties.
            </p>
          </div>

          <div id="section-5" className="scroll-mt-32">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-1 h-5 bg-[#EB5324]"></div>
              <h2 className="text-[15px] font-bold text-gray-900">5. Intellectual Property</h2>
            </div>
            <p className="text-gray-500 text-[13px] leading-relaxed pl-4">
              All content, logos, and images on this website belong to HB Furniture. Do not reproduce without permission.
            </p>
          </div>

          <div id="section-6" className="scroll-mt-32">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-1 h-5 bg-[#EB5324]"></div>
              <h2 className="text-[15px] font-bold text-gray-900">6. Limitation of Liability</h2>
            </div>
            <p className="text-gray-500 text-[13px] leading-relaxed pl-4">
              HB Furniture is not liable for indirect damages arising from use of this website.
            </p>
          </div>

          <div id="section-7" className="scroll-mt-32">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-1 h-5 bg-[#EB5324]"></div>
              <h2 className="text-[15px] font-bold text-gray-900">7. Changes to Terms</h2>
            </div>
            <p className="text-gray-500 text-[13px] leading-relaxed pl-4">
              We reserve the right to update these terms at any time.
            </p>
          </div>

          <div id="section-8" className="scroll-mt-32">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-1 h-5 bg-[#EB5324]"></div>
              <h2 className="text-[15px] font-bold text-gray-900">8. Contact Us</h2>
            </div>
            <p className="text-gray-500 text-[13px] leading-relaxed pl-4 mb-6">
              If you have any questions or concerns regarding these terms, please reach out to us:
            </p>
            <div className="pl-4">
              <div className="bg-[#F9F9F9] p-6 inline-flex flex-col gap-4 border border-gray-100 rounded-sm">
                <div className="flex items-center gap-3">
                  <svg className="w-4 h-4 text-[#EB5324]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                  <span className="text-[13px] text-gray-600">hbfurniture64@gmail.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <svg className="w-4 h-4 text-[#EB5324]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                  <span className="text-[13px] text-gray-600">0321 511 2240</span>
                </div>
              </div>
            </div>
          </div>

        </div>

      </section>


    </div>
  );
}
