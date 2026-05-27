import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Artificial Intelligence Solutions and Implementation',
  description: 'Custom AI solutions including large language models, intelligent agents, computer vision, and NLP. Built for production environments, not proof-of-concept demos.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
