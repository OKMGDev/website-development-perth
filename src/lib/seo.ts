import { site } from '../data/site';

export function breadcrumbList(
  items: { name: string; path: string }[]
): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: new URL(item.path, site.url).href,
    })),
  };
}

export function organizationSchema(): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: site.name,
    url: site.url,
    email: site.email,
    telephone: site.phoneHref.replace('tel:', ''),
    address: {
      '@type': 'PostalAddress',
      streetAddress: '608–610 Stirling Hwy',
      addressLocality: 'Mosman Park',
      addressRegion: 'WA',
      postalCode: '6012',
      addressCountry: 'AU',
    },
    areaServed: {
      '@type': 'AdministrativeArea',
      name: 'Perth, Western Australia',
    },
    description: site.tagline,
  };
}

export function websiteSchema(): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: site.name,
    url: site.url,
  };
}

export function serviceSchema(opts: {
  name: string;
  description: string;
  path: string;
  areaServed?: string;
}): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: opts.name,
    description: opts.description,
    url: new URL(opts.path, site.url).href,
    provider: {
      '@type': 'Organization',
      name: site.name,
      url: site.url,
    },
    areaServed: opts.areaServed ?? 'Perth, Western Australia',
  };
}

export function faqSchema(
  faqs: { question: string; answer: string }[]
): Record<string, unknown> | null {
  if (!faqs.length) return null;
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

export function articleSchema(opts: {
  title: string;
  description: string;
  path: string;
  datePublished: string;
  dateModified?: string;
  author?: string;
}): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: opts.title,
    description: opts.description,
    url: new URL(opts.path, site.url).href,
    datePublished: opts.datePublished,
    dateModified: opts.dateModified ?? opts.datePublished,
    author: {
      '@type': 'Person',
      name: opts.author ?? site.name,
    },
    publisher: {
      '@type': 'Organization',
      name: site.name,
      url: site.url,
    },
  };
}
