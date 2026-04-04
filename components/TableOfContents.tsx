'use client';

import { useState, useEffect } from 'react';
import type { TocItem } from '@/lib/blog';

export function TableOfContents({ items }: { items: TocItem[] }) {
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        }
      },
      { rootMargin: '0px 0px -70% 0px', threshold: 0 },
    );

    items.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [items]);

  if (items.length === 0) return null;

  return (
    <aside className="hidden xl:block w-56 shrink-0 self-start sticky top-28">
      <div className="max-h-[calc(100vh-8rem)] overflow-y-auto">
        <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-navy/40">
          On this page
        </p>
        <nav className="flex flex-col gap-1">
          {items.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={() => setActiveId(item.id)}
              className={`
                text-sm leading-snug transition-colors duration-150
                ${item.level === 3 ? 'pl-3' : ''}
                ${activeId === item.id
                  ? 'font-medium text-brand'
                  : 'text-navy/50 hover:text-navy'
                }
              `}
            >
              {item.text}
            </a>
          ))}
        </nav>
      </div>
    </aside>
  );
}
