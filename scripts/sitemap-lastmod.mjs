/**
 * Resolve lastmod dates for sitemap URLs.
 * Blog posts use frontmatter `updated` or `published`.
 * Other content collections and pages use source file mtime.
 */
import { existsSync, readdirSync, readFileSync, statSync } from 'node:fs';
import { join, extname } from 'node:path';

const root = new URL('..', import.meta.url).pathname;

function iso(date) {
  return new Date(date).toISOString();
}

function fileMtime(path) {
  try {
    return iso(statSync(path).mtime);
  } catch {
    return null;
  }
}

function parseFrontmatterDates(filePath) {
  const text = readFileSync(filePath, 'utf8');
  if (!text.startsWith('---')) return null;
  const end = text.indexOf('\n---', 3);
  if (end === -1) return null;
  const fm = text.slice(3, end);
  const updated = fm.match(/^updated:\s*[\'\"]?([0-9T:\-+.Z]+)[\'\"]?\s*$/m);
  const published = fm.match(/^published:\s*[\'\"]?([0-9T:\-+.Z]+)[\'\"]?\s*$/m);
  const raw = updated?.[1] || published?.[1];
  if (!raw) return fileMtime(filePath);
  const d = new Date(raw);
  return Number.isNaN(d.getTime()) ? fileMtime(filePath) : iso(d);
}

function maxIso(dates) {
  const valid = dates.filter(Boolean);
  if (!valid.length) return null;
  return valid.sort().at(-1);
}

function collectContentDates(dir, ext = '.md') {
  const full = join(root, dir);
  if (!existsSync(full)) return {};
  /** @type {Record<string, string>} */
  const map = {};
  for (const name of readdirSync(full)) {
    if (!name.endsWith(ext)) continue;
    const id = name.slice(0, -ext.length);
    const path = join(full, name);
    map[id] = parseFrontmatterDates(path) || fileMtime(path);
  }
  return map;
}

const blogDates = collectContentDates('src/content/blog');
const serviceDates = collectContentDates('src/content/services');
const industryDates = collectContentDates('src/content/industries');
const locationDates = collectContentDates('src/content/locations');

const pageFiles = {
  '/': 'src/pages/index.astro',
  '/about/': 'src/pages/about.astro',
  '/blog/': 'src/pages/blog/index.astro',
  '/contact/': 'src/pages/contact.astro',
  '/faq/': 'src/pages/faq.astro',
  '/industries/': 'src/pages/industries/index.astro',
  '/locations/': 'src/pages/locations/index.astro',
  '/pricing/': 'src/pages/pricing.astro',
  '/privacy/': 'src/pages/privacy.astro',
  '/process/': 'src/pages/process.astro',
  '/services/': 'src/pages/services/index.astro',
  '/why-us/': 'src/pages/why-us.astro',
  '/work/': 'src/pages/work/index.astro',
};

const fallback = iso(new Date());

/**
 * @param {string} pageUrl absolute URL
 * @returns {string} ISO lastmod
 */
export function lastmodForUrl(pageUrl) {
  let pathname;
  try {
    pathname = new URL(pageUrl).pathname;
  } catch {
    return fallback;
  }

  if (pathname === '/blog/' || pathname === '/blog') {
    return maxIso([...Object.values(blogDates), fileMtime(join(root, pageFiles['/blog/']))]) || fallback;
  }

  const blogMatch = pathname.match(/^\/blog\/([^/]+)\/?$/);
  if (blogMatch) {
    return blogDates[blogMatch[1]] || fallback;
  }

  const serviceMatch = pathname.match(/^\/services\/([^/]+)\/?$/);
  if (serviceMatch && !pathname.split('/').filter(Boolean)[2]) {
    return serviceDates[serviceMatch[1]] || fallback;
  }

  const industryMatch = pathname.match(/^\/industries\/([^/]+)\/?$/);
  if (industryMatch) {
    return industryDates[industryMatch[1]] || fallback;
  }

  const locationMatch = pathname.match(/^\/locations\/([^/]+)\/?$/);
  if (locationMatch) {
    return locationDates[locationMatch[1]] || fallback;
  }

  const normalised = pathname.endsWith('/') ? pathname : `${pathname}/`;
  if (normalised === '/') {
    return fileMtime(join(root, pageFiles['/'])) || fallback;
  }

  const pageRel = pageFiles[normalised];
  if (pageRel) {
    return fileMtime(join(root, pageRel)) || fallback;
  }

  // Generic pages under src/pages
  const slug = normalised.replace(/^\/|\/$/g, '');
  const candidates = [
    join(root, 'src/pages', `${slug}.astro`),
    join(root, 'src/pages', slug, 'index.astro'),
  ];
  for (const candidate of candidates) {
    const m = fileMtime(candidate);
    if (m) return m;
  }

  return fallback;
}

// silence unused import lint in some tooling
void extname;
