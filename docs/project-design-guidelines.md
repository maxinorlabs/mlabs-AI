# Maxinor Project Design Guidelines

This document summarizes the current visual text system used across the project based on the live source code.

## 1. Font System

### Primary body font
- Font: `Inter`
- Token/class: `font-sans`
- Defined in: `app/layout.tsx`
- Typical usage: body copy, paragraphs, nav items, labels, buttons, form fields

### Display font
- Font: `Space Grotesk`
- Token/class: `font-display`
- Defined in: `app/layout.tsx`
- Typical usage: `h1`, `h2`, `h3`, logo wordmark, section headings

## 2. Core Color Tokens

Defined in `app/globals.css`:

| Token | Hex | Common usage |
| --- | --- | --- |
| `brand` | `#F36F21` | Accent text, CTA buttons, highlights |
| `navy` | `#0B1F3B` | Primary text, dark sections |
| `grey` | `#4A4F57` | Secondary text, borders, muted content |
| `teal` | `#2CC5B8` | Available token, limited visible usage |
| `warm-white` | `#F7F7F5` | Page background, light text on dark sections |

Common text color patterns:

- Primary heading/body on light backgrounds: `text-navy`
- Secondary body on light backgrounds: `text-navy/70` or `text-grey`
- Primary heading/body on dark backgrounds: `text-warm-white`
- Secondary body on dark backgrounds: `text-warm-white/80`
- Accent/highlight text: `text-brand`

## 3. Type Scale Reference

The project mostly uses Tailwind's default text scale plus two custom hero sizes.

| Class | Approx size |
| --- | --- |
| `text-xs` | 12px |
| `text-sm` | 14px |
| `text-base` | 16px |
| `text-lg` | 18px |
| `text-xl` | 20px |
| `text-2xl` | 24px |
| `text-3xl` | 30px |
| `text-4xl` | 36px |
| `text-5xl` | 48px |
| `text-6xl` | 60px |
| `text-7xl` | 72px |
| `text-[40px]` | 40px |
| `text-[84px]` | 84px |

## 4. Heading Guidelines

### H1: Homepage hero
- Font: `Space Grotesk`
- Class pattern: `text-[40px] sm:text-5xl md:text-7xl lg:text-[84px]`
- Weight: `font-medium`
- Tracking: `tracking-tight`
- Color: `text-warm-white` with `text-brand` gradient accent
- Line height: `leading-[1.05]`
- Usage: main homepage hero only

### H1: Interior pages
- Font: `Space Grotesk`
- Class pattern: `text-4xl sm:text-5xl md:text-7xl`
- Weight: `font-medium`
- Tracking: `tracking-tight`
- Color: usually `text-navy` with `text-brand` accent words
- Usage: contact, team, scale, build, SME, corporate, investors

### H2: Standard section heading
- Font: `Space Grotesk`
- Class pattern: `text-3xl md:text-5xl`
- Weight: `font-medium`
- Tracking: `tracking-tight`
- Color: `text-navy` on light sections, `text-warm-white` on dark sections
- Usage: most homepage and landing page sections

### H2: CTA heading
- Font: `Space Grotesk`
- Class pattern: `text-4xl md:text-6xl`
- Weight: `font-medium`
- Tracking: `tracking-tight`
- Color: `text-warm-white` with `text-brand` accent
- Usage: major call-to-action bands

### H2: Compact section heading
- Font: `Space Grotesk`
- Class pattern: `text-2xl md:text-3xl`
- Weight: `font-medium`
- Tracking: `tracking-tight`
- Color: `text-navy`
- Usage: team page subsections, smaller content groups

### H3: Feature and card headings
- Font: `Space Grotesk`
- Common class patterns:
  - `text-2xl md:text-3xl`
  - `text-xl md:text-2xl`
- Weight: `font-medium`
- Color: usually `text-navy` or `text-warm-white`
- Usage: cards, value props, program blocks, feature sections

## 5. Subtitle and Body Guidelines

### Hero subtitle
- Font: `Inter`
- Class pattern: `text-lg sm:text-xl md:text-2xl lg:text-3xl`
- Weight: `font-semibold`
- Color: `text-warm-white`
- Line height: `leading-relaxed`
- Usage: homepage hero supporting statement

### Standard intro paragraph
- Font: `Inter`
- Class pattern: `text-base md:text-xl`
- Weight: `font-light`
- Color: `text-navy/70`
- Line height: `leading-relaxed`
- Usage: intro text directly below interior page H1s

### Standard section paragraph
- Font: `Inter`
- Class pattern: `text-base md:text-xl`
- Weight: `font-light`
- Color: `text-navy/70`, `text-grey`, or `text-warm-white/80`
- Line height: `leading-relaxed`
- Usage: section intros and longer supporting content

### Card/body copy
- Font: `Inter`
- Common class patterns:
  - `text-base md:text-lg`
  - `text-base`
- Weight: `font-light`
- Color: `text-navy/70`, `text-grey`, or `text-warm-white/80`
- Line height: `leading-relaxed`

## 6. Small Text and Utility Text

### Navigation
- Desktop nav: `text-sm font-medium tracking-wide`
- Mobile nav: `text-lg font-medium tracking-wide`
- Color: `text-grey`, active `text-brand`, hover `text-navy`

### Form labels
- Class pattern: `text-sm font-medium text-navy`

### Eyebrow / category labels
- Class pattern: `text-xs md:text-sm font-bold uppercase tracking-[0.18em]`
- Color: `text-brand`

### Legal/supporting content
- Common class pattern: `text-lg text-navy/80 leading-relaxed`
- Used heavily in privacy and terms pages

## 7. Button Typography

### Primary CTA button
- Font: `Inter`
- Class pattern: `text-base sm:text-lg font-semibold tracking-wide`
- Color: `text-warm-white`
- Background: `bg-brand`
- Shape: rounded full

### Secondary CTA button
- Font: `Inter`
- Class pattern: `text-base sm:text-lg font-semibold`
- Color: `text-navy`
- Background: light/white with border

## 8. General Typography Rules Observed

- Display typography uses `Space Grotesk` almost consistently.
- Supporting copy uses `Inter`.
- Large headings usually use `font-medium`, not `font-bold`.
- Most paragraph copy uses `font-light`.
- Heading tracking is usually `tracking-tight`.
- Body copy generally relies on `leading-relaxed`.
- Orange (`brand`) is used for emphasis, not for long-form paragraphs.
- `navy` is the main text color on light backgrounds.
- White text is reserved for dark hero and CTA sections.

## 9. Recommended Reusable Style Tokens

These are the clearest recurring text styles in the codebase and are good candidates for standardization:

| Style name | Recommended class pattern |
| --- | --- |
| Page H1 | `text-4xl sm:text-5xl md:text-7xl font-display font-medium tracking-tight text-navy` |
| Hero H1 | `text-[40px] sm:text-5xl md:text-7xl lg:text-[84px] font-display font-medium tracking-tight leading-[1.05] text-warm-white` |
| Section H2 | `text-3xl md:text-5xl font-display font-medium tracking-tight` |
| Small H2 | `text-2xl md:text-3xl font-display font-medium tracking-tight` |
| Card H3 | `text-2xl md:text-3xl font-display font-medium` |
| Intro body | `text-base md:text-xl font-light leading-relaxed` |
| Body copy | `text-base md:text-lg font-light leading-relaxed` |
| Label | `text-sm font-medium text-navy` |
| Eyebrow | `text-xs md:text-sm font-bold uppercase tracking-[0.18em] text-brand` |

## 10. Source Files Reviewed

- `app/layout.tsx`
- `app/globals.css`
- `app/page.tsx`
- `app/contact/page.tsx`
- `app/team/page.tsx`
- `components/Navbar.tsx`
- additional page files under `app/` for repeated heading patterns
