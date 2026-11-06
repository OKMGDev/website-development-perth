// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel';
import { lastmodForUrl } from './scripts/sitemap-lastmod.mjs';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.websitedevelopmentperth.com.au',
  trailingSlash: 'always',
  adapter: vercel(),
  integrations: [
    sitemap({
      filter: (page) => {
        const pathname = new URL(page).pathname;
        const isServiceLocation = /^\/services\/[^/]+\/[^/]+\/$/.test(pathname);

        return (
          !page.includes('/thank-you/') &&
          !/\/work\/.+/.test(pathname) &&
          !isServiceLocation
        );
      },
      serialize(item) {
        item.lastmod = lastmodForUrl(item.url);
        return item;
      },
    }),
  ],
  image: {
    domains: ['cdn.prod.website-files.com'],
  },
});
