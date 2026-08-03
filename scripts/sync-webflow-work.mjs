#!/usr/bin/env node
/**
 * Sync OKMG Webflow "Works" CMS items into src/data/portfolio.json
 * Filters to website-related projects only (website/digital builds).
 * Enriches categories/services from the Works CSV export.
 *
 * Env:
 *   WEBFLOW_API_KEY (required)
 *   WEBFLOW_SITE_ID (optional, default OKMG site)
 *   WEBFLOW_WORK_COLLECTION_ID (optional, default Works collection)
 */
import { writeFileSync, mkdirSync, readFileSync, existsSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');

// Load local .env when present (Vercel injects env vars directly).
const envPath = join(root, '.env');
if (existsSync(envPath)) {
  for (const line of readFileSync(envPath, 'utf8').split('\n')) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('#')) continue;
    const eq = trimmed.indexOf('=');
    if (eq === -1) continue;
    const key = trimmed.slice(0, eq);
    const value = trimmed.slice(eq + 1);
    if (!(key in process.env)) process.env[key] = value;
  }
}
const API_KEY = process.env.WEBFLOW_API_KEY;
const COLLECTION_ID = process.env.WEBFLOW_WORK_COLLECTION_ID || '68f9e3f8013dbcd952d085d9';

if (!API_KEY) {
  console.warn('WEBFLOW_API_KEY missing — skipping sync, using existing src/data/portfolio.json');
  process.exit(0);
}

function imgUrl(field) {
  if (!field) return null;
  if (typeof field === 'string') return field;
  return field.url || null;
}

function stripHtml(html) {
  if (!html) return '';
  return html
    .replace(/<[^>]+>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

async function fetchAllLiveItems() {
  const items = [];
  let offset = 0;
  for (;;) {
    const url = `https://api.webflow.com/v2/collections/${COLLECTION_ID}/items/live?limit=100&offset=${offset}`;
    const res = await fetch(url, {
      headers: {
        Authorization: `Bearer ${API_KEY}`,
        Accept: 'application/json',
      },
    });
    if (!res.ok) {
      throw new Error(`Webflow API ${res.status}: ${await res.text()}`);
    }
    const data = await res.json();
    const batch = data.items || [];
    items.push(...batch);
    const total = data.pagination?.total ?? items.length;
    offset += batch.length;
    if (!batch.length || offset >= total) break;
  }
  return items;
}

function mapItem(item) {
  const fd = item.fieldData || {};
  const slug = fd.slug;
  if (!slug) return null;

  const stats = [
    { value: fd['stat-1---value'], title: fd['stat-1---title'] },
    { value: fd['stat-2---value'], title: fd['stat-2---title'] },
    { value: fd['stat-3---value'], title: fd['stat-3---title'] },
  ].filter((s) => s.value && s.title);

  const summary = (fd.summary || '').trim();
  const detailsText = stripHtml(fd['work-details'] || '');

  return {
    id: slug,
    webflowId: item.id,
    title: fd.name || slug,
    excerpt: summary || detailsText.slice(0, 180),
    summary,
    heroImage: imgUrl(fd['main-hero-image']) || imgUrl(fd['homepage-image']),
    homepageImage: imgUrl(fd['homepage-image']) || imgUrl(fd['main-hero-image']),
    hoverLogo: imgUrl(fd['hover-logo']),
    bodyHtml: fd['work-details'] || '',
    contentGroups: [
      {
        html: fd['content-group-1---textbox'] || '',
        images: (fd['content-group-1---image-list'] || []).map(imgUrl).filter(Boolean),
      },
      {
        html: fd['content-group-2---title'] || '',
        images: (fd['content-group-2---image-list'] || []).map(imgUrl).filter(Boolean),
      },
      {
        html: fd['content-group-3---title'] || '',
        images: (fd['content-group-3---image-list'] || []).map(imgUrl).filter(Boolean),
      },
    ].filter((g) => g.html || g.images.length),
    stats,
    projectUrl: fd['project-link-2'] || '',
    okmgUrl: `https://www.okmg.com/work/${slug}`,
    order: typeof fd['order-on-work-page'] === 'number' ? fd['order-on-work-page'] : 9999,
    featured: Boolean(fd['featured-on-work-page']),
    digital: Boolean(fd['digital-page']),
    seo: {
      title: `${fd.name || slug} | Work | Website Development Perth`,
      description: summary || `Case study: ${fd.name || slug}`,
    },
    lastPublished: item.lastPublished || item.lastUpdated || null,
  };
}

function splitCsvTags(raw) {
  if (!raw) return [];
  return raw
    .replace(/\|/g, ';')
    .split(';')
    .map((p) => p.trim().toLowerCase())
    .filter((p) => p && p !== 'all-work');
}

const WEBSITE_RELATED_SERVICES = new Set(['website', 'digital']);

function isWebsiteRelated(item, row) {
  const services = new Set(item.servicesOffered || []);
  if (services.has('website')) return true;
  if (item.digital && (services.has('digital') || services.has('website'))) return true;
  if (item.digital) {
    const blob = `${item.summary || ''} ${item.excerpt || ''} ${item.bodyHtml || ''} ${row?.['Summary Industry Page'] || ''}`.toLowerCase();
    return ['website', 'wordpress', 'shopify', 'webflow', 'e-commerce', 'ecommerce', 'online store', 'web design', 'web redesign', 'custom web'].some(
      (k) => blob.includes(k)
    );
  }
  // CSV-only website tagged items that may not be digital-page
  if (row && splitCsvTags(row['Services offered']).includes('website')) return true;
  return false;
}

function enrichFromCsv(items) {
  const csvPath = join(root, 'src/data/OKMG. - Works - 68f9e3f8013dbcd952d085d9.csv');
  if (!existsSync(csvPath)) {
    console.warn('Works CSV not found — categories/services facets may be empty');
    return items.map((item) => ({
      ...item,
      categories: item.categories || [],
      servicesOffered: (item.servicesOffered || []).filter((s) => WEBSITE_RELATED_SERVICES.has(s)),
    }));
  }

  const text = readFileSync(csvPath, 'utf8').replace(/^\uFEFF/, '');
  const lines = text.split(/\r?\n/).filter(Boolean);
  const headers = parseCsvLine(lines[0]);
  const bySlug = new Map();
  for (const line of lines.slice(1)) {
    const cols = parseCsvLine(line);
    const row = Object.fromEntries(headers.map((h, i) => [h, cols[i] || '']));
    if (row.Slug) bySlug.set(row.Slug, row);
  }

  // Also pull CSV-only website projects missing from API digital filter
  const known = new Set(items.map((i) => i.id));
  for (const [slug, row] of bySlug) {
    if (known.has(slug)) continue;
    if (String(row.Archived).toLowerCase() === 'true') continue;
    if (String(row.Draft).toLowerCase() === 'true') continue;
    const services = splitCsvTags(row['Services offered']);
    if (!services.includes('website') && String(row['Digital page?']).toLowerCase() !== 'true') continue;
    items.push({
      id: slug,
      webflowId: row['Item ID'] || '',
      title: row.Name || slug,
      excerpt: (row.Summary || '').trim(),
      summary: (row.Summary || '').trim(),
      heroImage: (row['Main/Hero image'] || '').split(';')[0].trim() || null,
      homepageImage:
        (row['Homepage image'] || '').split(';')[0].trim() ||
        (row['Main/Hero image'] || '').split(';')[0].trim() ||
        null,
      hoverLogo: (row['Hover logo'] || '').split(';')[0].trim() || null,
      bodyHtml: row['Work details'] || '',
      contentGroups: [],
      stats: [],
      projectUrl: (row['Project Link'] || '').trim(),
      okmgUrl: `https://www.okmg.com/work/${slug}`,
      order: Number(row['Order on work page']) || 9999,
      featured: String(row['Featured on work page']).toLowerCase() === 'true',
      digital: String(row['Digital page?']).toLowerCase() === 'true',
      seo: {
        title: `${row.Name || slug} | Work | Website Development Perth`,
        description: (row.Summary || '').trim() || `Case study: ${row.Name || slug}`,
      },
      lastPublished: row['Published On'] || null,
      categories: [],
      servicesOffered: [],
    });
  }

  return items
    .map((item) => {
      const row = bySlug.get(item.id);
      const servicesOffered = splitCsvTags(row?.['Services offered'] || '')
        .filter((s) => WEBSITE_RELATED_SERVICES.has(s));
      const enriched = {
        ...item,
        categories: splitCsvTags(row?.['Categories/Tags'] || item.categories || []),
        servicesOffered:
          servicesOffered.length > 0
            ? servicesOffered
            : item.digital
              ? ['digital']
              : ['website'],
        projectUrl: item.projectUrl || (row?.['Project Link'] || '').trim(),
        summary: row?.Summary?.trim() || item.summary,
        excerpt: row?.Summary?.trim() || item.excerpt,
      };
      return { enriched, row };
    })
    .filter(({ enriched, row }) => isWebsiteRelated(enriched, row))
    .map(({ enriched }) => enriched);
}

/** Minimal CSV line parser that respects quoted fields. */
function parseCsvLine(line) {
  const out = [];
  let cur = '';
  let inQuotes = false;
  for (let i = 0; i < line.length; i += 1) {
    const ch = line[i];
    if (ch === '"') {
      if (inQuotes && line[i + 1] === '"') {
        cur += '"';
        i += 1;
      } else {
        inQuotes = !inQuotes;
      }
      continue;
    }
    if (ch === ',' && !inQuotes) {
      out.push(cur);
      cur = '';
      continue;
    }
    cur += ch;
  }
  out.push(cur);
  return out;
}

const items = await fetchAllLiveItems();
const websiteProjects = enrichFromCsv(items.map(mapItem).filter(Boolean)).sort(
  (a, b) => a.order - b.order || a.title.localeCompare(b.title)
);

const categories = [...new Set(websiteProjects.flatMap((i) => i.categories || []))].sort();
const services = [...WEBSITE_RELATED_SERVICES].filter((s) =>
  websiteProjects.some((i) => (i.servicesOffered || []).includes(s))
);

const outPath = join(root, 'src/data/portfolio.json');
mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(
  outPath,
  JSON.stringify(
    {
      syncedAt: new Date().toISOString(),
      source: 'okmg-webflow-works',
      sourceCsv: 'OKMG. - Works - 68f9e3f8013dbcd952d085d9.csv',
      filter: 'website-related-only',
      count: websiteProjects.length,
      facets: { categories, services },
      items: websiteProjects,
    },
    null,
    2
  ) + '\n'
);

console.log(`Synced ${websiteProjects.length} website-related projects → src/data/portfolio.json`);
console.log(`Facets: ${categories.length} industries, ${services.length} services (${services.join(', ')})`);
