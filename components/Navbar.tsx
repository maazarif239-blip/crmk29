"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect, useCallback, useRef } from "react";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "./ThemeProvider";

type NavItem = {
  name: string;
  href?: string;
  dropdown?: NavItem[];
  leftDropdown?: NavItem[];
  rightDropdown?: NavItem[];
};

const productDropdownItems: NavItem[] = [
  { name: "Study Chairs", href: "/study-chairs" },
  { name: "Office Chairs", href: "/office-chairs" },
  { name: "Visitors Chairs", href: "/visitor-chairs" },
  { name: "Conference and Meeting Tables", href: "/products/conference-and-meeting-tables" },
  { name: "Reception Counters", href: "/reception-counters" },
  { name: "Sofas and Lounge Setting", href: "/sofas-lounge-seating" },
  { name: "Technology", href: "/technology-suite" },
  { name: "Workspace Solutions", href: "/workspace-solutions" },
  { name: "Guest Chairs", href: "/guest-chairs" },
  { name: "Gravity Workstations", href: "/gravity-workstations" },
  { name: "Hardwood Executive Tables", href: "/hardwood-executive-tables" },
  { name: "Ant Chair", href: "/ant-chairs" },
  { name: "Library Shelves", href: "/library-shelves" },
  { name: "Modern Workstation System", href: "/products/modern-workstation-systems" },
  { name: "Lotus 30 Office Workstation", href: "/products/lotus-30-office-workstations" },
  { name: "Executive Chairs", href: "/products/executive-chairs" },
  { name: "Paris Chairs", href: "/products/paris-chairs" },
  { name: "Director Chair", href: "/products/director-chair" },
  { name: "Executive Furniture", href: "/products/executive-furniture" },
  { name: "Manager Chair Collection", href: "/products/manager-chair-collection" },
  { name: "Laboratory Solution", href: "/products/laboratory-solutions" },
  { name: "Coffee Sets", href: "/products/coffee-sets" },
  { name: "Coffee Tables", href: "/products/coffee-tables" },
  { name: "Coffee Chairs", href: "/products/coffee-chairs" },
  { name: "Stools", href: "/products/stools" },
  { name: "Office Sets", href: "/products/office-sets" },
  { name: "Almirahs", href: "/products/almirahs" },
  { name: "Rostrum", href: "/products/rostrum" },
];

const workstationDropdownItems: NavItem[] = [
  { name: "Modern Workstation", href: "/products/modern-workstation-systems" },
  { name: "Lotus 30 Workstation", href: "/products/lotus-30-office-workstations" },
  { name: "Workspace Solutions", href: "/workspace-solutions" },
];

const premiumExecutiveDropdownItems: NavItem[] = [
  { name: "Executive Chairs", href: "/products/executive-chairs" },
  { name: "Executive Desks", href: "/hardwood-executive-tables" },
  { name: "Conference Tables", href: "/products/conference-and-meeting-tables" },
  { name: "VIP Lounges", href: "/sofas-lounge-seating" },
];

const coffeeLoungeDropdownItems: NavItem[] = [
  { name: "Coffee Sets", href: "/products/coffee-sets" },
  { name: "Coffee Tables", href: "/products/coffee-tables" },
  { name: "Coffee Chairs", href: "/products/coffee-chairs" },
  { name: "Stools", href: "/products/stools" },
];

const navItems: NavItem[] = [
  { name: "Home", href: "/" },
  { name: "Projects", href: "/projects" },
  { 
    name: "Products", 
    href: "/products", 
    dropdown: productDropdownItems,
  },
  { name: "Workstations", dropdown: workstationDropdownItems },
  { name: "Premium Executive Range", dropdown: premiumExecutiveDropdownItems },
  { name: "Coffe Lounge", dropdown: coffeeLoungeDropdownItems },
  { name: "Field of Expertise", href: "/field-of-expertise" },
  { name: "HB Clientage", href: "/clientage" },
  { name: "Management & Employees", href: "/management-employees" },
  { name: "Certificates", href: "/certificates" },
];

export default function Navbar() {
  const pathname = usePathname();
  const { theme, toggleTheme, isMounted } = useTheme();
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
            ? "bg-white dark:bg-gray-900 shadow-md py-3" 
            : "bg-white dark:bg-gray-900 py-5"
        }`}
      >
        <div className="max-w-[1600px] mx-auto px-3 md:px-4 lg:px-6">
          <div className="flex items-center justify-between h-full relative">
            {/* Logo - Left */}
            <Link
              href="/"
              className="flex items-center gap-2 transition-opacity hover:opacity-80 shrink-0"
            >
              <Image
                src="/hb-logo.png.png"
                alt="HB Furniture"
                width={isScrolled ? 40 : 56}
                height={isScrolled ? 40 : 56}
                className="object-contain transition-all duration-300"
                priority
              />
              <span className="text-lg font-bold tracking-tight whitespace-nowrap text-[#E8500A]">
                HB Furniture
              </span>
            </Link>

            {/* Desktop Navigation - Center */}
            <nav className="hidden xl:flex items-center justify-center flex-1 gap-3 2xl:gap-5 px-2 2xl:px-4" ref={dropdownRef}>
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
                          className={`text-xs font-medium transition-colors duration-200 relative flex items-center gap-1 py-4 ${
                            isActive(item.href) || activeDropdown === item.name
                              ? "text-[#E8500A]"
                              : "text-gray-600 dark:text-gray-300 hover:text-[#E8500A]"
                          } ${item.name === "Premium Executive Range" || item.name === "Coffe Lounge" ? "" : "whitespace-nowrap"}`}
                        >
                          {item.name}
                          <svg
                            className={`w-3 h-3 transition-transform duration-200 ${activeDropdown === item.name ? "rotate-180" : ""}`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                          <span
                            className={`absolute bottom-0 left-0 right-0 h-0.5 bg-[#E8500A] transition-transform duration-200 ease-out origin-left ${
                              isActive(item.href) || activeDropdown === item.name ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                            }`}
                          />
                        </Link>
                      ) : (
                        <div
                          className={`text-xs font-medium transition-colors duration-200 relative flex items-center gap-1 py-4 cursor-pointer ${
                            activeDropdown === item.name
                              ? "text-[#E8500A]"
                              : "text-gray-600 dark:text-gray-300 hover:text-[#E8500A]"
                          } ${item.name === "Premium Executive Range" || item.name === "Coffe Lounge" ? "" : "whitespace-nowrap"}`}
                        >
                          {item.name}
                          <svg
                            className={`w-3 h-3 transition-transform duration-200 ${activeDropdown === item.name ? "rotate-180" : ""}`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                          <span
                            className={`absolute bottom-0 left-0 right-0 h-0.5 bg-[#E8500A] transition-transform duration-200 ease-out origin-left ${
                              activeDropdown === item.name ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                            }`}
                          />
                        </div>
                      )}

                      {/* Dropdown Menu */}
                      <div className={`absolute top-full left-0 mt-0 min-w-[260px] bg-white dark:bg-gray-800 rounded-xl shadow-xl border border-gray-100 dark:border-gray-700 overflow-hidden z-50 transition-all duration-300 ${
                        activeDropdown === item.name
                          ? "opacity-100 visible translate-y-0"
                          : "opacity-0 invisible translate-y-2 pointer-events-none"
                      }`}>
                        <div className="flex flex-col max-h-[70vh] overflow-y-auto">
                          {item.dropdown?.map((subItem, index) => (
                            <Link
                              key={subItem.href!}
                              href={subItem.href!}
                              className={`group flex items-center justify-between px-5 py-3 text-sm font-normal text-gray-700 dark:text-gray-200 transition-all duration-200 ${
                                index !== item.dropdown!.length - 1 ? "border-b border-gray-100 dark:border-gray-700" : ""
                              } hover:bg-gray-50 dark:hover:bg-gray-700`}
                              onClick={() => setActiveDropdown(null)}
                            >
                              <span>{subItem.name}</span>
                              {subItem.dropdown && (
                                <svg
                                  className="w-4 h-4 text-gray-400 dark:text-gray-500 transition-colors duration-200 group-hover:text-gray-600 dark:group-hover:text-gray-300"
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
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
                    className={`text-xs font-medium transition-colors duration-200 relative group whitespace-nowrap py-4 ${
                      isActive(item.href!)
                        ? "text-[#E8500A]"
                        : "text-gray-600 dark:text-gray-300 hover:text-[#E8500A]"
                    }`}
                  >
                    {item.name}
                    <span
                      className={`absolute bottom-0 left-0 right-0 h-0.5 bg-[#E8500A] transition-transform duration-200 ease-out origin-left ${
                        isActive(item.href!) ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                      }`}
                    />
                  </Link>
                );
              })}
            </nav>

            {/* Desktop Controls (Theme Toggle + Contact Us) */}
            <div className="hidden xl:flex items-center gap-2 shrink-0">
              {/* Theme Toggle - Desktop */}
              {isMounted && (
                <button
                  onClick={toggleTheme}
                  className="p-2 rounded-full text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300"
                  aria-label={theme === "light" ? "Switch to dark mode" : "Switch to light mode"}
                >
                  {theme === "light" ? (
                    <Moon className="w-5 h-5" />
                  ) : (
                    <Sun className="w-5 h-5" />
                  )}
                </button>
              )}

              {/* Contact Us Button */}
              <Link
                href="/contact"
                className="bg-[#E8500A] text-white px-6 py-2 rounded-full text-xs font-bold hover:bg-[#d64a09] transition-colors whitespace-nowrap shadow-sm hover:shadow-md"
              >
                Contact Us
              </Link>
            </div>

            {/* Mobile Controls */}
            <div className="xl:hidden flex items-center gap-2">
              {/* Theme Toggle - Mobile */}
              {isMounted && (
                <button
                  onClick={toggleTheme}
                  className="p-2 rounded-full text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300"
                  aria-label={theme === "light" ? "Switch to dark mode" : "Switch to light mode"}
                >
                  {theme === "light" ? (
                    <Moon className="w-6 h-6" />
                  ) : (
                    <Sun className="w-6 h-6" />
                  )}
                </button>
              )}

              {/* Mobile Hamburger Button */}
              <button
                type="button"
                className="p-2 text-gray-700 dark:text-gray-300 hover:text-[#E8500A] transition-colors"
                onClick={toggleMobileMenu}
                aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
                aria-expanded={isMobileMenuOpen}
              >
                {isMobileMenuOpen ? (
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
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
        <div className="fixed inset-x-0 top-0 bottom-0 z-40 bg-white dark:bg-gray-900 pt-20 px-4 xl:hidden animate-in slide-in-from-top duration-300 flex flex-col overflow-y-auto pb-6">
          <nav className="flex flex-col gap-2 flex-1">
            {navItems.map((item) => {
              if (item.dropdown) {
                return (
                  <div key={item.name} className="flex flex-col">
                    <div 
                      className={`w-full text-left px-4 py-2 rounded-lg text-sm font-bold uppercase tracking-wider transition-colors duration-200 ${
                        (item.href && isActive(item.href)) || activeDropdown === item.name
                          ? "bg-orange-50 dark:bg-orange-900/30 text-[#E8500A]"
                          : "text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        {item.href ? (
                          <Link 
                            href={item.href}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="flex-1 py-1"
                          >
                            {item.name}
                          </Link>
                        ) : (
                          <span className="flex-1 py-1">
                            {item.name}
                          </span>
                        )}
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setActiveDropdown((prev) => (prev === item.name ? null : item.name));
                          }}
                          className="p-1 -mr-1 rounded hover:bg-orange-100 dark:hover:bg-orange-900/30 transition-colors"
                        >
                          <svg
                            className={`w-5 h-5 transition-transform duration-200 ${activeDropdown === item.name ? "rotate-180" : ""}`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </button>
                      </div>
                    </div>

                    {/* Mobile Dropdown */}
                    {activeDropdown === item.name && (
                      <div className="pl-4 mt-1 flex flex-col gap-1">
                        {item.dropdown.map((subItem) => (
                          <Link
                            key={subItem.href!}
                            href={subItem.href!}
                            onClick={() => {
                              setIsMobileMenuOpen(false);
                              setActiveDropdown(null);
                            }}
                            className={`px-4 py-2 rounded text-xs transition-colors duration-200 ${
                              isActive(subItem.href!)
                                ? "bg-orange-50 dark:bg-orange-900/30 text-[#E8500A]"
                                : "text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-[#E8500A]"
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
                  className={`px-4 py-3 rounded-lg text-sm font-bold uppercase tracking-wider transition-all duration-200 ${
                    isActive(item.href!)
                      ? "bg-orange-50 dark:bg-orange-900/30 text-[#E8500A]"
                      : "text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800"
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </nav>
          
          <div className="mt-8 px-4">
            <Link
              href="/contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block w-full text-center bg-[#E8500A] text-white px-6 py-3 rounded-full text-sm font-bold hover:bg-[#d64a09] transition-colors shadow-sm"
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}

      {/* Spacer to prevent content from going under fixed navbar */}
      <div className={`transition-all duration-300 ${isScrolled ? "h-16" : "h-24"}`} />
    </>
  );
}