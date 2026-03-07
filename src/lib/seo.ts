/**
 * Base URL for canonical links and OG tags. Override via env (NEXT_PUBLIC_SITE_URL) when deploying.
 */
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://aicrix.com";

/**
 * Optional Twitter/X handle for attribution (e.g. @aicrix). Set NEXT_PUBLIC_TWITTER_SITE in env.
 */
export const TWITTER_SITE =
  process.env.NEXT_PUBLIC_TWITTER_SITE ?? "";

/**
 * Optional Twitter/X creator handle for articles. Set NEXT_PUBLIC_TWITTER_CREATOR in env.
 */
export const TWITTER_CREATOR =
  process.env.NEXT_PUBLIC_TWITTER_CREATOR ?? "";
