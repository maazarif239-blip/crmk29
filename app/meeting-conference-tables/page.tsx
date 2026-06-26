"use client";

import { useState } from 'react';
import Link from 'next/link';
import { 
  Cable, 
  Palette, 
  Layers, 
  Maximize, 
  Cpu, 
  Smile, 
  X,
  Maximize2,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import ProductPageHeader from '@/components/ProductPageHeader';

export default function MeetingConferenceTables() {
  // Lightbox state
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  const products = [
    {
      title: "Boardroom Tables",
      image: "/21.jpg",
      description: "Grand scale tables crafted to form an commanding focal point in executive boardrooms.",
      specs: "Heavy-duty steel subframe with integrated support beams, solid core desktop",
      capacity: "12 - 24 Persons",
      materials: "Premium Walnut veneer, brushed steel base plates",
      finishes: "Natural walnut, matte lacquer seal, dark oak stain",
      dimensions: "L: 4800mm x W: 1500mm x H: 750mm",
    },
    {
      title: "Modular Conference Tables",
      image: "/22.jpg",
      description: "Reconfigurable table segments that can be arranged in U-shape, block, or individual team formats.",
      specs: "Quick-connect metal alignment brackets, folding leg mechanism options",
      capacity: "Flexible (Modular)",
      materials: "High-pressure laminate (HPL) top, steel tubular leg frame",
      finishes: "Maple woodgrain, Urban Ash, White Oak, Charcoal Grey HPL",
      dimensions: "Segment: L: 1500mm x W: 750mm x H: 750mm",
    },
    {
      title: "Executive Meeting Tables",
      image: "/23.jpg",
      description: "Elegant, medium-sized meeting tables designed to accommodate leadership discussions and VIP client meetings.",
      specs: "Leather inlay writing surface, hand-buffed solid timber edges",
      capacity: "6 - 10 Persons",
      materials: "Cherrywood, rosewood accent line, polished chrome steel trim",
      finishes: "Polished Rosewood, Satin Mahogany, Natural Oak",
      dimensions: "L: 2400mm x W: 1200mm x H: 750mm",
    },
    {
      title: "Collaborative Tables",
      image: "/24.jpg",
      description: "Casual, counter-height or standing-height tables built for spontaneous project huddles and brainstorming.",
      specs: "Integrated footrest rails, central power trough with acoustic privacy panels",
      capacity: "4 - 8 Persons",
      materials: "Environmentally certified MDF core, powder-coated steel legs",
      finishes: "Textured Charcoal matte, Warm Birch veneer, Soft Chalk White",
      dimensions: "L: 2000mm x W: 1000mm x H: 1050mm (Standing Height)",
    },
    {
      title: "Video Conference Tables",
      image: "/25.jpg",
      description: "V-shaped or boat-shaped conference tables tailored to maintain clear sightlines for all participants to the camera.",
      specs: "Angled footprint design, underslung cable management channels",
      capacity: "8 - 14 Persons",
      materials: "Composite structure, anti-glare matte laminate surface",
      finishes: "Non-reflective Slate Grey, Light Ashwood, Arctic White",
      dimensions: "L: 3600mm x W: 1400mm (tapering to 1000mm) x H: 750mm",
    },
    {
      title: "Training Room Tables",
      image: "/26.jpg",
      description: "Mobile, nesting tables on castors, featuring flip-top mechanisms for compact vertical storage.",
      specs: "Single-handed release lever, locking castors, modesty panels",
      capacity: "2 Persons per unit",
      materials: "Impact-resistant PVC edge banding, steel flip frame",
      finishes: "Off-white melamine, Light Beechwood, Silver sand frame",
      dimensions: "L: 1500mm x W: 600mm x H: 750mm",
    }
  ];

  const features = [
    {
      icon: Cable,
      title: "Cable Management",
      desc: "Flip-up power boxes, wire snake paths, and concealed leg cavities for a clutter-free cable environment."
    },
    {
      icon: Palette,
      title: "Modern Designs",
      desc: "From sleek minimalist frames to boat-shaped layouts, curated to raise modern visual appeal."
    },
    {
      icon: Layers,
      title: "Premium Materials",
      desc: "We build with top-tier veneers, high-pressure laminates, tempered glass, and structural steel."
    },
    {
      icon: Maximize,
      title: "Custom Sizes",
      desc: "Custom lengths and widths to fit unique boardroom shapes and capacity configurations perfectly."
    },
    {
      icon: Cpu,
      title: "Technology Integration",
      desc: "Accommodates flush-mount touchscreens, microphone hubs, and standard AV connections."
    },
    {
      icon: Smile,
      title: "Ergonomic Comfort",
      desc: "Optimized heights, curved profiles, and plenty of leg room to keep long meetings comfortable."
    }
  ];

  const galleryImages = [
    "/21.jpg",
    "/22.jpg",
    "/23.jpg",
    "/24.jpg",
    "/25.jpg",
    "/26.jpg"
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
      
      <ProductPageHeader title="Meeting & Conference Tables" description="Professional collaboration spaces designed for productivity and elegance." />

      {/* Introduction Section */}
      <section className="py-24 max-w-[1000px] mx-auto px-4 text-center">
        <h2 className="text-[11px] font-bold text-gray-500 uppercase tracking-widest mb-4">Collaboration Space</h2>
        <h3 className="text-3xl md:text-4xl font-serif text-gray-900 mb-6 font-semibold">Where Ideas Come Together</h3>
        <div className="w-12 h-0.5 bg-[#EB5324] mx-auto mb-8"></div>
        <p className="text-gray-600 text-sm md:text-base leading-relaxed font-serif max-w-3xl mx-auto">
          Meetings are the engine of organizational momentum. Our conference table series is engineered to create environments that encourage focused dialogue, smooth communication, and professional decision-making. By pairing functional cable integration with premium design forms, we turn ordinary boardrooms into inspiring collaborative spaces.
        </p>
      </section>

      {/* Product Showcase Grid */}
      <section className="py-20 bg-[#FAFAFA] border-y border-gray-100">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <div className="mb-12">
            <h2 className="text-[11px] font-bold text-gray-500 uppercase tracking-widest mb-2">Our Range</h2>
            <h3 className="text-3xl font-serif text-gray-900">Conference Systems</h3>
            <div className="w-10 h-1 bg-[#EB5324] mt-3"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, idx) => (
              <div key={idx} className="bg-white border border-gray-100 shadow-[0_4px_15px_rgba(0,0,0,0.03)] hover:shadow-md transition-shadow rounded-sm overflow-hidden flex flex-col group h-full">
                <div className="relative h-[220px] bg-gray-50 flex items-center justify-center overflow-hidden shrink-0">
                  <img 
                    src={product.image} 
                    alt={product.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                  />
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <h4 className="text-[16px] font-bold text-gray-900 mb-3 group-hover:text-[#EB5324] transition-colors">{product.title}</h4>
                  <p className="text-gray-500 text-[11px] leading-relaxed mb-4 flex-grow">{product.description}</p>
                  
                  <div className="space-y-2 mb-6 text-[10px] border-t border-gray-100 pt-4">
                    <div>
                      <span className="font-bold text-gray-400 uppercase tracking-wider block">Specs</span>
                      <span className="text-gray-700">{product.specs}</span>
                    </div>
                    <div>
                      <span className="font-bold text-gray-400 uppercase tracking-wider block">Seating Capacity</span>
                      <span className="text-gray-700">{product.capacity}</span>
                    </div>
                    <div>
                      <span className="font-bold text-gray-400 uppercase tracking-wider block">Materials & Finishes</span>
                      <span className="text-gray-700">{product.materials} ({product.finishes})</span>
                    </div>
                    <div>
                      <span className="font-bold text-gray-400 uppercase tracking-wider block">Dimensions</span>
                      <span className="text-gray-700">{product.dimensions}</span>
                    </div>
                  </div>

                  <Link href="/contact" className="w-full text-center py-2.5 border border-gray-200 text-[10px] font-bold uppercase tracking-widest text-gray-900 hover:border-[#EB5324] hover:text-[#EB5324] transition-colors mt-auto">
                    View Details
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="text-[11px] font-bold text-gray-500 uppercase tracking-widest mb-2">Designed For Excellence</h2>
          <h3 className="text-3xl font-serif text-gray-900">Key Features</h3>
          <div className="w-12 h-0.5 bg-[#EB5324] mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feat, idx) => {
            const IconComponent = feat.icon;
            return (
              <div key={idx} className="flex gap-4 p-6 border border-gray-100 rounded-sm bg-white hover:border-[#EB5324]/30 transition-all shadow-sm">
                <div className="w-10 h-10 rounded bg-[#EB5324]/10 flex items-center justify-center text-[#EB5324] shrink-0">
                  <IconComponent className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-gray-900 mb-2">{feat.title}</h4>
                  <p className="text-gray-500 text-[11px] leading-relaxed">{feat.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-[11px] font-bold text-[#EB5324] uppercase tracking-widest mb-4">Value Proposition</h2>
            <h3 className="text-3xl font-serif mb-6 leading-tight">Elevating Collaborative Professionalism</h3>
            <p className="text-gray-300 text-sm leading-relaxed mb-6">
              Our meeting tables deliver more than aesthetic surface value. They optimize workplace engagement, foster interaction, and make a strong brand statement for visitors.
            </p>
            <ul className="space-y-4 text-xs text-gray-300">
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-[#EB5324] rounded-full mt-1.5 shrink-0"></span>
                <span><strong>Enhanced Productivity:</strong> Embedded connectivity allows real-time projection and rapid tech hookups, minimizing downtime.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-[#EB5324] rounded-full mt-1.5 shrink-0"></span>
                <span><strong>Flexible Configurations:</strong> Modular segments allow room settings to change from training halls to focused boardroom configs in minutes.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-[#EB5324] rounded-full mt-1.5 shrink-0"></span>
                <span><strong>Polished Client Impression:</strong> Seamless handcrafting and premium woodgrain profiles project prestige, building confidence during executive client pitches.</span>
              </li>
            </ul>
          </div>
          <div className="relative h-[350px] overflow-hidden rounded-sm border border-white/10 shadow-xl">
            <img 
              src="https://images.unsplash.com/photo-1542744094-3a31f103e35f?auto=format&fit=crop&q=80&w=1000" 
              alt="Conference room environment" 
              className="w-full h-full object-cover opacity-90"
            />
          </div>
        </div>
      </section>

      {/* Project Gallery Section */}
      <section className="py-20 bg-[#FAFAFA] border-t border-gray-100">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-[11px] font-bold text-gray-500 uppercase tracking-widest mb-2">Portfolio</h2>
            <h3 className="text-3xl font-serif text-gray-900">Project Gallery</h3>
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
                  alt={`Conference Gallery ${i + 1}`} 
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
          <h3 className="text-3xl font-bold text-gray-900 mb-4 font-serif">Design Your Perfect Meeting Space</h3>
          <p className="text-gray-500 text-xs md:text-sm mb-8 leading-relaxed">
            Ready to design a state-of-the-art conference room? Contact our expert design consultancy team to get started.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Link 
              href="/contact?reason=quote" 
              className="w-full sm:w-auto bg-[#EB5324] hover:bg-[#d4481f] text-white px-8 py-4 text-[11px] font-bold uppercase tracking-widest inline-flex items-center justify-center gap-3 transition-colors shadow-sm"
            >
              Request Quote
              <span className="w-4 h-4 border border-white/50 flex items-center justify-center text-xs">→</span>
            </Link>
            <Link 
              href="/contact" 
              className="w-full sm:w-auto bg-transparent border border-gray-400 hover:border-gray-900 text-gray-900 px-8 py-4 text-[11px] font-bold uppercase tracking-widest inline-flex items-center justify-center gap-3 transition-colors"
            >
              Contact Us
            </Link>
          </div>
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
