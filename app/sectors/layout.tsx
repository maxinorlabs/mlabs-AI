import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Industry Sectors',
  description: 'Maxinor builds and scales AI-powered solutions across 5 sectors: media, BFSI, healthcare, education, and D2C. Select your sector.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
