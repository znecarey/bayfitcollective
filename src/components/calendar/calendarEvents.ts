/**
 * Calendar event data for the event feed.
 * Update titles, dates, times, locations, images, and links here.
 *
 * Featured event (`featuredEventId`) powers the full-bleed card on `/calendar`.
 *
 * Future: swap this module for weekly updates without TS edits by loading JSON
 * (e.g. `public/data/featured-event.json` + `fetch` in a Server Component with
 * `revalidate`), a headless CMS (Sanity/Contentful), or a hosted blob URL with ISR.
 * Keep the same `CalendarEvent` shape for a drop-in replacement.
 */

export type CalendarEvent = {
  id: string;
  title: string;
  /** Display date, e.g. "Friday, March 21" */
  dateLabel: string;
  /** Display time, e.g. "11:00am - 2:00pm PST" */
  timeLabel: string;
  location: string;
  description?: string;
  image?: string;
  /** External RSVP link (Partiful, Strava, SweatPals, etc.). Opens in new tab. */
  href?: string;
};

/** ID of the event to feature in the hero-style card. */
export const featuredEventId = "2";

export const calendarEvents: CalendarEvent[] = [
  {
    id: "2",
    title: "The Night Shift",
    dateLabel: "Friday, April 25",
    timeLabel: "5:00pm - 8:00pm PST",
    location: "2341 San Pablo Ave, Oakland CA 94612",
    description: `When the sun goes down, we clock in. 🌅

The Night Shift is pulling up to Get Bent Training for a HIIT + Circuit Workout built to move the community, bring the energy, and set the tone for the season.

Expect fuel, a live DJ set, vendors, and nothing but good people and good vibes.

RSVP required. Early arrival highly encouraged.

#TogetherWeClimb`,
    image: "/images/Night%20shift%204.25%20-%202.PNG",
    href: "https://partiful.com/e/TcmQLkcopQVzAtEArbc6?source=share&c=Crcnz4EW",
  },
  {
    id: "3",
    title: "The Handoff",
    dateLabel: "Friday, May 9",
    timeLabel: "10:00am - 12:00pm PST",
    location: "900 Fallon St, Oakland CA 94607",
    description: "Community workout and handoff. All levels welcome.",
    image: "/images/about-4.png",
    href: "",
  },
];
