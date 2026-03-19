/**
 * Calendar event data for the event feed.
 * Update titles, dates, times, locations, images, and links here.
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
    title: "Help A Teacha Out Fundraiser",
    dateLabel: "Saturday, March 21",
    timeLabel: "11:00am - 2:00pm PST",
    location: "2134 Market St, Oakland CA 94607",
    description:
      "In partnership with Providence Gym and City of Oakland. Join us to support educators and the community.",
    image: "/images/help-a-teacha-out.png",
    href: "https://partiful.com/e/Qi2DiV9G8J057apTX5nX?",
  },
  {
    id: "2",
    title: "Night Shift w/ Get Bent Training",
    dateLabel: "Friday, April 25",
    timeLabel: "5:00pm - 8:00pm PST",
    location: "2341 San Pablo Ave, Oakland CA 94612",
    description: "An evening session with Get Bent Training. Move, connect, and level up.",
    image: "/images/about-3.png",
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
