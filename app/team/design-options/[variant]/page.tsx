import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, Linkedin } from 'lucide-react';
import { notFound } from 'next/navigation';

export const metadata: Metadata = {
  title: 'Team Design Options',
  robots: { index: false, follow: false },
};

type Member = {
  name: string;
  role: string;
  desc: string;
  image: string;
  linkedin: string;
  position?: string;
};

const operators: Member[] = [
  {
    name: 'Samir Gupta',
    role: 'Growth & Operations',
    desc: 'Entrepreneur · ex-Paytm, ex-Bzinga, ex-Solv',
    image: '/team/samir-gupta.webp',
    linkedin: 'https://www.linkedin.com/in/samirgupta1/',
    position: '50% 10%',
  },
  {
    name: 'Amar Daing',
    role: 'Product & GTM',
    desc: 'Entrepreneur · ex-Google x Tata, ex-Oyo, ex-Grofers',
    image: 'https://cdn.prod.website-files.com/68e4de0fbf5c464cee858fc3/68e50d8f17573e0fcd4ec3c1_1663569415671.jpeg',
    linkedin: 'https://www.linkedin.com/in/amar-daing/',
  },
  {
    name: 'Parool Duggal',
    role: 'People & Org Dev',
    desc: 'Entrepreneur · ex-Bijnis, ex-EcomXpress, ex-AuthBridge',
    image: '/team/parool-duggal.webp',
    linkedin: 'https://www.linkedin.com/in/parool-duggal-1b651713/',
    position: '50% 8%',
  },
  {
    name: 'Alok Kumar',
    role: 'AI & Tech',
    desc: 'Entrepreneur · ex-Zee, ex-Oracle, ex-StanChart, ex-Fidelity',
    image: '/team/alok-kumar.webp',
    linkedin: 'https://www.linkedin.com/in/alok02/',
    position: '50% 12%',
  },
  {
    name: 'Priyabrata Padhi',
    role: 'Consumer Marketing',
    desc: 'Entrepreneur · ex-United Breweries, ex-ITC, ex-Britannia',
    image: 'https://cdn.prod.website-files.com/68e4de0fbf5c464cee858fc3/69c11ffc5c1c2e2f2a9cadaa_Gemini_Generated_Image_m5qmrom5qmrom5qm.avif',
    linkedin: 'https://www.linkedin.com/in/priyabratapadhi/',
  },
  {
    name: 'Dr Rachit Negi',
    role: 'Global Health & Government Partnerships',
    desc: 'Entrepreneur · ex-Operation Smile, ex-World Bank, ex-PATH',
    image: 'https://cdn.prod.website-files.com/68e4de0fbf5c464cee858fc3/69f302142cd2dca8aba0e22a_WhatsApp%20Image%202026-04-30%20at%2012.35.34%20PM.jpeg',
    linkedin: 'https://www.linkedin.com/in/rachitnegi/',
    position: '50% 15%',
  },
  {
    name: 'Manik Sood',
    role: 'Legal & Compliance',
    desc: 'Lawyer · ex-Paytm, ex-Zee, ex-Healthkart',
    image: 'https://cdn.prod.website-files.com/68e4de0fbf5c464cee858fc3/6a142ce51a9da04ec8dc7a9a_manik.avif',
    linkedin: 'https://www.linkedin.com/in/manik-sood-64402313/',
    position: '50% 20%',
  },
  {
    name: 'Alok Lall',
    role: 'Strategy',
    desc: 'Former COO, Microsoft India',
    image: 'https://cdn.prod.website-files.com/68e4de0fbf5c464cee858fc3/6a5933b4ed3c4224eb155040_1516285295392.jpg',
    linkedin: 'https://in.linkedin.com/in/alok-lall',
  },
  {
    name: 'Zubair Patel',
    role: 'Retail & Consumer',
    desc: 'CBO, CMO & P&L Leader · ex-Shoppers Stop, ex-Future Group',
    image: 'https://cdn.prod.website-files.com/68e4de0fbf5c464cee858fc3/6a75e1f31272b2bc952fbe09_ZP%20Profile.JPG.jpeg',
    linkedin: 'https://www.linkedin.com/in/zubairpatel/',
    position: '50% 5%',
  },
];

const entrepreneurs: Member[] = [
  {
    name: 'Aditi Agrawal',
    role: 'Entrepreneur in Residence · Advertising',
    desc: 'Founder, StickyPins & Avyu India',
    image: 'https://cdn.prod.website-files.com/68e4de0fbf5c464cee858fc3/6a142ce6dd742f13761925d7_WhatsApp%20Image%202026-05-25%20at%203.23.59%20PM.avif',
    linkedin: 'https://www.linkedin.com/in/aditiagrawal2609',
  },
  {
    name: 'Puneet Kolthe',
    role: 'Entrepreneur in Residence · CX & Service Operations',
    desc: '25+ years building and scaling customer operations',
    image: 'https://cdn.prod.website-files.com/68e4de0fbf5c464cee858fc3/6a4c962caa5cc5d2afe7763a_Image%20Puneet%20Kolthe.avif',
    linkedin: 'https://www.linkedin.com/in/puneet-kolthe-6b28297',
  },
];

const program: Member[] = [
  {
    name: 'Saniya Fathima',
    role: "Research Associate, Founder's Office",
    desc: 'Postgrad in Biotechnology',
    image: 'https://cdn.prod.website-files.com/68e4de0fbf5c464cee858fc3/69b295fc064e36e1c0266a56_WhatsApp%20Image%202026-03-12%20at%203.59.29%20PM.jpeg',
    linkedin: 'https://www.linkedin.com/in/saniya-f-369a98213/',
    position: '50% 10%',
  },
  {
    name: 'Pushkar Apte',
    role: 'Manager, Venture Operations',
    desc: 'Marketplace operations and platform performance',
    image: 'https://cdn.prod.website-files.com/68e4de0fbf5c464cee858fc3/69f8b3d00380c1ad6540ad69_WhatsApp%20Image%202026-05-04%20at%208.14.55%20PM.jpeg',
    linkedin: 'https://www.linkedin.com/in/aptepushkar/',
    position: 'top',
  },
];

function PhotoCards({ title, members }: { title: string; members: Member[] }) {
  return (
    <section className="mb-20">
      <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-brand">The people behind the work</p>
      <h2 className="mb-8 text-3xl font-display font-medium tracking-tight text-navy">{title}</h2>
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {members.map((member) => (
          <article key={member.name} className="overflow-hidden rounded-2xl border border-navy/10 bg-warm-white shadow-[0_14px_40px_rgba(26,31,46,0.06)]">
            <Link href={member.linkedin} target="_blank" rel="noopener noreferrer" className="group block" aria-label={`View ${member.name} on LinkedIn`}>
              <div className="relative aspect-[4/5] overflow-hidden bg-navy/5 sm:aspect-[3/4] lg:aspect-[4/5]">
                <Image src={member.image} alt={member.name} fill className="object-cover transition duration-300 group-hover:scale-[1.025]" style={{ objectPosition: member.position ?? 'center' }} sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw" />
              </div>
              <div className="p-5 sm:p-6">
                <p className="mb-2 text-xs font-bold uppercase tracking-[0.16em] text-brand">{member.role}</p>
                <div className="flex items-center justify-between gap-4">
                  <h3 className="text-xl font-display font-medium text-navy">{member.name}</h3>
                  <ArrowUpRight className="h-4 w-4 shrink-0 text-navy/40" aria-hidden="true" />
                </div>
                <p className="mt-3 min-h-10 text-sm font-light leading-relaxed text-grey">{member.desc}</p>
              </div>
            </Link>
            <div className="border-t border-navy/10 px-5 py-3 sm:px-6">
              <Link href={member.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-xs font-medium text-navy/65 transition hover:text-brand">
                <Linkedin className="h-3.5 w-3.5" aria-hidden="true" /> LinkedIn
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Directory({ title, members, number }: { title: string; members: Member[]; number: string }) {
  return (
    <section className="mb-20 md:mb-24">
      <div className="mb-4 flex items-end justify-between border-b border-navy/20 pb-4">
        <h2 className="text-2xl font-display font-semibold text-navy md:text-3xl">{title}</h2>
        <span className="text-sm font-medium text-grey/65">{number} / {String(members.length).padStart(2, '0')}</span>
      </div>
      <div className="grid gap-x-12 md:grid-cols-2">
        {members.map((member) => (
          <Link key={member.name} href={member.linkedin} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-5 border-b border-navy/15 py-6 transition-colors hover:border-brand/60" aria-label={`View ${member.name} on LinkedIn`}>
            <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-xl bg-navy/5 sm:h-28 sm:w-28">
              <Image src={member.image} alt={member.name} fill className="object-cover" style={{ objectPosition: member.position ?? '50% 15%' }} sizes="112px" />
            </div>
            <div className="min-w-0 flex-1">
              <p className="mb-1 text-xs font-bold uppercase tracking-[0.14em] text-brand">{member.role}</p>
              <h3 className="text-xl font-display font-medium text-navy sm:text-2xl">{member.name}</h3>
              <p className="mt-1 text-sm leading-relaxed text-grey">{member.desc}</p>
            </div>
            <ArrowUpRight className="h-5 w-5 shrink-0 self-start text-navy/35 transition group-hover:text-brand" aria-hidden="true" />
          </Link>
        ))}
      </div>
    </section>
  );
}

export default async function TeamDesignOption({ params }: { params: Promise<{ variant: string }> }) {
  if (process.env.NODE_ENV !== 'development') notFound();

  const { variant } = await params;
  if (variant !== 'photo-cards' && variant !== 'directory') notFound();

  if (variant === 'photo-cards') {
    return (
      <main className="bg-warm-white px-6 pb-20 pt-28 [--color-warm-white:#F5EFE6] [--color-navy:#1A1F2E] [--color-grey:#3D3D3D]">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16">
            <h1 className="mb-5 text-4xl font-display font-medium tracking-tight text-navy sm:text-5xl md:text-6xl">Meet the <span className="text-brand">Operator Team</span></h1>
            <p className="max-w-2xl text-base font-light leading-relaxed text-grey md:text-lg">Experienced operators and entrepreneurs driving founder success through hands-on execution.</p>
          </div>
          <PhotoCards title="Operators" members={operators} />
          <PhotoCards title="Entrepreneurs in Residence" members={entrepreneurs} />
          <PhotoCards title="Program Team" members={program} />
        </div>
      </main>
    );
  }

  return (
    <main className="bg-warm-white [--color-warm-white:#F5EFE6] [--color-navy:#1A1F2E] [--color-grey:#3D3D3D]">
      <section className="bg-navy px-6 pb-16 pt-28 text-warm-white md:pb-20 md:pt-32">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[1.25fr_0.75fr] md:items-end">
          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-brand">The people behind the work</p>
            <h1 className="max-w-3xl text-4xl font-display font-medium tracking-tight sm:text-5xl md:text-6xl">Built by operators.<br /><span className="text-brand">Backed by experience.</span></h1>
          </div>
          <p className="max-w-sm text-base leading-relaxed text-warm-white/75 md:justify-self-end">Meet the people who build with founders, own the work, and move ventures forward.</p>
        </div>
      </section>
      <div className="mx-auto max-w-7xl px-6 pb-20 pt-14 md:pt-16">
        <Directory title="Operators" members={operators} number="01" />
        <Directory title="Entrepreneurs in Residence" members={entrepreneurs} number="02" />
        <Directory title="Program Team" members={program} number="03" />
      </div>
    </main>
  );
}
