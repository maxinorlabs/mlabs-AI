import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Big Data Engineering and Analytics',
  description: 'Data pipelines, data lakes, real-time analytics, and business intelligence platforms. Turn raw data into actionable decisions at scale.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
