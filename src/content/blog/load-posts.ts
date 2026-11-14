import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { dateString, validatePost, isPublished } from "./content-policy.cjs";

export interface BlogPostMeta {
  slug: string;
  title: string;
  excerpt: string;
  date?: string;
  image?: string;
  author?: string;
  updated?: string;
  imageAlt?: string;
  imageCaption?: string;
  preview: boolean;
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
    const errors = validatePost(data, slug);
    if (errors.length) throw new Error(`[blog] ${name}: ${errors.join(", ")}`);
    const published = isPublished(data, slug);
    const preview = process.env.BLOG_PREVIEW === "true";
    if (!published && !preview) continue;
    const title = data.title as string;
    const excerpt = data.excerpt as string;
    const date = dateString(data.date);
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
      updated: dateString(data.updated),
      imageAlt: data.imageAlt as string | undefined,
      imageCaption: data.imageCaption as string | undefined,
      preview,
    });
  }
  posts.sort((a, b) => (b.date ?? "").localeCompare(a.date ?? "") || a.slug.localeCompare(b.slug));
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
