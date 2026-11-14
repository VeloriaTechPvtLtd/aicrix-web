# Publishing an AICRIX blog post

The blog uses Next.js App Router and Markdown files, without a separate CMS.
Existing posts live in `src/content/blog/posts/`. Keep the nine existing files
and their filenames: each filename determines a public URL at `/blog/<filename>`.
Renaming a published file changes its URL and requires a permanent redirect from
the old URL, configured for the deployment host.

## Add a post

1. Create a UTF-8 `.md` file in `src/content/blog/posts/` with a descriptive,
   lowercase, hyphen-separated filename, such as `reading-cricket-pitch-reports.md`.
2. Start with YAML frontmatter:

   ```yaml
   ---
   title: "Reading Cricket Pitch Reports"
   excerpt: "A practical guide to interpreting pitch conditions and their limits when assessing a cricket match."
   date: "2026-11-09"
   image: /og-image.png
   author: AICRIX Team
   ---
   ```

   Use the actual publication date in `YYYY-MM-DD` format, a unique title, and a
   concise, accurate excerpt. Quote text containing punctuation such as colons.
   `image` and `author` are optional; the default image is `/og-image.png`.
   For a custom local image, place it in `public/` and use its root-relative URL.
   Social metadata currently declares images as 1200 × 630, so use that size.

3. Write the article below the frontmatter. The page already renders its title as
   an H1; start body sections with `##`, then `###` for subsections. Use standard
   Markdown paragraphs, lists, links and images. The renderer is `react-markdown`;
   MDX, embedded React and raw HTML are not supported by the current configuration.
   GitHub-style Markdown tables are not enabled.
4. Link to relevant existing articles using `/blog/<slug>` and include useful
   source links for factual claims. Add descriptive alt text to article images.
   Verify match dates, venues, player availability and statistics before publishing.
   Do not present sample predictions, unverified accuracy rates or invented user
   counts as measured results. Predictions must not imply guaranteed outcomes.

## Preview and publish

- Run `npm run dev` and review both `/blog` and the new article URL, including on
  mobile. Restart the development server if new files do not appear: the loader
  caches the post collection in memory.
- Run `npm run lint`, `npx tsc --noEmit`, then `npm run build` before release.
- Commit the post and any images, review the diff, and deploy a new build. Adding
  or editing Markdown alone does not update an already deployed site. There is no
  scheduled publishing or draft filter: every `.md` file in the directory is
  included, even if its date is in the future. Keep drafts outside this directory.
- Firebase/static hosting uses the generated `out/` directory. Vercel uses normal
  Next.js output. Preserve the existing environment-dependent build configuration.

The loader supplies the blog index and each statically generated post route.
Titles, excerpts and dates also supply canonical metadata, social cards and
Article/Breadcrumb structured data. The current model uses `date` for both
publication and modification dates; it has no separate `updated` field.

`npm run build` runs `next-sitemap` through the `postbuild` script. The sitemap
includes Markdown posts automatically, writing to `out/` for static hosting or
`public/` on Vercel. `src/app/robots.ts` alone generates `/robots.txt`; do not add a
second `public/robots.txt` or enable robots generation in `next-sitemap`.

After deployment, verify the article URL, its canonical and social metadata,
`/blog`, `/sitemap.xml` and `/robots.txt`. Confirm the sitemap includes the new URL
and excludes error pages. `NEXT_PUBLIC_SITE_URL` must be the intended canonical
origin, normally `https://aicrix.com`. See `docs/SEARCH_CONSOLE.md` for search
verification guidance. Preserve all existing blog URLs and legal/contact routes
when changing the design.

## Reviewed draft staging (2026-11-14)

New articles require `status: draft` or `status: published`. Drafts may omit `date`; published articles require a real ISO publication date. Optional `updated` must reflect substantive review, not the build time. Future-dated articles are not published. Existing nine URLs retain their prior behavior.

Normal builds omit drafts from routes, index and sitemap. For local editorial review only, run `BLOG_PREVIEW=true npm run build`; preview blog pages are noindex and its robots disallows crawling. Do not deploy preview output. Rebuild normally before any authorized production release. Draft PR does not authorize release.

Use `image`, `imageAlt`, and `imageCaption` for local editorial assets. AI-generated illustrations must be disclosed and never represented as photographs of real matches. Markdown tables are rendered with GFM and a horizontally scrollable region.

## Batch coverage and release gates

This initial batch stages nine revised educational articles. Ten source drafts received editorial review; venue-average versus par is held for consolidation with the existing venue report. This is not completion of the 503-draft collection: 494 drafts are not integrated here. No new article is release-approved. In particular, the tie/draw historical example still needs independent scorecard corroboration. The retired-hurt article explicitly scopes its playing-condition claims to ICC Test conditions; do not extend those claims to IPL without a verified source.

Before changing any article to published:
- Recheck every factual claim and dated playing condition against the linked primary source.
- Map one distinct search intent to a canonical URL; update existing coverage instead of duplicating it.
- Check worked calculations, headings, descriptive links, mobile tables, image relevance and accessibility.
- Assign accountable editorial ownership and actual publication/review dates. Do not invent author credentials.
- Verify all internal links resolve in the intended release, not only in preview.
- Run `npm run test:content`, TypeScript, build and `npm run test:export`; extend the fixed staging-count test as batches change.
- Obtain editorial release approval separately from draft-PR review.

## Organic growth and measurement

Prioritize answer-first explanations, useful examples, credible sources, and natural links to relevant guides over article volume. Article structured data must match visible content. There is no special AI-search markup requirement and no ranking guarantee. After an authorized public release, verify canonical/indexing status and submit the sitemap in Search Console. Do not use Google's Indexing API for blog articles. Track indexed canonical pages, query impressions, clicks, CTR and meaningful app-download conversions by topic; consolidate low-value duplicate intent rather than scaling thin pages.

References: https://developers.google.com/search/docs/appearance/ai-features ; https://developers.google.com/search/docs/appearance/structured-data/article ; https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap

Run `npm run test:preview` after a local `BLOG_PREVIEW=true npm run build`. It verifies all staged article routes are noindex and the preview sitemap is empty. Rebuild without BLOG_PREVIEW before running production export tests. Browser visual QA is separate from these HTML checks.
