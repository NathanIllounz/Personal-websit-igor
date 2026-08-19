// English copy — single source of truth for all user-visible text (EN).
// Keep the shape identical to site.he.ts (enforced by the Site type).
import type { Site } from './types';

export const site: Site = {
  locale: 'en',
  dir: 'ltr',
  meta: {
    title: 'Igor Gabriielian — Automated & Robotic Parking Systems Consultant',
    description:
      'Independent consultant for automated and robotic parking systems (APS). Planning, technical review, supervision and commissioning — from concept to reliable operation.',
  },
  ui: {
    lightboxClose: 'Close photo viewer',
    lightboxPrev: 'Previous photo',
    lightboxNext: 'Next photo',
    galleryOpen: 'View photo',
    skipToContent: 'Skip to content',
  },
  nav: {
    about: 'About',
    manufacturers: 'Manufacturers',
    services: 'Services',
    why: 'Why Independent',
    projects: 'Projects',
    contact: 'Contact',
    langLabel: 'עברית',
  },
  hero: {
    level: 'STREET LEVEL',
    name: 'IGOR GABRIIELIAN',
    title: 'Automated & Robotic Parking Independent Systems Consultant',
    tagline: 'From Concept to Reliable Operation.',
    services: 'Planning • Technical Review • Supervision • Commissioning',
    cta: 'Start a conversation',
    scrollHint: 'Descend',
    stats: [
      { value: "MASTER'S", label: 'Geoinformation Systems & Land Management' },
      { value: 'ENGINEER', label: 'Practical Electrical Engineering Diploma' },
      { value: '20+ YRS', label: 'Engineering & Construction Experience' },
      { value: '10+ YRS', label: 'Automated & Robotic Parking Systems' },
      { value: '10+', label: 'APS Manufacturers — Hands-On Experience' },
      { value: '3,000+', label: 'Automated Parking Spaces Delivered' },
    ],
  },
  about: {
    level: 'LEVEL −1',
    heading: 'Engineering Background. Built on Experience.',
    paragraphs: [
      'My expertise in automated parking systems is built on a broad engineering and construction background.',
      'I hold a Master’s degree in Geoinformation Systems and Land Management, as well as a Practical Electrical Engineer diploma. Before entering the automated parking industry, I spent approximately 10 years in construction, working on industrial facilities, power plants and large commercial projects.',
      'For more than a decade, I have specialized in automated and robotic parking systems, working with technologies from over 10 APS manufacturers and holding technical and project leadership positions at two of Israel’s leading automated parking companies.',
      'My experience includes leading three of the largest APS projects delivered in Israel and contributing, in different technical and management roles, to the implementation and commissioning of more than 3,000 automated parking spaces.',
    ],
    portraitAlt: 'Portrait of Igor Gabriielian',
  },
  manufacturers: {
    level: 'LEVEL −2',
    heading: 'Experience Across APS Manufacturers & Technologies',
    intro: [
      'Over the years, I have gained hands-on experience with automated parking systems from more than 10 manufacturers worldwide — across different technologies, project scales and technical approaches.',
      'This broad exposure allows me to evaluate each solution independently, based on the specific needs of the project rather than a particular manufacturer.',
    ],
    items: [
      { name: 'Dyparking', country: 'Korea' },
      { name: 'Wöhr', country: 'Germany' },
      { name: 'Klaus Multiparking', country: 'Germany' },
      { name: 'Autech', country: 'Korea' },
      { name: 'SolidParking', country: 'China' },
      { name: 'Klaus Multiparking', country: 'India' },
      { name: 'De-Park', country: 'Germany' },
      { name: 'Sotefin', country: 'Switzerland' },
      { name: 'GG-Parking', country: 'China' },
      { name: 'Mutrad', country: 'China' },
    ],
  },
  services: {
    level: 'LEVEL −3',
    heading: 'Services',
    intro:
      'Independent technical support throughout the entire APS project lifecycle — from early planning to operation.',
    items: [
      { title: 'APS Planning & Design', desc: 'Concept development, planning and technical review.' },
      { title: 'System & Supplier Selection', desc: 'Independent comparison of technologies, manufacturers and proposals.' },
      { title: 'Project Coordination', desc: 'Coordination between APS, architecture, structure and building systems.' },
      { title: 'Installation & Commissioning', desc: 'Technical supervision, quality control, testing and acceptance.' },
      { title: 'Existing Systems Consulting', desc: 'Technical audits, troubleshooting, maintenance and system improvement.' },
    ],
  },
  why: {
    level: 'LEVEL −4',
    heading: 'Why an Independent APS Consultant?',
    hook: 'One system. Decades of consequences.',
    intro: [
      'An automated parking system is not simply equipment installed in a building. It is a long-term engineering decision that can affect the project for 20–30 years.',
      'Architecture, structure, electricity, fire safety, drainage, ventilation, software, maintenance and user experience all meet within one system.',
      'Decisions made today can determine how reliably that system operates for decades.',
    ],
    reasonsTitle: '5 Reasons to Have an Independent Expert on Your Side',
    reasons: [
      {
        title: 'Your Interests Come First',
        body: [
          'The supplier is responsible for delivering its system.',
          'An independent consultant represents the client and the project — without commitment to a particular manufacturer or technology.',
        ],
      },
      {
        title: 'The Right Decisions Are Made Early',
        body: [
          'A few centimeters of clearance, the position of a column, electrical capacity or an incorrect interface can become a major issue once construction has started.',
          'The best time to solve an APS problem is before it reaches the site.',
        ],
      },
      {
        title: 'You Compare Solutions, Not Just Prices',
        body: [
          'Two proposals for the same project may differ significantly in technology, capacity, performance, redundancy, maintenance requirements and long-term operating costs.',
          'An independent consultant helps identify what you are actually buying — not only how much it costs.',
        ],
      },
      {
        title: 'One Expert Connects Multiple Disciplines',
        body: [
          'APS interacts with 6+ critical project disciplines.',
          'Independent coordination helps identify gaps between them before those gaps become construction problems.',
        ],
      },
      {
        title: 'Think Beyond Handover',
        body: [
          'Installation is only the beginning.',
          'A system may perform hundreds of thousands of movements during its service life. Reliability, service access, spare parts, maintenance strategy and technical support can therefore matter as much as the initial purchase price.',
        ],
      },
    ],
    disciplines: 'Architecture • Structure • Electrical • Fire Safety • MEP • Operations',
    principleLabel: 'The principle is simple:',
    principle: [
      'The APS supplier delivers the system.',
      'The independent consultant protects the project.',
    ],
    closing:
      'From the first concept to final acceptance — the goal is to make the right technical decisions early, reduce unnecessary risk and ensure that the selected solution works not only on paper, but in real operation.',
  },
  projects: {
    level: 'LEVEL −5',
    heading: 'Selected Projects',
    sub: 'Three of Israel’s Largest APS Projects',
    intro: [
      'Throughout more than a decade in the automated parking industry, I have contributed to numerous projects involving different technologies, manufacturers and technical challenges.',
      'The three projects presented here are among the most significant of my career — and represent only a part of the experience gained across 3,000+ automated parking spaces.',
    ],
    roleLabel: 'My Role',
    roleTitle: 'Technical Director & Installation Manager',
    roleBody:
      'Across all three projects, I was responsible for technical management and execution — coordinating the installation process, resolving technical challenges, working with project teams and system manufacturers, and leading the systems through testing and commissioning.',
    spacesLabel: 'Parking Spaces',
    items: [
      { city: 'Herzliya', spaces: '172', system: 'Autech Automated Parking System', company: 'Electra Parking Solutions', years: '2022–2023' },
      { city: 'Tel Aviv', spaces: '224', system: 'Sotefin Automated Parking System', company: 'Parkomat', years: '2024' },
      { city: 'Tel Aviv', spaces: '171', system: 'Parkomat Automated Parking System', company: 'Parkomat', years: '2025–2026' },
    ],
    totalValue: '567',
    totalLabel: 'Automated Parking Spaces',
    totalClosing:
      'Three landmark projects. Different technologies and manufacturers. One continuous technical responsibility — from installation to successful commissioning.',
  },
  contact: {
    level: 'RETRIEVAL',
    heading: 'Let’s Talk About Your Project',
    sub: 'From concept to reliable operation — independent technical support at any stage of your APS project.',
    phoneLabel: 'Phone',
    whatsappLabel: 'WhatsApp',
    emailLabel: 'Email',
    linkedinLabel: 'LinkedIn',
    phone: '+972 53-700-2702',
    email: 'igorrg1989@gmail.com',
    whatsapp: '+972 53-700-2702',
    linkedin: 'https://www.linkedin.com/in/igor-gabriielian-612326258/',
    footer: '© 2026 Igor Gabriielian. All rights reserved.',
  },
};
