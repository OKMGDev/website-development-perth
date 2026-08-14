# Launch checklist

## Pre-deploy

- [ ] Confirm phone and contact details in `src/data/site.ts`
- [ ] Add real testimonials, case metrics and logos only when verified
- [ ] Review privacy policy with business owner
- [ ] Set env vars on Vercel: `RESEND_API_KEY`, `ENQUIRY_TO_EMAIL` (`dev@okmg.com`), `ENQUIRY_CC_EMAIL` (`andy@okmg.com`), `ENQUIRY_FROM_EMAIL`, optional `CRM_WEBHOOK_URL`, `PUBLIC_GA4_ID`
- [ ] Confirm form submission reaches email/CRM from a Vercel preview
- [ ] Spot-check title/meta uniqueness on hubs + 3 services + 2 locations + 1 blog post

## Technical

- [ ] `npm run build` succeeds
- [ ] Trailing-slash canonicals consistent
- [ ] `/sitemap-index.xml` lists only indexable URLs (no thank-you)
- [ ] `robots.txt` references sitemap and disallows thank-you
- [ ] Service×location pages remain `noindex` and outside the sitemap until each combination has genuinely authored local content
- [ ] 404 page recovers to home/services/contact
- [ ] Mobile sticky Call / Get a Quote bar works
- [ ] Core Web Vitals smoke test on home, a service page, contact

## Analytics

- [ ] GA4 property connected via `PUBLIC_GA4_ID`
- [ ] Events fire: `cta_click`, `phone_click`, `form_start`, `form_step`, `form_submit`

## Go-live

- [ ] Push repo to GitHub and connect it in Vercel (Git integration)
- [ ] Confirm Vercel project name is valid (e.g. `website-development-perth`)
- [ ] Attach custom domain `websitedevelopmentperth.com.au` in Vercel
- [ ] DNS cutover
- [ ] Submit sitemap in Google Search Console
- [ ] Request indexing for home + priority service pages

## Local QA notes (completed in build)

- `npm run build` succeeds with Vercel adapter output
- Sitemap excludes `/thank-you/`; thank-you page has `noindex`
- Home includes brand H1, Get a Quote CTA, sticky mobile bar markup, JSON-LD
- Static preview: `npx serve .vercel/output/static` (Astro `preview` is unsupported with the Vercel adapter)
