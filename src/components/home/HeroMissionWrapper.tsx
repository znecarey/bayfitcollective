import Image from "next/image";
import { HeroSection } from "./HeroSection";
import { AboutSection } from "./AboutSection";

export function HeroMissionWrapper() {
  return (
    <section className="relative w-screen overflow-hidden">
      {/* Shared background image behind hero + mission sections */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <Image
          src="/images/home-heroimagefinal.png"
          alt="Bay Fit Collective atmospheric background"
          fill
          className="object-cover object-center"
          sizes="100vw"
          quality={95}
          priority
        />
      </div>

      <div className="relative z-20">
        <HeroSection />
        <AboutSection />
      </div>
    </section>
  );
}

