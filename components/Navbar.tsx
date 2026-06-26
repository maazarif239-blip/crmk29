"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect, useCallback, useRef } from "react";

type NavItem = {
 name: string;
 href?: string;
 dropdown?: NavItem[];
 leftDropdown?: NavItem[];
 rightDropdown?: NavItem[];
};
const seatingDropdownItems: NavItem[] = [
  { name: "Study Chairs", href: "/study-chairs" },
  { name: "Office Chairs", href: "/office-chairs" },
  { name: "Visitors Chairs", href: "/visitor-chairs" },
  { name: "Sofas and Lounge Setting", href: "/sofas-lounge-seating" },
  { name: "Guest Chairs", href: "/guest-chairs" },
  { name: "Manager Chair Collection", href: "/products/manager-chair-collection" },
];

const storageDropdownItems: NavItem[] = [
  { name: "Almirah", href: "/products/almirahs" },
  { name: "Storage Cabinets", href: "/products/storage-cabinets" },
];


const workstationDropdownItems: NavItem[] = [
  { name: "Gravity Workstation Series", href: "/products/gravity-workstation-series" },
  { name: "Urban Loft Workstation Series", href: "/products/urban-loft-workstation-series" },
  { name: "Classic Cubicle Workstation Series", href: "/products/classic-cubicle-workstation-series" },
  { name: "Compact Pod Workstation Series", href: "/products/compact-pod-workstation-series" },
  { name: "Lotus 30 Office Workstation", href: "/products/lotus-30-office-workstations" },
  { name: "Cross-Leg Walnut Workstation Series", href: "/products/cross-leg-walnut-workstation-series" },
  { name: "Urban Edge Workstation Series", href: "/products/urban-edge-workstation-series" },
  { name: "Loop Frame Workstation Series", href: "/products/loop-frame-workstation-series" },
  { name: "Heritage Executive Workstation Series", href: "/products/heritage-executive-workstation-series" },
  { name: "Skyline Walnut Workstation Series", href: "/products/skyline-walnut-workstation-series" },
  { name: "Brickline Industrial Workstation Series", href: "/products/brickline-industrial-workstation-series" },
];

const officeTablesDropdownItems: NavItem[] = [
  { name: "Executive Office Tables", href: "/products/executive-office-tables" },
  { name: "Manager Office Tables", href: "/products/manager-office-tables" },
  { name: "Reception Counters", href: "/reception-counters" },
  { name: "Conference & Meeting Tables", href: "/products/conference-and-meeting-tables" },
  { name: "Center & Side Tables", href: "/products/center-and-side-tables" },
];
const navItems: NavItem[] = [
  { name: "Home", href: "/" },
  { name: "Projects", href: "/projects" },
  { name: "Office Sets", href: "/products/office-sets" },
  { name: "Office Tables", dropdown: officeTablesDropdownItems },
  { name: "Seating", dropdown: seatingDropdownItems },
  { name: "Storage", dropdown: storageDropdownItems },
  { name: "Technology", href: "/technology-suite" },
  { name: "Workstation", dropdown: workstationDropdownItems },
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
 const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
 
 const dropdownRef = useRef<HTMLDivElement>(null);
 const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);

 // Handle scroll effect
 useEffect(() => {
 const handleScroll = () => {
 setIsScrolled(window.scrollY > 20);
 };
 
 window.addEventListener("scroll", handleScroll);
 return () => window.removeEventListener("scroll", handleScroll);
 }, []);

 // Close mobile menu on route change
 useEffect(() => {
 setIsMobileMenuOpen(false);
 setActiveDropdown(null);
 }, [pathname]);

 // Lock body scroll when mobile menu is open
 useEffect(() => {
 document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
 return () => {
 document.body.style.overflow = "";
 };
 }, [isMobileMenuOpen]);
 
 // Close dropdown on click outside
 useEffect(() => {
 const handleClickOutside = (event: MouseEvent) => {
 if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
 setActiveDropdown(null);
 }
 };
 document.addEventListener("mousedown", handleClickOutside);
 return () => document.removeEventListener("mousedown", handleClickOutside);
 }, []);

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
 
 const handleMouseEnter = useCallback((name: string) => {
 if (dropdownTimeoutRef.current) {
 clearTimeout(dropdownTimeoutRef.current);
 }
 setActiveDropdown(name);
 }, []);

 const handleMouseLeave = useCallback(() => {
 dropdownTimeoutRef.current = setTimeout(() => {
 setActiveDropdown(null);
 }, 150);
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
 {/* Logo - Left */}
 <Link
 href="/"
 className="flex items-center gap-2 transition-opacity hover:opacity-80 shrink-0 min-w-0"
 >
 <Image
 src="/hb-logo.png.png"
 alt="HB Logo"
 
 width={isScrolled ? 40 : 52}
 height={isScrolled ? 40 : 52}
 className="object-contain transition-all duration-300 w-9 h-9 sm:w-10 sm:h-10 md:w-auto md:h-auto"
 priority
 />
 <span className="text-lg font-normal tracking-[0.046875em] leading-none whitespace-nowrap text-[#222222]" style={{ fontFamily: 'var(--font-marcellus)', textRendering: 'optimizeLegibility', WebkitFontSmoothing: 'antialiased' }}>
 
 </span>
 </Link>

 {/* Desktop Navigation - Center */}
 <nav className="hidden lg:flex items-center justify-center flex-1 gap-4 px-3" ref={dropdownRef}>
 {navItems.map((item) => {
 if (item.dropdown) {
 return (
 <div 
 key={item.name}
 className="relative group"
 onMouseEnter={() => handleMouseEnter(item.name)}
 onMouseLeave={handleMouseLeave}
 >
 {item.href ? (
 <Link
 href={item.href}
 className={`text-[13px] font-medium transition-colors duration-200 relative flex items-center gap-1.5 py-2.5 ${
 isActive(item.href) || activeDropdown === item.name
 ? "text-[#E8500A]"
 : "text-gray-700 hover:text-[#E8500A]"
 } whitespace-nowrap`}
 >
 {item.name}
 <svg
 className={`w-3.5 h-3.5 transition-transform duration-200 ${activeDropdown === item.name ? "rotate-180" : ""}`}
 fill="none"
 stroke="currentColor"
 strokeWidth={2}
 viewBox="0 0 24 24"
 >
 <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
 </svg>
 <span
 className={`absolute bottom-0 left-0 right-0 h-0.5 bg-[#E8500A] transition-transform duration-300 ease-out origin-left ${
 isActive(item.href) || activeDropdown === item.name ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
 }`}
 />
 </Link>
 ) : (
 <div
 className={`text-[13px] font-medium transition-colors duration-200 relative flex items-center gap-1.5 py-2.5 cursor-pointer ${
 activeDropdown === item.name
 ? "text-[#E8500A]"
 : "text-gray-700 hover:text-[#E8500A]"
 } whitespace-nowrap`}
 >
 {item.name}
 <svg
 className={`w-3.5 h-3.5 transition-transform duration-200 ${activeDropdown === item.name ? "rotate-180" : ""}`}
 fill="none"
 stroke="currentColor"
 strokeWidth={2}
 viewBox="0 0 24 24"
 >
 <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
 </svg>
 <span
 className={`absolute bottom-0 left-0 right-0 h-0.5 bg-[#E8500A] transition-transform duration-300 ease-out origin-left ${
 activeDropdown === item.name ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
 }`}
 />
 </div>
 )}

 {/* Dropdown Menu */}
 <div className={`absolute top-full left-0 mt-2 min-w-[320px] w-max max-w-[95vw] bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden z-50 transition-all duration-300 ${
 activeDropdown === item.name
 ? "opacity-100 visible translate-y-0"
 : "opacity-0 invisible translate-y-3 pointer-events-none"
 }`}>
 <div className="flex flex-col max-h-[75vh] overflow-y-auto">
 {item.dropdown?.map((subItem, index) => (
 <Link
 key={subItem.href!}
 href={subItem.href!}
 className={`group flex items-center justify-between px-6 py-4 text-[15px] leading-relaxed font-normal text-gray-700 transition-all duration-200 ${
 index !== item.dropdown!.length - 1 ? "border-b border-gray-100" : ""
 } hover:bg-gray-50 hover:text-gray-900`}
 onClick={() => setActiveDropdown(null)}
 >
 <span className="flex-1">{subItem.name}</span>
 {subItem.dropdown && (
 <svg
 className="w-4 h-4 text-gray-400 transition-colors duration-200 group-hover:text-gray-600"
 fill="none"
 stroke="currentColor"
 strokeWidth={2}
 viewBox="0 0 24 24"
 >
 <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
 </svg>
 )}
 </Link>
 ))}
 </div>
 </div>
 </div>
 );
 }

 return (
 <Link
 key={item.name}
 href={item.href!}
 className={`text-[13px] font-medium transition-colors duration-200 relative group whitespace-nowrap py-2.5 ${
 isActive(item.href!)
 ? "text-[#E8500A]"
 : "text-gray-700 hover:text-[#E8500A]"
 }`}
 >
 {item.name}
 <span
 className={`absolute bottom-0 left-0 right-0 h-0.5 bg-[#E8500A] transition-transform duration-300 ease-out origin-left ${
 isActive(item.href!) ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
 }`}
 />
 </Link>
 );
 })}
 </nav>

 {/* Desktop Controls (Contact Us) */}
 <div className="hidden lg:flex items-center gap-3 shrink-0">
 
 {/* Contact Us Button */}
 <Link
 href="/contact"
 className="bg-[#E8500A] text-white px-5 py-2.5 rounded-full text-[13px] font-semibold tracking-wide hover:bg-[#d64a09] transition-all duration-200 whitespace-nowrap shadow-sm hover:shadow-md hover:scale-[1.02]"
 >
 Contact Us
 </Link>
 </div>

 {/* Mobile Controls */}
 <div className="lg:hidden flex items-center gap-3">
 
 {/* Mobile Hamburger Button */}
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
 {navItems.map((item) => {
 if (item.dropdown) {
 return (
 <div key={item.name} className="flex flex-col">
 <div 
 className={`w-full text-left px-5 py-4 rounded-xl text-base font-semibold tracking-wide transition-colors duration-200 ${
 (item.href && isActive(item.href)) || activeDropdown === item.name
 ? "bg-orange-50 text-[#E8500A]"
 : "text-gray-700 hover:bg-gray-50"
 }`}
 >
 <div className="flex items-center justify-between">
 {item.href ? (
 <Link 
 href={item.href}
 onClick={() => setIsMobileMenuOpen(false)}
 className="flex-1"
 >
 {item.name}
 </Link>
 ) : (
 <span className="flex-1">
 {item.name}
 </span>
 )}
 <button
 onClick={(e) => {
 e.stopPropagation();
 setActiveDropdown((prev) => (prev === item.name ? null : item.name));
 }}
 className="p-2 -mr-2 rounded-lg hover:bg-orange-100 transition-colors"
 >
 <svg
 className={`w-6 h-6 transition-transform duration-300 ${activeDropdown === item.name ? "rotate-180" : ""}`}
 fill="none"
 stroke="currentColor"
 strokeWidth={2}
 viewBox="0 0 24 24"
 >
 <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
 </svg>
 </button>
 </div>
 </div>
             {/* Mobile Dropdown */}
             {activeDropdown === item.name && (
             <div className="pl-6 mt-3 flex flex-col gap-2">
             {item.dropdown.map((subItem) => (
             <Link
             key={subItem.href!}
             href={subItem.href!}
             onClick={() => {
             setIsMobileMenuOpen(false);
             setActiveDropdown(null);
             }}
             className={`block px-5 py-4 rounded-lg text-[15px] leading-relaxed transition-colors duration-200 ${
             isActive(subItem.href!)
             ? "bg-orange-50 text-[#E8500A]"
             : "text-gray-600 hover:bg-gray-50 hover:text-[#E8500A]"
             }`}
             >
             {subItem.name}
             </Link>
             ))}
             </div>
             )}
 </div>
 );
 }

 return (
 <Link
 key={item.name}
 href={item.href!}
 onClick={() => setIsMobileMenuOpen(false)}
 className={`px-5 py-4 rounded-xl text-base font-semibold tracking-wide transition-all duration-200 ${
 isActive(item.href!)
 ? "bg-orange-50 text-[#E8500A]"
 : "text-gray-700 hover:bg-gray-50"
 }`}
 >
 {item.name}
 </Link>
 );
 })}
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

 {/* Spacer to prevent content from going under fixed navbar */}
 <div className={`transition-all duration-300 ${isScrolled ? "h-[68px] sm:h-[72px]" : "h-[76px] sm:h-[80px]"}`} />
 </>
 );
}