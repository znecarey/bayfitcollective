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
export const featuredEventId = "5";

export const calendarEvents: CalendarEvent[] = [
  {
    id: "5",
    title: "The Night Shift",
    dateLabel: "Saturday, August 8",
    timeLabel: "5:00pm - 8:00pm PDT",
    location: "1668 14th St, Oakland CA 94607",
    description:
      "Fuel, music, and vendors — 1 mile warm up + HIIT circuit. Powered by Bay Fit Collective & Fitnesse Training Club.",
    image: "/images/the-night-shift.png",
    href: "https://sweatpals.com/event/night-shift-815/2026-08-08",
    featuredFlyerZoom: 1.5,
  },
];
