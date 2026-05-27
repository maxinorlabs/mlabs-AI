import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'D2C and Consumer Brands AI Solutions',
  description: 'Scale your D2C brand with AI-driven growth. Revenue operations, customer retention, supply chain intelligence, and GTM execution built for consumer businesses.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
