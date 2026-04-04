import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { MDXRemote } from 'next-mdx-remote/rsc';
import remarkGfm from 'remark-gfm';
import { getAllPostSlugs, getPost, extractToc, formatDate } from '@/lib/blog';
import { TableOfContents } from '@/components/TableOfContents';
import type { Metadata } from 'next';

const SITE_URL = 'https://www.maxinor.com';

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getAllPostSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  try {
    const post = getPost(slug);
    const title = post.metaTitle ?? `${post.title} — Maxinor Blog`;
    const description = post.metaDescription ?? post.excerpt;
    const url = `${SITE_URL}/blog/${post.slug}`;
    const image = post.coverImage
      ? `${SITE_URL}${post.coverImage}`
      : `${SITE_URL}/og-default.png`;

    return {
      title,
      description,
      keywords: post.keywords,
      alternates: { canonical: url },
      openGraph: {
        type: 'article',
        url,
        title,
        description,
        images: [{ url: image, width: 1200, height: 630, alt: post.title }],
        publishedTime: post.date,
        modifiedTime: post.lastModified ?? post.date,
        authors: [post.author],
        tags: post.keywords,
        siteName: 'Maxinor',
      },
      twitter: {
        card: 'summary_large_image',
        title,
        description,
        images: [image],
      },
    };
  } catch {
    return { title: 'Post Not Found — Maxinor Blog' };
  }
}

function slugify(text: string) {
  return String(text)
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');
}

function getTextContent(children: React.ReactNode): string {
  if (typeof children === 'string') return children;
  if (Array.isArray(children)) return children.map(getTextContent).join('');
  if (children && typeof children === 'object' && 'props' in (children as object)) {
    return getTextContent((children as { props: { children?: React.ReactNode } }).props.children);
  }
  return '';
}

const mdxComponents = {
  h2: ({ children }: { children?: React.ReactNode }) => {
    const id = slugify(getTextContent(children));
    return <h2 id={id} style={{ scrollMarginTop: '6rem' }}>{children}</h2>;
  },
  h3: ({ children }: { children?: React.ReactNode }) => {
    const id = slugify(getTextContent(children));
    return <h3 id={id} style={{ scrollMarginTop: '6rem' }}>{children}</h3>;
  },
};

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;

  let post;
  try {
    post = getPost(slug);
  } catch {
    notFound();
  }

  const toc = extractToc(post.content);
  const url = `${SITE_URL}/blog/${post.slug}`;
  const image = post.coverImage
    ? `${SITE_URL}${post.coverImage}`
    : `${SITE_URL}/og-default.png`;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.metaDescription ?? post.excerpt,
    url,
    datePublished: post.date,
    dateModified: post.lastModified ?? post.date,
    author: {
      '@type': 'Organization',
      name: post.author,
      url: SITE_URL,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Maxinor',
      url: SITE_URL,
      logo: {
        '@type': 'ImageObject',
        url: 'https://cdn.prod.website-files.com/68e4de0fbf5c464cee858fc3/68e4e417db41aba4d67eb664_50861696-aac9-4ad9-988c-2bcebfeb%20(1).png',
      },
    },
    image,
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
    keywords: post.keywords?.join(', '),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="relative bg-warm-white px-6 pt-24 pb-20 md:pt-32 md:pb-28">
        <div className="pointer-events-none absolute top-0 left-1/2 h-[300px] w-[600px] -translate-x-1/2 rounded-full bg-brand/5 blur-[100px]" />

        <div className="relative z-10 max-w-6xl mx-auto">
          <Link
            href="/blog"
            className="mb-10 inline-flex items-center gap-2 text-sm font-medium text-navy/50 transition-colors hover:text-brand"
          >
            ← Back to Blog
          </Link>

          <div className="flex gap-16">
            <article className="min-w-0 flex-1">
              <header className="mb-10">
                <div className="mb-4 flex flex-wrap items-center gap-3">
                  <span className="inline-block rounded-full bg-brand/10 px-3 py-1 text-xs font-semibold text-brand">
                    {post.category}
                  </span>
                  <span className="text-xs text-navy/40">{formatDate(post.date)}</span>
                  <span className="text-xs text-navy/40">By {post.author}</span>
                </div>

                <h1 className="text-3xl font-display font-medium leading-tight tracking-tight text-navy sm:text-4xl md:text-5xl">
                  {post.title}
                </h1>

                <p className="mt-4 text-lg font-light leading-relaxed text-navy/60">
                  {post.excerpt}
                </p>
              </header>

              <div className="prose prose-lg max-w-none
                prose-headings:font-display prose-headings:font-medium prose-headings:text-navy prose-headings:tracking-tight
                prose-p:text-navy/70 prose-p:font-light prose-p:leading-relaxed
                prose-a:text-brand prose-a:no-underline hover:prose-a:underline
                prose-strong:text-navy prose-strong:font-semibold
                prose-li:text-navy/70 prose-li:font-light
                prose-hr:border-navy/10
                prose-blockquote:border-l-brand prose-blockquote:text-navy/60
                prose-table:w-full prose-table:text-sm
                prose-thead:border-b prose-thead:border-navy/20
                prose-th:py-3 prose-th:px-4 prose-th:text-left prose-th:font-semibold prose-th:text-navy
                prose-td:py-3 prose-td:px-4 prose-td:text-navy/70 prose-td:border-b prose-td:border-navy/10
                prose-tr:transition-colors hover:prose-tr:bg-navy/[0.02]">
                <MDXRemote source={post.content} components={mdxComponents} options={{ mdxOptions: { remarkPlugins: [remarkGfm] } }} />
              </div>

              <div className="relative mt-16 overflow-hidden rounded-[2rem] border border-navy/10 bg-white p-8 text-center md:p-12 lg:p-16">
                <div className="pointer-events-none absolute top-0 left-1/2 h-[220px] w-[320px] -translate-x-1/2 rounded-full bg-brand/10 blur-[70px] md:h-[300px] md:w-[600px] md:blur-[80px]" />
                <div className="relative z-10 mx-auto max-w-2xl">
                  <h2 className="mb-5 text-3xl font-display font-medium tracking-tight text-navy md:mb-6 md:text-4xl">
                    Ready to work with Maxinor?
                  </h2>
                  <p className="mb-8 text-base font-light leading-relaxed text-navy/70 md:mb-10 md:text-lg">
                    Whether you&apos;re a founder, investor, or operator — we&apos;d love to hear from you.
                  </p>
                  <Link
                    href="/contact"
                    className="inline-flex w-full max-w-[280px] items-center justify-center gap-2 rounded-full bg-brand px-8 py-4 text-base font-semibold tracking-wide text-warm-white shadow-[0_0_40px_rgba(243,111,33,0.15)] transition-all duration-300 hover:-translate-y-1 hover:bg-brand/90 hover:shadow-[0_0_60px_rgba(243,111,33,0.3)] sm:w-auto sm:px-10 sm:py-5 sm:text-lg"
                  >
                    Get in Touch <ArrowRight className="h-4 w-4 shrink-0 sm:h-5 sm:w-5" />
                  </Link>
                </div>
              </div>
            </article>

            <TableOfContents items={toc} />
          </div>
        </div>
      </div>
    </>
  );
}
