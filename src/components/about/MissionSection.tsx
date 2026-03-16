import Image from "next/image";
import { Container } from "../ui/Container";

export function MissionSection() {
  return (
    <section className="bg-white py-14 sm:py-18 border-b border-black/10">
      <Container className="grid gap-10 lg:grid-cols-2">
        <div className="flex flex-col gap-4">
          <h1 className="heading-font text-3xl font-normal uppercase tracking-[0.15em] text-black sm:text-4xl md:text-5xl">
            Our Mission
          </h1>
          <p className="text-sm leading-7 text-black/75 sm:text-base">
            Bay Fit Collective is a community-driven fitness and wellness
            organization rooted in the belief that movement brings people
            together. Founded in the Bay Area, we create inclusive experiences
            — from outdoor workouts and run clubs to yoga and cultural fitness
            events — that inspire people to move with purpose, build meaningful
            relationships, and grow together.
          </p>
          <p className="text-sm leading-7 text-black/75 sm:text-base">
            We exist to make fitness more than a routine. It&apos;s a space to
            connect. A space to belong. A space to become your best self —
            physically, mentally, and spiritually — alongside a community that
            moves with you.
          </p>
          <p className="text-sm leading-7 text-black/75 sm:text-base">
            At Bay Fit Collective, we&apos;re not just building stronger bodies.
            We&apos;re building stronger people and a stronger community.
          </p>
        </div>

        <div className="relative mx-auto aspect-[4.55/5] w-full max-w-lg overflow-hidden rounded-2xl border border-black/5 bg-gray-100 lg:mx-0 lg:max-w-md">
          <Image
            src="/images/about us.png"
            alt="Bay Fit Collective team and community"
            fill
            className="object-cover object-[80%_100%]"
            sizes="(min-width: 1024px) 640px, 100vw"
          />
        </div>
      </Container>
    </section>
  );
}

