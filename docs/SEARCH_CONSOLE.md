# Google Search Console – Submission Checklist

Use this checklist when adding your site to [Google Search Console](https://search.google.com/search-console).

---

## 1. Add a property

- Go to [Search Console](https://search.google.com/search-console) → **Add property**.
- Choose **URL prefix** and enter your live site URL (e.g. `https://aicrix.com`).
- Do **not** add a trailing slash.

---

## 2. Verify ownership

### Option A: HTML meta tag (recommended)

1. In Search Console, pick **HTML tag** as the verification method.
2. Copy the **content** value from the tag, e.g.:
   ```html
   <meta name="google-site-verification" content="abc123..." />
   ```
3. Add it to your environment and redeploy:
   ```env
   NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION=abc123...
   ```
4. In Search Console, click **Verify**. The meta tag is already wired in the site layout.

### Option B: HTML file upload

1. In Search Console, pick **HTML file** and download the file (e.g. `google123abc.html`).
2. Put that file in the **`public/`** folder of this project.
3. Redeploy. The file will be served at `https://yourdomain.com/google123abc.html`.
4. In Search Console, click **Verify**.

---

## 3. Submit the sitemap

After verification:

1. In Search Console, open **Sitemaps** (left sidebar).
2. Under **Add a new sitemap**, enter:
   ```text
   sitemap.xml
   ```
3. Click **Submit**.

Your sitemap URL will be: **`https://yourdomain.com/sitemap.xml`**

The sitemap includes:

- Homepage
- Main pages (about, contact, predictions, how-it-works, etc.)
- Blog index and all blog posts

---

## 4. URLs to check (optional)

Use **URL Inspection** to confirm these are indexable and render correctly:

| URL | Purpose |
|-----|--------|
| `https://yourdomain.com` | Homepage |
| `https://yourdomain.com/blog` | Blog listing |
| `https://yourdomain.com/sitemap.xml` | Sitemap |
| `https://yourdomain.com/robots.txt` | Robots file |

Replace `yourdomain.com` with your actual domain (e.g. `aicrix.com`).

---

## 5. After submission

- **Coverage**: Check **Pages** / **Indexing** over the next days for errors or warnings.
- **Core Web Vitals**: Under **Experience** → **Core Web Vitals**, fix any reported issues.
- **Mobile usability**: Under **Experience** → **Mobile usability**, fix any issues.
- **Sitemaps**: In **Sitemaps**, confirm status is “Success” and “Discovered URLs” increases over time.

---

## Quick reference – Your URLs

Replace `yourdomain.com` with your real domain (from `NEXT_PUBLIC_SITE_URL`):

| What | URL |
|------|-----|
| Site | `https://yourdomain.com` |
| Sitemap | `https://yourdomain.com/sitemap.xml` |
| Robots | `https://yourdomain.com/robots.txt` |

---

## Already configured in this project

- **robots.txt** – Allows all crawlers and references the sitemap.
- **sitemap.xml** – Generated at build; includes all static and blog URLs.
- **Canonicals** – Set per page (home and inner pages).
- **Structured data** – Organization, WebSite, WebPage (home), Article + BreadcrumbList (blog posts), ItemList (blog index).
- **Meta** – Titles, descriptions, Open Graph, Twitter cards.
- **Verification** – Meta tag used when `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` is set.
