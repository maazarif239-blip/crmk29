'use client';

import React, { useRef, useEffect } from 'react';

interface ProductGridProps {
  children: React.ReactNode;
}

export default function ProductGrid({ children }: ProductGridProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef<Set<Element>>(new Set());

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const cards = Array.from(container.children);

    // Create observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated.current.has(entry.target) && entry.target instanceof HTMLElement) {
            // Mark as animated
            hasAnimated.current.add(entry.target);
            
            // Get card index in grid
            const index = cards.indexOf(entry.target);
            
            // Calculate delay: 0.1s per card
            const delay = index * 0.1;
            entry.target.style.setProperty('--card-delay', `${delay}s`);
            
            // Add visible class
            entry.target.classList.add('product-card-visible');
            
            // Stop observing once animated
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1, // Trigger when 10% of the card is visible
        rootMargin: '0px 0px -50px 0px', // Start animating a little before entering viewport
      }
    );

    // Observe all cards
    cards.forEach((card) => observer.observe(card));

    // Cleanup
    return () => {
      observer.disconnect();
    };
  }, [children]);

  return (
    <div ref={containerRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
      {React.Children.map(children, (child) => {
        return (
          <div className="product-card-hidden">
            {child}
          </div>
        );
      })}
    </div>
  );
}
