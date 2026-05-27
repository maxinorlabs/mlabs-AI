import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Capabilities - Operator-Led AI and Business Services',
  description: 'Four operator capabilities covering AI services, revenue and operations, GTM and marketing, and talent design. Delivered by operators who have built and scaled businesses.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
