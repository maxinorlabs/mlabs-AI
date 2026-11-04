'use client';

import { useState } from 'react';
import { HomeHero } from './HomeHero';
import { OperatorProof } from './OperatorProof';
import { HomeBento } from './HomeBento';
import { SectorStories } from './SectorStories';
import { VelocityMarquee } from './VelocityMarquee';
import { HomeEngagements } from './HomeEngagements';
import { OperatorInsights, type Insight } from './OperatorInsights';
import { HomeContact } from './HomeContact';
import { SectionRail, type RailStop } from './SectionRail';
import type { EngagementId } from '@/lib/engagements';

// The stops on the section rail, in page order. `dark` marks the navy sections.
const RAIL: RailStop[] = [
  { id: 'top', label: 'Home' },
  { id: 'track-record', label: 'Track record', dark: true },
  { id: 't-shape', label: 'The T-shape' },
  { id: 'sectors', label: 'Sectors', dark: true },
  { id: 'entry-points', label: 'Entry points' },
  { id: 'insights', label: 'Insights', dark: true },
  { id: 'get-started', label: 'Get in touch' },
];

// The operator capabilities, repeated in the scrolling tape under the T-Shape.
const MARQUEE = [
  'AI & Tech',
  'Product & Design',
  'Brand & Marketing',
  'Growth & Revenue',
  'Supply Chain & Operations',
  'Finance & Accounting',
  'Venture Capital',
  'M&A',
];

export function HomePage({ insights }: { insights: Insight[] }) {
  // The engagement a visitor picks under "Where are you today?" travels down into the enquiry form.
  const [engagement, setEngagement] = useState<EngagementId | null>(null);

  return (
    <main className="pt-16 font-sans">
      <SectionRail stops={RAIL} />
      <div id="top">
        <HomeHero />
      </div>
      <div id="track-record" className="scroll-mt-16">
        <OperatorProof />
      </div>
      <div id="t-shape" className="scroll-mt-16">
        <HomeBento />
      </div>
      {/* The sectors as photo stories that open up */}
      <div id="sectors" className="scroll-mt-16">
        <SectorStories />
      </div>
      <VelocityMarquee items={MARQUEE} />
      <HomeEngagements selected={engagement} onSelect={setEngagement} />
      <div id="insights" className="scroll-mt-16">
        <OperatorInsights insights={insights} />
      </div>
      <HomeContact engagement={engagement} />
    </main>
  );
}
