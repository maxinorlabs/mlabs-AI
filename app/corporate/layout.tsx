import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'For Corporates | Innovation, Venture Building and AI Transformation',
  description:
    'Maxinor helps corporates innovate like startups, build new ventures, and transform with AI. Operator-led execution. Not strategy decks.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
