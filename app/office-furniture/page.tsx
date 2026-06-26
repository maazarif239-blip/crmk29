"use client";

import { useState } from 'react';
import Link from 'next/link';
import ContactForPricingLink from '@/components/ContactForPricingLink';
import { 
  Award, 
  Crown, 
  HeartHandshake, 
  ShieldCheck, 
  PenTool, 
  Clock, 
  X,
  Maximize2,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

export default function OfficeFurniture() {
  // Lightbox state
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  const products = [
    {
      title: "Office Desks",
      image: "/240-1-.png",
      description: "Professional writing and task desks featuring expansive worksurfaces, integrated storage, and premium design detailing.",
      materials: "Hand-selected Walnut veneer, solid brass hardware details, premium cowhide leather inlay",
      finishes: "Satin Walnut, Dark Charcoal Oak, Polished Rosewood",
      dimensions: "L: 2200mm x W: 1000mm x H: 760mm",
    },
    {
      title: "Office Chairs",
      image: "/230-1-.png",
      description: "High-back and mid-back posture office chairs offering advanced multi-point tilt locking mechanisms and luxury padded armrests.",
      materials: "Full-grain Italian leather upholstery, polished aluminium star base, memory foam cushioning",
      finishes: "Classic Black leather, Tan Amber leather, Slate Grey leather",
      dimensions: "W: 680mm x D: 650mm x H: 1200mm - 1280mm (Adjustable)",
    },
    {
      title: "Office Workstations",
      image: "/240-3-.png",
      description: "L-shaped and modular workstations designed to integrate computers, accessories, and side table returns seamlessly.",
      materials: "E1-grade engineered timber core, scratch-resistant veneer coating, steel support frame",
      finishes: "Warm Cherrywood, Natural Ashwood, Matte Charcoal",
      dimensions: "Main Desk: L: 2000mm x W: 900mm | Return Desk: L: 1200mm x W: 500mm",
    },
    {
      title: "Side Cabinets",
      image: "/240-4-.png",
      description: "Low-height credenza sideboards built for printer storage, reference folders, and personal office storage items.",
      materials: "Matching wood veneer composite, push-to-open cabinet doors, soft-closing drawer tracks",
      finishes: "Polished Rosewood veneer, Dark Oak, Sand Beige lacquer",
      dimensions: "L: 1600mm x W: 450mm x H: 750mm",
    },
    {
      title: "Storage Solutions",
      image: "/240-5-.png",
      description: "Full-height office storage cupboards containing hanging space, open reference shelves, and glass display panels.",
      materials: "Tempered safety glass doors, solid timber frame construction, LED accent lighting strips",
      finishes: "Dark Mahogany veneer, Satin Walnut veneer, Brushed aluminium trim",
      dimensions: "L: 1800mm x W: 400mm x H: 2000mm",
    },
    {
      title: "Reception Office Furniture",
      image: "/240-2-.png",
      description: "Stately front-office reception desks designed to present a powerful, professional brand identity to incoming visitors.",
      materials: "Pure white solid-surface marble veneer front panel, premium timber framework",
      finishes: "Carrara Marble effect, Charcoal Slate, Oak slat wood detailing",
      dimensions: "L: 2800mm x W: 800mm x H: 1050mm",
    },
    {
      title: "Visitor Seating",
      image: "/230-2-.png",
      description: "Medium-back guest chairs built to bring refined styling and comfortable posture support to boardrooms and visitor areas.",
      materials: "Premium aniline leather, steel cantilever frame, high-density padding",
      finishes: "Tan Amber leather, Classic Black, Muted Olive Green leather",
      dimensions: "W: 600mm x D: 580mm x H: 920mm",
    },
    {
      title: "Lounge Furniture",
      image: "/155-15-.png",
      description: "Comfortable leather and fabric sofa seating ideal for private office corners and visitor lounges.",
      materials: "Solid pine structural frame, high-resilience foam layers, brushed steel legs",
      finishes: "Graphite Grey fabric, Cognac Leather, Navy Velvet",
      dimensions: "3-Seater: L: 2100mm x W: 850mm x H: 780mm",
    }
  ];

  const features = [
    {
      title: "Superior Craftsmanship",
      desc: "Every office item is hand-finished and inspected, ensuring flawless joints, alignment, and edge detailing."
    },
    {
      title: "Elegant Finishes",
      desc: "Rich grain wood veneers and premium matte lacquers provide an exceptionally sophisticated touch."
    },
    {
      title: "Ergonomic Design",
      desc: "Engineered to support physiological health, promoting healthy alignment and comfort during long business hours."
    },
    {
      title: "Premium Materials",
      desc: "Using top-grade Italian leathers, solid timbers, safety glass, and heavy-duty structural alloys."
    },
    {
      title: "Custom Manufacturing",
      desc: "Built to your exact workspace constraints, offering personalized desk returns, drawers, and cable layouts."
    },
    {
      title: "Timeless Aesthetics",
      desc: "Designed to look prestigious and commanding today, while retaining its timeless appeal for decades."
    }
  ];

  const whyChooseUs = [
    {
      icon: Award,
      title: "Personalized Designs",
      desc: "We adapt configurations, dimensions, and materials to perfectly match your interior design intent."
    },
    {
      icon: Crown,
      title: "Expert Manufacturing",
      desc: "60 years of industrial heritage ensures precision detailing and structural superiority in every piece."
    },
    {
      icon: ShieldCheck,
      title: "Quality Assurance",
      desc: "Comprehensive testing protocols verify structural stability, wear resistance, and alignment durability."
    },
    {
      icon: HeartHandshake,
      title: "Dedicated Support",
      desc: "From initial layout planning to installation and post-project care, we guide you every step of the way."
    }
  ];

  const galleryImages = [
    "https://images.unsplash.com/photo-1540574163026-643ea20ade25?auto=format&fit=crop&q=80&w=1200",
    "/240-1-.png",
    "/240-3-.png",
    "/240-5-.png",
    "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=80&w=1200",
    "/240-2-.png"
  ];

  const openLightbox = (index: number) => {
    setPhotoIndex(index);
    setIsOpen(true);
  };

  const nextPhoto = () => {
    setPhotoIndex((prev) => (prev + 1) % galleryImages.length);
  };

  const prevPhoto = () => {
    setPhotoIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  return (
    <div className="min-h-screen w-full min-w-0 overflow-x-clip bg-[#FDFDFD] text-gray-900 font-sans selection:bg-[#E5E0D8]">
      
      <section className="bg-white">
        <div className="w-full max-w-[1200px] mx-auto px-4 sm:px-6 py-16 sm:py-20 md:py-24 text-center">
          <div className="max-w-2xl mx-auto">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 tracking-tight font-serif uppercase">
              Office Furniture
            </h1>
            <p className="text-gray-500 text-sm md:text-base font-medium max-w-2xl mx-auto leading-relaxed">
              High-quality office furniture engineered for productivity, comfort, and modern workplaces.
            </p>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-24 max-w-[1000px] mx-auto px-4 text-center">
        <h2 className="text-[11px] font-bold text-gray-500 uppercase tracking-widest mb-4">Workplace Environments</h2>
        <h3 className="text-3xl md:text-4xl font-serif text-gray-900 mb-6 font-semibold">Furniture That Inspires Productivity</h3>
        <div className="w-12 h-0.5 bg-[#EB5324] mx-auto mb-8"></div>
        <p className="text-gray-600 text-sm md:text-base leading-relaxed font-serif max-w-3xl mx-auto">
          A modern office is more than just a place to work; it is an environment that fosters collaboration, focus, and innovation. Our office furniture collections combine ergonomic design with premium craftsmanship, creating spaces that are functional, durable, and inspiring for every member of the team.
        </p>
      </section>

      {/* Product Categories Grid */}
      <section className="py-20 bg-[#FAFAFA] border-y border-gray-100">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <div className="mb-12">
            <h2 className="text-[11px] font-bold text-gray-500 uppercase tracking-widest mb-2">Exclusive Series</h2>
            <h3 className="text-3xl font-serif text-gray-900">Office Furniture Collections</h3>
            <div className="w-10 h-1 bg-[#EB5324] mt-3"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {products.map((product, idx) => (
              <div key={idx} className="bg-white border border-gray-100 shadow-[0_4px_15px_rgba(0,0,0,0.03)] hover:shadow-md transition-shadow rounded-sm overflow-hidden flex flex-col group h-full">
                <div className="relative h-[220px] bg-gray-50 flex items-center justify-center p-4 overflow-hidden shrink-0">
                  <img 
                    src={product.image} 
                    alt={product.title} 
                    className="max-h-full max-w-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-500" 
                  />
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <h4 className="text-[16px] font-bold text-gray-900 mb-3 group-hover:text-[#EB5324] transition-colors">{product.title}</h4>
                  <p className="text-gray-500 text-[11px] leading-relaxed mb-4 flex-grow">{product.description}</p>
                  
                  <div className="space-y-2 mb-6 text-[10px] border-t border-gray-100 pt-4">
                    <div>
                      <span className="font-bold text-gray-400 uppercase tracking-wider block">Material Details</span>
                      <span className="text-gray-700">{product.materials}</span>
                    </div>
                    <div>
                      <span className="font-bold text-gray-400 uppercase tracking-wider block">Available Finishes</span>
                      <span className="text-gray-700">{product.finishes}</span>
                    </div>
                    <div>
                      <span className="font-bold text-gray-400 uppercase tracking-wider block">Dimensions</span>
                      <span className="text-gray-700">{product.dimensions}</span>
                    </div>
                  </div>

                  <ContactForPricingLink className="mt-auto" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Premium Features Section */}
      <section className="py-24 max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="text-[11px] font-bold text-gray-500 uppercase tracking-widest mb-2">The Artisan Standard</h2>
          <h3 className="text-3xl font-serif text-gray-900">Premium Design Features</h3>
          <div className="w-12 h-0.5 bg-[#EB5324] mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feat, idx) => {
            return (
              <div key={idx} className="p-8 border border-gray-100 rounded-sm bg-white hover:border-[#EB5324]/30 transition-all shadow-sm flex flex-col justify-between">
                <div>
                  <h4 className="font-bold text-sm text-gray-900 mb-4">{feat.title}</h4>
                  <p className="text-gray-500 text-[11px] leading-relaxed mb-6">{feat.desc}</p>
                </div>
                <div className="w-6 h-0.5 bg-[#EB5324]"></div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-[11px] font-bold text-[#EB5324] uppercase tracking-widest mb-2">Our Promise</h2>
            <h3 className="text-3xl font-serif">Why Partner With Us?</h3>
            <div className="w-12 h-0.5 bg-[#EB5324] mx-auto mt-4"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, idx) => {
              const IconComponent = item.icon;
              return (
                <div key={idx} className="bg-white/5 border border-white/10 p-6 rounded-sm flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded bg-[#EB5324]/20 text-[#EB5324] flex items-center justify-center mb-4">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <h4 className="font-bold text-sm text-white mb-2">{item.title}</h4>
                  <p className="text-gray-400 text-[11px] leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Lifestyle Gallery Section */}
      <section className="py-20 bg-[#FAFAFA] border-t border-gray-100">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-[11px] font-bold text-gray-500 uppercase tracking-widest mb-2">Environments</h2>
            <h3 className="text-3xl font-serif text-gray-900">Lifestyle Gallery</h3>
            <div className="w-12 h-0.5 bg-[#EB5324] mx-auto mt-4"></div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {galleryImages.map((img, i) => (
              <div 
                key={i} 
                onClick={() => openLightbox(i)} 
                className="aspect-[4/3] overflow-hidden rounded-sm relative group cursor-pointer border border-gray-100"
              >
                <img 
                  src={img} 
                  alt={`Office Lifestyle ${i + 1}`} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                  <span className="bg-[#EB5324] text-white p-2.5 rounded-full opacity-0 group-hover:opacity-100 scale-75 group-hover:scale-100 transition-all duration-300">
                    <Maximize2 className="w-4 h-4" />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#EBEBEB] py-16 sm:py-20 md:py-24 text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h3 className="text-3xl font-bold text-gray-900 mb-4 font-serif">Elevate Your Workplace Environment</h3>
          <p className="text-gray-500 text-xs md:text-sm mb-8 leading-relaxed">
            Let us help you design and build a workspace that inspires productivity. Contact our specialist consultants today.
          </p>
          <Link 
            href="/contact" 
            className="bg-[#EB5324] hover:bg-[#d4481f] text-white px-8 py-4 text-[11px] font-bold uppercase tracking-widest inline-flex items-center gap-3 transition-colors shadow-sm"
          >
            Get in Touch
            <span className="w-4 h-4 border border-white/50 flex items-center justify-center text-xs">→</span>
          </Link>
        </div>
      </section>

      {/* Lightbox Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center select-none">
          <button 
            onClick={() => setIsOpen(false)} 
            className="absolute top-6 right-6 text-white/70 hover:text-white p-2 z-10 transition-colors"
          >
            <X className="w-8 h-8" />
          </button>

          <button 
            onClick={prevPhoto} 
            className="absolute left-4 text-white/70 hover:text-white p-2 transition-colors"
          >
            <ChevronLeft className="w-10 h-10" />
          </button>

          <div className="max-w-[90%] max-h-[85%] flex items-center justify-center">
            <img 
              src={galleryImages[photoIndex]} 
              alt={`Gallery Expanded ${photoIndex + 1}`} 
              className="max-w-full max-h-full object-contain"
            />
          </div>

          <button 
            onClick={nextPhoto} 
            className="absolute right-4 text-white/70 hover:text-white p-2 transition-colors"
          >
            <ChevronRight className="w-10 h-10" />
          </button>

          <div className="absolute bottom-6 text-white/70 text-xs tracking-wider">
            {photoIndex + 1} / {galleryImages.length}
          </div>
        </div>
      )}

    </div>
  );
}
