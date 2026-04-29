import { Container } from "../ui/Container";

export function ContactHero() {
  return (
    <section className="bg-[#f4f4f4] py-14 sm:py-20">
      <Container className="flex flex-col gap-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div className="space-y-4">
          <h1 className="heading-font text-3xl font-normal uppercase leading-tight tracking-[0.16em] text-black sm:text-4xl">
            Contact Us
          </h1>
          <p className="max-w-xl text-sm leading-7 text-black/75 sm:text-base">
            Questions, ideas, or want to bring Bay Fit Collective to your space?
            We&apos;d love to hear from you.
          </p>
        </div>
        <p className="max-w-xs text-[11px] font-semibold uppercase tracking-[0.24em] text-black/60">
          Partnerships, community collaborations, and event bookings welcome.
        </p>
        </div>
      </Container>
    </section>
  );
}

