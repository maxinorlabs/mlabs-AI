import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Venture Build | AI-Native Company Creation',
  description: 'Maxinor Venture Build co-creates AI-native startups from validated white spaces. Idea to launch in 90 days with embedded operators.',
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
