# GEO optimisation plan

**Site:** [websitedevelopmentperth.com.au](https://www.websitedevelopmentperth.com.au)  
**Audited:** 14 August 2026  
**Progress tracker:** [geo-status.md](./geo-status.md) (done / next / later)  
**Verdict:** Traditional SEO is strong. GEO (LLM citation) is only partial. The site is easy to crawl and already writes in an answer-first style, but it is hard for ChatGPT, Perplexity, Gemini, and Google AI Overviews to *name this brand* as the source.

GEO here means: when someone asks an LLM “who builds websites in Perth?”, “how much does a Perth website cost?”, or “WordPress or Webflow for an SME?”, the model should retrieve, quote, and cite this site — not a directory or a competitor with denser facts.

Google’s public position is that AI Overviews reward the same things as Search: unique, well-structured, people-first pages. Extra GEO work is still worth doing for ChatGPT / Perplexity / Bing Copilot, which fetch pages more like a citation engine than a ranking engine.

---

## Current score

| Pillar | Score | Why |
|---|---|---|
| Crawlability (HTML, sitemap, robots) | 78 | Astro static HTML, sitemap, `Allow: /`. No `llms.txt`. |
| Structured data / entity | 55 | Org, Service, FAQ, Article, Breadcrumb. Not LocalBusiness. No logo, `sameAs`, or geo. |
| Answer-first content | 74 | Blog “Direct answer” + takeaways. Service pages have FAQs and process lists. |
| FAQ extractability | 68 | ~150 Q&As with FAQPage schema. Many answers hedge (“it depends”) without a usable range. |
| Original citable data | 40 | Honest buying guides. Almost no tables, bands, or first-party metrics. |
| E-E-A-T / authorship | 28 | Author is the brand name typed as a Person. About page says bios are coming. Empty social. |
| Local entity | 65 | Consistent NAP, 8 suburb pages, Perth areaServed. Schema is still generic Organization. |
| AI-native files | 0 | No `/llms.txt` or `/llms-full.txt`. |

**Overall GEO readiness: ~52 / 100.**  
Traditional on-page SEO (intent map, hubs, no thin doorway pages): ~78 / 100.

---

## What is already working

Keep these. Do not rewrite them into keyword stuffing.

1. **Static HTML.** Astro ships crawlable pages. LLM fetchers do not need to run a SPA.
2. **One intent per URL.** `docs/keyword-map.md` already prevents thin suburb/service clones. Service×location URLs stay `noindex` until they have real local copy — correct for both SEO and GEO.
3. **Answer-first blog.** Posts such as [website cost Perth](/blog/website-cost-perth/) open with a “Direct answer” and a takeaways box — the format models extract.
4. **FAQ corpus + FAQPage JSON-LD** on home, `/faq/`, services, industries, and locations.
5. **Comparison and checklist posts** (Shopify vs WooCommerce, Webflow vs WordPress, redesign / maintenance / local SEO checklists) — high citation potential once facts are tabulated.
6. **Honest proof policy.** No invented testimonials. That is the right E-E-A-T call; it just means proof must be added for real, not fabricated.
7. **NAP in footer and contact.** Phone, email, Mosman Park address are consistent in `src/data/site.ts`.

---

## Gaps that block LLM citations

### 1. Brand identity leak (highest GEO risk)

Case studies on `/work/[id]/` are `noindex` and canonicalised to OKMG URLs. Body copy still originates from OKMG projects (scrubbed in places, not all). Footer and About say WDP is operated by / a showcase of OKMG.

When an LLM is asked for “Perth web design examples”, it will cite **OKMG**, not Website Development Perth. The brand that owns the proof is the brand that gets recommended.

**Fix:** either (a) publish WDP-original case studies with metrics, indexable, canonical to this domain, or (b) make the OKMG relationship explicit in schema (`parentOrganization`) and About, and stop presenting the portfolio as WDP’s own proof until it is rewritten.

### 2. No machine-readable brand graph

`organizationSchema()` in `src/lib/seo.ts` has name, URL, email, phone, PostalAddress, areaServed. It is missing:

- `@type` of `ProfessionalService` or `LocalBusiness` (not only `Organization`)
- `logo` / `image`
- `sameAs` (GBP, LinkedIn, OKMG, any real profiles)
- `geo` (lat/long)
- `parentOrganization` → OKMG
- `founder` / `employee` Person nodes

Article JSON-LD sets `author.@type: Person` with the name “Website Development Perth”. That is invalid entity typing.

### 3. Nothing for AI crawlers specifically

- No `/llms.txt` (emerging convention at [llmstxt.org](https://llmstxt.org/) — a Markdown index of what the site is and which URLs to read).
- `public/robots.txt` allows `User-agent: *` so GPTBot / ClaudeBot / PerplexityBot / Googlebot are not blocked — good — but there is no positive index of canonical facts.

### 4. Answers are not citation-complete

Site FAQ: “How much does a website cost in Perth?” → “It depends… see our pricing guide.”  
A model that only reads the FAQ node has **nothing to quote**. The blog has the real answer but still refuses bands.

GEO-citable answers look like: “A focused Perth brochure site typically sits in the $X–$Y range when content is ready and there are no migrations; commerce and custom apps are quoted separately. See [url].”

Use ranges with assumptions. Do not invent a fake “Perth average”.

### 5. No people

Every blog post: `author: "Website Development Perth"`. About: “Team bios and photography will be added.” Empty `site.social`. Models prefer a named practitioner with a page, photo, and `sameAs` over a brand byline.

### 6. Process is prose, not HowTo

`/process/` is five clear steps — perfect HowTo schema — but only BreadcrumbList is emitted.

---

## Prompt classes to win

Build content and schema so these query types resolve to this site.

| Prompt class | Example | Target URL |
|---|---|---|
| Local vendor | “website developer Perth” / “web design agency Mosman Park” | `/` + LocalBusiness |
| Price | “how much does a website cost in Perth 2026” | `/blog/website-cost-perth/` |
| Platform choice | “Shopify or WooCommerce for a Perth retailer” | `/blog/shopify-vs-woocommerce/` |
| Hiring | “how to choose a web developer in Perth” | `/blog/choose-web-developer-perth/` |
| Sector | “website for tradies Perth” | `/blog/website-for-tradies-guide/` + industry page |
| Platform service | “Webflow developer Perth” | matching `/services/*` |
| Process / time | “how long does a website take” | `/blog/website-project-timeline/` + `/process/` |

---

## Phase 0 — this week (technical GEO)

Ship without waiting for new photography or testimonials.

| # | Action | Where | Outcome |
|---|---|---|---|
| 0.1 | Add `public/llms.txt` and `public/llms-full.txt` | New files | AI crawlers get a one-page brand + URL index |
| 0.2 | Keep robots `Allow: /`; optionally name GPTBot, ClaudeBot, PerplexityBot, Googlebot as allowed | `public/robots.txt` | Explicit crawl grant |
| 0.3 | Upgrade schema to `ProfessionalService` + `parentOrganization` (OKMG), `logo`, `geo` once coords confirmed | `src/lib/seo.ts` | Knowledge-graph identity |
| 0.4 | Fix Article `author` to `Organization` until a real Person exists; add `publisher.logo` | `src/lib/seo.ts` | Valid authorship |
| 0.5 | Emit HowTo JSON-LD on `/process/` | `src/pages/process.astro` | Step extraction |
| 0.6 | Add an “At a glance” definition block at the top of each service (who it’s for, timeline, platforms) | Service markdown + template | First 200 tokens become quotable |

### `llms.txt` outline

```
# Website Development Perth
> Perth website design and development for SMEs. Operated by OKMG. Mosman Park, WA.

Website Development Perth builds conversion-focused sites for Perth businesses
(WordPress, Webflow, Shopify, WooCommerce, custom). Phone 1300 93 6564.
https://www.websitedevelopmentperth.com.au/

## Services
- Custom website design: https://www.websitedevelopmentperth.com.au/services/custom-website-design/
- …

## Guides
- Website cost in Perth: …/blog/website-cost-perth/
- …

## Contact
- …/contact/
```

`llms-full.txt` can concatenate the same plus short factual summaries (NAP, process steps, FAQ answers that are citation-complete).

---

## Phase 1 — two weeks (extractable facts)

Rewrite for quotation, not for more keywords.

1. **FAQ answers must stand alone.** One or two sentences that include a number, range, or binary (yes/no + condition), then a link. Apply to `/faq/`, home FAQs, and the weakest service FAQs first (cost, timeline, platform).
2. **Cost article: add a assumptions table**, e.g. brochure / service-business / ecommerce / custom app — with ranges *or* explicit “quoted after scope” plus what each band includes. Models cite tables.
3. **Platform comparison posts:** ~~add a 6–8 row decision matrix~~ **Done** on `/blog/shopify-vs-woocommerce/` and `/blog/webflow-vs-wordpress/` (who it’s for, editing model, plugins vs native, Perth hosting notes, when we recommend it).
4. **Homepage:** after the H1, add 4 facts in visible HTML (not only schema): office suburb, service area, typical start window (already “2–4 weeks”), typical custom build (already “6–10 weeks” on the custom service FAQ).
5. **Do not index thin service×location pages** until each has unique local facts (precinct, typical client type, nearby suburbs). Thin pages poison GEO the same way they poison SEO.

---

## Phase 2 — month 1 (E-E-A-T people and proof)

1. **Named author** (real staff). Person page or About section: role, years, Perth, `sameAs` LinkedIn. Switch blog `author` off the brand default.
2. **Fill `site.social`** and schema `sameAs` — only live profiles.
3. **Google Business Profile** aligned to the same NAP as `site.ts`. Link it from Contact. (Map-pack is still GBP; GEO uses the same entity.)
4. **Indexable proof.** Client-approved metrics on 3–5 projects, written as WDP case studies, canonical to this domain. Until then, label the gallery as OKMG work shown for capability — do not let models treat scrubbed OKMG case studies as WDP originals.
5. **About rewrite:** who operates the brand, who does the work, where, since when. Remove “bios will be added”.

---

## Phase 3 — month 2–3 (citation magnets)

New pages only where they answer a prompt class that current URLs do not own.

| Content | Why models cite it |
|---|---|
| Perth website cost bands 2026 (table + assumptions) | Unique local numbers |
| Platform decision matrix (already drafted in Phase 1, promote in schema as Article) | Extractable comparison |
| “What we do / don’t do” scope page | Disambiguates from generic agencies |
| Glossary of 15 terms used in quotes (CMS, migration, template vs page, Core Web Vitals) | Definition retrieval |
| Original mini-study if you have it (e.g. form-field drop-off on Perth SME sites you rebuilt) | First-party data beats recaps |

Skip: Wikipedia/Wikidata until the brand has independent coverage. Skip Speakable schema (not used by current LLM crawlers in any meaningful way). Skip review stars unless they are real Google/GBP reviews.

---

## Measurement

There is no Search Console report named “GEO”. Track:

1. **AI Overview / AI Mode presence** for the prompt classes above (manual or a rank tracker that flags AIO citations).
2. **Brand mentions in ChatGPT, Perplexity, Gemini** — monthly: run the prompt classes in a logged-out / fresh session and record whether WDP is named, linked, or omitted.
3. **Referral traffic** from `chatgpt.com`, `perplexity.ai`, `gemini.google.com`, `copilot.microsoft.com` in GA4 (once `PUBLIC_GA4_ID` is live).
4. **Index coverage** of the pages listed in `llms.txt`.
5. **Rich result validity** in Google Rich Results Test after schema changes.

---

## What not to do

- Do not generate suburb pages or FAQs with an LLM and publish unsourced. Models discount circular AI content.
- Do not add fake ratings, awards, or “#1 Perth web designer”.
- Do not block GPTBot / ClaudeBot / PerplexityBot unless legal/compliance requires it.
- Do not chase `llms.txt` as a ranking hack; it is an index, not a backlink.
- Do not duplicate OKMG blog posts onto this domain. That splits the entity further.

---

## Suggested implementation order in this repo

1. `public/llms.txt` + `public/llms-full.txt`
2. `src/lib/seo.ts` — ProfessionalService, logo, parentOrganization, Article author fix, HowTo helper
3. `src/pages/process.astro` — HowTo JSON-LD
4. FAQ copy pass (`src/pages/faq.astro`, home FAQs, cost/timeline service FAQs)
5. Cost + comparison articles — tables
6. About + author (needs real people from the business)
7. Indexable WDP case studies (needs client approval)

Phases 0–1 are code and copy in this repo. Phases 2–3 need owner input (people, GBP, proof).
