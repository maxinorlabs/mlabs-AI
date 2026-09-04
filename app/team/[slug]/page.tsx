import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, Linkedin } from 'lucide-react';
import { notFound } from 'next/navigation';
import { teamProfiles, getProfileBySlug } from '@/lib/team-profiles';
import { CompanyLogo, hasCompanyLogo } from '@/components/CompanyLogo';

export async function generateStaticParams() {
  return teamProfiles.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const profile = getProfileBySlug(slug);
  if (!profile) return {};
  return {
    title: `${profile.name} — Maxinor`,
    description: profile.tagline,
  };
}

function getTemplatedFirstName(name: string) {
  const titlePrefixes = new Set(['dr', 'dr.', 'prof', 'prof.', 'mr', 'mr.', 'mrs', 'mrs.', 'ms', 'ms.']);
  const parts = name.trim().split(/\s+/);
  const firstNonTitle = parts.find((part) => !titlePrefixes.has(part.toLowerCase()));
  return firstNonTitle ?? name;
}

export default async function TeamMemberPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const profile = getProfileBySlug(slug);
  if (!profile) notFound();

  const templatedFirstName = getTemplatedFirstName(profile.name);

  const others = teamProfiles.filter(
    (p) => p.slug !== slug && p.section === profile.section
  ).slice(0, 2);

  return (
    <div className="font-sans bg-warm-white">

      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-navy px-6 pt-32 pb-20 md:pt-40 md:pb-28">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
        <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-warm-white" />

        <div className="relative z-10 max-w-7xl mx-auto">
          <Link
            href="/team"
            className="mb-10 inline-flex items-center gap-2 text-sm font-medium text-warm-white/50 transition-colors hover:text-warm-white"
          >
            <ArrowLeft className="h-4 w-4" /> Back to Team
          </Link>

          <div className="flex flex-col gap-10 md:flex-row md:items-end md:gap-16">
            {/* Photo */}
            <div className="relative h-48 w-48 shrink-0 overflow-hidden rounded-[2rem] border-4 border-white/10 sm:h-56 sm:w-56 md:h-64 md:w-64">
              {profile.image ? (
                <Image
                  src={profile.image}
                  alt={profile.name}
                  fill
                  className="object-cover"
                  style={{ objectPosition: profile.imagePosition ?? 'center' }}
                  referrerPolicy="no-referrer"
                  priority
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center bg-navy/60 text-6xl font-display text-white/30">
                  {profile.name.charAt(0)}
                </div>
              )}
            </div>

            {/* Name block */}
            <div className="flex-1">
              <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.22em] text-brand">
                {profile.section === 'leadership' ? 'Leadership' : 'Program Team'}
              </p>
              <h1 className="mb-3 text-4xl font-display font-medium tracking-tight text-warm-white md:text-6xl">
                {profile.name}
              </h1>
              <p className="mb-2 text-base font-medium text-brand md:text-lg">{profile.role}</p>
              <p className="mb-6 text-sm font-light text-warm-white/50">{profile.shortDesc}</p>
              <Link
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/8 px-5 py-2.5 text-sm font-medium text-warm-white transition-all duration-200 hover:border-brand hover:bg-brand hover:text-white"
              >
                <Linkedin className="h-4 w-4" /> LinkedIn Profile
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Tagline ── */}
      <section className="bg-warm-white px-6 py-14 border-b border-grey/10">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xl font-light leading-relaxed text-navy/70 md:text-2xl">
            &ldquo;{profile.tagline}&rdquo;
          </p>
        </div>
      </section>

      {/* ── Main content ── */}
      <section className="bg-warm-white px-6 py-16 md:py-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid gap-16 lg:grid-cols-3 lg:gap-20">

            {/* Bio */}
            <div className="lg:col-span-2">
              <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.22em] text-brand">Background</p>
              <div className="h-0.5 w-10 bg-brand mb-8" />
              <div className="space-y-5">
                {profile.bio.map((para, i) => (
                  <p key={i} className="text-base font-light leading-relaxed text-grey md:text-lg">
                    {para}
                  </p>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-10">
              {/* Expertise */}
              <div>
                <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.22em] text-brand">Areas of Expertise</p>
                <div className="flex flex-wrap gap-2">
                  {profile.expertise.map((e) => (
                    <span
                      key={e}
                      className="rounded-full border border-grey/20 bg-white px-3 py-1.5 text-xs font-medium text-navy"
                    >
                      {e}
                    </span>
                  ))}
                </div>
              </div>

              {/* Connect */}
              <div className="rounded-2xl border border-grey/20 bg-white p-6">
                <p className="mb-1 text-[11px] font-bold uppercase tracking-[0.18em] text-brand/70">Connect</p>
                <p className="mb-4 text-sm font-light text-grey">
                  Reach out to {templatedFirstName} directly on LinkedIn.
                </p>
                <Link
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-brand transition-all duration-200 hover:gap-3"
                >
                  <Linkedin className="h-4 w-4" /> View LinkedIn <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Career ── */}
      {profile.career.length > 0 && (
        <section className="bg-white px-6 py-16 md:py-24 border-t border-grey/10">
          <div className="max-w-7xl mx-auto">
            <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.22em] text-brand">Career</p>
            <h2 className="mb-12 text-2xl font-display font-medium tracking-tight text-navy md:text-3xl">
              Where the expertise was built
            </h2>
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {profile.career.map((entry, i) => (
                <div
                  key={i}
                  className="relative rounded-[1.5rem] border border-grey/15 bg-warm-white p-6"
                >
                  <span className="pointer-events-none absolute right-4 top-2 select-none text-5xl font-display font-bold text-brand/5">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <CompanyLogo company={entry.company} />
                  {!hasCompanyLogo(entry.company) && (
                    <p className="mb-2 text-base font-semibold text-navy">{entry.company}</p>
                  )}
                  <p className="text-sm font-light leading-relaxed text-grey">{entry.context}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── Work with us CTA ── */}
      <section className="bg-navy px-6 py-16 text-center md:py-24">
        <div className="max-w-2xl mx-auto">
          <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.22em] text-brand">Work Together</p>
          <h2 className="mb-5 text-2xl font-display font-medium tracking-tight text-warm-white md:text-4xl">
            Want {templatedFirstName} on your team?
          </h2>
          <p className="mb-8 text-base font-light text-warm-white/60">
            Maxinor operators embed inside your business to execute, not just advise.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-full bg-brand px-8 py-4 text-base font-semibold tracking-wide text-warm-white transition-all duration-300 hover:-translate-y-1 hover:bg-brand/90 shadow-[0_0_40px_rgba(243,111,33,0.15)] hover:shadow-[0_0_60px_rgba(243,111,33,0.3)]"
          >
            Start the conversation <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* ── Other team members ── */}
      {others.length > 0 && (
        <section className="bg-warm-white px-6 py-16 md:py-20 border-t border-grey/10">
          <div className="max-w-7xl mx-auto">
            <p className="mb-8 text-[11px] font-bold uppercase tracking-[0.22em] text-brand">
              More from the team
            </p>
            <div className="grid gap-6 sm:grid-cols-2">
              {others.map((member) => (
                <Link
                  key={member.slug}
                  href={`/team/${member.slug}`}
                  className="group flex items-center gap-5 rounded-2xl border border-grey/15 bg-white p-5 transition-all duration-300 hover:border-brand/30 hover:shadow-md"
                >
                  <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-full border-2 border-navy/10 group-hover:border-brand/30 transition-colors">
                    {member.image ? (
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover"
                        style={{ objectPosition: member.imagePosition ?? 'center' }}
                        referrerPolicy="no-referrer"
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center bg-grey/10 text-xl font-display text-grey/40">
                        {member.name.charAt(0)}
                      </div>
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-navy group-hover:text-brand transition-colors">{member.name}</p>
                    <p className="text-sm text-grey truncate">{member.role}</p>
                  </div>
                  <ArrowRight className="h-4 w-4 shrink-0 text-grey/30 group-hover:text-brand transition-colors" />
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
