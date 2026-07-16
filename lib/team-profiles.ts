export type CareerEntry = {
  company: string;
  context: string;
};

export type TeamProfile = {
  slug: string;
  name: string;
  role: string;
  shortDesc: string;
  image?: string;
  imagePosition?: string;
  linkedin: string;
  section: 'leadership' | 'eir' | 'program';
  tagline: string;
  bio: string[];
  expertise: string[];
  career: CareerEntry[];
};

export const teamProfiles: TeamProfile[] = [
  {
    slug: 'samir-gupta',
    name: 'Samir Gupta',
    role: 'Revenue, Growth & Ops',
    shortDesc: 'Entrepreneur | ex-Paytm, ex-Bzinga, ex-Solv',
    image:
      'https://cdn.prod.website-files.com/68e4de0fbf5c464cee858fc3/68e50d8f8eb88abaaf2dbbb5_1695013342712.jpeg',
    linkedin: 'https://www.linkedin.com/in/samirgupta1/',
    section: 'leadership',
    tagline: 'Operator who has scaled revenue across fintech, gaming, and B2B marketplaces.',
    bio: [
      'Samir brings operator-level depth in revenue growth, GTM strategy, and business operations built across some of India\'s most high-velocity startups. His career spans consumer fintech, digital entertainment, and B2B commerce, giving him a rare cross-sector perspective on what it takes to scale a business from early traction to institutional scale.',
      'At Paytm, he operated inside one of India\'s defining fintech stories, building distribution and revenue motions at a company that reshaped how India transacts. At Solv, a B2B marketplace backed by Standard Chartered, he worked at the intersection of MSME commerce and financial services. At Bzinga, he navigated the fast-moving world of mobile gaming and digital entertainment.',
      'At Maxinor, Samir leads Revenue, Growth, and Operations, working with founders to build the commercial infrastructure that turns early traction into scalable, defensible revenue.',
    ],
    expertise: [
      'Revenue strategy',
      'GTM design',
      'B2B & B2C growth',
      'Fintech distribution',
      'Sales operations',
      'Business scaling',
    ],
    career: [
      {
        company: 'Paytm',
        context: "India's largest digital payments and fintech platform, one of the country's defining consumer tech stories.",
      },
      {
        company: 'Solv',
        context: 'B2B commerce marketplace for MSMEs, backed by Standard Chartered Bank.',
      },
      {
        company: 'Bzinga',
        context: 'Mobile gaming and digital entertainment platform.',
      },
    ],
  },
  {
    slug: 'amar-daing',
    name: 'Amar Daing',
    role: 'Product, CX & GTM',
    shortDesc: 'Entrepreneur | ex-Google x Tata, ex-Oyo, ex-Grofers',
    image:
      'https://cdn.prod.website-files.com/68e4de0fbf5c464cee858fc3/68e50d8f17573e0fcd4ec3c1_1663569415671.jpeg',
    linkedin: 'https://www.linkedin.com/in/amar-daing/',
    section: 'leadership',
    tagline: 'Product and GTM operator forged across hyper-growth internet companies.',
    bio: [
      'Amar has built and scaled products at the intersection of consumer experience and large-scale operations, across companies that redefined what hyper-growth looks like in India. His background gives him rare fluency in both the product side (what to build and why) and the GTM side (how to take it to market at speed).',
      'At Google x Tata, he was part of digital transformation initiatives at a national scale. At OYO, he operated inside one of India\'s most ambitious hospitality-tech scale stories, navigating product, operations, and customer experience at high velocity. At Grofers (now Blinkit), he worked in the fast-moving world of quick commerce and last-mile consumer delivery.',
      'At Maxinor, Amar leads Product, Customer Experience, and Go-to-Market, helping founders build products their customers actually want and GTM engines that convert traction into durable revenue.',
    ],
    expertise: [
      'Product strategy',
      'Go-to-market',
      'Customer experience',
      'Marketplace operations',
      'Growth design',
      'Consumer internet',
    ],
    career: [
      {
        company: 'Google x Tata',
        context: 'Digital India initiative: a partnership between Google and Tata Trusts to drive internet adoption.',
      },
      {
        company: 'OYO',
        context: "India's largest hospitality-tech company, scaled to millions of rooms globally.",
      },
      {
        company: 'Grofers (Blinkit)',
        context: 'Pioneering quick commerce grocery platform, now one of India\'s leading instant delivery services.',
      },
    ],
  },
  {
    slug: 'parool-duggal',
    name: 'Parool Duggal',
    role: 'People & Org Dev',
    shortDesc: 'Entrepreneur | ex-Bijnis, ex-EcomXpress, ex-AuthBridge',
    image:
      'https://cdn.prod.website-files.com/68e4de0fbf5c464cee858fc3/68e50d8fb58f0e244a2a4d31_1635223380712.jpeg',
    linkedin: 'https://www.linkedin.com/in/parool-duggal-1b651713/',
    section: 'leadership',
    tagline: 'People and culture operator who has built high-performance teams inside fast-scaling companies.',
    bio: [
      'Parool specialises in the human side of scaling, building the people systems, talent acquisition engines, and cultural infrastructure that let companies grow without breaking. Her experience spans B2B marketplaces, logistics, and talent verification, sectors where operational rigour and people density are both critical.',
      'At AuthBridge, India\'s leading background verification and talent intelligence company, she worked at the intersection of HR technology and talent onboarding. At EcomXpress, she navigated people operations inside a high-growth logistics company operating at national scale. At Bijnis, a B2B fashion and apparel marketplace, she built people functions inside a venture-backed startup environment.',
      'At Maxinor, Parool leads People and Org Development, helping founders build the hiring systems, culture foundations, and org structures that scale with the business rather than behind it.',
    ],
    expertise: [
      'People operations',
      'Talent acquisition',
      'Org design',
      'Culture building',
      'HR systems',
      'Leadership development',
    ],
    career: [
      {
        company: 'AuthBridge',
        context: "India's leading background verification and talent intelligence platform.",
      },
      {
        company: 'EcomXpress',
        context: 'High-growth logistics and last-mile delivery company operating nationally.',
      },
      {
        company: 'Bijnis',
        context: 'B2B marketplace connecting manufacturers and retailers in fashion and apparel.',
      },
    ],
  },
  {
    slug: 'alok-kumar',
    name: 'Alok Kumar',
    role: 'AI & Tech',
    shortDesc: 'Entrepreneur | ex-Zee, ex-Oracle, ex-StanChart, ex-Fidelity',
    image:
      'https://cdn.prod.website-files.com/68e4de0fbf5c464cee858fc3/69b29541adceb2f4cf8144ad_79c886e0-fd1f-49a4-bfed-f481d5bb1f38.jpg',
    linkedin: 'https://www.linkedin.com/in/alok02/',
    section: 'leadership',
    tagline: 'Technology and AI operator with a career spanning enterprise software, financial services, and media.',
    bio: [
      'Alok brings an unusually broad technology pedigree built across enterprise software, global financial services, and large-scale media, giving him the ability to architect AI and data systems that actually ship and scale in production, not just in demos.',
      'His career at Oracle gave him deep enterprise technology foundations. At Fidelity Investments and Standard Chartered Bank, he built and ran technology systems in highly regulated, high-stakes environments where reliability and scale are non-negotiable. At Zee Entertainment, one of India\'s largest media companies, he operated at the intersection of technology, content, and consumer product.',
      'At Maxinor, Alok leads AI and Technology, helping founders navigate AI product development, data architecture, and the operator layer that most teams are missing: the judgment to know which use case to build first, how to architect for scale, and how to get from lab to production with real business impact.',
    ],
    expertise: [
      'AI product development',
      'Data architecture',
      'Enterprise technology',
      'Agentic systems',
      'Digital transformation',
      'Tech due diligence',
    ],
    career: [
      {
        company: 'Oracle',
        context: 'Global enterprise software leader with deep foundations in large-scale data and application systems.',
      },
      {
        company: 'Fidelity Investments',
        context: 'One of the world\'s largest asset management firms, with technology expertise in high-stakes financial environments.',
      },
      {
        company: 'Standard Chartered Bank',
        context: 'Global banking group focused on enterprise technology and digital transformation in regulated finance.',
      },
      {
        company: 'Zee Entertainment',
        context: "One of India's largest media and entertainment companies, operating technology at consumer scale.",
      },
    ],
  },
  {
    slug: 'rajesh-ramanathan',
    name: 'Rajesh Ramanathan',
    role: 'BFSI',
    shortDesc: 'Entrepreneur | ex-Accenture, ex-Wipro, ex-Mastek',
    image:
      'https://cdn.prod.website-files.com/68e4de0fbf5c464cee858fc3/69b299cedd0e417ecb1e2533_WhatsApp%20Image%202026-03-12%20at%204.11.45%20PM.jpeg',
    linkedin: 'https://www.linkedin.com/in/rajeshramanathan/',
    section: 'leadership',
    tagline: 'BFSI domain expert with decades inside the largest IT and consulting firms serving financial services.',
    bio: [
      'Rajesh has spent his career at the intersection of financial services and enterprise technology, building deep expertise in banking, insurance, and lending systems that most technology professionals never get close to. His consulting background means he has seen transformation programs across dozens of institutions, not just one.',
      'At Accenture and Wipro, two of the world\'s largest IT services firms, he worked on large-scale transformation engagements across banking, insurance, and financial services clients. At Mastek, with a strong BFSI practice, he operated closer to product and delivery, building technology systems that financial institutions depend on.',
      'At Maxinor, Rajesh leads the BFSI domain, bringing the regulatory knowledge, risk discipline, and institutional relationships that founders need to build in lending, embedded finance, insurtech, and B2B financial workflows without getting stuck in the compliance maze.',
    ],
    expertise: [
      'Banking transformation',
      'Insurance technology',
      'Lending infrastructure',
      'Regulatory compliance',
      'Enterprise BFSI sales',
      'Risk frameworks',
    ],
    career: [
      {
        company: 'Accenture',
        context: 'Global management consulting and IT services, with a BFSI practice across banking and insurance clients.',
      },
      {
        company: 'Wipro',
        context: 'Global IT services leader focused on financial services transformation and technology delivery.',
      },
      {
        company: 'Mastek',
        context: 'Enterprise technology company with a strong BFSI practice serving UK and India markets.',
      },
    ],
  },
  {
    slug: 'priyabrata-padhi',
    name: 'Priyabrata Padhi',
    role: 'Consumer Marketing',
    shortDesc: 'Entrepreneur | ex-United Breweries, ex-ITC, ex-Britannia',
    image:
      'https://cdn.prod.website-files.com/68e4de0fbf5c464cee858fc3/69c11ffc5c1c2e2f2a9cadaa_Gemini_Generated_Image_m5qmrom5qmrom5qm.avif',
    linkedin: 'https://www.linkedin.com/in/priyabratapadhi/',
    section: 'leadership',
    tagline: 'Consumer brand and marketing operator shaped by India\'s most iconic FMCG companies.',
    bio: [
      "Priyabrata brings the kind of consumer marketing depth that comes only from building and managing brands inside India's largest FMCG companies. Distribution scale, brand equity, and consumer insight are built over decades, not sprints. His experience spans beverages, packaged foods, and branded consumer goods across national distribution networks.",
      'At Britannia Industries, one of India\'s most iconic packaged foods companies, he worked on brands that are part of everyday Indian life. At ITC, one of India\'s most diversified and powerful FMCG conglomerates, he built marketing capabilities across one of the country\'s most sophisticated brand portfolios. At United Breweries, he navigated the competitive and heavily regulated beverages sector.',
      'At Maxinor, Priyabrata leads Consumer Marketing, helping D2C and consumer brand founders build the brand identity, distribution playbooks, and marketing engines that can actually scale beyond the initial traction phase.',
    ],
    expertise: [
      'Brand management',
      'Consumer marketing',
      'FMCG distribution',
      'D2C strategy',
      'Retail expansion',
      'Marketing operations',
    ],
    career: [
      {
        company: 'ITC',
        context: "One of India's largest and most diversified FMCG conglomerates: a masterclass in brand building at national scale.",
      },
      {
        company: 'Britannia Industries',
        context: "One of India's most iconic packaged foods companies, with brands consumed by millions daily.",
      },
      {
        company: 'United Breweries',
        context: 'Beverages sector, marketing in a competitive and regulated consumer category.',
      },
    ],
  },
  {
    slug: 'dr-rachit-negi',
    name: 'Dr Rachit Negi',
    role: 'Global Health & Government Partnerships',
    shortDesc: 'Entrepreneur | ex-Operation Smile, ex-World Bank, ex-PATH',
    image:
      'https://cdn.prod.website-files.com/68e4de0fbf5c464cee858fc3/69f302142cd2dca8aba0e22a_WhatsApp%20Image%202026-04-30%20at%2012.35.34%20PM.jpeg',
    linkedin: 'https://www.linkedin.com/in/rachitnegi/',
    section: 'leadership',
    tagline: 'Global health operator with institutional experience across the World Bank, PATH, and Operation Smile.',
    bio: [
      'Rachit brings a rare combination of clinical knowledge, institutional credibility, and real-world operator experience built across the most respected organisations in global health and international development. His career has taken him from grassroots surgical missions to World Bank policy programs, giving him a full-stack view of how healthcare systems actually function at scale.',
      'At the World Bank, one of the world\'s most influential development finance institutions, he worked on health system strengthening and policy frameworks across multiple markets. At PATH, a global health nonprofit operating in over 70 countries, he was involved in programs spanning disease prevention, vaccine delivery, and health technology. At Operation Smile, the international medical nonprofit, he worked on surgical access and clinical programme delivery in underserved communities.',
      'At Maxinor, Rachit leads Healthcare and Global Health, helping HealthTech founders navigate the clinical workflow complexity, hospital procurement cycles, and government partnership dynamics that make healthcare a uniquely difficult sector to scale in.',
    ],
    expertise: [
      'Global health policy',
      'Government partnerships',
      'Healthcare strategy',
      'Clinical programme design',
      'International development',
      'Health system strengthening',
    ],
    career: [
      {
        company: 'World Bank',
        context: "One of the world's largest development finance institutions, focused on health system policy and investment across emerging markets.",
      },
      {
        company: 'PATH',
        context: 'Global health nonprofit operating in 70+ countries, working on disease prevention, vaccines, and health technology.',
      },
      {
        company: 'Operation Smile',
        context: 'International medical nonprofit focused on surgical access and clinical programme delivery in underserved communities.',
      },
    ],
  },
  {
    slug: 'saniya-fathima',
    name: 'Saniya Fathima',
    role: "Research Associate, Founder's Office",
    shortDesc: 'Postgrad in Biotechnology',
    image:
      'https://cdn.prod.website-files.com/68e4de0fbf5c464cee858fc3/69b295fc064e36e1c0266a56_WhatsApp%20Image%202026-03-12%20at%203.59.29%20PM.jpeg',
    linkedin: 'https://www.linkedin.com/in/saniya-f-369a98213/',
    section: 'program',
    tagline: "Research and analytical rigour at the core of the Founder's Office.",
    bio: [
      "Saniya works at the nerve centre of Maxinor's Founder's Office. Research quality, analytical depth, and cross-domain synthesis directly shape the operator team's ability to move fast and advise well. Her postgraduate background in Biotechnology gives her the scientific rigour to go beyond surface-level research.",
      "She supports the leadership team on market research, venture assessment, and knowledge synthesis across Maxinor's six domains, from HealthTech to AI to Consumer. In a firm built on operator depth, Saniya provides the research infrastructure that keeps the team's thinking sharp and well-evidenced.",
    ],
    expertise: [
      'Research & synthesis',
      'Biotechnology',
      'Market analysis',
      'Venture research',
      'Scientific thinking',
    ],
    career: [
      {
        company: 'Maxinor',
        context: "Research Associate in the Founder's Office, providing cross-domain research and analytical support for the operator team.",
      },
    ],
  },
  {
    slug: 'aman-sharma',
    name: 'Aman Sharma',
    role: 'Product Growth, GTM & AI',
    shortDesc: 'Operator across product growth, go-to-market, and AI execution',
    image:
      'https://cdn.prod.website-files.com/68e4de0fbf5c464cee858fc3/69c123c327dd93f3976c61ef_Gemini_Generated_Image_mjcmjxmjcmjxmjcm.avif',
    imagePosition: 'top',
    linkedin: 'https://www.linkedin.com/in/aman-sharma-77243b2a0/',
    section: 'program',
    tagline: 'Operator at the intersection of product growth, go-to-market, and applied AI.',
    bio: [
      'Aman operates at the intersection of product growth, GTM strategy, and AI execution, a combination that reflects where the most valuable startup work is happening in 2026. He works with Maxinor founders on the practical challenge of building products that grow and go-to-market motions that convert.',
      'His focus on applied AI means he brings not just strategy but execution capability. He understands which AI tools and workflows actually move the needle in a startup context, and how to embed them into real product and commercial operations rather than treating them as experiments.',
    ],
    expertise: [
      'Product growth',
      'Go-to-market',
      'AI execution',
      'Growth loops',
      'Venture operations',
    ],
    career: [
      {
        company: 'Maxinor',
        context: 'Product Growth, GTM & AI, working with founders across growth strategy and AI-led execution.',
      },
    ],
  },
  {
    slug: 'manik-sood',
    name: 'Manik Sood',
    role: 'Legal & Compliance',
    shortDesc: 'Lawyer | Founder, Law Grammar | ex-Paytm, ex-Zee, ex-Healthkart',
    image:
      'https://cdn.prod.website-files.com/68e4de0fbf5c464cee858fc3/6a142ce51a9da04ec8dc7a9a_manik.avif',
    linkedin: 'https://www.linkedin.com/in/manik-sood-64402313/',
    section: 'leadership',
    tagline: 'Founder of Law Grammar. Two decades of cross-industry legal expertise spanning FinTech, Real Estate, E-commerce, and Media.',
    bio: [
      'Manik brings over two decades of legal experience spanning Real Estate, E-commerce, Fintech, and Media and Entertainment. Having worked with leading corporates such as Paytm, Zee, and Healthkart and law firms including Mills Oakley and Kochhar and Co., he brings a rare blend of in-house and private practice experience that few legal professionals in India can match.',
      'He is also the founder of Law Grammar, a law firm that works directly with startups, SMEs, and individuals on incorporation, structuring, compliance, and transactional matters. If you are looking to incorporate a company or need direct legal services, Law Grammar is the fastest route in.',
      'At Maxinor, Manik leads Legal and Compliance, helping portfolio founders build the legal infrastructure, transactional frameworks, and regulatory navigability that companies need as they scale and attract institutional capital.',
    ],
    expertise: [
      'Corporate law',
      'Venture incorporation',
      'Fintech regulation',
      'M&A transactions',
      'Venture legal frameworks',
      'Real estate law',
      'Media and entertainment law',
    ],
    career: [
      {
        company: 'Law Grammar',
        context: 'Manik\'s own law firm, offering direct legal services to startups, SMEs, and individuals — from incorporation and structuring to compliance and transactional advisory.',
      },
      {
        company: 'Paytm',
        context: "India's largest digital payments and fintech platform, navigating legal complexity at consumer and enterprise scale.",
      },
      {
        company: 'Zee Entertainment',
        context: "One of India's largest media and entertainment conglomerates, with complex IP, licensing, and regulatory exposure.",
      },
      {
        company: 'Healthkart',
        context: 'Leading health and nutrition e-commerce platform in India, operating across consumer and regulatory domains.',
      },
      {
        company: 'Kochhar & Co.',
        context: "One of India's largest and most respected full-service law firms, with practice across corporate, M&A, and regulatory matters.",
      },
      {
        company: 'Mills Oakley',
        context: 'Leading independent Australian law firm with cross-border transaction and advisory practice.',
      },
    ],
  },
  {
    slug: 'alok-lall',
    name: 'Alok Lall',
    role: 'Strategy',
    shortDesc: 'Ex-Microsoft COO India',
    image: 'https://cdn.prod.website-files.com/68e4de0fbf5c464cee858fc3/6a5933b4ed3c4224eb155040_1516285295392.jpg',
    linkedin: 'https://in.linkedin.com/in/alok-lall',
    section: 'leadership',
    tagline: 'Strategy operator with over three decades of leadership experience, most recently as COO of Microsoft India and South Asia.',
    bio: [
      'Alok brings over three decades of leadership experience across technology, marketing, and business transformation, most recently as Chief Operating Officer of Microsoft India and South Asia.',
    ],
    expertise: [
      'Strategy',
    ],
    career: [
      {
        company: 'Microsoft',
        context: 'Chief Operating Officer, Microsoft India and South Asia.',
      },
    ],
  },
  {
    slug: 'aditi-agrawal',
    name: 'Aditi Agrawal',
    role: 'Entrepreneur in Residence - Advertising',
    shortDesc: 'Founder, StickyPins & Avyu India | MBA, KJ Somaiya | IIM Bangalore',
    image:
      'https://cdn.prod.website-files.com/68e4de0fbf5c464cee858fc3/6a142ce6dd742f13761925d7_WhatsApp%20Image%202026-05-25%20at%203.23.59%20PM.avif',
    linkedin: 'https://www.linkedin.com/in/aditiagrawal2609',
    section: 'eir',
    tagline: 'Founder building in consumer and marketing, embedded inside the Maxinor operator ecosystem.',
    bio: [
      'Aditi is an Entrepreneur in Residence at Maxinor, working at the intersection of consumer brand building and marketing strategy. She is the founder of StickyPins and Avyu India, and brings the sharp practitioner lens of someone actively building businesses in the consumer space.',
      'Her academic foundation is an MBA from KJ Somaiya Institute of Management Studies and Research, Mumbai, complemented by a Leadership and Growth Programme from IIM Bangalore. This combination of management depth and institutional rigour shapes how she thinks about brand building, growth strategy, and consumer behaviour.',
      'As an EIR, Aditi is not an advisor on the sidelines. She is embedded in the Maxinor operator ecosystem while building, combining access to the operator network, shared infrastructure, and institutional knowledge with the urgency and ownership that only comes from being a founder actively building.',
    ],
    expertise: [
      'Brand building',
      'Consumer marketing',
      'D2C strategy',
      'Marketing operations',
      'Founder strategy',
    ],
    career: [
      {
        company: 'StickyPins',
        context: 'Consumer brand founded by Aditi, building in the D2C and branded merchandise space.',
      },
      {
        company: 'Avyu India',
        context: 'Venture founded and led by Aditi, building in the consumer and brand space.',
      },
      {
        company: 'KJ Somaiya Institute of Management Studies and Research',
        context: 'MBA from one of Mumbai\'s leading management institutes, with a strong focus on business strategy and marketing.',
      },
      {
        company: 'IIM Bangalore',
        context: "Leadership and Growth Programme at one of India's most prestigious management institutions.",
      },
    ],
  },
  {
    slug: 'puneet-kolthe',
    name: 'Puneet Kolthe',
    role: 'Entrepreneur in Residence, CX & Service Operations',
    shortDesc: '25+ years | Building, transforming, scaling CX & Service Operations | ex-Arata, ex-Karbonn, ex-Panasonic',
    image:
      'https://cdn.prod.website-files.com/68e4de0fbf5c464cee858fc3/6a4c962caa5cc5d2afe7763a_Image%20Puneet%20Kolthe.avif',
    linkedin: 'https://www.linkedin.com/in/puneet-kolthe-6b28297',
    section: 'eir',
    tagline: 'CX and service operations operator with 25 years building, transforming, and scaling customer experience functions.',
    bio: [
      'Puneet is an Entrepreneur in Residence at Maxinor, bringing 25 years of experience building, transforming, and scaling customer experience and service operations. His expertise spans CX, operations, process excellence, SOP design, CRM, AI adoption and implementation, and CSAT/NPS improvement.',
      'His career spans D2C and e-commerce, telecom, DTH, consumer electronics, consumer durables, and travel and car rental, giving him a rare cross-industry view of what it takes to run service operations at scale across very different customer bases.',
      'He has built and led CX and service operations functions at brands including Arata, Heads Up For Tails, Karbonn, Panasonic, Go Bazaar, Hutch, Dish TV, Sun TV, Carrier, Voltas, Hertz, and EasyCabs. At Maxinor, Puneet works with founders to build the customer experience and service operations infrastructure that scales without breaking.',
    ],
    expertise: [
      'CX strategy',
      'Service operations',
      'Process excellence',
      'SOP design',
      'CRM',
      'AI adoption & implementation',
      'CSAT/NPS improvement',
    ],
    career: [
      { company: 'Arata', context: 'D2C personal care and grooming brand.' },
      { company: 'Heads Up For Tails', context: "One of India's leading pet care and lifestyle brands." },
      { company: 'Karbonn', context: 'Indian consumer electronics and mobile handset brand.' },
      { company: 'Panasonic', context: 'Global consumer electronics and durables major.' },
      { company: 'Go Bazaar', context: "Reliance Retail's e-commerce and consumer goods venture." },
      { company: 'Hutch', context: 'Major Indian telecom brand (now part of Vodafone Idea).' },
      { company: 'Dish TV', context: "India's leading direct-to-home (DTH) satellite television provider." },
      { company: 'Sun TV', context: 'Leading South Indian media and DTH broadcasting network.' },
      { company: 'Carrier', context: 'Global HVAC and consumer durables major.' },
      { company: 'Voltas', context: "One of India's largest air conditioning and consumer durables brands." },
      { company: 'Hertz', context: 'Global car rental and mobility brand.' },
      { company: 'EasyCabs', context: 'Indian radio taxi and car rental service.' },
    ],
  },
  {
    slug: 'pushkar-apte',
    name: 'Pushkar Apte',
    role: 'Manager, Venture Operations',
    shortDesc: 'Marketplace operations, inventory management and platform performance',
    image:
      'https://cdn.prod.website-files.com/68e4de0fbf5c464cee858fc3/69f8b3d00380c1ad6540ad69_WhatsApp%20Image%202026-05-04%20at%208.14.55%20PM.jpeg',
    imagePosition: 'top',
    linkedin: 'https://www.linkedin.com/in/aptepushkar/',
    section: 'program',
    tagline: 'Venture operations specialist keeping marketplace and platform performance running at scale.',
    bio: [
      "Pushkar manages the operational backbone of Maxinor's venture engagements: the systems, processes, and platform performance that keep complex, multi-stakeholder programmes running without breaking. His expertise in marketplace operations and inventory management means he understands the operational complexity that founders often underestimate when scaling.",
      'In a firm where operators work hands-on inside portfolio companies, Pushkar ensures the internal infrastructure of each engagement is as rigorous as the external advice being delivered.',
    ],
    expertise: [
      'Venture operations',
      'Marketplace operations',
      'Inventory management',
      'Platform performance',
      'Process design',
    ],
    career: [
      {
        company: 'Maxinor',
        context: 'Manager, Venture Operations, overseeing operational delivery across portfolio engagements.',
      },
    ],
  },
];

export function getProfileBySlug(slug: string): TeamProfile | undefined {
  return teamProfiles.find((p) => p.slug === slug);
}
