export const site = {
  name: 'Website Development Perth',
  shortName: 'WDP',
  tagline: 'Websites that win work for Perth businesses.',
  url: 'https://websitedevelopmentperth.com.au',
  phoneDisplay: '(08) 6186 2400',
  phoneHref: 'tel:+61861862400',
  email: 'hello@websitedevelopmentperth.com.au',
  responseTime: 'We typically reply within one business day.',
  serviceArea: 'Perth and surrounds across Western Australia',
  abn: '00 000 000 000',
  address: 'Servicing Perth, WA',
  social: {
    linkedin: '',
    facebook: '',
  },
  defaultOgImage: '/og-default.svg',
} as const;

export const navPrimary = [
  { label: 'Services', href: '/services/' },
  { label: 'Industries', href: '/industries/' },
  { label: 'Work', href: '/work/' },
  { label: 'Locations', href: '/locations/' },
  { label: 'About', href: '/about/' },
  { label: 'Blog', href: '/blog/' },
  { label: 'Contact', href: '/contact/' },
] as const;

export const footerNav = {
  company: [
    { label: 'About', href: '/about/' },
    { label: 'Our Process', href: '/process/' },
    { label: 'Why Us', href: '/why-us/' },
    { label: 'Work', href: '/work/' },
    { label: 'FAQ', href: '/faq/' },
    { label: 'Contact', href: '/contact/' },
    { label: 'Privacy', href: '/privacy/' },
  ],
  resources: [
    { label: 'Blog', href: '/blog/' },
    { label: 'How much does a website cost?', href: '/blog/website-cost-perth/' },
    { label: 'Shopify vs WooCommerce', href: '/blog/shopify-vs-woocommerce/' },
    { label: 'Webflow vs WordPress', href: '/blog/webflow-vs-wordpress/' },
  ],
} as const;
