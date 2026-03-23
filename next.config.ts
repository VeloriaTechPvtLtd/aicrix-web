import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: process.env.NODE_ENV === "production" ? "export" : undefined,
  /** Required for `next/image` with `output: "export"` (Firebase / static hosting). */
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
