import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Software Development and Engineering Services',
  description: 'Full-stack software engineering, API development, and scalable system design. Delivered by an experienced engineering team with a product and business mindset.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
