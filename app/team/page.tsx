import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { BookOpen, CalendarDays, Linkedin } from 'lucide-react';
import { TeamBio } from '@/components/team/TeamBio';
import { PartnerLogoTicker } from '@/components/PartnerLogoTicker';
import { Reveal, Stagger, StaggerItem } from '@/components/motion/Reveal';
import { Magnetic } from '@/components/motion/Magnetic';
import { NavyBackdrop } from '@/components/motion/NavyBackdrop';

export const metadata: Metadata = {
  title: 'Our Team | Operators and Builders',
  description: 'Meet the operators, founders, and domain experts who run Maxinor. A team that has built and scaled businesses across India and globally.',
};

type TeamMember = {
  name: string;
  role: string;
  desc: string;
  bio?: string;
  image?: string;
  imagePosition?: string;
  linkedin: string;
};

function memberSlug(name: string) {
  return name.toLowerCase().replace(/[\s.]+/g, '-').replace(/[^a-z0-9-]/g, '');
}

const pagePadding = 'bg-warm-white px-5 pt-24 pb-20 text-navy sm:px-6 sm:pt-28 md:pb-24';
const introSpacing = 'mb-10';
const introTitle = 'mb-4 text-4xl font-display font-medium tracking-tight text-navy sm:text-5xl lg:text-[clamp(2.25rem,min(4vw,7svh),3.25rem)]';
const introBody = 'max-w-2xl text-base font-light leading-relaxed text-grey';
const sectionSpacing = 'mb-16 md:mb-20';
const profileButton =
  'inline-flex flex-1 items-center justify-center gap-1.5 whitespace-nowrap rounded-full border border-navy/15 px-3 py-2 text-xs font-medium text-navy transition hover:border-navy/30 hover:bg-navy/5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand';
const sectionHeading = 'mb-7 text-2xl font-display font-medium tracking-tight text-navy md:mb-8 md:text-3xl';

const leadership: TeamMember[] = [
  {
    name: 'Samir Gupta',
    role: "Founder & Managing Partner",
    desc: 'Entrepreneur | ex-Paytm, ex-Bzinga, ex-Solv',
    bio: "Samir is an entrepreneur and operator with over 25 years of experience building and scaling businesses across e-commerce, B2B marketplaces, gaming and BPO. He was a core founding member at SOLV, which reached a US$260M+ GMV run-rate. He also led business at Bzinga and Paytm, and helped drive 10x revenue growth at Teleperformance India. He founded Maxinor to build alongside founders as an operator rather than simply back them.",
    image: '/team/samir-gupta.webp',
    imagePosition: '50% 10%',
    linkedin: 'https://www.linkedin.com/in/samirgupta1/',
  },
  {
    name: 'Amar Daing',
    role: "Partner, Product & CX",
    desc: 'Entrepreneur | ex-Google x Tata, ex-Oyo, ex-Grofers',
    bio: "Amar works where product, customer experience and go-to-market meet. He has held product and CX leadership roles at OYO, Airtel, Blinkit and FREND, where he built products for the Google–Tata Trusts Internet Saathi programme. At Maxinor he helps founders turn half-built ideas into clear, sellable customer journeys.",
    image:
      '/images/1663569415671.jpg',
    linkedin: 'https://www.linkedin.com/in/amar-daing/',
  },
  {
    name: 'Parool Duggal',
    role: "Partner, HR & Org Development",
    desc: 'Entrepreneur | ex-Bijnis, ex-EcomXpress, ex-AuthBridge',
    bio: "Parool is a senior HR and talent leader with over two decades of experience across Teleperformance, Ecom Express, AuthBridge and bijnis. She now advises companies on HR as a Senior Consultant at Proteam. At Maxinor she helps startups build and scale the teams they need to grow.",
    image: '/team/parool-duggal.webp',
    imagePosition: '50% 8%',
    linkedin: 'https://www.linkedin.com/in/parool-duggal-1b651713/',
  },
  {
    name: 'Alok Kumar',
    role: "Partner, AI & Technology",
    desc: 'Entrepreneur | ex-Zee, ex-Oracle, ex-StanChart, ex-Fidelity',
    bio: "Alok architects AI-native systems for Maxinor's portfolio ventures, from HIPAA-compliant health platforms to large-scale multi-agent systems. He brings 21+ years of engineering leadership, most recently as SVP Engineering at ZEE5, where he led a 200-engineer organisation that modernised the platform for 80M+ users. Earlier, he built the engineering function for SOLV, Standard Chartered's greenfield B2B fintech venture, and held engineering roles at Fidelity and Oracle.",
    image: '/team/alok-kumar-v2.webp',
    imagePosition: '50% 20%',
    linkedin: 'https://www.linkedin.com/in/alok02/',
  },
  {
    name: 'Priyabrata Padhi',
    role: "Partner, Marketing",
    desc: 'Entrepreneur | ex-United Breweries, ex-ITC, ex-Britannia',
    bio: "Priyabrata is a consumer marketing leader with nearly two decades at ITC, Britannia and Heineken India/United Breweries, most recently as Head of Marketing Excellence. His expertise spans brand building, media, sponsorships and FMCG go-to-market. He is also building a wellness and healthcare startup, and he brings that founder perspective to Maxinor's ventures.",
    image:
      '/images/gemini-generated-image-m5qmrom5qmrom5qm.webp',
    linkedin: 'https://www.linkedin.com/in/priyabratapadhi/',
  },
  {
    name: 'Dr. Rachit Negi',
    role: "Partner, Health",
    desc: 'Entrepreneur | ex-Operation Smile, ex-World Bank, ex-PATH',
    bio: "Dr. Rachit Negi is a global health strategist with over 10 years of experience strengthening health systems, building multi-stakeholder partnerships, and scaling healthcare innovation across Asia and MENA. Trained at the Johns Hopkins Bloomberg School of Public Health, he has worked across government, global health, philanthropy, and healthcare ecosystems, including engagements with the World Bank, USAID, GAVI, GFATM-funded programmes, and Operation Smile. At Maxinor, he leads the Health vertical, helping healthcare and health-tech ventures navigate governments, donors, health systems, and markets to translate innovative technologies into scalable real-world impact.",
    image:
      '/images/whatsapp-image-2026-04-30-at-12-35-34-pm.jpg',
    imagePosition: '50% 15%',
    linkedin: 'https://www.linkedin.com/in/rachitnegi/',
  },
  {
    name: 'Manik Sood',
    role: "Partner, Legal",
    desc: 'Lawyer | ex-Paytm, ex-Zee, ex-Healthkart | 20+ years cross-industry expertise',
    bio: "Manik is a corporate lawyer with nearly two decades of experience across e-commerce, fintech, media and data privacy. As SVP Legal at Zee Entertainment and Head of Legal at Paytm E-Commerce, he closed deals with Google, Microsoft and eBay. He now leads Law Grammar, the firm he founded.",
    image:
      '/images/manik.webp',
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
    role: "Partner, Retail",
    desc: 'CBO, CMO & Business/P&L Leader | ex-Shoppers Stop, ex-Future Group, ex-Health & Glow',
    bio: "Zubair brings over 25 years running P&Ls across fashion, beauty and lifestyle retail, from D2C startups to large format businesses like Shoppers Stop, Future Lifestyle Fashions and Health & Glow. He has managed categories worth over ₹1,500 Cr, built private label portfolios of 60+ brands, scaled a fashion retail business 6x, and led a full omnichannel pivot in just 60 days. At Maxinor, he works inside founder-led D2C and retail businesses, building growth strategy and omnichannel operations.",
    image:
      '/images/zp-profile-jpg.jpg',
    imagePosition: '50% 5%',
    linkedin: 'https://www.linkedin.com/in/zubairpatel/',
  },
  {
    name: 'Soham Mondal',
    role: "Partner",
    desc: 'Founding Partner, Triveous | Founder, TheOutpost.ai | Lead Anchor Mentor, Google for Startups India',
    bio: "Soham works at the intersection of product design and engineering. He is the Founding Partner of product studio Triveous and the Founder of TheOutpost.ai. He has built mobile-first products with Google, IDEO and WHO, and has been a Lead Anchor Mentor at Google for Startups India for over a decade.",
    image: '/team/soham-mondal.webp',
    imagePosition: '50% 20%',
    linkedin: 'https://www.linkedin.com/in/sohammondal/',
  },
];

const eirTeam: TeamMember[] = [
  {
    name: 'Aditi Agrawal',
    role: "Entrepreneur in Residence",
    desc: 'Founder, StickyPins & Avyu India | MBA, KJ Somaiya | IIM Bangalore',
    bio: "Aditi is a serial entrepreneur and digital marketing specialist. She founded the 360° agency StickyPins.Inc in 2016 and co-founded the wellness brand AVYU India in 2023. She is an alumna of the Goldman Sachs 10,000 Women programme at IIM Bangalore and a guest lecturer on entrepreneurship, branding and leadership.",
    image:
      '/images/whatsapp-image-2026-05-25-at-3-23-59-pm.webp',
    linkedin: 'https://www.linkedin.com/in/aditiagrawal2609',
  },
  {
    name: 'Puneet Kolthe',
    role: "Entrepreneur in Residence",
    desc: '25+ years | Building, transforming, scaling CX & Service Operations | ex-Arata, ex-Karbonn, ex-Panasonic',
    bio: "Puneet is a customer service and operations leader with over two decades of experience building service functions for consumer brands and BPOs. He was Director of Customer Service at Heads Up For Tails and now heads Customer Service at Arata. His work centres on designing workflows, SOPs and service standards that keep customer satisfaction high as businesses scale.",
    image:
      '/images/image-puneet-kolthe.webp',
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
  //     '/images/gemini-generated-image-mjcmjxmjcmjxmjcm.webp',
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
      <Reveal className="mb-6 md:mb-7">
        <div>
          <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-brand">The people behind the work</p>
          <h2 className="text-2xl font-display font-medium tracking-tight text-navy md:text-3xl">{title}</h2>
        </div>
      </Reveal>
      <Stagger className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {members.map((member) => (
          <StaggerItem key={member.name} className="flex">
          <article
            key={member.name}
            id={memberSlug(member.name)}
            className="spotlight spotlight-border group flex w-full flex-col overflow-hidden rounded-2xl border border-navy/10 bg-warm-white shadow-[0_14px_40px_rgba(26,31,46,0.06)] transition duration-300 hover:-translate-y-1 hover:border-navy/20 hover:shadow-[0_20px_50px_rgba(26,31,46,0.10)]"
          >
            <div className="relative aspect-square overflow-hidden bg-navy/5 sm:aspect-[4/3] md:aspect-[3/2]">
              {member.image ? (
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover saturate-[0.8] transition duration-700 group-hover:scale-[1.04] group-hover:saturate-100"
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
            <div className="flex flex-1 flex-col p-5">
              <p className="mb-2 text-xs font-bold uppercase tracking-[0.16em] text-brand">{member.role}</p>
              <h3 className="text-xl font-display font-medium tracking-tight text-navy">{member.name}</h3>
              {member.bio ? (
                <TeamBio name={member.name} role={member.role} bio={member.bio} />
              ) : (
                <p className="mt-3 text-sm font-light leading-relaxed text-grey">{member.desc}</p>
              )}
              <div className="mt-auto flex gap-2 pt-5">
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${member.name} on LinkedIn`}
                  className={profileButton}
                >
                  <Linkedin className="h-3.5 w-3.5" aria-hidden="true" />
                  LinkedIn
                </a>
                <Link href="/blog" className={profileButton}>
                  <BookOpen className="h-3.5 w-3.5" aria-hidden="true" />
                  Blog
                </Link>
                <Link href="/contact" className={`${profileButton} border-brand bg-brand text-warm-white hover:border-brand/90 hover:bg-brand/90 hover:text-warm-white`}>
                  <CalendarDays className="h-3.5 w-3.5" aria-hidden="true" />
                  Book a call
                </Link>
              </div>
            </div>
          </article>
          </StaggerItem>
        ))}
      </Stagger>
    </section>
  );
}

export default function TeamPage() {
  return (
    <div className={`${pagePadding} [--color-warm-white:#F5EFE6] [--color-navy:#1A1F2E] [--color-grey:#3D3D3D]`}>
      <div className="max-w-7xl mx-auto">
        <Reveal className={introSpacing}>
          <h1 className={introTitle}>
            Meet the <span className="text-brand">Operator Team</span>
          </h1>
          <p className={introBody}>
            Experienced operators and entrepreneurs driving founder success through hands-on execution.
          </p>
        </Reveal>

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

        <section className="relative mt-16 overflow-hidden rounded-3xl bg-navy px-6 py-12 text-center sm:px-10 md:mt-20 md:py-16">
          <NavyBackdrop />
          <div className="relative">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-brand">Work with our operators</p>
          <h2 className="mx-auto max-w-2xl text-3xl font-display font-medium tracking-tight text-warm-white md:text-4xl">
            Ready to build what comes next?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm font-light leading-relaxed text-warm-white/70 md:text-base">
            Tell us where you are headed and we’ll connect you with the right operator.
          </p>
          <Magnetic className="mt-8 inline-block">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-full bg-brand px-7 py-3.5 text-sm font-semibold text-warm-white transition duration-300 hover:-translate-y-0.5 hover:bg-brand/90 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand"
          >
            Book an Appointment
          </Link>
          </Magnetic>
          </div>
        </section>
      </div>
    </div>
  );
}
