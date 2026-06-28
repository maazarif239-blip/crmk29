  "use client";

  import {
    useEffect,
    useRef,
    useState,
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

  function clamp(value: number, min: number, max: number) {
    return Math.min(Math.max(value, min), max);
  }

  function getTouchDistance(touches: React.TouchList | TouchList) {
    if (touches.length < 2) {
      return 0;
    }

    const [firstTouch, secondTouch] = [touches[0], touches[1]];
    return Math.hypot(
      secondTouch.clientX - firstTouch.clientX,
      secondTouch.clientY - firstTouch.clientY
    );
  }

  export default function ProductImageLightbox() {
    const [image, setImage] = useState<LightboxImage | null>(null);
    const [scale, setScale] = useState(1);
    const [offset, setOffset] = useState<Point>({ x: 0, y: 0 });
    const [isDragging, setIsDragging] = useState(false);

    const closeButtonRef = useRef<HTMLButtonElement>(null);
    const dragStartRef = useRef<Point>({ x: 0, y: 0 });
    const lastOffsetRef = useRef<Point>({ x: 0, y: 0 });
    const pinchDistanceRef = useRef(0);
    const pinchScaleRef = useRef(1);

    const resetTransform = () => {
      setScale(1);
      setOffset({ x: 0, y: 0 });
      lastOffsetRef.current = { x: 0, y: 0 };
      pinchDistanceRef.current = 0;
      pinchScaleRef.current = 1;
    };

    const closeLightbox = () => {
      setImage(null);
      setIsDragging(false);
      resetTransform();
    };

    const updateScale = (nextScale: number) => {
      const clampedScale = clamp(nextScale, MIN_ZOOM, MAX_ZOOM);
      setScale(clampedScale);

      if (clampedScale === MIN_ZOOM) {
        setOffset({ x: 0, y: 0 });
        lastOffsetRef.current = { x: 0, y: 0 };
      }
    };

    useEffect(() => {
      if (!image) {
        return;
      }

      closeButtonRef.current?.focus();
    }, [image]);

    useEffect(() => {
      const handleKeyDown = (event: KeyboardEvent) => {
        if (!image) {
          return;
        }

        if (event.key === "Escape") {
          closeLightbox();
        }

        if (event.key === "+" || event.key === "=") {
          event.preventDefault();
          updateScale(scale + ZOOM_STEP);
        }

        if (event.key === "-") {
          event.preventDefault();
          updateScale(scale - ZOOM_STEP);
        }
      };

      document.addEventListener("keydown", handleKeyDown);
      return () => document.removeEventListener("keydown", handleKeyDown);
    }, [image, scale]);

    useEffect(() => {
      const handleClick = (event: MouseEvent) => {
        if (image) {
          return;
        }

        const target = event.target;
        if (!(target instanceof HTMLElement)) {
          return;
        }

        const clickedImage = target.closest("img");
        if (!(clickedImage instanceof HTMLImageElement)) {
          return;
        }

        const mainElement = clickedImage.closest("main");
        if (!mainElement || !mainElement.querySelector("[data-product-page='true']")) {
          return;
        }

        if (clickedImage.closest("[data-product-lightbox-root='true']")) {
          return;
        }

        const src = clickedImage.currentSrc || clickedImage.src;
        if (!src) {
          return;
        }

        setImage({
          src,
          alt: clickedImage.alt || "Product image",
        });
      };

      document.addEventListener("click", handleClick);
      return () => document.removeEventListener("click", handleClick);
    }, [image]);

    useEffect(() => {
      if (!image) {
        return;
      }

      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";

      return () => {
        document.body.style.overflow = originalOverflow;
      };
    }, [image]);

    if (!image) {
      return null;
    }

    const handlePointerDown = (event: ReactPointerEvent<HTMLDivElement>) => {
      if (scale <= 1) {
        return;
      }

      event.preventDefault();
      setIsDragging(true);
      dragStartRef.current = {
        x: event.clientX - lastOffsetRef.current.x,
        y: event.clientY - lastOffsetRef.current.y,
      };
    };

    const handlePointerMove = (event: ReactPointerEvent<HTMLDivElement>) => {
      if (!isDragging || scale <= 1) {
        return;
      }

      event.preventDefault();
      const nextOffset = {
        x: event.clientX - dragStartRef.current.x,
        y: event.clientY - dragStartRef.current.y,
      };

      setOffset(nextOffset);
      lastOffsetRef.current = nextOffset;
    };

    const handlePointerUp = () => {
      setIsDragging(false);
    };

    const handleWheel = (event: ReactWheelEvent<HTMLDivElement>) => {
      event.preventDefault();
      updateScale(scale - Math.sign(event.deltaY) * ZOOM_STEP);
    };

    const handleTouchStart = (event: ReactTouchEvent<HTMLDivElement>) => {
      if (event.touches.length === 2) {
        pinchDistanceRef.current = getTouchDistance(event.touches);
        pinchScaleRef.current = scale;
        return;
      }

      if (event.touches.length === 1 && scale > 1) {
        const touch = event.touches[0];
        setIsDragging(true);
        dragStartRef.current = {
          x: touch.clientX - lastOffsetRef.current.x,
          y: touch.clientY - lastOffsetRef.current.y,
        };
      }
    };

    const handleTouchMove = (event: ReactTouchEvent<HTMLDivElement>) => {
      if (event.touches.length === 2) {
        event.preventDefault();
        const currentDistance = getTouchDistance(event.touches);
        if (!pinchDistanceRef.current) {
          pinchDistanceRef.current = currentDistance;
        }

        const nextScale = pinchScaleRef.current * (currentDistance / pinchDistanceRef.current);
        updateScale(nextScale);
        return;
      }

      if (event.touches.length === 1 && isDragging && scale > 1) {
        event.preventDefault();
        const touch = event.touches[0];
        const nextOffset = {
          x: touch.clientX - dragStartRef.current.x,
          y: touch.clientY - dragStartRef.current.y,
        };

        setOffset(nextOffset);
        lastOffsetRef.current = nextOffset;
      }
    };

    const handleTouchEnd = (event: ReactTouchEvent<HTMLDivElement>) => {
      if (event.touches.length < 2) {
        pinchDistanceRef.current = 0;
        pinchScaleRef.current = scale;
      }

      if (event.touches.length === 0) {
        setIsDragging(false);
      }
    };

    return (
      <div
        data-product-lightbox-root="true"
        className="fixed inset-0 z-[120] bg-black/90 backdrop-blur-sm animate-in fade-in duration-200"
        onClick={(event) => {
          if (event.target === event.currentTarget) {
            closeLightbox();
          }
        }}
        role="dialog"
        aria-modal="true"
        aria-label={image.alt}
      >
        <div className="absolute inset-x-0 top-0 flex items-center justify-between gap-3 px-4 py-4 sm:px-6">
          <div className="rounded-full bg-white/10 px-3 py-1.5 text-xs font-medium text-white/80">
            Click outside or press Esc to close
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => updateScale(scale - ZOOM_STEP)}
              className="h-11 w-11 rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/70"
              aria-label="Zoom out"
            >
              -
            </button>
            <button
              type="button"
              onClick={() => updateScale(scale + ZOOM_STEP)}
              className="h-11 w-11 rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/70"
              aria-label="Zoom in"
            >
              +
            </button>
            <button
              ref={closeButtonRef}
              type="button"
              onClick={closeLightbox}
              className="h-11 w-11 rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/70"
              aria-label="Close image viewer"
            >
              x
            </button>
          </div>
        </div>

        <div
          className="absolute inset-0 flex items-center justify-center px-4 py-20 sm:px-8"
          onWheel={handleWheel}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerCancel={handlePointerUp}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <img
            src={image.src}
            alt={image.alt}
            draggable={false}
            className={`max-h-full max-w-full select-none object-contain transition-transform duration-200 ease-out ${
              scale > 1 ? "cursor-grab" : "cursor-zoom-in"
            } ${isDragging ? "cursor-grabbing" : ""}`}
            style={{
              transform: `translate(${offset.x}px, ${offset.y}px) scale(${scale})`,
            }}
          />
        </div>
      </div>
    );
  }
