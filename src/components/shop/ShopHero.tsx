import { Container } from "../ui/Container";

export function ShopHero() {
  return (
    <section className="bg-[#f4f4f4] py-14 sm:py-20">
      <Container className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div className="space-y-4">
          <h1 className="heading-font text-3xl font-normal uppercase leading-tight tracking-[0.16em] text-black sm:text-4xl">
            Shop (Beta)
          </h1>
          <p className="max-w-xl text-sm leading-7 text-black/75 sm:text-base">
            Community-first apparel and essentials that move with you — designed
            for people who climb together, on and off the mat.
          </p>
        </div>
        <p className="max-w-xs text-[11px] font-semibold uppercase tracking-[0.24em] text-black/60">
          Shop coming soon. Be the first to know when we drop.
        </p>
      </Container>
    </section>
  );
}

