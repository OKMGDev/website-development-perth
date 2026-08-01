# Product Requirements Document
## websitedevelopmentperth.com.au

**Prepared for:** [Client / Agency internal build]
**Primary keyword focus:** website development Perth
**Reference model:** commercialsolargoldcoast.au (layout, IA and conversion architecture reverse engineered, content and branding original)
**Date:** 23 July 2026

---

## 1. Purpose

Build a new website for a Perth-based web development agency, structured to rank and convert for "website development Perth" and related service, industry and location intent. The site follows the same underlying architecture as the reference site: search-intent landing pages, immediate enquiry paths, proof-led content, and a topical cluster of services, industries and locations linked through a coherent internal structure.

This is not a copy of the reference site's branding, copy or claims. Only the layout logic and conversion system are reused.

---

## 2. Goals

- Rank for "website development Perth" and adjacent terms (web design Perth, web developer Perth, website redesign Perth, e-commerce website Perth)
- Convert organic and paid traffic into quote requests and consultation bookings
- Build a topical cluster (services x industries x locations) that supports long-tail rankings without creating doorway pages
- Establish a scalable page template system the agency can reuse for future client sites

---

## 3. Non-goals

- No fabricated reviews, client logos, awards, statistics or case study results
- No postcode-swapped location pages with duplicate content
- No paid-ad landing pages disguised as organic content
- No scope creep into unrelated services (e.g. print design, branding-only work) unless confirmed by the client

---

## 4. Target audience

- Perth-based small to medium businesses needing a new or redesigned website
- Business owners searching by service type (e.g. "e-commerce website Perth"), by industry (e.g. "website for tradies Perth"), or by suburb (e.g. "web developer Fremantle")
- Secondary audience: businesses comparing agencies (pricing, process, portfolio) before enquiring

---

## 5. Sitemap

### 5.1 Core / index pages (12)

| Page | URL | Purpose |
|---|---|---|
| Home | / | Positioning, proof, primary conversion path |
| Services hub | /services/ | Distribute authority to service pages |
| About | /about/ | Team, credibility, process philosophy |
| Work | /work/ | Project proof, browsable case studies |
| Locations hub | /locations/ | Organise genuine Perth service areas |
| Industries hub | /industries/ | Help visitors self-identify by sector |
| Blog | /blog/ | Informational intent, funnel to services |
| FAQ | /faq/ | Consolidate objections, link to deeper pages |
| Our Process | /process/ | Reduce risk perception, explain delivery |
| Why Us | /why-us/ | Differentiation and trust signals |
| Contact | /contact/ | Multiple low-friction contact paths, primary quote/enquiry conversion point |
| Privacy Policy | /privacy/ | Compliance |

**Changes from earlier draft:**
- **Pricing** removed as a standalone page. Cost-related content (e.g. "How much does a website cost in Perth?") lives in the blog instead, per section 5.5.
- **Compare** removed as a standalone page. Platform comparisons (Shopify vs WooCommerce, Webflow vs WordPress, etc.) move into the blog as articles, not a dedicated sitemap page.
- **Get a Quote** merged into **Contact**. One page now handles both general enquiries and quote requests, using the progressive form's first step (see section 9) to route the enquiry type rather than splitting it across two URLs.


### 5.2 Services (13)

Platform-specific service pages are included as their own pages, since each platform carries genuine, distinct search intent (e.g. "Shopify developer Perth", "Webflow website Perth") rather than being variants of one generic page.

1. Custom Website Design — /services/custom-website-design/
2. WordPress Website Development — /services/wordpress-development/
3. Webflow Website Development — /services/webflow-development/
4. Shopify Website Development — /services/shopify-development/
5. WooCommerce Website Development — /services/woocommerce-development/
6. Drupal Website Development — /services/drupal-development/
7. Web Application Development — /services/web-application-development/
8. Website Redesign — /services/website-redesign/
9. Landing Page Design — /services/landing-page-design/
10. Website Maintenance & Support — /services/website-maintenance/
11. SEO & Website Optimisation — /services/seo-services/
12. UX/UI Design — /services/ux-ui-design/
13. Website Migration — /services/website-migration/

**Note on overlap:** Shopify and WooCommerce are both e-commerce platforms, and Webflow/WordPress/Drupal are all CMS choices. Keep e-commerce and CMS positioning distinct in the copy so a visitor comparing "Shopify vs WooCommerce" doesn't land on two pages that read the same. Handle that decision directly in a blog article (e.g. "Shopify vs WooCommerce" and "Webflow vs WordPress"), which links back to the relevant service pages.

**Note on Migration vs Redesign:** Website Migration is about moving an existing site to a new platform/host with the same or similar design intact (search intent: "move my site off Wix/Squarespace"). Website Redesign is about a visual and UX overhaul, platform aside. Keep the two pages clearly distinct so they don't cannibalise each other in search.

### 5.3 Industries (8)

1. Tradies & Construction — /industries/tradies-construction/
2. Real Estate — /industries/real-estate/
3. Medical & Healthcare — /industries/medical-healthcare/
4. Hospitality & Restaurants — /industries/hospitality-restaurants/
5. Retail & E-commerce — /industries/retail-ecommerce/
6. Professional Services (legal, accounting, finance) — /industries/professional-services/
7. Fitness & Wellness — /industries/fitness-wellness/
8. Education & Childcare — /industries/education-childcare/

### 5.4 Locations (candidate list, ~20, subject to validation)

Perth CBD, Fremantle, Joondalup, Rockingham, Mandurah, Midland, Armadale, Cannington, Osborne Park, Subiaco, Victoria Park, Scarborough, Cottesloe, Morley, Canning Vale, Baldivis, Butler, Wanneroo, Ellenbrook, Malaga

**Important:** Before building all 20, validate each suburb against actual local search volume and genuine service differentiation (e.g. response time, local project history, area-specific FAQs). Merge or drop any suburb that would only ever be a postcode swap of another page. This mirrors Google's guidance against doorway pages built primarily to rank rather than help users.

### 5.5 Blog / resource categories (structure only, articles TBC with client)

- Cost and pricing guides (e.g. "How much does a website cost in Perth?")
- Platform comparisons (e.g. "Shopify vs WooCommerce", "Webflow vs WordPress", custom vs template)
- Industry-specific guides
- SEO and website performance basics
- Process and timeline explainers

**Total indexable pages at launch (estimate): ~57–62**, pending location list validation.

---

## 6. Page template requirements

Each template below needs: one clear primary intent, unique title/meta description, single H1, logical heading hierarchy, breadcrumb, contextual internal links, and one dominant CTA.

| Template | Core purpose |
|---|---|
| Homepage | Positioning, proof, service breadth, primary conversion path |
| Services hub | Organise services, distribute link authority |
| Individual service | Capture high-intent traffic, cover benefits/process/proof |
| Industries hub | Help visitors self-identify by sector |
| Individual industry | Sector pain points matched to relevant service |
| Locations hub | Organise genuine service areas |
| Individual location | Local intent, genuinely differentiated content |
| Work hub | Browsable project proof |
| Case study | Problem, solution, process, measurable result |
| About | Team, philosophy, credentials |
| Contact | Multiple low-friction enquiry paths, multi-step form routes quick enquiry vs quote request |
| FAQ | Objection handling, links to deeper pages |
| Blog article | Informational intent, funnel to service; covers cost/pricing and platform-comparison topics |
| Thank-you page | Confirmation, next action |
| 404 | Recovery via search/navigation/CTA |

---

## 7. Homepage requirements (above the fold)

Must answer within seconds:
- What does the agency build?
- Who is it for?
- Where do they operate (Perth-wide, which suburbs)?
- What outcome does the client get?
- Why trust this agency?
- What should the visitor do next?

Elements: keyword-aligned H1, concise promise, one dominant CTA (leads to Contact, framed as "Get a Quote"), secondary phone/contact CTA, trust indicators near the first decision point, enquiry form visible above the fold on desktop, condensed mobile version.

---

## 8. Proof and trust modules

Only include what can be evidenced by the client:

- Client testimonials (real, sourced)
- Portfolio/project gallery with real outcomes
- Years in operation, projects delivered, industries served (if verifiable)
- Technology/partner logos (e.g. WordPress, Shopify) where genuinely used
- Response time and support commitments

No invented reviews, stats, awards or client logos.

---

## 9. Conversion system

- Single dominant action per page
- Progressive form disclosure (minimal first step: name, email, phone, service interest)
- Separate routing for: quick enquiry, quote request, consultation booking, download request
- Visible phone number and realistic response time expectation
- No fake urgency, no fake scarcity, no preselected consent, no vague form destinations

---

## 10. SEO plan

### 10.1 Principles

- Every indexable page must exist to help a real visitor complete a task, not just to capture a keyword variant
- One page owns one primary search intent; no two pages compete for the same query
- People-first content over word count. No filler, no keyword stuffing, no generic AI-written padding
- When SEO and truthful user value conflict, truthful user value wins

### 10.2 Keyword and intent map

Before writing copy, build a table for every proposed URL covering: page type, primary intent, primary keyword/topic, secondary keywords, funnel stage, required proof, primary CTA, internal links in/out, and cannibalisation risk.

Intent ownership by page type:
- Broad category + Perth-wide → homepage
- Specific service → service page
- Service for a sector → industry page
- Service in a specific suburb → location page
- Cost, comparison, financing, sizing, eligibility → resource page or article
- Real project outcome → case study

Title formulas (adapt, don't force verbatim):
- Homepage: `Website Development Perth | [Benefit or Brand]`
- Service: `[Service] in Perth | [Distinct Benefit]`
- Industry: `[Service] for [Industry] | [Brand]`
- Location: `Website Development in [Suburb] | [Brand]`
- Comparison: `[Option A] vs [Option B] | [Decision Context]`
- Pricing/cost blog article: `Website Cost in Perth | [Pricing Guide]`
- Blog: `[Question or Topic] | [Clear Benefit]`

### 10.3 On-page requirements (every indexable page)

- Unique title tag and meta description
- One H1, logical H2/H3 hierarchy (no heading chosen for visual size alone)
- Human-readable, lowercase, hyphenated URL, consistent trailing-slash convention
- Self-referencing canonical
- Open Graph metadata and social share image
- Breadcrumb trail (visible and marked up)
- Contextual internal links in and out, descriptive anchor text (not generic "learn more")
- Image alt text based on function; empty alt for decorative images
- Clear indexation directive (index/noindex as appropriate)

### 10.4 Location page rules

A suburb page only gets built and indexed if it can genuinely satisfy several of the following, not just a swapped suburb name and population figure:

- Real, verified service coverage in that suburb
- A distinct local introduction connected to the service (not spun from a template)
- Local customer type, business mix, or area-specific web/digital considerations
- A local project, testimonial or photo where available
- Unique local FAQs based on real enquiries
- Genuine nearby-area links
- No fake office, showroom or local team claim where none exists ("servicing [suburb]" not "based in [suburb]")

If a suburb can't clear this bar, merge it into the locations hub rather than publishing a thin page. This is the same guardrail flagged in the sitemap section against doorway pages.

### 10.5 Industry page rules

Each industry page must contain distinct detail on at least several of: typical business workflow, common site/tech constraints, decision-makers, buying objections specific to that sector, and a relevant example or case study. Do not publish an industry page that's a generic service page with the sector name swapped in.

### 10.6 Structured data map

JSON-LD, matched exactly to visible page content (no marking up content the user can't see):

- Homepage: `Organization` (or `LocalBusiness` if there's a real serviced office), `WebSite`
- Service pages: `Service`, `BreadcrumbList`
- Location pages: `Service` with truthful `areaServed`; no fabricated `LocalBusiness` entity per suburb
- Industry pages: `Service`, `BreadcrumbList`
- Blog articles: `Article` or `BlogPosting`
- Case studies: `Article` or `CreativeWork`
- FAQ sections: `FAQPage`, only where questions/answers are genuinely visible on the page
- All nested pages: `BreadcrumbList`

No self-serving aggregate rating markup unless ratings are independently verifiable (e.g. linked Google review count).

### 10.7 Technical SEO

- XML sitemap (or sitemap index) containing only canonical, indexable URLs with accurate `lastmod` dates
- robots.txt referencing the sitemap, managing crawl access (not used as a substitute for noindex)
- Noindex on thank-you pages, internal search results, and any staging/preview URLs
- Redirect all protocol/hostname/case/trailing-slash variants to one canonical
- No orphan pages; every indexable page reachable through crawlable internal links
- No JavaScript-only navigation without real crawlable URLs
- Redirect map required if any content migrates from an existing site (not expected here, as this is a new build)

### 10.8 AI-search readiness

Optimise for genuine usefulness rather than speculative tactics:
- Clear direct-answer summaries and key takeaways on long-form articles
- Accurate entities/terminology, expert authorship where relevant, published/updated dates
- Strong internal linking and crawlable HTML content
- No reliance on llms.txt, mass thin long-tail pages, or duplicated AI-written content as a ranking strategy

### 10.9 Content and E-E-A-T

- Named author and, where relevant, an expert reviewer on articles and guides
- Published and updated dates (updated date only used after a real content revision)
- Primary-source citations for factual, technical or time-sensitive claims
- Real business details (address/service area, phone, ABN) visible in the footer and contact page
- No fabricated statistics, awards, certifications or testimonials anywhere on the site

---

## 11. Technical / performance requirements

### 11.1 Confirmed stack

- **Framework:** Astro (static-first, islands architecture)
- **Hosting/deployment:** Vercel
- **CMS:** None. All content managed as Markdown/MDX in Astro content collections, version-controlled in Git. Content edits go through a developer/agency workflow rather than a client-facing editor.
- **Forms:** Serverless function (Vercel) or a form service (e.g. Formspree, native API route) posting to the CRM

Astro's static-first output suits this site well: most pages (services, industries, locations, blog) are largely stable content, so pre-rendering gives strong Core Web Vitals out of the box. Use islands (client-side hydration) only for interactive pieces like the contact form and any filterable Work/Portfolio grid.

Core Web Vitals targets (75th percentile, per current web.dev guidance):
- LCP ≤ 2.5s
- INP ≤ 200ms
- CLS ≤ 0.1

Build practices: static-generate all indexable pages where possible, compressed/responsive images (Astro's built-in image optimisation), reserved media dimensions, lazy-loaded below-the-fold assets, minimal third-party scripts, semantic HTML, mobile-first testing on real devices, Vercel edge caching for static output.

---

## 12. Analytics and CRM

Event tracking: primary CTA clicks, phone clicks, form starts/completions/abandonment, quote submissions, booking completions, downloads, portfolio interactions.

Lead fields to capture: landing page, referring source, campaign parameters, service interest, industry, location, form type, device, consent status.

Platform: [to be confirmed — GA4 + CRM of choice, e.g. HubSpot, Pipedrive, or client's existing CRM]

---

## 13. Open questions / inputs needed from client

- Confirmed service list and any services to exclude
- Actual portfolio projects, testimonials and metrics available for use
- Confirmed Perth suburbs genuinely serviced (for location page validation)
- Pricing model: fixed packages, ranges, or quote-only
- CRM and analytics tooling
- Branding assets (logo, colours, photography) or need for original photography
- Domain and DNS transfer to Vercel (none expected beyond a new build)

---

## 14. Deliverable stages (recommended build order)

1. Sitemap and IA sign-off (this document)
2. Wireframe-level page specifications
3. Design system (colours, type, components)
4. Copy and metadata per page
5. Astro content collection schemas (services, industries, locations, blog, case studies)
6. Structured data plan
7. Development build
8. QA and Core Web Vitals testing
9. Analytics/CRM integration
10. Launch checklist

---

## 15. Success metrics (first 6 months post-launch)

- Organic visibility for "website development Perth" and core service terms
- Number of quote requests / consultation bookings per month
- Organic sessions to service and location pages
- Core Web Vitals pass rate
- Bounce rate on top landing pages

*(Specific targets to be set once baseline traffic and current rankings, if any, are established.)*