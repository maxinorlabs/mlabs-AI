import type { Metadata } from 'next';
import Image from 'next/image';
import { Linkedin } from 'lucide-react';
import Link from 'next/link';

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

const pagePadding = 'bg-warm-white px-6 pt-24 pb-20 text-navy md:pt-32 md:pb-28 lg:pb-32';
const introSpacing = 'mb-14 md:mb-20 lg:mb-12';
const introTitle = 'mb-5 text-4xl font-display font-medium tracking-tight text-navy sm:text-5xl md:mb-6 md:text-7xl';
const introBody = 'max-w-2xl text-base font-light leading-relaxed text-navy/70 md:text-xl';
const sectionSpacing = 'mb-16 md:mb-24 lg:mb-28';
const sectionHeading = 'mb-8 flex items-center gap-3 text-2xl font-display font-medium tracking-tight text-navy md:mb-12 md:text-3xl';
const partnerCardClass =
  'group relative flex h-20 w-full items-center justify-center rounded-[1.5rem] border border-navy/10 bg-white p-3 transition-all duration-500 hover:border-brand/30 hover:bg-white sm:h-28 sm:rounded-[2rem] sm:p-5 md:h-32 md:p-6';

const leadership: TeamMember[] = [
  {
    name: 'Samir Gupta',
    role: 'Growth & Operations',
    desc: 'Entrepreneur | ex-Paytm, ex-Bzinga, ex-Solv',
    image:
      'https://cdn.prod.website-files.com/68e4de0fbf5c464cee858fc3/68e50d8f8eb88abaaf2dbbb5_1695013342712.jpeg',
    linkedin: 'https://www.linkedin.com/in/samirgupta1/',
  },
  {
    name: 'Amar Daing',
    role: 'Product & GTM',
    desc: 'Entrepreneur | ex-Google x Tata, ex-Oyo, ex-Grofers',
    image:
      'https://cdn.prod.website-files.com/68e4de0fbf5c464cee858fc3/68e50d8f17573e0fcd4ec3c1_1663569415671.jpeg',
    linkedin: 'https://www.linkedin.com/in/amar-daing/',
  },
  {
    name: 'Parool Duggal',
    role: 'People & Org Dev',
    desc: 'Entrepreneur | ex-Bijnis, ex-EcomXpress, ex-AuthBridge',
    image:
      'https://cdn.prod.website-files.com/68e4de0fbf5c464cee858fc3/68e50d8fb58f0e244a2a4d31_1635223380712.jpeg',
    linkedin: 'https://www.linkedin.com/in/parool-duggal-1b651713/',
  },
  {
    name: 'Alok Kumar',
    role: 'AI & Tech',
    desc: 'Entrepreneur | ex-Zee, ex-Oracle, ex-StanChart, ex-Fidelity',
    image:
      'https://cdn.prod.website-files.com/68e4de0fbf5c464cee858fc3/69b29541adceb2f4cf8144ad_79c886e0-fd1f-49a4-bfed-f481d5bb1f38.jpg',
    imagePosition: '50% 20%',
    linkedin: 'https://www.linkedin.com/in/alok02/',
  },
  {
    name: 'Priyabrata Padhi',
    role: 'Consumer Marketing',
    desc: 'Entrepreneur | ex-United Breweries, ex-ITC, ex-Britannia',
    image:
      'https://cdn.prod.website-files.com/68e4de0fbf5c464cee858fc3/69c11ffc5c1c2e2f2a9cadaa_Gemini_Generated_Image_m5qmrom5qmrom5qm.avif',
    linkedin: 'https://www.linkedin.com/in/priyabratapadhi/',
  },
  {
    name: 'Dr Rachit Negi',
    role: 'Global Health & Government Partnerships',
    desc: 'Entrepreneur | ex-Operation Smile, ex-World Bank, ex-PATH',
    image:
      'https://cdn.prod.website-files.com/68e4de0fbf5c464cee858fc3/69f302142cd2dca8aba0e22a_WhatsApp%20Image%202026-04-30%20at%2012.35.34%20PM.jpeg',
    imagePosition: '50% 15%',
    linkedin: 'https://www.linkedin.com/in/rachitnegi/',
  },
  {
    name: 'Manik Sood',
    role: 'Legal & Compliance',
    desc: 'Lawyer | ex-Paytm, ex-Zee, ex-Healthkart | 20+ years cross-industry expertise',
    image:
      'https://cdn.prod.website-files.com/68e4de0fbf5c464cee858fc3/6a142ce51a9da04ec8dc7a9a_manik.avif',
    imagePosition: '50% 20%',
    linkedin: 'https://www.linkedin.com/in/manik-sood-64402313/',
  },
  {
    name: 'Alok Lall',
    role: 'Strategy',
    desc: 'ex-Microsoft COO India',
    image: 'https://cdn.prod.website-files.com/68e4de0fbf5c464cee858fc3/6a5933b4ed3c4224eb155040_1516285295392.jpg',
    linkedin: 'https://in.linkedin.com/in/alok-lall',
  },
  {
    name: 'Zubair Patel',
    role: 'Retail & Consumer',
    desc: 'CBO, CMO & Business/P&L Leader | ex-Shoppers Stop, ex-Future Group, ex-Health & Glow',
    image:
      'https://cdn.prod.website-files.com/68e4de0fbf5c464cee858fc3/6a75e1f31272b2bc952fbe09_ZP%20Profile.JPG.jpeg',
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
      'https://cdn.prod.website-files.com/68e4de0fbf5c464cee858fc3/6a142ce6dd742f13761925d7_WhatsApp%20Image%202026-05-25%20at%203.23.59%20PM.avif',
    linkedin: 'https://www.linkedin.com/in/aditiagrawal2609',
  },
  {
    name: 'Puneet Kolthe',
    role: 'Entrepreneur in Residence, CX & Service Operations',
    desc: '25+ years | Building, transforming, scaling CX & Service Operations | ex-Arata, ex-Karbonn, ex-Panasonic',
    image:
      'https://cdn.prod.website-files.com/68e4de0fbf5c464cee858fc3/6a4c962caa5cc5d2afe7763a_Image%20Puneet%20Kolthe.avif',
    linkedin: 'https://www.linkedin.com/in/puneet-kolthe-6b28297',
  },
];

const programTeam: TeamMember[] = [
  {
    name: 'Saniya Fathima',
    role: "Research Associate, Founder's Office",
    desc: 'Postgrad in Biotechnology',
    image:
      'https://cdn.prod.website-files.com/68e4de0fbf5c464cee858fc3/69b295fc064e36e1c0266a56_WhatsApp%20Image%202026-03-12%20at%203.59.29%20PM.jpeg',
    imagePosition: '50% 10%',
    linkedin: 'https://www.linkedin.com/in/saniya-f-369a98213/',
  },
  // Hidden — keep entry for later re-enable, do not delete.
  // {
  //   name: 'Aman Sharma',
  //   role: 'Product Growth, GTM & AI',
  //   desc: 'Operator across product growth, go-to-market, and AI execution',
  //   image:
  //     'https://cdn.prod.website-files.com/68e4de0fbf5c464cee858fc3/69c123c327dd93f3976c61ef_Gemini_Generated_Image_mjcmjxmjcmjxmjcm.avif',
  //   imagePosition: 'top',
  //   linkedin: 'https://www.linkedin.com/in/aman-sharma-77243b2a0/',
  // },
  {
    name: 'Pushkar Apte',
    role: 'Manager, Venture Operations',
    desc: 'Marketplace operations, inventory management and platform performance',
    image:
      'https://cdn.prod.website-files.com/68e4de0fbf5c464cee858fc3/69f8b3d00380c1ad6540ad69_WhatsApp%20Image%202026-05-04%20at%208.14.55%20PM.jpeg',
    imagePosition: 'top',
    linkedin: 'https://www.linkedin.com/in/aptepushkar/',
  },
];

const partners = [
  {
    name: 'Hygriv',
    image: 'https://cdn.prod.website-files.com/68e4de0fbf5c464cee858fc3/695e8f57198b4be76b7685ef_Logo%20with%20Capital.png',
    url: 'https://www.hygriv.com/',
  },
  {
    name: 'Saptharushi',
    image: 'https://cdn.prod.website-files.com/68e4de0fbf5c464cee858fc3/69b3cd584c566a57e84d3aae_saptharushi7_logo.jpg',
    url: 'https://saptharushi.com/',
  },
  {
    name: 'iAccel GBI',
    image: 'https://cdn.prod.website-files.com/68e4de0fbf5c464cee858fc3/6a4e70f6eb738b4cf11a6c00_logo-removebg.avif',
    url: 'https://iaccelgbi.com/',
  },
];

function TeamGridSection({ title, members }: { title: string; members: TeamMember[] }) {
  return (
    <section className={sectionSpacing}>
      <h2 className={sectionHeading}>
        <span className="h-1 w-8 bg-brand" />
        {title}
      </h2>
      <div className="grid gap-x-8 gap-y-12 md:grid-cols-2 md:gap-y-14 lg:grid-cols-3 lg:gap-y-16">
        {members.map((member) => (
          <article key={member.name} id={member.name.toLowerCase().replace(/[\s.]+/g, '-').replace(/[^a-z0-9-]/g, '')} className="group flex flex-col text-center md:text-left">
            <div className="relative mx-auto mb-6 block h-40 w-40 overflow-hidden rounded-full border-4 border-navy/10 transition-colors duration-500 group-hover:border-brand/40 sm:h-44 sm:w-44 md:mx-0 md:mb-8 md:h-52 md:w-52">
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
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-grey/10 to-grey/20 text-5xl font-display text-grey/40">
                  {member.name.charAt(0)}
                </div>
              )}
            </div>
            <h3 className="mb-2 text-2xl font-display font-medium text-navy">{member.name}</h3>
            <p className="mb-3 text-base font-medium text-brand md:mb-4">{member.role}</p>
            <p className="mb-6 max-w-[24rem] text-base font-light leading-relaxed text-navy/70 md:mb-7">
              {member.desc}
            </p>
            <div className="mt-auto flex justify-center md:justify-start">
              <Link
                href={member.linkedin}
                target="_blank"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-navy/15 bg-white transition-all duration-300 hover:border-brand hover:bg-brand hover:text-warm-white"
              >
                <Linkedin className="h-5 w-5" />
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default function TeamPage() {
  return (
    <div className={pagePadding}>
      <div className="max-w-7xl mx-auto">
        <div className={introSpacing}>
          <h1 className={introTitle}>
            Meet the <span className="text-brand">Operator Team</span>
          </h1>
          <p className={introBody}>
            Experienced operators and entrepreneurs driving founder success through hands-on execution.
          </p>
        </div>

        <TeamGridSection title="Operating Partners" members={leadership} />
        <TeamGridSection title="Entrepreneurs in Residence" members={eirTeam} />
        <TeamGridSection title="Program Team" members={programTeam} />

        <section>
          <h2 className={sectionHeading}>
            <span className="h-1 w-8 bg-brand" />
            Our Partners
          </h2>
          <div className="mx-auto grid max-w-4xl grid-cols-3 gap-3 sm:gap-6 md:gap-8">
            {partners.map((partner) => (
              <Link
                key={partner.name}
                href={partner.url}
                target="_blank"
                rel="noopener noreferrer"
                className={partnerCardClass}
              >
                <Image
                  src={partner.image}
                  alt={partner.name}
                  fill
                  className="object-contain p-5 opacity-70 transition-opacity duration-500 group-hover:opacity-100 md:p-6"
                  referrerPolicy="no-referrer"
                />
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
