import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Venture Invest | Operator-Validated Deal Flow',
  description: 'Maxinor deploys capital and structures transactions with an operator already inside the business. Venture Capital and M&A, backed by evidence, not just conviction.',
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
