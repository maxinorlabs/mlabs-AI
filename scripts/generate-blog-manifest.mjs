import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';

const rootDir = process.cwd();
const postsDir = path.join(rootDir, 'content', 'posts');
const outputDir = path.join(rootDir, 'generated');
const outputFile = path.join(outputDir, 'blog-posts.json');

function toOptionalString(value) {
  return typeof value === 'string' ? value : null;
}

function toStringArray(value) {
  return Array.isArray(value)
    ? value.filter((item) => typeof item === 'string')
    : [];
}

function readPosts() {
  if (!fs.existsSync(postsDir)) {
    return [];
  }

  return fs
    .readdirSync(postsDir)
    .filter((fileName) => fileName.endsWith('.mdx'))
    .sort()
    .map((fileName) => {
      const fullPath = path.join(postsDir, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data, content } = matter(fileContents);
      const fileSlug = fileName.replace(/\.mdx$/, '');

      return {
        slug: toOptionalString(data.slug) ?? fileSlug,
        title: toOptionalString(data.title) ?? '',
        date: toOptionalString(data.date) ?? '',
        lastModified: toOptionalString(data.lastModified),
        author: toOptionalString(data.author) ?? '',
        category: toOptionalString(data.category) ?? '',
        excerpt: toOptionalString(data.excerpt) ?? '',
        metaTitle: toOptionalString(data.metaTitle),
        metaDescription: toOptionalString(data.metaDescription),
        keywords: toStringArray(data.keywords),
        coverImage: toOptionalString(data.coverImage),
        draft: Boolean(data.draft),
        content,
      };
    });
}

const manifest = {
  posts: readPosts(),
};

fs.mkdirSync(outputDir, { recursive: true });
fs.writeFileSync(outputFile, `${JSON.stringify(manifest, null, 2)}\n`, 'utf8');

console.log(`Generated ${path.relative(rootDir, outputFile)} with ${manifest.posts.length} posts.`);
