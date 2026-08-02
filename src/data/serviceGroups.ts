export type ServiceGroupId = 'build' | 'commerce' | 'improve' | 'grow';

export interface ServiceGroup {
  id: ServiceGroupId;
  title: string;
  description: string;
  serviceIds: string[];
}

/** Presentation groups for /services/ — URLs stay flat under /services/[slug]/. */
export const serviceGroups: ServiceGroup[] = [
  {
    id: 'build',
    title: 'Build a new site',
    description: 'New websites and apps — chosen by platform and complexity, not a one-size theme.',
    serviceIds: [
      'custom-website-design',
      'wordpress-development',
      'webflow-development',
      'drupal-development',
      'web-application-development',
    ],
  },
  {
    id: 'commerce',
    title: 'Sell online',
    description: 'Commerce builds with clear merchandising, checkout and ops fit for Australian retailers.',
    serviceIds: ['shopify-development', 'woocommerce-development'],
  },
  {
    id: 'improve',
    title: 'Improve what you have',
    description: 'Redesign, campaign pages, UX work and platform moves — without starting from zero unless you need to.',
    serviceIds: [
      'website-redesign',
      'landing-page-design',
      'ux-ui-design',
      'website-migration',
    ],
  },
  {
    id: 'grow',
    title: 'Run & grow',
    description: 'Keep the site healthy after launch — search visibility and practical ongoing support.',
    serviceIds: ['seo-services', 'website-maintenance'],
  },
];

/** Homepage featured set: one clear path from each major job. */
export const featuredServiceIds = [
  'custom-website-design',
  'wordpress-development',
  'webflow-development',
  'shopify-development',
  'website-redesign',
  'seo-services',
] as const;
