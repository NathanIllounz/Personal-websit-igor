// English copy — single source of truth for all user-visible text (EN).
// Keep the shape identical to site.he.ts.

export const site = {
  locale: 'en',
  dir: 'ltr',
  meta: {
    title: 'Igor Gabriielian — Automated & Robotic Parking Systems Consultant',
    description:
      'Independent consultant for automated and robotic parking systems (APS). Planning, technical review, supervision and commissioning — from concept to reliable operation.',
  },
  hero: {
    name: 'IGOR GABRIIELIAN',
    title: 'Automated & Robotic Parking Independent Systems Consultant',
    tagline: 'From Concept to Reliable Operation.',
    services: 'Planning • Technical Review • Supervision • Commissioning',
  },
  construction: 'Website under construction — launching soon.',
  langSwitch: { label: 'עברית', href: '/personal-website-igor/he/' },
  contact: {
    phone: '000-0000-000', // TODO: real number (see CONTENT-TODO.md)
    email: 'contact@example.com', // TODO
    whatsapp: '000-0000-000', // TODO
    linkedin: '#', // TODO
  },
} as const;
