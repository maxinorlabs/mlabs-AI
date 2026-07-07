'use client';

import { motion } from 'motion/react';
import {
  ArrowRight,
  Check,
  Hospital,
  Landmark,
  MonitorPlay,
  Shield,
  Store,
  GraduationCap,
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import WhyMaxinor from '../components/WhyMaxinor';

const sectionPadding = 'px-6 py-20 md:py-28 lg:py-32';
const sectionIntro = 'mb-14 text-center md:mb-20';
const sectionTitle = 'text-3xl md:text-5xl font-display font-medium tracking-tight mb-5 md:mb-6';
const sectionSubtitle = 'mx-auto max-w-xl text-base font-light md:text-lg';
const primaryButtonClass =
  'inline-flex w-full max-w-[320px] sm:w-auto items-center justify-center rounded-full bg-brand px-8 py-4 text-base font-semibold tracking-wide text-warm-white transition-all duration-300 hover:-translate-y-1 hover:bg-brand/90 sm:px-12 sm:py-5 sm:text-lg shadow-[0_0_40px_rgba(243,111,33,0.15)] hover:shadow-[0_0_60px_rgba(243,111,33,0.3)]';
const heroScaleButtonClass =
  'inline-flex w-full max-w-[320px] sm:w-auto items-center justify-center rounded-full bg-navy px-8 py-4 text-base font-semibold tracking-wide text-warm-white transition-all duration-300 hover:-translate-y-1 hover:bg-navy/90 sm:px-12 sm:py-5 sm:text-lg shadow-[0_0_40px_rgba(11,31,59,0.15)] hover:shadow-[0_0_60px_rgba(11,31,59,0.3)]';
const secondaryButtonClass =
  'inline-flex w-full max-w-[320px] sm:w-auto items-center justify-center rounded-full border border-grey/40 bg-white/80 px-8 py-4 text-base font-semibold text-navy transition-all duration-300 hover:-translate-y-1 hover:bg-brand hover:text-warm-white sm:px-12 sm:py-5 sm:text-lg';

const engagements = [
  {
    name: 'Discovery',
    duration: '30 days',
    model: 'Fixed scope & Cost',
    description: "A focused 30-day sprint to diagnose what's blocking you and build an execution roadmap.",
    bullets: ['Problem diagnosis', 'Capability mapping', '90-day execution plan', 'Operator assignment'],
    bestFor: 'Founders who need clarity before committing capital.',
    commercial: 'Fixed fee.',
    cta: 'Start a Sprint',
    featured: false,
  },
  {
    name: 'Partnership',
    duration: '1-3 years',
    model: 'Embedded co-ownership',
    description: 'An operator joins your team, embedded, accountable, and aligned on outcomes through equity.',
    bullets: ['Full execution ownership', 'Operating cadence', 'Operator bench across partnership requirement', 'P&L accountability that builds capability you own'],
    bestFor: 'Ventures generating consistent revenue, ready to invest in embedded execution, not just advice.',
    commercial: 'Engagement structured as equity, retainer, revenue share, or hybrid, based on your stage.',
    cta: 'Explore Partnership',
    featured: true,
  },
  {
    name: 'Fractional',
    duration: 'On demand',
    model: 'Custom design',
    description: 'A fractional CXO who operates as part of your leadership team.',
    bullets: ['Functional gap coverage', 'Team building and systems', 'Transition planning', 'Strategy and execution'],
    bestFor: 'Companies that need executive depth without full-time cost.',
    commercial: 'Retainer.',
    cta: 'Get a Fractional CXO',
    featured: false,
  },
];

const sectorGroups = [
  {
    category: 'SPECIALIZED SECTORS',
    sectors: [
      {
        name: 'Healthcare',
        description: 'Health Tech & Clinical Tools',
        icon: Hospital,
        href: '/sectors/healthcare',
      },
      {
        name: 'Defence',
        description: 'Defence Tech & Dual-Use',
        icon: Shield,
        href: '/sectors/defence',
      },
    ],
  },
  {
    category: 'CONSUMER & RETAIL',
    sectors: [
      {
        name: 'D2C',
        description: 'Consumer Brands & Retail',
        icon: Store,
        href: '/sectors/d2c',
      },
      {
        name: 'Media',
        description: 'Broadcasting & Digital Media',
        icon: MonitorPlay,
        href: '/sectors/media',
      },
    ],
  },
  {
    category: 'FINANCE & SKILLING',
    sectors: [
      {
        name: 'BFSI',
        description: 'Banking, Financial Services & Insurance',
        icon: Landmark,
        href: '/sectors/bfsi',
      },
      {
        name: 'Education',
        description: 'EdTech & Workforce Development',
        icon: GraduationCap,
        href: '/sectors/education',
      },
    ],
  },
];

export default function Home() {
  return (
    <div className="font-sans">
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative flex min-h-[calc(100vh-5rem)] items-center justify-center overflow-hidden px-6 py-12 md:min-h-[90vh] md:py-16">
          {/* Background image */}
          <Image
            src="https://cdn.prod.website-files.com/68e4de0fbf5c464cee858fc3/68e4de10bf5c464cee859085_adrian-cuj-o_9YmCY0bag-unsplash-2.webp"
            alt="Maxinor studio workspace"
            fill
            className="object-cover object-center"
            priority
          />
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-navy/70 pointer-events-none" />
          {/* Bottom fade to page */}
          <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(247,247,245,1)_0%,transparent_60%)] pointer-events-none" />

          <div className="relative z-10 mx-auto max-w-5xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            >
              <h1 className="mx-auto mb-6 max-w-4xl text-[40px] leading-[1.05] font-display font-medium tracking-tight text-warm-white sm:text-5xl md:mb-8 md:text-7xl lg:text-[84px]">
                India&apos;s 1st <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-b from-brand to-brand/80">Operator Led AI Venture Studio</span>
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="mx-auto mb-10 max-w-2xl text-lg font-semibold leading-relaxed text-warm-white sm:text-xl md:mb-12 md:text-2xl lg:text-3xl"
            >
              Operators backing Entrepreneurs
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6"
            >
              <Link href="/scale" className={heroScaleButtonClass}>
                Venture Scale
              </Link>
              <Link href="/build" className={secondaryButtonClass}>
                Venture Build
              </Link>
            </motion.div>
          </div>
        </section>

        {/* The Ventures We Work With */}
        <section className="overflow-hidden border-y border-grey/10 bg-white px-6 py-20 md:py-24">
          <div className="max-w-7xl mx-auto text-center mb-12 md:mb-16">
            <h2 className={`${sectionTitle} mb-4`}>
              The Ventures We <span className="text-brand">Work With</span>
            </h2>
            <p className={`${sectionSubtitle} text-grey`}>
              Partnering with visionary founders to build category-defining companies.
            </p>
          </div>
          <div className="relative flex overflow-x-hidden group">
            <div className="flex animate-[marquee_30s_linear_infinite] group-hover:[animation-play-state:paused] whitespace-nowrap">
              {[...Array(2)].map((_, i) => (
                <div key={i} className="flex gap-8 px-4 items-center">
                  {[
                    { url: "https://izfworld.com/", logo: "https://cdn.prod.website-files.com/68e4de0fbf5c464cee858fc3/695e7c054bb39ce328e497b7_izf%20fill%20logo.png" },
                    { url: "https://nattier.co.in/", logo: "https://cdn.prod.website-files.com/68e4de0fbf5c464cee858fc3/695e7d29b07f70111e63e428_Screenshot%202026-01-07%20at%209.02.56%E2%80%AFPM.png" },
                    {
                      url: "https://trailytics.ai/",
                      logo: "https://cdn.prod.website-files.com/68e4de0fbf5c464cee858fc3/6a4b4e2d2954d64364b79295_trailytics_logo.avif",
                      logoClass: "p-0",
                      cardClass: "w-48 md:w-56",
                    },
                    { url: "https://www.adaapt.ai/", logo: "https://cdn.prod.website-files.com/68e4de0fbf5c464cee858fc3/695e7c0571637f2d25422210_Adaapt.svg" },
                    { url: "", logo: "https://cdn.prod.website-files.com/68e4de0fbf5c464cee858fc3/69b2b70ff7ee3292c3baa5a9_Gemini_Generated_Image_2c1xpu2c1xpu2c1x.png" },
                    { url: "https://aseedinternational.org/", logo: "https://cdn.prod.website-files.com/68e4de0fbf5c464cee858fc3/695e7e0dfbb6090b487952b2_Screenshot%202026-01-07%20at%209.08.21%E2%80%AFPM.png" }
                  ].map((item, idx) => (
                    <Link 
                      key={`${i}-${idx}`} 
                      href={item.url || "#"}
                      target={item.url ? "_blank" : undefined}
                      rel={item.url ? "noopener noreferrer" : undefined}
                      className={`relative flex h-20 w-40 shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-grey/30 bg-white p-3 transition-all duration-500 hover:border-brand/50 hover:bg-white/90 md:h-24 md:w-48 md:p-4 ${item.cardClass ?? ''}`}
                    >
                      <Image 
                        src={item.logo} 
                        alt={`Venture Partner ${idx + 1}`} 
                        fill 
                        className={`object-contain opacity-70 transition-opacity duration-300 hover:opacity-100 ${item.logoClass ?? 'p-3 md:p-4'}`}
                        referrerPolicy="no-referrer"
                      />
                    </Link>
                  ))}
                </div>
              ))}
            </div>
            {/* Gradient masks for smooth fade out at edges */}
            <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-white to-transparent pointer-events-none md:w-32" />
            <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-white to-transparent pointer-events-none md:w-32" />
          </div>
        </section>

        {/* Pick Your Entry Point */}
        <section className="bg-[#EDE7DC] px-6 py-20 md:py-28">
          <div className="max-w-7xl mx-auto">
            <div className="mb-14 text-center md:mb-20">
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-brand">Pick Your Entry Point</p>
              <h2 className="mb-4 text-3xl font-display font-medium tracking-tight text-navy md:text-5xl">
                We Scale, Not Just <span className="text-brand">Back Ventures!</span>
              </h2>
              <p className={`${sectionSubtitle} text-grey`}>
                Maxinor accelerates venture growth with embedded operators and milestone-based funding, shortening the path to scale.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {engagements.map((eng, i) => (
                <motion.div
                  key={eng.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className={`relative flex flex-col rounded-[2rem] border bg-white p-8 transition-all duration-500 hover:shadow-xl md:p-10 ${
                    eng.featured
                      ? 'border-brand border-t-4 shadow-[0_0_50px_rgba(243,111,33,0.1)]'
                      : 'border-grey/20 hover:border-brand/30'
                  }`}
                >
                  {eng.featured && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-brand px-5 py-1.5 text-xs font-bold uppercase tracking-widest text-white shadow-lg">
                      Most Popular
                    </div>
                  )}
                  <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-brand">{eng.duration}</p>
                  <h3 className="mb-1 text-[28px] font-display font-semibold leading-tight text-navy">{eng.name}</h3>
                  <p className="mb-4 text-sm text-grey/60">{eng.model}</p>
                  <p className="mb-6 text-[15px] font-normal leading-relaxed text-grey md:text-base">{eng.description}</p>
                  <ul className="mb-6 flex-1 space-y-2.5">
                    {eng.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-3 text-[15px] text-grey md:text-base">
                        <span className="mt-0.5 text-brand">
                          <Check className="h-4 w-4" />
                        </span>
                        {b}
                      </li>
                    ))}
                  </ul>
                  <p className="mb-4 text-[13px] leading-relaxed text-grey/70 md:text-sm">
                    {eng.commercial}
                  </p>
                  <div className="mb-6 rounded-2xl bg-warm-white px-4 py-3.5 space-y-1">
                    <p className="text-[13px] leading-relaxed text-grey/70 md:text-sm">
                      <span className="font-semibold text-navy">Best for:</span> {eng.bestFor}
                    </p>
                  </div>
                  <Link
                    href="/contact"
                    className={`inline-flex w-full items-center justify-center rounded-full py-3.5 text-[15px] font-semibold tracking-wide transition-all duration-300 md:text-base ${
                      eng.featured
                        ? 'bg-brand text-white hover:bg-brand/90 shadow-[0_0_30px_rgba(243,111,33,0.2)]'
                        : 'border border-grey/25 text-navy hover:border-brand hover:text-brand'
                    }`}
                  >
                    {eng.cta} <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* What We Do Section — hidden, set to true to re-enable */}
        {false && (
        <section className={`${sectionPadding} bg-navy border-y border-grey/20`}>
          <div className="max-w-7xl mx-auto">
            <div className={sectionIntro}>
              <h2 className={`${sectionTitle} text-warm-white`}>
                What We <span className="text-brand">Do</span>
              </h2>
              <p className={`${sectionSubtitle} text-warm-white/80`}>
                Maxinor assists founders to scale their ventures, SMEs to unlock growth, corporates to craft
                innovation, and investors to seek returns via the &ldquo;Maxinor Operator Platform&rdquo;
              </p>
            </div>

            {/* Two pillar cards */}
            <div className="grid gap-0 grid-cols-1 md:grid-cols-2 rounded-2xl overflow-hidden border border-white/10">
              {/* Venture Build — blue */}
              <Link href="/build" className="group border border-white/10 bg-white/5 p-8 md:p-10 flex flex-col transition-all duration-500 hover:bg-white/10">
                <h3 className="mb-1 text-xl font-display font-bold text-warm-white md:text-2xl">
                  Venture Build
                </h3>
                <p className="mb-4 text-sm font-semibold text-teal">Venture Creation Engine</p>
                <p className="text-sm font-light leading-relaxed text-warm-white/75">
                  Creation of New AI-Native companies from &ldquo;Scratch&rdquo; across sectors.
                </p>
              </Link>

              {/* Venture Scale — white */}
              <Link href="/scale" className="group bg-warm-white border-l border-grey/20 p-8 md:p-10 flex flex-col transition-all duration-500 hover:bg-white border-t-4 border-t-brand">
                <h3 className="mb-1 text-xl font-display font-bold text-navy md:text-2xl">
                  Venture Scale
                </h3>
                <p className="mb-4 text-sm font-semibold text-brand">Execution Led Engine</p>
                <p className="text-sm font-light leading-relaxed text-grey">
                  Operator capabilities that <strong className="font-semibold text-navy">deliver measurable business outcomes</strong> for existing Ventures, SMEs, and companies.
                </p>
              </Link>
            </div>
          </div>
        </section>
        )}

        {/* Sectors We Work In */}
        <section className={`${sectionPadding} bg-white border-y border-grey/10`}>
          <div className="max-w-7xl mx-auto">
            <div className={sectionIntro}>
              <h2 className={sectionTitle}>
                Sectors We <span className="text-brand">Work In</span>
              </h2>
              <p className={`${sectionSubtitle} text-grey`}>
                Deep operator expertise across high-growth sectors.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-x-8 gap-y-6 md:grid-cols-3 md:gap-y-0">
              {sectorGroups.map((group) => (
                <div key={group.category}>
                  <p className="mt-4 mb-3 text-center text-sm font-bold uppercase tracking-[0.18em] text-brand md:mt-0 md:mb-5 md:text-base">
                    {group.category}
                  </p>
                  <div className="flex flex-col gap-5">
                    {group.sectors.map((sector) => (
                      <Link
                        key={sector.name}
                        href={sector.href}
                        className="group flex min-h-[168px] items-center gap-5 rounded-2xl border border-grey/20 bg-warm-white p-5 transition-all duration-300 hover:border-brand/50 hover:bg-white md:min-h-[180px] md:p-6"
                      >
                        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border border-grey/15 bg-grey/8 transition-all duration-300 group-hover:border-brand/40 group-hover:bg-brand/5 md:h-16 md:w-16">
                          <sector.icon className="h-6 w-6 text-grey/60 transition-colors duration-300 group-hover:text-brand md:h-7 md:w-7" />
                        </div>
                        <div className="flex min-w-0 flex-1 flex-col justify-center">
                          <h3 className="text-base font-bold uppercase leading-tight tracking-[0.16em] text-navy transition-colors duration-300 group-hover:text-brand md:text-lg">
                            {sector.name}
                          </h3>
                          <p className="mt-2 max-w-[17rem] text-base font-light leading-[1.45] text-grey md:text-lg">
                            {sector.description}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <WhyMaxinor />

        {/* Our Partners */}
        <section className="border-y border-grey/30 bg-warm-white px-6 py-20 md:py-24">
          <div className="max-w-7xl mx-auto">
            <div className="mb-12 text-center md:mb-16">
              <h2 className={`${sectionTitle} mb-4`}>
                Our <span className="text-brand">Partners</span>
              </h2>
              <p className={`${sectionSubtitle} text-grey`}>
                Collaborating with industry leaders to unlock scale and build enduring ventures.
              </p>
            </div>
            <div className="mx-auto flex max-w-4xl flex-wrap justify-center gap-6 md:gap-8">
              {[
                { name: "Hygriv", image: "https://cdn.prod.website-files.com/68e4de0fbf5c464cee858fc3/695e8f57198b4be76b7685ef_Logo%20with%20Capital.png", url: "https://www.hygriv.com/" },
                { name: "Saptharushi", image: "https://cdn.prod.website-files.com/68e4de0fbf5c464cee858fc3/69b3cd584c566a57e84d3aae_saptharushi7_logo.jpg", url: "https://saptharushi.com/" },
              ].map((partner, idx) => (
                <Link 
                  key={idx} 
                  href={partner.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative flex h-28 w-full items-center justify-center rounded-[2rem] border border-grey/30 bg-white p-5 transition-all duration-500 hover:border-brand/30 hover:bg-white sm:w-[300px] md:h-32 md:p-6"
                >
                  <Image 
                    src={partner.image} 
                    alt={partner.name} 
                    fill 
                    className="object-contain p-6 opacity-70 group-hover:opacity-100 transition-opacity duration-500" 
                    referrerPolicy="no-referrer" 
                  />
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className={`${sectionPadding} bg-navy text-center text-warm-white`}>
          <div className="max-w-3xl mx-auto">
            <h2 className="mb-6 text-4xl font-display font-medium tracking-tight md:mb-8 md:text-6xl">
              Ready to <span className="text-brand">Scale</span> Your Vision?
            </h2>
            <p className={`${sectionSubtitle} mb-10 text-warm-white/80 md:mb-12`}>
              Join India&apos;s first operator-led AI venture studio. Whether you&apos;re a founder looking to scale or an investor seeking high-growth opportunities, let&apos;s build the future together.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
              <Link href="/contact" className={primaryButtonClass}>
                Get in Touch <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}
