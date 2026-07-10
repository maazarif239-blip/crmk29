"use client";

import { useState, useEffect } from "react";

const REVIEWS = [
  {
    id: 1,
    initial: "A",
    initialBg: "bg-blue-100",
    initialColor: "text-blue-600",
    name: "Ahmad Rehan",
    role: "Manager",
    text: '"...after-sales support. HB Furniture truly cares about long-term client relationships."',
    highlight: false,
  },
  {
    id: 2,
    initial: "D",
    initialBg: "bg-green-100",
    initialColor: "text-green-600",
    name: "Dua Awan",
    role: "Manager (Admin)",
    text: '"Beautiful, functional, and sturdy. Our office looks completely transformed."',
    highlight: true,
  },
  {
    id: 3,
    initial: "S",
    initialBg: "bg-purple-100",
    initialColor: "text-purple-600",
    name: "Saad Tariq",
    role: "Operations Head",
    text: '"The quality of the executive desks exceeded our expectations. Highly recommended."',
    highlight: false,
  },
  {
    id: 4,
    initial: "F",
    initialBg: "bg-amber-100",
    initialColor: "text-amber-600",
    name: "Fatima Ali",
    role: "Design Director",
    text: '"Exceptional craftsmanship and timely delivery. A reliable partner for any corporate project."',
    highlight: false,
  },
];

export default function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(2);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setCardsToShow(1);
      } else {
        setCardsToShow(2);
        setCurrentIndex((prev) => Math.min(prev, REVIEWS.length - 2));
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => {
      if (prevIndex + cardsToShow >= REVIEWS.length) {
        return 0;
      }
      return prevIndex + 1;
    });
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => {
      if (prevIndex === 0) {
        return REVIEWS.length - cardsToShow;
      }
      return prevIndex - 1;
    });
  };

  // Prevent hydration mismatch by using default values on server
  const currentCardsToShow = isClient ? cardsToShow : 2;

  return (
    <div className="mt-12 relative flex items-center justify-center">
      {/* Left Arrow */}
      <button
        onClick={prevSlide}
        className="absolute left-0 lg:-left-6 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-400 hover:text-gray-900 z-10 transition-colors"
        aria-label="Previous review"
      >
        <svg
          className="w-5 h-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>

      {/* Cards Container */}
      <div className="w-full max-w-4xl px-12 overflow-hidden">
        <div className="-mx-3">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${
                currentIndex * (100 / REVIEWS.length)
              }%)`,
              width: `${(REVIEWS.length / currentCardsToShow) * 100}%`,
            }}
          >
            {REVIEWS.map((review) => (
              <div
                key={review.id}
                className="px-3"
                style={{ width: `${100 / REVIEWS.length}%` }}
              >
                <div
                  className={`h-full bg-white p-8 border ${
                    review.highlight
                      ? "border-[#EB5324] shadow-md"
                      : "border-gray-100 shadow-sm"
                  } text-left relative flex flex-col`}
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div
                      className={`w-10 h-10 rounded-full ${review.initialBg} flex items-center justify-center ${review.initialColor} font-bold text-sm`}
                    >
                      {review.initial}
                    </div>
                    <div>
                      <h4 className="text-[13px] font-bold text-gray-900">
                        {review.name}
                      </h4>
                      <span className="text-[10px] text-gray-400 uppercase tracking-widest">
                        {review.role}
                      </span>
                    </div>
                    <div className="ml-auto">
                      <img
                        src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png"
                        alt="Google"
                        className="h-4 object-contain grayscale opacity-50"
                      />
                    </div>
                  </div>
                  <p className="text-gray-600 text-[13px] leading-relaxed italic flex-1">
                    {review.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right Arrow */}
      <button
        onClick={nextSlide}
        className="absolute right-0 lg:-right-6 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-400 hover:text-gray-900 z-10 transition-colors"
        aria-label="Next review"
      >
        <svg
          className="w-5 h-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>
    </div>
  );
}
