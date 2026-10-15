'use client';

import { useRef } from 'react';
import { X } from 'lucide-react';

// Opens a member's full bio in a native dialog,
// which gives focus trapping, Escape to close and a backdrop for free.
export function TeamBio({ name, role, bio }: { name: string; role: string; bio: string }) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  return (
    <>
      <button
        type="button"
        onClick={() => dialogRef.current?.showModal()}
        className="text-sm font-medium text-brand underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
      >
        Read full bio
      </button>

      <dialog
        ref={dialogRef}
        aria-label={`${name}, ${role}`}
        // Clicking the backdrop (the dialog element itself, outside its content) closes it.
        onClick={(event) => {
          if (event.target === event.currentTarget) event.currentTarget.close();
        }}
        className="m-auto w-[calc(100%-32px)] max-w-lg rounded-2xl border border-navy/10 bg-warm-white p-0 text-navy shadow-2xl backdrop:bg-navy/50 backdrop:backdrop-blur-sm"
      >
        <div className="p-6 sm:p-8">
          <div className="mb-4 flex items-start justify-between gap-4">
            <div>
              <p className="mb-1 text-xs font-bold uppercase tracking-[0.16em] text-brand">{role}</p>
              <h3 className="text-2xl font-display font-medium tracking-tight">{name}</h3>
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
          <p className="text-[15px] font-light leading-relaxed text-grey">{bio}</p>
        </div>
      </dialog>
    </>
  );
}
