import type { CSSProperties } from "react";
import Image from "next/image";

export type TeamMember = {
  id: string;
  name: string;
  role: string;
  image: string;
  /**
   * Zoom: `1` = default. Above 1 zooms in (tighter crop); below 1 zooms out (more context).
   */
  photoZoom?: number;
  /**
   * Rotation in degrees. Positive = clockwise, negative = counter-clockwise.
   */
  photoRotateDeg?: number;
  /** Vertical nudge in px. Positive moves the image down inside the circle. */
  photoTranslateYPx?: number;
  /** Horizontal nudge in px. Positive moves the image right. */
  photoTranslateXPx?: number;
  /** Tailwind `object-*` utilities, e.g. `object-top`, `object-center`. */
  photoObjectClass?: string;
  /** CSS `transform-origin` (e.g. `center`, `top center`). */
  photoTransformOrigin?: string;
  /** Margin above the circular photo block (shifts the photo container down in the column). */
  photoMarginTopPx?: number;
};

const team: TeamMember[] = [
  {
    id: "logan",
    name: "Logan",
    role: "Head of Brand & Partnerships",
    image: "/images/logan.png",
  },
  {
    id: "brandan",
    name: "Brandan",
    role: "Head of Community & Outreach",
    image: "/images/brandan.png",
    photoObjectClass: "object-[center_15%]"
  },
  {
    id: "dav",
    name: "Dav",
    role: "Head of Lifestyle & Apparel",
    image: "/images/dav.png",
    /** Between center + top so face sits slightly higher in the circle than pure center crop */
    photoObjectClass: "object-[center_20%]",
    photoTransformOrigin: "center center",
  },
  {
    id: "zane",
    name: "Zane",
    role: "Head of Product & Design",
    image: "/images/zane1.png",
    photoZoom: 1.30,
    photoTranslateYPx: 20,
    photoObjectClass: "object-center",
  },
  {
    id: "dwight",
    name: "Dwight",
    role: "Creative Director",
    image: "/images/dwight.png",
    photoObjectClass: "object-top",
  },
  {
    id: "derrick",
    name: "Derrick",
    role: "Apparel & Creative Operations",
    image: "/images/derrick.png",
    photoObjectClass: "object-top",
  },
];

/** Bump when swapping images at the same filename so browsers/CDNs fetch fresh assets. */
const TEAM_IMAGE_CACHE_BUST = "202604281758";

function teamImageSrc(src: string): string {
  const separator = src.includes("?") ? "&" : "?";
  return `${src}${separator}v=${TEAM_IMAGE_CACHE_BUST}`;
}

function teamPhotoStyle(member: TeamMember): CSSProperties {
  const zoom = member.photoZoom ?? 1;
  const deg = member.photoRotateDeg ?? 0;
  const ty = member.photoTranslateYPx ?? 0;
  const tx = member.photoTranslateXPx ?? 0;
  const hasTransform =
    zoom !== 1 || deg !== 0 || tx !== 0 || ty !== 0;

  const style: CSSProperties = {};
  if (member.photoTransformOrigin) {
    style.transformOrigin = member.photoTransformOrigin;
  }
  if (hasTransform) {
    const parts: string[] = [];
    if (tx !== 0 || ty !== 0) {
      parts.push(`translate(${tx}px, ${ty}px)`);
    }
    parts.push(`scale(${zoom})`);
    if (deg !== 0) {
      parts.push(`rotate(${deg}deg)`);
    }
    style.transform = parts.join(" ");
  }
  return style;
}

export function MeetTeamSection() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto w-full max-w-[min(96rem,calc(100vw-3rem))] px-6 sm:px-8 lg:px-10">
        <div className="flex flex-col gap-10">
          <h2 className="heading-font text-center text-4xl font-normal uppercase tracking-[0.18em] text-black sm:text-5xl">
            Meet The Team
          </h2>

          <div className="flex w-full flex-nowrap justify-between gap-x-2 py-1 sm:gap-x-4 lg:gap-x-6">
            {team.map((member) => (
              <div key={member.id} className="flex min-w-0 flex-1 flex-col gap-4">
                <div
                  className="relative mx-auto aspect-square h-24 w-24 overflow-hidden rounded-full border border-black/10 bg-[#f5f5f5] sm:h-32 sm:w-32 md:h-36 md:w-36 lg:h-40 lg:w-40 xl:h-44 xl:w-44"
                  style={
                    member.photoMarginTopPx != null
                      ? { marginTop: member.photoMarginTopPx }
                      : undefined
                  }
                >
                  {member.image ? (
                    <Image
                      src={teamImageSrc(member.image)}
                      alt={member.name}
                      fill
                      className={`object-cover ${member.photoObjectClass ?? "object-center"}`}
                      style={teamPhotoStyle(member)}
                      sizes="(min-width: 1280px) 176px, (min-width: 1024px) 160px, (min-width: 768px) 144px, (min-width: 640px) 128px, 96px"
                    />
                  ) : (
                    <div className="flex h-full items-center justify-center text-xs font-semibold uppercase tracking-[0.2em] text-black/40">
                      Photo coming soon
                    </div>
                  )}
                </div>
                <div className="flex flex-col gap-1 text-center">
                  <p className="text-base font-semibold leading-tight text-black sm:text-xl">
                    {member.name}
                  </p>
                  <p className="text-[11px] leading-snug text-black/80 sm:text-base">
                    {member.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
