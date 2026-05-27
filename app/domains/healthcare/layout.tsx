import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Healthcare and MedTech AI Solutions',
  description: 'AI solutions for hospitals, healthtech startups, and diagnostics companies. Clinical decision support, patient acquisition, and operational efficiency at scale.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
