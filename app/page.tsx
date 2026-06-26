"use client";

import Image from 'next/image';
import Link from 'next/link';
import TestimonialsSection from '../components/TestimonialsSection';
import { useState, useEffect, useRef, useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';



// Signature Collection Products (18 products)
const signatureProducts = [
  // Executive Office Tables (3)
  { name: "Classic Mahogany Executive Desk Set", image: "/Screenshot 2026-06-23 234454.png", href: "/products/executive-office-tables" },
  { name: "Carved Wood Executive Office Set", image: "/Screenshot 2026-06-23 234504.png", href: "/products/executive-office-tables" },
  { name: "Walnut Executive Desk with Bookcase", image: "/Screenshot 2026-06-23 234512.png", href: "/products/executive-office-tables" },
  // Office Sets (3)
  { name: "Executive Office Table Set", image: "/10016.jpeg", href: "/products/office-sets" },
  { name: "Modern Office Workstation Set", image: "/10008.jpeg", href: "/products/office-sets" },
  { name: "Premium Office Table Set", image: "/10009.jpeg", href: "/products/office-sets" },
  // Conference & Meeting Tables (3)
  { name: "Walnut Executive Conference Table", image: "/175-1-.png", href: "/products/conference-and-meeting-tables" },
  { name: "Curved Boardroom Table with Center Display", image: "/175-2-.png", href: "/products/conference-and-meeting-tables" },
  { name: "Extra Long Boardroom Conference Table", image: "/175-3-.png", href: "/products/conference-and-meeting-tables" },
  // Manager Chairs (2)
  { name: "Pink High-Back Manager Chair", image: "/245-1-.png", href: "/products/manager-chair-collection" },
  { name: "White Frame Mesh Manager Chair Black & Grey", image: "/245-2-.png", href: "/products/manager-chair-collection" },
  // Center & Side Tables (2)
  { name: "Classic Wood Side Table", image: "/Screenshot 2026-06-23 235247.png", href: "/products/center-and-side-tables" },
  { name: "Carved Console Side Table", image: "/Screenshot 2026-06-23 235252.png", href: "/products/center-and-side-tables" },
  // Almirahs (2)
  { name: "Executive Storage Almirah", image: "/f8f1903f-3a91-4b6f-9db7-6efdb338568b.png", href: "/products/almirahs" },
  { name: "Premium Steel Almirah", image: "/1f6a1a87-8fc6-434f-bed8-10d6459de6e1.png", href: "/products/almirahs" },
  // Workstations (1)
  { name: "L-Shape Executive Workstation", image: "/Screenshot 2026-06-23 225449.png", href: "/products/heritage-executive-workstation-series" },
  // Storage Cabinets (1)
  { name: "Mahogany Display & Storage Hutch", image: "/Screenshot 2026-06-23 233940.png", href: "/products/storage-cabinets" },
];

// Prestige Client Logos for infinite scroll
const prestigeClientLogos = [
  "/96 (2).png", "/96 (3).png", "/96 (4).png", "/96 (5).png", "/96 (7).png",
  "/96 (8).png", "/96 (9).png", "/96 (10).png", "/96 (13).png", "/96 (15).png",
  "/96 (18).png", "/96 (19).png", "/96 (21).png", "/96 (24).png", "/96 (26).png",
  "/96 (27).png", "/96 (32).png", "/96 (34).png", "/96 (35).png", "/96 (42).png"
];

// Client logo data
const clientLogos = [
  { name: "Client 1", filename: "/Screenshot 2026-06-20 162627.png", isDirect: true },
  { name: "Client 2", filename: "/Screenshot 2026-06-20 162639.png", isDirect: true },
  { name: "Client 3", filename: "/Screenshot 2026-06-20 162651.png", isDirect: true },
  { name: "Client 4", filename: "/Screenshot 2026-06-20 162655.png", isDirect: true },
  { name: "Client 5", filename: "/Screenshot 2026-06-20 162700.png", isDirect: true },
  { name: "Client 6", filename: "/Screenshot 2026-06-20 162706.png", isDirect: true },
  { name: "Client 7", filename: "/Screenshot 2026-06-20 162711.png", isDirect: true },
  { name: "Client 8", filename: "/Screenshot 2026-06-20 162723.png", isDirect: true },
  { name: "Client 9", filename: "/Screenshot 2026-06-20 162727.png", isDirect: true },
  { name: "Client 10", filename: "/Screenshot 2026-06-20 162734.png", isDirect: true },
  { name: "Client 11", filename: "/Screenshot 2026-06-20 162755.png", isDirect: true },
  { name: "Client 12", filename: "/Screenshot 2026-06-20 162805.png", isDirect: true },
  { name: "Client 13", filename: "/Screenshot 2026-06-20 162815.png", isDirect: true },
  { name: "Client 14", filename: "/Screenshot 2026-06-20 162837.png", isDirect: true },
  { name: "Client 15", filename: "/Screenshot 2026-06-20 162845.png", isDirect: true },
  { name: "Client 16", filename: "/Screenshot 2026-06-20 162850.png", isDirect: true },
  { name: "Client 17", filename: "/Screenshot 2026-06-20 162907.png", isDirect: true },
  { name: "Client 18", filename: "/Screenshot 2026-06-20 162914.png", isDirect: true },
  { name: "Client 19", filename: "/Screenshot 2026-06-20 162920.png", isDirect: true },
  { name: "Client 20", filename: "/Screenshot 2026-06-20 162939.png", isDirect: true },
  { name: "Client 21", filename: "/Screenshot 2026-06-20 162959.png", isDirect: true },
  { name: "Client 22", filename: "/Screenshot 2026-06-20 163020.png", isDirect: true },
  { name: "Client 23", filename: "/Screenshot 2026-06-20 163031.png", isDirect: true },
  { name: "Client 24", filename: "/Screenshot 2026-06-20 163042.png", isDirect: true },
  { name: "Client 25", filename: "/Screenshot 2026-06-20 163103.png", isDirect: true },
  { name: "Client 26", filename: "/Screenshot 2026-06-20 163107.png", isDirect: true },
  { name: "Client 27", filename: "/Screenshot 2026-06-20 163117.png", isDirect: true },
  { name: "Client 28", filename: "/Screenshot 2026-06-20 163121.png", isDirect: true },
  { name: "Client 29", filename: "/Screenshot 2026-06-20 163125.png", isDirect: true },
  { name: "Client 30", filename: "/Screenshot 2026-06-20 163129.png", isDirect: true },
  { name: "Client 31", filename: "/Screenshot 2026-06-20 163134.png", isDirect: true },
  { name: "Client 32", filename: "/Screenshot 2026-06-20 163140.png", isDirect: true },
  { name: "Client 33", filename: "/Screenshot 2026-06-20 163148.png", isDirect: true },
  { name: "Client 34", filename: "/Screenshot 2026-06-20 163152.png", isDirect: true },
  { name: "Client 35", filename: "/Screenshot 2026-06-20 163157.png", isDirect: true },
  { name: "Client 36", filename: "/Screenshot 2026-06-20 163202.png", isDirect: true },
  { name: "Client 37", filename: "/Screenshot 2026-06-20 163205.png", isDirect: true },
  { name: "Client 38", filename: "/Screenshot 2026-06-20 163236.png", isDirect: true },
  { name: "Client 39", filename: "/Screenshot 2026-06-20 163250.png", isDirect: true },
  { name: "Client 40", filename: "/Screenshot 2026-06-20 163259.png", isDirect: true },
  { name: "Client 41", filename: "/Screenshot 2026-06-20 163308.png", isDirect: true },
  { name: "Client 42", filename: "/Screenshot 2026-06-20 163315.png", isDirect: true },
  { name: "Client 43", filename: "/Screenshot 2026-06-20 163323.png", isDirect: true },
  { name: "Client 44", filename: "/Screenshot 2026-06-20 163331.png", isDirect: true },
  { name: "Client 45", filename: "/Screenshot 2026-06-20 163342.png", isDirect: true },
  { name: "Client 46", filename: "/Screenshot 2026-06-20 163351.png", isDirect: true }
];

export default function Home() {

  // Initialize Embla Carousel for Clients
  const [clientsEmblaRef, clientsEmblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: 'start',
      slidesToScroll: 1,
      containScroll: 'trimSnaps',
      breakpoints: {
        '(min-width: 768px)': { slidesToScroll: 3 },
        '(min-width: 1024px)': { slidesToScroll: 6 }
      }
    },
    [Autoplay({ delay: 2500, stopOnInteraction: false, stopOnMouseEnter: true })]
  );

  // FAQ Accordion
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

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
            href="/products/office-sets"
            className="inline-flex items-center gap-3 bg-[#EB5324] hover:bg-[#d4481f] text-white px-6 py-3 text-[11px] font-bold uppercase tracking-wider transition-all duration-300"
          >
            Explore Office Sets

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

      {/* Signature Collection Section (Homepage Section 2) */}
      <section className="py-24 max-w-[1200px] mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-[10px] font-bold text-[#EB5324] uppercase tracking-widest mb-2 block">Signature Collection</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-serif">Discover Our Signature Collection</h2>
          <p className="text-gray-500 text-sm md:text-base max-w-2xl mx-auto">
            Showcase a curated collection of HB Furniture's premium office furniture solutions designed for executive offices, collaborative workspaces, meeting rooms, reception areas, and modern workplaces.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {signatureProducts.map((product, i) => (
            <Link
              key={i}
              href={product.href}
              className="group flex flex-col cursor-pointer h-full border border-gray-100 shadow-sm hover:shadow-md transition-shadow bg-white rounded-2xl overflow-hidden"
            >
              {/* Image Container */}
              <div
                className="relative w-full overflow-hidden bg-gray-50"
                style={{ aspectRatio: '4/5' }}
              >
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 16.667vw"
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
                />
              </div>

              {/* Text Container */}
              <div className="flex flex-col flex-1 px-4 py-4 items-center justify-center text-center">
                <h3 className="text-[12px] md:text-[13px] font-medium text-gray-800 transition-colors duration-300">
                  {product.name}
                </h3>
              </div>
            </Link>
          ))}
        </div>

        {/* View Complete Collection Button */}
        <div className="text-center mt-12">
          <Link
            href="/products/office-sets"
            className="inline-flex items-center gap-3 bg-[#EB5324] hover:bg-[#d4481f] text-white px-8 py-3 text-[11px] font-bold uppercase tracking-wider transition-all duration-300"
          >
            View Complete Collection
            <span className="w-5 h-5 border border-white/50 flex items-center justify-center">
              →
            </span>
          </Link>
        </div>
      </section>

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
        </div>
      </section>

      {/* Our Prestige Clients (Homepage Section 5) */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-[1200px] mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-[10px] font-bold text-[#EB5324] uppercase tracking-widest mb-2 block">Our Prestige Clients</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-serif">Trusted By Leading Organizations</h2>
            <p className="text-gray-500 text-sm md:text-base max-w-2xl mx-auto">
              Highlight that HB Furniture has successfully delivered workspace solutions for respected organizations across multiple industries.
            </p>
          </div>

          {/* Infinite Logo Carousel */}
          <div className="overflow-hidden">
            <div className="flex gap-12 animate-marquee">
              {/* Duplicate logos for seamless loop */}
              {[...prestigeClientLogos, ...prestigeClientLogos].map((logo, i) => (
                <div key={i} className="flex-shrink-0 flex items-center justify-center w-40 h-20 grayscale hover:grayscale-0 transition-all duration-300">
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
                onClick={() => toggleFaq(i)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors duration-200"
              >
                <span className="text-sm md:text-base font-bold text-gray-900">{faq.question}</span>
                <svg className={`w-6 h-6 text-gray-400 transition-transform duration-300 ${openIndex === i ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
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

      {/* CTA Section */}
      <section className="relative py-24">
        {/* Background Image with dark overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=2000&q=80"
            alt="Office Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        
        <div className="relative z-10 max-w-[1200px] mx-auto px-4 text-center">
          <span className="text-[10px] font-bold text-[#EB5324] uppercase tracking-widest mb-2 block">Let's Create Something Great Together</span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 font-serif">Ready To Transform Your Workspace?</h2>
          <p className="text-gray-200 text-sm md:text-base max-w-2xl mx-auto mb-12">
            From executive offices to complete workplace solutions, HB Furniture helps organizations create productive environments that inspire performance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-3 bg-[#EB5324] hover:bg-[#d4481f] text-white px-8 py-3 text-[11px] font-bold uppercase tracking-wider transition-all duration-300"
            >
              Request Consultation
              <span className="w-5 h-5 border border-white/50 flex items-center justify-center">
                →
              </span>
            </Link>
            <Link
              href="/projects"
              className="inline-flex items-center justify-center gap-3 border border-white text-white hover:bg-white/10 px-8 py-3 text-[11px] font-bold uppercase tracking-wider transition-all duration-300"
            >
              View Projects
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialsSection />


   


 </div >
 );
}
