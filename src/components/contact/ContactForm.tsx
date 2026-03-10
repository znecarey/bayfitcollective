"use client";

import { FormEvent } from "react";
import { Container } from "../ui/Container";
import { Button } from "../ui/Button";

export function ContactForm() {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Placeholder for future integration with email/service.
    alert("Thanks for reaching out! We will get back to you soon.");
  };

  return (
    <section className="bg-white py-14 sm:py-20">
      <Container className="grid gap-12 md:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)]">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 rounded-3xl border border-black/8 bg-[#f8f8f8] px-5 py-6 sm:px-8 sm:py-8"
        >
          <h2 className="text-sm font-semibold uppercase tracking-[0.22em] text-black">
            Say Hello
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="flex flex-col gap-1">
              <label
                htmlFor="name"
                className="text-xs font-semibold uppercase tracking-[0.22em] text-black/70"
              >
                Name
              </label>
              <input
                id="name"
                name="name"
                required
                className="h-10 rounded-full border border-black/10 bg-white px-4 text-sm outline-none focus:border-black/70"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label
                htmlFor="email"
                className="text-xs font-semibold uppercase tracking-[0.22em] text-black/70"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                name="email"
                required
                className="h-10 rounded-full border border-black/10 bg-white px-4 text-sm outline-none focus:border-black/70"
              />
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <label
              htmlFor="subject"
              className="text-xs font-semibold uppercase tracking-[0.22em] text-black/70"
            >
              Subject
            </label>
            <input
              id="subject"
              name="subject"
              className="h-10 rounded-full border border-black/10 bg-white px-4 text-sm outline-none focus:border-black/70"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label
              htmlFor="message"
              className="text-xs font-semibold uppercase tracking-[0.22em] text-black/70"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={4}
              className="rounded-2xl border border-black/10 bg-white px-4 py-3 text-sm outline-none focus:border-black/70"
            />
          </div>
          <div className="mt-2">
            <Button type="submit" fullWidth>
              Send Message
            </Button>
          </div>
        </form>

        <aside className="flex flex-col gap-6">
          <div className="space-y-3">
            <h2 className="text-sm font-semibold uppercase tracking-[0.22em] text-black">
              Partnerships & Community
            </h2>
            <p className="text-sm text-black/75">
              Interested in partnering, hosting a Bay Fit event, or bringing
              movement to your organization? Share a bit more about what
              you&apos;re dreaming up and we&apos;ll connect.
            </p>
          </div>
          <div className="space-y-2 text-sm text-black/80">
            <p className="font-semibold">Email</p>
            <a
              href="mailto:hello@bayfitcollective.com"
              className="text-black underline underline-offset-4"
            >
              hello@bayfitcollective.com
            </a>
          </div>
        </aside>
      </Container>
    </section>
  );
}

