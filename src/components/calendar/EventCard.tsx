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
      <div className="flex flex-1 flex-col gap-2 p-5">
        <h3 className="text-base font-semibold text-black">{event.title}</h3>
        <p className="text-sm text-black/70">{event.dateLabel}</p>
        <p className="text-sm text-black/70">{event.timeLabel}</p>
        <p className="text-xs text-black/70">{event.location}</p>
        {event.description ? (
          <p className="mt-1 line-clamp-2 text-sm text-black/75">
            {event.description}
          </p>
        ) : null}
        <div className="mt-4">
          <RSVPButton event={event} />
        </div>
      </div>
    </article>
  );
}

/** Full-bleed featured band: 30% flyer (full image visible) / 70% title, meta, description, RSVP. */
export function FeaturedEventCard({ event }: EventCardProps) {
  return (
    <article className="w-full overflow-hidden rounded-none border-x-0 border-y border-black/10 bg-white shadow-none">
      <div className="grid w-full grid-cols-1 md:grid-cols-[3fr_7fr] md:items-stretch">
        {/* Left ~30%: full flyer, object-contain (letterboxing top/bottom as needed) */}
        <div className="relative min-h-[min(100vw,20rem)] min-w-0 w-full bg-white md:min-h-0 md:h-full">
          {event.image ? (
            <Image
              src={event.image}
              alt=""
              fill
              className="object-contain object-center"
              sizes="(min-width: 768px) 30vw, 100vw"
              priority
            />
          ) : (
            <div className="absolute inset-0 bg-[#f0f0f0]" />
          )}
        </div>
        {/* Right ~70%: title, details, description, CTA */}
        <div className="flex min-w-0 flex-col items-stretch justify-center gap-3 px-6 py-8 text-center sm:px-10 sm:py-10 md:px-10 md:py-12 lg:px-14">
          <h2 className="heading-font w-full text-2xl font-normal uppercase tracking-[0.08em] text-black sm:text-3xl">
            {event.title}
          </h2>
          <p className="w-full text-[17px] leading-[1.35] text-black/70">{event.dateLabel}</p>
          <p className="w-full text-[17px] leading-[1.35] text-black/70">{event.timeLabel}</p>
          <p className="w-full text-[17px] leading-[1.35] text-black/70">{event.location}</p>
          {event.description ? (
            <p className="mt-2 w-full max-w-full whitespace-pre-line text-sm leading-relaxed text-black/80">
              {event.description}
            </p>
          ) : null}
          <div className="mt-4 flex w-full justify-center">
            {event.href ? (
              <a
                href={event.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`${buttonBase} bg-black text-white hover:bg-zinc-900 px-10 py-4 text-[18px] ring-offset-background`}
              >
                Join / RSVP
              </a>
            ) : (
              <span
                className={`${buttonBase} cursor-default border border-black/15 px-10 py-4 text-[18px] text-black/50 ring-offset-background`}
                aria-hidden
              >
                RSVP coming soon
              </span>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}
