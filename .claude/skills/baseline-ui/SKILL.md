---
name: baseline-ui
description: Maxinor's UI constraints. Use before building, changing or reviewing any UI on this site (Home sections, cards, section headers, images, animation), so typography, motion, spacing, backdrops and micro-interactions stay consistent. `/baseline-ui <file>` reviews a file against these rules.
---

# Baseline UI (Maxinor)

Enforces one consistent UI across the site and prevents AI-generated interface slop. Adapted from [`baseline-ui`](https://github.com/ibelick/ui-skills/blob/main/skills/baseline-ui/SKILL.md) by Julien Thibeaut (MIT, see `LICENSE`). Where this file and upstream differ, this file wins; the changes are listed at the end.

The client wants a site that is highly visual with rich micro-interactions, and consistent throughout. Treat both halves as requirements: add visuals and interaction freely, but only using the parts defined here.

`REVAMP_BRIEF.md` still applies. Copy, colours, fonts and the logo are fixed, and the theme is light only.

## How to use

- `/baseline-ui`
  Apply these constraints to any UI work in this conversation.

- `/baseline-ui <file>`
  Review the file against all constraints below and output:
  - violations (quote the exact line/snippet)
  - why it matters (1 short sentence)
  - a concrete fix (code-level suggestion)

## Stack

- MUST use existing theme tokens and Tailwind CSS defaults. A new custom value needs an explicit request
- MUST use `motion/react` when JavaScript animation is required
- SHOULD use `tw-animate-css` for simple CSS entrances
- MUST use `cn` from `lib/utils.ts` for class logic
- MUST use `components/motion/*` (`Reveal`, `Stagger`, `StaggerItem`, `RevealText`, `CountUp`, `Magnetic`, `NavyBackdrop`, `useScrub`) before writing new motion code

## The reference: capability tile

The capability tiles in `components/home/HomeBento.tsx` are the approved look. New cards and visuals follow them.

- Shell: `Tile` is a white card, `rounded-2xl border border-navy/[0.08] bg-white p-1.5`
- Visual well: inset `rounded-xl bg-[#EFF1F3]` with a faint dot grid, holding a mini product (see Images and visuals)
- Text: title and one line sit below the well, with `ArrowUpRight` top right
- Grouping: a small label with a brand dot above each column (`h-1.5 w-1.5 rounded-full bg-brand`, then `text-sm font-medium text-navy/55`)
- Layout: columns may hold tiles of different heights (a bento), never a uniform grid of identical cards
- Hover: the border darkens, a soft navy shadow appears, the arrow nudges and turns brand, and the pointer drives the mini product

## Typography

There are exactly two typefaces, both loaded in `app/layout.tsx`.

- MUST use Space Grotesk (`font-display`) for headings and card titles
- MUST use Inter (`font-sans`) for everything else, including labels and data
- NEVER use `font-mono` or `font-serif`. No such font is loaded, so the browser substitutes a different one per device
- MUST use only these text styles:

| Role | Classes |
|---|---|
| Section heading | `font-display text-3xl md:text-5xl font-medium leading-[1.05] tracking-tight text-balance` |
| Panel heading | `font-display text-2xl font-medium leading-tight tracking-tight` |
| Card title | `font-display text-[17px] font-medium leading-tight tracking-tight` |
| Body | `text-base font-light leading-relaxed text-pretty` |
| Secondary | `text-sm leading-snug text-grey/80 text-pretty` |
| Eyebrow | `text-[11px] font-bold uppercase tracking-[0.22em] text-brand` |
| Group label | `text-sm font-medium text-navy/55` with a brand dot |
| Data label | `text-xs sm:text-sm font-medium`, inside dense grids and tables only |
| Meta label | `text-[11px] font-medium uppercase tracking-[0.22em]` with a muted colour, for small labels inside cards and lists |

- NEVER set text smaller than `text-[11px]`
- NEVER use `tracking-*` other than `tracking-tight` on display type and the eyebrow value above
- MUST accent a heading's phrase with `text-brand`, never a gradient
- MUST use `tabular-nums` for data
- SHOULD use `truncate` or `line-clamp` for dense UI

## Headers

- The site header is `components/Navbar.tsx` only: fixed, `h-16`, with `ScrollProgress`. Never add a second bar or a sticky section header. Pages use `pt-16`, and anchored sections use `scroll-mt-16`
- MUST build every section header the same way:
  1. One eyebrow
  2. One section heading, using `RevealText` so it enters like the others
  3. Optional supporting line, at most 2 lines, on the right on desktop and below on phones
- MUST left-align headers. Centre only a closing call to action
- NEVER put an arrow, a dot or a border in the eyebrow
- If a shared `SectionHeader` component exists, use it. If not and you are touching two or more headers, extract one

## Spacing

- MUST use the shared container: `mx-auto w-full max-w-6xl` inside a section with `px-6 md:px-12`
- MUST use `py-16 md:py-20` on sections
- MUST use `mb-10` between a section header and its content
- MUST use `gap-4 lg:gap-5` between cards
- MUST use the 4px Tailwind scale. NEVER use arbitrary spacing such as `mt-[37px]`
- MUST use only these radii: `rounded-full` (pills, dots), `rounded-3xl` (feature panels), `rounded-2xl` (cards), `rounded-xl` (wells inside cards), `rounded-sm` (cells in a dense grid)
- SHOULD use `size-*` for square elements instead of `w-*` + `h-*`
- MUST use the z-index scale: `z-10` content, `z-40` rail, `z-50` navbar, `z-[60]` modals, `z-[100]` intro. Nothing else

## Backdrops

Only two surfaces exist. Sections alternate between them, and two navy sections never touch.

- Paper: `bg-warm-white text-navy`, with `border-t border-navy/10` only where two paper sections meet
- Navy: `relative overflow-clip bg-navy text-warm-white`, with `<NavyBackdrop />` as the first child and content in a `relative` wrapper
- NEVER use another section background, gradient wash, blob, texture or glow. The dot grid belongs to panels and the hero's paper
- Cards on paper are white. Cards on navy are `border-white/10 bg-white/5`
- Wells inside cards are `#EFF1F3` on paper
- Modals use `bg-navy/70 backdrop-blur-sm` with `data-lenis-prevent`. Blur belongs to modals and the navbar only

## Images and visuals

Every content block carries a visual, chosen from these three. A visual must explain the content, never just decorate it.

**Mini products**, for concepts and capabilities. This replaced abstract diagrams, after studying vibrant.design (ToDesktop, Clerk, Modal, Stripe):
- MUST show a miniature of the real work, in a tool the audience recognises (a run log, a board, a tracker, a ledger), not an abstract shape or an icon diagram
- MUST use real words, taken from that capability's `deliverables` or `description` in `lib/capabilities.ts`. NEVER invent copy or figures
- MUST use a different tool for each one, and make something visibly get done
- MUST use `Surface` for a sheet of UI: cropped by the bottom of the panel, with depth from its shadow. Keep panels filled, not one small object in empty space
- MUST use a still, dotted panel floor
- MUST use navy, brand and greys only, with one orange focal point at any moment
- MUST use `text-xs font-medium` in HTML panels and `LABEL` in SVG panels, and check the text fits at 390px
- MUST look finished at rest, showing the completed work
- MUST have one idea per panel. If a panel does two things, cut one. More effects read as noise, not richness
- MUST lock one thing exactly under the pointer, in the direction that suits the product: a dot on the curve, a parcel on the route, a ruler at the pointer's height, a needle pointing at it, a circle under it. See `Tile` and `Scrub` in `HomeBento.tsx`
- NEVER put a spring, a lag or an offset on anything that tracks the pointer. Only `live` eases, for entering and leaving
- Something driven by the tracked element, not under the pointer itself, may glide behind it on a spring with no overshoot, so it never snaps. The M&A circles follow the slider handle this way
- MUST use the one `PointerMark` for anything marking the pointer on a slider, chart or route, and the same `POINTER_INSET`, so every panel feels like one set
- MUST put each mini product on a white sheet where it shows data or UI, not directly on the dots
- SHOULD fade a tracked element in under the pointer on entry rather than letting it race there from its resting place
- NEVER add tilt, parallax, a sliding floor or lit dots to a panel. They move everything at once and make the tracking look wrong
- MUST track only inside the panel. Over the tile's words the panel rests
- MUST keep movement meaningful: progress runs the same way as its labels, and an object may only go where its idea allows. Limit it along its own line, and keep it fully visible
- NEVER let a label that travels with the pointer be cut off by the panel. Flip it to the other side near an edge
- MUST make every part of the panel answer. Run a drawing the full width of its panel rather than leaving margins that do nothing
- MUST respond continuously. Blend by distance instead of switching at a boundary: no sudden swaps of order, text or state
- MUST keep the resting drawing's main shape on screen while it is driven, as a faint track, so entering never makes it vanish
- MUST make the thing under the pointer the cause of the change. Nothing may react to the pointer without showing why
- MUST convert the pointer into the drawing's own units, allowing for how the SVG is fitted, or things sit near the pointer instead of under it
- MUST use real hit testing (`onPointerEnter` on the element) to select something, never a percentage of the panel
- Touch: scrolling the tile into view moves the pointer through it. Keyboard: focus plays it once
- At rest, every panel shows the finished work
- MUST run panels on motion values only, with no React state
- MUST check a panel part-way through, not just at both ends, by parking every tile mid-scrub
- SHOULD use `lucide-react` for icons. NEVER mix in another icon set

**Photographs**, for sectors and real-world context:
- MUST read at a glance: the setting and objects name the subject before the caption does (bank counters, ATM and rupee notes; a broadcast camera and anchor desk)
- NEVER use a generic person looking at a screen
- MUST use daylight or natural light, an Indian setting where relevant, and no legible text or logos
- MUST keep the subject in the upper two-thirds, because the caption scrim covers the rest
- MUST never present the people as Maxinor staff, clients or real events
- MUST export WebP at about q88 through `next/image`, record the source in `docs/home-redesign.md`, and check the crop in the real card, not the raw file

**Data**, for proof: real figures only, with `CountUp`. NEVER invent a number.

## Micro-interactions

Every interactive element responds to the pointer. Use the matching pattern, never a new one.

| Element | Response |
|---|---|
| Card link | Border darkens, shadow appears, arrow nudges, the pointer drives its mini product, and its group label responds |
| Primary button | Colour shift, `Magnetic` on the main call to action only |
| Text link | Underline colour moves to brand |
| Any selection (tab, figure, list row, picker, rail) | One orange marker slides from the last choice to the new one |
| Content that swaps | Crossfade with no exit to wait for, and no change in height |
| Photo card | Image scales to 105% inside its frame, the caption rises as one block and the scrim deepens behind it |
| Anything clickable | The `press` utility: scales to 98% while pressed |
| Cursor-reactive grid | Local response near the pointer, mouse only, resets on leave |

- MUST give hover states a keyboard equivalent (`whileFocus`, `focus-visible`) and a touch fallback
- MUST show visible focus: `focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand`
- MUST add an `aria-label` to icon-only buttons
- MUST make every animation show something about the content
- MUST build a selection marker as one `motion.span` with a `layoutId` and `transition={SETTLE}`, rendered only on the selected item, with `z-10` so it passes over its neighbours. Use `layoutRoot` on a fixed parent
- MUST build a content swap by stacking every version in one grid cell (`col-start-1 row-start-1`) and fading between them with `invisible opacity-0`. NEVER use `AnimatePresence mode="wait"` for content that follows the pointer
- MUST include `scale` in the transition of anything using `press`, by using `transition` rather than `transition-colors`
- NEVER put `[&>*]:transition-*` on a parent. It overrides the children's own transitions
- NEVER use a custom cursor, cursor trail, click ripple, parallax on text, or bounce

## Animation

Motion must feel like one system: same curve, same few durations. Use the tokens in `lib/motion.ts`.

- MUST use `EASE_OUT` for all easing, and `ease-out` in CSS, which is set to the same curve in `app/globals.css`. NEVER write another curve
- MUST use only these durations:

| Tier | Use | Value |
|---|---|---|
| Press | Press, focus, small state change | `duration-200` |
| Hover | Hover colour, border, shadow, arrow | `duration-300` |
| Fast | Swapping content, readouts (JS) | `DURATION.fast` |
| Base | Entrances, drawings playing, photo zoom | `DURATION.base`, `duration-500` |
| Slow | Large panels, headings, longer drawings (JS) | `DURATION.slow` |

- `CountUp` keeps its own duration, because a number needs longer to count than an element needs to appear
- MUST use `STAGGER` between siblings and `RISE` for entrance distance
- MUST use `Reveal` or `RevealText` for entrances, with `revealViewport`. NEVER write a one-off `whileInView`
- SHOULD use one spring only, for tactile moves: `SPRING` from `lib/motion.ts`
- MUST set how things settle back, not just how they play. Anything left to the library's defaults springs back unevenly
- MUST limit each section to one unprompted animation besides its entrance. Everything else answers the user
- SHOULD play a looped idea at most twice, then rest. NEVER use `repeat: Infinity` or an idle loop
- MUST animate only `transform` and `opacity`
- NEVER animate layout properties (`width`, `height`, `top`, `left`, `margin`, `padding`)
- SHOULD animate paint properties (`color`, `border-color`, `box-shadow`) only on small, local UI
- MUST write pointer-driven values through refs or motion values, never React state
- NEVER read scroll from `scroll` events. Use `useScrub` or `useScroll`
- MUST respect `prefers-reduced-motion`: no loops, no pointer motion, content fully visible at once
- NEVER animate large `blur()` or `backdrop-filter` surfaces, or large images
- NEVER apply `will-change` outside an active animation

## Components

- MUST use the project's existing components first
- MUST use native controls (`button`, `a`, `input`, `dialog` behaviour) for anything with keyboard or focus behaviour. Add a primitive library only on request
- NEVER rebuild keyboard or focus behaviour that the browser provides

## Interaction

- SHOULD use structural skeletons for loading states
- NEVER use `h-screen`. Use `h-svh` or `h-dvh`
- MUST respect `safe-area-inset` for fixed elements
- MUST show errors next to where the action happens
- NEVER block paste in `input` or `textarea` elements

## Performance

- NEVER use `useEffect` for anything that can be expressed as render logic
- MUST lazy-load heavy sections, and keep content in real HTML rather than canvas

## Design

- MUST use only the brand tokens in `app/globals.css`: brand, navy, grey, teal and warm-white, plus the `#EFF1F3` well
- MUST keep brand orange as the single accent in a view. Teal is rare and never beside orange
- NEVER use gradients, except the navy caption scrim over photos (`bg-gradient-to-t from-navy via-navy/30 to-navy/0`)
- NEVER use glow effects as primary affordances
- MUST use one card shadow: `hover:shadow-[0_22px_44px_-30px_rgba(11,31,59,0.5)]`, on hover only. Sheets inside a panel use `shadow-[0_12px_24px_-16px_rgba(11,31,59,0.35)]`
- MUST give empty states one clear next action

## Before finishing

Test interactions by watching them, not by parking them. Sweep a real mouse at full speed across each element in a clean headless browser, including its edges and the text around it, and read frames from the movement. A throttled browser or synthetic events can pass while the real thing is broken. When screenshotting a hover in Puppeteer, use `captureBeyondViewport: false`, or it resizes the page and drops the hover.

1. Compare the section with its neighbours in the browser. It must look like the same site
2. Check phone (390px) and laptop widths, and confirm no horizontal scroll
3. Check hover, keyboard focus and touch
4. Check with reduced motion on
5. Run `/baseline-ui <file>` and fix the violations

## Known drift

Measured 2026-11-04 across `app/` and `components/`. Fix these in any file you touch. Do not sweep the whole site unless asked.

- `font-mono`: 37 uses in 17 files on 2026-11-04, a third typeface. Replace with the eyebrow or meta label. The Home sections are done
- Text below 11px: `text-[10px]` 94 times, `text-[9px]` once
- Durations: 22 different JS values, and `DURATION` is used 0 times
- Easing: `[0.16, …]` 46 times and `'easeOut'` 43 times, against `EASE_OUT` 49 times
- Tracking: 13 custom letter-spacing values plus `tracking-wide` and `tracking-widest`, instead of the two allowed
- Radii: `rounded-[2rem]` 148 times and `rounded-[1.5rem]` 42 times on inner pages

## Changes from upstream

Changed for this project, and why:

- "NEVER add animation unless requested": the client asked for rich micro-interaction, so animation is allowed through the defined patterns
- "NEVER exceed 200ms for interaction feedback": kept for press and focus. Hover is 300ms, matching the approved tile and 342 existing uses
- "NEVER introduce custom easing": `EASE_OUT` is this site's shared curve
- "NEVER modify letter-spacing": two approved values exist
- "NEVER use gradients": kept, with the photo scrim as the one exception
- "Use Tailwind default shadows": replaced by the one navy shadow on the approved tile
- Primitive libraries (`Base UI`, `Radix`, `AlertDialog`): removed, because the site uses native controls and has no destructive actions
- "Fixed z-index scale": the site's actual scale is written out, including its two arbitrary values
