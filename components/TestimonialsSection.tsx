"use client";

import React, { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { FcGoogle } from "react-icons/fc";

const GOOGLE_REVIEWS_URL = "https://www.google.com/maps/place/HB+Furniture+Hassan+Brother+(PVT)+LIMITED/@33.657515,73.0357053,17z/data=!4m8!3m7!1s0x38df95384559b40d:0x11098f728e61baed!8m2!3d33.6575106!4d73.0382802!9m1!1b1!16s%2Fg%2F11xh6rfbd2?entry=ttu";

const testimonials = [
  {
    name: "Anees Khan",
    label: "Google Review · 4 months ago",
    review:
      "Outstanding quality and a wide range of furniture available. Completely satisfied with my experience at HB Furniture. Alhamdulillah.",
  },
  {
    name: "Abrar Abbasi",
    label: "Google Review · 5 months ago",
    review:
      "HB Furniture manufactures an impressive range of office furniture. 100% recommended. Thank you for your excellent services!",
  },
  {
    name: "Nambeela Bebe",
    label: "Google Review · 9 months ago",
    review:
      "Great work by HB Furniture! I'm really happy with the service I received. They paid attention to every detail and made sure everything turned out exactly the way I wanted.",
  },
  {
    name: "Muhammad Rahan",
    label: "Google Review · 9 months ago",
    review:
      "I'm beyond impressed! From the moment I walked into their showroom, the staff was incredibly helpful, knowledgeable, and genuinely focused on helping me find exactly what I needed.",
  },
  {
    name: "Dua Aaay",
    label: "Google Review · 3 months ago",
    review:
      "Good furniture and an excellent overall experience. Simple, smooth, and exactly what I was looking for.",
  },
  {
    name: "Salman Iron",
    label: "Google Review · 9 months ago",
    review:
      "A unique blend of professionalism, quality, and affordability. Mr. Hisham is a thorough gentleman and a true expert of his craft. Strongly recommended.",
  },
  {
    name: "Azeem Khan",
    label: "Google Review · 10 months ago",
    review:
      "From start to finish, everything was handled with professionalism and care. The furniture is outstanding — sturdy, stylish, and exactly what I wanted. Delivery was on time and setup was quick. Will definitely return!",
  },
  {
    name: "Amat Hussain",
    label: "Google Review · 10 months ago",
    review:
      "Excellent selection of furniture at very reasonable prices. The chairs are incredibly comfortable. Highly recommended for anyone looking for quality at great value.",
  },
  {
    name: "Tanveer Khan",
    label: "Google Review · 9 months ago",
    review:
      "I had a great experience working with HB Furniture. Their quality is outstanding — well-designed, durable, and delivered exactly on time. Great service and a truly professional team.",
  },
  {
    name: "Raza Muhammad",
    label: "Google Review · Local Guide · 11 months ago",
    review:
      "The quality of their furniture is outstanding — durable, beautifully designed, and exactly as described. Customer service was professional throughout. Highly recommended for premium furniture at reasonable prices.",
  },
  {
    name: "Mazhar Khan",
    label: "Google Review · 9 months ago",
    review:
      "Working with HB Furniture was a smooth and pleasant experience. Their craftsmanship is top-notch and the final product perfectly matched my expectations. On-time delivery and very responsive customer service.",
  },
  {
    name: "Ali Qureshi",
    label: "Google Review · 9 months ago",
    review:
      "Genuinely impressed by HB Furniture. Their offerings are not only stylish and modern but crafted with high-quality materials ensuring durability and comfort. A wide variety of designs for every taste.",
  },
];

function getInitials(name: string) {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .substring(0, 2)
    .toUpperCase();
}

export default function TestimonialsSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start" },
    [Autoplay({ delay: 4000, stopOnInteraction: false, stopOnMouseEnter: true })]
  );

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <section className="relative py-16 sm:py-20 md:py-24 bg-[#F5F5F3] overflow-hidden">
      {/* Subtle dotted background pattern */}
      <div
        className="absolute inset-0 opacity-[0.15] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(#EB5324 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      ></div>

      <div className="relative z-10 max-w-[1200px] mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-16">
          <span className="text-[#EB5324] text-[11px] font-bold uppercase tracking-widest block mb-4">
            Google Reviews
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 tracking-tight">
            What Our Clients Say
          </h2>
          <p className="text-gray-500 text-sm md:text-base mb-6">
            Real experiences from real customers — verified on Google.
          </p>

          <div className="flex flex-col items-center justify-center gap-2">
            <div className="flex gap-1 text-[#EB5324]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-current" />
              ))}
            </div>
            <p className="text-gray-500 text-sm font-medium">
              <span className="text-gray-900 font-bold">5.0 Rating</span> · 300+
              Satisfied Clients
            </p>
          </div>
        </div>

        {/* Carousel */}
        <div className="relative px-10 sm:px-12 md:px-14">
          {/* Controls */}
          <button
            onClick={scrollPrev}
            className="absolute left-0 sm:left-2 top-1/2 -translate-y-1/2 w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-400 hover:text-[#EB5324] hover:shadow-xl z-20 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#EB5324]"
            aria-label="Previous review"
          >
            <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
          </button>

          <button
            onClick={scrollNext}
            className="absolute right-0 sm:right-2 top-1/2 -translate-y-1/2 w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-400 hover:text-[#EB5324] hover:shadow-xl z-20 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#EB5324]"
            aria-label="Next review"
          >
            <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
          </button>

          {/* Cards Wrapper (Embla Viewport) */}
          <div className="overflow-hidden px-2 py-4 -mx-2" ref={emblaRef}>
            <div className="flex -ml-4">
              {testimonials.map((testimonial, idx) => (
                <div
                  key={idx}
                  className="pl-4 flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.333333%] min-w-0"
                >
                  <div className="h-full bg-white p-5 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.03)] border-l-4 border-l-[#EB5324] flex flex-col transition-transform duration-300 hover:-translate-y-1">
                    <div className="flex gap-1 text-[#EB5324] mb-6">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>

                    <p className="text-gray-700 text-[14px] leading-relaxed mb-8 flex-1 italic">
                      "{testimonial.review}"
                    </p>

                    <div className="flex items-center gap-4 mt-auto">
                      <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 font-bold text-sm shrink-0">
                        {getInitials(testimonial.name)}
                      </div>
                      <div>
                        <h4 className="text-[14px] font-bold text-gray-900">
                          {testimonial.name}
                        </h4>
                        <span className="text-[12px] text-gray-500 block mt-0.5">
                          {testimonial.label}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-16 flex justify-center">
          <a
            href={GOOGLE_REVIEWS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 group cursor-pointer text-[#555555] hover:text-[#EB5324] transition-colors duration-300"
          >
            <FcGoogle className="w-6 h-6" />
            <span className="text-[13px] font-medium group-hover:underline underline-offset-4 decoration-[#EB5324] transition-all">
              Read all reviews on Google
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}