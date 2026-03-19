import Image from "next/image";

export function CommunitySection() {
  return (
    <section className="-mt-px w-full bg-[#f1f1f1] pb-0 pt-0 sm:pb-0 sm:pt-0">
      <div className="relative w-full">
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

