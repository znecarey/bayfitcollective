import { Container } from "../ui/Container";
import { SOCIAL_LINKS, SOCIAL_HANDLE } from "@/lib/constants";
import Link from "next/link";

export function SocialLinksSection() {
  return (
    <section className="bg-[--color-peach] py-10 sm:py-14">
      <Container className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div className="space-y-2">
          <h2 className="text-lg font-extrabold uppercase tracking-[0.2em] text-black">
            Stay Connected
          </h2>
          <p className="text-sm text-black/80">
            Follow {SOCIAL_HANDLE} for new events, drops, and moments from the
            community.
          </p>
        </div>
        <nav className="flex flex-wrap items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.24em] text-black">
          {SOCIAL_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="rounded-full border border-black/20 px-4 py-2 hover:bg-black hover:text-white"
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={
                link.href.startsWith("http")
                  ? "noopener noreferrer"
                  : undefined
              }
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </Container>
    </section>
  );
}

