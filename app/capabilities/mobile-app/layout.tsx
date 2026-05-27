import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mobile App Development | iOS and Android',
  description: 'Native and cross-platform mobile application development. Product design, engineering, and launch support for consumer and enterprise mobile apps.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
