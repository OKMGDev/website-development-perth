# Website Development Perth

Astro + Vercel marketing site for [websitedevelopmentperth.com.au](https://websitedevelopmentperth.com.au).

## Stack

- Astro (static-first, islands for the enquiry form)
- Content collections (Markdown in Git)
- Vercel adapter for the `/api/enquiry/` serverless route
- GA4 + Resend email delivery / optional CRM webhook

## Develop

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

Static preview (Vercel adapter does not support `astro preview`):

```bash
npx serve .vercel/output/static
```

## Deploy (later via GitHub)

Push this repo to GitHub, then import the project in Vercel (Git integration). Set env vars from `.env.example` in the Vercel project settings. No CLI deploy required.

## Content

Edit Markdown under `src/content/` (`services`, `industries`, `locations`, `work`, `blog`). Site-wide contact details live in `src/data/site.ts`.

## Docs

- [Keyword map](docs/keyword-map.md)
- [Launch checklist](docs/launch-checklist.md)
- [PRD](PRD-websitedevelopmentperth.md)
