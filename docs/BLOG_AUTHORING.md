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
   status: draft
   ---
   ```

   Keep drafts undated. At authorized release, set `status: published` and the actual
   `date` in `YYYY-MM-DD` format. Use a unique title and a
   concise, accurate excerpt. Quote text containing punctuation such as colons.
   `image` and `author` are optional; the default image is `/og-image.png`.
   For a custom local image, place it in `public/` and use its root-relative URL.
   Add `imageAlt` and an honest `imageCaption` for custom editorial imagery.
   Social metadata does not invent image dimensions.

3. Write the article below the frontmatter. The page already renders its title as
   an H1; start body sections with `##`, then `###` for subsections. Use standard
   Markdown paragraphs, lists, links and images. The renderer is `react-markdown`;
   MDX, embedded React and raw HTML are not supported by the current configuration.
   GitHub-style Markdown tables are enabled through remark-gfm.
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
  or editing Markdown alone does not update an already deployed site. Draft and
  future-dated posts are excluded by the content policy. Keep new
  work marked `status: draft`; use the local-only preview workflow below to
  inspect it. Merging a draft article does not approve or publish it.
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

## Publication safety

New articles require `status: draft` or `status: published`. Drafts may omit `date`; published articles require a real ISO date. Optional `updated` must reflect a substantive review, not build time. Future-dated articles are excluded. The nine legacy URLs retain their routes and date history. Archived legacy pages remain accessible but are noindex and excluded from discovery and the sitemap.

Normal builds omit drafts from routes, index and sitemap. Use `BLOG_PREVIEW=true npm run build` only for local editorial review; all preview blog pages are noindex, robots disallows crawling, and the sitemap is empty. Never deploy preview output. Rebuild normally before an authorized release. A draft PR does not authorize release.

AI-generated illustrations must be disclosed and never represented as photographs of actual matches. Use relevant tables and worked examples rather than decorative imagery where they better answer the question.

## Current review coverage

274 individually revised educational and historical match articles are staged from a frozen 503-draft membership snapshot. 277 source drafts have received individual editorial review; the venue average/par manuscript has additionally been consolidated into the existing venue URL, the probable/confirmed playing-XI manuscript is consolidated into its existing guide, and probability-interpretation material is consolidated into the match-prediction guide. 226 drafts are not integrated. All 274 staged articles have also passed an independent scoped source/arithmetic audit; this is not publication approval. The hit-wicket article is expressly MCC-scoped and no longer asserts the disputed cross-reference interpretation.

Zero new articles are release-approved. Rendered/mobile/accessibility review and accountable editorial release approval remain outstanding. Local Chromium cannot start under this environment's socket restriction; HTML tests are not a substitute for visual QA. Independent review corrected a VJD report-date wording issue; all current staged articles have completed scoped second factual/arithmetic review. Private source pages and provenance manifests must never enter this public repository.

## Release checklist

- Recheck each factual claim and effective playing condition against linked primary evidence. Preserve historical context and explicit fictional examples.
- Map each search intent to one canonical URL. Update existing coverage rather than creating a competing duplicate.
- Verify arithmetic, headings, tables, source links, alt text and internal destinations. Publishing a page that links to an unpublished article fails content validation.
- Assign accountable editorial ownership and real publication/review dates; never invent credentials or performance metrics.
- Run `npm run test:content`, TypeScript, lint, production build and `npm run test:export`. Update the explicit staged-count assertion when scope changes.
- Run `npm run test:preview` after a local preview build. It checks all draft routes, semantic tables, image disclosure, noindex, dates and sitemap safety. Rebuild normally afterward.
- Obtain editorial release approval separately from draft-PR review.

## Organic growth

Prioritize answer-first explanations, useful examples, credible sources and natural internal links over page count. Structured data must match visible content. Ordinary SEO applies to AI search; there is no special AI schema requirement or ranking guarantee. After authorized publication, verify canonical/indexing status and submit the sitemap through Search Console. Do not use Google's Indexing API for ordinary blog posts. Track indexed canonical pages, query impressions, clicks, CTR and meaningful download conversions by topic; consolidate weak duplicate intent rather than scaling thin pages.

References: https://developers.google.com/search/docs/appearance/ai-features ; https://developers.google.com/search/docs/appearance/structured-data/article ; https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap

The existing how-ai-predicts-cricket URL has also been rewritten to remove unsupported model-count, data-history and89% accuracy claims, preserving its original publication date and recording a substantive correction date. The existing venue, match-preview and welcome articles have also been corrected without changing their canonical URLs. Five dated legacy forecasts have been replaced with clear archival correction notices; unsupported predictions are withdrawn, not replaced with invented results. Their URLs and original dates are preserved, with archived:true keeping them out of the blog listing and sitemap and marking them noindex. These proposed corrections have not been deployed.

A prior review batch deliberately holds seven manuscripts lacking adequate primary evidence/current ledgers: detailed ILT20 operative rules, auction recall procedure, current duck/record comparisons and selected historical record ledgers. They are not in the public staging corpus. Missing evidence is not replaced with invented facts or generic filler.

Two further source-evidence holds remain outside staging: a historical IPL standings table whose official season selector returns a different year, and the full revised fixture schedule whose primary PDF is currently inaccessible. Neither was replaced with an unverified table or an invented fixture list. Together with the seven earlier holds, nine known manuscripts require stronger source evidence. A further full-season calendar is held until its complete fixture list is reconciled against official results, bringing known evidence holds to ten.
