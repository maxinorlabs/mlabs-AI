import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'UX Design Studio | Product and Interface Design',
  description: 'Human-centred UX research, product design, and interface design. We design products that users understand, trust, and keep coming back to.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
