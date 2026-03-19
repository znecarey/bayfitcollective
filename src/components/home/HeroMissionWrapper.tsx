import { HeroSection } from "./HeroSection";
import { AboutSection } from "./AboutSection";
import { ParallaxBackgroundImage } from "../ui/ParallaxBackgroundImage";

export function HeroMissionWrapper() {
  return (
    <section className="relative w-screen overflow-hidden">
      {/* Shared background image behind hero + mission sections */}
      <ParallaxBackgroundImage
        src="/images/home-heroimagefinal.png"
        alt="Bay Fit Collective atmospheric background"
        quality={95}
        priority
        strength={0.25}
        minWidthPx={768}
      />

      <div className="relative z-20">
        <HeroSection />
        <AboutSection />
      </div>
    </section>
  );
}

