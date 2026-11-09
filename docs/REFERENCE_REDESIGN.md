# AiCrix reference redesign

This Next.js implementation ports the user's AiCrix Cricket Intelligence reference, version 3 (9 November 2026), into the existing App Router application. It does not embed or depend on the private reference Site at runtime.

## Structure

- `src/features/reference/`: server-rendered page sections, shared header/footer, six guides, screen metadata, and one progressive-enhancement client component.
- `public/reference/`: exact reference graphics, official store screenshots, and locally hosted Inter variable font.
- `SiteInteractions.tsx`: motion preference, responsive phones, menu, feature tabs, screenshot dialog/carousel, guide filtering, and country highlighting. All listeners and observers clean up during navigation.
- Existing legal page source and all nine existing blog posts remain unchanged. Existing URLs, contact details, app association files, and advertising files are retained.
- The original contact form was inert. It now validates fields and prepares a visitor-reviewed email draft; no backend message delivery is implied or added.

## Routes

The homepage uses the reference composition. `/insights`, `/guides/[slug]`, and `/download` carry its supporting content. `/blog` and all original blog URLs remain available. Existing informational and policy routes use the shared visual shell. The footer adds a Blog link for organic discovery while the original three-link header is retained.

## Checks

Run `npm ci`, `npx tsc --noEmit`, `npm run lint`, `npm run build`, then `npm run test:export` for the static export target. Vercel keeps the existing dynamic Next.js deployment configuration. See `BLOG_AUTHORING.md` for publishing new posts.

Store ratings/review quotes are retained from the reference and explicitly dated 8 November 2026. They are not presented as live statistics. Unsupported accuracy promises in the old homepage metadata were removed.

No production deployment, environment-variable change, or publishing is part of this PR.

## Verification completed

- TypeScript no-emit check, ESLint (zero warnings), optimized Next.js build, and six static-export regression tests passed.
- Generated 34 build routes. Export tests check every local link/script/image target, all nine original blog canonicals/schema/sitemap entries, the legal-source hashes, contact information, and new guide routes.
- Browser inspection confirmed the reference composition on desktop and phone. Homepage content widths of 320, 390, 579, 768, 1024, and 1440px showed no horizontal overflow or broken loaded images; App Store icons stayed contained.
- Contact, Privacy, Terms, Blog and Player guide pages also passed 320px overflow checks.
- Verified gallery open/next/close, feature switching, country selection, mobile menu/Escape with focus return, guide search, draft-only contact flow, stale-draft invalidation, motion preference persistence, and browser Back navigation.
- Physical-device testing, real-user performance metrics and a production deployment have not been performed. Browser QA used the final static export in the managed local preview. Native Next.js development preview was incompatible with the preview manager's Vite-style flags, so the built export was used without altering the application to accommodate the preview infrastructure.

## Direct visual comparison

Independent side-by-side inspection at 390px and 1440px confirmed identical measured section positions/heights, hero phone bounds and heading typography. Exact reference assets, locally hosted font and animation CSS are retained. The added Blog footer link was moved to the Explore column to preserve the reference footer height; the original header navigation composition is unchanged. Intentional content/behavior differences are local policy/contact URLs, retained original policy/contact/blog copy and the repaired email-draft form.
