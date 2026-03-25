import Image from 'next/image';
import { Linkedin } from 'lucide-react';
import Link from 'next/link';

type TeamMember = {
  name: string;
  role: string;
  desc: string;
  image?: string;
  linkedin: string;
};

const pagePadding = 'bg-warm-white px-6 pt-24 pb-20 text-navy md:pt-32 md:pb-28 lg:pb-32';
const introSpacing = 'mb-14 md:mb-24 lg:mb-28';
const introTitle = 'mb-5 text-4xl font-display font-medium tracking-tight text-navy sm:text-5xl md:mb-6 md:text-7xl';
const introBody = 'max-w-2xl text-base font-light leading-relaxed text-navy/70 md:text-xl';
const sectionSpacing = 'mb-16 md:mb-24 lg:mb-28';
const sectionHeading = 'mb-8 flex items-center gap-3 text-2xl font-display font-medium tracking-tight text-navy md:mb-12 md:text-3xl';
const partnerCardClass =
  'group relative flex h-28 w-full items-center justify-center rounded-[2rem] border border-navy/10 bg-white p-5 transition-all duration-500 hover:border-brand/30 hover:bg-white sm:w-[300px] md:h-32 md:p-6';

const leadership: TeamMember[] = [
  {
    name: 'Samir Gupta',
    role: 'Revenue, Growth & Ops',
    desc: 'Entrepreneur | ex-Paytm, ex-Bzinga, ex-Solv',
    image:
      'https://cdn.prod.website-files.com/68e4de0fbf5c464cee858fc3/68e50d8f8eb88abaaf2dbbb5_1695013342712.jpeg',
    linkedin: 'https://www.linkedin.com/in/samirgupta1/',
  },
  {
    name: 'Amar Daing',
    role: 'Product, CX & GTM',
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
    desc: 'Entrepreneur | Ex Zee, Ex StanChart, Ex Fidelity, Ex Oracle',
    image:
      'https://cdn.prod.website-files.com/68e4de0fbf5c464cee858fc3/69b29541adceb2f4cf8144ad_79c886e0-fd1f-49a4-bfed-f481d5bb1f38.jpg',
    linkedin: 'https://www.linkedin.com/in/alok02/',
  },
  {
    name: 'Rajesh Ramanathan',
    role: 'Fintech',
    desc: 'Entrepreneur | Ex Accenture, Ex Wipro, Ex Mastek',
    image:
      'https://cdn.prod.website-files.com/68e4de0fbf5c464cee858fc3/69b299cedd0e417ecb1e2533_WhatsApp%20Image%202026-03-12%20at%204.11.45%20PM.jpeg',
    linkedin: 'https://www.linkedin.com/in/rajeshramanathan/',
  },
  {
    name: 'Priyabrata Padhi',
    role: 'Consumer Marketing',
    desc: 'Entrepreneur | Ex Unitech Breweries, Ex ITC, Ex Britannia',
    image:
      'https://cdn.prod.website-files.com/68e4de0fbf5c464cee858fc3/69c11ffc5c1c2e2f2a9cadaa_Gemini_Generated_Image_m5qmrom5qmrom5qm.avif',
    linkedin: 'https://www.linkedin.com/in/priyabratapadhi/',
  },
];

const programTeam: TeamMember[] = [
  {
    name: 'Saniya Fathima',
    role: "Research Associate, Founder's Office",
    desc: 'Postgrad in Biotechnology',
    image:
      'https://cdn.prod.website-files.com/68e4de0fbf5c464cee858fc3/69b295fc064e36e1c0266a56_WhatsApp%20Image%202026-03-12%20at%203.59.29%20PM.jpeg',
    linkedin: 'https://www.linkedin.com/in/saniya-f-369a98213/',
  },
  {
    name: 'Aman Sharma',
    role: 'Product Growth, GTM & AI',
    desc: 'Operator across product growth, go-to-market, and AI execution',
    image:
      'https://cdn.prod.website-files.com/68e4de0fbf5c464cee858fc3/69c123c327dd93f3976c61ef_Gemini_Generated_Image_mjcmjxmjcmjxmjcm.avif',
    linkedin: 'https://www.linkedin.com/in/aman-sharma-77243b2a0/',
  },
  {
    name: 'Snoopster',
    role: 'Happiness Associate',
    desc: 'ex-Busybody now Calmfluencer',
    image:
      'https://cdn.prod.website-files.com/68e4de0fbf5c464cee858fc3/68e4de10bf5c464cee8590af_camylla-battani-zSCoQkrLMOE-unsplash.webp',
    linkedin: 'https://www.linkedin.com/company/maxinor/?viewAsMember=true',
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
          <article key={member.name} className="group flex flex-col text-center md:text-left">
            <div className="relative mx-auto mb-6 h-40 w-40 overflow-hidden rounded-full border-4 border-navy/10 transition-colors duration-500 group-hover:border-brand/40 sm:h-44 sm:w-44 md:mx-0 md:mb-8 md:h-56 md:w-56">
              {member.image ? (
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
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

        <TeamGridSection title="Leadership" members={leadership} />
        <TeamGridSection title="Program Team" members={programTeam} />

        <section>
          <h2 className={sectionHeading}>
            <span className="h-1 w-8 bg-brand" />
            Our Partners
          </h2>
          <div className="mx-auto flex max-w-4xl flex-wrap justify-center gap-6 md:gap-8">
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
