export const ENGAGEMENTS = [
  {
    id: 'discovery', name: 'Discovery', choice: 'I need clarity first', duration: '30 days',
    model: 'Fixed scope. Fixed cost.',
    description: "A focused 30-day sprint to diagnose what's blocking you and build an execution roadmap.",
    why: 'Start here when you need clarity before committing capital.',
    bullets: ['Root cause diagnosis', 'Capability gap mapping', '90-day execution roadmap', 'Operator assignment'],
    bestFor: 'Founders who need clarity before committing capital.', cta: 'Start Your Discovery',
    insight: { label: 'Choosing the right venture support', href: '/blog/venture-studio-vs-accelerator-vs-incubator-india' },
  },
  {
    id: 'partnership', name: 'Partnership', choice: "I'm ready for operators", duration: '1–3 years',
    model: 'Embedded co-ownership',
    description: 'An operator joins your team, embedded, accountable, and aligned on outcomes.',
    why: 'Start here when you are ready for full or fractional operator execution.',
    bullets: ['Co-aligned Functional Execution', 'Integrated P&L ownership', 'Full operator bench access', 'Build & Scale capability you own'],
    bestFor: 'Ventures ready for full or fractional operator execution, not just advice.', cta: 'Explore Partnership',
    insight: { label: 'An operator’s perspective on advice and execution', href: '/blog/advice-problem-vs-execution-problem-startup' },
  },
  {
    id: 'ai-capability-centre', name: 'AI Capability Centre', choice: 'I need an AI function', duration: 'On requirement',
    model: 'Operator-built, ready to deploy.',
    description: 'AI capabilities - without building it yourself. We design, staff, and run it end-to-end.',
    why: 'Start here when you need to develop a structured AI function.',
    bullets: ['AI Product & Engineering capability', 'Agentic automation & Workflow design', 'Data infrastructure & AI operations', 'Systems & Intelligence'],
    bestFor: 'Startups, SMEs, Corporates - from AI-fitment to a structured AI function.', cta: 'Explore the Capability Centre',
    insight: { label: 'How shared AI capability works', href: '/blog/shared-ai-capability-Venture-pool-technology' },
  },
] as const;

export type EngagementId = (typeof ENGAGEMENTS)[number]['id'];

export function getEngagement(value?: string | null) {
  return ENGAGEMENTS.find((engagement) => engagement.id === value);
}
