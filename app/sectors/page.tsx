'use client';

import { motion } from 'motion/react';
import { NavyBackdrop } from '@/components/motion/NavyBackdrop';
import Link from 'next/link';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { HomeTShape } from '@/components/home/HomeTShape';
import { Reveal, Stagger, StaggerItem } from '@/components/motion/Reveal';
import { RevealText } from '@/components/motion/RevealText';
import {
  Eyebrow,
  HoverRule,
  PaperSection,
  RouteCompass,
  RuledList,
  primaryButtonClass,
} from '@/components/page/Paper';
import { EASE_OUT } from '@/lib/motion';

const sectors = [
  {
    id: 'healthcare',
    number: '01',
    name: 'Healthcare',
    sector: 'HealthTech & Clinical Tools',
    standaloneUrl: '/sectors/healthcare',
    problem:
      "Hospital deployments eating your margins? Stop building custom for every client.",
    capabilities: [
      'Productise to slash professional services costs',
      'Unlock Tier 2 & Tier 3 hospital procurement',
      'Fast-track clinical validation & peer recognition',
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
    id: 'd2c',
    number: '02',
    name: 'D2C',
    sector: 'Consumer Brands & Retail',
    standaloneUrl: '/sectors/d2c',
    problem:
      "You've got GMV. Your contribution margins are the real problem.",
    capabilities: [
      'CAC reduction and performance marketing overhaul',
      'Repeat purchase and retention engine',
      'Offline and omnichannel expansion playbook',
      'Overseas market expansion',
      'Brand architecture and positioning',
      'Market validation and insights',
      'International market expansion',
      'Private label and B2B expansion',
    ],
    operator: 'Priyabrata Padhi',
    operatorBg: 'ex-Heineken India, ex-ITC, ex-Britannia',
    operatorSlug: 'priyabrata-padhi',
    howWeEngage: [
      'Full-funnel GTM and channel strategy',
      'Offline distribution and retail expansion',
      'AI-native D2C operating system',
      'Discovery sprints: brand positioning, visual identity, ecom pivots',
      'International market expansion and launch strategy',
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
    standaloneUrl: '/sectors/bfsi',
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
    id: 'media',
    number: '04',
    name: 'Media',
    sector: 'Broadcasting & Digital Media',
    standaloneUrl: '/sectors/media',
    problem:
      "You've built an audience. You're not monetising it at the rate you should be.",
    capabilities: [
      'B2B licensing and syndication revenue',
      'AI-native content ops that cut cost and scale output',
      'Audience-to-revenue conversion strategy',
    ],
    operator: 'Maxinor Team',
    operatorBg: 'Multi-sector operator team',
    operatorSlug: '',
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
    id: 'education',
    number: '05',
    name: 'Education',
    sector: 'EdTech & Workforce Development',
    standaloneUrl: '/sectors/education',
    problem:
      "You have learners. Employers don't recognise your outcomes yet.",
    capabilities: [
      'Completion rate and learning outcome improvement',
      'Employer linkage and certification credentialing',
      'B2B institutional sales motion and GTM',
    ],
    operator: 'Maxinor Team',
    operatorBg: 'Multi-sector operator team',
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
    id: 'defence',
    number: '06',
    name: 'Defence',
    sector: 'Defence Tech & Dual-Use Technology',
    standaloneUrl: '/sectors/defence',
    problem:
      "You have a defence-grade product. MoD procurement and iDEX scaling are the next wall.",
    capabilities: [
      'iDEX and DRDO partnership navigation',
      'MoD procurement and DPP compliance strategy',
      'Dual-use technology commercialisation and export GTM',
    ],
    operator: 'Maxinor Team',
    operatorBg: 'Multi-sector operator team',
    operatorSlug: '',
    howWeEngage: [
      'Defence procurement and DPP compliance strategy',
      'iDEX challenge and DRDO partnership navigation',
      'Dual-use tech commercialisation and export GTM',
    ],
    problemDetail:
      "India's defence sector is undergoing its most significant transformation since independence. The Make in India push, iDEX programme, and rising defence budget create a once-in-a-generation opportunity for technology startups. But defence procurement operates on different rules, timelines, and relationships than commercial markets. Founders who apply standard startup GTM here lose time and credibility fast.",
    clientProblems: [
      '"We won an iDEX challenge but have no idea how to convert it into a sustained MoD procurement relationship."',
      '"Our technology works in the field but we have no DPP-compliant commercialisation strategy."',
      '"We\'re dual-use. The commercial market is slow and defence is complex. We need help navigating both."',
      '"We need to build relationships with DRDO and the armed forces but have no operator who has done this before."',
    ],
  },
];

// Sectors whose own pages are not published yet.
const COMING_SOON = ['media', 'education', 'defence'];

export default function DomainsPage() {
  return (
    <div className="pt-16 font-sans">

      {/* ── Hero — words on the left, an index of the sectors on the right ── */}
      <PaperSection fill className="border-t-0 py-16 md:py-[clamp(24px,5svh,64px)]">
        <div className="grid items-center gap-12 md:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
          <div>
            <Eyebrow>Where Operators Meet Sector Depth</Eyebrow>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: EASE_OUT }}
              className="mb-[clamp(16px,3svh,28px)] text-[clamp(36px,min(5.4vw,7.6svh),76px)] font-display font-medium leading-[1.02] tracking-[-0.03em]"
            >
              We don&apos;t just know your industry.{' '}
              <span className="text-brand">We&apos;ve built inside it.</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-[clamp(24px,4svh,40px)] max-w-xl border-t border-navy/10 pt-5 text-base font-light leading-relaxed text-grey md:text-lg"
            >
              Maxinor&apos;s operator network brings hands-on sector experience in six high-growth
              sectors, from ideation through execution.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <a href="#overview" className={primaryButtonClass}>
                Find Your Sector <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </motion.div>
          </div>

          {/* The six sectors as a ruled index, each jumping to its card below */}
          <motion.ol
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35 }}
            className="overflow-hidden rounded-2xl border border-navy/10 bg-white/60 shadow-[0_24px_60px_-36px_rgba(11,31,59,0.35)] backdrop-blur-[2px]"
          >
            {sectors.map((sector) => (
              <li key={sector.id} className="border-b border-navy/10 last:border-b-0">
                <a
                  href={`#${sector.id}`}
                  className="group relative flex items-center justify-between gap-4 px-5 py-[clamp(10px,1.9svh,16px)] transition-colors duration-300 hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-brand"
                >
                  <span aria-hidden="true" className="absolute inset-y-0 left-0 w-0.5 origin-top scale-y-0 bg-brand transition-transform duration-300 group-hover:scale-y-100" />
                  <span className="min-w-0">
                    <span className="block text-lg font-display font-medium text-navy transition-colors group-hover:text-brand">{sector.name}</span>
                    <span className="block truncate font-mono text-[10px] uppercase tracking-[0.18em] text-navy/45">{sector.sector}</span>
                  </span>
                  <ArrowRight className="h-4 w-4 shrink-0 rotate-90 text-navy/30 transition duration-300 group-hover:translate-y-0.5 group-hover:text-brand" />
                </a>
              </li>
            ))}
          </motion.ol>
        </div>
      </PaperSection>

      {/* ── The T: capabilities across, sectors down — the same diagram as on the Home page ── */}
      <HomeTShape />

      {/* ── Sector Overview Cards ── */}
      <PaperSection className="py-20 md:py-28">
        <div id="overview" className="scroll-mt-24">
          <Reveal className="mb-12 md:mb-14">
            <Eyebrow>The Sectors</Eyebrow>
          </Reveal>
          {/* One ruled sheet of cells: the 1px gaps show the navy hairline behind them */}
          <Stagger className="grid gap-px overflow-hidden rounded-2xl border border-navy/10 bg-navy/10 shadow-[0_24px_60px_-36px_rgba(11,31,59,0.35)] md:grid-cols-2 lg:grid-cols-3">
            {sectors.map((sector) => {
              const live = !COMING_SOON.includes(sector.id);
              return (
                <StaggerItem
                  key={sector.id}
                  id={sector.id}
                  className="group relative flex scroll-mt-24 flex-col bg-warm-white/95 px-6 py-8 transition-colors duration-300 hover:bg-white md:px-8"
                >
                  <HoverRule />
                  <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.2em] text-navy/45">{sector.sector}</p>
                  <h3 className="mb-3 text-2xl font-display font-medium text-navy">{sector.name}</h3>
                  <p className="mb-5 text-[15px] font-light leading-relaxed text-grey">{sector.problem}</p>
                  <RuledList items={sector.capabilities} className="mb-6 flex-1" />
                  <p className="mb-5 text-xs leading-relaxed text-grey/70">
                    <span className="font-semibold text-navy">{sector.operator}</span> · {sector.operatorBg}
                  </p>
                  {live ? (
                    <Link
                      href={sector.standaloneUrl}
                      className="inline-flex items-center gap-1.5 self-start text-sm font-semibold text-navy transition-all duration-200 hover:gap-2.5 hover:text-brand"
                    >
                      Explore <ArrowUpRight className="h-3.5 w-3.5" />
                    </Link>
                  ) : (
                    <span className="self-start rounded-full border border-navy/10 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-navy/40">
                      Coming Soon
                    </span>
                  )}
                </StaggerItem>
              );
            })}
          </Stagger>
          <Reveal className="mx-auto mt-14 max-w-2xl text-center md:mt-16">
            <p className="text-base font-light leading-relaxed text-grey md:text-lg">
              This is why Maxinor operators are not advisors who have read the playbook.
              <br />
              <span className="font-semibold text-navy">They&apos;ve run the plays.</span>
            </p>
          </Reveal>
        </div>
      </PaperSection>

      {/* ── T-Shape Section — hidden, set to true to re-enable ── */}
      {false && (
      <section className="relative overflow-hidden bg-navy px-6 py-20 md:py-28">
        <NavyBackdrop />
        <div className="relative max-w-7xl mx-auto">
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
              <div className="overflow-hidden rounded-2xl border border-white/12">
                {/* Group labels */}
                <div className="grid grid-cols-7 bg-white/8">
                  <Link href="/build" className="col-span-3 border-r-2 border-white/15 py-2.5 text-center transition-colors hover:bg-white/8">
                    <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-warm-white/60 hover:text-brand">Build</span>
                  </Link>
                  <Link href="/scale" className="col-span-3 border-r-2 border-white/15 py-2.5 text-center transition-colors hover:bg-white/8">
                    <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-warm-white/60 hover:text-brand">Scale</span>
                  </Link>
                  <Link href="/investment" className="col-span-1 py-2.5 text-center transition-colors hover:bg-white/8">
                    <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-warm-white/60 hover:text-brand">Invest</span>
                  </Link>
                </div>
                {/* Items bar */}
                <div className="flex">
                  {[
                    { label: 'Ideation',   shade: 'bg-brand',    divider: false },
                    { label: 'Strategy',   shade: 'bg-brand',    divider: false },
                    { label: 'Product',    shade: 'bg-brand',    divider: true  },
                    { label: 'GTM',        shade: 'bg-brand/80', divider: false },
                    { label: 'Operations', shade: 'bg-brand/80', divider: false },
                    { label: 'Revenue',    shade: 'bg-brand/80', divider: true  },
                    { label: 'Capital',    shade: 'bg-brand/60', divider: false },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className={`flex-1 px-1 py-4 text-center ${item.shade} ${item.divider ? 'border-r-2 border-white/30' : 'border-r border-white/10 last:border-r-0'}`}
                    >
                      <span className="text-[10px] font-bold uppercase tracking-[0.1em] text-white">{item.label}</span>
                    </div>
                  ))}
                </div>
              </div>
              <p className="mt-2 text-center text-xs font-light text-warm-white/40">
                Operator capabilities across the full venture lifecycle
              </p>
            </motion.div>

            {/* Vertical bars */}
            <div className="mt-8 flex gap-3 w-full">
              {sectors.map((sector, i) => (
                <motion.div
                  key={sector.id}
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
                      {sector.name}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
            <p className="mt-4 text-center text-xs font-light text-warm-white/40">
              Deep sector expertise, not generic execution
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
      )}

      {/* ── CTA — laid out like the hero ── */}
      <PaperSection fill className="py-20 md:py-[clamp(28px,6svh,128px)]">
        <div className="grid items-center gap-12 md:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)]">
          <Reveal>
            <Eyebrow>Let&apos;s Talk</Eyebrow>
            <RevealText
              className="mb-6 text-4xl font-display font-medium leading-[1.05] tracking-tight md:text-[clamp(36px,min(5vw,7.4svh),64px)]"
              parts={[{ text: 'Not sure which sector ' }, { text: 'fits your problem?', className: 'text-brand' }]}
            />
            <p className="mb-10 max-w-xl border-t border-navy/10 pt-5 text-base font-light leading-relaxed text-grey md:text-lg">
              Tell us what you&apos;re building. We&apos;ll tell you where we fit, and if we don&apos;t, we&apos;ll say so.
            </p>
            <Link href="/contact" className={primaryButtonClass}>
              Start the conversation <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </Reveal>
          <div className="hidden justify-center md:flex">
            <RouteCompass className="w-[min(70%,52svh,400px)]" />
          </div>
        </div>
      </PaperSection>
    </div>
  );
}
