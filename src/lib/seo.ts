import { site } from '../data/site';

function absoluteUrl(path: string): string {
  return new URL(path, site.url).href;
}

function sameAsUrls(): string[] {
  return [site.googleBusinessUrl, ...Object.values(site.social)].filter((url) => url.length > 0);
}

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
      item: absoluteUrl(item.path),
    })),
  };
}

function postalAddress(office: (typeof site.offices)[number]): Record<string, unknown> {
  return {
    '@type': 'PostalAddress',
    streetAddress: office.streetAddress,
    addressLocality: office.addressLocality,
    addressRegion: office.addressRegion,
    postalCode: office.postalCode,
    addressCountry: office.addressCountry,
  };
}

export function organizationSchema(): Record<string, unknown> {
  const sameAs = sameAsUrls();
  const logoUrl = absoluteUrl(site.logo);

  return {
    '@context': 'https://schema.org',
    '@type': ['ProfessionalService', 'LocalBusiness', 'Organization'],
    name: site.name,
    url: site.url,
    email: site.email,
    telephone: site.phoneHref.replace('tel:', ''),
    image: logoUrl,
    logo: {
      '@type': 'ImageObject',
      url: logoUrl,
    },
    address: site.offices.map(postalAddress),
    location: site.offices.map((office) => ({
      '@type': 'Place',
      name: `${site.name} — ${office.label}`,
      address: postalAddress(office),
      geo: {
        '@type': 'GeoCoordinates',
        latitude: office.geo.latitude,
        longitude: office.geo.longitude,
      },
      hasMap: office.mapsUrl,
    })),
    hasMap: site.offices.map((office) => office.mapsUrl),
    areaServed: {
      '@type': 'AdministrativeArea',
      name: 'Perth, Western Australia',
    },
    description: site.tagline,
    parentOrganization: {
      '@type': 'Organization',
      name: site.parentOrganization.name,
      url: site.parentOrganization.url,
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: site.phoneHref.replace('tel:', ''),
      contactType: 'sales',
      areaServed: 'AU',
      availableLanguage: 'English',
    },
    ...(sameAs.length ? { sameAs } : {}),
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
    url: absoluteUrl(opts.path),
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
  const logoUrl = absoluteUrl(site.logo);
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: opts.title,
    description: opts.description,
    url: absoluteUrl(opts.path),
    datePublished: opts.datePublished,
    dateModified: opts.dateModified ?? opts.datePublished,
    author: {
      '@type': 'Organization',
      name: opts.author ?? site.name,
      url: site.url,
    },
    publisher: {
      '@type': 'Organization',
      name: site.name,
      url: site.url,
      logo: {
        '@type': 'ImageObject',
        url: logoUrl,
      },
    },
  };
}

export function howToSchema(opts: {
  name: string;
  description: string;
  steps: { name: string; text: string }[];
}): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: opts.name,
    description: opts.description,
    step: opts.steps.map((step, index) => ({
      '@type': 'HowToStep',
      position: index + 1,
      name: step.name,
      text: step.text,
    })),
  };
}
