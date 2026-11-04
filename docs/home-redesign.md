# Home redesign — local review

## Merged version (2026-11-02)

The Home page now combines the live site, the committed revamp (30538c3) and the review pass described below:

- Hero, opening curtain and compass: kept as live / committed (orange contour rings, flat compass). The 3D compass housing was not adopted.
- Track record: the review's selectable figures with career details, plus the committed scroll "ink" reveal.
- T-shape: the live / committed design (scroll-drawn spine, styled capability bar), with its sectors linking to their pages.
- Sectors: the committed navy reel of photo cards, one photograph per sector, each opening into its story (2026-11-03: chosen over the review's single-panel explorer).
- Capability marquee: kept as live.
- Entry points: the live three-card layout and "Where are you today?" picker; each card's button now carries the engagement into the enquiry form (from the review).
- Insights: the review's version.
- Closing: the live "Ready to Scale Your Vision?" design on the left, with the review's compact enquiry form on the right.
- Footer and Contact page context (`?engagement=` / `?sector=`): from the review. Contact form accents stay brand orange.
- Sector photos: the original Healthcare, Media, Education and Defence photographs; new D2C and BFSI photographs (2026-11-03, below). The review's Pexels assets listed further down are not used and were removed.
- Sectors section: the committed scroll-pinned reel (an expanding gallery and an autoplay slider were tried on 2026-11-03 and not kept).

### Sector photos added 2026-11-03

Pexels licence (https://www.pexels.com/license/): free commercial use, no attribution required, no implied endorsement. The people shown are not Maxinor staff, clients or founders.

| Local asset | Creator | Original source |
| --- | --- | --- |
| public/images/photos/d2c-founder.webp | Ivan S | https://www.pexels.com/photo/man-talking-on-cellphone-while-using-laptop-7620718/ |
| public/images/photos/bfsi-trading.webp | Tima Miroshnichenko | https://www.pexels.com/photo/man-in-white-dress-shirt-sitting-in-front-of-computer-monitor-7567593/ |

### Sector photos replaced 2026-11-04 (AI-generated)

The 2026-11-03 BFSI and Media images below showed a person thinking in front of screens, so neither sector was recognisable at a glance. They were replaced with scenes that name the sector on sight, generated the same way (Codex CLI image tool, 1024×1536, WebP q88). The same rule applies: they depict no real person and must not be captioned or presented as Maxinor staff, clients, founders or real events. `bfsi-risk.webp` and `media-studio.webp` are no longer referenced.

| File | Source | Subject |
|---|---|---|
| public/images/photos/bfsi-bank.webp | AI-generated, Codex CLI image tool | Customer signing a loan form with a bank officer in an Indian branch; teller counters, ATM, debit card, passbook and rupee notes; no legible text or logos |
| public/images/photos/media-broadcast.webp | AI-generated, Codex CLI image tool | News anchor at the desk of a live TV studio, seen past a broadcast camera with teleprompter and tally light; no legible text or logos |

### Sector photos replaced 2026-11-03 (AI-generated)

BFSI and Media now use AI-generated photographs (OpenAI image generation via the Codex CLI, 1024×1536, converted to WebP q88). They depict no real person and must not be captioned or presented as Maxinor staff, clients, founders or real events. The BFSI Pexels photo above (`bfsi-trading.webp`) and the original `media.webp` are no longer referenced.

| Local asset | Source | Prompt summary |
| --- | --- | --- |
| public/images/photos/bfsi-risk.webp | AI-generated, Codex CLI image tool | Credit-risk lead at an abstract loan-portfolio wall display, Mumbai fintech office at dusk; navy shadows, one orange lamp; no legible text or logos |
| public/images/photos/media-studio.webp | AI-generated, Codex CLI image tool | Content-operations lead at a multi-screen edit suite, recording set behind glass with an orange LED strip; no legible text or logos |

The sections below describe the review pass as it was originally built.

## Scope and design

Approved direction: retain the compass hero; remove the opening curtain, compulsory sideways sector reel, cursor tag and repeated capability marquee. Connect the T-shape to an inline sector explorer. Make engagement selection explain the starting point and carry it to an enquiry. Add one contextual stock video, attributed career details, a compact enquiry form and useful footer navigation.

Sequence: hero → operator experience → capabilities / sector explorer → engagements → insights → contact → footer. Existing disabled sector routes remain disabled. No invented case studies, quotes, results, endorsements or partner logos. No deployment is included.

Design tokens remain the existing brand: paper #F7F7F5, navy #0B1F3B, orange #F36F21, Space Grotesk / Inter. Shared content width 1152px, section spacing 64–80px, hairline rules, restrained 8–12px corners, native controls, visible focus. Retain approved hero copy and compass. The generated concepts are layout references; retain the real logo, current copyright year and actual stock assets rather than the generated stand-ins. The existing paper token takes precedence over the slightly warmer concept background.

Concept references (preview-only, generated with the built-in image tool):
- Explorer: /home/sumit/.codex/generated_images/01a19ccb-21fa-7863-904f-38e3e791c009/exec-dbdebceb-69aa-4d30-9a08-a41d71a38c80.png
- Engagement selector: /home/sumit/.codex/generated_images/01a19ccb-21fa-7863-904f-38e3e791c009/exec-cc2b22b7-311f-4748-ba0c-2ff20a75e73f.png
- Contact / footer: /home/sumit/.codex/generated_images/01a19ccb-21fa-7863-904f-38e3e791c009/exec-27a7c81e-8d5b-4e71-a2f2-8a54c9495e0e.png

Component inventory: HomePage composes the page; HomeTShape owns sector selection; SectorMedia owns optional playback; HomeEngagements owns selection/comparison controls; HomeContact reuses ContactForm and the existing submission endpoint. Shared engagement definitions provide approved descriptions, durations and deliverables. Contact context must survive navigation without replacing a visitor's own message.

## Media provenance

All newly added media is contextual stock, not a depiction of Maxinor staff, clients or projects. Downloaded 2026-11-02. Pexels licence: https://www.pexels.com/license/ (free commercial use and modification; no implied endorsement).

| Local asset | Creator | Original source | Treatment / placement |
| --- | --- | --- | --- |
| d2c-packing.mp4 / d2c-packing.webp | RDNE Stock project | https://www.pexels.com/video/a-business-person-preparing-a-package-7308090/ | Short silent compressed excerpt and poster; D2C detail only |
| financial-operations.webp | Kaboompics | https://www.pexels.com/photo/a-person-holding-payment-terminal-5239874/ | Resized WebP; financial operations context |

Existing Media and Education assets retain their original files. Their original source URLs were not recorded in the existing sector data; this register does not assert new provenance for those files.

## Verification

Browser verification uses Playwright with system Chromium because no built-in browser tool is connected. Cover desktop, mobile, keyboard operation, reduced motion, no horizontal overflow, sector selection, comparison, context propagation, form validation and mocked success/failure. Block external submissions during automated checks. A real submission must be checked separately before release; do not send an unsolicited enquiry.

Run production build, TypeScript, lint for changed files and the repository cutover script. Local lab metrics are diagnostic, not field Core Web Vitals.

Completed checks:
- Production build and type validation passed. Changed TypeScript/TSX files passed ESLint; `git diff --check` passed.
- Repository cutover checks passed: pages, old redirects, robots, both sitemaps, analytics tags and 23 optimized images.
- Browser workflows passed: six sector choices and loaded images; keyboard selection; video play/pause and offscreen pause; career details; engagement comparison; contact context through both inline enquiry and navigation; validation; intercepted failure and success responses.
- Desktop and 390 / 768 / 1024px layouts showed no horizontal overflow. Normal and reduced-motion visits produced no runtime or hydration errors.
- Automated WCAG A/AA audit returned no violations on the revised Home content and footer, including the selected-engagement form state. This is an automated check, not a claim of complete accessibility conformance.
- Final number-sizing checks passed at 320 / 390 / 768 / 1024 / 1440px. All four figures remain on one line inside their own controls without clipping.
- One cold-browser mobile lab run (390px, 4× CPU slowdown, 1.6 Mbps download, 150ms latency, analytics blocked) recorded LCP 2.012s, CLS 0, approximately 450KB transferred and no video request. INP and production field performance have not been established.
- Real email delivery was not exercised; automated contact requests were intercepted. Existing Apps Script forwarding logic is unchanged.

Local production preview: http://127.0.0.1:3100. It runs from an isolated snapshot in `/tmp/maxinor-build` because an existing development server uses the workspace's `.next` directory. No staging/main push or deployment was performed.

## Visual comparison ledger

Compared the generated section concepts with fresh desktop and mobile browser screenshots using `view_image`.

| Point | Review / resolution |
| --- | --- |
| Palette | Kept the approved #F7F7F5 paper, #0B1F3B navy and #F36F21 orange; the concept's warmer paper is intentionally not adopted. |
| Typography | Retained Space Grotesk / Inter and the site's fluid type scale. Mobile form inputs use 16px type. Desktop explorer heading fits on one line at 1440px. |
| Explorer | Preserved the Build / Scale / Invest bar and central sector spine; one selected detail panel replaces the compulsory reel. All alternatives remain readable. |
| Media | Actual licensed Pexels assets replace generated concept placeholders. Natural colour is retained. Video uses an explicit Play control instead of automatic playback. |
| Engagements | Three native radio choices, a ruled two-column detail area, explanation, deliverables, comparison and an article link. Keyboard focus moves into the enquiry on the main action. |
| Contact | Two-column desktop form, single-column mobile form and matching DOM order. Context appears only after a visitor chooses an engagement. The heading uses navy with an orange underline because orange on paper did not meet contrast requirements. |
| Proof | Historical numbers retain named attribution and link to approved biographies. Final visual review found long numbers clipping; responsive sizing and nowrap correct this. |
| Footer / mark | Used the real compass mark, useful navigation, the approved email and the current year rather than the concept's generated logo/year. |

The remaining operator interview video and studio case studies require real source material; no placeholders or invented evidence were added.

## Motion and depth refinement

The follow-up motion pass retains the layout and approved content. The Home compass now uses layered CSS 3D surfaces around the existing SVG: a shallow housing, bevelled rim, raised faceted needle, hub and a slight desktop perspective. A damped pointer response adjusts its tilt and reflected light. This is a lightweight code-rendered treatment; it adds no WebGL library, external model, texture download or canvas.

The Home needle has a short settling entrance and responds to pointer / route choices; its former random idle wobble is disabled. Scroll movement is reduced. Sector photos have a maximum 4px pointer drift within their frame. Sector and engagement details use a 320ms, 7px arrival with content visible throughout. The engagement selector has a 340ms sliding background that follows the native radio selection horizontally or vertically.

Touch pointers do not drive tilt or image parallax. Reduced motion disables detail arrivals, makes selection transitions immediate, flattens the instrument pose and resets pointer motion, including when the preference changes during a visit. Other pages retain their flat compass treatment.

Browser checks passed for desktop depth, live preference switching, radio keyboard interaction, selection-marker placement, enquiry context and focus, all six sector transitions, photo parallax, video controls and touch layouts at 320 / 390 / 768 / 1024px. No runtime or hydration errors were observed. The automated Home WCAG A/AA audit returned no violations. The earlier mobile performance sample above predates this refinement.

The motion pass also passed the production build, type validation, changed-file lint and repository cutover checks. The build reports a 12.4KB Home route and 193KB first-load JavaScript, rounded by Next.js. Final production screenshots were compared with the approved pre-refinement hero: copy, layout, paper/navy/orange palette, route links and mobile hierarchy remain consistent; the compass housing and faceted depth are the intentional visual change. The selection plate, photo drift and detail arrivals are state feedback rather than new content or scroll restrictions.
