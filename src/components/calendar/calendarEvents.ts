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
    title: "The Climb!",
    dateLabel: "Saturday, May 2",
    timeLabel: "9:00am - 11:30am PST",
    location: "Cleveland Cascades — 2300 Lakeshore Ave, Oakland, CA 94606",
    description: `The Climb!

🔥 We’re taking the grind outside!

Bay Fit Co. x Gods Gym are linking up for an OUTDOOR CIRCUIT like no other. If you’ve been waiting for a sign to push yourself this is it.

Saturday, May 2nd • 9AM — 11:30AM

Light refreshments will be provided.

RSVP to Lock in Your Spot!`,
    image: "/images/the-climb-flyer.png",
    href: "https://partiful.com/e/b0hSNfMHjeK8OIGM8OqJ?source=share",
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
