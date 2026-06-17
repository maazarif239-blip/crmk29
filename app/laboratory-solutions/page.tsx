"use client";

import { useState } from 'react';
import Link from 'next/link';
import { 
  X,
  Maximize2,
  ChevronLeft,
  ChevronRight,
  ShieldAlert,
  ChevronDown
} from 'lucide-react';

export default function LaboratorySolutions() {
  // Lightbox state
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  // Accordion state
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const products = [
    {
      title: "Laboratory Workbenches",
      image: "/skylab-page-4.png",
      description: "Ergonomically designed modular workbenches with adjustable shelving and integrated electrical and gas channels.",
      materials: "Electro-galvanized steel with epoxy powder coating, solid Trespa Phenolic resin countertop",
      safety: "Flame retardant materials, rounded impact safety edges, load-tested support legs",
      configs: "Island configuration, Wall-mounted configuration, Mobile workbench with heavy castors",
    },
    {
      title: "Chemical Resistant Cabinets",
      image: "/skylab-page-3.png",
      description: "Under-bench and tall cabinet systems built specifically to resist chemical spills and corrosive fumes.",
      materials: "Double-walled welded steel plates, corrosion-resistant HPL interior liners",
      safety: "Concealed liquid-tight bottom sump spill containment, automatic fire-closing vents",
      configs: "Acid storage, Flammable solvent storage, Under-sink utility cabinets",
    },
    {
      title: "Fume Hoods",
      image: "/skylab-page-5.png",
      description: "High-performance ducted fume hoods engineered to extract volatile chemicals and preserve operator safety.",
      materials: "Acid-proof solid laminate inner chamber, safety tempered glass sliding sash",
      safety: "Low air-flow alarm sensor, counterbalanced sash fall-protection lock",
      configs: "Constant air volume (CAV) type, Variable air volume (VAV) system integration",
    },
    {
      title: "Storage Systems",
      image: "/155 (15).png",
      description: "Heavy-duty modular shelving and cabinets for organizing chemical storage boxes, lab supplies, and glass materials.",
      materials: "Stainless steel grade 304 or epoxy coated structural frames",
      safety: "Lip-edged shelves to prevent container slide-off, seismic wall tie-backs",
      configs: "Open shelf bays, Glass door storage cabinets, Pull-out storage trays",
    },
    {
      title: "Instrument Tables",
      image: "https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&q=80&w=800",
      description: "Ultra-stable, vibration-dampening tables designed to support delicate analytical scales, microscopes, and spectrophotometers.",
      materials: "Granite balance block inlay, heavy-gauge steel frame with levelling pads",
      safety: "Vibration isolation dampening pads, overload support rating",
      configs: "Standalone balance table, Multi-instrument laboratory desk system",
    },
    {
      title: "Laboratory Seating",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800",
      description: "Ergonomically certified height-adjustable stools and chairs designed for sterile laboratory environments.",
      materials: "Antibacterial polyurethane (PU) seat shell, chrome star base, nylon castors",
      safety: "Non-slip textured seat surface, heavy-duty gas cylinder weight rating",
      configs: "Footring high stool, Low desk task chair, Cleanroom ISO class 5 rated chairs",
    },
    {
      title: "Sink Units",
      image: "https://images.unsplash.com/photo-1584036561566-baf241f8c44d?auto=format&fit=crop&q=80&w=800",
      description: "Corrosion-proof sink stations equipped with high-neck water fixtures and chemical drainage sumps.",
      materials: "Epoxy resin cast sink bowl, anti-corrosive polypropylene waste fittings",
      safety: "Splash guards, non-drip deck rim molding, emergency water shutoff valve",
      configs: "Single end bowl sink, Double sink island station, Corner utility sink",
    },
    {
      title: "Safety Stations",
      image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&q=80&w=800",
      description: "Emergency eye washes and deluge shower systems for instant chemical decontamination.",
      materials: "High-visibility yellow ABS plastic bowl, stainless steel piping, chrome spray heads",
      safety: "Meets ANSI Z358.1 standards, hands-free foot pedal activation",
      configs: "Wall-mounted eye wash, Combo deluge shower & eye wash station",
    }
  ];

  const features = [
    {
      title: "Chemical Resistance",
      desc: "All casework, benchtops, and piping systems utilize certified chemical-resistant phenolic, epoxy, or polypropylene composites."
    },
    {
      title: "Safety Compliance",
      desc: "Fully tested and compliant with international lab safety codes, including OSHA, SEFA, and EN-14175 standards."
    },
    {
      title: "Modular Design",
      desc: "Quick-connect utilities and bolt-together frames allow rapid lab layout changes and future equipment additions."
    },
    {
      title: "Easy Cleaning",
      desc: "Non-porous, monolithic surfaces and flush joints eliminate bacteria breeding spots and make sterilization simple."
    },
    {
      title: "Durability",
      desc: "Rust-treated electro-galvanized steel components and impact-resistant edging ensure decades of heavy-duty daily use."
    },
    {
      title: "Custom Solutions",
      desc: "Our engineers design custom gas manifolds, reagent rack heights, and cabinet sizes to suit your specific research field."
    }
  ];

  const safetyItems = [
    {
      title: "Safety Standards Compliance",
      desc: "Our products conform to SEFA (Scientific Equipment & Furniture Association) guidelines, verifying rigorous weight capacity, chemical resistance, and fume hood face velocity standards."
    },
    {
      title: "Best Placement Practices",
      desc: "We assist in positioning safety stations, eye washes, and chemical hoods away from door exits to keep emergency paths open and prevent air cross-draft interference."
    },
    {
      title: "Strict Material Inspection",
      desc: "We stress-test our phenolic board and epoxy materials against 49 aggressive laboratory chemicals, acids, bases, and solvents for 24-hour periods before approval."
    },
    {
      title: "Commissioning & Air-Flow Checks",
      desc: "Every chemical fume hood undergoes strict face-velocity and tracer gas testing upon installation to confirm safe containment performance."
    }
  ];

  const faqs = [
    {
      q: "What worktop material is best suited for chemical research laboratories?",
      a: "Trespa TopLab (Phenolic Resin) and Solid Epoxy Resin are the preferred choices. Phenolic resin offers exceptional resistance to organic solvents and concentrated acids, while Epoxy resin provides excellent heat stability and flat monolithic surfaces without joints."
    },
    {
      q: "Are your laboratory fume hoods certified under international safety codes?",
      a: "Yes. All our laboratory fume hoods and chemical cabinets are engineered and certified in compliance with EN 14175 (European standard for fume cupboards) and ASHRAE 110 (US standard for testing performance of laboratory fume hoods)."
    },
    {
      q: "Can we reconfigure the modular benches if our laboratory workflow changes?",
      a: "Absolutely. Our bench systems utilize modular steel frames with suspended or mobile cabinets. This allows shelves, cabinets, and tables to be added, removed, or rearranged without tearing down the wall panels or structural framework."
    },
    {
      q: "What is your standard warranty on laboratory casework?",
      a: "We offer a comprehensive 5-year warranty on all structural steel frames, Trespa countertops, and cabinet hardware, backed by our dedicated in-house technical support team."
    }
  ];

  const galleryImages = [
    "/skylab-page-1.png",
    "/skylab-page-3.png",
    "/skylab-page-4.png",
    "/skylab-page-5.png",
    "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1200",
    "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&q=80&w=1200"
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

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-[#FDFDFD] text-gray-900 font-sans selection:bg-[#E5E0D8]">
      
      {/* Hero Section */}
      <section className="relative h-[450px] flex items-center justify-center text-center bg-[#111111] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/skylab-page-1.png" 
            alt="Laboratory Solutions" 
            className="w-full h-full object-cover opacity-35 mix-blend-multiply"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-[1000px] px-4 mt-8">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight font-serif uppercase">
            Laboratory Solutions
          </h1>
          <p className="text-gray-300 text-sm md:text-base font-medium max-w-2xl mx-auto leading-relaxed">
            Innovative laboratory environments engineered for safety, efficiency, and precision.
          </p>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-24 max-w-[1000px] mx-auto px-4 text-center">
        <h2 className="text-[11px] font-bold text-gray-500 uppercase tracking-widest mb-4">Scientific Environments</h2>
        <h3 className="text-3xl md:text-4xl font-serif text-gray-900 mb-6 font-semibold">Advanced Solutions for Modern Laboratories</h3>
        <div className="w-12 h-0.5 bg-[#EB5324] mx-auto mb-8"></div>
        <p className="text-gray-600 text-sm md:text-base leading-relaxed font-serif max-w-3xl mx-auto">
          Scientific workspaces demand rigorous attention to details, sterile environments, chemical containment, and chemical-resistant surfaces. We engineer and install turnkey laboratory systems designed to stand up to heavy daily use while maintaining strict safety regulations.
        </p>
      </section>

      {/* Product Categories Grid */}
      <section className="py-20 bg-[#FAFAFA] border-y border-gray-100">
        <div className="max-w-[1200px] mx-auto px-4">
          <div className="mb-12">
            <h2 className="text-[11px] font-bold text-gray-500 uppercase tracking-widest mb-2">Casework & Hoods</h2>
            <h3 className="text-3xl font-serif text-gray-900">Laboratory Products</h3>
            <div className="w-10 h-1 bg-[#EB5324] mt-3"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {products.map((product, idx) => (
              <div key={idx} className="bg-white border border-gray-100 shadow-[0_4px_15px_rgba(0,0,0,0.03)] hover:shadow-md transition-shadow rounded-sm overflow-hidden flex flex-col group h-full">
                <div className="relative h-[220px] bg-[#F5F5F5] flex items-center justify-center p-4 overflow-hidden shrink-0">
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
                      <span className="font-bold text-gray-400 uppercase tracking-wider block">Material Specifications</span>
                      <span className="text-gray-700">{product.materials}</span>
                    </div>
                    <div>
                      <span className="font-bold text-gray-400 uppercase tracking-wider block">Safety Features</span>
                      <span className="text-gray-700 text-[#EB5324] font-medium">{product.safety}</span>
                    </div>
                    <div>
                      <span className="font-bold text-gray-400 uppercase tracking-wider block">Configurations</span>
                      <span className="text-gray-700">{product.configs}</span>
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

      {/* Lab Features Section */}
      <section className="py-24 max-w-[1200px] mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-[11px] font-bold text-gray-500 uppercase tracking-widest mb-2">Engineered Performance</h2>
          <h3 className="text-3xl font-serif text-gray-900">Key Features</h3>
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

      {/* Safety Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-[1200px] mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-[11px] font-bold text-[#EB5324] uppercase tracking-widest mb-2">Protocol & Inspection</h2>
            <h3 className="text-3xl font-serif">Safety Standards & Compliance</h3>
            <div className="w-12 h-0.5 bg-[#EB5324] mx-auto mt-4"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {safetyItems.map((item, idx) => {
              return (
                <div key={idx} className="flex gap-4 p-6 border border-white/10 rounded-sm bg-white/5 hover:border-[#EB5324]/50 transition-colors">
                  <div className="w-10 h-10 rounded bg-[#EB5324]/20 flex items-center justify-center text-[#EB5324] shrink-0">
                    <ShieldAlert className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-white mb-2">{item.title}</h4>
                    <p className="text-gray-400 text-[11px] leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Installation Gallery Section */}
      <section className="py-20 bg-[#FAFAFA] border-t border-gray-100">
        <div className="max-w-[1200px] mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-[11px] font-bold text-gray-500 uppercase tracking-widest mb-2">Completed Work</h2>
            <h3 className="text-3xl font-serif text-gray-900">Installation Gallery</h3>
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
                  alt={`Laboratory Gallery ${i + 1}`} 
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

      {/* FAQ Accordion Section */}
      <section className="py-24 max-w-[800px] mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-[11px] font-bold text-gray-500 uppercase tracking-widest mb-2">Common Inquiries</h2>
          <h3 className="text-3xl font-serif text-gray-900">Frequently Asked Questions</h3>
          <div className="w-12 h-0.5 bg-[#EB5324] mx-auto mt-4"></div>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isFaqActive = activeFaq === idx;
            return (
              <div key={idx} className="border border-gray-200 rounded-sm overflow-hidden bg-white shadow-sm">
                <button 
                  onClick={() => toggleFaq(idx)} 
                  className="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-gray-50/50 transition-colors"
                >
                  <span className="text-xs md:text-sm font-bold text-gray-900">{faq.q}</span>
                  <ChevronDown className={`w-4 h-4 text-gray-500 transition-transform duration-300 ${isFaqActive ? 'rotate-180' : ''}`} />
                </button>
                <div className={`transition-all duration-300 ease-in-out ${isFaqActive ? 'max-h-[250px] border-t border-gray-100' : 'max-h-0 overflow-hidden'}`}>
                  <div className="p-6 text-gray-500 text-xs md:text-sm leading-relaxed bg-gray-50/20">
                    {faq.a}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#EBEBEB] py-24 text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h3 className="text-3xl font-bold text-gray-900 mb-4 font-serif">Create Safer Laboratory Spaces</h3>
          <p className="text-gray-500 text-xs md:text-sm mb-8 leading-relaxed">
            Ready to design a clean, safe, and certified laboratory? Get in touch with our engineering team for layouts and cost quotations.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Link 
              href="/contact?reason=consultation" 
              className="w-full sm:w-auto bg-[#EB5324] hover:bg-[#d4481f] text-white px-8 py-4 text-[11px] font-bold uppercase tracking-widest inline-flex items-center justify-center gap-3 transition-colors shadow-sm"
            >
              Request Consultation
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
