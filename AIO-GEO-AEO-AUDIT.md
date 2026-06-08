# Maxinor — AIO / GEO / AEO Full Audit & Action Plan
**Audit Date:** June 2026  
**Site:** https://www.mlabs.co.in/home  
**Framework:** Next.js 15, App Router, Cloudflare Workers via Webflow Cloud

---

## What These Terms Mean

| Term | What It Optimizes For |
|---|---|
| **AEO** (Answer Engine Optimization) | Getting cited as a direct answer in Google AI Overviews, featured snippets, People Also Ask, voice search |
| **GEO** (Generative Engine Optimization) | Getting cited inside ChatGPT, Perplexity, Claude, Gemini responses |
| **AIO** (AI Optimization) | Umbrella term — making your entire site technically readable, authoritative, and citable by all AI systems |

By early 2026, only 38% of AI Overview citations came from top-10 organic results. Ranking alone is no longer enough. Structure, authority, and entity clarity now determine AI citation independently of SERP position.

---

## SECTION 1: WHAT EXISTS — CURRENT STATE

### Passing

| Item | Status | Detail |
|---|---|---|
| HTTPS | PASS | Sitewide, no mixed content |
| `llms.txt` | EXISTS | At `/public/llms.txt` — good structure, has team, services, blog links |
| Blog `BlogPosting` schema | EXISTS | On `app/blog/[slug]/page.tsx` — includes headline, author, datePublished, dateModified |
| Blog canonical tags | EXISTS | Implemented per post via `alternates.canonical` |
| OG / Twitter cards | EXISTS | Sitewide in root layout + per blog post |
| Blog FAQ sections | PARTIAL | Present in newer blogs (12, 13) — missing or thin in older posts (1-9) |
| `robots.txt` | EXISTS (LIVE) | Live at `/home/robots.txt` — but has gaps (see Section 2) |
| Sitemap | EXISTS | Two sitemaps — pages (0.xml) and blogs (1.xml) — but blogs not deploying (separate issue) |
| Internal linking | PARTIAL | Blogs link to each other — but no breadcrumbs on blog posts |
| Author bylines | EXISTS | On every blog post via frontmatter `author` field |
| `datePublished` + `dateModified` | EXISTS | In blog schema |
| Mobile-friendly | PASS | Fully responsive design |
| Next.js static generation | PASS | `force-static` on blog pages |
| Keywords in metadata | EXISTS | Per-page keywords in frontmatter |

---

## SECTION 2: WHAT IS MISSING — CRITICAL GAPS

### 2.1 robots.txt — AI Crawlers NOT Declared

**Current state (live):**
```
User-Agent: *
Allow: /
Disallow: /api/

Sitemap: https://www.mlabs.co.in/home/sitemap.xml
```

**Problems:**
- No explicit declarations for any AI crawler — GPTBot, ClaudeBot, PerplexityBot are not mentioned
- The sitemap URL points to `/home/sitemap.xml` which returns a 404 — it should be `/home/sitemap/0.xml`
- Sites that explicitly allow AI crawlers saw +186% AI-attributed traffic in 90 days vs. sites that don't declare

**What needs to be added:**
```
User-agent: GPTBot
Allow: /

User-agent: OAI-SearchBot
Allow: /

User-agent: ChatGPT-User
Allow: /

User-agent: ClaudeBot
Allow: /

User-agent: Claude-SearchBot
Allow: /

User-agent: Claude-User
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: Perplexity-User
Allow: /

User-agent: Google-Extended
Allow: /

User-agent: Meta-ExternalAgent
Allow: /

User-agent: Applebot-Extended
Allow: /
```

**Also fix:** Sitemap URL in robots.txt should point to working sitemaps, not the broken `/sitemap.xml` path.

---

### 2.2 llms.txt — Exists But Has Issues

**Current state:** File exists at `/public/llms.txt`. This is good. But several issues:

**Problem 1 — Wrong URLs (no basePath)**  
All links use `https://mlabs.co.in/build` but the live site is at `https://www.mlabs.co.in/home/build`. LLMs following the links will hit 404s, destroying trust in the file.

**Problem 2 — Em dashes in blockquote summary**  
Line: `> ...through hands-on execution — not just capital.` Contains an em dash. These can cause parsing issues in some LLM parsers. Should use a hyphen or comma.

**Problem 3 — Blog list is outdated**  
Only 11 blog posts listed. Site now has 38+ published posts. The llms.txt blog section should reflect current content, especially the new operator-focused posts which are the highest-value content for AI citation.

**Problem 4 — No `llms-full.txt`**  
A companion `/llms-full.txt` with key page content embedded inline would significantly increase LLM comprehension of the site without requiring crawl. Particularly valuable for the homepage, about page, and services pages.

**Problem 5 — Missing service detail**  
The GCC (Global Capability Centre) service at `/capability-centre` is not listed. Neither are the Domains pages (`/domains/bfsi`, `/domains/healthcare`, etc.).

---

### 2.3 Schema Markup — Major Gaps

**What exists:** `BlogPosting` schema on blog posts only. `Privacy` and `Terms` pages have minimal schema.

**What is missing:**

#### Organization Schema — Not on Homepage
The most critical schema for entity recognition. Every major AI engine uses `Organization` schema to identify and establish your brand in its knowledge graph. Without it, Maxinor cannot be reliably cited in brand-related queries.

**Required on homepage:**
```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Maxinor",
  "alternateName": "Maxinor Venture Studio",
  "url": "https://www.mlabs.co.in",
  "logo": "https://cdn.prod.website-files.com/...",
  "description": "India's first operator-led AI venture studio. We build, scale, and back startups, SMEs, and corporates.",
  "foundingDate": "2023",
  "areaServed": "IN",
  "sameAs": [
    "https://www.linkedin.com/company/maxinor",
    "https://twitter.com/maxinor"
  ],
  "contactPoint": {
    "@type": "ContactPoint",
    "email": "contact@mlabs.co.in",
    "telephone": "+91-98119-96965",
    "contactType": "customer service"
  }
}
```

#### WebSite Schema — Not Present
Enables Sitelinks Searchbox and helps AI systems understand your domain's scope.

```json
{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Maxinor",
  "url": "https://www.mlabs.co.in",
  "description": "India's first operator-led AI venture studio"
}
```

#### FAQPage Schema — Missing on All Service Pages
`FAQPage` is the #1 schema type for AI citation. Despite Google restricting FAQ rich results in 2023, FAQPage is the primary signal for AI answer extraction in ChatGPT, Perplexity, and Google AI Overviews.

Every service page (`/build`, `/scale`, `/capability-centre`, `/startups`, `/sme`, `/corporate`) needs a visible FAQ section with `FAQPage` JSON-LD.

#### Person Schema for Authors — Not Present
Blog posts show author names but have no `Person` schema. This means AI engines cannot verify who wrote the content or establish author authority.

Required for each author (Samir Gupta, Amar Daing, etc.):
```json
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Samir Gupta",
  "jobTitle": "Revenue, Growth & Operations",
  "worksFor": { "@type": "Organization", "name": "Maxinor" },
  "knowsAbout": ["startup scaling", "venture building", "Indian startup ecosystem", "revenue operations"],
  "sameAs": ["https://www.linkedin.com/in/samirgupta"]
}
```

#### BreadcrumbList Schema — Not Present
Missing on blog posts and all inner pages. Provides AI systems with page hierarchy context.

Example for a blog post:
```json
{
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.mlabs.co.in" },
    { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.mlabs.co.in/blog" },
    { "@type": "ListItem", "position": 3, "name": "Post Title" }
  ]
}
```

#### Service Schema — Not Present
Service pages (`/build`, `/scale`) should have `Service` schema to help AI engines understand what Maxinor offers and for whom.

---

### 2.4 E-E-A-T Signals — Gaps

| Signal | Status | Gap |
|---|---|---|
| Named authors on blogs | EXISTS | Partial — some posts use "Maxinor Team" instead of a named author |
| Author bio pages | MISSING | `/team` has profiles but they're not linked from blog posts as author pages |
| Credentials listed in bio | MISSING | Blog posts don't link to author profiles |
| Original research / data | PARTIAL | Some posts cite external data — no original Maxinor-published research or surveys |
| Expert quotes in articles | MISSING | No attributed expert quotes in any blog post |
| Wikipedia / Wikidata entry | UNKNOWN | Not verified — likely absent |
| Google Business Profile | UNKNOWN | Not verified |
| Physical address on site | MISSING | No address listed on Contact page or in schema |
| "About" page | MISSING | No dedicated `/about` page — information distributed across homepage sections |

---

### 2.5 Content Structure — Gaps

#### Blog Posts 1-9 (Older Style)
- Too long (2500-3000 words) with padded paragraphs
- FAQ sections present but thin (5-7 questions)
- No expert quotes anywhere
- Statistics cited but not densely enough (need every 150-200 words)
- Headings are topic labels, not questions — needs to shift to question-format H2s for AI citation

#### All Blog Posts
- No visible `dateModified` displayed on the page (exists in schema but not shown to readers or AI visual parsers)
- No `<time datetime="">` semantic HTML element wrapping dates
- Authors are displayed as plain text strings, not linked to author profile pages
- No breadcrumb navigation visible above post title

#### Service Pages
- Zero FAQ sections on any service page (`/build`, `/scale`, `/capability-centre`, `/sme`, `/corporate`)
- No "What is X?" definition sections — the #1 AEO signal
- No direct answer in first 40-60 words — pages open with hero marketing text, not answers
- No `HowTo` schema on any process-oriented pages

---

### 2.6 Semantic HTML — Gaps

The site is built in Next.js with Tailwind. The rendered HTML structure needs audit, but based on code review:

- Blog post body is rendered as raw HTML via `marked` — likely uses semantic tags for headings and paragraphs correctly
- `<article>`, `<main>`, `<section>` presence not confirmed in blog post template
- No `<time datetime="">` element wrapping published dates
- Images: `alt` attributes present on logo — unclear if all content images have descriptive alts
- No `<abbr>` tags for acronyms (GCC, SME, ARR, CAC, LTV, etc.) — first use should expand

---

### 2.7 Entity Optimization — Not Started

| Entity Signal | Status |
|---|---|
| Wikipedia / Wikidata for Maxinor | Not found |
| Google Business Profile | Unknown |
| Crunchbase listing | Unknown |
| Consistent NAP (Name, Address, Phone) across directories | Unknown |
| `sameAs` in Organization schema | Not present (no schema) |
| LinkedIn company page | EXISTS (`linkedin.com/company/maxinor`) |
| YouTube channel | Unknown — no link anywhere on site |
| Brand mentions on authoritative sites | Unknown |

**Impact:** Without an established Knowledge Graph entity, Maxinor cannot be cited in brand-related queries by Google AI Overviews, even if the content is excellent.

---

### 2.8 Bing Webmaster Tools — Not Configured (Assumed)

ChatGPT Search is indexed primarily via Bing. If Bing Webmaster Tools is not set up with sitemap submitted, ChatGPT Search will have minimal crawl coverage of Maxinor.

**Action:** Verify setup at bing.com/webmasters.

---

## SECTION 3: PRIORITY ACTION PLAN

### Priority 1 — CRITICAL (Do First, Highest Impact)

| Action | Impact | Effort |
|---|---|---|
| Fix `robots.txt` — add all AI crawler declarations | Immediate crawl access for GPTBot, ClaudeBot, PerplexityBot | Low |
| Fix sitemap URL in `robots.txt` | Correct indexing path | Low |
| Add `Organization` + `WebSite` schema to homepage | Entity recognition in all AI knowledge graphs | Medium |
| Fix `llms.txt` — correct URLs, update blog list, remove em dash | Correct LLM briefing document | Low |
| Add `Person` schema for all blog authors | Author authority signals | Medium |

### Priority 2 — HIGH (This Month)

| Action | Impact | Effort |
|---|---|---|
| Add `BreadcrumbList` schema to all blog posts | Hierarchy signals for AI | Medium |
| Add FAQ section + `FAQPage` schema to all 5 service pages | #1 AEO signal for service discovery | High |
| Add `Service` schema to `/build`, `/scale`, `/capability-centre` | Service entity recognition | Medium |
| Link author names in blog posts to `/team/[slug]` profile pages | E-E-A-T author authority | Low |
| Add visible `dateModified` display to blog post pages | Freshness signal | Low |
| Update old blogs (1-9) to add question-format H2s | Passage-level retrieval improvement | High |
| Create `/about` page | E-E-A-T trust signal, missing page type | Medium |

### Priority 3 — MEDIUM (Next 30 Days)

| Action | Impact | Effort |
|---|---|---|
| Create `/llms-full.txt` with key page content embedded | Deep LLM comprehension | Medium |
| Add `HowTo` schema to process-oriented blog posts | How-to citation in AI responses | Medium |
| Add `<time datetime="">` to all blog post dates | Semantic HTML freshness | Low |
| Add expert quotes to top 10 blog posts | +41% GEO visibility lift | High |
| Add original statistics/data to posts (every 150-200 words) | +32% GEO visibility from data density | High |
| Create Wikidata entry for Maxinor | Knowledge Graph entity establishment | Medium |
| Verify/create Google Business Profile | Local entity + AI Overview signal | Low |
| Submit sitemap to Bing Webmaster Tools | ChatGPT Search crawl coverage | Low |
| Add `<abbr>` tags for all acronyms on first use | Semantic HTML clarity | Low |

### Priority 4 — ONGOING

| Action | Impact | Effort |
|---|---|---|
| Publish original research / data reports | Highest-value GEO citation magnet | High |
| Content refresh cycle: update top 10 posts every 30-60 days | Freshness signals for AI citation | Ongoing |
| Add expert quotes to all new blog posts | +41% citation lift per post | Low |
| Build YouTube presence with video transcripts | #1 Google AI Overview citation source | High |
| Community presence on Reddit in relevant subreddits | #2 ChatGPT citation source | Ongoing |
| Build external citations from Indian business media | Authority chain for GEO | Ongoing |

---

## SECTION 4: BLOG-SPECIFIC GEO IMPROVEMENTS

### Retroactive Updates Needed (Posts 1-9)

The first 9 blog posts were written in a longer, more consultant-style format. To improve AI citation rates:

1. **Restructure H2 headings as questions** — "Revenue Engine" → "What Is the Revenue Engine in a Scaling Startup?"
2. **Add expert quotes** — At least one attributed quote per post
3. **Increase data density** — One statistic every 150-200 words with source link
4. **Sharpen FAQ sections** — Expand to 7-8 questions, make answers 2-3 sentences maximum
5. **Add "What is X?" definition at the top** — First 40-60 words should define the topic directly

### All Future Blog Posts

- Target word count: 1000-1200 words (current style — correct)
- Question-format H2 headings: already being done
- FAQ: 4-5 questions, tight answers — correct
- Expert quotes: add at least one per post
- Data point: minimum one per major section with source
- Author: always use a named author (not "Maxinor Team") with link to profile page
- `<time datetime="">`: wrap the published date

---

## SECTION 5: llms.txt — FULL REWRITE NEEDED

The current `llms.txt` has the right structure but wrong URLs and is outdated. A complete rewrite is needed with:

1. Correct base URL: `https://www.mlabs.co.in/home/` prefix on all links
2. All 38+ published blog posts listed (grouped by topic cluster)
3. All domain pages listed (`/domains/bfsi`, `/domains/healthcare`, etc.)
4. All capability pages listed
5. Em dash removed from blockquote summary
6. GCC / capability-centre page added
7. Updated portfolio companies list

---

## SECTION 6: WHAT THE COMPETITION IS LIKELY DOING

Based on research into AI citation patterns for Indian B2B / startup ecosystem content:

- Inc42, YourStory, and VC funds like Sequoia India have strong entity recognition
- They have Wikipedia entries, consistent Knowledge Graph presence, and large backlink profiles
- They do NOT optimize for AI specifically — this is Maxinor's competitive window
- A site that executes this audit correctly can outperform much larger competitors in AI-generated responses for niche operator/venture-studio queries
- The "India first operator-led AI venture studio" positioning is unique — if the entity is established correctly, this claim becomes Maxinor's permanent citation anchor in AI responses

---

## SECTION 7: QUICK REFERENCE — WHAT WAS DONE, WHAT IS NOT

| Item | Done | Not Done |
|---|---|---|
| `llms.txt` | EXISTS (needs fix) | — |
| `robots.txt` (AI crawlers) | — | NOT DONE |
| `Organization` schema | — | NOT DONE |
| `WebSite` schema | — | NOT DONE |
| `BlogPosting` schema | DONE | — |
| `FAQPage` schema | — | NOT DONE |
| `Person` schema (authors) | — | NOT DONE |
| `BreadcrumbList` schema | — | NOT DONE |
| `Service` schema | — | NOT DONE |
| `HowTo` schema | — | NOT DONE |
| Canonical tags | DONE | — |
| OG / Twitter cards | DONE | — |
| Author bylines on blogs | DONE (partial) | Named author missing on some |
| Author bio pages | DONE (team pages) | Not linked from blog posts |
| FAQ in blog posts | PARTIAL | Old posts have thin FAQs |
| Expert quotes in posts | — | NOT DONE |
| Original research / data | — | NOT DONE |
| Sitemap (pages) | DONE | — |
| Sitemap (blogs) | CODE EXISTS | Not deployed (build issue) |
| Bing Webmaster Tools | UNKNOWN | Verify |
| Wikipedia / Wikidata | UNKNOWN | Likely NOT DONE |
| Google Business Profile | UNKNOWN | Verify |
| `<time datetime="">` | — | NOT DONE |
| Breadcrumb navigation | — | NOT DONE |
| FAQ on service pages | — | NOT DONE |
| About page | — | NOT DONE |
| `llms-full.txt` | — | NOT DONE |
| Wikidata entity | — | NOT DONE |

---

## SECTION 8: EXPECTED IMPACT BY PRIORITY

| Priority | Action | Expected Impact |
|---|---|---|
| 1 | AI crawler declarations in robots.txt | +186% AI-attributed traffic within 90 days (industry avg) |
| 1 | Organization schema | Brand appears in AI knowledge graph responses |
| 1 | Fix llms.txt URLs | LLMs can follow links without 404s |
| 2 | FAQPage schema on service pages | 20-30% more appearances in Google AI Overviews |
| 2 | Person schema for authors | Author authority recognized across ChatGPT, Perplexity |
| 3 | Expert quotes in posts | +41% GEO visibility per post |
| 3 | Data density improvement | +32% GEO citation rate |
| 4 | Original research published | Highest-value citation magnet — referenced by other sites |
| 4 | YouTube presence | #1 correlated factor with Google AI Overview visibility |

---

*Audit produced June 2026. Based on research from: SEO Audit Checklist for Google AI Overviews 2026, Princeton GEO paper, Google AI optimization guide, Semrush llms.txt guide, AI crawler optimization research, Digital Romans AEO checklist, and 30+ primary sources.*
