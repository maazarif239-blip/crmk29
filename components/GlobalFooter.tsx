"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { FaFacebook, FaInstagram } from "react-icons/fa";

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
  <Link href="/" className="flex items-start gap-4 mb-4">
    <Image
      src="/hb-logo.png.png"
      alt="HB Furniture Logo"
      width={56}
      height={56}
      className="rounded bg-white p-2 object-contain"
    />

    <div>
      <h3 className="text-white text-xl font-bold mb-1">
        HB Furniture
      </h3>

      <p className="text-gray-400 text-sm leading-relaxed">
        Crafting legacy environments since 1964.
      </p>
    </div>
  </Link>

  <div className="flex gap-4 mt-4">
    <a
      href="https://web.facebook.com/hbfurniture.official/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaFacebook className="w-4 h-4" />
    </a>

    <a
      href="https://www.instagram.com/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaInstagram className="w-4 h-4" />
    </a>
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
              <Link href="/terms-of-service" className="hover:text-white transition-colors">
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
            <p>Phone: <a href="tel:+92513124567" className="hover:text-white transition-colors">+92 (51) 312-4567</a></p>
            <p>Email: <a href="mailto:info@hbfurniture.com" className="hover:text-white transition-colors">info@hbfurniture.com</a></p>
          </address>
        </div>
      </div>
    </footer>
  );
}
