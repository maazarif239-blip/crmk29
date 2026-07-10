"use client";

import Image from "next/image";
import { useEffect } from "react";
import type { Certificate } from "./certificate-data";

type CertificateLightboxProps = {
  certificate: Certificate | null;
  onClose: () => void;
};

export default function CertificateLightbox({
  certificate,
  onClose,
}: CertificateLightboxProps) {
  useEffect(() => {
    if (!certificate) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [certificate, onClose]);

  if (!certificate) return null;

  return (
    <div
      className="fixed inset-0 z-[120] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 sm:p-8"
      role="dialog"
      aria-modal="true"
      aria-label={`${certificate.title} full view`}
      onClick={onClose}
    >
      <button
        type="button"
        onClick={onClose}
        className="absolute top-5 right-5 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-white/80 transition-colors duration-300 hover:border-white/40 hover:text-white"
        aria-label="Close certificate preview"
      >
        <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      <div
        className="relative flex max-h-[90vh] w-full max-w-5xl flex-col items-center"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="relative w-full overflow-hidden rounded-sm bg-white shadow-2xl">
          <Image
            src={certificate.image}
            alt={certificate.alt}
            width={1200}
            height={900}
            className="h-auto max-h-[78vh] w-full object-contain"
            priority
          />
        </div>
        <p className="mt-5 text-center text-sm font-medium tracking-wide text-white/80">
          {certificate.title}
        </p>
      </div>
    </div>
  );
}
