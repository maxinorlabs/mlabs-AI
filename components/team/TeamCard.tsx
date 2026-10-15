'use client';

import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { BookOpen, CalendarDays, Linkedin, X, type LucideIcon } from 'lucide-react';

export type TeamMember = {
  name: string;
  role: string;
  desc: string;
  bio?: string;
  image?: string;
  imagePosition?: string;
  linkedin: string;
};

function profileLinks(member: TeamMember) {
  return [
    { label: 'LinkedIn', href: member.linkedin, icon: Linkedin, external: true },
    { label: 'Blog', href: '/blog', icon: BookOpen, external: false },
    { label: 'Book a call', href: '/contact', icon: CalendarDays, external: false },
  ] satisfies { label: string; href: string; icon: LucideIcon; external: boolean }[];
}

// A small round icon link with a tooltip; the padding gives it a 40px tap area around a 32px circle.
function IconLink({ label, href, icon: Icon, external, name }: ReturnType<typeof profileLinks>[number] & { name: string }) {
  return (
    <Link
      href={href}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      aria-label={`${label}: ${name}`}
      className="group/icon relative -m-1 rounded-full p-1 outline-none"
    >
      <span className="flex h-8 w-8 items-center justify-center rounded-full border border-navy/15 bg-warm-white text-navy/60 transition duration-200 group-hover/icon:border-brand group-hover/icon:bg-brand group-hover/icon:text-warm-white group-focus-visible/icon:border-brand group-focus-visible/icon:text-brand">
        <Icon className="h-3.5 w-3.5" aria-hidden="true" />
      </span>
      <span
        aria-hidden="true"
        className="pointer-events-none absolute bottom-full left-1/2 mb-1 -translate-x-1/2 translate-y-1 whitespace-nowrap rounded-md bg-navy px-2 py-1 text-[11px] font-medium text-warm-white opacity-0 transition duration-150 group-hover/icon:translate-y-0 group-hover/icon:opacity-100 group-focus-visible/icon:translate-y-0 group-focus-visible/icon:opacity-100"
      >
        {label}
      </span>
    </Link>
  );
}

// A team card: the whole card opens the full bio in a native dialog (focus trap, Escape to close),
// and the icon links sit above the card's click area so they work on their own.
export function TeamCard({ member, id }: { member: TeamMember; id: string }) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const links = profileLinks(member);
  const text = member.bio ?? member.desc;

  return (
    <article
      id={id}
      className="spotlight spotlight-border group relative flex w-full flex-col overflow-hidden rounded-2xl border border-navy/10 bg-warm-white shadow-[0_14px_40px_rgba(26,31,46,0.06)] transition duration-300 hover:-translate-y-1 hover:border-navy/20 hover:shadow-[0_20px_50px_rgba(26,31,46,0.10)] lg:flex-row lg:min-h-64"
    >
      <button
        type="button"
        onClick={() => dialogRef.current?.showModal()}
        aria-label={`Read ${member.name}'s full bio`}
        className="absolute inset-0 z-0 rounded-2xl focus-visible:outline-2 focus-visible:outline-offset-[-3px] focus-visible:outline-brand"
      />
      <div className="pointer-events-none relative aspect-square overflow-hidden bg-navy/5 sm:aspect-[4/3] md:aspect-[3/2] lg:aspect-auto lg:w-[42%] lg:shrink-0">
        {member.image ? (
          <Image
            src={member.image}
            alt={member.name}
            fill
            className="object-cover saturate-[0.8] transition duration-700 group-hover:scale-[1.04] group-hover:saturate-100"
            style={{ objectPosition: member.imagePosition ?? '50% 15%' }}
            referrerPolicy="no-referrer"
            sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
          />
        ) : (
          <span className="absolute inset-0 flex items-center justify-center text-5xl font-display text-grey/40">
            {member.name.charAt(0)}
          </span>
        )}
      </div>
      <div className="pointer-events-none relative p-5 lg:flex lg:min-w-0 lg:flex-1 lg:flex-col lg:justify-center">
        <p className="mb-2 text-xs font-bold uppercase tracking-[0.16em] text-brand">{member.role}</p>
        <h3 className="text-xl font-display font-medium tracking-tight text-navy">{member.name}</h3>
        <p className="mt-3 line-clamp-3 text-sm font-light leading-relaxed text-grey">{text}</p>
        <div className="pointer-events-auto relative z-10 mt-4 flex gap-1.5">
          {links.map((link) => (
            <IconLink key={link.label} {...link} name={member.name} />
          ))}
        </div>
      </div>

      <dialog
        ref={dialogRef}
        aria-label={`${member.name}, ${member.role}`}
        // Clicking the backdrop (the dialog element itself, outside its content) closes it.
        onClick={(event) => {
          if (event.target === event.currentTarget) event.currentTarget.close();
        }}
        className="m-auto w-[calc(100%-32px)] max-w-lg rounded-2xl border border-navy/10 bg-warm-white p-0 text-navy shadow-2xl backdrop:bg-navy/50 backdrop:backdrop-blur-sm"
      >
        <div className="p-6 sm:p-8">
          <div className="mb-5 flex items-start gap-4">
            {member.image && (
              <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-full bg-navy/5">
                <Image
                  src={member.image}
                  alt=""
                  fill
                  className="object-cover"
                  style={{ objectPosition: member.imagePosition ?? '50% 15%' }}
                  referrerPolicy="no-referrer"
                  sizes="64px"
                />
              </div>
            )}
            <div className="min-w-0 flex-1">
              <p className="mb-1 text-xs font-bold uppercase tracking-[0.16em] text-brand">{member.role}</p>
              <h3 className="text-2xl font-display font-medium tracking-tight">{member.name}</h3>
            </div>
            <button
              type="button"
              onClick={() => dialogRef.current?.close()}
              aria-label="Close"
              className="rounded-full p-1.5 text-navy/50 transition hover:bg-navy/5 hover:text-navy focus-visible:outline-2 focus-visible:outline-brand"
            >
              <X className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
          <p className="text-[15px] font-light leading-relaxed text-grey">{text}</p>
          <div className="mt-6 flex flex-wrap gap-2 border-t border-navy/10 pt-5">
            {links.map(({ label, href, icon: Icon, external }) => (
              <Link
                key={label}
                href={href}
                {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand ${
                  label === 'Book a call'
                    ? 'border-brand bg-brand text-warm-white hover:bg-brand/90 sm:ml-auto sm:order-last'
                    : 'border-navy/15 text-navy hover:border-navy/30 hover:bg-navy/5'
                }`}
              >
                <Icon className="h-4 w-4" aria-hidden="true" />
                {label}
              </Link>
            ))}
          </div>
        </div>
      </dialog>
    </article>
  );
}
