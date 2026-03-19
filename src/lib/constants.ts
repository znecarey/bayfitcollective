export const BRAND_COLORS = {
  peach: "#FF9070",
  background: "#ffffff",
  foreground: "#171717",
  footerBackground: "#000000",
} as const;

export type NavLink = {
  label: string;
  href: string;
};

export const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Calendar", href: "/calendar" },
  { label: "Contact Us", href: "/contact" },
  { label: "Shop", href: "/shop" },
];

export type SocialLink = {
  label: string;
  href: string;
};

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: "Instagram",
    href: "https://instagram.com/bayfitco",
  },
  {
    label: "TikTok",
    href: "https://tiktok.com/@bayfitco",
  },
  {
    label: "Strava",
    href: "https://strava.app.link/doP2h1wKy1b",
  },
  {
    label: "Email",
    href: "mailto:bayfitco@gmail.com",
  },
  {
    label: "FAQs",
    href: "/#faqs",
  },
];

export const BRAND_MOTTO = "WE. CLIMB. TOGETHER.";

export const SOCIAL_HANDLE = "@BAYFITCO";

export const FOOTER_COPY = "BAY FIT COLLECTIVE";

