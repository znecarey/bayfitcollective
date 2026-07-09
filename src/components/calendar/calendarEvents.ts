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
  /** When true, upcoming card shows only the RSVP control (no title/date/time/location). */
  hideCardDetails?: boolean;
  /** Scale multiplier for the featured flyer image (e.g. 1.45 zooms in for readability). */
  featuredFlyerZoom?: number;
};

/** ID of the event to feature in the hero-style card. */
export const featuredEventId = "3";

export const calendarEvents: CalendarEvent[] = [
  {
    id: "3",
    title: "The Handoff",
    dateLabel: "Saturday, July 18",
    timeLabel: "5:30pm - 8:30pm PDT",
    location: "Laney College Track, 900 Fallon St, Oakland CA 94607",
    description:
      "Community relay running event hosted by Bay Fit Collective in partnership with Unseen Run Club and Renegade Running.",
    image: "/images/the-handoff-track-day.png",
    href: "https://events.sweatpals.com/4d355d48",
    featuredFlyerZoom: 1.5,
  },
];
