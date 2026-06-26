import type { Metadata } from "next";
import Link from "next/link";
import CertificateGallery from "@/components/certificates/CertificateGallery";
import {
  brandPromises,
  coreValues,
  trustStats,
} from "@/components/certificates/certificate-data";

export const metadata: Metadata = {
  title: "Certificates | HB Furniture",
  description:
    "Official FBR registration and Chamber of Commerce membership certificates for HB Furniture — built on trust since 1964.",
};

export default function CertificatesPage() {
  return (
    <div className="min-h-screen bg-[#F7F5F2] text-neutral-900 font-sans selection:bg-[#E5E0D8]">
      {/* Hero */}
      <section className="bg-[#111111] px-4 py-16 sm:py-20 md:py-24 sm:py-28 lg:py-32">
        <div className="mx-auto max-w-[900px] text-center">
          <h1 className="font-serif text-4xl leading-tight text-white sm:text-5xl lg:text-[3.25rem] lg:leading-[1.15]">
            Built on Trust Since 1964.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-[15px] leading-relaxed text-neutral-400 sm:text-base">
            Official registration and membership with the trade authorities, ensuring the
            highest standards of business integrity.
          </p>
          <div className="mx-auto mt-8 h-px w-12 bg-[#EB5324]" />
        </div>
      </section>

      {/* Certificate Cards */}
      <section className="px-4 py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-[1180px]">
          <CertificateGallery />
        </div>
      </section>

      {/* Stats */}
      <section className="bg-[#111111] px-4 py-20 sm:py-24">
        <div className="mx-auto grid max-w-[1100px] grid-cols-2 gap-10 lg:grid-cols-4 lg:gap-8">
          {trustStats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-serif text-4xl text-[#EB5324] sm:text-5xl">{stat.value}</p>
              <p className="mt-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-neutral-400">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Values */}
      <section className="px-4 py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-[1100px]">
          <h2 className="text-center font-serif text-3xl text-neutral-900 sm:text-4xl">
            What We Hold Ourselves To
          </h2>
          <div className="mx-auto mt-6 h-px w-12 bg-[#EB5324]" />

          <div className="mt-14 grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-10 lg:gap-14">
            {coreValues.map((value) => (
              <div key={value.title}>
                <span className="mb-5 inline-block h-2 w-2 rounded-full bg-[#EB5324]" />
                <h3 className="font-serif text-xl text-neutral-900">{value.title}</h3>
                <p className="mt-4 text-[15px] leading-relaxed text-neutral-600">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote & Promises */}
      <section className="border-y border-neutral-200/70 bg-[#FAFAF8] px-4 py-20 sm:py-24">
        <div className="mx-auto grid max-w-[1100px] grid-cols-1 items-start gap-14 lg:grid-cols-2 lg:gap-20">
          <blockquote className="font-serif text-3xl italic leading-snug text-neutral-800 sm:text-4xl sm:leading-snug">
            &ldquo;Every piece leaves this workshop the way we&apos;d want it delivered to our
            own home.&rdquo;
          </blockquote>

          <ul className="divide-y divide-neutral-200 border-t border-neutral-200">
            {brandPromises.map((promise) => (
              <li
                key={promise}
                className="flex items-center gap-4 py-5 text-[13px] font-semibold uppercase tracking-[0.12em] text-neutral-700"
              >
                <span className="h-8 w-px shrink-0 bg-[#EB5324]" aria-hidden="true" />
                {promise}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#111111] px-4 py-16 sm:py-20 md:py-24 sm:py-28">
        <div className="mx-auto max-w-[760px] text-center">
          <p className="font-serif text-2xl leading-relaxed text-white sm:text-3xl">
            If you&apos;d like to see the workshop, you&apos;re welcome.
          </p>
          <Link
            href="/contact"
            className="mt-10 inline-flex items-center justify-center border border-white/80 px-8 py-3.5 text-[12px] font-semibold uppercase tracking-[0.16em] text-white transition-all duration-300 hover:border-[#EB5324] hover:bg-[#EB5324] hover:shadow-lg"
          >
            Schedule a Visit
          </Link>
        </div>
      </section>
    </div>
  );
}
