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

/** Prominent featured event card: flyer left, event info right. */
export function FeaturedEventCard({ event }: EventCardProps) {
  return (
    <article className="overflow-hidden rounded-2xl border border-black/10 bg-white shadow-md">
      {/*
        Exactly two columns on md+: ~25% flyer / ~75% copy.
        Flyer uses object-contain + center so it scales to this column only — no empty “third zone” in the middle.
      */}
      <div className="grid w-full grid-cols-1 md:grid-cols-[1fr_3fr] md:items-stretch">
        {/* Left: flyer (one grid track only) */}
        <div className="relative min-h-[min(100vw,22rem)] min-w-0 w-full md:min-h-0 md:h-full">
          {event.image ? (
            <Image
              src={event.image}
              alt=""
              fill
              className="object-contain object-center"
              sizes="(min-width: 768px) 25vw, 100vw"
              priority
            />
          ) : (
            <div className="absolute inset-0 bg-[#f0f0f0]" />
          )}
        </div>
        {/* Right: event info (second grid track only) */}
        <div className="flex min-w-0 flex-col items-stretch justify-center gap-3 p-5 text-center sm:p-6">
          <h2 className="heading-font w-full text-2xl font-normal uppercase tracking-[0.08em] text-black sm:text-3xl">
            {event.title}
          </h2>
          <p className="w-full text-[17px] leading-[1.35] text-black/70">{event.dateLabel}</p>
          <p className="w-full text-[17px] leading-[1.35] text-black/70">{event.timeLabel}</p>
          <p className="w-full text-[17px] leading-[1.35] text-black/70">{event.location}</p>
          {event.description ? (
            <p className="mt-2 w-full max-w-full text-sm leading-relaxed text-black/80">
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
