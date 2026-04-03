import { Container } from "../ui/Container";
import {
  calendarEvents,
  featuredEventId,
} from "./calendarEvents";
import { EventCard, FeaturedEventCard } from "./EventCard";

const featured = calendarEvents.find((e) => e.id === featuredEventId);
const upcoming = calendarEvents.filter((e) => e.id !== featuredEventId);

export function UpcomingEvents() {
  return (
    <section className="bg-white py-14 sm:py-20">
      {/* Featured band: ~100px from viewport edges on md+; tighter padding on small screens */}
      {featured ? (
        <div
          id="featured-event"
          className="scroll-mt-6 w-full px-4 sm:px-8 md:px-[100px]"
        >
          <FeaturedEventCard event={featured} />
        </div>
      ) : null}

      <Container
        className={`flex flex-col gap-12 ${featured ? "mt-12 sm:mt-16" : ""}`}
      >
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <h2 className="heading-font text-xl font-normal uppercase tracking-[0.18em] text-black sm:text-2xl">
              Upcoming Events
            </h2>
            <div className="text-left md:text-right">
              <p className="heading-font text-base font-normal uppercase tracking-[0.12em] text-black sm:text-lg">
                Join the movement.
              </p>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-black/80 sm:text-base">
                Let&apos;s Climb Together.
              </p>
            </div>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {upcoming.slice(0, 6).map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
