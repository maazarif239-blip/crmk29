"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { FaFacebook, FaInstagram, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";

export default function GlobalFooter() {
  const pathname = usePathname();

  if (pathname === "/sign-in" || pathname === "/sign-up") {
    return null;
  }

  return (
    <>
      <footer className="bg-[#121212] text-gray-400 pt-20 pb-10 border-t-4 border-[#EB5324]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-16">
            {/* Column 1 — BRAND */}
            <div className="border-b md:border-b-0 lg:border-r border-gray-700/30 pb-8 md:pb-0 lg:pb-0 lg:pr-16">
              <Link href="/" className="flex items-start gap-4 mb-6">
                <Image
                  src="/hb-logo.png.png"
                  alt="HB Furniture Logo"
                  width={64}
                  height={64}
                  className="rounded-xl bg-white p-2 object-contain"
                />
                <div>
                  <h3 className="text-white text-2xl font-bold mb-2" style={{ fontFamily: 'var(--font-marcellus)' }}>
                    HB Furniture
                  </h3>
                </div>
              </Link>
              <p className="text-gray-400 text-base leading-relaxed mb-8">
                Crafting inspired workspaces with innovative furniture solutions designed for comfort, style and productivity.
              </p>
              {/* Social Icons */}
              <div className="flex gap-4">
                <a
                  href="https://web.facebook.com/hbfurniture.official/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-[#EB5324] hover:text-white transition-all duration-300"
                >
                  <FaFacebook className="w-5 h-5" />
                </a>
                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-[#EB5324] hover:text-white transition-all duration-300"
                >
                  <FaInstagram className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-[#EB5324] hover:text-white transition-all duration-300"
                >
                  <FaLinkedin className="w-5 h-5" />
                </a>
                <a
                  href="mailto:hbfurniture64@gmail.com"
                  className="w-11 h-11 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-[#EB5324] hover:text-white transition-all duration-300"
                >
                  <FaEnvelope className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Column 2 — COMPANY */}
            <div className="border-b md:border-b-0 pb-8 md:pb-0 lg:border-r border-gray-700/30 lg:pr-16">
              <h4 className="text-white font-bold uppercase tracking-widest mb-7 text-sm">
                COMPANY
              </h4>
              <ul className="space-y-4">
                <li>
                  <Link href="/about" className="flex items-center gap-2 text-gray-400 hover:text-white transition-all duration-200 group">
                    <FaArrowRight className="w-3 h-3 text-[#EB5324] opacity-0 group-hover:opacity-100 transition-opacity" />
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/projects" className="flex items-center gap-2 text-gray-400 hover:text-white transition-all duration-200 group">
                    <FaArrowRight className="w-3 h-3 text-[#EB5324] opacity-0 group-hover:opacity-100 transition-opacity" />
                    Projects
                  </Link>
                </li>
                <li>
                  <Link href="/clientage" className="flex items-center gap-2 text-gray-400 hover:text-white transition-all duration-200 group">
                    <FaArrowRight className="w-3 h-3 text-[#EB5324] opacity-0 group-hover:opacity-100 transition-opacity" />
                    HB Clientage
                  </Link>
                </li>
                <li>
                  <Link href="/management-employees" className="flex items-center gap-2 text-gray-400 hover:text-white transition-all duration-200 group">
                    <FaArrowRight className="w-3 h-3 text-[#EB5324] opacity-0 group-hover:opacity-100 transition-opacity" />
                    Management & Employees
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 3 — QUICK LINKS */}
            <div className="border-b md:border-b-0 pb-8 md:pb-0 lg:border-r border-gray-700/30 lg:pr-16">
              <h4 className="text-white font-bold uppercase tracking-widest mb-7 text-sm">
                QUICK LINKS
              </h4>
              <ul className="space-y-4">
                <li>
                  <Link href="/products/office-sets" className="flex items-center gap-2 text-gray-400 hover:text-white transition-all duration-200 group">
                    <FaArrowRight className="w-3 h-3 text-[#EB5324] opacity-0 group-hover:opacity-100 transition-opacity" />
                    Office Sets
                  </Link>
                </li>
                <li>
                  <Link href="/products/executive-office-tables" className="flex items-center gap-2 text-gray-400 hover:text-white transition-all duration-200 group">
                    <FaArrowRight className="w-3 h-3 text-[#EB5324] opacity-0 group-hover:opacity-100 transition-opacity" />
                    Office Tables
                  </Link>
                </li>
                <li>
                  <Link href="/office-chairs" className="flex items-center gap-2 text-gray-400 hover:text-white transition-all duration-200 group">
                    <FaArrowRight className="w-3 h-3 text-[#EB5324] opacity-0 group-hover:opacity-100 transition-opacity" />
                    Seating
                  </Link>
                </li>
                <li>
                  <Link href="/products/almirahs" className="flex items-center gap-2 text-gray-400 hover:text-white transition-all duration-200 group">
                    <FaArrowRight className="w-3 h-3 text-[#EB5324] opacity-0 group-hover:opacity-100 transition-opacity" />
                    Storage
                  </Link>
                </li>
                <li>
                  <Link href="/technology-suite" className="flex items-center gap-2 text-gray-400 hover:text-white transition-all duration-200 group">
                    <FaArrowRight className="w-3 h-3 text-[#EB5324] opacity-0 group-hover:opacity-100 transition-opacity" />
                    Technology
                  </Link>
                </li>
                <li>
                  <Link href="/our-workstations" className="flex items-center gap-2 text-gray-400 hover:text-white transition-all duration-200 group">
                    <FaArrowRight className="w-3 h-3 text-[#EB5324] opacity-0 group-hover:opacity-100 transition-opacity" />
                    Workstation
                  </Link>
                </li>
                <li>
                  <Link href="/smart-spaces" className="flex items-center gap-2 text-gray-400 hover:text-white transition-all duration-200 group">
                    <FaArrowRight className="w-3 h-3 text-[#EB5324] opacity-0 group-hover:opacity-100 transition-opacity" />
                    Breakout & Lounge Pods
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 4 — CONTACT US */}
            <div>
              <h4 className="text-white font-bold uppercase tracking-widest mb-7 text-sm">
                CONTACT US
              </h4>
              <address className="not-italic space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-[#EB5324] shrink-0">
                    <FaMapMarkerAlt className="w-5 h-5" />
                  </div>
                  <p className="text-gray-400 text-base leading-relaxed">
                    Plot 56 Service Rd N, I-10/3,
                    <br />
                    Islamabad, 44000, Pakistan
                  </p>
                </div>
                {[
                  "+971 524331920",
                  "0321 5112403",
                  "0319 2004722"
                ].map((number, index) => (
                  <div key={`phone-${index}`} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-[#EB5324] shrink-0">
                      <FaPhone className="w-5 h-5" />
                    </div>
                    <a
                      href={`tel:${number.replace(/\s/g, '')}`}
                      className="text-gray-400 hover:text-white transition-all duration-200 text-base"
                    >
                      {number}
                    </a>
                  </div>
                ))}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-[#EB5324] shrink-0">
                    <FaEnvelope className="w-5 h-5" />
                  </div>
                  <a href="mailto:hbfurniture64@gmail.com" className="text-gray-400 hover:text-white transition-all duration-200 text-base">
                    hbfurniture64@gmail.com
                  </a>
                </div>
              </address>
            </div>
          </div>
        </div>
      </footer>
      {/* Bottom Bar */}
      <div className="bg-[#0D0D0D] border-t border-gray-800 py-6">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              © 2025 HB Furniture. All Rights Reserved.
            </p>
            <div className="text-center">
              <p className="text-white text-sm font-semibold">Trusted Furniture Brand</p>
              <p className="text-gray-500 text-xs tracking-wider mt-1">Quality | Durability | Design</p>
            </div>
            <p className="text-gray-500 text-sm text-right">
              Designed for Better Workspaces
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
