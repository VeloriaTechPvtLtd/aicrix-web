import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /**
   * For Vercel, we use the default (dynamic) build to enable full platform features.
   * For other production environments (like Firebase), we maintain the 'export' output.
   */
  output:
    process.env.VERCEL || process.env.NODE_ENV !== "production"
      ? undefined
      : "export",
  /** Required for `next/image` only with `output: "export"`. */
  images: {
    unoptimized: process.env.VERCEL ? false : true,
  },
};

export default nextConfig;
