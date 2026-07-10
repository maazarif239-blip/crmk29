import React from 'react';
import Link from 'next/link';

interface AddToCartButtonProps {
  href?: string;
  className?: string;
  children?: React.ReactNode;
}

/**
 * Premium "Add to Cart" button that appears on product card hover.
 *
 * - Appears on hover with smooth upward slide animation
 * - Uses existing theme colors and typography
 * - Positioned absolutely at the bottom of product image container
 * - Fully responsive and compatible with existing product cards
 */
export default function AddToCartButton({
  href = "#",
  className = "",
  children = "ADD TO CART",
}: AddToCartButtonProps) {
  return (
    <Link
      href={href}
      className={`
        absolute bottom-4 left-4 right-4 z-10
        flex items-center justify-center
        bg-[#EB5324] text-white
        text-[10px] font-bold uppercase tracking-[0.12em]
        py-3 px-4 rounded-md
        shadow-lg
        opacity-0 transform translateY-full pointer-events-none
        transition-opacity duration-400 transition-transform duration-400
        ease-[cubic-bezier(0.22,1,0.36,1)]
        hover:bg-[#d4481f] hover:shadow-xl
        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#EB5324] focus-visible:ring-offset-2
        ${className}
      `}
    >
      {children}
    </Link>
  );
}
