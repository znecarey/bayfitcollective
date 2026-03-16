import Image from "next/image";
import { HeroSection } from "./HeroSection";
import { AboutSection } from "./AboutSection";

export function HeroMissionWrapper() {
  return (
    <section className="relative w-screen overflow-hidden">
      {/* Aura gradient background covering left half of hero area */}
      <div className="pointer-events-none absolute left-0 top-0 -z-10 h-[calc(100vh-4.5rem)] w-1/2 sm:w-1/2">
        <Image
          src="/images/background-hero-mission.png"
          alt="Bay Fit Collective gradient background"
          fill
          className="object-cover object-[35%_20%]"
          sizes="100vw"
          priority
        />
      </div>
      {/* Very subtle dark overlay for readability */}
      <div className="pointer-events-none absolute inset-0 -z-5 bg-black/15" />

      <HeroSection />
      <AboutSection />
    </section>
  );
}

