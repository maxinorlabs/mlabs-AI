# Maxinor site revamp — brief

Read this before making any change on the `site-revamp` branch.

## Goal

Shilpa (Maxinor) feels the site looks boring. Revamp the **whole site** so it feels interactive and alive, while staying **very professional**. It must never look like a template, a gimmick or a "sketchy" site. Think subtle, high-quality motion that changes how the page feels: polish, not decoration.

Audience: Indian founders, SMEs, corporates and investors deciding whether to trust Maxinor with their business. Credibility beats spectacle.

## Fixed: do not change

- **Text/copy:** keep all wording as it is. The revamp is visual and interaction only. (The blog's "Startups" → "Venture" wording is known and deliberately left alone.)
- **Colours:** from `app/globals.css` `@theme`: brand orange `#F36F21`, navy `#0B1F3B`, grey `#4A4F57`, teal `#2CC5B8`, warm-white `#F7F7F5`.
- **Fonts:** Space Grotesk (display) + Inter (body), loaded in `app/layout.tsx`.
- **Logo:** the "true north" compass mark (`/images/true-north-v1.webp`).
- **Light theme only.** The site has no dark mode; don't add one.

## Direction

Make it interactive in the existing brand. Good examples of what fits:
- Scroll-triggered reveals and staggered entrances; numbers counting up; section transitions.
- Hover states with depth (lift, subtle parallax, light/gradient following the cursor on cards).
- Smooth, purposeful micro-interactions on buttons, nav, tabs and accordions.
- A signature motif from the compass logo, kept modern and restrained (see below).

### Ideas taken from Nehar's mockup (2026-09-25, `maxinor-home_1.html`)
The mockup used an antique sea-chart style (parchment, old serif, ships). That style was **rejected**: it reads as heritage, not "AI venture studio", and doesn't match the brand. Its *ideas* can be reused in the current brand:
- **Keep:** a clean, modern compass whose needle turns to follow the cursor (hero); a "course" line from Discovery → 90-day roadmap → Partnership → Scale that draws as you scroll; sectors shown as destinations.
- **Avoid:** custom cursor replacing the system cursor; red X / ripple on every click; cursor trails; parchment/grain textures; antique fonts; heavy nautical wording ("come aboard", "set sail", "fleet").

### Professional guardrails
- Motion is subtle and short (roughly 200–600 ms, ease-out); nothing loops distractingly or blocks reading.
- Respect `prefers-reduced-motion` everywhere.
- Must work on phones (much of the traffic). Hover-only effects need a sensible touch fallback.
- Content stays real HTML (not canvas-only) so Google and screen readers can read it.
- Keep performance good: no constant animation loops off-screen, lazy-load heavy pieces, keep Lighthouse scores healthy.
- Trust signals should be prominent: operator photos/team, partner logos, real outcomes.

## Project facts

- **Stack:** Next.js 15 (App Router), React 19, TypeScript, Tailwind CSS 4, `motion` (Framer Motion) already used in ~56 files, `lucide-react` icons.
- **Hosting:** GCP Cloud Run (`mlabs-website-prod`, `mlabs-website-staging`, region `asia-south1`, project `maxoutreach`) behind Firebase Hosting. Domain `mlabs.co.in`; `www` redirects to it. Webflow is gone.
- **Branches:** `main` = production, `staging` = staging (password-protected, user `mlabs-preview`). Revamp work happens on `site-revamp`.
- **Deploys — OPEN QUESTION:** the GitHub Actions workflow `.github/workflows/deploy-gcp.yml` (main → prod, staging → staging) was deleted on `main` on 2026-10-01 by the `maxinorlabs` account. Confirm with Alok (GCP) how deploys work now before relying on pushes to deploy.
- **Pages:** ~45 live pages (home, sectors, capabilities, startups/sme/corporate/investors, team, blog, contact, faq, privacy, terms…). Some capability/sector pages are intentionally disabled via `notFound()` layouts — leave them disabled.
- **Images:** all local in `public/images` and `public/team`. Use WebP/PNG/JPG/SVG — **not AVIF** (it broke the old image service).
- **Caching:** root layout exports `revalidate = 300` so Firebase's CDN refreshes every 5 minutes. Keep it.
- **Contact form:** `app/api/contact/route.ts` posts to a Google Apps Script and treats an accepted-but-unreadable reply as success. Don't change that logic.
- **SEO:** the site is meant to be indexed (robots.txt allows crawling, sitemaps at `/sitemap/0.xml` and `/sitemap/1.xml`). Old `/home/...` and `/team/<name>` URLs redirect; keep those redirects.

## Working rules

- Never mention Claude in commits or PRs.
- Work on `site-revamp`; don't push to `main` without explicit approval.
- Show changes on staging (or locally) for Shilpa/Nehar to review before production.
- After any change, check pages on desktop **and** phone widths, and run `scripts/cutover-check.sh --site <url>` (27 checks: pages, redirects, images, robots, sitemap, analytics tags).
- Delete this file before the revamp is merged to `main`.
