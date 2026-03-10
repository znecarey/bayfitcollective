import type { ButtonHTMLAttributes, PropsWithChildren } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost";

type ButtonProps = PropsWithChildren<
  ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: ButtonVariant;
    fullWidth?: boolean;
  }
>;

const baseClasses =
  "inline-flex items-center justify-center rounded-full text-sm font-semibold tracking-wide transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-black disabled:opacity-60 disabled:cursor-not-allowed";

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-black text-white hover:bg-zinc-900 px-6 py-3 ring-offset-background",
  secondary:
    "bg-[--color-peach] text-black hover:bg-[#ff7b55] px-5 py-2.5 ring-offset-background",
  ghost:
    "border border-black/10 text-black hover:bg-black/5 px-5 py-2.5 ring-offset-background",
};

export function Button({
  children,
  className,
  variant = "primary",
  fullWidth,
  ...props
}: ButtonProps) {
  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]} ${
        fullWidth ? "w-full" : ""
      } ${className ?? ""}`}
      {...props}
    >
      {children}
    </button>
  );
}

