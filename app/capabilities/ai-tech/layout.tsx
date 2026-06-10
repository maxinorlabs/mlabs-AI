import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'AI and Tech | AI Strategy to Working System',
  description: 'AI strategy, product build, agentic automation, and tech architecture for Indian startups. No pilots that never ship.',
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
