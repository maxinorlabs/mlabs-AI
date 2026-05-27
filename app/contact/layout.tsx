import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Reach out to the Maxinor team. Whether you are a startup, SME, corporate, or investor, we would love to explore how we can work together.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
