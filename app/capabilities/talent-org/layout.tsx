import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Talent, Culture and Organisational Design',
  description: 'Build high-performance teams with operator-led talent strategy, RPO services, and organisational design. Hire, structure, and scale the right way from day one.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
