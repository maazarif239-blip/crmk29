"use client";

import Image from "next/image";
import { useState } from "react";
import { certificates, type Certificate } from "./certificate-data";
import CertificateLightbox from "./CertificateLightbox";

export default function CertificateGallery() {
  const [activeCertificate, setActiveCertificate] = useState<Certificate | null>(null);

  return (
    <>
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-12">
        {certificates.map((certificate) => (
          <article
            key={certificate.id}
            className="group flex flex-col overflow-hidden rounded-sm border border-neutral-200/80 bg-white shadow-[0_8px_30px_rgba(0,0,0,0.04)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)]"
          >
            <button
              type="button"
              onClick={() => setActiveCertificate(certificate)}
              className="relative block w-full cursor-zoom-in overflow-hidden bg-[#F3F1EE] text-left"
              aria-label={`View full ${certificate.title} certificate`}
            >
              <div className="relative aspect-[4/3] w-full p-6 sm:p-8">
                <Image
                  src={certificate.image}
                  alt={certificate.alt}
                  fill
                  className="object-contain transition-transform duration-500 group-hover:scale-[1.02]"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <span className="absolute inset-0 flex items-center justify-center bg-black/0 opacity-0 transition-all duration-300 group-hover:bg-black/20 group-hover:opacity-100">
                <span className="translate-y-2 rounded-sm border border-white/70 bg-white/95 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-neutral-900 transition-transform duration-300 group-hover:translate-y-0">
                  View Certificate
                </span>
              </span>
            </button>

            <div className="flex flex-1 flex-col px-8 py-8 sm:px-10 sm:py-10">
              <h3 className="font-serif text-2xl text-neutral-900">{certificate.title}</h3>
              <div className="mt-4 h-px w-10 bg-[#EB5324]" />
              <p className="mt-5 text-[15px] leading-relaxed text-neutral-600">
                {certificate.description}
              </p>
            </div>
          </article>
        ))}
      </div>

      <CertificateLightbox
        certificate={activeCertificate}
        onClose={() => setActiveCertificate(null)}
      />
    </>
  );
}
