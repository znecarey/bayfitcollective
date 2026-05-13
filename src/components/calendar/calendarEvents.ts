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
    title: "The Reset: Wellness & Recovery Social",
    dateLabel: "Saturday, May 30, 2026",
    timeLabel: "9:00am - 12:00pm PDT",
    location:
      "Longfellow Fields — 3884 Martin Luther King Jr Way, Oakland, CA 94609",
    description: `The Reset is bringing a full morning of movement, recovery, music, food, vendors, and community to Longfellow Fields.

Come stretch, sweat, recover, connect, and catch a vibe with us.

🗓️ May 30 | 9AM–12PM
📍 Longfellow Fields, Oakland
🎧 Sounds by DJ Red Corvette & Mix Z

Pull up ready to move. Leave feeling recharged.

#BayFitCollective #TheReset #OaklandEvents #BayAreaWellness #BayAreaFitness #TogetherWeClimb`,
    image: "/images/the-reset-wellness-social.png",
    href: "https://sweatpals.com/event/wellness-social?utm_source=user_share_3ca93df3-c3bf-49dc-be96-1ac78630f5cd&utm_medium=shared_link&utm_campaign=event_share",
  },
  {
    id: "3",
    title: "The Handoff",
    dateLabel: "Friday, May 9",
    timeLabel: "10:00am - 12:00pm PST",
    location: "900 Fallon St, Oakland CA 94607",
    description: "Community workout and handoff. All levels welcome.",
    image: "/images/the-handoff-track-day.png",
    href: "",
  },
];
