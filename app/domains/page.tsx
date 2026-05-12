'use client';

import { motion, AnimatePresence } from 'motion/react';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';

const primaryBtn =
  'inline-flex items-center justify-center rounded-full bg-brand px-8 py-4 text-base font-semibold tracking-wide text-warm-white transition-all duration-300 hover:-translate-y-1 hover:bg-brand/90 shadow-[0_0_40px_rgba(243,111,33,0.15)] hover:shadow-[0_0_60px_rgba(243,111,33,0.3)] sm:px-10 sm:py-5';

const domains = [
  {
    id: 'media',
    number: '01',
    name: 'Media',
    sector: 'Broadcasting & Digital Media',
    problem:
      'The attention economy is fragmenting. Legacy media is burning cash on distribution without AI-native content operations.',
    capabilities: [
      'AI-powered content workflows and monetisation',
      'Digital media brand building and audience growth',
      'Venture building for next-gen media startups',
    ],
    operator: 'Priyabrata Padhi',
    operatorBg: 'ex-ITC, ex-Britannia',
    problemDetail:
      "Media companies are caught between fragmented audiences, rising content costs, and platforms that own distribution. Brands that will survive aren't the ones with the most content — they're the ones with the most efficient, AI-native content operations.",
    clientProblems: [
      '"My audience is growing on social but I can\'t monetise it."',
      '"I\'ve raised seed capital but have no GTM engine for my media product."',
      '"I need to build an AI content workflow — I don\'t know where to start."',
      '"I\'m competing with well-funded media houses on a fraction of the budget."',
    ],
  },
  {
    id: 'd2c',
    number: '02',
    name: 'D2C & Consumer',
    sector: 'Consumer Brands & Retail',
    problem:
      'Most D2C brands hit ₹5 Cr and stall. The GTM muscle that got them there won\'t scale them to ₹50 Cr.',
    capabilities: [
      'Full-funnel GTM from brand to repeat purchase',
      'AI-powered audience segmentation and retention',
      'Offline expansion playbooks for D2C to omnichannel',
    ],
    operator: 'Amar Daing + Priyabrata Padhi',
    operatorBg: 'ex-Google×Tata, ex-OYO / ex-ITC, ex-Britannia',
    problemDetail:
      'D2C is no longer just about performance marketing. The brands winning in 2026 are building community, repeat-purchase engines, and omnichannel presence — while managing CAC and LTV with operator-level precision.',
    clientProblems: [
      '"I\'m growing on Instagram but losing money on every order."',
      '"My repeat purchase rate is below 20% and I don\'t know why."',
      '"I need to go offline but have no retail distribution playbook."',
      '"My brand identity isn\'t converting — I need a GTM reset."',
    ],
  },
  {
    id: 'ai-data',
    number: '03',
    name: 'AI & Data',
    sector: 'AI Products & Data Platforms',
    problem:
      "Most companies have data. Almost none have the operator layer to turn it into a working AI system that ships and scales.",
    capabilities: [
      'AI product ideation to MVP to production',
      'Data platform architecture and AI readiness',
      'Agentic automation and enterprise AI workflows',
    ],
    operator: 'Alok Kumar',
    operatorBg: 'ex-Zee, ex-Oracle, ex-StanChart',
    problemDetail:
      "The AI gap isn't talent — it's judgment. Knowing which use case to build first, how to architect for scale, and how to get a model from lab to production with real business impact. That's the operator layer most teams are missing.",
    clientProblems: [
      '"My AI pilot worked in the demo. It\'s been 6 months and it\'s still not deployed."',
      '"I have 3 years of data and no idea how to make it useful."',
      '"I want to build an AI product but I don\'t know what\'s actually buildable vs hype."',
      '"My tech team can code but no one has shipped an AI product before."',
    ],
  },
  {
    id: 'fintech',
    number: '04',
    name: 'FinTech',
    sector: 'Financial Services & Deep Tech',
    problem:
      "India's FinTech gap isn't capital — it's domain-savvy execution that understands regulation, risk, and real user behaviour.",
    capabilities: [
      'FinTech product and platform build',
      'Banking, insurance, and lending workflow transformation',
      'AI-led compliance, risk, and operations modernisation',
    ],
    operator: 'Rajesh Ramanathan',
    operatorBg: 'ex-Accenture, ex-Wipro, ex-Mastek',
    problemDetail:
      'Indian FinTech is maturing fast. The opportunity is no longer just in payments — it\'s in lending infrastructure, embedded finance, insurtech, and B2B financial workflows. But execution here requires deep regulatory knowledge and risk discipline most product teams don\'t have.',
    clientProblems: [
      '"I\'m building in lending but the RBI compliance complexity is blocking our launch."',
      '"My enterprise FinTech sales cycle is 12+ months and I don\'t know how to shorten it."',
      '"I need to modernise legacy banking workflows without breaking production."',
      '"I want to embed financial products into my platform but need the right architecture."',
    ],
  },
  {
    id: 'healthcare',
    number: '05',
    name: 'Healthcare',
    sector: 'HealthTech & Clinical Tools',
    problem:
      'Healthcare is digitising fast but clinical workflow software is still being built by people who\'ve never worked in a hospital.',
    capabilities: [
      'Health tech product development and validation',
      'Clinical AI tools and diagnostic workflow automation',
      'GTM for B2B healthcare SaaS',
    ],
    operator: 'Alok Kumar + Research Team',
    operatorBg: 'ex-Zee, ex-Oracle, ex-StanChart',
    problemDetail:
      'The healthcare digitisation opportunity in India is massive — but the graveyard of failed health-tech products is bigger. The gap is almost always the same: tech built without clinical workflow understanding, and GTM that tries to sell to hospitals without understanding procurement.',
    clientProblems: [
      '"My health-tech product works but hospitals won\'t buy it — I don\'t understand the procurement cycle."',
      '"I\'m building a clinical AI tool but have no validation process or regulatory pathway."',
      '"My B2B health SaaS has pilots but can\'t convert to paid contracts."',
      '"I need to hire clinical advisors but don\'t know how to find the right ones."',
    ],
  },
  {
    id: 'defence',
    number: '06',
    name: 'Defence',
    sector: 'Defence Tech & Deep Tech',
    problem:
      "India's defence modernisation is creating a multi-billion opportunity for startups that can navigate procurement and deliver.",
    capabilities: [
      'Deep tech venture building for defence-adjacent sectors',
      'Compliance, certification, and GTM for defence startups',
      'Partner network for enterprise and government-side execution',
    ],
    operator: 'Maxinor Leadership Team',
    operatorBg: 'Multi-domain operator team',
    problemDetail:
      "India's Make in India and iDEX initiatives have opened the door for private defence startups. But navigating DRDO, DPP procurement, and dual-use certification is a full-time job before you've even built the product. This is where operator guidance changes the outcome.",
    clientProblems: [
      '"I have a defence-adjacent deep tech product but no idea how procurement works."',
      '"My startup qualifies for iDEX but we can\'t navigate the application and evaluation process."',
      '"I need to find the right enterprise buyer — procurement cycles here are opaque."',
      '"I\'m building dual-use tech and need to understand certification and compliance."',
    ],
  },
];

const tabs = [
  { id: 'overview', label: 'All' },
  ...domains.map((d) => ({ id: d.id, label: d.name })),
];

export default function DomainsPage() {
  const [activeTab, setActiveTab] = useState('overview');
  const [expandedDomain, setExpandedDomain] = useState<string | null>(null);
  const tabBarRef = useRef<HTMLDivElement>(null);

  // IntersectionObserver: update active tab as deep-dive sections scroll into view
  useEffect(() => {
    const sectionIds = ['overview', ...domains.map((d) => d.id)];
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveTab(id);
        },
        { threshold: 0.3, rootMargin: '-100px 0px -40% 0px' }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    const offset = 140; // navbar + tab bar height
    const top = el.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: 'smooth' });
    setActiveTab(id);
  };

  return (
    <div className="font-sans">

      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-navy px-6 pt-32 pb-20 md:pt-40 md:pb-24">
        {/* Subtle grid pattern */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
        <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-warm-white" />

        <div className="relative z-10 max-w-7xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-4 text-[11px] font-bold uppercase tracking-[0.22em] text-brand"
          >
            Where Operators Meet Sector Depth
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="mb-6 max-w-3xl text-4xl font-display font-medium tracking-tight text-warm-white md:text-6xl lg:text-7xl"
          >
            We don&apos;t just know your industry.{' '}
            <span className="text-brand">We&apos;ve built inside it.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-10 max-w-xl text-base font-light leading-relaxed text-warm-white/70 md:text-lg"
          >
            Maxinor&apos;s operator network brings hands-on domain experience in six high-growth
            sectors — from ideation through execution.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <button onClick={() => scrollTo('overview')} className={primaryBtn}>
              Find Your Domain <ArrowRight className="ml-2 h-4 w-4" />
            </button>
          </motion.div>
        </div>
      </section>

      {/* ── Sticky Tab Bar ── */}
      <div
        ref={tabBarRef}
        className="sticky top-[79px] z-40 border-b border-grey/20 bg-warm-white/95 backdrop-blur-xl"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex gap-1 overflow-x-auto py-3 scrollbar-hide">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => scrollTo(tab.id)}
                className={`shrink-0 rounded-full px-4 py-2 text-sm font-medium transition-all duration-200 ${
                  activeTab === tab.id
                    ? 'bg-brand text-white shadow-[0_0_20px_rgba(243,111,33,0.2)]'
                    : 'border border-grey/25 text-grey hover:border-brand/40 hover:text-navy'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ── Domain Overview Cards ── */}
      <section id="overview" className="bg-warm-white px-6 py-20 md:py-28">
        <div className="max-w-7xl mx-auto">
          <div className="mb-14 text-center md:mb-20">
            <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.22em] text-brand">Six Domains</p>
            <h2 className="text-3xl font-display font-medium tracking-tight text-navy md:text-5xl">
              Deep operator expertise.{' '}
              <span className="text-brand">Six high-growth sectors.</span>
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {domains.map((domain, i) => (
              <motion.div
                key={domain.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className="group relative rounded-[2rem] border border-grey/20 bg-white p-8 transition-all duration-500 hover:border-brand/30 hover:shadow-lg"
              >
                <span className="pointer-events-none absolute right-5 top-3 select-none text-7xl font-display font-bold leading-none text-brand/6">
                  {domain.number}
                </span>
                <p className="mb-1 text-[11px] font-bold uppercase tracking-[0.2em] text-grey/50">{domain.sector}</p>
                <h3 className="mb-3 text-xl font-display font-semibold text-navy">{domain.name}</h3>
                <p className="mb-5 text-sm font-light leading-relaxed text-grey">{domain.problem}</p>
                <ul className="mb-6 space-y-2">
                  {domain.capabilities.map((c) => (
                    <li key={c} className="flex items-start gap-2.5 text-sm text-grey">
                      <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                      {c}
                    </li>
                  ))}
                </ul>
                <div className="mb-5 border-t border-grey/12 pt-4">
                  <p className="text-xs text-grey/55">
                    <span className="font-semibold text-navy">{domain.operator}</span> · {domain.operatorBg}
                  </p>
                </div>
                <button
                  onClick={() => scrollTo(domain.id)}
                  className="inline-flex items-center gap-1 text-sm font-semibold text-brand transition-all duration-200 hover:gap-2"
                >
                  Explore <ArrowRight className="h-3.5 w-3.5" />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Domain Deep-Dives ── */}
      {domains.map((domain, i) => (
        <section
          key={domain.id}
          id={domain.id}
          className={`px-6 py-20 md:py-28 border-t border-grey/10 ${
            i % 2 === 0 ? 'bg-white' : 'bg-warm-white'
          }`}
        >
          <div className="max-w-7xl mx-auto">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">

              {/* Left: header + problem */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.22em] text-brand">{domain.sector}</p>
                <h2 className="mb-5 text-3xl font-display font-medium tracking-tight text-navy md:text-4xl">
                  {domain.name}
                </h2>
                <div className="mb-6 h-0.5 w-12 bg-brand" />
                <h3 className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-grey/50">
                  The Problem We Solve
                </h3>
                <p className="mb-6 text-base font-light leading-relaxed text-grey md:text-lg">
                  {domain.problemDetail}
                </p>

                {/* Engagement paths */}
                <h3 className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-grey/50">
                  How We Engage in {domain.name}
                </h3>
                <div className="space-y-3">
                  {[
                    { name: 'Venture Sprint', detail: '30 days · Diagnosis + Roadmap' },
                    { name: 'Venture Partner', detail: '6 months · Embedded execution + capital' },
                    { name: 'Venture CXO', detail: '6–12 months · Fractional operator leadership' },
                  ].map((eng) => (
                    <div
                      key={eng.name}
                      className="flex items-center gap-3 rounded-xl border border-grey/15 bg-warm-white px-4 py-3"
                    >
                      <span className="text-brand">→</span>
                      <div>
                        <span className="text-sm font-semibold text-navy">{eng.name}</span>
                        <span className="mx-2 text-grey/30">·</span>
                        <span className="text-sm text-grey/60">{eng.detail}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Right: client problems + operator + CTA */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.1 }}
              >
                <h3 className="mb-5 text-xs font-bold uppercase tracking-[0.18em] text-grey/50">
                  What Clients Come to Us For
                </h3>
                <ol className="mb-10 space-y-3">
                  {domain.clientProblems.map((p, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-3 rounded-xl border border-grey/15 bg-warm-white px-4 py-3.5"
                    >
                      <span className="shrink-0 text-sm font-bold text-brand/50">
                        {String(idx + 1).padStart(2, '0')}
                      </span>
                      <p className="text-sm font-light leading-relaxed text-grey">{p}</p>
                    </li>
                  ))}
                </ol>

                {/* Operator card */}
                <div className="mb-8 rounded-2xl border border-grey/20 bg-navy/5 px-5 py-4">
                  <p className="mb-1 text-[11px] font-bold uppercase tracking-[0.18em] text-brand/70">
                    Operator Behind This Domain
                  </p>
                  <p className="text-base font-semibold text-navy">{domain.operator}</p>
                  <p className="text-sm text-grey/60">{domain.operatorBg}</p>
                </div>

                <Link href="/contact" className={primaryBtn}>
                  Work with us in {domain.name} <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </motion.div>
            </div>
          </div>
        </section>
      ))}

      {/* ── T-Shape Section ── */}
      <section className="bg-navy px-6 py-20 md:py-28">
        <div className="max-w-7xl mx-auto">
          <div className="mb-14 text-center">
            <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.22em] text-brand">
              The T-Shape Advantage
            </p>
            <h2 className="mb-4 text-3xl font-display font-medium tracking-tight text-warm-white md:text-5xl">
              Horizontal depth.{' '}
              <span className="text-brand">Vertical expertise.</span>
            </h2>
            <p className="mx-auto max-w-2xl text-base font-light leading-relaxed text-warm-white/60 md:text-lg">
              Every Maxinor engagement combines two things most firms only offer one of.
            </p>
          </div>

          <div className="mx-auto max-w-4xl">
            {/* Horizontal bar */}
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              whileInView={{ opacity: 1, scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="mb-3 origin-left"
            >
              <div className="flex items-center gap-0 overflow-hidden rounded-2xl">
                {['Ideation', 'Strategy', 'Product', 'GTM', 'Revenue', 'Scale', 'Capital'].map((item, i) => (
                  <div
                    key={item}
                    className="flex-1 border-r border-navy/60 bg-brand/90 px-2 py-4 text-center last:border-r-0"
                  >
                    <span className="text-[11px] font-bold uppercase tracking-[0.1em] text-white">{item}</span>
                  </div>
                ))}
              </div>
              <p className="mt-2 text-center text-xs font-light text-warm-white/40">
                Operator capabilities across the full venture lifecycle
              </p>
            </motion.div>

            {/* Vertical bars */}
            <div className="mt-8 grid grid-cols-3 gap-3 md:grid-cols-6">
              {domains.map((domain, i) => (
                <motion.div
                  key={domain.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="flex flex-col items-center"
                >
                  <div className="mb-2 w-full rounded-2xl border border-white/10 bg-white/6 py-8 flex items-end justify-center"
                    style={{ borderTopColor: 'var(--color-brand)', borderTopWidth: '3px' }}>
                    <span className="rotate-180 text-[11px] font-bold uppercase tracking-[0.12em] text-warm-white/70"
                      style={{ writingMode: 'vertical-rl' }}>
                      {domain.name}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
            <p className="mt-4 text-center text-xs font-light text-warm-white/40">
              Deep domain expertise — not generic execution
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-14 text-center"
          >
            <p className="mx-auto max-w-xl text-base font-light text-warm-white/60">
              This is why Maxinor operators are not advisors who have read the playbook.{' '}
              <span className="font-medium text-warm-white/90">They&apos;ve run the plays.</span>
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Partners ── */}
      <section className="bg-[#EDE7DC] px-6 py-20 md:py-28">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12 text-center md:mb-16">
            <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.22em] text-brand">Domain Partners</p>
            <h2 className="mb-4 text-3xl font-display font-medium tracking-tight text-navy md:text-5xl">
              Our Domain Partners
            </h2>
          </div>
          <div className="mx-auto max-w-3xl space-y-4">
            {[
              {
                category: 'D2C & Consumer',
                name: 'Saptharushi',
                description: 'Audience-as-a-Service — data enrichment and retail analytics for consumer brands.',
                url: 'https://saptharushi.com/',
              },
              {
                category: 'Tech Infrastructure',
                name: 'Hygriv',
                description: 'Climate-tech, cooling infrastructure, and enterprise tech backbone.',
                url: 'https://www.hygriv.com/',
              },
            ].map((p, i) => (
              <motion.div
                key={p.name}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex items-center justify-between gap-6 rounded-2xl border border-grey/20 bg-white px-6 py-5"
              >
                <div>
                  <p className="mb-0.5 text-[11px] font-bold uppercase tracking-[0.18em] text-brand/70">
                    {p.category}
                  </p>
                  <p className="text-base font-semibold text-navy">{p.name}</p>
                  <p className="text-sm font-light text-grey">{p.description}</p>
                </div>
                <Link
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shrink-0 rounded-full border border-grey/25 px-4 py-2 text-sm font-medium text-navy transition-all duration-200 hover:border-brand hover:text-brand"
                >
                  Visit →
                </Link>
              </motion.div>
            ))}
            <div className="rounded-2xl border border-dashed border-grey/30 px-6 py-4 text-center">
              <p className="text-sm text-grey/60">
                Partner slots open in{' '}
                <span className="font-medium text-navy">FinTech</span>,{' '}
                <span className="font-medium text-navy">Healthcare</span>, and{' '}
                <span className="font-medium text-navy">Defence</span> — selective onboarding Q3 2026
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-navy px-6 py-20 text-center md:py-28">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.22em] text-brand">Let&apos;s Talk</p>
            <h2 className="mb-5 text-3xl font-display font-medium tracking-tight text-warm-white md:text-5xl">
              Not sure which domain fits your problem?
            </h2>
            <p className="mb-8 text-base font-light leading-relaxed text-warm-white/60 md:text-lg">
              Tell us what you&apos;re building. We&apos;ll tell you where we fit — and if we don&apos;t, we&apos;ll say so.
            </p>
            <Link href="/contact" className={primaryBtn}>
              Start the conversation <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
