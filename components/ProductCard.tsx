import React from 'react';
import AddToCartButton from './AddToCartButton';

interface ProductCardProps {
  title: string;
  primaryImage: string;
  secondaryImage?: string;
  price?: string;
  description?: string;
  addToCartHref?: string;
  addToCartText?: string;
  showAddToCart?: boolean;
}

export default function ProductCard({
  title,
  primaryImage,
  secondaryImage,
  price,
  description,
  addToCartHref = "#",
  addToCartText = "ADD TO CART",
  showAddToCart = false,
}: ProductCardProps) {
  return (
    <div className="group flex flex-col cursor-pointer h-full min-w-0">
      <div className="aspect-square bg-[#F5F5F5] p-4 sm:p-6 md:p-8 flex items-center justify-center relative overflow-hidden transition-colors group-hover:bg-[#f0f0f0]">
        {/* Primary Image */}
        <img
          src={primaryImage}
          alt={title}
          className="w-full h-full object-contain mix-blend-multiply transition-opacity duration-400 ease-in-out group-hover:opacity-0"
        />
        {/* Secondary Image (if provided) */}
        {secondaryImage && (
          <img
            src={secondaryImage}
            alt={`${title} alternate view`}
            className="absolute inset-0 p-8 w-full h-full object-contain mix-blend-multiply opacity-0 transition-opacity duration-400 ease-in-out transition-transform duration-400 ease-in-out group-hover:opacity-100 group-hover:scale-105"
          />
        )}
        {/* Add to Cart Button (if enabled) */}
        {showAddToCart && (
          <AddToCartButton href={addToCartHref} className="group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto">
            {addToCartText}
          </AddToCartButton>
        )}
      </div>
      <div className="pt-5 text-left bg-white flex flex-col flex-1 px-2">
        <h3 className="text-[13px] font-bold text-gray-900 group-hover:text-[#E04E1B] transition-colors">
          {title}
        </h3>
        {description && (
          <p className="mt-3 text-gray-500 text-[11px] leading-relaxed flex-1">
            {description}
          </p>
        )}
        {price && (
          <p className="mt-3 text-[13px] font-bold text-[#E04E1B]">
            {price}
          </p>
        )}
      </div>
    </div>
  );
}
