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
    image: "/images/brandan1.png",
    photoZoom: 1.5,
    photoTranslateYPx: -10,
  },
  {
    id: "dav",
    name: "Dav",
    role: "Head of Lifestyle & Apparel",
    image: "/images/dav.png",
  },
  {
    id: "zane",
    name: "Zane",
    role: "Head of Product & Design",
    image: "/images/zane1.png",
    photoZoom: 1.11,
    photoTranslateYPx: 10,
    photoObjectClass: "object-center",
  },
  {
    id: "dwight",
    name: "Dwight",
    role: "Creative Director",
    image: "/images/dwight.png",
    photoObjectClass: "object-top",
  },
];

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
      <div className="mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-10">
        <div className="flex flex-col gap-10">
        <h2 className="heading-font text-center text-4xl font-normal uppercase tracking-[0.18em] text-black sm:text-5xl">
          Meet The Team
        </h2>
        <div className="grid justify-items-center gap-x-3 gap-y-10 md:grid-cols-3 lg:grid-cols-5">
          {team.map((member) => (
            <div key={member.id} className="flex flex-col gap-4">
              <div className="relative mx-auto aspect-square h-56 w-56 overflow-hidden rounded-full border border-black/10 bg-[#f5f5f5] sm:h-60 sm:w-60 md:h-64 md:w-64 lg:h-52 lg:w-52 xl:h-56 xl:w-56">
                {member.image ? (
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className={`object-cover ${member.photoObjectClass ?? "object-center"}`}
                    style={teamPhotoStyle(member)}
                    sizes="(min-width: 1024px) 240px, 50vw"
                  />
                ) : (
                  <div className="flex h-full items-center justify-center text-xs font-semibold uppercase tracking-[0.2em] text-black/40">
                    Photo coming soon
                  </div>
                )}
              </div>
              <div className="flex flex-col gap-1 text-center">
                <p className="text-lg font-semibold text-black sm:text-xl">
                  {member.name}
                </p>
                <p className="text-sm text-black/80 sm:text-base">
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
