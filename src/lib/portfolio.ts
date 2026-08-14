import portfolioData from '../data/portfolio.json';

export type PortfolioItem = (typeof portfolioData.items)[number];

const LABEL_OVERRIDES: Record<string, string> = {
  ecommerce: 'E‑commerce',
  website: 'Website',
};

export function formatFacetLabel(slug: string): string {
  if (LABEL_OVERRIDES[slug]) return LABEL_OVERRIDES[slug];
  return slug.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());
}

export function getPortfolioItems(): PortfolioItem[] {
  return portfolioData.items;
}

export function getPortfolioItem(id: string): PortfolioItem | undefined {
  return portfolioData.items.find((item) => item.id === id);
}

export function getFeaturedPortfolio(limit = 3): PortfolioItem[] {
  const featured = portfolioData.items.filter((item) => item.featured);
  if (featured.length >= limit) return featured.slice(0, limit);
  return portfolioData.items.slice(0, limit);
}

/** Top projects using the Webflow "Order on work page" value. */
export function getPortfolioByOrder(limit = 5): PortfolioItem[] {
  return [...portfolioData.items]
    .sort((a, b) => (a.order ?? 9999) - (b.order ?? 9999) || a.title.localeCompare(b.title))
    .slice(0, limit);
}

export function scrubAgencyMentions(input: string): string {
  if (!input) return input;
  return input
    .replace(/\bOKMG's\b/gi, 'Our')
    .replace(/\bOKMG was\b/gi, 'We were')
    .replace(/\bOKMG were\b/gi, 'We were')
    .replace(/\bOKMG is\b/gi, 'We are')
    .replace(/\bOKMG are\b/gi, 'We are')
    .replace(/\bOKMG has\b/gi, 'We have')
    .replace(/\bOKMG have\b/gi, 'We have')
    .replace(/\bOKMG partnered\b/gi, 'We partnered')
    .replace(/\bOKMG delivered\b/gi, 'We delivered')
    .replace(/\bOKMG rebuilt\b/gi, 'We rebuilt')
    .replace(/\bOKMG built\b/gi, 'We built')
    .replace(/\bOKMG developed\b/gi, 'We developed')
    .replace(/\bOKMG designed\b/gi, 'We designed')
    .replace(/\bOKMG created\b/gi, 'We created')
    .replace(/\bOKMG took\b/gi, 'We took')
    .replace(/\bOKMG undertook\b/gi, 'We undertook')
    .replace(/\bOKMG focused\b/gi, 'We focused')
    .replace(/\bOKMG enables\b/gi, 'We enable')
    .replace(/\bOKMG successfully\b/gi, 'We successfully')
    .replace(/\bOKMG continues\b/gi, 'We continue')
    .replace(/\bOKMG worked\b/gi, 'We worked')
    .replace(/\bOKMG provided\b/gi, 'We provided')
    .replace(/\bas a (?:long-term )?marketing partner, OKMG\b/gi, 'As their marketing partner, we')
    .replace(/\bby OKMG\b/gi, '')
    .replace(/\bwith OKMG\b/gi, 'with our team')
    .replace(/\bOKMG\b/gi, 'our team')
    .replace(/\s{2,}/g, ' ')
    .replace(/\s+([.,;:])/g, '$1')
    .trim();
}

export function getPortfolioFacets() {
  const categories = portfolioData.facets?.categories ?? [];
  return {
    categories: categories.map((id) => ({ id, label: formatFacetLabel(id) })),
  };
}
