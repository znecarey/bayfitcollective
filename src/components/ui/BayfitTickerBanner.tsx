"use client";

import Image from "next/image";

export function BayfitTickerBanner() {
  return (
    <section className="-mt-px w-full bg-black text-white">
      <div className="ticker overflow-hidden border-t border-white/10 border-b border-white/10">
        <div className="ticker-track">
          {Array.from({ length: 3 }).map((_, dupIndex) => (
            <div
              key={dupIndex}
              className="flex items-center gap-6 px-6 py-3 text-xs font-semibold uppercase tracking-[0.28em] sm:py-4 sm:text-sm"
            >
              {Array.from({ length: 8 }).map((_, itemIndex) => (
                <span
                  key={`${dupIndex}-${itemIndex}`}
                  className="flex items-center gap-2"
                >
                  <span className="heading-font">@bayfitco</span>
                  {itemIndex < 7 ? (
                    <span className="text-xs opacity-40">•</span>
                  ) : null}
                </span>
              ))}
              <span className="ml-6 flex items-center">
                <span className="relative h-4 w-8 sm:h-5 sm:w-10">
                  <Image
                    src="/images/Bayfitwhitelogo.png"
                    alt="Bay Fit Collective logo"
                    fill
                    className="object-contain"
                    sizes="40px"
                    priority
                  />
                </span>
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

