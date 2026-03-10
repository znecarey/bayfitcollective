import { Container } from "../ui/Container";

export function CalendarHero() {
  return (
    <section className="bg-[#f4f4f4] py-14 sm:py-20">
      <Container className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div className="flex-1 space-y-4">
          <h1 className="heading-font text-3xl font-normal uppercase leading-tight tracking-[0.16em] text-black sm:text-4xl">
            Calendar
          </h1>
          <p className="max-w-xl text-sm leading-7 text-black/75 sm:text-base">
            Stay tapped in to Bay Fit Collective events — from outdoor workouts
            and run clubs to yoga, community hangs, and culture-forward
            experiences across the Bay.
          </p>
        </div>
        <p className="max-w-xs text-[11px] font-semibold uppercase tracking-[0.24em] text-black/60">
          Sync with Partiful, Strava, and more coming soon.
        </p>
      </Container>
    </section>
  );
}

