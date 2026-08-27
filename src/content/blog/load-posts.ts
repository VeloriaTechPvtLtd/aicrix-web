import fs from "fs";
import path from "path";
import matter from "gray-matter";

export interface BlogPostMeta {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  image?: string;
  author?: string;
}

export interface BlogPost extends BlogPostMeta {
  body: string;
}

const POSTS_DIR = path.join(process.cwd(), "src", "content", "blog", "posts");

function loadAll(): BlogPost[] {
  let files: string[];
  try {
    files = fs.readdirSync(POSTS_DIR);
  } catch {
    return [];
  }
  const posts: BlogPost[] = [];
  for (const name of files) {
    if (!name.endsWith(".md")) continue;
    const slug = name.replace(/\.md$/, "");
    const filePath = path.join(POSTS_DIR, name);
    let raw: string;
    try {
      raw = fs.readFileSync(filePath, "utf8");
    } catch {
      continue;
    }
    let data: Record<string, unknown>;
    let content: string;
    try {
      const parsed = matter(raw);
      data = parsed.data as Record<string, unknown>;
      content = parsed.content;
    } catch (err) {
      console.error(`[blog] Failed to parse frontmatter in ${name}:`, err);
      continue;
    }
    const title = (data.title as string) ?? slug;
    const excerpt = (data.excerpt as string) ?? "";
    const dateRaw = data.date;
    const date =
      typeof dateRaw === "string"
        ? dateRaw
        : dateRaw instanceof Date
          ? dateRaw.toISOString().slice(0, 10)
          : new Date().toISOString().slice(0, 10);
    const image = data.image as string | undefined;
    const author = data.author as string | undefined;
    posts.push({
      slug,
      title,
      excerpt,
      date,
      image,
      author,
      body: content.trim(),
    });
  }
  posts.sort((a, b) => (b.date < a.date ? -1 : 1));
  return posts;
}

let cached: BlogPost[] | null = null;

export function getBlogPosts(): BlogPost[] {
  if (!cached) cached = loadAll();
  return cached;
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return getBlogPosts().find((p) => p.slug === slug);
}

export function getAllSlugs(): string[] {
  return getBlogPosts().map((p) => p.slug);
}
