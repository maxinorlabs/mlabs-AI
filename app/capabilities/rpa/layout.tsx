import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Robotic Process Automation Consulting',
  description: 'Identify, design, and deploy RPA solutions that eliminate repetitive work. Workflow automation that connects your systems and frees your teams for higher-value tasks.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
