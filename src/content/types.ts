// Shared shape for site.en.ts / site.he.ts — keeps both locales in sync.

export interface Stat {
  value: string;
  label: string;
}

export interface Site {
  locale: 'en' | 'he';
  dir: 'ltr' | 'rtl';
  meta: { title: string; description: string };
  ui: {
    lightboxClose: string;
    lightboxPrev: string;
    lightboxNext: string;
    galleryOpen: string;
    skipToContent: string;
  };
  nav: {
    about: string;
    manufacturers: string;
    services: string;
    why: string;
    projects: string;
    contact: string;
    langLabel: string;
  };
  hero: {
    level: string;
    name: string;
    title: string;
    tagline: string;
    services: string;
    cta: string;
    scrollHint: string;
    stats: Stat[];
  };
  about: {
    level: string;
    heading: string;
    paragraphs: string[];
    portraitAlt: string;
  };
  manufacturers: {
    level: string;
    heading: string;
    intro: string[];
    items: { name: string; country: string }[];
  };
  services: {
    level: string;
    heading: string;
    intro: string;
    items: { title: string; desc: string }[];
  };
  why: {
    level: string;
    heading: string;
    hook: string;
    intro: string[];
    reasonsTitle: string;
    reasons: { title: string; body: string[] }[];
    disciplines: string;
    principleLabel: string;
    principle: [string, string];
    closing: string;
  };
  projects: {
    level: string;
    heading: string;
    sub: string;
    intro: string[];
    roleLabel: string;
    roleTitle: string;
    roleBody: string;
    spacesLabel: string;
    items: { city: string; spaces: string; system: string; company: string; years: string }[];
    totalValue: string;
    totalLabel: string;
    totalClosing: string;
  };
  contact: {
    level: string;
    heading: string;
    sub: string;
    phoneLabel: string;
    whatsappLabel: string;
    emailLabel: string;
    linkedinLabel: string;
    phone: string;
    email: string;
    whatsapp: string;
    linkedin: string;
    footer: string;
  };
}
