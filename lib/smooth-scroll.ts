import type Lenis from 'lenis';

// The page's smooth-scroll instance, when there is one (desktop pointers without reduced motion), so any
// component can scroll to a place through it and stay in step with its easing.
let instance: Lenis | null = null;

export function setSmoothScroll(lenis: Lenis | null) {
  instance = lenis;
}

// The fixed header's height, so a scrolled-to section starts just below it.
const HEADER_OFFSET = 64;

// Scrolls to an element, smoothly through Lenis when it is running, otherwise natively.
export function scrollToElement(el: HTMLElement) {
  if (instance) {
    instance.scrollTo(el, { offset: -HEADER_OFFSET });
    return;
  }
  const top = el.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET;
  window.scrollTo({ top, behavior: 'smooth' });
}
