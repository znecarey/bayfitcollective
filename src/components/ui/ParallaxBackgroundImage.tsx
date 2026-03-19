"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

type ParallaxBackgroundImageProps = {
  src: string;
  alt: string;
  /** Lower = subtler. Recommended 0.08–0.18. */
  strength?: number;
  /** Disable parallax under this breakpoint (px). */
  minWidthPx?: number;
  quality?: number;
  priority?: boolean;
  className?: string;
};

export function ParallaxBackgroundImage({
  src,
  alt,
  strength = 0.12,
  minWidthPx = 768,
  quality,
  priority,
  className,
}: ParallaxBackgroundImageProps) {
  const layerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = layerRef.current;
    if (!el) return;

    const reduceMotion =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;
    const largeEnough =
      typeof window !== "undefined" &&
      window.matchMedia?.(`(min-width: ${minWidthPx}px)`)?.matches;

    if (reduceMotion || !largeEnough) {
      el.style.transform = "translate3d(0,0,0)";
      return;
    }

    let rafId = 0;
    const onScroll = () => {
      if (rafId) return;
      rafId = window.requestAnimationFrame(() => {
        rafId = 0;
        const y = window.scrollY || 0;
        const offset = Math.round(y * strength);
        el.style.transform = `translate3d(0, ${offset}px, 0)`;
      });
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (rafId) window.cancelAnimationFrame(rafId);
    };
  }, [minWidthPx, strength]);

  return (
    <div
      ref={layerRef}
      className={`pointer-events-none absolute inset-0 z-0 will-change-transform ${
        className ?? ""
      }`}
      aria-hidden
    >
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover object-center"
        sizes="100vw"
        quality={quality}
        priority={priority}
      />
    </div>
  );
}

