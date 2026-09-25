import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { PartnerLogoTicker } from '@/components/PartnerLogoTicker';

export const metadata: Metadata = {
  title: 'Our Team | Operators and Builders',
  description: 'Meet the operators, founders, and domain experts who run Maxinor. A team that has built and scaled businesses across India and globally.',
};

type TeamMember = {
  name: string;
  role: string;
  desc: string;
  image?: string;
  imagePosition?: string;
  linkedin: string;
};

function memberSlug(name: string) {
  return name.toLowerCase().replace(/[\s.]+/g, '-').replace(/[^a-z0-9-]/g, '');
}

const pagePadding = 'bg-warm-white px-5 pt-24 pb-20 text-navy sm:px-6 sm:pt-28 md:pb-24';
const introSpacing = 'mb-10';
const introTitle = 'mb-4 text-4xl font-display font-medium tracking-tight text-navy sm:text-5xl lg:text-[3.25rem]';
const introBody = 'max-w-2xl text-base font-light leading-relaxed text-grey';
const sectionSpacing = 'mb-16 md:mb-20';
const sectionHeading = 'mb-7 text-2xl font-display font-medium tracking-tight text-navy md:mb-8 md:text-3xl';

const leadership: TeamMember[] = [
  {
    name: 'Samir Gupta',
    role: 'Growth & Operations',
    desc: 'Entrepreneur | ex-Paytm, ex-Bzinga, ex-Solv',
    image: '/team/samir-gupta.webp',
    imagePosition: '50% 10%',
    linkedin: 'https://www.linkedin.com/in/samirgupta1/',
  },
  {
    name: 'Amar Daing',
    role: 'Product & GTM',
    desc: 'Entrepreneur | ex-Google x Tata, ex-Oyo, ex-Grofers',
    image:
      '/images/1663569415671.jpg',
    linkedin: 'https://www.linkedin.com/in/amar-daing/',
  },
  {
    name: 'Parool Duggal',
    role: 'People & Org Dev',
    desc: 'Entrepreneur | ex-Bijnis, ex-EcomXpress, ex-AuthBridge',
    image: '/team/parool-duggal.webp',
    imagePosition: '50% 8%',
    linkedin: 'https://www.linkedin.com/in/parool-duggal-1b651713/',
  },
  {
    name: 'Alok Kumar',
    role: 'AI & Tech',
    desc: 'Entrepreneur | ex-Zee, ex-Oracle, ex-StanChart, ex-Fidelity',
    image: '/team/alok-kumar-v2.webp',
    imagePosition: '50% 20%',
    linkedin: 'https://www.linkedin.com/in/alok02/',
  },
  {
    name: 'Priyabrata Padhi',
    role: 'Consumer Marketing',
    desc: 'Entrepreneur | ex-United Breweries, ex-ITC, ex-Britannia',
    image:
      '/images/gemini-generated-image-m5qmrom5qmrom5qm.avif',
    linkedin: 'https://www.linkedin.com/in/priyabratapadhi/',
  },
  {
    name: 'Dr Rachit Negi',
    role: 'Global Health & Government Partnerships',
    desc: 'Entrepreneur | ex-Operation Smile, ex-World Bank, ex-PATH',
    image:
      '/images/whatsapp-image-2026-04-30-at-12-35-34-pm.jpg',
    imagePosition: '50% 15%',
    linkedin: 'https://www.linkedin.com/in/rachitnegi/',
  },
  {
    name: 'Manik Sood',
    role: 'Legal & Compliance',
    desc: 'Lawyer | ex-Paytm, ex-Zee, ex-Healthkart | 20+ years cross-industry expertise',
    image:
      '/images/manik.avif',
    imagePosition: '50% 20%',
    linkedin: 'https://www.linkedin.com/in/manik-sood-64402313/',
  },
  {
    name: 'Alok Lall',
    role: 'Strategy',
    desc: 'ex-Microsoft COO India',
    image: '/team/alok-lall.webp',
    linkedin: 'https://in.linkedin.com/in/alok-lall',
  },
  {
    name: 'Zubair Patel',
    role: 'Retail & Consumer',
    desc: 'CBO, CMO & Business/P&L Leader | ex-Shoppers Stop, ex-Future Group, ex-Health & Glow',
    image:
      '/images/zp-profile-jpg.jpg',
    imagePosition: '50% 5%',
    linkedin: 'https://www.linkedin.com/in/zubairpatel/',
  },
];

const eirTeam: TeamMember[] = [
  {
    name: 'Aditi Agrawal',
    role: 'Entrepreneur in Residence - Advertising',
    desc: 'Founder, StickyPins & Avyu India | MBA, KJ Somaiya | IIM Bangalore',
    image:
      '/images/whatsapp-image-2026-05-25-at-3-23-59-pm.avif',
    linkedin: 'https://www.linkedin.com/in/aditiagrawal2609',
  },
  {
    name: 'Puneet Kolthe',
    role: 'Entrepreneur in Residence, CX & Service Operations',
    desc: '25+ years | Building, transforming, scaling CX & Service Operations | ex-Arata, ex-Karbonn, ex-Panasonic',
    image:
      '/images/image-puneet-kolthe.avif',
    linkedin: 'https://www.linkedin.com/in/puneet-kolthe-6b28297',
  },
];

const programTeam: TeamMember[] = [
  {
    name: 'Saniya Fathima',
    role: "Research Associate, Founder's Office",
    desc: 'Postgrad in Biotechnology',
    image:
      '/images/whatsapp-image-2026-03-12-at-3-59-29-pm.jpg',
    imagePosition: '50% 10%',
    linkedin: 'https://www.linkedin.com/in/saniya-f-369a98213/',
  },
  // Hidden — keep entry for later re-enable, do not delete.
  // {
  //   name: 'Aman Sharma',
  //   role: 'Product Growth, GTM & AI',
  //   desc: 'Operator across product growth, go-to-market, and AI execution',
  //   image:
  //     '/images/gemini-generated-image-mjcmjxmjcmjxmjcm.avif',
  //   imagePosition: 'top',
  //   linkedin: 'https://www.linkedin.com/in/aman-sharma-77243b2a0/',
  // },
  {
    name: 'Pushkar Apte',
    role: 'Manager, Venture Operations',
    desc: 'Marketplace operations, inventory management and platform performance',
    image:
      '/images/whatsapp-image-2026-05-04-at-8-14-55-pm.jpg',
    imagePosition: 'top',
    linkedin: 'https://www.linkedin.com/in/aptepushkar/',
  },
];

function TeamGridSection({ title, members }: { title: string; members: TeamMember[] }) {
  return (
    <section className={sectionSpacing}>
      <div className="mb-6 md:mb-7">
        <div>
          <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-brand">The people behind the work</p>
          <h2 className="text-2xl font-display font-medium tracking-tight text-navy md:text-3xl">{title}</h2>
        </div>
      </div>
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {members.map((member) => (
          <article
            key={member.name}
            id={memberSlug(member.name)}
            className="group flex flex-col overflow-hidden rounded-2xl border border-navy/10 bg-warm-white shadow-[0_14px_40px_rgba(26,31,46,0.06)] transition duration-300 hover:-translate-y-1 hover:border-navy/20 hover:shadow-[0_20px_50px_rgba(26,31,46,0.10)]"
          >
            <Link
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="block flex-1 focus-visible:outline-2 focus-visible:outline-offset-[-3px] focus-visible:outline-brand lg:flex lg:min-h-64"
              aria-label={`View ${member.name} on LinkedIn`}
            >
              <div className="relative aspect-square overflow-hidden bg-navy/5 sm:aspect-[4/3] md:aspect-[3/2] lg:aspect-auto lg:w-[42%] lg:shrink-0">
                {member.image ? (
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-[1.025]"
                    style={{ objectPosition: member.imagePosition ?? '50% 15%' }}
                    referrerPolicy="no-referrer"
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                  />
                ) : (
                  <span className="absolute inset-0 flex items-center justify-center text-5xl font-display text-grey/40">
                    {member.name.charAt(0)}
                  </span>
                )}
              </div>
              <div className="p-5 lg:flex lg:min-w-0 lg:flex-1 lg:flex-col lg:justify-center">
                <p className="mb-2 text-xs font-bold uppercase tracking-[0.16em] text-brand">{member.role}</p>
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-xl font-display font-medium tracking-tight text-navy">{member.name}</h3>
                  <ArrowUpRight className="mt-1 h-4 w-4 shrink-0 text-navy/35 transition group-hover:text-brand" aria-hidden="true" />
                </div>
                <p className="mt-3 text-sm font-light leading-relaxed text-grey">{member.desc}</p>
              </div>
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}

export default function TeamPage() {
  return (
    <div className={`${pagePadding} [--color-warm-white:#F5EFE6] [--color-navy:#1A1F2E] [--color-grey:#3D3D3D]`}>
      <div className="max-w-7xl mx-auto">
        <div className={introSpacing}>
          <h1 className={introTitle}>
            Meet the <span className="text-brand">Operator Team</span>
          </h1>
          <p className={introBody}>
            Experienced operators and entrepreneurs driving founder success through hands-on execution.
          </p>
        </div>

        <TeamGridSection title="Operators" members={leadership} />
        <TeamGridSection title="Entrepreneurs in Residence" members={eirTeam} />
        <TeamGridSection title="Program Team" members={programTeam} />

        <section>
          <h2 className={sectionHeading}>Partnerships</h2>
          <p className="mb-6 max-w-2xl text-sm font-light leading-relaxed text-navy/65 md:text-base">
            An evolving network of builders, ecosystem entities, and specialist partners who help ventures move faster.
          </p>
          <PartnerLogoTicker />
        </section>

        <section className="mt-16 rounded-3xl bg-navy px-6 py-12 text-center sm:px-10 md:mt-20 md:py-16">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-brand">Work with our operators</p>
          <h2 className="mx-auto max-w-2xl text-3xl font-display font-medium tracking-tight text-warm-white md:text-4xl">
            Ready to build what comes next?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm font-light leading-relaxed text-warm-white/70 md:text-base">
            Tell us where you are headed and we’ll connect you with the right operator.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center justify-center rounded-full bg-brand px-7 py-3.5 text-sm font-semibold text-warm-white transition duration-300 hover:-translate-y-0.5 hover:bg-brand/90 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand"
          >
            Book an Appointment
          </Link>
        </section>
      </div>
    </div>
  );
}
