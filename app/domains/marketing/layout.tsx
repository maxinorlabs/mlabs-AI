import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Solutions for Marketing and Growth Teams',
  description: 'AI-driven marketing intelligence, campaign optimisation, and content operations for brands, agencies, and growth teams looking to scale efficiently.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
