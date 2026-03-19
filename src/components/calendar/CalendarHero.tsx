import Link from "next/link";
import { Container } from "../ui/Container";

type CalendarHeroProps = {
  /** When set, the primary CTA links to this URL (e.g. featured event RSVP). Opens in new tab. */
  featuredEventHref?: string;
};

export function CalendarHero({ featuredEventHref }: CalendarHeroProps) {
  return (
    <section className="bg-[#f4f4f4] py-14 sm:py-20">
      <Container className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div className="flex-1 space-y-4">
          <h1 className="heading-font text-3xl font-normal uppercase leading-tight tracking-[0.16em] text-black sm:text-4xl">
            Upcoming Events
          </h1>
          <p className="max-w-xl text-sm leading-7 text-black/75 sm:text-base">
            From workouts and run clubs to community gatherings, this is where
            Bay Fit shows up. Move with us, connect, and find your crew.
          </p>
          <div className="pt-2">
            {featuredEventHref ? (
              <a
                href={featuredEventHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-black px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-zinc-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2"
              >
                Join the Next Event
              </a>
            ) : (
              <Link
                href="/calendar#featured-event"
                className="inline-flex items-center justify-center rounded-full bg-black px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-zinc-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2"
              >
                Join the Next Event
              </Link>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
