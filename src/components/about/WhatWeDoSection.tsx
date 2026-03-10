import { PeachBanner } from "../ui/PeachBanner";

const items = [
  "Outdoor workouts & run clubs",
  "Yoga, mobility, and mindfulness",
  "Culture-forward community events",
];

export function WhatWeDoSection() {
  return (
    <PeachBanner title="What We Do" className="mt-0">
      <div className="mt-6 grid gap-4 md:grid-cols-3">
        {items.map((label) => (
          <div
            key={label}
            className="flex min-h-[140px] flex-col justify-between rounded-2xl border border-black/15 bg-[#ffb39a]/30 px-4 py-4 text-sm font-medium text-black"
          >
            <span>{label}</span>
            <span className="mt-4 text-xs font-semibold uppercase tracking-[0.22em] text-black/60">
              Coming soon
            </span>
          </div>
        ))}
      </div>
    </PeachBanner>
  );
}

