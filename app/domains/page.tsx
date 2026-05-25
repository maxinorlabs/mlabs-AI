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
      "You've built an audience. You're not monetising it at the rate you should be.",
    capabilities: [
      'B2B licensing and syndication revenue',
      'AI-native content ops that cut cost and scale output',
      'Audience-to-revenue conversion strategy',
    ],
    operator: 'Samir Gupta',
    operatorBg: 'ex-Paytm, ex-Bzinga, ex-Solv',
    operatorSlug: 'samir-gupta',
    howWeEngage: [
      'Audience monetisation and revenue model design',
      'AI-native content operations',
      'B2B licensing and syndication strategy',
    ],
    problemDetail:
      "Media companies are caught between fragmented audiences, rising content costs, and platforms that own distribution. Brands that will survive aren't the ones with the most content. They're the ones with the most efficient, AI-native content operations.",
    clientProblems: [
      '"We have 500K+ followers but monetisation per user is a fraction of what it should be."',
      '"Our content team is growing but content ROI is declining. We need to restructure our production model."',
      '"We\'re profitable on owned channels but can\'t crack B2B licensing and syndication at scale."',
      '"We\'re scaling content volume but losing on distribution. We need an AI-native content ops overhaul."',
    ],
  },
  {
    id: 'd2c',
    number: '02',
    name: 'D2C & Consumer',
    sector: 'Consumer Brands & Retail',
    problem:
      "You've got GMV. Your contribution margins are the real problem.",
    capabilities: [
      'CAC reduction and performance marketing overhaul',
      'Repeat purchase and retention engine',
      'Offline and omnichannel expansion playbook',
    ],
    operator: 'Priyabrata Padhi',
    operatorBg: 'ex-Unitech Breweries, ex-ITC, ex-Britannia',
    operatorSlug: 'priyabrata-padhi',
    howWeEngage: [
      'Full-funnel GTM and channel strategy',
      'Offline distribution and retail expansion',
      'AI-native D2C operating system',
    ],
    problemDetail:
      'D2C is no longer just about performance marketing. The brands winning in 2026 are building community, repeat-purchase engines, and omnichannel presence, while managing CAC and LTV with operator-level precision.',
    clientProblems: [
      '"We\'re at ₹30 Cr GMV but contribution margin is negative. Scaling revenue is making us bleed more."',
      '"We\'re spending ₹2 Cr/month on performance marketing and CAC keeps climbing with no ceiling."',
      '"Our D2C channel is maxed out. We need an offline retail playbook but have no distribution relationships."',
      '"We\'ve hit product-market fit but repeat purchase is our ceiling. Retention is broken at scale."',
    ],
  },
  {
    id: 'bfsi',
    number: '03',
    name: 'BFSI',
    sector: 'Banking, Financial Services & Insurance',
    standaloneUrl: '/domains/bfsi',
    problem:
      "Your FinTech product is live. Compliance and portfolio scale are the next wall.",
    capabilities: [
      'Risk model calibration for growing loan books',
      'Regulatory expansion across states and products',
      'Compliance and onboarding stack modernisation',
    ],
    operator: 'Rajesh Ramanathan',
    operatorBg: 'ex-Accenture, ex-Wipro, ex-Mastek',
    operatorSlug: 'rajesh-ramanathan',
    howWeEngage: [
      'Risk model design and portfolio calibration',
      'Regulatory compliance and multi-state expansion',
      'AI-led financial operations and underwriting',
    ],
    problemDetail:
      'Indian BFSI is maturing fast. The opportunity is no longer just in payments. It\'s in lending infrastructure, embedded finance, insurtech, and B2B financial workflows. But execution here requires deep regulatory knowledge and risk discipline most product teams don\'t have.',
    clientProblems: [
      '"We\'ve crossed ₹100 Cr in disbursals but our risk model isn\'t calibrated for the portfolio size we\'re at."',
      '"Enterprise deals are coming in but our onboarding and compliance stack can\'t handle the volume."',
      '"We\'re operating in 3 states. Expanding nationally means 12 different regulatory contexts we\'re not ready for."',
      '"Our NPA rates are acceptable now but we know they\'ll blow up if we scale the book without a better model."',
    ],
  },
  {
    id: 'healthcare',
    number: '04',
    name: 'Healthcare',
    sector: 'HealthTech & Clinical Tools',
    problem:
      "You have hospital clients. Every deployment is still fully custom.",
    capabilities: [
      'Productisation to reduce professional services cost',
      'Tier 2 and Tier 3 hospital expansion GTM',
      'Clinical validation and peer recognition pathway',
    ],
    operator: 'Dr Rachit Negi',
    operatorBg: 'ex-Operation Smile, ex-World Bank, ex-PATH',
    operatorSlug: 'dr-rachit-negi',
    howWeEngage: [
      'Clinical product validation and standardisation',
      'B2B hospital sales and procurement GTM',
      'Tier 2 and Tier 3 market expansion',
    ],
    problemDetail:
      'The healthcare digitisation opportunity in India is massive, but the graveyard of failed health-tech products is bigger. The gap is almost always the same: tech built without clinical workflow understanding, and GTM that tries to sell to hospitals without understanding procurement.',
    clientProblems: [
      '"We have 15 hospital clients but every deployment is custom. We can\'t standardise without losing deals."',
      '"We\'re growing ARR but professional services are eating 60% of revenue. We need to productise."',
      '"We need to expand from metros to Tier 2 cities but the procurement dynamics are completely different."',
      '"Clinical validation worked in 2 hospitals. Getting peer-reviewed and nationally recognised is the next gate."',
    ],
  },
  {
    id: 'education',
    number: '05',
    name: 'Education',
    sector: 'EdTech & Workforce Development',
    problem:
      "You have learners. Employers don't recognise your outcomes yet.",
    capabilities: [
      'Completion rate and learning outcome improvement',
      'Employer linkage and certification credentialing',
      'B2B institutional sales motion and GTM',
    ],
    operator: 'Maxinor Leadership Team',
    operatorBg: 'Multi-domain operator team',
    operatorSlug: '',
    howWeEngage: [
      'Learning outcome and completion improvement',
      'Employer linkage and credential recognition',
      'B2B institutional sales and government GTM',
    ],
    problemDetail:
      "The EdTech gold rush left a graveyard of consumer apps with great content and poor outcomes. The real opportunity now is in institutional transformation, employer-linked skilling, and credentialing that actually moves the needle. Building here requires deep understanding of both learning design and enterprise sales.",
    clientProblems: [
      '"We have 50K+ learners but completion rates are below 15% and employers don\'t recognise our certification."',
      '"We\'ve signed 10 institutional clients but every deployment is bespoke. Customisation is eating our margins."',
      '"Our B2C revenue is plateauing. We need a B2B institutional sales motion but have no relationships or playbook."',
      '"We\'re growing enrolments but not outcomes. Employers are starting to question the ROI of our programmes."',
    ],
  },
  {
    id: 'marketing',
    number: '06',
    name: 'Marketing',
    sector: 'Brand Strategy & Consumer Marketing',
    problem:
      "Your brand is visible. Your conversion rate tells a different story.",
    capabilities: [
      'Brand positioning and identity strategy',
      'Consumer marketing and channel execution',
      'Content, community, and organic growth engine',
    ],
    operator: 'Aditi Agrawal',
    operatorBg: 'Founder, StickyPins & Avyu India',
    operatorSlug: 'aditi-agrawal',
    howWeEngage: [
      'Brand strategy and positioning',
      'Consumer marketing and channel strategy',
      'Content strategy and community building',
    ],
    problemDetail:
      "Marketing for startups and SMEs in India is too often confused with advertising spend. The brands winning in 2026 are the ones with sharp positioning, channel discipline, and community built before campaigns. We bring practitioner-level marketing expertise from someone actively building in the consumer space.",
    clientProblems: [
      '"We have a product but no brand narrative that resonates with our target segment."',
      '"We\'re spending on performance marketing but have zero organic growth. Nothing is compounding."',
      '"We\'ve tried three agencies. None understood the startup or SME context we operate in."',
      '"We need a consumer marketing strategy but our founding team is entirely product and tech."',
    ],
  },
  {
    id: 'legal',
    number: '07',
    name: 'Legal',
    sector: 'Legal, Compliance & Corporate Governance',
    problem:
      "Your legal layer is one audit — or one co-founder dispute — away from a serious problem.",
    capabilities: [
      'Startup structuring and founder agreements',
      'Regulatory compliance and licensing advisory',
      'Contracts, IP protection, and employment law',
    ],
    operator: 'Manik Sood',
    operatorBg: 'ex-Paytm, ex-Zee, ex-Healthkart | Founder, Law Grammar',
    operatorSlug: 'manik-sood',
    howWeEngage: [
      'Corporate structuring and co-founder agreements',
      'Regulatory licensing and compliance advisory',
      'Contracts, IP, and employment law',
    ],
    problemDetail:
      "Legal is the function most founders underinvest in until something breaks. By the time a compliance gap, a co-founder dispute, or a regulatory issue surfaces, the cost of fixing it is ten times what it would have cost to get it right early. We bring 20+ years of cross-industry legal expertise, and direct incorporation and legal services through Law Grammar, Manik's own law firm.",
    clientProblems: [
      '"We\'ve been operating for two years on agreements downloaded from the internet. We\'ve never had a legal review."',
      '"Our co-founder agreement doesn\'t cover vesting, IP assignment, or exit. We need to fix this before our next raise."',
      '"We\'re entering a regulated sector and have no idea what licensing we need or how long it takes to get approved."',
      '"We\'re scaling from 5 to 50 people and have no compliant HR framework or employment contracts in place."',
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
            sectors, from ideation through execution.
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
            <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.22em] text-brand">Our Domains</p>
            <h2 className="text-3xl font-display font-medium tracking-tight text-navy md:text-5xl">
              Deep operator expertise.{' '}
              <span className="text-brand">High-growth sectors.</span>
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
                <div className="flex flex-wrap items-center gap-4">
                  <button
                    onClick={() => scrollTo(domain.id)}
                    className="inline-flex items-center gap-1 text-sm font-semibold text-brand transition-all duration-200 hover:gap-2"
                  >
                    Explore <ArrowRight className="h-3.5 w-3.5" />
                  </button>
                  {domain.standaloneUrl && (
                    <Link
                      href={domain.standaloneUrl}
                      className="inline-flex items-center gap-1 text-sm font-medium text-grey/60 transition-all duration-200 hover:text-brand hover:gap-2"
                    >
                      Full Blueprint <ArrowRight className="h-3 w-3" />
                    </Link>
                  )}
                </div>
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

                {/* Domain capabilities */}
                <h3 className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-grey/50">
                  What We Do in {domain.name}
                </h3>
                <div className="space-y-3">
                  {domain.howWeEngage.map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-3 rounded-xl border border-grey/15 bg-warm-white px-4 py-3"
                    >
                      <span className="text-brand">→</span>
                      <span className="text-sm font-light text-grey">{item}</span>
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
                    Lead Operator
                  </p>
                  {domain.operatorSlug ? (
                    <Link href={`/team/${domain.operatorSlug}`} className="text-base font-semibold text-navy transition-colors duration-200 hover:text-brand">
                      {domain.operator}
                    </Link>
                  ) : (
                    <p className="text-base font-semibold text-navy">{domain.operator}</p>
                  )}
                  <p className="text-sm text-grey/60">{domain.operatorBg}</p>
                </div>

                <div className="flex flex-wrap items-center gap-4">
                  <Link href="/contact" className={primaryBtn}>
                    Work with us in {domain.name} <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                  {domain.standaloneUrl && (
                    <Link
                      href={domain.standaloneUrl}
                      className="inline-flex items-center gap-2 rounded-full border border-navy/20 px-8 py-4 text-base font-semibold tracking-wide text-navy transition-all duration-300 hover:-translate-y-1 hover:border-brand/40 hover:text-brand sm:px-10 sm:py-5"
                    >
                      Full Domain Blueprint <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  )}
                </div>
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
            <div className="mt-8 flex gap-3 w-full">
              {domains.map((domain, i) => (
                <motion.div
                  key={domain.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="flex-1 flex flex-col items-center"
                >
                  <div
                    className="w-full h-36 rounded-2xl border border-white/10 bg-white/5 flex items-center justify-center"
                    style={{ borderTopColor: 'var(--color-brand)', borderTopWidth: '3px' }}
                  >
                    <span
                      className="text-[11px] font-bold uppercase tracking-[0.12em] text-warm-white/70"
                      style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
                    >
                      {domain.name}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
            <p className="mt-4 text-center text-xs font-light text-warm-white/40">
              Deep domain expertise, not generic execution
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


{/* ── CTA ── */}
      <section className="bg-warm-white px-6 py-20 text-center md:py-28 border-t border-grey/15">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.22em] text-brand">Let&apos;s Talk</p>
            <h2 className="mb-5 text-3xl font-display font-medium tracking-tight text-navy md:text-5xl">
              Not sure which domain fits your problem?
            </h2>
            <p className="mb-8 text-base font-light leading-relaxed text-grey md:text-lg">
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
