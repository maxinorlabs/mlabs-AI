import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'For Venture | Operator-Led Execution from Seed to Series A',
  description: 'Maxinor embeds operators into Venture from seed to Series A. Build faster, scale smarter, and raise with data. Not advisors. Not consultants. Operators.',
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
