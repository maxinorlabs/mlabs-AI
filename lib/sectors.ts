// The six sectors, shared by the Sectors page and the Home page's sector stories.

export const sectors = [
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
export const COMING_SOON = ['media', 'education', 'defence'];

// A photo for each sector (Pexels, free to use under the Pexels licence). They show the sector, not our
// clients or team, so captions must never present the people in them as either.
export const SECTOR_PHOTOS: Record<string, { src: string; position?: string }> = {
  healthcare: { src: '/images/photos/healthcare.webp', position: '64% 40%' },
  d2c: { src: '/images/photos/d2c.webp', position: '45% 50%' },
  bfsi: { src: '/images/photos/bfsi.webp', position: '70% 50%' },
  media: { src: '/images/photos/media.webp', position: '60% 50%' },
  education: { src: '/images/photos/education.webp', position: '55% 40%' },
  defence: { src: '/images/photos/defence.webp', position: '50% 45%' },
};
