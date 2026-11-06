export type PricingPackage = {
  id: string;
  name: string;
  summary: string;
  priceFrom: number;
  priceTo?: number;
  audience: string;
  includes: string[];
  relatedService?: string;
};

export type OngoingItem = {
  id: string;
  name: string;
  summary: string;
  priceFrom: number;
  billingPeriod: 'month' | 'hour';
  relatedService?: string;
};

/** Build packages — “from” prices in AUD, exclusive of GST. */
export const buildPackages: PricingPackage[] = [
  {
    id: 'starter',
    name: 'Starter website',
    summary: 'Up to 5 pages for a clear offer, proof and enquiry path.',
    priceFrom: 3000,
    audience: 'Sole traders, tradies and small professional practices getting online properly.',
    includes: ['Up to 5 pages', 'Mobile-ready layout', 'Contact form', 'Basic on-page SEO'],
    relatedService: 'custom-website-design',
  },
  {
    id: 'small-business',
    name: 'Small business custom',
    summary: 'Up to 10 pages with room for services, proof and local context.',
    priceFrom: 5500,
    audience: 'Retail, hospitality and service businesses that need more than a brochure.',
    includes: ['Up to 10 pages', 'Custom templates', 'Content modelling', 'Analytics events'],
    relatedService: 'custom-website-design',
  },
  {
    id: 'webflow-wordpress',
    name: 'Custom Webflow or WordPress build',
    summary: 'Design-led or editor-friendly CMS builds with a proper content model.',
    priceFrom: 7500,
    audience: 'Teams that will publish often, or need design control without fighting a theme.',
    includes: ['CMS setup', 'Key templates', 'Editor training notes', 'SEO foundations'],
    relatedService: 'webflow-development',
  },
  {
    id: 'landing-page',
    name: 'Landing page / campaign',
    summary: 'One offer, one CTA, tracking that matches your ads.',
    priceFrom: 3000,
    audience: 'Campaigns, product launches and lead-gen offers that need a focused page.',
    includes: ['Single conversion path', 'Proof block', 'Form or booking CTA', 'UTM-ready tracking'],
    relatedService: 'landing-page-design',
  },
  {
    id: 'redesign',
    name: 'Redesign / rebuild',
    summary: 'Clearer structure and conversion while protecting what already works.',
    priceFrom: 6000,
    audience: 'Businesses with an ageing site that still has traffic, content or rankings to keep.',
    includes: ['IA refresh', 'Template rebuild', 'Redirect map', 'Content migration plan'],
    relatedService: 'website-redesign',
  },
  {
    id: 'ecommerce',
    name: 'Ecommerce — Shopify or WooCommerce',
    summary: 'Product templates, checkout clarity and ops fit for Australian selling.',
    priceFrom: 9000,
    audience: 'Retailers and product brands ready to sell online or fix a messy store.',
    includes: ['Catalogue templates', 'Checkout polish', 'Payments & shipping setup', 'Launch checklist'],
    relatedService: 'shopify-development',
  },
  {
    id: 'web-app',
    name: 'Custom web app / booking / portal',
    summary: 'Workflows, booking systems and client portals scoped before build.',
    priceFrom: 12000,
    audience: 'Businesses that need more than a marketing site — bookings, portals or tools.',
    includes: ['Discovery & scope', 'Auth & roles as needed', 'Core workflows', 'Handover docs'],
    relatedService: 'web-application-development',
  },
  {
    id: 'enterprise',
    name: 'Enterprise / multi-location with integrations',
    summary: 'Multi-site or multi-location builds with CRM, booking or inventory connections.',
    priceFrom: 15000,
    priceTo: 20000,
    audience: 'Multi-location, franchise and larger Perth operators with integration needs.',
    includes: ['Multi-location IA', 'Integrations', 'Governance-friendly CMS', 'Staged rollout'],
    relatedService: 'web-application-development',
  },
];

export const ongoingPackages: OngoingItem[] = [
  {
    id: 'maintenance',
    name: 'Managed hosting & maintenance',
    summary: 'Updates, backups, monitoring and a monthly allowance for small fixes.',
    priceFrom: 100,
    billingPeriod: 'month',
    relatedService: 'website-maintenance',
  },
  {
    id: 'extra-hours',
    name: 'Extra hours',
    summary: 'Design or development time outside a care plan or fixed project.',
    priceFrom: 80,
    billingPeriod: 'hour',
  },
  {
    id: 'seo-retainer',
    name: 'SEO retainer',
    summary: 'Technical health, intent-led pages and reporting tied to real enquiries.',
    priceFrom: 300,
    billingPeriod: 'month',
    relatedService: 'seo-services',
  },
];

export const priceFactors = [
  {
    title: 'Unique templates, not page count',
    text: 'Home, service, location, article and product layouts each need design, build and QA. Repeating a pattern costs less than inventing a new one.',
  },
  {
    title: 'Content readiness',
    text: 'If copy, photos and logos are not ready, someone writes, crops or finds them. Quotes that assume “content supplied” are incomplete until that is true.',
  },
  {
    title: 'Integrations',
    text: 'A form to your inbox is not the same as CRM, booking, membership or inventory. Each connection needs mapping, testing and an owner when it breaks.',
  },
  {
    title: 'Migrations and redirects',
    text: 'Moving an existing site means URL maps, redirects and staged cutover so you do not lose what already ranks.',
  },
  {
    title: 'Who will edit after launch',
    text: 'WordPress, Webflow, Shopify and custom stacks suit different teams. Platform choice follows how you publish — not a trend.',
  },
];

export const pricingFaqs = [
  {
    question: 'How much does website development cost in Perth?',
    answer:
      'Most marketing and service sites we quote sit between about $3,000 and $20,000 + GST, depending on templates, content labour, integrations and migration risk. Starter brochure sites start from $3,000; ecommerce and custom apps sit higher. Request a quote with your goals and constraints for a figure that matches your scope.',
  },
  {
    question: 'Are these prices inclusive of GST?',
    answer:
      'No. Package figures on this page are “from” prices exclusive of GST. Quotes spell out GST clearly so you can compare apples with apples.',
  },
  {
    question: 'Why do you show “from” prices instead of fixed packages?',
    answer:
      'Because two “10-page” sites are rarely the same job. Unique templates, content writing, integrations and migrations move the number. From prices set a floor; your quote lists what is in and what is out.',
  },
  {
    question: 'What is included in managed hosting and maintenance?',
    answer:
      'From $100/month we cover updates, backups, monitoring and a small monthly allowance for fixes. Larger changes, new sections and campaign pages are quoted as project work so the care plan stays predictable.',
  },
  {
    question: 'Do you build sites for tradies, retail, hospitality and professional services?',
    answer:
      'Yes. The same pricing bands cover tradies and construction, retail and ecommerce, hospitality, professional services and multi-location operators. Industry shape changes the page map — not a mystery multiplier.',
  },
  {
    question: 'How do I get an accurate website cost for my Perth business?',
    answer:
      'Send goals, examples you like, the current site if you have one, and any must-have integrations. We reply with a scoped quote. For the buying drivers in plain English, read the website cost in Perth guide, then use the contact form.',
  },
];

export function formatAud(amount: number): string {
  return new Intl.NumberFormat('en-AU', {
    style: 'currency',
    currency: 'AUD',
    maximumFractionDigits: 0,
  }).format(amount);
}
