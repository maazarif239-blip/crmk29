"use client";

import Link from "next/link";
import { useState } from "react";

type ProductSidebarProps = {
  activeCategory: string;
  assistanceText?: string;
};

export default function ProductSidebar({ activeCategory, assistanceText }: ProductSidebarProps) {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const categories = [
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
  ];

  const sidebarContent = (
    <>
      <h3 className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-8 hidden md:block">
        Categories
      </h3>
      <ul className="space-y-5">
        {categories.map((cat) => {
          const isActive = activeCategory === cat.href;
          return (
            <li key={cat.href}>
              <Link
                href={cat.href}
                onClick={() => setIsMobileOpen(false)}
                className={`flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider transition-colors ${
                  isActive
                    ? "text-[#E04E1B]"
                    : "text-gray-500 hover:text-gray-900"
                }`}
              >
                {isActive && (
                  <span className="w-1.5 h-1.5 bg-[#E04E1B] rounded-full"></span>
                )}
                {cat.name}
              </Link>
            </li>
          );
        })}
      </ul>

      <div className="mt-12 bg-[#F9F9F9] p-6 border border-gray-100 shadow-sm hidden md:block">
        <h4 className="text-[13px] font-bold text-gray-900 mb-2">Need Assistance?</h4>
        <p className="text-gray-500 text-[11px] leading-relaxed mb-6">
          {assistanceText || "Our design team is ready to help you plan your workspace."}
        </p>
        <Link
          href="/contact"
          className="block text-center w-full border border-gray-300 bg-white text-gray-700 py-2.5 text-[10px] font-bold uppercase tracking-widest hover:bg-gray-50 transition-colors"
        >
          Contact Experts
        </Link>
      </div>
    </>
  );

  return (
    <>
      {/* Mobile Filter Button */}
      <div className="md:hidden mb-6 flex justify-end">
        <button
          onClick={() => setIsMobileOpen(true)}
          className="flex items-center gap-2 bg-gray-100 text-gray-900 px-4 py-2 text-[11px] font-bold uppercase tracking-wider rounded"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          Filter / Categories
        </button>
      </div>

      {/* Desktop Sidebar */}
      <aside className="hidden md:block w-full lg:w-56 md:w-48 shrink-0">
        {sidebarContent}
      </aside>

      {/* Mobile Drawer */}
      {isMobileOpen && (
        <div className="fixed inset-0 z-[100] flex flex-col justify-end md:hidden">
          <div
            className="absolute inset-0 bg-black/50"
            onClick={() => setIsMobileOpen(false)}
          />
          <div className="relative bg-white w-full rounded-t-2xl p-6 shadow-xl max-h-[80vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <span className="font-bold uppercase tracking-wider text-gray-900 text-sm">Categories</span>
              <button
                onClick={() => setIsMobileOpen(false)}
                className="text-gray-500 hover:text-gray-900 p-2 bg-gray-100 rounded-full"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            {sidebarContent}
          </div>
        </div>
      )}
    </>
  );
}