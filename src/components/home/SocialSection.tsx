import Image from "next/image";

export function SocialSection() {
  return (
    <section className="-mt-px w-full bg-[#064e3b] text-white">
      {/* Animated @bayfitco social ticker */}
      <div className="ticker overflow-hidden border-b border-white/10">
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
                    <span className="text-xs opacity-60">•</span>
                  ) : null}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Social image strip below banner */}
      <div className="relative aspect-[22/4.5] w-full overflow-hidden">
        <Image
          src="/images/Frame5.png"
          alt="Bay Fit Collective community socials strip"
          fill
          className="object-cover object-center"
          sizes="100vw"
        />
      </div>
    </section>
  );
}
