import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Talent, Culture & Organisational Design',
  description: 'Operator-led talent architecture, org design, and culture systems for scaling Indian startups. From founding team to Series A and beyond.',
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
