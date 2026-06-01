"use client";

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export default function GlobalNavbar() {
  const pathname = usePathname();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Projects', href: '/projects' },
    { name: 'Products', href: '/products' },
    { name: 'About Us', href: '/about' },
  ];

  const getLinkClasses = (href: string) => {
    // Determine if active based on exact match or startsWith for products/projects
    const isActive = href === '/' ? pathname === '/' : pathname.startsWith(href);
    return `h-full flex items-center text-[11px] font-bold uppercase tracking-wider transition-colors ${
      isActive
        ? 'text-[#EB5324] border-b-2 border-[#EB5324]'
        : 'text-gray-400 hover:text-gray-900 border-b-2 border-transparent'
    }`;
  };

  const getMobileLinkClasses = (href: string) => {
    const isActive = href === '/' ? pathname === '/' : pathname.startsWith(href);
    return `block py-4 text-sm font-bold uppercase tracking-wider ${
      isActive ? 'text-[#EB5324]' : 'text-gray-600 hover:text-gray-900'
    }`;
  };

  return (
    <>
      <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-[1200px] mx-auto px-4 h-20 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/hb-logo.png.png"
              alt="HB Furniture Logo"
              width={80}
              height={80}
              className="object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8 h-full">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className={getLinkClasses(link.href)}>
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-4">
            <Link href="/contact" className="bg-[#EB5324] text-white px-5 py-2 text-[11px] font-bold hover:bg-[#d4481f] transition-colors uppercase tracking-wider flex items-center justify-center">
              Contact Us
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden flex items-center">
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
          {/* Overlay */}
          <div
            className="absolute inset-0 bg-black/50"
            onClick={() => setIsDrawerOpen(false)}
          />
          {/* Drawer Panel */}
          <div className="relative w-64 max-w-full bg-white h-full shadow-xl flex flex-col">
            <div className="flex items-center justify-between p-4 border-b border-gray-100">
              <span className="font-bold uppercase tracking-wider text-gray-900 text-sm">Menu</span>
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
            <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsDrawerOpen(false)}
                  className={getMobileLinkClasses(link.href)}
                >
                  {link.name}
                </Link>
              ))}
              <div className="mt-8">
                <Link
                  href="/contact"
                  onClick={() => setIsDrawerOpen(false)}
                  className="block text-center bg-[#EB5324] text-white px-5 py-3 text-[11px] font-bold hover:bg-[#d4481f] transition-colors uppercase tracking-wider"
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