import Image from 'next/image';
import Link from 'next/link';
import { buildSiteUrl } from '@/lib/site';
import type { LinkedInProfile } from '@/lib/linkedin';
import feedsConfig from '@/content/linkedin-feeds.json';
import postsCache from '@/content/linkedin-posts-cache.json';
import type { Metadata } from 'next';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'LinkedIn |Team Insights & Updates | Maxinor',
  description: 'Latest posts from the Maxinor team and operators. Real thoughts from founders, operators, and builders shaping the Indian startup ecosystem.',
  keywords: ['Maxinor LinkedIn', 'operator insights', 'venture studio India', 'startup founders India'],
  alternates: { canonical: buildSiteUrl('/linkedin') },
  openGraph: {
    type: 'website',
    url: buildSiteUrl('/linkedin'),
    title: 'LinkedIn |Team Insights | Maxinor',
    description: 'Latest posts from the Maxinor team and operators.',
    siteName: 'Maxinor',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'LinkedIn |Maxinor',
    description: 'Latest posts from the Maxinor team and operators.',
  },
};

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('en-IN', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });
}

function truncate(text: string, maxLength = 260) {
  if (text.length <= maxLength) return { text, truncated: false };
  return { text: text.slice(0, maxLength).trimEnd() + '…', truncated: true };
}

export default function LinkedInPage() {
  const cache = postsCache as Record<string, LinkedInProfile['posts']>;
  const profiles: LinkedInProfile[] = (feedsConfig as Omit<LinkedInProfile, 'posts'>[]).map((p) => ({
    ...p,
    posts: cache[p.handle] ?? [],
  }));

  const activeProfiles = profiles.filter((p) => p.posts.length > 0);
  const comingSoon = profiles.filter((p) => p.posts.length === 0);

  return (
    <div className="relative overflow-hidden bg-warm-white px-6 pt-24 pb-20 md:pt-32 md:pb-28">
      <div className="pointer-events-none absolute bottom-0 left-1/2 h-[260px] w-[340px] -translate-x-1/2 rounded-full bg-brand/5 blur-[80px] md:h-[400px] md:w-[800px] md:blur-[100px]" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-14 md:mb-16">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-brand">LinkedIn</p>
          <h1 className="text-4xl font-display font-medium tracking-tight text-navy sm:text-5xl md:text-6xl">
            Team Insights
          </h1>
          <p className="mt-4 max-w-2xl text-base font-light leading-relaxed text-navy/70 md:text-lg">
            Real thoughts from our operators, founders, and builders |straight from their LinkedIn feeds.
          </p>
        </div>

        {/* Active profiles with posts */}
        <div className="flex flex-col gap-16">
          {activeProfiles.map((profile) => (
            <ProfileSection key={profile.handle} profile={profile} />
          ))}
        </div>

        {/* Coming soon strip */}
        {comingSoon.length > 0 && (
          <div className="mt-16 pt-10 border-t border-navy/10">
            <p className="mb-6 text-sm font-semibold uppercase tracking-widest text-navy/40">More operators |coming soon</p>
            <div className="flex flex-wrap gap-4">
              {comingSoon.map((p) => (
                <Link
                  key={p.handle}
                  href={p.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 rounded-2xl border border-navy/10 bg-white px-4 py-3 hover:border-brand/30 hover:shadow-sm transition-all duration-200"
                >
                  <div className="relative w-8 h-8 flex-shrink-0">
                    <Image
                      src={p.avatar}
                      alt={p.name}
                      fill
                      className="rounded-full object-cover"
                      sizes="32px"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-navy leading-tight">{p.name}</p>
                    <p className="text-xs text-navy/40">{p.role}</p>
                  </div>
                  <LinkedInIcon className="w-4 h-4 text-navy/30 ml-1" />
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function ProfileSection({ profile }: { profile: LinkedInProfile }) {
  return (
    <div>
      {/* Person header */}
      <div className="flex items-center gap-4 mb-7">
        <div className="relative w-12 h-12 flex-shrink-0">
          <Image
            src={profile.avatar}
            alt={profile.name}
            fill
            className="rounded-full object-cover ring-2 ring-white shadow-sm"
            sizes="48px"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-base font-display font-medium text-navy leading-tight">{profile.name}</p>
          <p className="text-sm text-navy/50">{profile.role}</p>
        </div>
        <Link
          href={profile.linkedinUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden sm:inline-flex items-center gap-2 rounded-full border border-navy/15 bg-white px-4 py-2 text-xs font-semibold text-navy hover:border-brand hover:text-brand transition-all duration-200"
        >
          <LinkedInIcon className="w-3.5 h-3.5" />
          Follow
        </Link>
      </div>

      {/* Post cards */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {profile.posts.map((post) => {
          const { text, truncated } = truncate(post.text);
          return (
            <div
              key={post.id}
              className="group flex flex-col rounded-[2rem] border border-navy/10 bg-white shadow-sm hover:-translate-y-1 hover:shadow-md transition-all duration-300 overflow-hidden"
            >
              {post.image && (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={post.image}
                  alt=""
                  className="w-full h-44 object-cover"
                  referrerPolicy="no-referrer"
                />
              )}
              <div className="flex flex-col flex-1 p-6">
                <p className="text-xs text-navy/40 mb-3">{formatDate(post.date)}</p>
                <p className="flex-1 text-sm font-light leading-relaxed text-navy/70 whitespace-pre-line">
                  {text}
                </p>
                <div className="mt-5 pt-4 border-t border-navy/10 flex items-center justify-end">
                  <Link
                    href={post.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-xs font-semibold text-brand group-hover:text-navy transition-colors"
                  >
                    {truncated ? 'Read more' : 'View post'} →
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}
