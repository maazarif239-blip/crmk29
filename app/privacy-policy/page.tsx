"use client";

import Link from 'next/link';

export default function PrivacyPolicy() {
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
            Privacy Policy
          </h1>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="max-w-[1200px] mx-auto px-4 py-20 relative">
        
        {/* Content */}
        <div className="max-w-4xl mx-auto space-y-16">
          
          <div id="section-1" className="scroll-mt-32">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-1 h-6 bg-[#EB5324]"></div>
              <h2 className="text-xl font-bold text-gray-900">1. Information We Collect</h2>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed pl-5">
              We collect name, email, phone, company name when you fill our contact or quote forms.
            </p>
          </div>

          <div id="section-2" className="scroll-mt-32">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-1 h-6 bg-[#EB5324]"></div>
              <h2 className="text-xl font-bold text-gray-900">2. How We Use Your Information</h2>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed pl-5">
              To respond to enquiries, process quotes, and improve our services. We never sell your data.
            </p>
          </div>

          <div id="section-3" className="scroll-mt-32">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-1 h-6 bg-[#EB5324]"></div>
              <h2 className="text-xl font-bold text-gray-900">3. Data Storage & Security</h2>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed pl-5">
              Your data is stored securely and only accessible to authorized HB Furniture team members.
            </p>
          </div>

          <div id="section-4" className="scroll-mt-32">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-1 h-6 bg-[#EB5324]"></div>
              <h2 className="text-xl font-bold text-gray-900">4. Cookies</h2>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed pl-5">
              We use cookies to improve website experience. See our Cookie Policy for full details.
            </p>
          </div>

          <div id="section-5" className="scroll-mt-32">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-1 h-6 bg-[#EB5324]"></div>
              <h2 className="text-xl font-bold text-gray-900">5. Third Party Links</h2>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed pl-5">
              Our website may link to external sites. We are not responsible for their privacy practices.
            </p>
          </div>

          <div id="section-6" className="scroll-mt-32">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-1 h-6 bg-[#EB5324]"></div>
              <h2 className="text-xl font-bold text-gray-900">6. Your Rights</h2>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed pl-5">
              You may request deletion or correction of your data at any time by contacting us.
            </p>
          </div>

          <div id="section-7" className="scroll-mt-32">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-1 h-6 bg-[#EB5324]"></div>
              <h2 className="text-xl font-bold text-gray-900">7. Contact Us</h2>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed pl-5">
              hbfurniture64@gmail.com | 0321 511 2240
            </p>
          </div>

        </div>

      </section>


    </div>
  );
}
