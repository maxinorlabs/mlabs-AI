import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'EdTech and Education AI Solutions',
  description: 'AI solutions for edtech platforms and educational institutions. Personalise learning, reduce dropout rates, and scale content operations across digital and offline formats.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
