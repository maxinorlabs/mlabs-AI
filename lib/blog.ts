import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkGfm from 'remark-gfm';
import remarkRehype from 'remark-rehype';
import rehypeStringify from 'rehype-stringify';

const postsDirectory = path.join(process.cwd(), 'content/posts');

function slugifyHeading(text: string) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function getNodeText(node: any): string {
  if (node.type === 'text') return node.value ?? '';
  if (node.children) return (node.children as unknown[]).map(getNodeText).join('');
  return '';
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function rehypeAddHeadingIds(): (tree: any) => void {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return (tree: any) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    function walk(node: any) {
      if (node.type === 'element' && (node.tagName === 'h2' || node.tagName === 'h3')) {
        const text = getNodeText(node);
        node.properties = node.properties ?? {};
        node.properties.id = slugifyHeading(text);
        node.properties.style = 'scroll-margin-top: 6rem';
      }
      if (node.children) node.children.forEach(walk);
    }
    if (tree.children) tree.children.forEach(walk);
  };
}

function compileMarkdown(content: string): string {
  const result = unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkRehype)
    .use(rehypeAddHeadingIds)
    .use(rehypeStringify)
    .processSync(content);
  return String(result);
}

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

export function getAllPostSlugs(): string[] {
  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames
    .filter((f) => f.endsWith('.mdx'))
    .map((f) => f.replace(/\.mdx$/, ''))
    .filter((slug) => {
      const fullPath = path.join(postsDirectory, `${slug}.mdx`);
      const { data } = matter(fs.readFileSync(fullPath, 'utf8'));
      return !data.draft;
    });
}

export function getAllPosts(): PostMeta[] {
  const slugs = getAllPostSlugs();
  return slugs
    .map((slug) => getPostMeta(slug))
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPostMeta(slug: string): PostMeta {
  const fullPath = path.join(postsDirectory, `${slug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data } = matter(fileContents);
  return {
    slug: data.slug ?? slug,
    title: data.title ?? '',
    date: data.date ?? '',
    lastModified: data.lastModified,
    author: data.author ?? '',
    category: data.category ?? '',
    excerpt: data.excerpt ?? '',
    metaTitle: data.metaTitle,
    metaDescription: data.metaDescription,
    keywords: data.keywords,
    coverImage: data.coverImage,
    draft: data.draft,
  };
}

export function getPost(slug: string): Post {
  const fullPath = path.join(postsDirectory, `${slug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);
  return {
    slug: data.slug ?? slug,
    title: data.title ?? '',
    date: data.date ?? '',
    lastModified: data.lastModified,
    author: data.author ?? '',
    category: data.category ?? '',
    excerpt: data.excerpt ?? '',
    metaTitle: data.metaTitle,
    metaDescription: data.metaDescription,
    keywords: data.keywords,
    coverImage: data.coverImage,
    content,
    htmlContent: compileMarkdown(content),
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
  });
}
