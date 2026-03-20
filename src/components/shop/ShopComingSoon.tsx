"use client";

import Image from "next/image";
import { Container } from "../ui/Container";
import { Button } from "../ui/Button";

/** Shared preview art for coming-soon merch cards */
const SHOP_PREVIEW_IMAGE = "/images/IMG_6230.png";

const products = [
  {
    name: "BF Active Long Sleeve",
    description: "All-day active long sleeve for workouts & movement.",
  },
  {
    name: "BF Active Short Sleeve",
    description: "Lightweight short sleeve built for sweat and sessions.",
  },
];

export function ShopComingSoon() {
  return (
    <section className="bg-white py-14 sm:py-20">
      <Container className="flex flex-col gap-10">
        <div className="space-y-3 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-black/60">
            Shop Coming Soon
          </p>
          <p className="mx-auto max-w-2xl text-sm leading-7 text-black/80 sm:text-base">
            We&apos;re putting the finishing touches on the Bay Fit Collective
            shop — built around community, comfort, and movement. Here&apos;s a
            preview of what&apos;s on the way.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 sm:gap-5">
          {products.map((product) => (
            <div
              key={product.name}
              className="flex flex-col gap-4 rounded-lg border border-black/10 bg-[#f8f8f8] px-3 py-6 sm:px-4 sm:py-8"
            >
              {/* Taller preview: same card width as before, more vertical length (no max-height cap) */}
              <div className="relative aspect-[3/4] w-full overflow-hidden rounded-md bg-black/5">
                <Image
                  src={SHOP_PREVIEW_IMAGE}
                  alt={`${product.name} preview`}
                  fill
                  className="object-cover object-center"
                  sizes="(min-width: 640px) 40vw, 100vw"
                />
              </div>
              <div className="space-y-1.5">
                <p className="text-xs font-semibold text-black">
                  {product.name}
                </p>
                <p className="text-[10px] leading-relaxed text-black/70 sm:text-[11px]">
                  {product.description}
                </p>
              </div>
              <p className="text-[9px] font-semibold uppercase tracking-[0.22em] text-black/40">
                Future drop
              </p>
            </div>
          ))}
        </div>

        <div className="mt-2 flex flex-col items-center gap-3 rounded-3xl border border-black/10 bg-[#f1f1f1] px-5 py-6 sm:px-8 sm:py-8 md:flex-row md:justify-between">
          <div className="space-y-1">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-black">
              Notify Me
            </p>
            <p className="text-sm text-black/75">
              Drop your email to hear about the first release.
            </p>
          </div>
          <form
            className="flex w-full flex-col gap-3 sm:flex-row sm:items-center md:w-auto"
            onSubmit={(event) => {
              event.preventDefault();
              alert("Thanks! You’ll hear from us when the shop goes live.");
            }}
          >
            <input
              type="email"
              required
              placeholder="email@you.com"
              className="h-10 w-full rounded-full border border-black/15 bg-white px-4 text-sm outline-none focus:border-black/70 sm:w-64"
            />
            <Button type="submit" variant="primary">
              Notify Me
            </Button>
          </form>
        </div>
      </Container>
    </section>
  );
}

