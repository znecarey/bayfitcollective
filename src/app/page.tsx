import { HeroSection } from "@/components/home/HeroSection";
import { AboutSection } from "@/components/home/AboutSection";
import { CommunitySection } from "@/components/home/CommunitySection";
import { SocialSection } from "@/components/home/SocialSection";

export default function Home() {
  return (
    <>
      {/* Home hero */}
      <HeroSection />
      {/* Brand story / about */}
      <AboutSection />
      {/* Community + merch preview */}
      <CommunitySection />
      {/* Social proof and socials */}
      <SocialSection />
    </>
  );
}
