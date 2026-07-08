"use client";

import { useEffect, useRef, useCallback, useState } from "react";

interface ProductLightboxProps {
  src: string;
  alt: string;
  onClose: () => void;
}

const MIN_SCALE = 1;
const MAX_SCALE = 5;
const ZOOM_STEP = 0.3;

export default function ProductLightbox({ src, alt, onClose }: ProductLightboxProps) {
  const [scale, setScale] = useState(1);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);

  // Refs for drag tracking
  const dragStart = useRef<{ x: number; y: number; ox: number; oy: number } | null>(null);
  // Refs for pinch tracking
  const lastPinchDist = useRef<number | null>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  // Lock body scroll on mount, restore on unmount
  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, []);

  // ESC key to close
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  // Clamp offset so the image doesn't drift off screen when zoomed
  const clampOffset = useCallback(
    (x: number, y: number, s: number) => {
      if (s <= 1) return { x: 0, y: 0 };
      const el = imgRef.current;
      if (!el) return { x, y };
      const maxX = (el.clientWidth * (s - 1)) / 2;
      const maxY = (el.clientHeight * (s - 1)) / 2;
      return {
        x: Math.max(-maxX, Math.min(maxX, x)),
        y: Math.max(-maxY, Math.min(maxY, y)),
      };
    },
    []
  );

  // ── Mouse wheel zoom ──────────────────────────────────────────────────────
  const onWheel = useCallback(
    (e: React.WheelEvent) => {
      e.stopPropagation();
      setScale((prev) => {
        const next = Math.max(MIN_SCALE, Math.min(MAX_SCALE, prev - e.deltaY * 0.001 * ZOOM_STEP * 10));
        if (next <= 1) setOffset({ x: 0, y: 0 });
        else setOffset((o) => clampOffset(o.x, o.y, next));
        return next;
      });
    },
    [clampOffset]
  );

  // ── Mouse drag ────────────────────────────────────────────────────────────
  const onMouseDown = useCallback(
    (e: React.MouseEvent) => {
      if (scale <= 1) return;
      e.preventDefault();
      setIsDragging(true);
      dragStart.current = { x: e.clientX, y: e.clientY, ox: offset.x, oy: offset.y };
    },
    [scale, offset]
  );

  const onMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (!isDragging || !dragStart.current) return;
      const dx = e.clientX - dragStart.current.x;
      const dy = e.clientY - dragStart.current.y;
      setOffset(clampOffset(dragStart.current.ox + dx, dragStart.current.oy + dy, scale));
    },
    [isDragging, scale, clampOffset]
  );

  const onMouseUp = useCallback(() => {
    setIsDragging(false);
    dragStart.current = null;
  }, []);

  // ── Touch pinch + drag ────────────────────────────────────────────────────
  const onTouchStart = useCallback(
    (e: React.TouchEvent) => {
      if (e.touches.length === 2) {
        const dx = e.touches[0].clientX - e.touches[1].clientX;
        const dy = e.touches[0].clientY - e.touches[1].clientY;
        lastPinchDist.current = Math.hypot(dx, dy);
      } else if (e.touches.length === 1 && scale > 1) {
        dragStart.current = {
          x: e.touches[0].clientX,
          y: e.touches[0].clientY,
          ox: offset.x,
          oy: offset.y,
        };
        setIsDragging(true);
      }
    },
    [scale, offset]
  );

  const onTouchMove = useCallback(
    (e: React.TouchEvent) => {
      e.preventDefault(); // prevent page scroll while zooming/panning
      if (e.touches.length === 2 && lastPinchDist.current !== null) {
        const dx = e.touches[0].clientX - e.touches[1].clientX;
        const dy = e.touches[0].clientY - e.touches[1].clientY;
        const dist = Math.hypot(dx, dy);
        const delta = dist - lastPinchDist.current;
        lastPinchDist.current = dist;
        setScale((prev) => {
          const next = Math.max(MIN_SCALE, Math.min(MAX_SCALE, prev + delta * 0.01));
          if (next <= 1) setOffset({ x: 0, y: 0 });
          else setOffset((o) => clampOffset(o.x, o.y, next));
          return next;
        });
      } else if (e.touches.length === 1 && isDragging && dragStart.current) {
        const dx = e.touches[0].clientX - dragStart.current.x;
        const dy = e.touches[0].clientY - dragStart.current.y;
        setOffset(clampOffset(dragStart.current.ox + dx, dragStart.current.oy + dy, scale));
      }
    },
    [isDragging, scale, clampOffset]
  );

  const onTouchEnd = useCallback((e: React.TouchEvent) => {
    if (e.touches.length < 2) lastPinchDist.current = null;
    if (e.touches.length === 0) {
      setIsDragging(false);
      dragStart.current = null;
    }
  }, []);

  // ── Zoom buttons ──────────────────────────────────────────────────────────
  const zoomIn = useCallback(() => {
    setScale((prev) => {
      const next = Math.min(MAX_SCALE, prev + ZOOM_STEP);
      if (next <= 1) setOffset({ x: 0, y: 0 });
      else setOffset((o) => clampOffset(o.x, o.y, next));
      return next;
    });
  }, [clampOffset]);

  const zoomOut = useCallback(() => {
    setScale((prev) => {
      const next = Math.max(MIN_SCALE, prev - ZOOM_STEP);
      if (next <= 1) setOffset({ x: 0, y: 0 });
      else setOffset((o) => clampOffset(o.x, o.y, next));
      return next;
    });
  }, [clampOffset]);

  // ── Click backdrop to close (not the image itself) ────────────────────────
  const onBackdropClick = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (e.target === overlayRef.current) onClose();
    },
    [onClose]
  );

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/85 select-none"
      onClick={onBackdropClick}
      aria-modal="true"
      role="dialog"
      aria-label={`Image preview: ${alt}`}
    >
      {/* ── Image wrapper ── */}
      <div
        className="relative flex items-center justify-center w-full h-full"
        onWheel={onWheel}
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUp}
        onMouseLeave={onMouseUp}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
        style={{ cursor: scale > 1 ? (isDragging ? "grabbing" : "grab") : "zoom-in" }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          ref={imgRef}
          src={src}
          alt={alt}
          draggable={false}
          className="max-w-[90vw] max-h-[85vh] object-contain pointer-events-none select-none transition-transform duration-100 ease-out"
          style={{
            transform: `translate(${offset.x}px, ${offset.y}px) scale(${scale})`,
            transformOrigin: "center center",
          }}
        />
      </div>

      {/* ── Close button ── */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-10 flex items-center justify-center w-10 h-10 rounded-full bg-white/15 hover:bg-white/30 text-white transition-colors backdrop-blur-sm"
        aria-label="Close image preview"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      {/* ── Zoom controls (desktop visible, mobile hidden — use pinch) ── */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 hidden sm:flex items-center gap-2 bg-white/15 backdrop-blur-sm rounded-full px-3 py-1.5">
        <button
          onClick={zoomOut}
          disabled={scale <= MIN_SCALE}
          className="w-7 h-7 flex items-center justify-center text-white hover:text-[#EB5324] disabled:opacity-30 transition-colors"
          aria-label="Zoom out"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M20 12H4" />
          </svg>
        </button>
        <span className="text-white text-[11px] font-bold w-10 text-center tabular-nums">
          {Math.round(scale * 100)}%
        </span>
        <button
          onClick={zoomIn}
          disabled={scale >= MAX_SCALE}
          className="w-7 h-7 flex items-center justify-center text-white hover:text-[#EB5324] disabled:opacity-30 transition-colors"
          aria-label="Zoom in"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16M4 12h16" />
          </svg>
        </button>
      </div>

      {/* ── Mobile hint ── */}
      <p className="absolute bottom-5 left-1/2 -translate-x-1/2 sm:hidden text-white/50 text-[10px] font-medium tracking-wider uppercase pointer-events-none">
        Pinch to zoom · Drag to pan
      </p>
    </div>
  );
}
