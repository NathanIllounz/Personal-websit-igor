// Hebrew copy — machine-translated first draft, to be reviewed by Igor
// (industry terminology). Keep the shape identical to site.en.ts.

export const site = {
  locale: 'he',
  dir: 'rtl',
  meta: {
    title: 'איגור גבריאליאן — יועץ מערכות חניה אוטומטיות ורובוטיות',
    description:
      'יועץ עצמאי למערכות חניה אוטומטיות ורובוטיות (APS): תכנון, בדיקה טכנית, פיקוח, הרצה ומסירה — מהרעיון ועד לתפעול אמין.',
  },
  hero: {
    name: 'איגור גבריאליאן',
    title: 'יועץ עצמאי למערכות חניה אוטומטיות ורובוטיות',
    tagline: 'מהרעיון ועד לתפעול אמין.',
    services: 'תכנון • בדיקה טכנית • פיקוח • הרצה ומסירה',
  },
  construction: 'האתר בבנייה — עולה לאוויר בקרוב.',
  langSwitch: { label: 'English', href: '/personal-website-igor/' },
  contact: {
    phone: '000-0000-000', // TODO: real number (see CONTENT-TODO.md)
    email: 'contact@example.com', // TODO
    whatsapp: '000-0000-000', // TODO
    linkedin: '#', // TODO
  },
} as const;
