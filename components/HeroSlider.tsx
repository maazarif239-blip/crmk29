'use client';

import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface HeroSlide {
  id: string | number;
  image: string;
  headline: string;
  description: string;
  ctaText: string;
  ctaHref: string;
}

interface HeroSliderProps {
  slides: HeroSlide[];
  autoplayDelay?: number;
}

/**
 * Premium Hero Slider with crossfade transitions and sequential content reveals.
 *
 * - Uses Embla Carousel for lightweight, performant sliding
 * - Crossfade effect between slides
 * - Sequential fade-in-up animations for content
 * - Autoplay with configurable delay
 * - Navigation arrows and pagination
 * - Fully responsive
 * - Matches luxury ecommerce aesthetic
 */
export default function HeroSlider({
  slides,
  autoplayDelay = 5000,
}: HeroSliderProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: 'start',
      skipSnaps: false,
      duration: 800,
      watchDrag: false,
    },
    [Autoplay({ delay: autoplayDelay, stopOnInteraction: false })]
  );

  const scrollPrev = React.useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = React.useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const [slideNodes, setSlideNodes] = React.useState<HTMLElement[]>([]);

  const onSelect = React.useCallback(() => {
    if (!emblaApi) return;
    const newSelectedIndex = emblaApi.selectedScrollSnap();
    setSelectedIndex(newSelectedIndex);
    
    // Update is-selected class on slides
    slideNodes.forEach((node, index) => {
      if (index === newSelectedIndex) {
        node.classList.add('is-selected');
      } else {
        node.classList.remove('is-selected');
      }
    });
  }, [emblaApi, slideNodes]);

  React.useEffect(() => {
    if (!emblaApi) return;

    // Get all slide nodes
    const slides = Array.from(emblaApi.slideNodes()) as HTMLElement[];
    setSlideNodes(slides);

    // Initial select
    onSelect();
    
    // Add event listeners
    emblaApi.on('select', onSelect);
    emblaApi.on('init', onSelect);

    return () => {
      emblaApi.off('select', onSelect);
      emblaApi.off('init', onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <div className="relative w-full overflow-hidden">
      {/* Embla Carousel Container */}
      <div ref={emblaRef} className="overflow-hidden">
        <div className="flex">
          {slides.map((slide, index) => (
            <div key={slide.id} className="embla__slide relative min-w-full">
              {/* Slide Background */}
              <div className="relative h-[600px] md:h-[800px] overflow-hidden">
                <img
                  src={slide.image}
                  alt={slide.headline}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                {/* Dark Overlay for readability */}
                <div className="absolute inset-0 bg-black/40" />
                
                {/* Slide Content */}
                <div className="relative z-10 h-full flex items-center justify-center px-4">
                  <div className="max-w-4xl mx-auto text-center">
                    <h2 className="hero-slide-headline text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight font-serif">
                      {slide.headline}
                    </h2>
                    <p className="hero-slide-description text-gray-200 text-base md:text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
                      {slide.description}
                    </p>
                    <a
                      href={slide.ctaHref}
                      className="hero-slide-cta inline-flex items-center gap-3 bg-[#EB5324] hover:bg-[#d4481f] text-white px-8 py-4 text-sm font-bold uppercase tracking-wider transition-all duration-300"
                    >
                      {slide.ctaText}
                      <ChevronRight size={18} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={scrollPrev}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-all duration-300"
        aria-label="Previous slide"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={scrollNext}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-all duration-300"
        aria-label="Next slide"
      >
        <ChevronRight size={24} />
      </button>

      {/* Pagination Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => emblaApi?.scrollTo(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === selectedIndex
                ? 'bg-[#EB5324] w-8'
                : 'bg-white/50 hover:bg-white/70'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Custom CSS for crossfade and content animations */}
      <style jsx>{`
        /* Crossfade transition for slides */
        .embla__slide {
          opacity: 0;
          transition: opacity 0.8s ease-in-out;
        }
        .embla__slide.is-selected {
          opacity: 1;
        }
        
        /* Keyframe animation for fade-in-up */
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        /* Slide content initial hidden state */
        .hero-slide-headline,
        .hero-slide-description,
        .hero-slide-cta {
          opacity: 0;
          transform: translateY(30px);
          transition: none;
        }
        
        /* Animate content only when slide is active */
        .embla__slide.is-selected .hero-slide-headline {
          animation: fadeInUp 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }
        .embla__slide.is-selected .hero-slide-description {
          animation: fadeInUp 0.8s cubic-bezier(0.22, 1, 0.36, 1) 0.3s forwards;
        }
        .embla__slide.is-selected .hero-slide-cta {
          animation: fadeInUp 0.8s cubic-bezier(0.22, 1, 0.36, 1) 0.6s forwards;
        }
      `}</style>
    </div>
  );
}
