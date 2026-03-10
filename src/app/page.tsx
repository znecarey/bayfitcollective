import { HeroSection } from "@/components/home/HeroSection";
import { AboutSection } from "@/components/home/AboutSection";
import { SocialSection } from "@/components/home/SocialSection";
import { CommunitySection } from "@/components/home/CommunitySection";

export default function Home() {
  return (
    <>
      {/* Home hero */}
      <HeroSection />
      {/* Brand story / about */}
      <AboutSection />
      {/* Social proof and socials */}
      <SocialSection />
      {/* Community + merch preview */}
      <CommunitySection />
    </>
  );
}
