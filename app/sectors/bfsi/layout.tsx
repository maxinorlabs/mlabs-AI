import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Solutions for Banking, Financial Services and Insurance',
  description: 'AI-powered solutions for banks, insurers, and fintechs. Build risk intelligence, automate compliance, and scale customer acquisition across the BFSI value chain.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
