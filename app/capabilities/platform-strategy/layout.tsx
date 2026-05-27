import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Platform Strategy and Product Architecture',
  description: 'Platform design, product architecture, and technology strategy for businesses building scalable digital products, marketplaces, and technology ecosystems.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
