import Image from "next/image";

// About page social strip + ticker WITHOUT the partner banner row
export function SocialSection() {
  return (
    <section className="-mt-px w-full bg-white text-black">
      {/* Social image strip */}
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


