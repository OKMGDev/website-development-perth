export const offices = [
  {
    id: 'mosman-park',
    label: 'Mosman Park',
    streetAddress: '608–610 Stirling Hwy',
    addressLocality: 'Mosman Park',
    addressRegion: 'WA',
    postalCode: '6012',
    addressCountry: 'AU',
    formatted: '608–610 Stirling Hwy, Mosman Park, Perth WA 6012',
    mapsUrl:
      'https://www.google.com/maps/search/?api=1&query=608-610+Stirling+Hwy%2C+Mosman+Park+WA+6012',
    geo: {
      latitude: -32.00691,
      longitude: 115.75821,
    },
  },
  {
    id: 'perth-cbd',
    label: 'Perth CBD',
    streetAddress: '143 St Georges Terrace',
    addressLocality: 'Perth',
    addressRegion: 'WA',
    postalCode: '6000',
    addressCountry: 'AU',
    formatted: '143 St Georges Terrace, Perth WA 6000',
    mapsUrl:
      'https://www.google.com/maps/search/?api=1&query=143+St+Georges+Terrace%2C+Perth+WA+6000',
    geo: {
      latitude: -31.9547,
      longitude: 115.8566,
    },
  },
] as const;

export const site = {
  name: 'Website Development Perth',
  shortName: '<WDP>',
  tagline: 'Websites that win work for Perth businesses.',
  url: 'https://www.websitedevelopmentperth.com.au',
  phoneDisplay: '1300 93 6564',
  phoneHref: 'tel:1300936564',
  email: 'hello@websitedevelopmentperth.com.au',
  serviceArea: 'Perth and surrounds across Western Australia',
  offices,
  googleBusinessUrl: 'https://share.google/yc1j4NIqjuf5APEAm',
  logo: '/logo.png',
  parentOrganization: {
    name: 'OKMG',
    url: 'https://okmg.com/',
  },
  social: {
    linkedin: '',
    facebook: '',
  },
  defaultOgImage: '/og-default.png',
} as const;

export const navPrimary = [
  { label: 'Services', href: '/services/' },
  { label: 'Industries', href: '/industries/' },
  { label: 'Pricing', href: '/pricing/' },
  { label: 'Work', href: '/work/' },
  { label: 'About', href: '/about/' },
  { label: 'Blog', href: '/blog/' },
  { label: 'Contact', href: '/contact/' },
] as const;

export const footerNav = {
  company: [
    { label: 'About', href: '/about/' },
    { label: 'Our Process', href: '/process/' },
    { label: 'Why Us', href: '/why-us/' },
    { label: 'Pricing', href: '/pricing/' },
    { label: 'Work', href: '/work/' },
    { label: 'Locations', href: '/locations/' },
    { label: 'FAQ', href: '/faq/' },
    { label: 'Contact', href: '/contact/' },
    { label: 'Privacy', href: '/privacy/' },
  ],
  resources: [
    { label: 'Blog', href: '/blog/' },
    { label: 'Website pricing', href: '/pricing/' },
    { label: 'How much does a website cost?', href: '/blog/website-cost-perth/' },
    { label: 'How to choose a web developer', href: '/blog/choose-web-developer-perth/' },
    { label: 'Website redesign checklist', href: '/blog/website-redesign-checklist/' },
    { label: 'Local SEO checklist', href: '/blog/local-seo-website-checklist-perth/' },
    { label: 'Shopify vs WooCommerce', href: '/blog/shopify-vs-woocommerce/' },
    { label: 'Webflow vs WordPress', href: '/blog/webflow-vs-wordpress/' },
  ],
} as const;
