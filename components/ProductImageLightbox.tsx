"use client";

import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type MouseEvent as ReactMouseEvent,
  type PointerEvent as ReactPointerEvent,
  type TouchEvent as ReactTouchEvent,
  type WheelEvent as ReactWheelEvent,
} from "react";

type LightboxImage = {
  src: string;
  alt: string;
};

type Point = {
  x: number;
  y: number;
};

const MIN_ZOOM = 1;
const MAX_ZOOM = 4;
const ZOOM_STEP = 0.25;
const DOUBLE_TAP_DELAY = 300;

function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max);
}

function getTouchDistance(touches: React.TouchList | TouchList) {
  if (touches.length < 2) {
    return 0;
  }
  const [a, b] = [touches[0], touches[1]];
  return Math.hypot(b.clientX - a.clientX, b.clientY - a.clientY);
}

export default function ProductImageLightbox() {
  const [image, setImage] = useState<LightboxImage | null>(null);
  const [scale, setScale] = useState(1);
  const [offset, setOffset] = useState<Point>({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);

  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const dragStartRef = useRef<Point>({ x: 0, y: 0 });
  const lastOffsetRef = useRef<Point>({ x: 0, y: 0 });
  const pinchDistanceRef = useRef(0);
  const pinchScaleRef = useRef(1);
  const lastTapRef = useRef(0);
  const scaleRef = useRef(1);

  // Keep scaleRef in sync for use in callbacks
  useEffect(() => {
    scaleRef.current = scale;
  }, [scale]);

  const resetTransform = useCallback(() => {
    setScale(1);
    setOffset({ x: 0, y: 0 });
    lastOffsetRef.current = { x: 0, y: 0 };
    pinchDistanceRef.current = 0;
    pinchScaleRef.current = 1;
  }, []);

  const closeLightbox = useCallback(() => {
    setImage(null);
    setIsDragging(false);
    resetTransform();
  }, [resetTransform]);

  const updateScale = useCallback((nextScale: number) => {
    const clamped = clamp(nextScale, MIN_ZOOM, MAX_ZOOM);
    setScale(clamped);
    if (clamped === MIN_ZOOM) {
      setOffset({ x: 0, y: 0 });
      lastOffsetRef.current = { x: 0, y: 0 };
    }
  }, []);

  // Focus close button when lightbox opens
  useEffect(() => {
    if (image) {
      closeButtonRef.current?.focus();
    }
  }, [image]);

  // Keyboard handler: ESC, +/- zoom, Tab trapping
  useEffect(() => {
    if (!image) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeLightbox();
        return;
      }
      if (e.key === "+" || e.key === "=") {
        e.preventDefault();
        updateScale(scaleRef.current + ZOOM_STEP);
      }
      if (e.key === "-") {
        e.preventDefault();
        updateScale(scaleRef.current - ZOOM_STEP);
      }
      // Focus trap: keep Tab within the lightbox
      if (e.key === "Tab") {
        const root = containerRef.current;
        if (!root) return;
        const focusable = root.querySelectorAll<HTMLElement>(
          'button, [tabindex]:not([tabindex="-1"])'
        );
        if (focusable.length === 0) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (e.shiftKey) {
          if (document.activeElement === first) {
            e.preventDefault();
            last.focus();
          }
        } else {
          if (document.activeElement === last) {
            e.preventDefault();
            first.focus();
          }
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [image, closeLightbox, updateScale]);

  // Global click listener to open lightbox from product images
  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (image) return;

      const target = event.target;
      if (!(target instanceof HTMLElement)) return;

      const clickedImage = target.closest("img");
      if (!(clickedImage instanceof HTMLImageElement)) return;

      const mainElement = clickedImage.closest("main");
      if (!mainElement || !mainElement.querySelector("[data-product-page='true']")) return;

      if (clickedImage.closest("[data-product-lightbox-root='true']")) return;

      const src = clickedImage.currentSrc || clickedImage.src;
      if (!src) return;

      setImage({ src, alt: clickedImage.alt || "Product image" });
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, [image]);

  // Scroll lock while lightbox is open
  useEffect(() => {
    if (!image) return;

    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = original;
    };
  }, [image]);

  if (!image) {
    return null;
  }

  // --- Event Handlers (only exist when image is shown) ---

  const handleBackdropClick = (e: ReactMouseEvent<HTMLDivElement>) => {
    // Only close if the click target is the backdrop itself, not the image
    if (e.target === e.currentTarget) {
      closeLightbox();
    }
  };

  const handleImageAreaClick = (e: ReactMouseEvent<HTMLDivElement>) => {
    // If user clicked the backdrop area around the image (not the image itself), close
    if (e.target === e.currentTarget) {
      closeLightbox();
    }
  };

  const handleDoubleClick = (e: ReactMouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    if (scale > 1) {
      // Reset to 1x
      resetTransform();
      setScale(1);
    } else {
      // Zoom to 2.5x
      updateScale(2.5);
    }
  };

  const handlePointerDown = (e: ReactPointerEvent<HTMLDivElement>) => {
    // Only start dragging if zoomed and pointer is on the image
    if (scale <= 1) return;
    if (!(e.target instanceof HTMLImageElement)) return;

    e.preventDefault();
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
    setIsDragging(true);
    dragStartRef.current = {
      x: e.clientX - lastOffsetRef.current.x,
      y: e.clientY - lastOffsetRef.current.y,
    };
  };

  const handlePointerMove = (e: ReactPointerEvent<HTMLDivElement>) => {
    if (!isDragging || scale <= 1) return;

    e.preventDefault();
    const nextOffset = {
      x: e.clientX - dragStartRef.current.x,
      y: e.clientY - dragStartRef.current.y,
    };

    // Clamp to boundaries so user can't drag image off-screen
    const img = imageRef.current;
    if (img) {
      const rect = img.getBoundingClientRect();
      const imgW = rect.width / scale;
      const imgH = rect.height / scale;
      const maxX = Math.max(0, (imgW * scale - imgW) / 2);
      const maxY = Math.max(0, (imgH * scale - imgH) / 2);
      nextOffset.x = clamp(nextOffset.x, -maxX, maxX);
      nextOffset.y = clamp(nextOffset.y, -maxY, maxY);
    }

    setOffset(nextOffset);
    lastOffsetRef.current = nextOffset;
  };

  const handlePointerUp = () => {
    setIsDragging(false);
  };

  const handleWheel = (e: ReactWheelEvent<HTMLDivElement>) => {
    e.preventDefault();
    updateScale(scale - Math.sign(e.deltaY) * ZOOM_STEP);
  };

  const handleTouchStart = (e: ReactTouchEvent<HTMLDivElement>) => {
    if (e.touches.length === 2) {
      pinchDistanceRef.current = getTouchDistance(e.touches);
      pinchScaleRef.current = scale;
      return;
    }

    if (e.touches.length === 1) {
      // Double-tap detection
      const now = Date.now();
      if (now - lastTapRef.current < DOUBLE_TAP_DELAY) {
        // Double tap: toggle zoom
        if (scale > 1) {
          resetTransform();
          setScale(1);
        } else {
          updateScale(2.5);
        }
        lastTapRef.current = 0;
        return;
      }
      lastTapRef.current = now;

      // Single finger drag when zoomed
      if (scale > 1) {
        const touch = e.touches[0];
        setIsDragging(true);
        dragStartRef.current = {
          x: touch.clientX - lastOffsetRef.current.x,
          y: touch.clientY - lastOffsetRef.current.y,
        };
      }
    }
  };

  const handleTouchMove = (e: ReactTouchEvent<HTMLDivElement>) => {
    if (e.touches.length === 2) {
      e.preventDefault();
      const currentDistance = getTouchDistance(e.touches);
      if (!pinchDistanceRef.current) {
        pinchDistanceRef.current = currentDistance;
      }
      const nextScale =
        pinchScaleRef.current * (currentDistance / pinchDistanceRef.current);
      updateScale(nextScale);
      return;
    }

    if (e.touches.length === 1 && isDragging && scale > 1) {
      e.preventDefault();
      const touch = e.touches[0];
      const nextOffset = {
        x: touch.clientX - dragStartRef.current.x,
        y: touch.clientY - dragStartRef.current.y,
      };

      // Clamp
      const img = imageRef.current;
      if (img) {
        const rect = img.getBoundingClientRect();
        const imgW = rect.width / scale;
        const imgH = rect.height / scale;
        const maxX = Math.max(0, (imgW * scale - imgW) / 2);
        const maxY = Math.max(0, (imgH * scale - imgH) / 2);
        nextOffset.x = clamp(nextOffset.x, -maxX, maxX);
        nextOffset.y = clamp(nextOffset.y, -maxY, maxY);
      }

      setOffset(nextOffset);
      lastOffsetRef.current = nextOffset;
    }
  };

  const handleTouchEnd = (e: ReactTouchEvent<HTMLDivElement>) => {
    if (e.touches.length < 2) {
      pinchDistanceRef.current = 0;
      pinchScaleRef.current = scale;
    }
    if (e.touches.length === 0) {
      setIsDragging(false);
    }
  };

  return (
    <div
      ref={containerRef}
      data-product-lightbox-root="true"
      className="fixed inset-0 z-[120] flex flex-col"
      role="dialog"
      aria-modal="true"
      aria-label={image.alt}
    >
      {/* Backdrop — closes on click */}
      <div
        className="absolute inset-0 bg-black/90 backdrop-blur-sm"
        onClick={handleBackdropClick}
        aria-hidden="true"
      />

      {/* Toolbar — z-30 to sit above the image area */}
      <div className="relative z-30 flex items-center justify-between gap-3 px-4 py-4 sm:px-6 shrink-0">
        <div className="rounded-full bg-white/10 px-3 py-1.5 text-xs font-medium text-white/80">
          Click outside or press Esc to close
        </div>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              updateScale(scale - ZOOM_STEP);
            }}
            className="flex items-center justify-center h-11 w-11 rounded-full bg-white/10 text-white text-xl font-bold transition-colors hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/70"
            aria-label="Zoom out"
          >
            −
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              updateScale(scale + ZOOM_STEP);
            }}
            className="flex items-center justify-center h-11 w-11 rounded-full bg-white/10 text-white text-xl font-bold transition-colors hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/70"
            aria-label="Zoom in"
          >
            +
          </button>
          <button
            ref={closeButtonRef}
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              closeLightbox();
            }}
            className="flex items-center justify-center h-11 w-11 rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/70"
            aria-label="Close image viewer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Image area — z-10 below toolbar, handles zoom/drag/close */}
      <div
        className="relative z-10 flex-1 flex items-center justify-center px-4 pb-4 sm:px-8"
        onClick={handleImageAreaClick}
        onDoubleClick={handleDoubleClick}
        onWheel={handleWheel}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        style={{ touchAction: "none" }}
      >
        <img
          ref={imageRef}
          src={image.src}
          alt={image.alt}
          draggable={false}
          className={`max-h-full max-w-full select-none object-contain transition-transform duration-200 ease-out ${
            scale > 1 ? "cursor-grab" : "cursor-zoom-in"
          } ${isDragging ? "!cursor-grabbing" : ""}`}
          style={{
            transform: `translate(${offset.x}px, ${offset.y}px) scale(${scale})`,
          }}
        />
      </div>

      {/* Zoom indicator */}
      {scale > 1 && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-30 rounded-full bg-white/10 px-3 py-1.5 text-xs font-medium text-white/80">
          {Math.round(scale * 100)}%
        </div>
      )}
    </div>
  );
}
