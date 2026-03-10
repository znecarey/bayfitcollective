import Image from "next/image";
import { PeachBanner } from "../ui/PeachBanner";

export function SocialSection() {
  return (
    <section className="bg-white pb-0 pt-0">
      <PeachBanner
        title=""
        className="py-0"
        fullWidthBelow={
          <div className="relative aspect-[16/5] w-full overflow-hidden border-t border-black/10">
            <Image
              src="/images/Frame 5 copy.png"
              alt="Bay Fit Collective community socials strip"
              fill
              className="object-cover object-center"
              sizes="100vw"
            />
          </div>
        }
      />
    </section>
  );
}
