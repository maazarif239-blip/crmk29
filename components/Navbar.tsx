"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect, useCallback } from "react";
import { useMedia } from "@/lib/hooks";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Office Sets", href: "/products/office-sets" },
  { name: "Office Tables", href: "/desks-and-casegoods" },
  { name: "Seating", href: "/office-chairs" },
  { name: "Storage", href: "/storage" },
  { name: "Technology", href: "/technology-suite" },
  { name: "Workstation", href: "/our-workstations" },
  { name: "Breakout & Lounge Pods", href: "/smart-spaces" },
  { name: "Field of Expertise", href: "/field-of-expertise" },
  { name: "HB Clientage", href: "/clientage" },
  { name: "Management & Employees", href: "/management-employees" },
  { name: "About", href: "/about" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { getMedia } = useMedia();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const isActive = useCallback(
    (href: string) => {
      if (href === "/") return pathname === "/";
      return pathname === href || pathname.startsWith(href + "/");
    },
    [pathname]
  );

  const toggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen((prev) => !prev);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white shadow-md py-2 sm:py-3"
            : "bg-white py-3 sm:py-4"
        }`}
      >
        <div className="max-w-[1800px] mx-auto px-4 sm:px-5 lg:px-6">
          <div className="flex items-center justify-between h-full relative">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-2 transition-opacity hover:opacity-80 shrink-0 min-w-0"
            >
              <Image
                src={getMedia('logo', '/hb-logo.png.png')}
                alt="HB Logo"
                width={isScrolled ? 40 : 52}
                height={isScrolled ? 40 : 52}
                className="object-contain transition-all duration-300 w-9 h-9 sm:w-10 sm:h-10 md:w-auto md:h-auto"
                priority
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center justify-center flex-1 gap-4 px-3">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`text-[13px] font-medium transition-colors duration-200 relative group whitespace-nowrap py-2.5 ${
                    isActive(item.href)
                      ? "text-[#E8500A]"
                      : "text-gray-700 hover:text-[#E8500A]"
                  }`}
                >
                  {item.name}
                  <span
                    className={`absolute bottom-0 left-0 right-0 h-0.5 bg-[#E8500A] transition-transform duration-300 ease-out origin-left ${
                      isActive(item.href) ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                    }`}
                  />
                </Link>
              ))}
            </nav>

            {/* Desktop Contact Us Button */}
            <div className="hidden lg:flex items-center gap-3 shrink-0">
              <Link
                href="/contact"
                className="bg-[#E8500A] text-white px-5 py-2.5 rounded-full text-[13px] font-semibold tracking-wide hover:bg-[#d64a09] transition-all duration-200 whitespace-nowrap shadow-sm hover:shadow-md hover:scale-[1.02]"
              >
                Contact Us
              </Link>
            </div>

            {/* Mobile Hamburger */}
            <div className="lg:hidden flex items-center gap-3">
              <button
                type="button"
                className="p-3 text-gray-700 hover:text-[#E8500A] transition-colors"
                onClick={toggleMobileMenu}
                aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
                aria-expanded={isMobileMenuOpen}
              >
                {isMobileMenuOpen ? (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[49] lg:hidden">
          <div
            className="absolute inset-0 bg-black/20"
            onClick={() => setIsMobileMenuOpen(false)}
            aria-hidden="true"
          />
          <div className="absolute inset-x-0 top-0 bottom-0 bg-white pt-[calc(4.5rem+env(safe-area-inset-top))] px-4 sm:px-6 flex flex-col overflow-y-auto overscroll-contain pb-[max(2rem,env(safe-area-inset-bottom))] animate-in slide-in-from-top duration-300">
            <nav className="flex flex-col gap-3 flex-1">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`px-5 py-4 rounded-xl text-base font-semibold tracking-wide transition-all duration-200 ${
                    isActive(item.href)
                      ? "bg-orange-50 text-[#E8500A]"
                      : "text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            <div className="mt-10 px-6">
              <Link
                href="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block w-full text-center bg-[#E8500A] text-white px-8 py-4 rounded-full text-base font-semibold tracking-wide hover:bg-[#d64a09] transition-all duration-200 shadow-md hover:shadow-lg"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Spacer for fixed navbar */}
      <div className={`transition-all duration-300 ${isScrolled ? "h-[68px] sm:h-[72px]" : "h-[76px] sm:h-[80px]"}`} />
    </>
  );
}
