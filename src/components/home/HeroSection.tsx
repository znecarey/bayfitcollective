import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/Button";
import { BRAND_MOTTO } from "@/lib/constants";

export function HeroSection() {
  return (
    <section className="w-screen bg-transparent lg:min-h-[calc(100vh-4.5rem)]">
      <div className="grid min-h-0 w-full grid-cols-1 items-stretch gap-10 lg:min-h-[calc(100vh-4.5rem)] lg:grid-cols-[53%_47%] lg:gap-0">
        {/* Left content column over shared gradient background */}
        <div className="relative flex min-h-[320px] flex-col justify-center overflow-hidden bg-transparent sm:min-h-[340px] md:min-h-[380px] lg:min-h-[calc(100vh-4.5rem)]">
          <div className="relative z-10 flex flex-col gap-5 px-6 py-10 sm:px-8 sm:py-12 lg:py-14 lg:pr-8 lg:pl-[max(1.5rem,4vw)] xl:pl-[max(2rem,5vw)]">
            <h1 className="heading-font text-8xl font-bold uppercase leading-[1] tracking-[0.02em] text-black sm:text-8xl md:text-9xl lg:text-9xl xl:text-9xl 2xl:text-[7.5rem]">
              <span className="block">We</span>
              <span className="block">Climb</span>
              <span className="block">Together</span>
            </h1>
            <p className="max-w-sm text-base leading-relaxed text-black sm:text-lg sm:leading-[1.6] lg:text-[1.25rem] xl:text-[1.4375rem]">
              We create experiences where movement, culture, fitness, and
              community meet together.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Link href="/calendar">
                <Button className="px-6 py-3 text-sm sm:px-8 sm:text-[1.05rem]">
                  Join Our Next Event!
                </Button>
              </Link>
              <Link
                href="/calendar"
                aria-label="View upcoming events"
                className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[--color-peach] text-xl shadow-md transition-colors hover:bg-[#ff7b55] sm:h-12 sm:w-12"
              >
                📅
              </Link>
            </div>
            <p className="mt-2 text-base font-semibold uppercase tracking-[0.3em] text-black/80">
              TOGETHER. WE. CLIMB.
            </p>
          </div>
        </div>

        {/* Right collage column: 65% total; Frame 24 on boundary, Frame 1 fills rest */}
        <div className="relative min-h-[280px] w-full sm:min-h-[340px] md:min-h-[380px] lg:min-h-[calc(100vh-4.5rem)]">
          {/* Frame 1: main collage — full-bleed right: fills column, flush with viewport */}
          <div className="relative h-full min-h-[200px] w-full bg-white sm:min-h-[340px] md:min-h-[380px] lg:min-h-[calc(100vh-4.5rem)] lg:rounded-l-2xl lg:rounded-r-none overflow-visible">
            <Image
              src="/images/Frame 1.png"
              alt="Bay Fit Collective community collage"
              fill
              className="object-cover object-center"
              sizes="65vw"
              priority
            />
          </div>
          {/* Frame 24: circles strip — centered on 35% / 65% column boundary */}
          <div
            className="absolute left-0 top-0 z-10 hidden h-full min-h-[280px] w-[180px] -translate-x-[calc(50%+80px)] -translate-y-2 bg-transparent md:block md:min-h-[380px] md:w-[200px] lg:min-h-[calc(100vh-4.5rem)] lg:w-[220px] xl:w-[260px] overflow-visible"
            aria-hidden
          >
            <div className="relative h-full w-full overflow-hidden">
              <Image
                src="/images/Frame 24.png"
                alt="Bay Fit Collective members training"
                fill
                className="object-contain object-center"
                sizes="260px"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
