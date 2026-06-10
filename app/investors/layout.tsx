import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'For Investors | Operator-Vetted Deal Flow and Co-Investment',
  description:
    'Access Maxinor deal flow, co-invest alongside our operator studio, and partner on portfolio support. Every deal is operator-validated before it reaches you.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
