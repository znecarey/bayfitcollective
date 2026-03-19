"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type Slide = {
  src: string;
  alt: string;
};

type AboutSlideshowProps = {
  slides: Slide[];
  intervalMs?: number;
};

export function AboutSlideshow({ slides, intervalMs = 5000 }: AboutSlideshowProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (!slides.length || isPaused) return;

    const id = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, intervalMs);

    return () => clearInterval(id);
  }, [slides.length, intervalMs, isPaused]);

  if (!slides.length) {
    return null;
  }

  return (
    <div
      className="relative mx-auto aspect-[4.55/5] w-full max-w-lg overflow-visible lg:mx-0 lg:max-w-md"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {slides.map((slide, index) => {
        const isActive = index === currentIndex;
        const offset = (index - currentIndex + slides.length) % slides.length;

        // Only show a few stacked layers for clarity
        if (offset > 2 && offset < slides.length - 2) {
          return null;
        }

        const baseTranslateX = offset * 16;

        return (
          <div
            key={slide.src}
            className="absolute inset-0 rounded-2xl border border-black/5 bg-gray-100 shadow-md transition-all duration-700 ease-out"
            style={{
              transform: `translate(${baseTranslateX}px, 0px)`,
              opacity: isActive ? 1 : 0.7,
              zIndex: isActive ? 30 : 20 - offset,
            }}
          >
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              className="rounded-2xl object-cover"
              sizes="(min-width: 1024px) 640px, 100vw"
            />
          </div>
        );
      })}
    </div>
  );
}

