import { Button } from "../ui/Button";

export type Event = {
  id: string;
  date: string;
  title: string;
  location: string;
  href?: string;
};

type Props = {
  event: Event;
};

export function EventCard({ event }: Props) {
  return (
    <article className="flex flex-col justify-between rounded-2xl border border-black/10 bg-white px-5 py-5 shadow-sm">
      <div className="flex flex-col gap-2">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-black/60">
          {event.date}
        </p>
        <h3 className="text-base font-semibold text-black">{event.title}</h3>
        <p className="text-xs text-black/70">{event.location}</p>
      </div>
      <div className="mt-4">
        <Button
          variant="ghost"
          className="text-xs font-semibold uppercase tracking-[0.22em]"
        >
          {event.href ? "View event" : "Details coming soon"}
        </Button>
      </div>
    </article>
  );
}

