 "use client";

import { useState } from "react";
import { PeachBanner } from "../ui/PeachBanner";

const faqs = [
  {
    question: "What kind of events do you host?",
    answer:
      "We host outdoor workouts, run clubs, yoga and mobility sessions, and culture-forward community events that blend movement, music, and connection.",
  },
  {
    question: "Where do you host your events?",
    answer:
      "Most gatherings take place around the Bay Area — from parks and waterfront paths to partner studios and community spaces in San Francisco, Oakland, and beyond.",
  },
  {
    question: "Who are Bay Fit Collective events for?",
    answer:
      "Everyone. Our experiences are designed to be welcoming to all identities and fitness levels, whether you are just getting started or have been moving for years.",
  },
  {
    question: "How often do you host events?",
    answer:
      "We run events throughout the month with seasonal series, pop-ups, and collaborations. Check the Calendar page for what’s coming up next.",
  },
  {
    question: "How can I stay updated or get involved?",
    answer:
      "Follow us on socials, join our email list, and keep an eye on the Calendar. You can also reach out through the Contact page for partnerships or to volunteer.",
  },
];

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <PeachBanner title="" className="mt-0">
      <div className="flex flex-col gap-6">
        <h2 className="heading-font text-3xl font-normal uppercase tracking-[0.2em] text-black sm:text-4xl md:text-5xl">
          FAQs
        </h2>

        <div className="divide-y divide-black/15 border-t border-black/15">
          {faqs.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <button
                key={item.question}
                type="button"
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className="flex w-full flex-col text-left"
              >
                <div className="flex items-center justify-between py-4 sm:py-5">
                  <span className="heading-font text-sm font-normal uppercase tracking-[0.22em] text-black sm:text-base">
                    {item.question}
                  </span>
                  <span className="ml-4 text-lg text-black">
                    {isOpen ? "▾" : "▸"}
                  </span>
                </div>
                {isOpen ? (
                  <div className="pb-4 text-sm leading-relaxed text-black/80 sm:pb-5">
                    {item.answer}
                  </div>
                ) : null}
              </button>
            );
          })}
        </div>
      </div>
    </PeachBanner>
  );
}

