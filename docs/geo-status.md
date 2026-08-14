# GEO work status

**Updated:** 14 August 2026  
**Companion to:** [geo-optimisation-plan.md](./geo-optimisation-plan.md)

The plan is the strategy. This file is what has shipped, what to do next in the repo, and what to focus on once owner input exists.

---

## Done

Shipped in this pass. Do not redo unless copy is wrong.

### Technical (Phase 0)

- `public/llms.txt` and `public/llms-full.txt` — brand + URL index for AI crawlers
- `public/robots.txt` — GPTBot, ClaudeBot, PerplexityBot, Googlebot allowed
- Schema: `ProfessionalService` / `LocalBusiness`, logo, geo, `parentOrganization` (OKMG)
- Article JSON-LD author is Organization until a real Person exists
- HowTo JSON-LD on `/process/`
- Google Business Profile URL in `site.ts`, linked from Contact
- Service×suburb pages stay `noindex` until they have unique local copy

### Extractable facts (Phase 1, partial)

- **At a glance** on all 13 service pages (who, timeline, platforms, best when)
- Decision matrices on [Shopify vs WooCommerce](/blog/shopify-vs-woocommerce/) and [Webflow vs WordPress](/blog/webflow-vs-wordpress/)
- Table styles in `global.css` (including mobile horizontal scroll)

### Pages thickened

- **Why Us** — pillars, who for / not for, vs freelancer / offshore / generic agency
- **About** — operator (OKMG), offices, proof policy (bios still wait on portraits)
- **Process** — expanded steps + glance timelines
- Industry and blog hub leads
- Work hub discloses OKMG capability gallery (detail pages still `noindex` + canonical to OKMG)

### Intentionally not done

- Homepage hero facts — added, then **removed at request**. Those facts live on Process, Why Us, and service glance blocks instead.

---

## Next (repo work, no extra assets)

Do these before asking for people, photos, or case-study approval. Highest GEO return first.

1. **Cost assumptions table** on [website cost Perth](/blog/website-cost-perth/) — brochure / service-business / ecommerce / custom app. Ranges *or* “quoted after scope” plus what each band includes. Models cite tables. Do not invent a fake Perth average.
2. **FAQ answers that stand alone** — `/faq/`, home FAQs, and the weakest service FAQs. One or two sentences with a number, range, or yes/no + condition, then a link. First target: custom website cost FAQ still says “it depends”.
3. **Keep service×location pages `noindex`** until each has unique local facts. Do not mass-generate suburb copy.

That is the rest of Phase 1.

---

## Later (needs owner)

Cannot finish in code alone. Highest brand risk first.

1. **Indexable WDP case studies** — 3–5 client-approved projects, canonical to this domain, with metrics. Until then, keep Work `noindex` and labelled as OKMG capability. This is the largest GEO leak: models will cite OKMG, not this brand.
2. **Named authors** — real staff on About and blog (`author` is still the brand name on every post). Role, years, Perth, LinkedIn.
3. **Team photos** on About. Remove “bios will be added”.
4. **Live social URLs** — `site.social.linkedin` and `facebook` are empty. Only add profiles that exist.
5. **GBP NAP check** — same name, address, phone as `site.ts`.

---

## Later (new content, month 2–3)

Only add pages that own a prompt class current URLs do not.

| Focus | Why |
|---|---|
| Cost bands 2026 (table + assumptions) | Unique local numbers — may land on the existing cost article rather than a new URL |
| “What we do / don’t do” scope page | Disambiguates from generic agencies |
| Glossary of ~15 quote terms (CMS, migration, template vs page, Core Web Vitals) | Definition retrieval |
| Original mini-study if first-party data exists | Beats recap articles |

Skip: fake awards, review stars without real GBP reviews, duplicating OKMG blog posts, Speakable schema, Wikipedia until there is independent coverage.

---

## What to focus on (priority)

If time is limited, ignore everything except this order:

1. **Cost table + FAQ ranges** — the site still refuses numbers. That is the main citation gap left in the repo.
2. **Real proof on this domain** — case studies, or keep Work clearly OKMG. Do not let models treat scrubbed OKMG projects as WDP originals.
3. **Named people** — authors and About. Brand-as-Person is invalid E-E-A-T.
4. **Monthly citation check** — logged-out ChatGPT / Perplexity / Gemini / AI Overviews for: website developer Perth, cost, Shopify vs Woo, Webflow vs WordPress, how to choose a developer. Record named / linked / omitted.
5. **GA4 referrals** from chatgpt.com, perplexity.ai, gemini.google.com once analytics is live.

Do not: invent testimonials, rankings, or dollar bands; generate thin suburb pages; chase `llms.txt` as a ranking hack.
