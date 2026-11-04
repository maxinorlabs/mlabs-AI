// The capabilities as shown on the Capabilities page, with their descriptions, deliverables and leads.
// Shared by the Capabilities page and the Home page's capability explorer.

export const capabilities = [
  // ── Build ──
  {
    number: '01',
    group: 'build',
    category: 'AI & Technology',
    title: 'AI & Tech',
    path: '/capabilities/ai-tech',
    description:
      'From architecture to working system. No pilots that never ship. No tech debt that kills scale.',
    deliverables: [
      'AI product architecture and MVP build',
      'Agentic automation and workflow AI',
      'Model fine-tuning, evaluation and deployment',
      'Data platform and AI infrastructure buildout',
      'Tech architecture review and debt remediation',
      'DevOps, cloud, and full-stack engineering',
    ],
    operatorBg: 'AI & Technology lead',
    operatorLinks: [
      { name: 'Alok Kumar', slug: 'alok-kumar' },
    ],
  },
  {
    number: '02',
    group: 'build',
    category: 'Product & Design',
    title: 'Product & Design',
    path: '/capabilities/product-research',
    description:
      'From signal to shipped product. Strategy, research, design, and product development run by an operator who has built and shipped products at scale, not just advised on them.',
    deliverables: [
      'Product strategy and roadmap design',
      'AI use-case scoping and prioritisation',
      'User research: customer interviews, usability testing, jobs-to-be-done',
      'Market research: TAM sizing, competitive landscape',
      'UX/UI design and design systems',
      'Product development: from prototype to shipped release',
      'Product operations: sprint cadence, backlog governance',
    ],
    operatorBg: 'Product & Design lead',
    operatorLinks: [
      { name: 'Amar Daing', slug: 'amar-daing' },
    ],
  },
  {
    number: '03',
    group: 'build',
    category: 'Brand & Marketing',
    title: 'Brand & Marketing',
    path: '/capabilities/brand-marketing',
    description:
      'From positioning to performance. Brand identity, consumer marketing, and D2C growth run by operators who have built category-defining consumer brands.',
    deliverables: [
      'Brand positioning and identity development',
      'Consumer marketing strategy and content engine',
      'D2C performance marketing and CAC optimisation',
      'Launch execution and competitive positioning',
      'Community and content-led growth',
    ],
    operatorBg: 'Consumer Marketing lead',
    operatorLinks: [
      { name: 'Maxinor Team', slug: null },
    ],
  },
  // ── Scale ──
  {
    number: '04',
    group: 'scale',
    category: 'Growth',
    title: 'Growth (GTM, Sales & Partnerships)',
    path: '/capabilities/growth-revenue',
    description:
      'From pipeline to market leadership. GTM strategy, sales execution, and partnership development run by operators who have owned the revenue number.',
    deliverables: [
      'GTM strategy and channel buildout',
      'Sales playbook design and pipeline execution',
      'Partnership and business development strategy',
      'Revenue operations — CRM governance, forecasting, retention',
      'Pricing architecture and unit economics',
    ],
    operatorBg: 'Growth & Revenue',
    operatorLinks: [
      { name: 'Maxinor Team', slug: null },
    ],
  },
  {
    number: '05',
    group: 'scale',
    category: 'Operations',
    title: 'Operations',
    path: '/capabilities/operations',
    description:
      'From supply chain to business process. Operations execution from operators who have run the full stack — physical, financial, and digital — inside real businesses at scale.',
    deliverables: [
      'End-to-end supply chain design and management',
      'Vendor sourcing, warehousing, logistics and fulfilment',
      'Offline distributor and channel operations',
      'Revenue operations and business process design',
      'Financial operations — modelling, reporting, fundraising process',
    ],
    operatorBg: 'Operations',
    operatorLinks: [
      { name: 'Samir Gupta', slug: 'samir-gupta' },
    ],
  },
  {
    number: '06',
    group: 'scale',
    category: 'Finance & Accounting',
    title: 'Finance & Accounting',
    path: '/capabilities/finance-accounting',
    description:
      'From bookkeeping to board-ready reporting. Financial infrastructure, modelling, and compliance run by operators who have closed books and closed rounds.',
    deliverables: [
      'Financial modelling and MIS reporting',
      'Accounting systems and bookkeeping infrastructure',
      'Fundraising process and data room management',
      'Statutory compliance and audit readiness',
      'Cash flow planning and working capital management',
    ],
    operatorBg: 'Finance & Accounting',
    operatorLinks: [
      { name: 'Maxinor Team', slug: null },
    ],
  },
  // ── Invest ──
  {
    number: '07',
    group: 'invest',
    category: 'Venture Capital',
    title: 'Venture Capital',
    path: '/capabilities/venture-capital',
    description:
      'From cheque to compounding outcome. Operator-validated capital deployment, milestone-linked structuring, and continued execution support after the term sheet.',
    deliverables: [
      'Operator-validated deal sourcing and diligence',
      'Milestone-linked capital structuring',
      'Post-investment operator support',
      'Portfolio governance and reporting',
      'Co-investment and syndicate access',
    ],
    operatorBg: 'Venture Capital',
    operatorLinks: [
      { name: 'Maxinor Team', slug: null },
    ],
  },
  {
    number: '08',
    group: 'invest',
    category: 'M&A',
    title: 'M&A',
    path: '/capabilities/mergers-acquisitions',
    description:
      'From term sheet to close. M&A advisory, valuation, and integration run by operators who have sat on both sides of the table.',
    deliverables: [
      'Buy-side and sell-side M&A advisory',
      'Valuation and deal structuring',
      'Term sheet review and negotiation',
      'Due diligence coordination',
      'Post-merger integration planning',
    ],
    operatorBg: 'M&A',
    operatorLinks: [
      { name: 'Manik Sood', slug: 'manik-sood' },
    ],
  },
  // ── Other (not in Engines nav) ──
  {
    number: '09',
    group: 'other',
    category: 'People & Org Building',
    title: 'Talent, Culture & Organisational Design',
    path: '/capabilities/talent-culture',
    description:
      'Scaling a company is ultimately about talent architecture and the growth and retention of people. Most founders realise this a year later than they should.',
    deliverables: [
      'Founding team gap analysis and role definition',
      'Org design for next-stage scale',
      'Hiring systems, culture design, and leadership onboarding',
      'Performance frameworks for operator-led teams',
      'ESOP design intent and compensation benchmarking',
      'Interim leadership and CXO transition planning',
    ],
    operatorBg: 'People, Org & Culture lead',
    operatorLinks: [
      { name: 'Parool Duggal', slug: 'parool-duggal' },
    ],
  },
  {
    number: '10',
    group: 'other',
    category: 'Legal',
    title: 'Legal',
    path: '/capabilities/legal',
    description:
      "Founder agreements to regulatory navigation. Legal execution from an operator who has been inside India's high-growth businesses — delivered through Maxinor, not referred away.",
    deliverables: [
      'Founder agreements, vesting, and co-founder structuring',
      'Regulatory licensing and sector compliance advisory',
      'IP protection and employment law',
      'M&A advisory, term sheet review, contract negotiation',
      'Day-to-day legal requirement support (secondment support included)',
      'Complete contract support (structuring, drafting, reviewing, negotiating and concluding contracts)',
      'Legal advisory to sectoral compliances support',
      'Ownership title due-diligence and real estate transactional support',
    ],
    operatorBg: 'Leadership capability across companies and sectors',
    operatorLinks: [
      { name: 'Manik Sood', slug: 'manik-sood' },
    ],
  },
];
