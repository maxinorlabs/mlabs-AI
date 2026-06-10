import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Venture Investment | Operator-Validated Capital',
  description: 'Maxinor invests in startups after operator engagement. Milestone-linked capital from pre-seed to pre-Series A. Capital that follows conviction, not pitch decks.',
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
