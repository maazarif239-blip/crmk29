import Link from "next/link";

type ContactForPricingLinkProps = {
  href?: string;
  className?: string;
};

/**
 * Shared premium "Contact for Pricing" CTA link.
 *
 * - Full-width inside cards
 * - Minimal, luxury catalogue aesthetic
 * - Accessible focus states
 */
export default function ContactForPricingLink({
  href = "/contact",
  className = "",
}: ContactForPricingLinkProps) {
  return (
    <Link
      href={href}
      className={`group inline-flex items-center text-[10px] font-bold uppercase tracking-[0.12em] text-[#EB5324] transition-all duration-300 hover:opacity-75 focus-visible:outline-none ${className}`}
    >
      <span className="relative">
        <span className="block">CONTACT FOR PRICING</span>
        <span className="absolute -bottom-0.5 left-0 h-[1.5px] w-0 bg-[#EB5324] transition-all duration-300 group-hover:w-full" />
      </span>
    </Link>
  );
}

