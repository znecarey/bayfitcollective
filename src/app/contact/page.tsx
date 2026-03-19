import { ContactHero } from "@/components/contact/ContactHero";
import { ContactForm } from "@/components/contact/ContactForm";
import { SocialLinksSection } from "@/components/contact/SocialLinksSection";
import { BayfitTickerBanner } from "@/components/ui/BayfitTickerBanner";

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <ContactForm />
      <SocialLinksSection />
      <BayfitTickerBanner />
    </>
  );
}

