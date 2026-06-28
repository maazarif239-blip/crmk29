"use client";

import Image from 'next/image';
import Link from 'next/link';
import TestimonialsSection from '../components/TestimonialsSection';
import SignatureCollection from '../components/SignatureCollection';
import GlobalFooter from '@/components/GlobalFooter';
import { useState } from 'react';

// Prestige Client Logos for infinite scroll
const prestigeClientLogos = [
  "/96 (2).png", "/96 (3).png", "/96 (4).png", "/96 (5).png", "/96 (7).png",
  "/96 (8).png", "/96 (9).png", "/96 (10).png", "/96 (13).png", "/96 (15).png",
  "/96 (18).png", "/96 (19).png", "/96 (21).png", "/96 (24).png", "/96 (26).png",
  "/96 (27).png", "/96 (32).png", "/96 (34).png", "/96 (35).png", "/96 (42).png"
];

export default function Home() {
  // FAQ Accordion
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
  <>
      <style>{`main.flex-1 + .shrink-0 { display: none !important; }`}</style>
    <div className="bg-white text-gray-900 font-sans w-full overflow-x-clip">

      {/* Hero + Stats */}
      <div className="relative overflow-hidden">
        <section className="relative min-h-[min(600px,85vh)] sm:min-h-[600px] flex items-center justify-center flex-col text-center px-4 sm:px-6 py-16 sm:py-20 md:py-24">
          <img
            src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=2000&q=80"
            alt="Workspace"
            className="absolute inset-0 w-full h-full object-cover"
          />

          <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center w-full">
          <h1 className="text-[clamp(1.75rem,5vw,3rem)] font-bold text-white mb-2 tracking-tight">
            Since 1964 
          </h1>
          <h1 className="text-[clamp(1.75rem,5vw,3rem)] font-bold text-[#EB5324] mb-4 sm:mb-6 tracking-tight">
            Building Workspaces That <br className="hidden sm:block" /> Perform
          </h1>

          <p className="text-gray-200 text-sm md:text-base max-w-2xl mx-auto font-medium leading-relaxed mb-6 sm:mb-8 px-2">
            Precision engineering meets architectural elegance. We deliver premium <br className="hidden md:block" /> turnkey solutions for the modern corporate environment.
          </p>

          <Link
            href="/products/office-sets"
            className="inline-flex items-center justify-center gap-3 bg-[#EB5324] hover:bg-[#d4481f] text-white px-5 sm:px-6 py-3 text-[11px] font-bold uppercase tracking-wider transition-all duration-300 min-h-[44px] w-full max-w-xs sm:w-auto sm:max-w-none"
          >
            Explore Office Sets
            <span className="w-5 h-5 border border-white/50 flex items-center justify-center">
              →
            </span>
          </Link>
          </div>
        </section>

        <div className="relative z-20 max-w-4xl mx-auto -mt-8 sm:-mt-12 mb-8 sm:mb-10 md:mb-14 px-4 sm:px-6">
          <div className="bg-white shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)]">
            <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-100 py-8 gap-y-8 md:gap-y-0">
              <div className="flex flex-col items-center justify-center text-center px-4">
                <span className="text-3xl sm:text-4xl font-bold text-[#EB5324] mb-2">60+</span>
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Years of Heritage</span>
              </div>
              <div className="flex flex-col items-center justify-center text-center px-4">
                <span className="text-3xl sm:text-4xl font-bold text-[#EB5324] mb-2">300+</span>
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Corporate Clients</span>
              </div>
              <div className="flex flex-col items-center justify-center text-center px-4">
                <span className="text-3xl sm:text-4xl font-bold text-[#EB5324] mb-2">500+</span>
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Workspaces Delivered</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <SignatureCollection />

      {/* A Legacy of Craftsmanship Section */}
      <section className="py-16 sm:py-20 md:py-24 max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* Left Text */}
          <div className="text-center md:text-left">
            <h2 className="text-[clamp(1.875rem,4vw,3rem)] font-bold text-gray-900 tracking-tight leading-tight mb-2">
              A Legacy of <br />
              <span className="text-[#EB5324]">Craftsmanship</span>
            </h2>

            <p className="text-gray-500 text-[13px] leading-relaxed mt-8 mb-6">
              Founded by Mr. Tahir Hassan Gardezi, HB Furniture has stood as a paragon of industrial excellence since 1964. What began as a visionary pursuit of quality has evolved into a comprehensive institution for workspace creation.
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
          <div className="relative">
            <div className="relative overflow-hidden rounded-3xl shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1000&q=80"
                alt="Premium Office Furniture"
                width={800}
                height={600}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Prestige Clients */}
      <section className="py-16 sm:py-20 md:py-24 overflow-hidden">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <div className="text-center mb-10 sm:mb-16">
            <span className="text-[10px] font-bold text-[#EB5324] uppercase tracking-widest mb-2 block">Our Prestige Clients</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-serif">Trusted By Leading Organizations</h2>
            <p className="text-gray-500 text-sm md:text-base max-w-2xl mx-auto">
              Highlight that HB Furniture has successfully delivered workspace solutions for respected organizations across multiple industries.
            </p>
          </div>

          {/* Infinite Logo Carousel */}
          <div className="overflow-hidden">
            <div className="flex gap-8 sm:gap-12 animate-marquee">
              {/* Duplicate logos for seamless loop */}
              {[...prestigeClientLogos, ...prestigeClientLogos].map((logo, i) => (
                <div key={i} className="flex-shrink-0 flex items-center justify-center w-28 h-14 sm:w-36 sm:h-16 md:w-40 md:h-20 grayscale hover:grayscale-0 transition-all duration-300">
                  <Image
                    src={logo}
                    alt={`Client Logo ${i + 1}`}
                    width={160}
                    height={80}
                    className="object-contain w-full h-full"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialsSection />

      {/* Frequently Asked Questions */}
      <section className="py-16 sm:py-20 md:py-24 max-w-[1000px] mx-auto px-4 sm:px-6">
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-serif">Frequently Asked Questions</h2>
        </div>

        <div className="space-y-4">
          {[
            {
              question: "Product Quality",
              answer: "All our products are crafted with premium materials and undergo rigorous quality checks to ensure durability and excellence. We use only the finest wood, upholstery, and hardware in every piece."
            },
            {
              question: "Customization",
              answer: "We offer complete customization for most of our products. You can choose from a variety of finishes, fabrics, sizes, and configurations to match your exact requirements."
            },
            {
              question: "Delivery & Shipping",
              answer: "We provide delivery across Pakistan with professional handling. Shipping times vary by location.Expedited delivery options are available upon request."
            },
            {
              question: "Order Issues",
              answer: "For any order-related issues, our customer support team is available 24/7. We'll help you track your order, resolve any problems, or make changes to your order as needed."
            },
            {
              question: "Returns, Exchanges & Refunds",
              answer: "We offer a 7-day return policy for defective products. Exchanges are easy within 14 days. Refunds are processed quickly after inspection and verification."
            },
            {
              question: "Installation & Support",
              answer: "Professional installation services are available for all our products. Our team ensures proper assembly and setup. We also provide comprehensive after-sales support."
            }
          ].map((faq, i) => (
            <div key={i} className="border border-gray-200 rounded-lg overflow-hidden bg-white">
              <button
                onClick={() => toggleFaq(i)}
                className="w-full flex items-center justify-between gap-4 p-4 sm:p-6 text-left hover:bg-gray-50 transition-colors duration-200 min-h-[44px]"
              >
                <span className="text-sm md:text-base font-bold text-gray-900 text-left">{faq.question}</span>
                <svg className={`w-5 h-5 sm:w-6 sm:h-6 shrink-0 text-gray-400 transition-transform duration-300 ${openIndex === i ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className={`transition-all duration-300 ease-in-out overflow-hidden ${openIndex === i ? 'max-h-[300px] opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="px-6 pb-6">
                  <p className="text-gray-500 text-sm md:text-base leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section (Above Footer) */}
      <section className="relative py-16 sm:py-20 md:py-24 overflow-hidden isolate">
        {/* Background Image with dark overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=2000&q=80"
            alt="Office Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        <div className="relative z-10 max-w-[1200px] mx-auto px-4 sm:px-6 text-center">
          <span className="text-[10px] font-bold text-[#EB5324] uppercase tracking-widest mb-2 block">Let's Create Something Great Together</span>
          <h2 className="text-[clamp(1.75rem,4.5vw,3rem)] font-bold text-white mb-4 font-serif">Ready To Transform Your Workspace?</h2>
          <p className="text-gray-200 text-sm md:text-base max-w-2xl mx-auto mb-8 sm:mb-12">
            From executive offices to complete workplace solutions, HB Furniture helps organizations create productive environments that inspire performance.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-stretch sm:items-center max-w-md sm:max-w-none mx-auto">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-3 bg-[#EB5324] hover:bg-[#d4481f] text-white px-6 sm:px-8 py-3 text-[11px] font-bold uppercase tracking-wider transition-all duration-300 min-h-[44px]"
            >
              Request Consultation
              <span className="w-5 h-5 border border-white/50 flex items-center justify-center">
                →
              </span>
            </Link>
          </div>
        </div>
      </section>

      <GlobalFooter />

    </div>
  </>
  );
}
