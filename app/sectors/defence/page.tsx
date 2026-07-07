'use client';

import { motion, AnimatePresence } from 'motion/react';
import Link from 'next/link';
import { useState } from 'react';
import { ArrowRight, Shield, Cpu, Globe } from 'lucide-react';

const primaryBtn =
  'inline-flex items-center justify-center rounded-full bg-brand px-8 py-4 text-base font-semibold tracking-wide text-warm-white transition-all duration-300 hover:-translate-y-1 hover:bg-brand/90 shadow-[0_0_40px_rgba(243,111,33,0.15)] hover:shadow-[0_0_60px_rgba(243,111,33,0.3)] sm:px-10 sm:py-5';

const ghostBtn =
  'inline-flex items-center justify-center rounded-full border border-warm-white/30 px-8 py-4 text-base font-semibold tracking-wide text-warm-white transition-all duration-300 hover:-translate-y-1 hover:border-warm-white/60 sm:px-10 sm:py-5';

const painPoints = [
  {
    icon: Shield,
    number: '01',
    title: 'The iDEX-to-Procurement Gap',
    body: "Winning an iDEX challenge is not the same as winning a procurement contract. Most defence tech founders who win challenges have no roadmap to convert that recognition into a sustained MoD procurement relationship. The path from prototype to production order requires navigating DPP, DPSU partnerships, and field trial frameworks that have nothing in common with commercial sales.",
  },
  {
    icon: Cpu,
    number: '02',
    title: 'Dual-Use Paralysis',
    body: "Dual-use technology -- AI, drones, sensors, cybersecurity, simulation -- is the fastest-growing category in Indian defence. But founders operating in dual-use space are often caught between two markets: a commercial market that moves fast but pays less, and a defence market that pays more but moves on a different timeline entirely. Without an operator who has navigated both, founders waste 18 months trying to apply the wrong playbook to the wrong market.",
  },
  {
    icon: Globe,
    number: '03',
    title: 'Export and Offset Complexity',
    body: "India's defence export target of ₹50,000 Cr by 2029 is creating real opportunity. But export under the SCOMET framework, offset obligations for foreign OEMs, and the DTTI partnership pipeline require a level of regulatory and relationship navigation that no standard GTM consultant can provide. The founders who break through here have operator support inside the room.",
  },
];

const architecture = [
  {
    tier: 'Technology Layer',
    description: 'Core defence and dual-use technology areas',
    accent: 'border-brand',
    labelColor: 'text-brand',
    groups: [
      {
        label: 'AI and Autonomy',
        items: ['Autonomous Systems', 'Computer Vision', 'Predictive Maintenance', 'Decision Support AI', 'Swarm Intelligence', 'ISR Analytics'],
      },
      {
        label: 'Cybersecurity',
        items: ['Network Defence', 'Threat Intelligence', 'Secure Communications', 'Zero Trust Architecture', 'Cryptography', 'SIGINT Tools'],
      },
    ],
  },
  {
    tier: 'Procurement Layer',
    description: 'How defence procurement actually works in India',
    accent: 'border-indigo-400',
    labelColor: 'text-indigo-500',
    groups: [
      {
        label: 'iDEX and Innovation',
        items: ['DISC Challenges', 'Prime Challenges', 'Open Challenges', 'Technology Development Fund', 'DRDO Collaboration', 'Tri-Service Trials'],
      },
      {
        label: 'MoD Procurement',
        items: ['DPP Compliance', 'DPSU Partnerships', 'MAKE I and MAKE II', 'Field Trials', 'User Evaluation', 'Cabinet Committee Approval'],
      },
    ],
  },
  {
    tier: 'Commercialisation Layer',
    description: 'Routes to revenue in the defence ecosystem',
    accent: 'border-teal-500',
    labelColor: 'text-teal-600',
    groups: [
      {
        label: 'Domestic Routes',
        items: ['Armed Forces Supply', 'Paramilitary and CAPF', 'State Police Modernisation', 'DPSU Sub-supply', 'PSU Contracts', 'Critical Infrastructure'],
      },
      {
        label: 'Export and Global',
        items: ['SCOMET Licensing', 'Offset Partnerships', 'Foreign OEM Teaming', 'DTTI Programmes', 'Friendly Nations Supply', 'MRO and Aftermarket'],
      },
    ],
  },
];

const clientProblems = [
  '"We won an iDEX challenge but have no idea how to convert it into a sustained MoD procurement relationship."',
  '"Our technology works in the field but we have no DPP-compliant commercialisation strategy."',
  '"We\'re dual-use. The commercial market is slow and defence is complex. We need help navigating both."',
  '"We need to build relationships with DRDO and the armed forces but have no operator who has done this before."',
];

const engagementModels = [
  {
    title: 'iDEX and DRDO Navigation',
    description: 'We help you identify the right challenges, prepare technically credible submissions, and build the stakeholder relationships that convert trial success into sustained procurement.',
    items: [
      'Challenge identification and application support',
      'Technical submission and prototype readiness',
      'Field trial preparation and stakeholder mapping',
      'Post-challenge procurement pathway planning',
    ],
  },
  {
    title: 'MoD Procurement Strategy',
    description: 'Understanding DPP, DPSU structures, and procurement timelines is prerequisite knowledge. We embed operators who have navigated these processes and can help you build the right relationships at the right level.',
    items: [
      'DPP compliance and procurement category selection',
      'DPSU partnership structuring',
      'MAKE I / MAKE II programme positioning',
      'Ministry and armed forces stakeholder engagement',
    ],
  },
  {
    title: 'Dual-Use Commercialisation',
    description: 'We help dual-use founders build a sequenced go-to-market that extracts value from both civilian and defence markets without losing momentum in either.',
    items: [
      'Dual-use market sequencing strategy',
      'Civilian GTM for near-term revenue',
      'Defence credentialing pathway',
      'IP and technology classification strategy',
    ],
  },
  {
    title: 'Defence Export and Offset',
    description: 'India\'s defence export ambition is real. We help founders understand SCOMET licensing, identify offset partnership opportunities with foreign OEMs, and structure teaming arrangements that open global markets.',
    items: [
      'SCOMET licensing and export compliance',
      'Foreign OEM offset partnership identification',
      'DTTI and bilateral programme positioning',
      'Export market prioritisation and entry strategy',
    ],
  },
];

export default function DefencePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      q: 'Does Maxinor work with early-stage defence tech startups or only established companies?',
      a: 'We work with founders at any stage who have a working prototype or deployed technology. The earlier you engage with procurement navigation, the better -- most founders come to us after losing 12-18 months trying to crack MoD procurement without the right relationships or framework.',
    },
    {
      q: 'We are not a pure defence company. We are dual-use. Can Maxinor help?',
      a: 'Dual-use is actually where we see the most opportunity right now. AI, drones, cybersecurity, sensors, and simulation technologies all fall here. We help dual-use founders build a sequenced strategy that generates near-term revenue from civilian markets while building the defence credentialing pathway in parallel.',
    },
    {
      q: 'How long does it actually take to get a first MoD contract?',
      a: 'Realistically, 18-36 months from first stakeholder engagement to a small initial procurement order, depending on the technology category and procurement route. iDEX-to-procurement can be faster if the trial is successful and the product is in an active acquisition category. We help you compress timelines by focusing effort on the right entry points.',
    },
    {
      q: 'What is the iDEX programme and should we apply?',
      a: 'iDEX (Innovations for Defence Excellence) is MoD\'s flagship programme to fund and fast-track defence tech startups. DISC challenges offer funding up to ₹1.5 Cr for prototyping, and successful trials can lead directly to procurement orders. Whether to apply depends on your technology readiness level and which challenge categories are active. We help you evaluate fit before you invest time in an application.',
    },
    {
      q: 'We have a cybersecurity product. How is defence different from selling to commercial enterprises?',
      a: 'Significantly different. Security clearance requirements, TEMPEST standards, air-gapped deployment, CERT-In and NCIIPC compliance, and the specific threat models of military networks require a different product configuration and a different sales motion. The relationship and trust-building process also operates on a longer timeline than commercial enterprise sales.',
    },
  ];

  return (
    <div className="font-sans">

      {/* Hero */}
      <section className="relative overflow-hidden bg-navy px-6 pt-32 pb-24 md:pt-44 md:pb-32">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
        <div className="pointer-events-none absolute -top-40 right-0 h-[600px] w-[600px] rounded-full bg-brand/5 blur-[120px]" />
        <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-warm-white" />

        <div className="relative z-10 max-w-7xl mx-auto">
          <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.22em] text-brand">
            Defence Tech
          </p>
          <h1 className="mb-6 max-w-4xl text-4xl font-display font-medium tracking-tight text-warm-white md:text-6xl lg:text-7xl">
            India&apos;s defence opportunity is real.{' '}
            <span className="text-brand">Most founders are navigating it wrong.</span>
          </h1>
          <p className="mb-10 max-w-2xl text-base font-light leading-relaxed text-warm-white/60 md:text-lg">
            iDEX. DRDO. MoD procurement. Dual-use commercialisation. Defence exports. Each one requires a different
            operator with a different network. We help defence tech founders build the right strategy, the right
            relationships, and the right sequencing to win in this market.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/contact" className={primaryBtn}>
              Talk to a defence operator <ArrowRight className="h-4 w-4 shrink-0" />
            </Link>
            <Link href="/sectors" className={ghostBtn}>
              All Sectors
            </Link>
          </div>
        </div>
      </section>

      {/* Coming Soon */}
      <section className="bg-warm-white px-6 py-24 text-center md:py-32">
        <div className="mx-auto max-w-2xl">
          <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.22em] text-brand">Full Blueprint</p>
          <h2 className="mb-5 text-3xl font-display font-medium tracking-tight text-navy md:text-5xl">
            Coming soon.
          </h2>
          <p className="mb-8 text-base font-light leading-relaxed text-grey md:text-lg">
            We&apos;re building out the full Defence sector page. In the meantime, talk to the team directly.
          </p>
          <Link href="/contact" className={primaryBtn}>
            Talk to a defence operator <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* ── Rest of page hidden until blueprint is ready — set to true to re-enable ── */}
      {false && (
      <>
      {/* Founder Quotes */}
      <section className="bg-warm-white px-6 py-20 md:py-28">
        <div className="max-w-7xl mx-auto">
          <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.22em] text-brand">What Clients Come to Us For</p>
          <h2 className="mb-14 max-w-2xl text-3xl font-display font-medium tracking-tight text-navy md:text-4xl md:mb-16">
            Founder quotes we hear every week.
          </h2>
          <div className="grid gap-4 md:grid-cols-2">
            {clientProblems.map((quote, i) => (
              <div
                key={i}
                className="flex items-start gap-3 rounded-2xl border border-grey/15 bg-white px-5 py-4"
              >
                <span className="shrink-0 text-sm font-bold text-brand/50">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <p className="text-sm font-light leading-relaxed text-grey">{quote}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pain Points */}
      <section className="bg-white px-6 py-20 md:py-28 border-t border-grey/10">
        <div className="max-w-7xl mx-auto">
          <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.22em] text-brand">The Real Problems</p>
          <h2 className="mb-14 max-w-2xl text-3xl font-display font-medium tracking-tight text-navy md:text-4xl md:mb-16">
            Where defence tech founders lose time and momentum.
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            {painPoints.map((p) => (
              <div key={p.number} className="rounded-[2rem] border border-grey/15 bg-warm-white p-8 transition-all duration-300 hover:border-brand/20 hover:shadow-md">
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-brand/10">
                  <p.icon className="h-5 w-5 text-brand" />
                </div>
                <p className="mb-1 text-[11px] font-bold uppercase tracking-[0.18em] text-brand/60">{p.number}</p>
                <h3 className="mb-3 text-lg font-display font-semibold text-navy">{p.title}</h3>
                <p className="text-sm font-light leading-relaxed text-grey">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Architecture */}
      <section className="bg-white px-6 py-20 md:py-28 border-t border-grey/10">
        <div className="max-w-7xl mx-auto">
          <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.22em] text-brand">Defence Ecosystem Map</p>
          <h2 className="mb-3 max-w-2xl text-3xl font-display font-medium tracking-tight text-navy md:text-4xl">
            Understanding the full defence stack.
          </h2>
          <p className="mb-14 max-w-xl text-base font-light leading-relaxed text-grey md:mb-16">
            Defence tech is not one market. It is a stack of technology categories, procurement routes, and
            commercialisation channels that each require different strategies.
          </p>
          <div className="space-y-5">
            {architecture.map((tier) => (
              <div key={tier.tier} className={`rounded-[2rem] border-l-4 ${tier.accent} border border-grey/10 bg-warm-white p-7 md:p-9`}>
                <div className="mb-5">
                  <p className={`text-[11px] font-bold uppercase tracking-[0.18em] ${tier.labelColor} mb-1`}>{tier.tier}</p>
                  <p className="text-sm font-light text-grey">{tier.description}</p>
                </div>
                <div className="grid gap-6 sm:grid-cols-2">
                  {tier.groups.map((group) => (
                    <div key={group.label}>
                      <p className="mb-3 text-xs font-bold uppercase tracking-widest text-navy/40">{group.label}</p>
                      <div className="flex flex-wrap gap-2">
                        {group.items.map((item) => (
                          <span key={item} className="rounded-full border border-grey/20 bg-white px-3 py-1 text-xs font-medium text-navy/70">
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Engagement Models */}
      <section className="bg-warm-white px-6 py-20 md:py-28 border-t border-grey/10">
        <div className="max-w-7xl mx-auto">
          <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.22em] text-brand">How We Work</p>
          <h2 className="mb-3 max-w-2xl text-3xl font-display font-medium tracking-tight text-navy md:text-4xl">
            Four ways Maxinor supports defence tech founders.
          </h2>
          <p className="mb-14 max-w-xl text-base font-light leading-relaxed text-grey md:mb-16">
            Every engagement is operator-led and outcome-oriented. We do not write strategy documents and leave.
          </p>
          <div className="grid gap-5 md:grid-cols-2 md:gap-6">
            {engagementModels.map((model) => (
              <div key={model.title} className="rounded-[2rem] border border-grey/15 bg-white p-7 transition-all duration-300 hover:border-brand/20 hover:shadow-md md:p-9">
                <h3 className="mb-3 text-lg font-display font-semibold text-navy md:text-xl">{model.title}</h3>
                <p className="mb-5 text-sm font-light leading-relaxed text-grey">{model.description}</p>
                <ul className="space-y-2">
                  {model.items.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-navy/70">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white px-6 py-20 md:py-28 border-t border-grey/10">
        <div className="max-w-3xl mx-auto">
          <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.22em] text-brand">FAQ</p>
          <h2 className="mb-12 text-3xl font-display font-medium tracking-tight text-navy md:text-4xl">
            Common questions from defence tech founders.
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="rounded-[1.5rem] border border-grey/15 bg-warm-white overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="flex w-full items-center justify-between gap-4 p-6 text-left"
                >
                  <span className="text-sm font-semibold text-navy md:text-base">{faq.q}</span>
                  <span className={`shrink-0 text-brand transition-transform ${openFaq === i ? 'rotate-45' : ''}`}>+</span>
                </button>
                <AnimatePresence>
                  {openFaq === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="px-6 pb-6"
                    >
                      <p className="border-t border-navy/10 pt-4 text-sm font-light leading-relaxed text-grey">{faq.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy px-6 py-20 md:py-28">
        <div className="max-w-3xl mx-auto text-center">
          <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.22em] text-brand">Get Started</p>
          <h2 className="mb-5 text-3xl font-display font-medium tracking-tight text-warm-white md:text-5xl">
            Ready to navigate defence the right way?
          </h2>
          <p className="mb-10 text-base font-light leading-relaxed text-warm-white/60 md:text-lg">
            The conversation starts with an operator who has been in the room, not a consultant with a PowerPoint.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className={primaryBtn}>
              Talk to a defence operator <ArrowRight className="h-4 w-4 shrink-0" />
            </Link>
            <Link href="/sectors" className={ghostBtn}>
              All Sectors
            </Link>
          </div>
        </div>
      </section>
      </>
      )}

    </div>
  );
}
