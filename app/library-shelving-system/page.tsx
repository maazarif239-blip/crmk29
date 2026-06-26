"use client";

import { useState } from 'react';
import Link from 'next/link';
import { 
  Shield, 
  Maximize, 
  Grid, 
  Settings, 
  Sparkles, 
  CheckCircle,
  X,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

export default function LibraryShelvingSystem() {
  // Lightbox state
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  const products = [
    {
      title: "Single Face Shelving",
      image: "/155 (3).png",
      description: "Designed for perimeter walls and single-sided library runs. Maximizes vertical wall space while offering direct shelf access.",
      materials: "Cold-rolled structural steel uprights, premium wood veneer side panels",
      sizes: "Height: 1800mm - 2200mm | Width: 900mm | Depth: 300mm",
      finishes: "Textured Powder Coating (Beige, Charcoal, Off-White), Classic Oak, Warm Walnut",
    },
    {
      title: "Double Face Shelving",
      image: "/155 (4).png",
      description: "Free-standing double-sided shelving units ideal for central library aisles. Provides access from both sides for high-density storage.",
      materials: "Heavy-duty steel composite construction, dual reinforced center brackets",
      sizes: "Height: 1500mm - 2200mm | Width: 900mm | Depth: 600mm",
      finishes: "Industrial Powder Coat, Custom Color matching, Melamine end panels",
    },
    {
      title: "Mobile Compact Shelving",
      image: "https://images.unsplash.com/photo-1568667256549-094345857637?auto=format&fit=crop&q=80&w=800",
      description: "High-density track-mounted mobile shelving systems that eliminate static aisles. Ideal for archival storage and space-constrained areas.",
      materials: "Anti-rust zinc-coated steel rails, anti-tipping mechanical wheel drives",
      sizes: "Custom sizes tailored to floor space availability",
      finishes: "Epoxy Polyester coating in Signal Grey, Graphite Grey, or Pearl White",
    },
    {
      title: "Reference Book Shelving",
      image: "/155 (10).png",
      description: "Reinforced deep shelving designed to accommodate heavy, oversized reference volumes, atlases, and dictionary sets.",
      materials: "Double-reinforced steel shelves, impact-resistant laminate edging",
      sizes: "Height: 1200mm - 1800mm | Width: 1000mm | Depth: 450mm",
      finishes: "Dark Mahogany, Natural Beech, Off-White steel finish",
    },
    {
      title: "Children's Library Shelving",
      image: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&q=80&w=800",
      description: "Low-height, accessible shelving designed specifically for younger readers. Rounded corners and stable bases ensure safety.",
      materials: "Eco-friendly E0 grade MDF, impact-absorbing soft PVC edges",
      sizes: "Height: 1100mm - 1350mm | Width: 900mm | Depth: 320mm",
      finishes: "Pastel Blue, Soft Green, Warm Maple woodgrain",
    },
    {
      title: "Periodical Display Units",
      image: "/155 (7).png",
      description: "Angled display shelves for current journal issues with integrated flip-up storage behind each shelf for back issues.",
      materials: "Powder-coated sheet steel, soft-close high-durability hinges",
      sizes: "Height: 1800mm - 2000mm | Width: 900mm | Depth: 400mm",
      finishes: "Sand texture matte black, Silver Metallic, Light Grey",
    },
    {
      title: "Multimedia Storage Systems",
      image: "https://images.unsplash.com/photo-1548048026-5a1a941d93d3?auto=format&fit=crop&q=80&w=800",
      description: "Custom modular cabinets optimized for storing and categorizing DVDs, audiobooks, CDs, and other digital resources.",
      materials: "Reinforced steel frame, acrylic transparent dust doors",
      sizes: "Height: 1500mm - 1800mm | Width: 800mm | Depth: 350mm",
      finishes: "Anodized Aluminium trim, Dark Slate, Muted Brown",
    },
    {
      title: "Archive Storage Systems",
      image: "https://images.unsplash.com/photo-1595225476474-87563907a212?auto=format&fit=crop&q=80&w=800",
      description: "Heavy-capacity industrial shelving systems engineered for long-term document boxes and historical archive storage.",
      materials: "High-grade industrial structural steel, anti-corrosive primer",
      sizes: "Height: 2000mm - 3000mm | Width: 1000mm - 1200mm | Depth: 450mm - 600mm",
      finishes: "Galvanized zinc steel, Heavy-duty dark grey powder coat",
    }
  ];

  const features = [
    {
      icon: Shield,
      title: "High Durability",
      desc: "Constructed with premium structural steel and solid laminates built to withstand high traffic and heavy weight load requirements."
    },
    {
      icon: Maximize,
      title: "Space Optimization",
      desc: "Designed to maximize vertical volume and eliminate dead space, offering up to 60% higher storage efficiency."
    },
    {
      icon: Grid,
      title: "Modular Design",
      desc: "Easily expand, reconfigure, or relocate bays as library collections and space planning needs evolve."
    },
    {
      icon: CheckCircle,
      title: "Easy Maintenance",
      desc: "Resistant to dust buildup, scratches, and stains. Easily sanitized with standard cleaning procedures."
    },
    {
      icon: Settings,
      title: "Custom Configurations",
      desc: "Adjustable shelf heights, custom row layouts, and choice of dynamic mobile or stationary floor installations."
    },
    {
      icon: Sparkles,
      title: "Premium Finishes",
      desc: "Available in an array of woodgrain veneer side panels and scratch-resistant matte powder coatings."
    }
  ];

  const galleryImages = [
    "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&q=80&w=1200",
    "https://images.unsplash.com/photo-1568667256549-094345857637?auto=format&fit=crop&q=80&w=1200",
    "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&q=80&w=1200",
    "https://images.unsplash.com/photo-1595225476474-87563907a212?auto=format&fit=crop&q=80&w=1200",
    "/155 (4).png",
    "/155 (3).png"
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
              LIBRARY SHELVING SYSTEM
            </h1>
            <p className="text-gray-500 text-sm md:text-base font-medium max-w-2xl mx-auto leading-relaxed">
              Smart, durable, and space-efficient shelving solutions designed for modern libraries.
            </p>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-24 max-w-[1000px] mx-auto px-4 text-center">
        <h2 className="text-[11px] font-bold text-gray-500 uppercase tracking-widest mb-4">Space Design & Learning</h2>
        <h3 className="text-3xl md:text-4xl font-serif text-gray-900 mb-6 font-semibold">Organized Spaces That Inspire Learning</h3>
        <div className="w-12 h-0.5 bg-[#EB5324] mx-auto mb-8"></div>
        <p className="text-gray-600 text-sm md:text-base leading-relaxed font-serif max-w-3xl mx-auto">
          A well-designed library shelf goes beyond mere storage. It defines circulation paths, enhances item visibility, and constructs a calm, academic ambiance. Our library shelving systems integrate functional robustness with clean architectural profiles, ensuring durability while inviting scholars to explore collections in a highly structured, beautiful layout.
        </p>
      </section>

      {/* Product Categories Grid */}
      <section className="py-20 bg-[#FAFAFA] border-y border-gray-100">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <div className="mb-12">
            <h2 className="text-[11px] font-bold text-gray-500 uppercase tracking-widest mb-2">Our Offerings</h2>
            <h3 className="text-3xl font-serif text-gray-900">Shelving Categories</h3>
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
                      <span className="font-bold text-gray-400 uppercase tracking-wider block">Materials</span>
                      <span className="text-gray-700">{product.materials}</span>
                    </div>
                    <div>
                      <span className="font-bold text-gray-400 uppercase tracking-wider block">Dimensions</span>
                      <span className="text-gray-700">{product.sizes}</span>
                    </div>
                    <div>
                      <span className="font-bold text-gray-400 uppercase tracking-wider block">Finishes</span>
                      <span className="text-gray-700">{product.finishes}</span>
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
          <h3 className="text-3xl font-serif text-gray-900">Shelving Key Features</h3>
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

      {/* Gallery Section */}
      <section className="py-20 bg-[#FAFAFA] border-t border-gray-100">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-[11px] font-bold text-gray-500 uppercase tracking-widest mb-2">Visual Showcase</h2>
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
                  alt={`Library Gallery ${i + 1}`} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                  <span className="bg-[#EB5324] text-white p-2.5 rounded-full opacity-0 group-hover:opacity-100 scale-75 group-hover:scale-100 transition-all duration-300">
                    <Maximize className="w-4 h-4" />
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
          <h3 className="text-3xl font-bold text-gray-900 mb-4 font-serif">Build Better Learning Spaces</h3>
          <p className="text-gray-500 text-xs md:text-sm mb-8 leading-relaxed">
            Collaborate with our space-planning experts to construct highly efficient, modern, and beautiful learning spaces tailored to your needs.
          </p>
          <Link 
            href="/contact?reason=consultation" 
            className="bg-[#EB5324] hover:bg-[#d4481f] text-white px-8 py-4 text-[11px] font-bold uppercase tracking-widest inline-flex items-center gap-3 transition-colors shadow-sm"
          >
            Request Consultation
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
