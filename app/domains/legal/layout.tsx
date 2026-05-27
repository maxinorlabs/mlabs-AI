import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Legal AI Solutions and LegalTech Capabilities',
  description: 'AI-powered document review, contract intelligence, and workflow automation for law firms, in-house legal teams, and legaltech platforms.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
