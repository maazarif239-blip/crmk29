"use client";

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

type SubLink = { name: string; href: string };
type NavLink = { name: string; href?: string; dropdown?: SubLink[] };

const navLinks: NavLink[] = [
  { name: 'Home', href: '/' },
  { name: 'Office Sets', href: '/products/office-sets' },
  {
    name: 'Office Tables',
    dropdown: [
      { name: 'Executive Office Tables', href: '/products/executive-office-tables' },
      { name: 'Manager Office Tables', href: '/products/manager-office-tables' },
      { name: 'Conference & Meeting Tables', href: '/products/conference-and-meeting-tables' },
      { name: 'Center & Side Tables', href: '/products/center-and-side-tables' },
    ],
  },
  {
    name: 'Seating',
    dropdown: [
      { name: 'Study Chairs', href: '/study-chairs' },
      { name: 'Office Chairs', href: '/office-chairs' },
      { name: 'Visitors Chairs', href: '/visitor-chairs' },
      { name: 'Sofas and Lounge Setting', href: '/sofas-lounge-seating' },
      { name: 'Manager Chair Collection', href: '/products/manager-chair-collection' },
    ],
  },
  { name: 'Storage', href: '/storage' },
  { name: 'Technology', href: '/technology-suite' },
  {
    name: 'Workstation',
    dropdown: [
      { name: 'Gravity Workstation Series', href: '/products/gravity-workstation-series' },
      { name: 'Urban Loft Workstation Series', href: '/products/urban-loft-workstation-series' },
      { name: 'Classic Cubicle Workstation Series', href: '/products/classic-cubicle-workstation-series' },
      { name: 'Compact Pod Workstation Series', href: '/products/compact-pod-workstation-series' },
      { name: 'Lotus 30 Office Workstation', href: '/products/lotus-30-office-workstations' },
      { name: 'Cross-Leg Walnut Workstation Series', href: '/products/cross-leg-walnut-workstation-series' },
      { name: 'Urban Edge Workstation Series', href: '/products/urban-edge-workstation-series' },
      { name: 'Loop Frame Workstation Series', href: '/products/loop-frame-workstation-series' },
      { name: 'Skyline Walnut Workstation Series', href: '/products/skyline-walnut-workstation-series' },
    ],
  },
  { name: 'Breakout & Lounge Pods', href: '/smart-spaces' },
  { name: 'Field of Expertise', href: '/field-of-expertise' },
  { name: 'HB Clientage', href: '/clientage' },
  { name: 'Management & Employees', href: '/management-employees' },
  { name: 'About', href: '/about' },
];

export default function GlobalNavbar() {
  const pathname = usePathname();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [openMobileAccordion, setOpenMobileAccordion] = useState<string | null>(null);

  const isLinkActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href);

  const getLinkClasses = (href: string) => {
    const isActive = isLinkActive(href);
    return `h-full flex items-center whitespace-nowrap text-sm font-medium transition-colors border-b-2 ${
      isActive
        ? 'text-[#EB5324] border-[#EB5324]'
        : 'text-gray-600 hover:text-gray-900 border-transparent'
    }`;
  };

  const getDropdownButtonClasses = (isOpen: boolean) => {
    return `h-full flex items-center gap-1.5 whitespace-nowrap text-sm font-medium transition-colors border-b-2 ${
      isOpen
        ? 'text-[#EB5324] border-[#EB5324]'
        : 'text-gray-600 hover:text-gray-900 border-transparent'
    }`;
  };

  const getMobileLinkClasses = (href: string) => {
    const isActive = isLinkActive(href);
    return `block py-3 text-base font-medium ${
      isActive ? 'text-[#EB5324]' : 'text-gray-600 hover:text-gray-900'
    }`;
  };

  return (
    <>
      <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
        <div className="w-full mx-auto pl-6 pr-4 h-24 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center shrink-0">
            <Image
              src="/hb-logo.png.png"
              alt="HB Furniture Logo"
              width={100}
              height={100}
              className="object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-4 h-full flex-1 justify-center">
            {navLinks.map((link) => {
              if (link.dropdown) {
                return (
                  <div
                    key={link.name}
                    className="relative h-full flex items-center"
                    onMouseEnter={() => setOpenDropdown(link.name)}
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                    <button className={getDropdownButtonClasses(openDropdown === link.name)}>
                      {link.name}
                      <svg
                        className={`w-4 h-4 text-[#EB5324] transition-transform ${openDropdown === link.name ? 'rotate-180' : ''}`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2.5}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {openDropdown === link.name && (
                      <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 bg-white rounded-xl shadow-2xl border border-gray-100 min-w-[280px] py-3 z-50 overflow-hidden">
                        {link.dropdown.map((sub) => (
                          <Link
                            key={sub.href}
                            href={sub.href}
                            className="flex items-center gap-3 px-5 py-3 text-sm text-gray-700 hover:bg-[#FDF3EF] hover:text-[#EB5324] hover:pl-6 transition-all duration-200"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-[#EB5324] opacity-0 group-hover:opacity-100"></span>
                            {sub.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }
              return (
                <Link key={link.href} href={link.href!} className={getLinkClasses(link.href!)}>
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center shrink-0">
            <Link href="/contact" className="bg-[#EB5324] text-white px-6 py-2.5 rounded text-sm font-medium hover:bg-[#d4481f] transition-colors flex items-center justify-center">
              Contact Us
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsDrawerOpen(true)}
              className="text-gray-600 hover:text-gray-900 p-2"
              aria-label="Open Menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {isDrawerOpen && (
        <div className="fixed inset-0 z-[100] flex justify-end">
          <div
            className="absolute inset-0 bg-black/50"
            onClick={() => setIsDrawerOpen(false)}
          />
          <div className="relative w-72 max-w-full bg-white h-full shadow-xl flex flex-col">
            <div className="flex items-center justify-between p-4 border-b border-gray-100">
              <span className="font-medium text-gray-900 text-base">Menu</span>
              <button
                onClick={() => setIsDrawerOpen(false)}
                className="text-gray-500 hover:text-gray-900 p-2"
                aria-label="Close Menu"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-1">
              {navLinks.map((link) => {
                if (link.dropdown) {
                  const isOpen = openMobileAccordion === link.name;
                  return (
                    <div key={link.name} className="border-b border-gray-50">
                      <button
                        onClick={() => setOpenMobileAccordion(isOpen ? null : link.name)}
                        className="w-full flex items-center justify-between py-3 text-base font-medium text-gray-600"
                      >
                        {link.name}
                        <svg className={`w-4 h-4 text-[#EB5324] transition-transform ${isOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      {isOpen && (
                        <div className="pb-2 pl-3 flex flex-col gap-1">
                          {link.dropdown.map((sub) => (
                            <Link
                              key={sub.href}
                              href={sub.href}
                              onClick={() => setIsDrawerOpen(false)}
                              className="py-2 text-sm text-gray-500 hover:text-[#EB5324]"
                            >
                              {sub.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                }
                return (
                  <Link
                    key={link.href}
                    href={link.href!}
                    onClick={() => setIsDrawerOpen(false)}
                    className={getMobileLinkClasses(link.href!)}
                  >
                    {link.name}
                  </Link>
                );
              })}
              <div className="mt-8">
                <Link
                  href="/contact"
                  onClick={() => setIsDrawerOpen(false)}
                  className="block text-center bg-[#EB5324] text-white px-5 py-3 rounded text-sm font-medium hover:bg-[#d4481f] transition-colors"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}