import { marked, Renderer } from 'marked';
import postsManifest from '@/generated/blog-posts.json';

export type PostMeta = {
  slug: string;
  title: string;
  date: string;
  lastModified?: string;
  author: string;
  category: string;
  excerpt: string;
  metaTitle?: string;
  metaDescription?: string;
  keywords?: string[];
  coverImage?: string;
  draft?: boolean;
};

export type Post = PostMeta & {
  content: string;
  htmlContent: string;
};

type PostRecord = PostMeta & {
  content: string;
};

const posts: PostRecord[] = postsManifest.posts.map((post) => ({
  slug: post.slug,
  title: post.title,
  date: post.date,
  lastModified: post.lastModified ?? undefined,
  author: post.author,
  category: post.category,
  excerpt: post.excerpt,
  metaTitle: post.metaTitle ?? undefined,
  metaDescription: post.metaDescription ?? undefined,
  keywords: post.keywords,
  coverImage: post.coverImage ?? undefined,
  draft: post.draft,
  content: post.content,
}));

function slugifyHeading(text: string) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');
}

function compileMarkdown(content: string): string {
  const renderer = new Renderer();

  renderer.heading = function ({ text, depth }) {
    if (depth === 2 || depth === 3) {
      const id = slugifyHeading(text);
      return `<h${depth} id="${id}" style="scroll-margin-top: 6rem">${text}</h${depth}>\n`;
    }
    return `<h${depth}>${text}</h${depth}>\n`;
  };

  return marked(content, { renderer, async: false }) as string;
}

function getPublishedPosts() {
  return posts.filter((post) => !post.draft);
}

export function getAllPostSlugs(): string[] {
  return getPublishedPosts().map((post) => post.slug);
}

export function getAllPosts(): PostMeta[] {
  return getPublishedPosts()
    .map((post) => getPostMeta(post.slug))
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPostMeta(slug: string): PostMeta {
  const post = posts.find((entry) => entry.slug === slug && !entry.draft);

  if (!post) {
    throw new Error(`Post not found: ${slug}`);
  }

  return {
    slug: post.slug,
    title: post.title,
    date: post.date,
    lastModified: post.lastModified,
    author: post.author,
    category: post.category,
    excerpt: post.excerpt,
    metaTitle: post.metaTitle,
    metaDescription: post.metaDescription,
    keywords: post.keywords,
    coverImage: post.coverImage,
    draft: post.draft,
  };
}

export function getPost(slug: string): Post {
  const post = posts.find((entry) => entry.slug === slug && !entry.draft);

  if (!post) {
    throw new Error(`Post not found: ${slug}`);
  }

  return {
    slug: post.slug,
    title: post.title,
    date: post.date,
    lastModified: post.lastModified,
    author: post.author,
    category: post.category,
    excerpt: post.excerpt,
    metaTitle: post.metaTitle,
    metaDescription: post.metaDescription,
    keywords: post.keywords,
    coverImage: post.coverImage,
    draft: post.draft,
    content: post.content,
    htmlContent: compileMarkdown(post.content),
  };
}

export type TocItem = {
  id: string;
  text: string;
  level: 2 | 3;
};

export function extractToc(content: string): TocItem[] {
  const headingRegex = /^(#{2,3})\s+(.+)$/gm;
  const items: TocItem[] = [];
  let match;
  while ((match = headingRegex.exec(content)) !== null) {
    const level = match[1].length as 2 | 3;
    const text = match[2].trim();
    const id = slugifyHeading(text);
    items.push({ id, text, level });
  }
  return items;
}

export function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString('en-IN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC',
  });
}
