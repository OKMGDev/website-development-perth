// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.websitedevelopmentperth.com.au',
  trailingSlash: 'always',
  adapter: vercel(),
  integrations: [
    sitemap({
      filter: (page) =>
        !page.includes('/thank-you/') &&
        !/\/work\/.+/.test(new URL(page).pathname),
    }),
  ],
  image: {
    domains: ['cdn.prod.website-files.com'],
  },
});
