import Image from "next/image";

export function CommunitySection() {
  return (
    <section className="-mt-6 w-full bg-[#f1f1f1] pb-0 pt-0 sm:pb-0 sm:pt-0">
      <div className="relative mt-10 w-full">
        <div className="absolute left-1/2 top-0 z-10 -translate-x-1/2 -translate-y-1/2">
          <div className="relative h-20 w-64 sm:h-24 sm:w-80 md:h-28 md:w-[22rem]">
            <Image
              src="/images/Join the Collective Button.png"
              alt="Join The Bay Fit Collective"
              fill
              className="object-contain"
              sizes="(max-width: 640px) 176px, (max-width: 768px) 208px, 240px"
            />
          </div>
        </div>
        <div className="relative aspect-[16/4] w-full overflow-hidden">
          <Image
            src="/images/joinBayFit.png"
            alt="Bay Fit Collective community"
            fill
            className="object-cover object-[50%_40%]"
            sizes="100vw"
            quality={75}
            priority={true}
          />
        </div>
      </div>
    </section>
  );
}

