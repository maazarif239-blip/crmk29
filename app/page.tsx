"use client";

import Image from 'next/image';
import Link from 'next/link';
import TestimonialsSection from '../components/TestimonialsSection';
import { useState, useEffect, useRef } from 'react';

export default function Home() {
  const signatureSliderRef = useRef<HTMLDivElement>(null);
  const signatureTranslateRef = useRef(0);

  // Signature Collection Slider
  const slideSignature = (direction: "left" | "right") => {
    if (!signatureSliderRef.current) return;
    const slideWidth = 320;
    const maxTranslate = (signatureSliderRef.current.children.length - 4) * slideWidth;

    if (direction === "left") {
      signatureTranslateRef.current = Math.max(signatureTranslateRef.current - slideWidth, 0);
    } else {
      signatureTranslateRef.current = Math.min(signatureTranslateRef.current + slideWidth, maxTranslate);
    }

    signatureSliderRef.current.style.transform = `translateX(-${signatureTranslateRef.current}px)`;
  };

  // FAQ Accordion
  const toggleFaq = (index: number) => {
    const content = document.getElementById(`faq-content-${index}`);
    const icon = document.getElementById(`faq-icon-${index}`);

    if (content && icon) {
      if (content.classList.contains("hidden")) {
        content.classList.remove("hidden");
        icon.style.transform = "rotate(180deg)";
      } else {
        content.classList.add("hidden");
        icon.style.transform = "rotate(0deg)";
      }
    }
  };

  useEffect(() => {
    // Attach FAQ listeners
    for (let i = 0; i < 6; i++) {
      const btn = document.getElementById(`faq-btn-${i}`);
      if (btn) {
        btn.addEventListener("click", () => toggleFaq(i));
      }
    }

    // Attach slider listeners
    const leftBtn = document.getElementById("slider-left");
    const rightBtn = document.getElementById("slider-right");

    if (leftBtn) {
      leftBtn.addEventListener("click", () => slideSignature("left"));
    }
    if (rightBtn) {
      rightBtn.addEventListener("click", () => slideSignature("right"));
    }
  }, []);

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

      {/* Signature Collection */}
      <section className="py-24 max-w-[1200px] mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-serif">Signature Collection</h2>
          <p className="text-gray-500 text-sm md:text-base max-w-2xl mx-auto">
            Explore our best-selling furniture crafted for modern spaces.
          </p>
        </div>

        <div className="relative">
          <div className="overflow-hidden">
            <div ref={signatureSliderRef} className="flex gap-8 transition-transform duration-500" id="signature-slider">
              {[
                { name: "Executive Office Chair", price: "Rs. 45,000", image: "https://images.unsplash.com/photo-1580480055273-228ff5388ef8?auto=format&fit=crop&w=400&q=80" },
                { name: "Modern Study Desk", price: "Rs. 35,000", image: "https://images.unsplash.com/photo-1518455027359-f3f11187ba17?auto=format&fit=crop&w=400&q=80" },
                { name: "Premium Sofa Set", price: "Rs. 120,000", image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=400&q=80" },
                { name: "Ergonomic Visitor Chair", price: "Rs. 18,000", image: "https://images.unsplash.com/photo-1592078615290-033ee584e267?auto=format&fit=crop&w=400&q=80" },
                { name: "Wooden Conference Table", price: "Rs. 85,000", image: "https://images.unsplash.com/photo-1535230366096-f1280536613a?auto=format&fit=crop&w=400&q=80" },
              ].map((product, i) => (
                <div key={i} className="min-w-[280px] md:min-w-[28%] group">
                  <div className="relative overflow-hidden rounded-lg mb-4 bg-[#F5F5F5] aspect-[4/3] flex items-center justify-center">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100">
                      <button className="bg-white text-gray-900 px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-sm shadow-lg hover:bg-[#EB5324] hover:text-white transition-all duration-200">
                        Quick View
                      </button>
                      <button className="bg-[#EB5324] text-white px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-sm shadow-lg hover:bg-[#d4481f] transition-all duration-200">
                        Add to Cart
                      </button>
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">{product.name}</h3>
                  <p className="text-[#EB5324] font-bold text-sm">{product.price}</p>
                </div>
              ))}
            </div>
          </div>
          <button
            id="slider-left"
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-900 hover:bg-[#EB5324] hover:text-white transition-all duration-200 z-10"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            id="slider-right"
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-900 hover:bg-[#EB5324] hover:text-white transition-all duration-200 z-10"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className="py-24 max-w-[1000px] mx-auto px-4">
        <div className="text-center mb-16">
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
              answer: "We provide delivery across Pakistan with professional handling. Shipping times vary by location, typically within 7-14 business days. Expedited delivery options are available upon request."
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
                id={`faq-btn-${i}`}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors duration-200"
              >
                <span className="text-sm md:text-base font-bold text-gray-900">{faq.question}</span>
                <svg id={`faq-icon-${i}`} className="w-6 h-6 text-gray-400 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div id={`faq-content-${i}`} className="hidden px-6 pb-6">
                <p className="text-gray-500 text-sm md:text-base leading-relaxed">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialsSection />

      {/* Our Prestigious Clients */}
      <section className="py-24 bg-[#FAFAFA]">
        <div className="max-w-[1200px] mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-serif">Our Prestigious Clients</h2>
          </div>

          <div className="relative overflow-hidden">
            <div className="flex gap-8 animate-marquee items-center" id="clients-slider">
              {[
                "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/200px-Microsoft_logo.svg.png",
                "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/200px-Google_2015_logo.svg.png",
                "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/200px-Amazon_logo.svg.png",
                "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/132px-Apple_logo_black.svg.png",
                "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/200px-Facebook_Logo_%282019%29.png",
                "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/200px-Microsoft_logo.svg.png",
                "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/200px-Google_2015_logo.svg.png",
                "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/200px-Amazon_logo.svg.png",
                "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/132px-Apple_logo_black.svg.png",
                "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/200px-Facebook_Logo_%282019%29.png",
              ].map((logo, i) => (
                <div key={i} className="flex-shrink-0 w-[180px] md:w-[200px] bg-white rounded-lg shadow-sm p-6 flex items-center justify-center h-[120px]">
                  <img src={logo} alt={`Client ${i + 1}`} className="max-h-[60px] object-contain opacity-60 hover:opacity-100 transition-opacity duration-300" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
