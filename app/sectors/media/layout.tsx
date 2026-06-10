import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Solutions for Media and Content Businesses',
  description: 'AI-powered content operations, audience intelligence, and monetisation systems for OTT platforms, publishers, and digital media brands across India.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
