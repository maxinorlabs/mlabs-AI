import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'For SMEs | Venture-Grade Execution for Indian Businesses',
  description: 'Maxinor brings operator-led growth, AI transformation, and talent solutions to Indian SMEs. Compete with startups without losing what makes you great.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
