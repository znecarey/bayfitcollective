import Image from "next/image";
import { Container } from "../ui/Container";

export function ShopHero() {
  return (
    <section className="relative overflow-hidden bg-[#f4f4f4] py-14 sm:py-20">
      {/* Full-bleed background behind the hero text */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <Image
          src="/images/about-3.png"
          alt="Bay Fit Collective shop background"
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
        {/* Readability overlay for black text */}
        <div className="absolute inset-0 -z-5 bg-white/60" />
      </div>

      <Container className="relative z-10 flex flex-col gap-4 md:flex-row md:items-end">
        <div className="space-y-4">
          <h1 className="heading-font text-3xl font-normal uppercase leading-tight tracking-[0.16em] text-black sm:text-4xl">
            Bay Fit Collective Store
          </h1>
          <p className="max-w-xl text-sm leading-7 text-black/75 sm:text-base">
            Community-first apparel and essentials that move with you — designed
            for people who climb together, on and off the mat.
          </p>
        </div>
      </Container>
    </section>
  );
}

