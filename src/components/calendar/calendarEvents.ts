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
export const featuredEventId = "1";

export const calendarEvents: CalendarEvent[] = [
  {
    id: "1",
    title: "Txnedef Fitness Market Q2",
    dateLabel: "Saturday, April 4, 2026",
    timeLabel: "10:00am - 2:00pm PST",
    location: "Pacific Pipe, 2140 Mandela Pkwy, Oakland, CA 94607",
    description:
      "We're bringing the community together on April 4th, 2026 for a high-energy day of movement, music, and connection! From run clubs and gym pop-ups to yoga flows and outdoor collectives, this is where fitness meets culture!\n\nThere will be two 30-minute classes, with a 10-minute break in between to allow folks time to transition to the next class.\n\nCompetitions + giveaways! Txnedef drinks + food vendors on site. @Phive.55 running the sound.\n\nFirst come, first served when it comes to classes! Reveal coming soon!\n\nPull up ready to vibe, network and tap in with the city's dopest wellness communities. Come ready to meet new people, make real connections, and build your fitness circle!",
    image: "/images/txnedef-fitness-market-q2.png",
    href: "https://partiful.com/e/wjvuYdt7dPp5AAWMjJqK",
  },
  {
    id: "2",
    title: "Night Shift w/ Get Bent Training",
    dateLabel: "Friday, April 25",
    timeLabel: "5:00pm - 8:00pm PST",
    location: "2341 San Pablo Ave, Oakland CA 94612",
    description: "An evening session with Get Bent Training. Move, connect, and level up.",
    image: "/images/night-shift-425-1.jpg",
    href: "",
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
