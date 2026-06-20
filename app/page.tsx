"use client";

import Image from 'next/image';
import Link from 'next/link';
import TestimonialsSection from '../components/TestimonialsSection';
import { useState, useEffect, useRef, useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

// Signature Collection product data
const signatureProducts = [
 {
 name: "Prestige Executive Chair",
 image: "/230 (6).png",
 href: "/products/executive-chairs"
 },
 {
 name: "Ravi Executive Desk",
 image: "/240(1).png",
 href: "/products/executive-furniture"
 },
 {
 name: "HB-Sofa TQ-01",
 image: "/270 (1).png",
 href: "/sofas-lounge-seating"
 },
 {
 name: "Director-J",
 image: "/Screenshot 2026-06-13 215230.png",
 href: "/products/director-chair"
 },
 {
 name: "Odyssey Conference Table",
 image: "/g.png",
 href: "/conference-meeting-tables"
 },
 {
 name: "Stylish Coffee Table With Fabric Chairs",
 image: "/7fc2df0a-b586-4b8d-a495-b96d1f6a4664.png",
 href: "/products/coffee-tables"
 },
 {
 name: "Office Filing Almirah",
 image: "/8a71e3c2-b151-4768-aa5a-22cb4be0b797.jpg",
 href: "/products/almirahs"
 },
 {
 name: "Modern Wooden Rostrum",
 image: "/28ce7446-3163-4f23-95ab-ce914cc78217.png",
 href: "/products/rostrum"
 },
 {
 name: "Tilton Copper and Wood Table Lamp",
 image: "/10.jpg",
 href: "/products"
 },
 {
 name: "Presidential Executive Desk Series",
 image: "/Screenshot 2026-06-16 175937.png",
 href: "/products/executive-furniture"
 },
 {
 name: "R-Type Workstation",
 image: "/Screenshot 2026-06-16 184319.png",
 href: "/products/modern-workstation-systems"
 },
 {
 name: "Hudson-J",
 image: "/245 (2).png",
 href: "/products/executive-chairs"
 }
];

// Client logo data
const clientLogos = [
 { name: "HBL", filename: "hbl.png" },
 { name: "Askari Bank", filename: "askari-bank.png" },
 { name: "UBL", filename: "ubl.png" },
 { name: "Citibank", filename: "citibank.png" },
 { name: "MCB Bank", filename: "mcb-bank.png" },
 { name: "Mobilink", filename: "mobilink.png" },
 { name: "FFC", filename: "ffc.png" },
 { name: "Pepsi", filename: "pepsi.png" },
 { name: "Pak Turk Ict", filename: "pak-turk-ict.png" },
 { name: "Bata", filename: "bata.png" },
 { name: "Engro Corp", filename: "engro-corp.png" },
 { name: "Care", filename: "care.png" },
 { name: "WWF Pakistan", filename: "wwf-pakistan.png" },
 { name: "Shell", filename: "shell.png" },
 { name: "CDM", filename: "cdm.png" },
 { name: "Weatherford", filename: "weatherford.png" },
 { name: "Mercy Corps", filename: "mercy-corps.png" },
 { name: "Telenor", filename: "telenor.png" },
 { name: "Lucky Cement", filename: "lucky-cement.png" },
 { name: "Nestle", filename: "nestle.png" },
 { name: "Deloitte", filename: "deloitte.png" },
 { name: "Schlumberger", filename: "schlumberger.png" },
 { name: "Coffey", filename: "coffey.png" },
 { name: "Total", filename: "total.png" },
 { name: "Alstom", filename: "alstom.png" },
 { name: "World Health Organization", filename: "world-health-organization.png" },
 { name: "Gul Ahmed", filename: "gul-ahmed.png" },
 { name: "Scomi", filename: "scomi.png" },
 { name: "Huawei", filename: "huawei.png" },
 { name: "Attock Petroleum", filename: "attock-petroleum.png" },
 { name: "Hoechst", filename: "hoechst.png" },
 { name: "Subsea", filename: "subsea.png" },
 { name: "Zong", filename: "zong.png" },
 { name: "EasyPaisa", filename: "easypaisa.png" },
 { name: "Ufone", filename: "ufone.png" },
 { name: "MOL", filename: "mol.png" },
 { name: "PTCL", filename: "ptcl.png" },
 { name: "Wateen", filename: "wateen.png" },
 { name: "BASF", filename: "basf.png" },
 // New client logos
 { name: "Client 1", filename: "/Screenshot 2026-06-20 162711.png", isDirect: true },
 { name: "Client 2", filename: "/Screenshot 2026-06-20 162723.png", isDirect: true },
 { name: "Client 3", filename: "/Screenshot 2026-06-20 162727.png", isDirect: true },
 { name: "Client 4", filename: "/Screenshot 2026-06-20 162734.png", isDirect: true },
 { name: "Client 5", filename: "/Screenshot 2026-06-20 162755.png", isDirect: true },
 { name: "Client 6", filename: "/Screenshot 2026-06-20 162805.png", isDirect: true },
 { name: "Client 7", filename: "/Screenshot 2026-06-20 162815.png", isDirect: true },
 { name: "Client 8", filename: "/Screenshot 2026-06-20 162837.png", isDirect: true },
 { name: "Client 9", filename: "/Screenshot 2026-06-20 162845.png", isDirect: true },
 { name: "Client 10", filename: "/Screenshot 2026-06-20 162850.png", isDirect: true },
 { name: "Client 11", filename: "/Screenshot 2026-06-20 162907.png", isDirect: true },
 { name: "Client 12", filename: "/Screenshot 2026-06-20 162914.png", isDirect: true },
 { name: "Client 13", filename: "/Screenshot 2026-06-20 162920.png", isDirect: true },
 { name: "Client 14", filename: "/Screenshot 2026-06-20 162939.png", isDirect: true },
 { name: "Client 15", filename: "/Screenshot 2026-06-20 162959.png", isDirect: true },
 { name: "Client 16", filename: "/Screenshot 2026-06-20 163020.png", isDirect: true },
 { name: "Client 17", filename: "/Screenshot 2026-06-20 163031.png", isDirect: true },
 { name: "Client 18", filename: "/Screenshot 2026-06-20 163042.png", isDirect: true },
 { name: "Client 19", filename: "/Screenshot 2026-06-20 163103.png", isDirect: true },
 { name: "Client 20", filename: "/Screenshot 2026-06-20 163107.png", isDirect: true },
 { name: "Client 21", filename: "/Screenshot 2026-06-20 163117.png", isDirect: true },
 { name: "Client 22", filename: "/Screenshot 2026-06-20 163121.png", isDirect: true },
 { name: "Client 23", filename: "/Screenshot 2026-06-20 163125.png", isDirect: true },
 { name: "Client 24", filename: "/Screenshot 2026-06-20 163129.png", isDirect: true },
 { name: "Client 25", filename: "/Screenshot 2026-06-20 163134.png", isDirect: true },
 { name: "Client 26", filename: "/Screenshot 2026-06-20 163140.png", isDirect: true },
 { name: "Client 27", filename: "/Screenshot 2026-06-20 163148.png", isDirect: true },
 { name: "Client 28", filename: "/Screenshot 2026-06-20 163152.png", isDirect: true },
 { name: "Client 29", filename: "/Screenshot 2026-06-20 163157.png", isDirect: true },
 { name: "Client 30", filename: "/Screenshot 2026-06-20 163202.png", isDirect: true },
 { name: "Client 31", filename: "/Screenshot 2026-06-20 163205.png", isDirect: true },
 { name: "Client 32", filename: "/Screenshot 2026-06-20 163236.png", isDirect: true },
 { name: "Client 33", filename: "/Screenshot 2026-06-20 163250.png", isDirect: true },
 { name: "Client 34", filename: "/Screenshot 2026-06-20 163259.png", isDirect: true },
 { name: "Client 35", filename: "/Screenshot 2026-06-20 163308.png", isDirect: true },
 { name: "Client 36", filename: "/Screenshot 2026-06-20 163315.png", isDirect: true },
 { name: "Client 37", filename: "/Screenshot 2026-06-20 163323.png", isDirect: true },
 { name: "Client 38", filename: "/Screenshot 2026-06-20 163331.png", isDirect: true },
 { name: "Client 39", filename: "/Screenshot 2026-06-20 163342.png", isDirect: true },
 { name: "Client 40", filename: "/Screenshot 2026-06-20 163351.png", isDirect: true }
];

export default function Home() {
 // Initialize Embla Carousel for Signature Collection
 const [emblaRef, emblaApi] = useEmblaCarousel(
 {
 loop: true,
 align: 'start',
 slidesToScroll: 1,
 containScroll: 'trimSnaps',
 breakpoints: {
 '(min-width: 768px)': { slidesToScroll: 2 },
 '(min-width: 1024px)': { slidesToScroll: 4 }
 }
 },
 [Autoplay({ delay: 3000, stopOnInteraction: false, stopOnMouseEnter: true })]
 );

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
 <div className="overflow-hidden" ref={emblaRef}>
 <div className="flex gap-4 md:gap-6 lg:gap-8">
 {signatureProducts.map((product, i) => (
 <div key={i} className="min-w-0 flex-[0_0_100%] md:flex-[0_0_calc(50%-12px)] lg:flex-[0_0_calc(25%-24px)]">
 <Link 
 href={product.href} 
 className="group flex flex-col h-full bg-white rounded-2xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.06)] hover:shadow-[0_12px_30px_-6px_rgba(0,0,0,0.12)] transition-all duration-300 overflow-hidden border border-gray-50"
 >
 {/* Image Container */}
 <div 
 className="relative w-full overflow-hidden bg-gray-50"
 style={{ aspectRatio: '4/5' }}
 >
 <Image
 src={encodeURI(product.image)}
 alt={product.name}
 fill
 sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
 className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
 />
 </div>
 
 {/* Text Container */}
 <div className="flex flex-col flex-1 px-6 py-7 items-center justify-center text-center">
 <h3 className="text-[15px] font-medium text-gray-800 transition-colors duration-300">
 {product.name}
 </h3>
 </div>
 </Link>
 </div>
 ))}
 </div>
 </div>
 </div>

 {/* View All Button */}
 <div className="text-center mt-12">
 <Link
 href="/products"
 className="inline-flex items-center gap-2 border border-gray-300 bg-white text-gray-900 px-8 py-3 text-[11px] font-bold uppercase tracking-wider hover:bg-gray-50 hover:border-gray-400 transition-all duration-300"
 >
 View All
 <span>→</span>
 </Link>
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

 <div className="overflow-hidden" ref={clientsEmblaRef}>
 <div className="flex">
 {clientLogos.map((client, i) => (
 <div key={i} className="flex-[0_0_50%] md:flex-[0_0_33.33%] lg:flex-[0_0_16.66%] px-3 md:px-4">
 <div className="flex-shrink-0 w-full bg-white rounded-xl shadow-sm p-6 flex items-center justify-center h-[140px] group transition-all duration-300">
 <img 
 src={client.isDirect ? client.filename : `/clients/${client.filename}`} 
 alt={client.name} 
 className="max-h-[70px] object-contain opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300" 
 onError={(e) => {
 // Fallback if logo not found
 const target = e.target as HTMLImageElement;
 target.style.display = 'none';
 const placeholder = document.createElement('div');
 placeholder.className = 'flex items-center justify-center w-full h-full text-gray-400 text-sm font-bold';
 placeholder.textContent = client.name;
 target.parentNode?.appendChild(placeholder);
 }}
 />
 </div>
 </div>
 ))}
 {/* Duplicate for infinite loop effect */}
 {clientLogos.map((client, i) => (
 <div key={`duplicate-${i}`} className="flex-[0_0_50%] md:flex-[0_0_33.33%] lg:flex-[0_0_16.66%] px-3 md:px-4">
 <div className="flex-shrink-0 w-full bg-white rounded-xl shadow-sm p-6 flex items-center justify-center h-[140px] group transition-all duration-300">
 <img 
 src={client.isDirect ? client.filename : `/clients/${client.filename}`} 
 alt={client.name} 
 className="max-h-[70px] object-contain opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300" 
 onError={(e) => {
 // Fallback if logo not found
 const target = e.target as HTMLImageElement;
 target.style.display = 'none';
 const placeholder = document.createElement('div');
 placeholder.className = 'flex items-center justify-center w-full h-full text-gray-400 text-sm font-bold';
 placeholder.textContent = client.name;
 target.parentNode?.appendChild(placeholder);
 }}
 />
 </div>
 </div>
 ))}
 </div>
 </div>
 </div>
 </section>

 </div>
 );
}
