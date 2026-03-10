"use client";

import { Container } from "../ui/Container";
import { Button } from "../ui/Button";

const products = [
  {
    name: "BF Heavyweight Tee",
    description: "Relaxed fit tee for workouts & hangs.",
  },
  {
    name: "Together We Climb Crew",
    description: "Cozy crewneck for early morning sessions.",
  },
  {
    name: "Bay Fit Cap",
    description: "Everyday cap for sun, sweat, and style.",
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

        <div className="grid gap-6 md:grid-cols-3">
          {products.map((product) => (
            <div
              key={product.name}
              className="flex flex-col gap-3 rounded-2xl border border-black/10 bg-[#f8f8f8] px-5 py-6"
            >
              <div className="h-32 rounded-xl bg-gradient-to-br from-black/5 via-black/10 to-[--color-peach]/40" />
              <div className="space-y-1">
                <p className="text-sm font-semibold text-black">
                  {product.name}
                </p>
                <p className="text-xs text-black/70">{product.description}</p>
              </div>
              <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-black/40">
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

