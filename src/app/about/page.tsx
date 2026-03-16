import { MissionSection } from "@/components/about/MissionSection";
import { FaqSection } from "@/components/about/FaqSection";
import { MeetTeamSection } from "@/components/about/MeetTeamSection";
import { SocialSection } from "@/components/about/SocialSection";

export default function AboutPage() {
  return (
    <>
      <MissionSection />
      <MeetTeamSection />
      <FaqSection />
      <SocialSection />
    </>
  );
}

