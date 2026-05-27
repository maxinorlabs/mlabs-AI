import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Digital Transformation Consulting',
  description: 'End-to-end digital transformation programmes for enterprises and growth-stage businesses. Strategy, technology, and change management delivered together.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
