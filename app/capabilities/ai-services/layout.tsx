import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI and ML Advisory Services',
  description: 'Strategy, build, and deployment of AI and machine learning solutions. From AI roadmapping to production ML models and LLM applications built for your business.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
