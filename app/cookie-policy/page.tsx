"use client";

import Link from 'next/link';

export default function CookiePolicy() {
  return (
    <div className="min-h-screen bg-[#F9F9F9] text-gray-900 font-sans selection:bg-[#E5E0D8]">
      

      {/* Main Layout Area */}
      <section className="max-w-[1200px] mx-auto px-4 py-20 relative">
        
        {/* Content Column */}
        <div className="max-w-4xl mx-auto">
          {/* Header Title Centered Above Box */}
          <div className="text-center mb-12">
            <span className="text-[#EB5324] text-[10px] font-bold uppercase tracking-widest mb-4 block">
              Legal
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">
              Cookie Policy
            </h1>
          </div>

          {/* White Content Box */}
          <div className="bg-white shadow-sm border border-gray-100 p-10 md:p-16 rounded-sm">
            <div className="space-y-16">
              
              <div id="section-1" className="scroll-mt-32">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-1 h-5 bg-[#EB5324]"></div>
                  <h2 className="text-[15px] font-bold text-gray-900">1. What Are Cookies</h2>
                </div>
                <p className="text-gray-500 text-[13px] leading-relaxed pl-4">
                  Cookies are small text files stored on your device when you visit our website.
                </p>
              </div>

              <div id="section-2" className="scroll-mt-32">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-1 h-5 bg-[#EB5324]"></div>
                  <h2 className="text-[15px] font-bold text-gray-900">2. Cookies We Use</h2>
                </div>
                <div className="pl-4 space-y-4">
                  <div className="bg-gray-50 border border-gray-100 p-5 rounded-sm">
                    <h3 className="font-bold text-[13px] text-gray-900 mb-2">Essential Cookies</h3>
                    <p className="text-gray-500 text-[12px]">Required for the website to function properly.</p>
                  </div>
                  <div className="bg-gray-50 border border-gray-100 p-5 rounded-sm">
                    <h3 className="font-bold text-[13px] text-gray-900 mb-2">Analytics Cookies</h3>
                    <p className="text-gray-500 text-[12px]">Help us understand how visitors use our site.</p>
                  </div>
                  <div className="bg-gray-50 border border-gray-100 p-5 rounded-sm">
                    <h3 className="font-bold text-[13px] text-gray-900 mb-2">Preference Cookies</h3>
                    <p className="text-gray-500 text-[12px]">Remember your settings and preferences.</p>
                  </div>
                </div>
              </div>

              <div id="section-3" className="scroll-mt-32">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-1 h-5 bg-[#EB5324]"></div>
                  <h2 className="text-[15px] font-bold text-gray-900">3. How to Control Cookies</h2>
                </div>
                <p className="text-gray-500 text-[13px] leading-relaxed pl-4">
                  You can disable cookies through your browser settings. Note: this may affect website functionality.
                </p>
              </div>

              <div id="section-4" className="scroll-mt-32">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-1 h-5 bg-[#EB5324]"></div>
                  <h2 className="text-[15px] font-bold text-gray-900">4. Third Party Cookies</h2>
                </div>
                <p className="text-gray-500 text-[13px] leading-relaxed pl-4">
                  We may use Google Analytics cookies to track website performance and visitor data.
                </p>
              </div>

              <div id="section-5" className="scroll-mt-32">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-1 h-5 bg-[#EB5324]"></div>
                  <h2 className="text-[15px] font-bold text-gray-900">5. Updates to This Policy</h2>
                </div>
                <p className="text-gray-500 text-[13px] leading-relaxed pl-4">
                  This policy may be updated periodically. Check this page for the latest version.
                </p>
              </div>

              <div id="section-6" className="scroll-mt-32">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-1 h-5 bg-[#EB5324]"></div>
                  <h2 className="text-[15px] font-bold text-gray-900">6. Contact Us</h2>
                </div>
                <p className="text-gray-500 text-[13px] leading-relaxed pl-4">
                  hbfurniture64@gmail.com | 0321 511 2240.
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>



      {/* Fixed Cookie Consent Banner */}
      <div className="fixed bottom-0 left-0 w-full bg-white border-t border-gray-200 shadow-[0_-4px_10px_-2px_rgba(0,0,0,0.05)] z-50">
        <div className="max-w-[1200px] mx-auto px-4 py-4 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-[11px]">
            We use cookies to improve your experience.
          </p>
          <div className="flex items-center gap-6">
            <button className="text-gray-500 text-[11px] font-medium hover:text-gray-900 transition-colors">
              Manage Preferences
            </button>
            <button className="bg-[#EB5324] hover:bg-[#d4481f] text-white px-6 py-2.5 text-[11px] font-bold uppercase tracking-widest rounded-sm transition-colors shadow-sm">
              Accept All
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
