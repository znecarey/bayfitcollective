import Image from "next/image";
import type { CalendarEvent } from "./calendarEvents";

const buttonBase =
  "inline-flex items-center justify-center rounded-full text-sm font-semibold tracking-wide transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-black";

type EventCardProps = {
  event: CalendarEvent;
};

function RSVPButton({ event }: { event: CalendarEvent }) {
  if (event.href) {
    return (
      <a
        href={event.href}
        target="_blank"
        rel="noopener noreferrer"
        className={`${buttonBase} bg-black text-white hover:bg-zinc-900 px-5 py-2.5 ring-offset-background`}
      >
        Join / RSVP
      </a>
    );
  }
  return (
    <span
      className={`${buttonBase} cursor-default border border-black/15 px-5 py-2.5 text-black/50 ring-offset-background`}
      aria-hidden
    >
      RSVP coming soon
    </span>
  );
}

function FeaturedRSVPButton({ event }: { event: CalendarEvent }) {
  if (event.href) {
    return (
      <a
        href={event.href}
        target="_blank"
        rel="noopener noreferrer"
        className={`${buttonBase} bg-black text-white hover:bg-zinc-900 px-10 py-4 text-[18px] ring-offset-background`}
      >
        Join / RSVP
      </a>
    );
  }
  return (
    <span
      className={`${buttonBase} cursor-default border border-black/15 px-10 py-4 text-[18px] text-black/50 ring-offset-background`}
      aria-hidden
    >
      RSVP coming soon
    </span>
  );
}

export function EventCard({ event }: EventCardProps) {
  return (
    <article className="flex flex-col overflow-hidden rounded-2xl border border-black/10 bg-white shadow-sm">
      {event.image ? (
        <div className="relative aspect-[16/10] w-full">
          <Image
            src={event.image}
            alt=""
            fill
            className="object-cover"
            sizes="(min-width: 768px) 50vw, 100vw"
          />
        </div>
      ) : (
        <div className="aspect-[16/10] w-full bg-[#f0f0f0]" />
      )}
      <div
        className={`flex flex-1 flex-col gap-2 p-5 ${event.hideCardDetails ? "items-center justify-center py-8" : ""}`}
      >
        {event.hideCardDetails ? null : (
          <>
            <h3 className="text-base font-semibold text-black">{event.title}</h3>
            <p className="text-sm text-black/70">{event.dateLabel}</p>
            <p className="text-sm text-black/70">{event.timeLabel}</p>
            <p className="text-xs text-black/70">{event.location}</p>
            {event.description ? (
              <p className="mt-1 line-clamp-2 text-sm text-black/75">
                {event.description}
              </p>
            ) : null}
          </>
        )}
        <div className={event.hideCardDetails ? "" : "mt-4"}>
          <RSVPButton event={event} />
        </div>
      </div>
    </article>
  );
}

/** Full-bleed featured band: flyer left / title + RSVP right (layout preview). */
export function FeaturedEventCard({ event }: EventCardProps) {
  const flyerHeightRem = 20 * (event.featuredFlyerZoom ?? 1);

  return (
    <article className="w-full rounded-none border-x-0 border-y border-black/10 bg-white shadow-none">
      <div className="grid w-full grid-cols-1 md:grid-cols-[4fr_6fr] md:items-center">
        {/* Left: flyer only — height sized for zoom so nothing clips at section edges */}
        <div className="flex w-full min-w-0 items-center justify-center bg-white px-3 py-8 sm:px-4 sm:py-10 md:px-5 md:py-12">
          <div
            className="relative w-full max-w-[28rem] md:max-w-none"
            style={{ height: `${flyerHeightRem}rem` }}
          >
            {event.image ? (
              <Image
                src={event.image}
                alt=""
                fill
                className="object-contain object-center"
                sizes="(min-width: 768px) 40vw, 100vw"
                priority
              />
            ) : (
              <div className="absolute inset-0 bg-[#f0f0f0]" />
            )}
          </div>
        </div>
        {/* Right: title, then Join / RSVP below */}
        <div className="flex min-w-0 flex-col items-center justify-center gap-6 px-6 py-8 text-center sm:px-10 sm:py-10 md:items-center md:px-10 md:py-12 lg:px-14">
          <h2 className="heading-font w-full text-2xl font-normal uppercase tracking-[0.08em] text-black sm:text-3xl">
            {event.title}
          </h2>
          <FeaturedRSVPButton event={event} />
        </div>
      </div>
    </article>
  );
}
