import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cloud Migration and Managed Cloud Services',
  description: 'End-to-end cloud migration, cloud-native architecture design, and managed cloud services across AWS, Azure, and GCP for businesses at every stage.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
