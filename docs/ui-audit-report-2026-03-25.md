# Maxinor Website UI Audit

Date: March 25, 2026

## Scope

This is a code-based UI audit of the current Next.js site in this repo. The review covers:

- Desktop / PC behavior: layouts from `md` and `lg` breakpoints upward
- Mobile behavior: layouts below `md` (`< 768px`)
- Shared UI patterns plus every page in `app/`

Reference pages reviewed:

- `/`
- `/startups`
- `/scale`
- `/build`
- `/sme`
- `/corporate`
- `/investors`
- `/team`
- `/contact`
- `/privacy`
- `/terms`

## Design System Snapshot

### Fonts

- Primary body font: `Inter`
- Display font: `Space Grotesk`
- The pairing is strong and feels modern, premium, and startup-oriented.
- Display typography is used consistently for major headings and brand moments.

### Colors

- Brand orange: `#F36F21`
- Navy: `#0B1F3B`
- Grey: `#4A4F57`
- Warm white: `#F7F7F5`
- Teal: `#2CC5B8`

Assessment:

- The orange + navy + warm-white system is cohesive and recognizable.
- Teal is defined globally but is effectively unused in the UI.
- Most pages stay within the brand palette, but a few headings use `text-black` instead of `text-navy`, which weakens consistency.

### Spacing

- Global horizontal page padding is mostly `px-6` (`24px`) across the site.
- Main section spacing is generous:
  - `py-24` (`96px`)
  - `py-32` (`128px`)
  - `pt-24` / `pt-32`
  - `pb-24` / `pb-32`
- Cards commonly use:
  - `p-8` (`32px`)
  - `p-10` (`40px`)
  - `p-12` (`48px`)

Assessment:

- Desktop spacing feels premium and spacious.
- Mobile spacing is often too generous, especially on the homepage and the long-form pages.
- Page-top spacing is not fully standardized. Some pages start at `pt-24`, some at `pt-32`, and home uses `pt-20`.

### Typography Scale

- H1 sizes are usually:
  - Mobile: `text-4xl` to `text-5xl` (`36px` to `48px`)
  - Desktop: `text-7xl` (`72px`)
- Section headings are usually:
  - Mobile: `text-3xl` (`30px`)
  - Desktop: `text-5xl` to `text-6xl` (`48px` to `60px`)
- Body copy is generally:
  - `text-base` (`16px`)
  - `text-lg` (`18px`)
  - `text-xl` (`20px`)

Assessment:

- Desktop hierarchy is strong and consistent.
- Mobile body text is sometimes oversized for dense content.
- Long legal content at `text-lg` feels heavier than needed on phones.

### Shape, Borders, and Components

- Rounded corners are a major visual language:
  - `rounded-[2rem]`
  - `rounded-3xl`
  - `rounded-full`
- Buttons are consistently pill-shaped and on-brand.
- Borders are usually subtle and clean.
- Cards rely heavily on hover states for polish.

Assessment:

- The visual language is cohesive and polished.
- The site is slightly desktop-first in its interaction design because many affordances only appear on hover.

## Cross-Site Findings

### What is working well

- Strong brand consistency through font pairing, orange accent, and warm-white backgrounds
- Good use of container widths: `max-w-7xl` for marketing pages, narrower widths for forms and legal pages
- Strong CTA consistency across the site
- Clean card design system with repeatable visual patterns
- Mobile layouts usually collapse correctly from grids to one-column stacks

### Main issues to fix

1. Mobile vertical rhythm is too loose on several pages.
   - `py-32`, `p-12`, and `mt-32` are used often without mobile-specific reduction.

2. Top spacing below the fixed navbar is inconsistent.
   - Different pages use `pt-20`, `pt-24`, or `pt-32`, so first-screen balance changes route to route.

3. A few text and color decisions are inconsistent with the rest of the brand system.
   - `text-black` appears on `/scale` and `/build`.
   - Low-contrast grey is used in places like the footer legal row.

4. Mobile readability is weaker on long-form and list-heavy pages.
   - Privacy and Terms use `text-lg` repeatedly, which is comfortable on desktop but large for long mobile reading.

5. Several sections depend on hover styling for visual feedback.
   - On mobile, those interactions flatten out, so some cards feel less alive.

6. There are content-quality issues visible in the UI layer.
   - Broken character rendering appears in the contact success state.
   - The homepage hero subtitle uses a desktop color that can reduce readability.

## Shared Component Review

### Navbar

Desktop / PC:

- Clean premium look with blur, semi-transparent background, and restrained typography
- `h-20` gives a stable fixed-header height
- Desktop nav appears only at `lg`, which is fine for large screens
- Spacing and CTA treatment are strong

Mobile:

- Mobile menu layout is clear and usable
- `text-lg` links are touch-friendly
- Tablet widths between `768px` and `1023px` still use the mobile nav, which is acceptable

Issues:

- Page content padding below the fixed header is not standardized across routes
- The mobile menu feels well designed, but the rest of the site does not always match its spacing discipline

### Footer

Desktop / PC:

- Strong brand presence with the large wordmark and oversized contact CTA
- Good separation between top and bottom footer zones

Mobile:

- Readable and functional
- Slightly tall because of `pt-20`, `mb-20`, and stacked layout

Issues:

- Bottom legal text at `text-grey/60` is lighter than ideal
- Footer height is generous on phones and can feel longer than needed after long pages

## Page-by-Page Audit

### 1. Home (`/`)

Desktop / PC:

- Visually strongest page on the site
- Large hero, alternating dark/light sections, and consistent CTA styling create a polished first impression
- Section headings and card patterns are strong and recognizable
- The hero title scaling is dramatic and premium

Mobile:

- The page stays functional, but it is very long because many sections keep `py-32`
- `What We Do` cards use `p-12`, which feels oversized on phones
- `Why Maxinor` accordion content keeps fairly large inner padding on mobile
- Engagement and CTA sections remain readable but could be tighter

Spacing and padding:

- Good desktop spacing
- Over-spaced on mobile, especially in repeated full-width sections

Typography:

- Strong hierarchy overall
- Hero H1 is excellent visually, but the responsive desktop size uses `md:text-[6.5vw]`, which can become very large on ultra-wide screens

Color:

- Brand colors are used well overall
- Important issue: the hero subtitle switches to `md:text-[#1A1F2E]` on desktop, which can become too dark against the dark hero background and reduce readability

Recommendation:

- Reduce mobile section padding on the homepage
- Fix the desktop hero subtitle color
- Cap hero desktop heading size with a max value instead of only viewport width

### 2. Startups (`/startups`)

Desktop / PC:

- Clean, simple portfolio grid
- Cards feel consistent and premium
- CTA panel at the bottom is visually strong

Mobile:

- Intro spacing is large with `pt-32` and a `text-5xl` H1
- Startup cards are quite tall for logo-only content
- Bottom CTA also uses large spacing and padding

Spacing and padding:

- Desktop spacing is strong
- Mobile feels slightly too airy for the amount of content on the page

Typography:

- H1 is bold and effective
- Supporting copy size is appropriate

Color:

- Clean use of white cards, grey borders, and orange CTA

Recommendation:

- Reduce card padding and CTA spacing on mobile
- Consider slightly smaller top spacing on smaller screens

### 3. Venture Scale (`/scale`)

Desktop / PC:

- One of the best-balanced pages on the site
- Chips, card grid, and CTA panel have good hierarchy
- Easy to scan and visually clean

Mobile:

- Adapts well because cards step down to `p-8`
- Chips remain readable and touch-friendly
- Overall mobile rhythm is better here than on the homepage

Spacing and padding:

- Good on both desktop and mobile
- Top spacing still differs from other pages

Typography:

- Strong hierarchy
- Good body-copy sizing

Color:

- Mostly consistent, but the heading uses `text-black` instead of `text-navy`

Recommendation:

- Replace `text-black` with `text-navy`
- Standardize page-top spacing with the rest of the site

### 4. Venture Build (`/build`)

Desktop / PC:

- Consistent with `/scale`, which is good
- Clear feature grouping and strong CTA

Mobile:

- Also adapts well to single-column layout
- Good balance between headings, chips, and cards

Spacing and padding:

- Strong overall
- Mobile is better controlled here than on the home page

Typography:

- Clear and readable

Color:

- Same issue as `/scale`: `text-black` in the heading weakens brand consistency

Recommendation:

- Match heading colors to the rest of the system
- Keep this page as a reference for better mobile spacing

### 5. SME (`/sme`)

Desktop / PC:

- Strong page balance and clean card grid
- Probably the most disciplined page after `/scale` and `/build`

Mobile:

- Stacks cleanly into one column
- Card padding feels appropriate
- CTA block remains readable and not too dense

Spacing and padding:

- Good across breakpoints

Typography:

- Well controlled and readable

Color:

- Consistent use of navy, white, and orange

Recommendation:

- Very few layout changes needed
- This page is a good model for how the other service pages should scale down

### 6. Corporate (`/corporate`)

Desktop / PC:

- Strong three-card section and good CTA block
- Visual hierarchy is clear

Mobile:

- Cards stack correctly and remain readable
- Page feels more compact than the homepage, which helps

Spacing and padding:

- Good overall

Typography:

- Card titles and body copy are well balanced

Color:

- Supporting paragraph uses `text-grey`, which is slightly lighter than the navy-based text used on other service pages

Recommendation:

- Consider using `text-navy/70` for a more unified text treatment

### 7. Investors (`/investors`)

Desktop / PC:

- Strong benefit-card structure
- Investment opportunities section is clear and well grouped

Mobile:

- Sections collapse well
- Benefit cards still read clearly

Spacing and padding:

- Good overall
- Less over-spaced than the homepage

Typography:

- Some description text is a bit small relative to the rest of the site, especially in benefit cards where body copy stays at `text-sm`

Color:

- Consistent

Recommendation:

- Increase some small supporting copy from `text-sm` to `text-base` for better readability

### 8. Team (`/team`)

Desktop / PC:

- Good structure with leadership, program team, and partners
- Profile imagery is consistent and visually warm

Mobile:

- The page becomes very long because of repeated stacked profile cards and large section spacing
- Profile images remain large on phones, which adds scroll length
- Bio text blocks use fixed `h-16`, which risks awkward whitespace or clipping as text wraps differently on smaller screens

Spacing and padding:

- Desktop is comfortable
- Mobile could be tightened, especially between members and sections

Typography:

- Headings are strong
- Role and description styling is clear

Color:

- Good use of orange accents for roles

Recommendation:

- Remove fixed bio heights on mobile
- Consider smaller portrait sizes or tighter vertical spacing for phones

### 9. Contact (`/contact`)

Desktop / PC:

- Clean centered layout
- Form width and field spacing are good
- Input spacing is comfortable and modern

Mobile:

- Two-column fields correctly become single column
- Form remains usable and not cramped
- Intro paragraph at `text-xl` is slightly large for a longer explanatory sentence

Spacing and padding:

- Good inside the form
- Outer page spacing is on the large side but still acceptable

Typography:

- Strong heading
- Good field-label sizing

Color:

- Clean use of white form surfaces and orange CTA

Issues:

- The success state contains a broken character instead of a clean celebratory icon

Recommendation:

- Reduce intro paragraph size slightly on mobile
- Replace the broken success-state character with a proper icon or valid emoji

### 10. Privacy Policy (`/privacy`)

Desktop / PC:

- Strong structure for a legal page
- Good content width and section separation
- Top intro card helps anchor the page

Mobile:

- Readable, but text is too large for the amount of dense content
- Repeated `text-lg` paragraphs and lists create scroll fatigue
- The page is long and heavy on phones

Spacing and padding:

- Section spacing is clean on desktop
- Mobile could use smaller text and slightly tighter vertical rhythm

Typography:

- H1 and section headings are strong
- Body copy is oversized for long-form mobile reading

Color:

- Consistent and accessible overall

Recommendation:

- Reduce mobile legal copy to `text-base`
- Keep `text-lg` for desktop only

### 11. Terms of Service (`/terms`)

Desktop / PC:

- Very similar to `/privacy`, which is good for consistency
- Strong structure and readable containers

Mobile:

- Same issue as `/privacy`: long-form legal text is too large and visually heavy on phones

Spacing and padding:

- Good desktop rhythm
- Mobile can be tighter

Typography:

- Strong section hierarchy
- Dense content would benefit from smaller mobile paragraph sizing

Color:

- Consistent

Recommendation:

- Match legal-page text sizing to a more mobile-friendly reading scale

## Priority Fix List

### High priority

1. Fix the homepage hero subtitle color on desktop.
2. Standardize page-top spacing under the fixed navbar.
3. Reduce oversized mobile section spacing on the homepage and startups/team pages.
4. Replace broken character rendering in the contact success state.

### Medium priority

1. Replace `text-black` with `text-navy` on service-page headings.
2. Reduce mobile text size on Privacy and Terms body content.
3. Remove fixed-height bio blocks on the Team page.
4. Increase readability of smaller body text on Investors.

### Low priority

1. Use the teal token intentionally or remove it from the theme.
2. Improve footer bottom-row contrast slightly.
3. Add non-hover visual affordances where cards feel too desktop-dependent.

## Overall Verdict

The site has a strong visual foundation. Brand consistency, font choice, card language, and CTA styling are all solid. On desktop / PC, the site already feels polished and premium.

The main weakness is responsive tuning, not the design direction itself. Mobile layouts are usually functional, but several pages keep desktop-scale spacing, padding, and text sizing, which makes the experience longer and heavier than necessary.

If the team focuses on mobile spacing normalization, page-top consistency, text contrast cleanup, and a few content-quality fixes, the site will feel much more refined across both desktop and mobile without needing a redesign.
