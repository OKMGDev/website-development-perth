export const site = {
  name: 'Website Development Perth',
  shortName: '<WDP>',
  tagline: 'Websites that win work for Perth businesses.',
  url: 'https://websitedevelopmentperth.com.au',
  phoneDisplay: '1300 93 6564',
  phoneHref: 'tel:1300936564',
  email: 'hello@websitedevelopmentperth.com.au',
  serviceArea: 'Perth and surrounds across Western Australia',
  abn: '59 162 818 573',
  address: '608–610 Stirling Hwy, Mosman Park, Perth WA 6012',
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
    { label: 'Locations', href: '/locations/' },
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
