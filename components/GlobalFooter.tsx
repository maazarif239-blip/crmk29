"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function GlobalFooter() {
  const pathname = usePathname();

  if (pathname === "/sign-in" || pathname === "/sign-up") {
    return null;
  }

  return (
    <footer className="bg-[#111111] text-gray-400 py-20 border-t-4 border-[#EB5324]">
      <div className="max-w-[1200px] mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-12 text-[12px]">
        {/* Col 1 */}
        <div>
          <div className="flex items-center gap-2 mb-4 text-white">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              className="w-5 h-5 text-[#EB5324]"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4 6h16v2H4V6zm0 5h16v2H4v-2zm0 5h16v2H4v-2z"
                fill="currentColor"
              />
            </svg>
            <span className="font-bold tracking-tight text-sm">
              HB Furniture
            </span>
          </div>
          <p className="mb-6 max-w-xs leading-relaxed">
            Creating legacy environments since 1964.
          </p>
          <div className="flex gap-4">
            <Link href="#" className="hover:text-white transition-colors">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
              </svg>
            </Link>
            <Link href="#" className="hover:text-white transition-colors">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z" />
              </svg>
            </Link>
            <Link href="#" className="hover:text-white transition-colors">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
              </svg>
            </Link>
          </div>
        </div>

        {/* Col 2 */}
        <div>
          <h4 className="text-white font-bold uppercase tracking-wider mb-6 text-[11px]">
            Company
          </h4>
          <ul className="space-y-3">
            <li>
              <Link href="/about" className="hover:text-white transition-colors">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/projects" className="hover:text-white transition-colors">
                Projects
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-white transition-colors">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Col 3 */}
        <div>
          <h4 className="text-white font-bold uppercase tracking-wider mb-6 text-[11px]">
            Legal
          </h4>
          <ul className="space-y-3">
            <li>
              <Link href="/privacy-policy" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/terms" className="hover:text-white transition-colors">
                Terms of Service
              </Link>
            </li>
            <li>
              <Link href="/sustainability" className="hover:text-white transition-colors">
                Sustainability
              </Link>
            </li>
          </ul>
        </div>

        {/* Col 4 */}
        <div>
          <h4 className="text-white font-bold uppercase tracking-wider mb-6 text-[11px]">
            Headquarters
          </h4>
          <address className="not-italic space-y-3">
            <p>
              Industrial Estate, Corporate Sector
              <br />
              Islamabad, Pakistan
            </p>
            <p>Phone: +92 (51) 312-4567</p>
            <p>Email: info@hbfurniture.com</p>
          </address>
        </div>
      </div>
    </footer>
  );
}
