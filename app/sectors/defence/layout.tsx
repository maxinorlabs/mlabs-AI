import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Defence Tech | iDEX, DRDO and MoD Procurement Strategy',
  description: 'Operator-led support for defence tech startups navigating iDEX, DRDO partnerships, MoD procurement, and dual-use technology commercialisation in India.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
