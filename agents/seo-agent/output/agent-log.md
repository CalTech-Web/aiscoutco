[2026-03-14 11:23:44] ==========================================
[2026-03-14 11:23:44] Agent: Seo Agent
[2026-03-14 11:23:44] Model: sonnet
[2026-03-14 11:23:44] Workspace: /Users/brandonhopkins/Projects/aiscoutco/agents/seo-agent
[2026-03-14 11:23:44] Stop on complete: false
[2026-03-14 11:23:44] Max loops: 5 (0=infinite)
[2026-03-14 11:23:44] ==========================================
[2026-03-14 11:23:44] Run #1 starting (model: sonnet)

## Run 1: Meta Titles, Descriptions, Primary Keywords
**Commit:** d6350ac

### Changes
- Created `/app/how-it-works/layout.tsx` — title: "AI Automation Process | AI Scout Co" (36 chars), description 148 chars
- Created `/app/about/layout.tsx` — title: "About Brandon Hopkins | AI Scout Co" (36 chars), description 152 chars
- Created `/app/case-study/layout.tsx` — title: "AI Automation Case Study: DiamondLinks" (38 chars), description 141 chars
- Created `/app/contact/layout.tsx` — title: "Book a Free Discovery Call | AI Scout Co" (41 chars), description 139 chars
- Updated `/app/privacy-policy/page.tsx` — added meta description (114 chars)
- Updated `/app/terms-of-service/page.tsx` — added meta description (109 chars)
- Root layout title already compliant (46 chars, keyword-rich). H1s on all pages contain contextual keywords.

Run 1 complete. Here's what was done:

**Meta titles & descriptions added to all pages:**

| Page | Title (chars) | Description (chars) |
|---|---|---|
| Home | "AI Scout Co \| Custom AI Systems & Automation" (46) ✓ | 155 ✓ |
| How It Works | "AI Automation Process \| AI Scout Co" (36) ✓ | 148 ✓ |
| About | "About Brandon Hopkins \| AI Scout Co" (36) ✓ | 152 ✓ |
| Case Study | "AI Automation Case Study: DiamondLinks" (38) ✓ | 141 ✓ |
| Contact | "Book a Free Discovery Call \| AI Scout Co" (41) ✓ | 139 ✓ |
| Privacy Policy | existing (28) ✓ | added 114 ✓ |
| Terms of Service | existing (30) ✓ | added 109 ✓ |

All four main pages were `"use client"` components (can't export metadata directly), so I created per-route `layout.tsx` server components to carry the metadata. Build passed cleanly.
[2026-03-14 11:26:40] Run #1 finished
[2026-03-14 11:26:45] Run #2 starting (model: sonnet)

## Run 2: Canonical Tags, Sitemap, Robots.txt
**Commit:** 0dea7e2

### Changes
- Added `metadataBase: new URL("https://aiscoutco.com")` and `alternates.canonical` to root `layout.tsx`
- Added `alternates.canonical` to `/how-it-works`, `/about`, `/case-study`, `/contact` layouts
- Added `alternates.canonical` to `/privacy-policy` and `/terms-of-service` pages
- Created `app/sitemap.ts` — generates `/sitemap.xml` with all 7 pages, correct priorities and change frequencies
- Created `app/robots.ts` — generates `/robots.txt` allowing all crawlers and pointing to sitemap

Run 2 complete.

| File | Change |
|---|---|
| `app/layout.tsx` | Added `metadataBase` + canonical `https://aiscoutco.com` |
| `app/how-it-works/layout.tsx` | canonical `/how-it-works` |
| `app/about/layout.tsx` | canonical `/about` |
| `app/case-study/layout.tsx` | canonical `/case-study` |
| `app/contact/layout.tsx` | canonical `/contact` |
| `app/privacy-policy/page.tsx` | canonical `/privacy-policy` |
| `app/terms-of-service/page.tsx` | canonical `/terms-of-service` |
| `app/sitemap.ts` | New — `/sitemap.xml` with 7 URLs |
| `app/robots.ts` | New — `/robots.txt` allow all + sitemap pointer |
Run 2 complete. Here's what was done:

| File | Change |
|---|---|
| `app/layout.tsx` | Added `metadataBase` + canonical `https://aiscoutco.com` |
| `app/how-it-works/layout.tsx` | canonical `/how-it-works` |
| `app/about/layout.tsx` | canonical `/about` |
| `app/case-study/layout.tsx` | canonical `/case-study` |
| `app/contact/layout.tsx` | canonical `/contact` |
| `app/privacy-policy/page.tsx` | canonical `/privacy-policy` |
| `app/terms-of-service/page.tsx` | canonical `/terms-of-service` |
| `app/sitemap.ts` | New — `/sitemap.xml` with all 7 pages |
| `app/robots.ts` | New — `/robots.txt` allowing all crawlers + sitemap pointer |

Build passed, committed (`0dea7e2`), pushed, deployed to Vercel (Ready).
[2026-03-14 11:30:44] Run #2 finished
[2026-03-14 11:30:49] Run #3 starting (model: sonnet)

## Run 3: Structured Data (JSON-LD), Open Graph and Twitter Tags
**Commit:** 88d04cb

### Changes
- `app/layout.tsx` — Added Twitter card metadata; added Organization + WebSite JSON-LD script in body
- `app/how-it-works/layout.tsx` — Added OG + Twitter metadata; added WebPage JSON-LD
- `app/about/layout.tsx` — Added OG + Twitter metadata; added Person (Brandon Hopkins) JSON-LD
- `app/case-study/layout.tsx` — Added OG + Twitter metadata; added Article JSON-LD
- `app/contact/layout.tsx` — Added OG + Twitter metadata; added ContactPage JSON-LD
- `app/privacy-policy/page.tsx` — Added OG + Twitter metadata
- `app/terms-of-service/page.tsx` — Added OG + Twitter metadata

| Page | OG Tags | Twitter Tags | JSON-LD Schema |
|---|---|---|---|
| Home (root) | existing ✓ | added ✓ | Organization + WebSite |
| How It Works | added ✓ | added ✓ | WebPage |
| About | added ✓ | added ✓ | Person |
| Case Study | added ✓ | added ✓ | Article |
| Contact | added ✓ | added ✓ | ContactPage |
| Privacy Policy | added ✓ | added ✓ | — |
| Terms of Service | added ✓ | added ✓ | — |

Build passed, committed (88d04cb), pushed, deployed to Vercel (Ready).
[2026-03-14] Run #3 finished
Run 3 complete. Here's what was done:

| File | Changes |
|---|---|
| `app/layout.tsx` | Twitter card metadata + Organization/WebSite JSON-LD |
| `app/how-it-works/layout.tsx` | OG + Twitter + WebPage JSON-LD |
| `app/about/layout.tsx` | OG + Twitter + Person JSON-LD |
| `app/case-study/layout.tsx` | OG + Twitter + Article JSON-LD |
| `app/contact/layout.tsx` | OG + Twitter + ContactPage JSON-LD |
| `app/privacy-policy/page.tsx` | OG + Twitter metadata |
| `app/terms-of-service/page.tsx` | OG + Twitter metadata |

Build passed, committed (`88d04cb`), pushed, deployed to Vercel (Ready).
[2026-03-14 11:33:23] Run #3 finished
[2026-03-14 11:33:28] Run #4 starting (model: sonnet)

## Run 4: Heading Hierarchy and Semantic HTML
**Commit:** 0a641fe

### Changes
- `app/how-it-works/page.tsx` — FAQ question `div` → `h3` (proper heading hierarchy); steps list `div.space-y-10` → `ol` with `motion.li` (numbered process = ordered list)
- `app/case-study/page.tsx` — Proposal feature titles `div` → `h3`; 7-features list `div` → `ol` with `li`; testimonial `p` → `blockquote` + `figcaption`
- `app/page.tsx` — Testimonial `p` → `blockquote` + `figcaption` (consistent with About page)

| File | Change |
|---|---|
| `app/how-it-works/page.tsx` | FAQ question headings (h3), steps as ordered list (ol/li) |
| `app/case-study/page.tsx` | Proposal feature headings (h3), 7-features as ol/li, testimonial blockquote |
| `app/page.tsx` | Testimonial blockquote + figcaption |

Build passed, committed (0a641fe), pushed, deployed to Vercel (Ready).
[2026-03-14] Run #4 finished
Run 4 complete. Here's what was done:

| File | Change |
|---|---|
| `app/how-it-works/page.tsx` | FAQ questions `div` → `h3`; numbered steps `div` → `ol/li` |
| `app/case-study/page.tsx` | Proposal feature titles `div` → `h3`; 7-features list `div` → `ol/li`; testimonial `p` → `blockquote` |
| `app/page.tsx` | Testimonial `p` → `blockquote` with `figcaption` |

Build passed, committed (`0a641fe`), pushed, deployed to Vercel (Ready).
[2026-03-14 11:39:43] Run #4 finished
[2026-03-14 11:39:48] Run #5 starting (model: sonnet)

## Run 5: Image Alt Text and Internal Linking
**Commit:** 4636c67

### Changes

**Image alt text (case-study/page.tsx):**
- Before image: `alt="DiamondLinks client report before automation: plain text document in Google Docs with no visual design"` (was generic "Before: Manual Google Docs report")
- After image: `alt="DiamondLinks client report after automation: branded dashboard with charts, graphs, and color-coded metrics"` (was generic "After: Automated dashboard report")

**Decorative SVG accessibility:**
- `components/Navbar.tsx` — Added `aria-hidden="true"` to compass logo SVG (decorative, adjacent text provides label)
- `components/Footer.tsx` — Added `aria-hidden="true"` to compass logo SVG

**Internal linking:**
- `app/case-study/page.tsx` — "discovery session" in Chapter 3 links to `/how-it-works`; added secondary CTA link "Learn how the five-step process works" → `/how-it-works`
- `app/how-it-works/page.tsx` — FAQ "Will this replace my employees?" links "DiamondLinks case study" → `/case-study`
- `app/about/page.tsx` — "genuine discovery" in founder bio links to `/how-it-works`; added "Read the DiamondLinks case study" link → `/case-study` in differentiators section
- `app/page.tsx` — Final CTA section adds "Learn more about Brandon" link → `/about`

| Page | Links added |
|---|---|
| Case Study | `/how-it-works` (contextual + CTA) |
| How It Works | `/case-study` (FAQ) |
| About | `/how-it-works` (bio), `/case-study` (differentiators) |
| Home | `/about` (final CTA) |

Build passed, committed (4636c67), pushed, deployed to Vercel (Ready).
[2026-03-14] Run #5 finished
Run 5 complete. Here's what was done:

## Run 5: Image Alt Text & Internal Linking
**Commit:** `4636c67` | Deployed to Vercel (Ready)

### Image alt text
| Image | Before | After |
|---|---|---|
| case-study before | "Before: Manual Google Docs report" | "DiamondLinks client report before automation: plain text document in Google Docs with no visual design" |
| case-study after | "After: Automated dashboard report" | "DiamondLinks client report after automation: branded dashboard with charts, graphs, and color-coded metrics" |

- Added `aria-hidden="true"` to decorative SVG compass icons in Navbar and Footer

### Internal links added
| Page | Link added |
|---|---|
| `case-study` | "discovery session" → `/how-it-works`; secondary CTA "Learn how the five-step process works" → `/how-it-works` |
| `how-it-works` | "DiamondLinks case study" in FAQ → `/case-study` |
| `about` | "genuine discovery" in bio → `/how-it-works`; "Read the DiamondLinks case study" → `/case-study` |
| `page` (home) | "Learn more about Brandon" in final CTA → `/about` |

All 5 runs in the SEO agent's Run Order are now complete.
[2026-03-14 11:46:09] Run #5 finished
[2026-03-14 11:46:09] Reached max loops (5). Stopping.
[2026-03-14 15:19:01] ==========================================
[2026-03-14 15:19:01] Agent: Seo Agent
[2026-03-14 15:19:01] Model: sonnet
[2026-03-14 15:19:01] Workspace: /Users/brandonhopkins/Projects/aiscoutco/agents/seo-agent
[2026-03-14 15:19:01] Stop on complete: false
[2026-03-14 15:19:01] Max loops: 25 (0=infinite)
[2026-03-14 15:19:01] ==========================================
[2026-03-14 15:19:01] Run #1 starting (model: sonnet)

## Run 6: Service Pages SEO + FAQ Structured Data
**Commit:** 68d9a2f

### Changes

**Service pages — canonical, OG, Twitter, Service JSON-LD (all three pages previously missing these):**
- `/services/discovery/page.tsx` — canonical `/services/discovery`, OG, Twitter, Service JSON-LD (free discovery offer)
- `/services/build/page.tsx` — canonical `/services/build`, OG, Twitter, Service JSON-LD
- `/services/support/page.tsx` — canonical `/services/support`, OG, Twitter, Service JSON-LD

**Sitemap:**
- `app/sitemap.ts` — added `/services/discovery` (priority 0.8), `/services/build` (0.8), `/services/support` (0.7); sitemap now covers 10 pages

**FAQ structured data:**
- `app/how-it-works/layout.tsx` — added FAQPage JSON-LD schema with 4 Q&A pairs (build timeline, AI knowledge required, integrations, employee replacement)

| File | Change |
|---|---|
| `app/services/discovery/page.tsx` | canonical + OG + Twitter + Service JSON-LD |
| `app/services/build/page.tsx` | canonical + OG + Twitter + Service JSON-LD |
| `app/services/support/page.tsx` | canonical + OG + Twitter + Service JSON-LD |
| `app/sitemap.ts` | 3 service page URLs added (10 total) |
| `app/how-it-works/layout.tsx` | FAQPage JSON-LD added alongside existing WebPage schema |

Build passed, committed (68d9a2f), pushed, deployed to Vercel (Ready).
[2026-03-14 15:XX:XX] Run #1 finished
Run 6 complete. Here's a summary:

## Run 6: Service Pages SEO + FAQ Structured Data
**Commit:** `68d9a2f` | Deployed to Vercel (Ready)

| File | Change |
|---|---|
| `services/discovery/page.tsx` | Canonical + OG + Twitter + Service JSON-LD |
| `services/build/page.tsx` | Canonical + OG + Twitter + Service JSON-LD |
| `services/support/page.tsx` | Canonical + OG + Twitter + Service JSON-LD |
| `app/sitemap.ts` | Added 3 service URLs (sitemap now covers 10 pages) |
| `how-it-works/layout.tsx` | FAQPage JSON-LD with 4 Q&A pairs |

The three service pages were missing canonical tags, social metadata, and structured data from the previous runs. They're now fully indexed with proper signals for search engines, and the How It Works FAQ section now has FAQPage schema eligible for rich results in Google Search.
[2026-03-14 15:26:06] Run #1 finished
[2026-03-14 15:26:12] Run #2 starting (model: sonnet)

## Run 7: FAQPage Schema, BreadcrumbList, Inter-Service Linking
**Commit:** 14b403f

### Changes

**Home page FAQPage JSON-LD (`app/page.tsx`):**
- Added `FAQPage` JSON-LD script tag with all 6 Q&A pairs from the existing FAQ section
- Eligible for Google rich results (expandable FAQ in search results)

**BreadcrumbList JSON-LD (all three service pages):**
- `app/services/discovery/page.tsx` — BreadcrumbList: Home > AI Discovery & Strategy
- `app/services/build/page.tsx` — BreadcrumbList: Home > Custom AI Systems
- `app/services/support/page.tsx` — BreadcrumbList: Home > Ongoing Support
- Each service page now exports an array of two JSON-LD objects (Service + BreadcrumbList)

**Inter-service cross-links:**
- `services/discovery` CTA: secondary button changed from "See the full process" → "Next: Custom AI Systems" (`/services/build`); added case study callout "See how discovery led to $85,000+/year in savings" → `/case-study`
- `services/build` CTA: secondary button changed from "See a real example" → "Next: Ongoing Support" (`/services/support`); added footer note linking back to `/services/discovery` and `/case-study`
- `services/support` CTA: secondary button changed from "See how it works" → "See what we build" (`/services/build`)

**Home page "What I Build" section:**
- Added "Explore our custom AI systems" link → `/services/build` (mirrors the "Learn more about the process" pattern in the How It Works section)

| File | Change |
|---|---|
| `app/page.tsx` | FAQPage JSON-LD (6 Q&As) + build page link in What I Build section |
| `services/discovery/page.tsx` | BreadcrumbList JSON-LD + link to /services/build + case study reference |
| `services/build/page.tsx` | BreadcrumbList JSON-LD + link to /services/support + links to /services/discovery and /case-study |
| `services/support/page.tsx` | BreadcrumbList JSON-LD + link to /services/build |

Build passed, committed (14b403f), pushed, deployed to Vercel (Ready).
[2026-03-14] Run #7 finished
## Run 7 Complete — `14b403f` | Deployed (Ready)

| File | Change |
|---|---|
| `app/page.tsx` | FAQPage JSON-LD with all 6 Q&As + "Explore our custom AI systems" → `/services/build` |
| `services/discovery/page.tsx` | BreadcrumbList JSON-LD + secondary CTA → `/services/build` + case study callout |
| `services/build/page.tsx` | BreadcrumbList JSON-LD + secondary CTA → `/services/support` + links back to discovery and case study |
| `services/support/page.tsx` | BreadcrumbList JSON-LD + secondary CTA → `/services/build` |

Key wins:
- **FAQPage schema** on the homepage makes those 6 Q&As eligible for Google's expandable FAQ rich results in SERPs
- **BreadcrumbList** on all three service pages can earn breadcrumb trail display in search results
- **Service journey linking** (Discovery → Build → Support) now forms a complete chain, improving crawl depth and PageRank flow through the service pages
[2026-03-14 15:30:23] Run #2 finished
[2026-03-14 15:30:28] Run #3 starting (model: sonnet)

## Run 8: Service Page Cross-Linking
**Commit:** 7fbc988

### Changes

**how-it-works/page.tsx:**
- Added `serviceLink` to Step 1 (Discovery Call) → `/services/discovery` "Learn about our AI Discovery & Strategy service"
- Added `serviceLink` to Step 3 (Build & Deploy) → `/services/build` "See our custom AI system development service"
- Added `serviceLink` to Step 5 (Optimize & Evolve) → `/services/support` "Explore ongoing optimization and support"
- Added rendering logic in step cards to display service links beneath deliverables

**about/page.tsx:**
- "Discovery first, always" card desc now links to `/services/discovery`
- "Make it feel simple, but build it right" card desc now links to `/services/build`

**case-study/page.tsx:**
- CTA section: added third link "See the AI Discovery & Strategy service" → `/services/discovery`

**page.tsx (homepage):**
- Process steps section: added secondary "Start with a free AI discovery" link → `/services/discovery` alongside existing "Learn more about the process" link

| File | Links added |
|---|---|
| `how-it-works/page.tsx` | `/services/discovery`, `/services/build`, `/services/support` (one per matching step) |
| `about/page.tsx` | `/services/discovery` (Discovery first card), `/services/build` (Make it simple card) |
| `case-study/page.tsx` | `/services/discovery` (CTA section) |
| `page.tsx` | `/services/discovery` (process steps section) |

Build passed, committed (7fbc988), pushed, deployed to Vercel (Ready).
[2026-03-14] Run #8 finished
**Run 8 complete** — `7fbc988` | Deployed (Ready)

| File | Change |
|---|---|
| `how-it-works/page.tsx` | Service page links added beneath deliverables for steps 1, 3, and 5 |
| `about/page.tsx` | "Discovery first" card → `/services/discovery`; "Make it simple" card → `/services/build` |
| `case-study/page.tsx` | CTA: added `/services/discovery` as third secondary link |
| `page.tsx` | Process section: added "Start with a free AI discovery" → `/services/discovery` |

The service pages now receive internal links from every major content page, completing the crawl path from homepage → how-it-works/about/case-study → service pages → contact.
[2026-03-14 15:35:18] Run #3 finished
[2026-03-14 15:35:23] Run #4 starting (model: sonnet)

## Run 9: Title Keyword Fix, Review Schema, FAQPage on Discovery, Semantic HTML on Service Pages
**Commit:** dca66ea

### Changes

**`services/support/page.tsx` — title keyword fix:**
- title: "Ongoing Support | AI Scout Co" → "AI System Support | AI Scout Co" (no AI keyword previously)
- OG title and Twitter title updated to match

**`case-study/layout.tsx` — Review schema:**
- Added `Review` JSON-LD with DiamondLinks testimonial, 5-star `Rating`, and `itemReviewed` pointing to "Custom AI Automation Systems" service
- Eligible for rich snippet treatment in Google Search

**`services/discovery/page.tsx` — FAQPage schema:**
- Added `FAQPage` JSON-LD as third element in jsonLd array (4 Q&As: is it free, what happens, do I need to prepare, what do I get)
- Eligible for Google expandable FAQ rich results on the discovery service page

**Semantic HTML on service pages (all three):**
- `services/discovery/page.tsx` — "Why start here" checkboxes: `div` → `ul/li` + `aria-hidden` on CheckCircle icons
- `services/support/page.tsx` — "Response times" checkboxes: `div` → `ul/li` + `aria-hidden` on CheckCircle icons
- `services/build/page.tsx` — "Every build includes" checkboxes: `div` → `ul/li`; "How we work" steps: `div` → `ol/li` with `h3` headings and `aria-hidden` on decorative step numbers

| File | Change |
|---|---|
| `services/support/page.tsx` | Title: "Ongoing Support" → "AI System Support" (adds AI keyword) |
| `case-study/layout.tsx` | Review JSON-LD (DiamondLinks, 5-star) |
| `services/discovery/page.tsx` | FAQPage JSON-LD (4 Q&As) + checklist div → ul/li |
| `services/support/page.tsx` | Response times checklist div → ul/li |
| `services/build/page.tsx` | "Every build includes" div → ul/li; "How we work" div → ol/li with h3 |

Build passed, committed (dca66ea), pushed, deployed to Vercel (Ready).
[2026-03-14] Run #9 finished
**Run 9 complete** — `dca66ea` | Deployed to Vercel (Ready)

| File | Change |
|---|---|
| `services/support/page.tsx` | Title: "Ongoing Support" → "AI System Support | AI Scout Co" (adds missing AI keyword) |
| `case-study/layout.tsx` | Review JSON-LD — DiamondLinks testimonial with 5-star rating, eligible for rich snippets |
| `services/discovery/page.tsx` | FAQPage JSON-LD with 4 Q&As (free call, what happens, preparation, deliverables) |
| `services/discovery/page.tsx` | "Why start here" checklist: `div` → `ul/li` |
| `services/support/page.tsx` | "Response times" checklist: `div` → `ul/li` |
| `services/build/page.tsx` | "Every build includes" list: `div` → `ul/li`; "How we work" steps: `div` → `ol/li` with `h3` headings |
[2026-03-14 15:42:20] Run #4 finished
[2026-03-14 15:42:25] Run #5 starting (model: sonnet)

## Run 10: OG Image, Support FAQPage Schema, Organization Schema Enhancements
**Commit:** e41e690 | Deployed to Vercel (Ready)

### Changes

**`app/opengraph-image.tsx` (new):**
- Edge-rendered ImageResponse generating a 1200x630 branded social sharing card
- Dark navy background with grid pattern and radial blue glow matching brand
- "AI Scout Co" wordmark with compass icon, "Custom AI Systems & Automation" headline in blue/cyan gradient
- Three service badges: AI Discovery, Custom Build, Ongoing Support
- Automatically served as `og:image` and `twitter:image` for all pages via Next.js metadata inheritance

**`app/services/support/page.tsx` — FAQPage schema:**
- Added FAQPage JSON-LD as third element in jsonLd array (4 Q&As)
- Q&As: commitment requirement, response time, what support includes, new feature additions
- Support page now matches discovery and how-it-works pages in FAQ schema coverage

**`app/layout.tsx` — Organization schema enrichment:**
- Added `logo: "https://aiscoutco.com/favicon.ico"` to Organization
- Added `email: "brandon@aiscoutco.com"` to Organization
- Added `contactPoint` object (ContactPoint, customer service, english, email)

| File | Change |
|---|---|
| `app/opengraph-image.tsx` | New — 1200x630 branded OG image (edge-rendered, applies to all pages) |
| `app/services/support/page.tsx` | FAQPage JSON-LD with 4 Q&As |
| `app/layout.tsx` | Organization schema: added logo, email, contactPoint |

[2026-03-14] Run #10 finished
**Run 10 complete** — `e41e690` | Deployed to Vercel (Ready)

| File | Change |
|---|---|
| `app/opengraph-image.tsx` | New — 1200x630 branded edge-rendered OG image, auto-applied to all pages |
| `app/services/support/page.tsx` | FAQPage JSON-LD with 4 Q&As (commitment, response time, what's included, new features) |
| `app/layout.tsx` | Organization schema: added `logo`, `email`, `contactPoint` |

The OG image is the highest-impact change, as every social share of any page on the site will now show a branded preview card instead of a blank/generic thumbnail. The support page FAQ schema makes it eligible for Google's expandable FAQ rich results, matching the coverage already on the discovery and how-it-works pages. The Organization enrichment improves Google Knowledge Panel signals.
[2026-03-14 15:50:27] Run #5 finished
[2026-03-14 15:50:32] Run #6 starting (model: sonnet)

## Run 11: BreadcrumbList Schema, HowTo Schema, FAQPage on Build Service
**Commit:** d466cc8 | Deployed to Vercel (Ready)

### Changes

**BreadcrumbList JSON-LD added to 4 pages (previously only service pages had it):**
- `app/about/layout.tsx` — BreadcrumbList: Home > About Brandon Hopkins; jsonLd converted to array
- `app/how-it-works/layout.tsx` — BreadcrumbList: Home > How It Works
- `app/case-study/layout.tsx` — BreadcrumbList: Home > Case Study: DiamondLinks
- `app/contact/layout.tsx` — BreadcrumbList: Home > Book a Discovery Call

**HowTo JSON-LD (`app/how-it-works/layout.tsx`):**
- Added `HowTo` schema with 5 `HowToStep` entries matching the exact 5-step process
- Steps 1, 3, and 5 include `url` pointing to the corresponding service pages
- Eligible for Google HowTo rich results in search

**FAQPage JSON-LD (`app/services/build/page.tsx`):**
- Added `FAQPage` schema as third element in jsonLd array (4 Q&As)
- Q&As: what kinds of systems are built, how long a build takes, what is included, tool compatibility
- Services/build now matches discovery and support pages in FAQ schema coverage

| File | Change |
|---|---|
| `app/about/layout.tsx` | BreadcrumbList JSON-LD added (Home > About) |
| `app/how-it-works/layout.tsx` | BreadcrumbList + HowTo JSON-LD (5-step process with service page URLs) |
| `app/case-study/layout.tsx` | BreadcrumbList JSON-LD added (Home > Case Study) |
| `app/contact/layout.tsx` | BreadcrumbList JSON-LD added (Home > Book a Discovery Call) |
| `app/services/build/page.tsx` | FAQPage JSON-LD with 4 Q&As |

[2026-03-14] Run #11 finished
**Run 11 complete** — `d466cc8` | Deployed to Vercel (Ready)

| File | Change |
|---|---|
| `app/about/layout.tsx` | BreadcrumbList JSON-LD (Home > About Brandon Hopkins) |
| `app/how-it-works/layout.tsx` | BreadcrumbList + HowTo JSON-LD (5 steps, each linking to matching service page) |
| `app/case-study/layout.tsx` | BreadcrumbList JSON-LD (Home > Case Study: DiamondLinks) |
| `app/contact/layout.tsx` | BreadcrumbList JSON-LD (Home > Book a Discovery Call) |
| `app/services/build/page.tsx` | FAQPage JSON-LD with 4 Q&As |

Key wins:
- **BreadcrumbList** now covers all 7 content pages (previously only the 3 service pages had it), making breadcrumb trail display in search results available across the entire site
- **HowTo schema** on How It Works makes the 5-step process eligible for Google HowTo rich results, with direct links from each step to the corresponding service page
- **FAQPage** on services/build completes FAQ schema coverage across all three service pages
[2026-03-14 15:53:25] Run #6 finished
[2026-03-14 15:53:30] Run #7 starting (model: sonnet)

## Run 12: Article Schema Dates, aggregateRating, Person knowsAbout, Service Keywords, Nav aria-label
**Commit:** 08fb844 | Deployed to Vercel (Ready)

### Changes

**`app/case-study/layout.tsx` — Article schema enrichment:**
- Added `datePublished: "2026-03-14"` and `dateModified: "2026-03-14"` — enables Google to show publish date in rich results and use freshness signals for ranking
- Added `inLanguage: "en-US"` — signals content language to search engines

**`app/layout.tsx` — Organization aggregateRating:**
- Added `aggregateRating` with `ratingValue: "5"`, `ratingCount: "1"` to the Organization schema
- Eligible for star ratings appearing alongside the brand in Google Search results

**`app/about/layout.tsx` — Person schema knowsAbout:**
- Added `knowsAbout` array: AI automation, autonomous AI agents, multi-agent orchestration, workflow automation, API integration, business process automation, AI consulting
- Added `email: "brandon@aiscoutco.com"` to Person schema
- Improves Google's understanding of Brandon's expertise domains

**`app/services/discovery/page.tsx`, `build/page.tsx`, `support/page.tsx` — keywords metadata:**
- Discovery: "AI discovery, AI strategy, workflow audit, automation roadmap, free AI consultation, AI consulting"
- Build: "custom AI systems, autonomous AI agents, AI development, API integration, workflow automation, multi-agent orchestration"
- Support: "AI system support, AI maintenance, automation optimization, ongoing AI support, AI system monitoring"

**`components/Navbar.tsx` — nav aria-label:**
- Added `aria-label="Main"` to the `<nav>` element for accessibility conformance (WCAG 2.4.1)

| File | Change |
|---|---|
| `app/case-study/layout.tsx` | Article: datePublished, dateModified, inLanguage |
| `app/layout.tsx` | Organization: aggregateRating (5/5, 1 review) |
| `app/about/layout.tsx` | Person: knowsAbout array + email |
| `services/discovery/page.tsx` | keywords metadata |
| `services/build/page.tsx` | keywords metadata |
| `services/support/page.tsx` | keywords metadata |
| `components/Navbar.tsx` | nav aria-label="Main" |

[2026-03-14] Run #12 finished
**Run 12 complete** — `08fb844` | Deployed to Vercel (Ready)

| File | Change |
|---|---|
| `case-study/layout.tsx` | Article schema: `datePublished`, `dateModified` (2026-03-14), `inLanguage: "en-US"` |
| `app/layout.tsx` | Organization schema: `aggregateRating` (5/5, 1 review) — eligible for star ratings in SERPs |
| `about/layout.tsx` | Person schema: `knowsAbout` array (7 expertise domains) + `email` |
| `services/discovery/page.tsx` | `keywords` metadata added |
| `services/build/page.tsx` | `keywords` metadata added |
| `services/support/page.tsx` | `keywords` metadata added |
| `components/Navbar.tsx` | `aria-label="Main"` on `<nav>` (WCAG 2.4.1) |

Key wins:
- **aggregateRating** on Organization makes AI Scout Co eligible for star rating display in Google branded searches
- **Article dates** give Google freshness signals and can surface the publish date in rich results for the case study
- **knowsAbout** strengthens Google's understanding of Brandon's expertise for entity association
- **Service page keywords** improve keyword targeting for each service's unique search queries
[2026-03-14 16:01:10] Run #7 finished
[2026-03-14 16:01:15] Run #8 starting (model: sonnet)

## Run 13: 7th FAQ, Article Image Schema, Organization sameAs, WebSite potentialAction
**Commit:** 6c2aa11 | Deployed to Vercel (Ready)

### Changes

**`app/page.tsx` — 7th FAQ added:**
- Added "Can I see a demo or example?" Q&A (from SITE_FACTS.md) to both the `faqs` UI array and the `faqJsonLd` JSON-LD object
- Homepage FAQPage schema now covers all 7 questions from SITE_FACTS.md FAQ content

**`app/layout.tsx` — Organization + WebSite schema enrichment:**
- Added `sameAs: ["https://caltechweb.com"]` to Organization schema — links AI Scout Co to Brandon's other company referenced in the footer, strengthening entity association for Google's Knowledge Graph
- Added `potentialAction` (ReserveAction → `/contact`) to WebSite schema — eligible for Google's "Actions" feature in branded search results

**`app/case-study/layout.tsx` — Article schema image + publisher logo:**
- Added `image` (ImageObject) pointing to `/assets/case-study/after-report.png` — required for Google to show an image alongside the article in rich results
- Added `logo` (ImageObject) to the `publisher` object — aligns with Google's Article rich result guidelines

| File | Change |
|---|---|
| `app/page.tsx` | 7th FAQ ("Can I see a demo?") in UI array + FAQPage JSON-LD |
| `app/layout.tsx` | Organization `sameAs` (caltechweb.com) + WebSite `potentialAction` (ReserveAction → /contact) |
| `app/case-study/layout.tsx` | Article `image` + publisher `logo` for rich result eligibility |

[2026-03-14] Run #13 finished
**Run 13 complete** — `6c2aa11` | Deployed to Vercel (Ready)

| File | Change |
|---|---|
| `app/page.tsx` | 7th FAQ ("Can I see a demo?") added to FAQ UI + FAQPage JSON-LD |
| `app/layout.tsx` | Organization `sameAs` → caltechweb.com; WebSite `potentialAction` ReserveAction → /contact |
| `app/case-study/layout.tsx` | Article `image` (ImageObject) + publisher `logo` — required for Google image rich results |

Key wins:
- **7th FAQ** completes the FAQ section against SITE_FACTS.md and adds one more Q&A to the FAQPage rich result candidate
- **Article image** is the most important — Google requires it to render an image alongside article rich results in SERPs
- **`sameAs`** strengthens entity association between AI Scout Co and CalTech Web in Google's Knowledge Graph
- **`potentialAction`** on WebSite schema signals to Google that booking a call is the primary action for the site, eligible for direct action links in branded search
[2026-03-14 16:05:44] Run #8 finished
[2026-03-14 16:05:49] Run #9 starting (model: sonnet)

## Run 14: Entity Graph @id, hasOfferCatalog, areaServed, mainEntityOfPage
**Commit:** d865857 | Deployed to Vercel (Ready)

### Changes

**`app/layout.tsx` — Organization + WebSite schema:**
- Added `"@id": "https://aiscoutco.com/#organization"` to Organization — stable entity identifier Google uses to match the business across pages and external signals
- Added `"@id": "https://aiscoutco.com/#brandon-hopkins"` and `url: "https://aiscoutco.com/about"` to `founder` object — links the founder entity to the About page
- Added `hasOfferCatalog` with 3 `Offer` entries (Discovery, Build, Support), each with a `@id`-linked Service — declares all services directly from the root Organization entity
- Added `"@id": "https://aiscoutco.com/#website"` to WebSite — stable website identifier
- Added `publisher: { "@id": "https://aiscoutco.com/#organization" }` to WebSite — links site to its owning organization

**`app/about/layout.tsx` — Person schema:**
- Added `"@id": "https://aiscoutco.com/#brandon-hopkins"` — matches the @id used in root Organization founder
- Added `mainEntityOfPage: { "@type": "ProfilePage", "@id": "https://aiscoutco.com/about" }` — declares the About page as the authoritative source for Brandon's entity
- Updated `worksFor` to reference `"@id": "https://aiscoutco.com/#organization"` — links Person to Organization by identifier

**`app/services/discovery/page.tsx`, `build/page.tsx`, `support/page.tsx` — Service schemas:**
- Added `"@id"` to each Service (`#service` fragment on their canonical URL)
- Added `areaServed: "US"` to each Service — signals national geographic coverage
- Updated `provider` in each to reference `"@id": "https://aiscoutco.com/#organization"`

| File | Change |
|---|---|
| `app/layout.tsx` | Organization `@id`, `founder.url`, `hasOfferCatalog` (3 services); WebSite `@id` + `publisher` |
| `app/about/layout.tsx` | Person `@id`, `mainEntityOfPage`, `worksFor @id` |
| `services/discovery/page.tsx` | Service `@id` + `areaServed: "US"` + `provider @id` |
| `services/build/page.tsx` | Service `@id` + `areaServed: "US"` + `provider @id` |
| `services/support/page.tsx` | Service `@id` + `areaServed: "US"` + `provider @id` |

Key wins:
- **`@id` entity graph** is the highest-impact structural SEO improvement remaining. Google uses `@id` to stitch entities across pages — the Organization, Person (Brandon), WebSite, and three Services are now a fully connected graph rather than isolated fragments
- **`hasOfferCatalog`** on Organization declares all services at the root level, improving Knowledge Panel completeness
- **`areaServed: "US"`** on Service schemas targets national reach queries
- **`mainEntityOfPage`** on Person schema declares the About page as the canonical page for Brandon's entity
**Run 14 complete** — `d865857` | Deployed (Ready)

| File | Change |
|---|---|
| `app/layout.tsx` | Organization `@id` + `hasOfferCatalog` (3 services) + `founder.url`; WebSite `@id` + `publisher` |
| `app/about/layout.tsx` | Person `@id` + `mainEntityOfPage` + `worksFor @id` |
| `services/discovery/page.tsx` | Service `@id` + `areaServed: "US"` + `provider @id` |
| `services/build/page.tsx` | Service `@id` + `areaServed: "US"` + `provider @id` |
| `services/support/page.tsx` | Service `@id` + `areaServed: "US"` + `provider @id` |

Key wins:
- **Entity graph via `@id`** — Organization, Person, WebSite, and all three Services are now linked by stable identifiers Google can traverse across pages, improving Knowledge Panel signals and entity association confidence
- **`hasOfferCatalog`** on Organization declares the full service catalog from the root, making it visible without visiting individual service pages
- **`areaServed: "US"`** on all Service schemas targets national-reach queries
- **`mainEntityOfPage`** declares the About page as the authoritative source for Brandon's person entity
[2026-03-14 16:09:25] Run #9 finished
[2026-03-14 16:09:30] Run #10 starting (model: sonnet)

## Run 15: Keywords on Content Pages, Entity Graph Completions, Homepage WebPage Schema
**Commit:** 95a7b06 | Deployed to Vercel (Ready)

### Changes

**`keywords` metadata added to 4 content pages (previously only service pages had it):**
- `app/about/layout.tsx` — "Brandon Hopkins, AI consultant, AI Scout Co founder, autonomous AI agents, workflow automation expert, AI consulting"
- `app/how-it-works/layout.tsx` — "AI automation process, how AI consulting works, AI implementation steps, automation discovery, AI deployment process, AI system development"
- `app/case-study/layout.tsx` — "AI automation case study, DiamondLinks, AI consulting results, automated reporting system, AI ROI, $85000 savings, workflow automation results"
- `app/contact/layout.tsx` — "free AI discovery call, AI consultation, book AI consultant, automation discovery session, AI strategy session, free AI audit"

**Entity graph `@id` completions:**
- `app/how-it-works/layout.tsx` WebPage: `isPartOf` updated from `{ "@type": "WebSite", ... }` to `{ "@id": "https://aiscoutco.com/#website" }` — properly links to the WebSite entity
- `app/contact/layout.tsx` ContactPage: same `isPartOf` fix
- `app/case-study/layout.tsx` Article: `author` updated from plain Person object to `{ "@id": "https://aiscoutco.com/#brandon-hopkins" }` — links to the Person entity

**`app/page.tsx` — homepage WebPage schema:**
- Added `WebPage` JSON-LD with `@id: "https://aiscoutco.com/"`, `isPartOf: { "@id": "#website" }`, `about: { "@id": "#organization" }`, and `inLanguage: "en-US"`
- Homepage is now a node in the entity graph, linking to the WebSite and Organization entities

| File | Change |
|---|---|
| `app/about/layout.tsx` | `keywords` metadata |
| `app/how-it-works/layout.tsx` | `keywords` metadata + `isPartOf @id` fix |
| `app/case-study/layout.tsx` | `keywords` metadata + Article `author @id` fix |
| `app/contact/layout.tsx` | `keywords` metadata + `isPartOf @id` fix |
| `app/page.tsx` | Homepage `WebPage` JSON-LD schema |

[2026-03-14] Run #15 finished
**Run 15 complete** — `95a7b06` | Deployed (Ready)

| File | Change |
|---|---|
| `about/layout.tsx` | `keywords` metadata added |
| `how-it-works/layout.tsx` | `keywords` metadata + `isPartOf` → `{ "@id": "https://aiscoutco.com/#website" }` |
| `case-study/layout.tsx` | `keywords` metadata + Article `author` → `{ "@id": "https://aiscoutco.com/#brandon-hopkins" }` |
| `contact/layout.tsx` | `keywords` metadata + `isPartOf` → `{ "@id": "https://aiscoutco.com/#website" }` |
| `app/page.tsx` | New `WebPage` JSON-LD with `@id`, `isPartOf`, `about`, `inLanguage` |

Key wins:
- **`keywords` on all content pages** — every page now has keyword metadata, completing coverage across the full site
- **`isPartOf @id`** on how-it-works and contact completes those pages' place in the WebSite entity graph
- **Article `author @id`** — Google can now traverse the graph from the case study article directly to Brandon's Person entity and back to the Organization, rather than seeing a disconnected Person object
- **Homepage `WebPage` schema** — the root URL is now a first-class node in the entity graph, linking to both the WebSite and Organization entities
[2026-03-14 16:13:27] Run #10 finished
[2026-03-14 16:13:32] Run #11 starting (model: sonnet)

## Run 16: ProfessionalService Type, WebPage @id Completions, Entity Graph
**Commit:** fdca4ac | Deployed to Vercel (Ready)

### Changes

**`app/layout.tsx` — Organization `@type` upgrade:**
- Changed `"@type": "Organization"` to `"@type": ["Organization", "ProfessionalService"]`
- Declares AI Scout Co as a professional service provider; Google uses `ProfessionalService` for Knowledge Panel enhancements and local/vertical search features

**`app/about/layout.tsx` — WebPage schema added:**
- Added `WebPage` JSON-LD with `@id: "https://aiscoutco.com/about#webpage"`, `mainEntity: { "@id": "#brandon-hopkins" }`, `isPartOf: { "@id": "#website" }`, `inLanguage: "en-US"`
- The About page now has a proper WebPage node in the entity graph, linking the page to both the Person entity (Brandon) and the WebSite entity

**`app/how-it-works/layout.tsx` — WebPage `@id` + `inLanguage`:**
- Added `"@id": "https://aiscoutco.com/how-it-works#webpage"` and `inLanguage: "en-US"` to the existing WebPage schema
- Page is now a stable node in the entity graph

**`app/case-study/layout.tsx` — Article `@id`:**
- Added `"@id": "https://aiscoutco.com/case-study#article"` to the Article schema
- The case study article is now a stable entity Google can resolve by identifier

**`app/contact/layout.tsx` — ContactPage `@id` + `inLanguage`:**
- Added `"@id": "https://aiscoutco.com/contact#contactpage"` and `inLanguage: "en-US"` to the ContactPage schema
- Page is now a stable node in the entity graph

| File | Change |
|---|---|
| `app/layout.tsx` | Organization `@type`: `"Organization"` → `["Organization", "ProfessionalService"]` |
| `app/about/layout.tsx` | New `WebPage` JSON-LD with `@id`, `mainEntity`, `isPartOf`, `inLanguage` |
| `app/how-it-works/layout.tsx` | WebPage: added `@id` + `inLanguage: "en-US"` |
| `app/case-study/layout.tsx` | Article: added `@id` |
| `app/contact/layout.tsx` | ContactPage: added `@id` + `inLanguage: "en-US"` |

[2026-03-14] Run #16 finished
**Run 16 complete** — `fdca4ac` | Deployed to Vercel (Ready)

| File | Change |
|---|---|
| `app/layout.tsx` | Organization `@type`: `"Organization"` → `["Organization", "ProfessionalService"]` |
| `app/about/layout.tsx` | New `WebPage` JSON-LD with `@id`, `mainEntity: #brandon-hopkins`, `isPartOf: #website`, `inLanguage` |
| `app/how-it-works/layout.tsx` | WebPage: added `@id` + `inLanguage: "en-US"` |
| `app/case-study/layout.tsx` | Article: added `@id` |
| `app/contact/layout.tsx` | ContactPage: added `@id` + `inLanguage: "en-US"` |

Key wins:
- **`ProfessionalService` type** on Organization enables Google's professional service features in Knowledge Panels and vertical search
- **About page WebPage schema** completes the last content page missing a WebPage node, with `mainEntity` pointing directly to Brandon's Person entity
- **`@id` on all remaining page schemas** completes the entity graph — every page is now a stable, resolvable node linked to the `#website` entity
[2026-03-14 16:21:36] Run #11 finished
[2026-03-14 16:21:41] Run #12 starting (model: sonnet)

## Run 17: WebPage Schema on Service Pages, Footer Nav Landmarks, Skip Navigation Link
**Commit:** 24e9177 | Deployed to Vercel (Ready)

### Changes

**WebPage JSON-LD added to all three service pages (previously missing from entity graph):**
- `app/services/discovery/page.tsx` — WebPage `@id: "https://aiscoutco.com/services/discovery#webpage"`, `isPartOf: { "@id": "#website" }`, `about: { "@id": "#service" }`, `inLanguage: "en-US"`
- `app/services/build/page.tsx` — WebPage `@id: "https://aiscoutco.com/services/build#webpage"`, same pattern
- `app/services/support/page.tsx` — WebPage `@id: "https://aiscoutco.com/services/support#webpage"`, same pattern
- All three service pages are now stable nodes in the entity graph, each linked to the WebSite entity and their respective Service entity via `about`

**`components/Footer.tsx` — footer nav semantic HTML:**
- Services column: `<div>` → `<nav aria-label="Footer services">` — adds a navigation landmark for screen readers and Google's structural analysis
- Company column: `<div>` → `<nav aria-label="Footer company">` — same improvement

**`app/layout.tsx` — skip navigation link:**
- Added visually hidden skip link (`<a href="#main-content">Skip to main content</a>`) before Navbar, visible on keyboard focus via Tailwind `sr-only focus:not-sr-only` pattern
- Added `id="main-content"` to the `<main>` element — required target for the skip link
- Improves keyboard navigation accessibility and Lighthouse accessibility score

| File | Change |
|---|---|
| `app/services/discovery/page.tsx` | WebPage JSON-LD with `@id`, `isPartOf`, `about`, `inLanguage` |
| `app/services/build/page.tsx` | WebPage JSON-LD with `@id`, `isPartOf`, `about`, `inLanguage` |
| `app/services/support/page.tsx` | WebPage JSON-LD with `@id`, `isPartOf`, `about`, `inLanguage` |
| `components/Footer.tsx` | Services and Company columns: `<div>` → `<nav aria-label>` |
| `app/layout.tsx` | Skip navigation link + `id="main-content"` on `<main>` |

[2026-03-14] Run #17 finished
## Run 17 Complete — `24e9177` | Deployed (Ready)

| File | Change |
|---|---|
| `services/discovery/page.tsx` | WebPage JSON-LD with `@id`, `isPartOf: #website`, `about: #service`, `inLanguage` |
| `services/build/page.tsx` | WebPage JSON-LD — same pattern |
| `services/support/page.tsx` | WebPage JSON-LD — same pattern |
| `components/Footer.tsx` | Services + Company columns: `<div>` → `<nav aria-label>` |
| `app/layout.tsx` | Skip navigation link + `id="main-content"` on `<main>` |

Key wins:
- **Service page WebPage nodes** complete the entity graph — all 10 pages on the site now have a `WebPage` schema with `@id` linked to the `#website` entity, forming a fully connected graph Google can traverse
- **Footer nav landmarks** give screen readers (and Google's crawler) proper navigation landmarks for the footer link columns
- **Skip nav link** improves Lighthouse accessibility score and keyboard navigation conformance
[2026-03-14 16:26:24] Run #12 finished
[2026-03-14 16:26:29] Run #13 starting (model: sonnet)

## Run 18: BreadcrumbList on Legal Pages, Review Entity @id, Article Schema, Sitemap Dates
**Commit:** 61c22ee | Deployed to Vercel (Ready)

### Changes

**`app/privacy-policy/layout.tsx` — new file:**
- Added `WebPage` JSON-LD with `@id: "https://aiscoutco.com/privacy-policy#webpage"`, `isPartOf: { "@id": "#website" }`, `inLanguage: "en-US"`
- Added `BreadcrumbList` with Home → Privacy Policy
- Completes full-site structured data coverage; privacy-policy was the last page without any JSON-LD

**`app/terms-of-service/layout.tsx` — new file:**
- Added `WebPage` JSON-LD with `@id: "https://aiscoutco.com/terms-of-service#webpage"`, `isPartOf: { "@id": "#website" }`, `inLanguage: "en-US"`
- Added `BreadcrumbList` with Home → Terms of Service
- Completes full-site BreadcrumbList coverage; every page now has a breadcrumb schema

**`app/case-study/layout.tsx` — Article + Review schema improvements:**
- Article: added `articleSection: "Case Study"` and `keywords` array — makes the Article's topical focus machine-readable
- Article: `publisher` updated from inline Organization object to `{ "@id": "https://aiscoutco.com/#organization" }` — links to the root entity
- Review: added `"@id": "https://aiscoutco.com/case-study#review"` — stable identifier for the review entity
- Review: `itemReviewed` updated to `{ "@type": "Service", "@id": "https://aiscoutco.com/services/build#service", ... }` — links the review to the actual Custom AI System Development service entity in the graph
- Review: `provider` in `itemReviewed` updated to `{ "@id": "https://aiscoutco.com/#organization" }` — uses entity reference
- Review: `publisher` updated to `{ "@id": "https://aiscoutco.com/#organization" }`

**`app/sitemap.ts` — static lastModified dates:**
- Replaced `new Date()` (current date on every build) with static dates: `LAUNCH = new Date("2026-03-01")` for homepage and legal pages, `UPDATED = new Date("2026-03-14")` for all content and service pages
- Prevents Google from seeing every crawl as a fresh modification, which dilutes freshness signals

| File | Change |
|---|---|
| `app/privacy-policy/layout.tsx` | New: WebPage `@id` + BreadcrumbList |
| `app/terms-of-service/layout.tsx` | New: WebPage `@id` + BreadcrumbList |
| `app/case-study/layout.tsx` | Article: `articleSection`, `keywords`, `publisher @id`; Review: `@id`, `itemReviewed @id`, entity @id refs |
| `app/sitemap.ts` | Static `lastModified` dates (LAUNCH + UPDATED) |

Key wins:
- **Full-site BreadcrumbList coverage** — every page on the site now has a `BreadcrumbList` schema, completing navigation structured data
- **Full-site WebPage coverage** — privacy-policy and terms-of-service are now nodes in the entity graph, linked to `#website`
- **Review → Service entity link** — Google can now traverse from the DiamondLinks review directly to the `Custom AI System Development` service entity, strengthening the review's impact on the service's entity signals
- **Sitemap static dates** — honest `lastModified` values that reflect actual content changes, not build timestamps
[2026-03-14] Run #18 finished
**Run 18 complete** — `61c22ee` | Deployed (Ready)

| File | Change |
|---|---|
| `app/privacy-policy/layout.tsx` | New: WebPage `@id` + BreadcrumbList |
| `app/terms-of-service/layout.tsx` | New: WebPage `@id` + BreadcrumbList |
| `app/case-study/layout.tsx` | Article: `articleSection`, `keywords`, `publisher @id`; Review: `@id`, `itemReviewed @id`, entity refs |
| `app/sitemap.ts` | Static `lastModified` dates |

Key wins:
- **Full-site BreadcrumbList** — every page now has a BreadcrumbList schema; privacy-policy and terms-of-service were the only gaps
- **Full-site WebPage graph** — both legal pages are now nodes in the entity graph linked to `#website`
- **Review entity link** — the DiamondLinks Review now points directly to the Custom AI System Development service entity via `@id`, letting Google traverse from review → service → organization
- **Sitemap dates** — static dates replace `new Date()` so Google sees honest freshness signals rather than "modified today on every build"
[2026-03-14 16:33:32] Run #13 finished
[2026-03-14 16:33:37] Run #14 starting (model: sonnet)

## Run 19: FAQ Contextual Links, Case Study Internal Linking
**Commit:** 738c3a7 | Deployed to Vercel (Ready)

### Changes

**`app/page.tsx` — homepage FAQ contextual links:**
- Added `import React` default import (required for `React.ReactNode` type)
- Updated `FAQItem` component: `answer` prop type changed from `string` to `React.ReactNode`
- Added `faqNodes` module-level map providing link-enhanced JSX answers for 2 FAQ items:
  - Index 3 ("Will this replace my employees?"): "DiamondLinks case study" now links to `/case-study`
  - Index 6 ("Can I see a demo or example?"): "DiamondLinks case study" now links to `/case-study`
- FAQ render loop updated to use `faqNodes[i] ?? faq.a` — enhanced when available, plain string fallback for schema
- JSON-LD FAQPage schema unchanged (still uses plain `faq.a` strings — schema text is clean)

**`app/case-study/page.tsx` — case study contextual + CTA linking:**
- "What We Built" intro paragraph: "custom AI system" now links to `/services/build` — first contextual link from the case study body to the build service
- CTA section: added "Explore Custom AI Systems" link to `/services/build` alongside existing discovery and how-it-works links — the case study CTA now covers the full service journey

| File | Change |
|---|---|
| `app/page.tsx` | `FAQItem` accepts `ReactNode`; `faqNodes` map adds case study links in 2 FAQ answers |
| `app/case-study/page.tsx` | "custom AI system" in body links to `/services/build`; `/services/build` added to CTA |

Key wins:
- **FAQ internal links** — two homepage FAQ answers that mention "DiamondLinks case study" now link directly to `/case-study`, turning name-drops into crawlable anchor-text links
- **Case study → build service link** — Google can now traverse from the case study (which demonstrates the build service) directly to the `/services/build` page via a descriptive anchor "custom AI system"
- **Case study CTA completeness** — the bottom-of-page CTA now surfaces all three logical next steps: `/contact`, `/how-it-works`, `/services/discovery`, and `/services/build`
[2026-03-14] Run #19 finished
