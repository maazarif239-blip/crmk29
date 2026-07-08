"use client";

import { useState, useCallback } from 'react';
import ContactForPricingLink from '@/components/ContactForPricingLink';
import ProductPageHeader from '@/components/ProductPageHeader';
import ProductLightbox from '@/components/ProductLightbox';

const products = [
  { name: 'Walnut L-Shape Reception Counter', desc: 'Wooden L-shape reception counter with raised top panel, spacious desk area, and modern elegant finish.', image: '/48c3f57d-f393-48fc-96d1-fbcde25cdb07.jpg' },
  { name: 'Geometric Walnut Reception Counter', desc: 'Wooden reception counter with unique geometric line design, sturdy build, and stylish corner L-shape layout.', image: '/325b49eb-d282-4810-a1e2-cc13f320242e.jpg' },
  { name: 'Striped Walnut Reception Desk', desc: 'Long wooden reception desk with striped front panel, sleek white base, and clean modern design.', image: '/9953db69-dc1c-4496-aa2d-f8d7e98a333d.jpg' },
  { name: 'White & Walnut Reception Counter', desc: 'White and wooden reception counter with raised display top, dual-tone finish, and compact modern style.', image: '/ac2f479c-caae-4392-9e41-254be366a5fb.jpg' },
  { name: 'Dark Wood Glass Reception Counter', desc: 'Dark wood reception counter with frosted glass panels, layered design, and sleek contemporary office look.', image: '/eb89f3e7-13bb-41c2-8692-a3836f1503ce.jpg' },
  { name: 'Curved Wood-Black Reception Counter', desc: 'Elegant curved reception desk with walnut wood panels, black metal accents, perforated dot pattern detailing, modern design for stylish front-office areas.', image: '/Screenshot 2026-06-24 000733.png' },
  { name: 'Slate & Walnut Reception Desk', desc: 'Sleek rectangular reception counter with dark slate front panel, contrasting walnut wood transaction top, minimalist modern design for compact reception areas.', image: '/Screenshot 2026-06-24 000752.png' },
  { name: 'Angular Wood-Charcoal Reception Counter', desc: 'Bold rectangular reception desk with charcoal grey body, diagonal walnut wood panel accent, floating wood top, contemporary design for modern offices.', image: '/Screenshot 2026-06-24 000953.png' },
];

function ReceptionCard({ name, desc, image }: { name: string; desc: string; image: string }) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="group border border-gray-100 shadow-sm hover:shadow-md transition-shadow bg-white flex flex-col">
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="aspect-[4/3] bg-[#F5F5F5] relative overflow-hidden flex items-center justify-center text-gray-300 cursor-zoom-in w-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#EB5324] focus-visible:ring-offset-2"
          aria-label={`View ${name} image`}
        >
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 mix-blend-multiply"
          />
          <span className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40 rounded-full p-1" aria-hidden="true">
            <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0zm-4-2v4M11 9h4" />
            </svg>
          </span>
        </button>
        <div className="p-6 flex-1 flex flex-col">
          <h3 className="text-[14px] font-bold text-gray-900 mb-2">{name}</h3>
          <p className="text-gray-500 text-[11px] leading-relaxed flex-1">{desc}</p>
          <div className="mt-6"><ContactForPricingLink /></div>
        </div>
      </div>
      {open && <ProductLightbox src={image} alt={name} onClose={() => setOpen(false)} />}
    </>
  );
}

export default function ReceptionCounters() {
  return (
    <div className="min-h-screen w-full min-w-0 overflow-x-clip bg-white text-gray-900 font-sans selection:bg-[#E5E0D8]">
      <ProductPageHeader title="Reception Counters" />
      <section className="max-w-[1200px] mx-auto px-4 sm:px-6 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((p, i) => (
            <ReceptionCard key={i} name={p.name} desc={p.desc} image={p.image} />
          ))}
        </div>
      </section>
    </div>
  );
}
