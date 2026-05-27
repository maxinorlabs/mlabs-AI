import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Revenue Operations and GTM Strategy',
  description: 'Revenue operations design, GTM strategy, and sales process engineering. Build repeatable revenue growth with operator-led execution and accountability.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
