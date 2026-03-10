import Link from "next/link";
import Image from "next/image";
import { Container } from "../ui/Container";
import { FOOTER_COPY, SOCIAL_LINKS } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="mt-16 bg-black py-8 text-white">
      <Container className="flex flex-col items-center justify-between gap-6 sm:flex-row">
        <div className="flex items-center gap-3">
          <div className="relative h-9 w-12">
            <Image
              src="/images/Bayfitwhitelogo.png"
              alt="Bay Fit Collective logo"
              fill
              sizes="48px"
              className="object-contain"
            />
          </div>
          <span className="heading-font text-xs font-normal uppercase tracking-[0.2em]">
            {FOOTER_COPY}
          </span>
        </div>

        <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-[11px] font-semibold uppercase tracking-[0.24em]">
          {SOCIAL_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-white/80 hover:text-white"
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
    </footer>
  );
}

