"use client";

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { createClient } from '@/lib/supabase/client';

type NavItem = {
  id?: string;
  label: string;
  href: string | null;
  position?: number;
  parent_id?: string | null;
  is_visible?: boolean;
  children?: NavItem[];
};

// Fallback hardcoded navbar (used if database load fails)
const FALLBACK_NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'Office Sets', href: '/products/office-sets' },
  {
    label: 'Office Tables',
    href: null,
    children: [
      { label: 'Executive Office Tables', href: '/products/executive-office-tables' },
      { label: 'Manager Office Tables', href: '/products/manager-office-tables' },
      { label: 'Conference & Meeting Tables', href: '/products/conference-and-meeting-tables' },
      { label: 'Center & Side Tables', href: '/products/center-and-side-tables' },
    ],
  },
  {
    label: 'Seating',
    href: null,
    children: [
      { label: 'Study Chairs', href: '/study-chairs' },
      { label: 'Office Chairs', href: '/office-chairs' },
      { label: 'Visitors Chairs', href: '/visitor-chairs' },
      { label: 'Sofas and Lounge Setting', href: '/sofas-lounge-seating' },
      { label: 'Manager Chair Collection', href: '/products/manager-chair-collection' },
    ],
  },
  { label: 'Storage', href: '/storage' },
  { label: 'Technology', href: '/technology-suite' },
  {
    label: 'Workstation',
    href: null,
    children: [
      { label: 'Gravity Workstation Series', href: '/products/gravity-workstation-series' },
      { label: 'Urban Loft Workstation Series', href: '/products/urban-loft-workstation-series' },
      { label: 'Classic Cubicle Workstation Series', href: '/products/classic-cubicle-workstation-series' },
      { label: 'Compact Pod Workstation Series', href: '/products/compact-pod-workstation-series' },
      { label: 'Lotus 30 Office Workstation', href: '/products/lotus-30-office-workstations' },
      { label: 'Cross-Leg Walnut Workstation Series', href: '/products/cross-leg-walnut-workstation-series' },
      { label: 'Urban Edge Workstation Series', href: '/products/urban-edge-workstation-series' },
      { label: 'Loop Frame Workstation Series', href: '/products/loop-frame-workstation-series' },
      { label: 'Skyline Walnut Workstation Series', href: '/products/skyline-walnut-workstation-series' },
    ],
  },
  { label: 'Breakout & Lounge Pods', href: '/smart-spaces' },
  { label: 'Field of Expertise', href: '/field-of-expertise' },
  { label: 'HB Clientage', href: '/clientage' },
  { label: 'Management & Employees', href: '/management-employees' },
  { label: 'About', href: '/about' },
];

export default function GlobalNavbar() {
  const pathname = usePathname();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [openMobileAccordion, setOpenMobileAccordion] = useState<string | null>(null);
  const [navItems, setNavItems] = useState<NavItem[]>(FALLBACK_NAV_ITEMS);
  const [hasPromo, setHasPromo] = useState(false);

  useEffect(() => {
    const loadFromDatabase = async () => {
      try {
        const supabase = createClient();
        
        // Check if promo banner is active
        const { data: promoData } = await supabase
          .from('promotions')
          .select('id')
          .eq('is_active', true)
          .single();
        
        setHasPromo(!!promoData);
        
        // Load from nav_items table (now hierarchical with parent_id)
        const { data: navData, error: navError } = await supabase
          .from('nav_items')
          .select('*')
          .eq('is_visible', true)
          .order('position');
        
        if (!navError && navData && navData.length > 0) {
          // Build hierarchical structure
          const topLevel = navData
            .filter((item: any) => item.parent_id === null)
            .map((parent: any) => ({
              ...parent,
              children: navData
                .filter((child: any) => child.parent_id === parent.id)
                .sort((a: any, b: any) => a.position - b.position),
            }));
          
          if (topLevel.length > 0) {
            console.log('Loaded navbar from nav_items database (hierarchical)');
            setNavItems(topLevel);
            return;
          }
        }
        
        console.warn('No nav items found in database, using fallback');
      } catch (err) {
        console.warn('Error loading navbar from database, using fallback');
      }
    };
    
    loadFromDatabase();
  }, []);

  const isLinkActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href);

  const getLinkClasses = (href: string) => {
    const isActive = isLinkActive(href);
    return `h-full flex items-center whitespace-nowrap text-sm font-medium transition-colors border-b-2 ${
      isActive
        ? 'text-[#EB5324] border-[#EB5324]'
        : 'text-gray-600 hover:text-black border-transparent'
    }`;
  };

  const getDropdownButtonClasses = (isOpen: boolean) => {
    return `h-full flex items-center gap-1.5 whitespace-nowrap text-sm font-medium transition-colors border-b-2 ${
      isOpen
        ? 'text-[#EB5324] border-[#EB5324]'
        : 'text-gray-600 hover:text-black border-transparent'
    }`;
  };

  const getMobileLinkClasses = (href: string) => {
    const isActive = isLinkActive(href);
    return `block py-3 text-base font-medium ${
      isActive ? 'text-[#EB5324]' : 'text-gray-600 hover:text-black'
    }`;
  };

  return (
    <>
      <header className={`bg-white border-b border-gray-100 sticky z-40 ${hasPromo ? 'top-[52px]' : 'top-0'}`}>
        <div className="w-full mx-auto pl-6 pr-4 h-20 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center shrink-0 h-14">
            <Image
              src="/hb-logo.png.png"
              alt="HB Furniture Logo"
              width={80}
              height={80}
              className="object-contain h-full w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-4 h-full flex-1 justify-center">
            {navItems.map((item, index) => {
              const hasChildren = item.children && item.children.length > 0;
              const uniqueKey = item.id || `${item.label}-${index}`;
              
              if (hasChildren) {
                return (
                  <div
                    key={uniqueKey}
                    className="relative h-full flex items-center"
                    onMouseEnter={() => setOpenDropdown(uniqueKey)}
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                    <button className={getDropdownButtonClasses(openDropdown === uniqueKey)}>
                      {item.label}
                      <svg
                        className={`w-4 h-4 text-[#EB5324] transition-transform ${openDropdown === uniqueKey ? 'rotate-180' : ''}`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2.5}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {openDropdown === uniqueKey && (
                      <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 bg-white rounded-xl shadow-2xl border border-gray-100 min-w-[280px] py-3 z-50 overflow-hidden">
                        {item.children!.map((child, childIndex) => (
                          <Link
                            key={child.id || `${child.label}-${childIndex}`}
                            href={child.href!}
                            className="flex items-center gap-3 px-5 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-black hover:pl-6 transition-all duration-200"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-[#EB5324] opacity-0 group-hover:opacity-100"></span>
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }
              
              return (
                <Link key={uniqueKey} href={item.href!} className={getLinkClasses(item.href!)}>
                  {item.label}
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
              {navItems.map((item, index) => {
                const hasChildren = item.children && item.children.length > 0;
                const uniqueKey = item.id || `${item.label}-${index}`;
                
                if (hasChildren) {
                  const isOpen = openMobileAccordion === uniqueKey;
                  return (
                    <div key={uniqueKey} className="border-b border-gray-50">
                      <button
                        onClick={() => setOpenMobileAccordion(isOpen ? null : uniqueKey)}
                        className="w-full flex items-center justify-between py-3 text-base font-medium text-gray-600"
                      >
                        {item.label}
                        <svg className={`w-4 h-4 text-[#EB5324] transition-transform ${isOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      {isOpen && (
                        <div className="pb-2 pl-3 flex flex-col gap-1">
                          {item.children!.map((child, childIndex) => (
                            <Link
                              key={child.id || `${child.label}-${childIndex}`}
                              href={child.href!}
                              onClick={() => setIsDrawerOpen(false)}
                              className="py-2 text-sm text-gray-500 hover:text-black"
                            >
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                }
                
                return (
                  <Link
                    key={uniqueKey}
                    href={item.href!}
                    onClick={() => setIsDrawerOpen(false)}
                    className={getMobileLinkClasses(item.href!)}
                  >
                    {item.label}
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