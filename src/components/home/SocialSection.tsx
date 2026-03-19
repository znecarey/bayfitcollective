import type { CSSProperties } from "react";
import Image from "next/image";

/**
 * Partnership banner vertical padding (px), applied to top AND bottom of the inner row.
 * This always changes how tall the strip feels (unlike min-height, which cannot shrink
 * below the logos + text).
 *
 * Optional: set a minimum total block height — only adds space when content is shorter.
 */
const PARTNERSHIP_BANNER_PADDING_Y_PX = 8;
const PARTNERSHIP_BANNER_MIN_HEIGHT_PX: number | undefined = undefined; // e.g. 112 to force a taller band

export function SocialSection() {
  const partnershipBannerStyle: CSSProperties = {
    ...(PARTNERSHIP_BANNER_MIN_HEIGHT_PX != null
      ? { minHeight: `${PARTNERSHIP_BANNER_MIN_HEIGHT_PX}px` }
      : {}),
  };

  return (
    <section className="-mt-px w-full bg-white text-black">
      {/* Partnerships banner directly under \"TOGETHER. WE. CLIMB.\" */}
      <div
        className="flex items-center border-b border-black/10 bg-[#ffffff]"
        style={partnershipBannerStyle}
      >
        <div
          className="mx-auto flex w-full max-w-9xl flex-col flex-wrap items-center justify-center gap-4 px-6 sm:flex-row sm:justify-between sm:gap-8"
          style={{
            paddingTop: PARTNERSHIP_BANNER_PADDING_Y_PX,
            paddingBottom: PARTNERSHIP_BANNER_PADDING_Y_PX,
          }}
        >
          <p className="heading-font translate-x-[60px] translate-y-[5px] text-center text-sm font-normal uppercase tracking-[0.1em] text-black sm:shrink-0 sm:text-left md:text-base">
            <em className="italic">Built with brands that move with us</em>
          </p>
          <div className="flex flex-1 flex-wrap items-center justify-center gap-8 sm:gap-10">
            {[
              "/images/partner1 copy.png",
              "/images/partner2 copy.png",
              "/images/partner3 copy.png",
              "/images/partner4 copy.png",
              "/images/partner5 copy.png",
              "/images/partner6 copy.png",
            ].map((src) => (
              <Image
                key={src}
                src={src}
                alt="Bay Fit partner logo"
                width={110}
                height={40}
                className="object-contain"
              />
            ))}
          </div>
        </div>
      </div>

      {/* Social image strip above ticker */}
      <div className="relative aspect-[22/4.5] w-full overflow-hidden">
        <Image
          src="/images/Frame5.png"
          alt="Bay Fit Collective community socials strip"
          fill
          className="object-cover object-center"
          sizes="100vw"
        />
      </div>

      {/* Animated @bayfitco social ticker */}
      <div className="ticker overflow-hidden border-b border-black/10 bg-black text-white">
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
              {/* Logo between series */}
              <span className="ml-6 flex items-center">
                <span className="relative h-4 w-8 sm:h-5 sm:w-10">
                  <Image
                    src="/images/Bayfitwhitelogo.png"
                    alt="Bay Fit Collective logo"
                    fill
                    className="object-contain"
                    sizes="40px"
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
