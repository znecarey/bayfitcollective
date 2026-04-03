import Image from "next/image";
import { Container } from "../ui/Container";

export function AboutSection() {
  return (
    <section className="bg-transparent py-16 sm:py-20">
      <Container className="flex flex-col items-center gap-4 text-center text-white">
        <div className="flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.3em] text-white -mt-12">
          <div className="relative h-5 w-8 shrink-0 translate-y-4 sm:h-6 sm:w-10">
            <Image
              src="/images/BayFitBlack.png"
              alt="Bay Fit Collective"
              fill
              className="object-contain"
              sizes="40px"
            />
          </div>
          <span className="heading-font translate-y-4">
            Where community meets wellness, movement, and creates amazing
            experiences.
          </span>
        </div>
        <div className="mt-8 max-w-5xl space-y-4 text-[1.25rem] font-semibold leading-relaxed text-white sm:text-[1.4375rem]">
          <p>
            Bay Fit Collective is a community-driven fitness and wellness
            organization rooted in the belief that movement brings people
            together. Founded in the Bay Area, we create inclusive experiences
            — from outdoor workouts and run clubs to yoga and cultural fitness
            events — that inspire people to move with purpose, build meaningful
            relationships, and grow together.
          </p>
          <p>
            We exist to make fitness more than a routine. It&apos;s a space to
            connect. A space to belong. A space to become your best self —
            physically, mentally, and spiritually — alongside a community that
            moves with you.
          </p>
          <p>
            At Bay Fit Collective, we&apos;re not just building stronger bodies.
            We&apos;re building stronger people and a stronger community.
          </p>
        </div>
        <p className="mt-2 text-xs font-semibold uppercase tracking-[0.25em] text-white">
          TOGETHER. WE. CLIMB.
        </p>
      </Container>
    </section>
  );
}

