import { Container } from "../ui/Container";
import { EventCard, type Event } from "./EventCard";
import { PeachBanner } from "../ui/PeachBanner";

const events: Event[] = [
  {
    id: "1",
    date: "SAT • APR 18 • 9:00 AM",
    title: "Bay Fit Run Club — Lake Merritt",
    location: "Lake Merritt, Oakland",
  },
  {
    id: "2",
    date: "SUN • APR 26 • 10:30 AM",
    title: "Sunday Flow — Community Yoga",
    location: "Mission District, San Francisco",
  },
  {
    id: "3",
    date: "THU • MAY 1 • 6:30 PM",
    title: "Culture & Conditioning — Evening Session",
    location: "Downtown Oakland",
  },
];

export function UpcomingEvents() {
  return (
    <section className="bg-white py-14 sm:py-18">
      <Container className="flex flex-col gap-8">
        <div className="flex flex-col gap-3">
          <h2 className="text-xl font-extrabold uppercase tracking-[0.18em] text-black sm:text-2xl">
            Upcoming Events
          </h2>
          <p className="max-w-2xl text-sm text-black/75 sm:text-base">
            Pull up, move with us, and meet the Bay Fit fam. RSVP links will
            live here as we plug in platforms like Partiful and Strava.
          </p>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {events.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </Container>
      <PeachBanner
        title="Calendar & Events"
        className="mt-10 border-t border-black/5"
        subtitle="This section is ready for a full calendar embed from Partiful, Strava, or other event platforms."
      >
        <div
          id="calendar-embed"
          className="mt-4 flex min-h-[320px] items-center justify-center rounded-2xl border border-dashed border-black/25 bg-white/60 text-center text-xs font-semibold uppercase tracking-[0.22em] text-black/50"
        >
          Events from Partiful, Strava &amp; more will display here.
        </div>
      </PeachBanner>
    </section>
  );
}

