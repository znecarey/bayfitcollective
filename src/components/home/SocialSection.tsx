import Image from "next/image";

/**
 * Partnership banner: extra vertical padding makes the strip taller than the original
 * 8px×2 era, while the logo row stays locked to the pre–extra-logos size (40px assets).
 */
const PARTNERSHIP_BANNER_PADDING_Y_PX = 20;
/** Logo row height — matches original `height={40}` / `h-10` partner strip before more brands. */
const PARTNERSHIP_LOGO_ROW_HEIGHT_PX = 40;

const PARTNER_LOGOS = [
  "/images/partner1 copy.png",
  "/images/partner2 copy.png",
  "/images/partner3 copy.png",
  "/images/partner4 copy.png",
  "/images/partner5 copy.png",
  "/images/partner6 copy.png",
  "/images/GU.png",
  "/images/JollofKitchen.png",
  "/images/Kalos_Branding_V1_Text_DarkBlue.png",
  "/images/oakland_spiders.png",
  "/images/Rush%20Oakland%20Logo.png",
  "/images/Berkeley.png",
] as const;

/**
 * Per-logo scale inside the fixed 110×40 slot (overflow clipped when scale > 1).
 * Omitted paths render at 1:1.
 */
const PARTNER_LOGO_SCALE_BY_SRC: Record<string, number> = {
  "/images/partner1 copy.png": 1.80,
  "/images/partner2 copy.png": 1.28,
  "/images/partner4 copy.png": 1.72,
  "/images/partner5 copy.png": 1.32,
  "/images/JollofKitchen.png": 1.62,
  "/images/Berkeley.png": 1.72,
  "/images/Oakland_Spiders.png": 1.52,
  "/images/Rush_Oakland_Logo.png": 2,
};

/** Pulls the slot 2px toward neighbors on each side (tighter gap next to these logos). */
const PARTNER_LOGO_TIGHT_SPACING_SRC = new Set<string>([
  "/images/partner5 copy.png",
  "/images/partner4 copy.png",
  "/images/partner1 copy.png",
  "/images/JollofKitchen.png",
  "/images/Berkeley.png",
]);

function PartnerBannerLogo({ src }: { src: string }) {
  const scale = PARTNER_LOGO_SCALE_BY_SRC[src] ?? 1;
  const tightSpacing = PARTNER_LOGO_TIGHT_SPACING_SRC.has(src);
  const zoomed = scale > 1;

  const image = (
    <Image
      src={src}
      alt="Bay Fit partner logo"
      width={110}
      height={40}
      className="h-10 w-[110px] shrink-0 origin-center object-contain"
      style={zoomed ? { transform: `scale(${scale})` } : undefined}
    />
  );

  if (zoomed) {
    return (
      <span
        className={`flex h-10 w-[110px] shrink-0 items-center justify-center overflow-hidden ${tightSpacing ? "-mx-[2px]" : ""}`}
      >
        {image}
      </span>
    );
  }

  if (tightSpacing) {
    return (
      <span className="block h-10 w-[110px] shrink-0 -mx-[2px]">{image}</span>
    );
  }

  return image;
}

export function SocialSection() {
  return (
    <section className="-mt-px w-full bg-white text-black">
      {/* Partnerships banner directly under \"TOGETHER. WE. CLIMB.\" */}
      <div className="flex items-center border-b border-black/10 bg-[#ffffff]">
        <div
          className="mx-auto flex w-full max-w-9xl flex-col items-center justify-center gap-4 px-6 sm:flex-row sm:justify-between sm:gap-8"
          style={{
            paddingTop: PARTNERSHIP_BANNER_PADDING_Y_PX,
            paddingBottom: PARTNERSHIP_BANNER_PADDING_Y_PX,
          }}
        >
          <p className="heading-font w-full translate-x-[60px] translate-y-[5px] text-center text-sm font-normal uppercase tracking-[0.1em] text-black sm:w-auto sm:shrink-0 sm:text-left md:text-base">
            <em className="italic">Built with brands that move with us</em>
          </p>
          <div
            className="partners-marquee ml-[35px] min-w-0 w-full flex-1 shrink-0 sm:w-auto"
            style={{
              height: PARTNERSHIP_LOGO_ROW_HEIGHT_PX,
              maxHeight: PARTNERSHIP_LOGO_ROW_HEIGHT_PX,
            }}
          >
            <div className="partners-marquee-track h-full gap-8 sm:gap-10">
              {[0, 1].map((dup) =>
                PARTNER_LOGOS.map((src) => (
                  <PartnerBannerLogo key={`${dup}-${src}`} src={src} />
                )),
              )}
            </div>
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
