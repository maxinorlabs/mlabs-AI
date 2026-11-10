// The T-shape tiles' flip books: four short steps per capability, shortened from its deliverables in
// lib/capabilities.ts. The last step is the outcome. Keep the wording to those deliverables, and never add figures.

import {
  Blocks,
  BookOpen,
  BookText,
  Bot,
  Boxes,
  ChartLine,
  Compass,
  Crosshair,
  Factory,
  FileSearch,
  FileText,
  FolderLock,
  Handshake,
  HeartHandshake,
  Layers,
  Map as MapIcon,
  Megaphone,
  Merge,
  MessagesSquare,
  PackageCheck,
  PenTool,
  Radar,
  Rocket,
  Scale,
  Search,
  ShieldCheck,
  SlidersHorizontal,
  Tag,
  Truck,
  Warehouse,
  type LucideIcon,
} from 'lucide-react';
import { cn } from '@/lib/utils';

export type Card = { name: string; icon: LucideIcon | 'Aa' };

export const STEPS: Record<string, Card[]> = {
  '/capabilities/ai-tech': [
    { name: 'Architecture', icon: Blocks },
    { name: 'Agentic AI', icon: Bot },
    { name: 'Fine-tuning', icon: SlidersHorizontal },
    { name: 'Deployment', icon: Rocket },
  ],
  '/capabilities/product-research': [
    { name: 'Research', icon: Search },
    { name: 'Strategy', icon: Compass },
    { name: 'UX/UI design', icon: PenTool },
    { name: 'Shipped', icon: PackageCheck },
  ],
  '/capabilities/brand-marketing': [
    { name: 'Positioning', icon: Crosshair },
    { name: 'Identity', icon: 'Aa' },
    { name: 'Content', icon: Megaphone },
    { name: 'Launch', icon: Rocket },
  ],
  '/capabilities/growth-revenue': [
    { name: 'GTM', icon: MapIcon },
    { name: 'Playbook', icon: BookOpen },
    { name: 'Partnerships', icon: Handshake },
    { name: 'Pricing', icon: Tag },
  ],
  '/capabilities/operations': [
    { name: 'Supply chain', icon: Factory },
    { name: 'Warehousing', icon: Warehouse },
    { name: 'Logistics', icon: Truck },
    { name: 'Fulfilment', icon: Boxes },
  ],
  '/capabilities/finance-accounting': [
    { name: 'Modelling', icon: ChartLine },
    { name: 'Bookkeeping', icon: BookText },
    { name: 'Data room', icon: FolderLock },
    { name: 'Compliance', icon: ShieldCheck },
  ],
  '/capabilities/venture-capital': [
    { name: 'Sourcing', icon: Radar },
    { name: 'Diligence', icon: FileSearch },
    { name: 'Structuring', icon: Layers },
    { name: 'Portfolio', icon: HeartHandshake },
  ],
  '/capabilities/mergers-acquisitions': [
    { name: 'Advisory', icon: MessagesSquare },
    { name: 'Valuation', icon: Scale },
    { name: 'Term sheet', icon: FileText },
    { name: 'Integration', icon: Merge },
  ],
};

// Card colours by step. Small text on orange is navy, because white on orange is too faint.
export const FILLS = ['border border-navy/[0.08] bg-white text-navy', 'bg-navy text-warm-white', 'bg-grey text-warm-white', 'bg-brand text-navy'];

export const smooth = (k: number) => k * k * (3 - 2 * k);

export function Glyph({ card, size }: { card: Card; size: 'lg' | 'md' | 'sm' }) {
  if (card.icon === 'Aa') {
    return <span className={cn('font-display font-medium leading-none', size === 'lg' ? 'text-3xl' : size === 'md' ? 'text-2xl' : 'text-sm')}>Aa</span>;
  }
  const Icon = card.icon;
  return <Icon aria-hidden="true" strokeWidth={1.75} className={size === 'lg' ? 'size-8' : size === 'md' ? 'size-6' : 'size-4'} />;
}
