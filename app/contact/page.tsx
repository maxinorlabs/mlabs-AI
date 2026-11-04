import { ContactExperience } from '@/components/contact/ContactExperience';
import { getEngagement } from '@/lib/engagements';
import { sectors } from '@/lib/sectors';

export default async function ContactPage({ searchParams }: { searchParams: Promise<{ engagement?: string; sector?: string }> }) {
  const params = await searchParams;
  const interest = getEngagement(params.engagement)?.name ?? sectors.find((sector) => sector.id === params.sector)?.name;
  return <ContactExperience interest={interest} />;
}
