import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'GTM | Go-To-Market Execution',
  description: 'Operator-led GTM strategy, sales motion design, and consumer brand execution for Indian startups. From zero to pipeline.',
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
