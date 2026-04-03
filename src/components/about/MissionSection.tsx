import { Container } from "../ui/Container";
import { AboutSlideshow } from "./AboutSlideshow";

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

        <AboutSlideshow
          slides={[
            { src: "/images/about us.png", alt: "Bay Fit Collective" },
            // Placeholder slides; can be replaced/expanded with real photos
            { src: "/images/about-2.png", alt: "Bay Fit Trap Yoga" },
            { src: "/images/about-3.png", alt: "Bay Fit Trap Yoga" },
            { src: "/images/about-4.png", alt: "Bay Fit Trap Yoga" },
            { src: "/images/about-5.png", alt: "Bay Fit Trap Yoga" },
            { src: "/images/about-6.png", alt: "Bay Fit Trap Yoga" },
            { src: "/images/about-7.png", alt: "Bay Fit Trap Yoga" }
          ]}
        />
      </Container>
    </section>
  );
}

