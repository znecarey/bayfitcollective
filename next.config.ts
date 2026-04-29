import type { NextConfig } from "next";
import path from "node:path";
import { fileURLToPath } from "node:url";

/** Lock Turbopack to this app so it doesn’t resolve from a parent folder with another lockfile. */
const turbopackRoot = path.dirname(fileURLToPath(import.meta.url));

const nextConfig: NextConfig = {
  turbopack: {
    root: turbopackRoot,
  },
  images: {
    qualities: [75, 95],
    /**
     * Allow optimized local assets under `/public/images/**`.
     * Omitting `search` permits optional cache-busting query strings like `?v=...`
     * used by `MeetTeamSection` without disabling `next/image`.
     */
    localPatterns: [{ pathname: "/images/**" }],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.pexels.com",
      },
    ],
  },
};

export default nextConfig;
