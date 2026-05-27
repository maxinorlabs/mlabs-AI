import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'DevOps Consulting and CI/CD Implementation',
  description: 'DevOps transformation, CI/CD pipeline implementation, infrastructure as code, and site reliability engineering for engineering teams ready to move faster.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
