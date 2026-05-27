import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Industry Domains',
  description: 'Maxinor builds and scales AI-powered solutions across 7 industries: media, BFSI, healthcare, education, D2C, marketing, and legal. Select your domain.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
