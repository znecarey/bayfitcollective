import Image from "next/image";

export function CommunitySection() {
  return (
    <section className="-mt-6 w-full bg-[#f1f1f1] pb-14 pt-0 sm:pb-20 sm:pt-0">
      <div className="relative mt-10 w-full">
        <div className="absolute left-1/2 top-0 z-10 -translate-x-1/2 -translate-y-1/2">
          <div className="relative h-12 w-44 sm:h-14 sm:w-52 md:h-16 md:w-60">
            <Image
              src="/images/Join the Collective Button.png"
              alt="Join The Bay Fit Collective"
              fill
              className="object-contain"
              sizes="(max-width: 640px) 176px, (max-width: 768px) 208px, 240px"
            />
          </div>
        </div>
        <div className="relative aspect-[16/5] w-full overflow-hidden">
          <Image
            src="/images/joinBayFit.png"
            alt="Bay Fit Collective community"
            fill
            className="object-cover object-center"
            sizes="100vw"
          />
        </div>
      </div>
    </section>
  );
}

