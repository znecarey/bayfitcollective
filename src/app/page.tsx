import { HeroMissionWrapper } from "@/components/home/HeroMissionWrapper";
import { SocialSection } from "@/components/home/SocialSection";
import { CommunitySection } from "@/components/home/CommunitySection";

export default function Home() {
  return (
    <>
      {/* Home hero + mission with shared gradient */}
      <HeroMissionWrapper />
      {/* Social proof and socials */}
      <SocialSection />
      {/* Community + merch preview */}
      <CommunitySection />
    </>
  );
}
