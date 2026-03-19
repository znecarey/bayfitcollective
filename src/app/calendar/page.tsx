import {
  calendarEvents,
  featuredEventId,
} from "@/components/calendar/calendarEvents";
import { CalendarHero } from "@/components/calendar/CalendarHero";
import { UpcomingEvents } from "@/components/calendar/UpcomingEvents";
import { BayfitTickerBanner } from "@/components/ui/BayfitTickerBanner";

export default function CalendarPage() {
  const featured = calendarEvents.find((e) => e.id === featuredEventId);
  const featuredEventHref = featured?.href && featured.href.length > 0
    ? featured.href
    : undefined;

  return (
    <>
      <CalendarHero featuredEventHref={featuredEventHref} />
      <UpcomingEvents />
      <BayfitTickerBanner />
    </>
  );
}

