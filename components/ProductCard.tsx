"use client";

import { useState, useCallback } from "react";
import ContactForPricingLink from "@/components/ContactForPricingLink";
import ProductLightbox from "@/components/ProductLightbox";

interface ProductCardProps {
  name: string;
  /** Image src — absolute path from /public, e.g. "/foo.jpg" */
  image: string;
  description: string;
  /** Optional badge text (e.g. "BIFMA Certified") shown in the top-right of the image */
  badge?: string;
  /** Optional extra className on the outer wrapper */
  className?: string;
}

/**
 * Reusable product card used across every category page.
 * Clicking the product image opens a fullscreen lightbox with zoom.
 */
export default function ProductCard({
  name,
  image,
  description,
  badge,
  className = "",
}: ProductCardProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const openLightbox = useCallback(() => setLightboxOpen(true), []);
  const closeLightbox = useCallback(() => setLightboxOpen(false), []);

  return (
    <>
      <div className={`group flex flex-col h-full ${className}`}>
        {/* ── Image tile — click opens lightbox ── */}
        <button
          type="button"
          onClick={openLightbox}
          className="aspect-square bg-[#F5F5F5] p-4 sm:p-6 md:p-8 flex items-center justify-center relative overflow-hidden transition-colors group-hover:bg-[#f0f0f0] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#EB5324] focus-visible:ring-offset-2 cursor-zoom-in w-full"
          aria-label={`View ${name} image`}
        >
          {/* Optional badge */}
          {badge && (
            <span className="absolute top-3 right-3 z-10 text-[8px] font-bold uppercase tracking-widest text-[#EB5324] border border-[#EB5324] rounded px-2 py-1 bg-white/90">
              {badge}
            </span>
          )}

          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={image}
            alt={name}
            className="w-full h-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-500"
            onError={(e) => {
              const t = e.currentTarget as HTMLImageElement;
              t.onerror = null;
              t.src = "/hb-logo.png.png";
              t.className = "w-24 h-24 object-contain opacity-20";
            }}
          />

          {/* Subtle zoom-in indicator on hover */}
          <span
            className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40 rounded-full p-1"
            aria-hidden="true"
          >
            <svg
              className="w-3.5 h-3.5 text-white"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0zm-4-2v4M11 9h4"
              />
            </svg>
          </span>
        </button>

        {/* ── Text + CTA ── */}
        <div className="pt-5 text-left bg-white flex flex-col flex-1 px-2">
          <h3 className="text-[13px] font-bold text-gray-900 group-hover:text-[#E04E1B] transition-colors">
            {name}
          </h3>
          <p className="mt-3 text-gray-500 text-[11px] leading-relaxed flex-1">
            {description}
          </p>
          <div className="mt-6 mb-2">
            <ContactForPricingLink />
          </div>
        </div>
      </div>

      {/* ── Lightbox portal ── */}
      {lightboxOpen && (
        <ProductLightbox src={image} alt={name} onClose={closeLightbox} />
      )}
    </>
  );
}
