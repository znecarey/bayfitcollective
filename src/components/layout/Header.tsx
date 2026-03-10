"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { NAV_LINKS } from "@/lib/constants";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full bg-black/95">
      <div className="flex w-full items-center justify-between px-6 py-3 sm:px-8 sm:py-4 lg:px-10">
        <Link href="/" className="flex items-center gap-2">
          <div className="relative h-9 w-12">
            <Image
              src="/images/Bayfitwhitelogo.png"
              alt="Bay Fit Collective logo"
              fill
              sizes="48px"
              className="object-contain"
              priority
            />
          </div>
          <span className="heading-font hidden text-xs font-normal uppercase tracking-[0.25em] text-white sm:inline-block">
            Bay Fit Collective
          </span>
        </Link>

        <nav className="heading-font hidden items-center gap-8 text-xs font-normal uppercase tracking-[0.22em] text-white sm:flex">
          {NAV_LINKS.map((link) => {
            const active =
              link.href === "/"
                ? pathname === "/"
                : pathname?.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`border-b-2 pb-1 transition-colors ${
                  active
                    ? "border-white text-white"
                    : "border-transparent text-white/70 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <button
          type="button"
          aria-label="Toggle navigation"
          onClick={() => setOpen((prev) => !prev)}
          className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/30 text-xs font-semibold uppercase tracking-[0.18em] text-white sm:hidden"
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>

      {open ? (
        <div className="border-t border-white/10 bg-black sm:hidden">
          <div className="px-6 py-3 sm:px-8 lg:px-10">
            <nav className="flex flex-col gap-3 text-xs font-semibold uppercase tracking-[0.22em] text-white">
              {NAV_LINKS.map((link) => {
                const active =
                  link.href === "/"
                    ? pathname === "/"
                    : pathname?.startsWith(link.href);
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`py-1 ${
                      active ? "text-white" : "text-white/70"
                    }`}
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>
          </div>
        </div>
      ) : null}
    </header>
  );
}

