import type { PointerEvent } from 'react';

// Moves a `.spotlight` element's soft highlight to the pointer. Writes CSS variables directly, so no re-render.
export function trackSpotlight(event: PointerEvent<HTMLElement>) {
  if (event.pointerType !== 'mouse') return;
  const el = event.currentTarget;
  const rect = el.getBoundingClientRect();
  el.style.setProperty('--spot-x', `${event.clientX - rect.left}px`);
  el.style.setProperty('--spot-y', `${event.clientY - rect.top}px`);
}
