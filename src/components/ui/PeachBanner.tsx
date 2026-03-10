import type { PropsWithChildren, ReactNode } from "react";
import { Container } from "./Container";

type PeachBannerProps = PropsWithChildren<{
  title: string;
  subtitle?: ReactNode;
  fullWidthBelow?: ReactNode;
  className?: string;
}>;

export function PeachBanner({
  title,
  subtitle,
  children,
  fullWidthBelow,
  className,
}: PeachBannerProps) {
  const showTitleBlock = title || children;

  return (
    <section
      className={`w-full bg-[--color-peach] py-10 sm:py-14 ${className ?? ""}`}
    >
      {showTitleBlock ? (
        <Container>
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              {title ? (
                <h2 className="heading-font text-xl sm:text-2xl font-normal uppercase tracking-[0.2em] text-black">
                  {title}
                </h2>
              ) : null}
              {subtitle ? (
                <div className="max-w-2xl text-sm sm:text-base text-black/80">
                  {subtitle}
                </div>
              ) : null}
            </div>
            {children}
          </div>
        </Container>
      ) : null}
      {fullWidthBelow ? <div className="w-full">{fullWidthBelow}</div> : null}
    </section>
  );
}

