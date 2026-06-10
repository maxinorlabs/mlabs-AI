import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Venture Scale | Operator-Led Growth for Indian Startups',
  description: 'Maxinor embeds experienced operators into your startup to execute growth, fix operations, and prepare for Series A. Not advisors. Not consultants. Operators.',
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
