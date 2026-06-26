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
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-12">
            {/* Column 1 — BRAND */}
            <div className="border-b md:border-b-0 lg:border-r border-gray-700/30 pb-8 md:pb-0 lg:pb-0 lg:pr-10">
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
            <div className="border-b md:border-b-0 pb-8 md:pb-0 lg:border-r border-gray-700/30 lg:pr-10">
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
            <div className="border-b md:border-b-0 pb-8 md:pb-0 lg:border-r border-gray-700/30 lg:pr-10">
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
            <div className="border-b md:border-b-0 pb-8 md:pb-0 lg:border-r border-gray-700/30 lg:pr-10">
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

            {/* Column 5 — OUR LOCATION */}
            <div>
              <h4 className="text-white font-bold uppercase tracking-widest mb-7 text-sm">
                OUR LOCATION
              </h4>
              <div className="w-full h-48 mb-4 rounded-xl overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3320.641467604047!2d73.0357053!3d33.6575153!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38df95384559b40d%3A0x11098f728e61baed!2sHB%20Furniture%20Hassan%20Brother%20(Pvt)%20Limited!5e0!3m2!1sen!2s!4v1750747080000!5m2!1sen!2s"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="HB Furniture Location"
                ></iframe>
              </div>
              <a
                href="https://www.google.com/maps/place/HB+Furniture+Hassan+Brother+(Pvt)+Limited/@33.657515,73.0357053,17z/data=!3m1!4b1!4m6!3m5!1s0x38df95384559b40d:0x11098f728e61baed!8m2!3d33.6575106!4d73.0382802!16s%2Fg%2F11xh6rfbd2?entry=ttu&g_ep=EgoyMDI2MDYyNC4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-all duration-200 text-sm mb-3"
              >
                <span className="text-[#EB5324]">📍</span>
                Open in Google Maps
              </a>
              <p className="text-gray-500 text-sm leading-relaxed">
                Visit our showroom to explore premium workspace solutions and experience HB Furniture craftsmanship firsthand.
              </p>
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
