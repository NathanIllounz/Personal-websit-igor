# Igor Gabriielian — Personal Consulting Website

> Master plan. Reworked from `plan.txt` (kept as the raw content source).
> Reference for tone/structure: https://www.eliezeryosi.com/

---

## 1. Goal

A one-page personal website that positions **Igor Gabriielian** as Israel's go-to
**independent Automated & Robotic Parking Systems (APS) consultant**.

It must read **professional and serious** (his clients are developers, architects,
project managers) while feeling **modern, cool and clean** — the "wow" comes from
restrained, high-quality scroll animation, not from flashy colors.

## 2. The Big Idea — "The Descent"

The whole site is designed as a **vertical automated parking tower** (echoing the logo).
The hero is street level. Each content section is a **level** of the structure.
As the visitor scrolls down, a small line-art car (same style as the logo) is
**carried down by the parking lift** from level to level — a persistent scroll-driven
animation that ties the whole page together and literally demonstrates what an APS does.

At the final section (Contact), the car is **retrieved** — it rides back up and drives
off. Message: *"From concept to reliable operation — and back to you."*

Level map:

| Scroll position | Level label     | Section                       |
|-----------------|-----------------|-------------------------------|
| Top             | STREET LEVEL    | Hero + credential stats       |
| ↓               | LEVEL −1        | About / Engineering background|
| ↓               | LEVEL −2        | Manufacturers & technologies  |
| ↓               | LEVEL −3        | Services (project lifecycle)  |
| ↓               | LEVEL −4        | Why an independent consultant |
| ↓               | LEVEL −5        | Selected projects (case studies) |
| Bottom          | RETRIEVAL       | Contact / CTA                 |

A slim fixed side indicator (like an elevator panel: `0, -1, -2, …`) doubles as
section navigation. On mobile the car animation simplifies to lightweight
per-section reveals (performance + battery).

## 3. Visual Design Direction

- **Palette:** monochrome, from the logo — near-black `#111`, white `#fafafa`,
  concrete grays. One accent color: **signal/safety amber** (`#f5a623`-family),
  the color of industrial marking paint — used sparingly (CTA, level indicators,
  stat highlights).
- **Typography:** a geometric/engineering sans (e.g. *Archivo*, *Inter Tight* or
  *IBM Plex Sans*) for headings with wide letter-spacing (matches logo),
  humanist sans for body. Big numerals for stats (`3,000+`, `567`, `20+`).
- **Texture:** thin hairline strokes, blueprint-style grid backgrounds at low
  opacity, level markings ("L-2") as oversized ghost numbers behind sections.
- **Photography:** real site photos from the three projects (steel structures,
  lifts, shuttles) — treated consistently (slight desaturation, consistent crop).
- **Motion rules:** everything eases like machinery — precise, damped, no bounce.
  Respect `prefers-reduced-motion` (all scroll effects degrade to simple fades).

## 4. Page Structure & Content

All copy already exists in `plan.txt`; summary of each section below.

### 4.1 STREET LEVEL — Hero
- Logo mark, name: **IGOR GABRIIELIAN**
- Title: *Automated & Robotic Parking Independent Systems Consultant*
- Tagline: *From Concept to Reliable Operation.*
- Sub: *Planning • Technical Review • Supervision • Commissioning*
- **6 credential stat tiles** (animated count-up on first view):
  Master's degree (Geoinformation Systems & Land Management) · Practical Electrical
  Engineer · 20+ years engineering & construction · 10+ years APS · 10+ manufacturers ·
  3,000+ spaces
- Primary CTA button → Contact. Scroll hint ("descend ↓").

### 4.2 LEVEL −1 — About
- "Engineering Background. Built on Experience." + 4 paragraphs from plan.txt.
- Portrait of Igor (professional photo — **needed**, see gaps) beside the text.

### 4.3 LEVEL −2 — Manufacturers & Technologies
- Intro paragraph (independence message).
- Grid of 10 manufacturer badges with country flags/labels:
  Dyparking (KR), Wöhr (DE), Klaus Multiparking (DE), Autech (KR), SolidParking (CN),
  Klaus Multiparking (IN), De-Park (DE), Sotefin (CH), GG-Parking (CN), Mutrad (CN).
- v1 uses **styled text badges** (name + country), not scraped logos — trademark-safe
  and visually consistent. Swap in real logos later if permissions are cleared.

### 4.4 LEVEL −3 — Services
- 5 services rendered as a **project lifecycle timeline** (left→right on desktop,
  vertical on mobile): Planning & Design → System & Supplier Selection →
  Project Coordination → Installation & Commissioning → Existing Systems Consulting.
- Each step: number, title, one-liner from plan.txt.

### 4.5 LEVEL −4 — Why an Independent APS Consultant
- Hook: *"One system. Decades of consequences."* + intro copy.
- The **5 reasons** as scroll-stepped panels (one highlights at a time as you scroll).
- Closing principle block: *"The APS supplier delivers the system. The independent
  consultant protects the project."* — visually strongest quote of the page.

### 4.6 LEVEL −5 — Selected Projects
- Intro + "My Role: Technical Director & Installation Manager".
- 3 case-study cards with photo galleries (lightbox):
  1. **Herzliya** — 172 spaces · Autech · Electra Parking Solutions · 2022–2023
     → photos: `Sokolov-Hertslia/`
  2. **Tel Aviv** — 224 spaces · Sotefin · Parkomat · 2024
     → photos: `Ertsel-Tel-Aviv/` or `Tel-Aviv-Bougrashove/` (**confirm mapping**)
  3. **Tel Aviv** — 171 spaces · Parkomat · 2025–2026
     → photos: (the other TLV folder)
- Footer counter: **567 automated parking spaces** (animated count-up) + closing line.

### 4.7 (Hidden for v1) — APS Updates & Insights
- Build the section component but keep it disabled behind a config flag.
  Turns on later when Igor has articles.

### 4.8 RETRIEVAL — Contact
- "Retrieve your project." Car animation returns to street level.
- Contact methods: phone, email, WhatsApp deep link, LinkedIn (**details needed**).
- **Decision: buttons only for v1** (phone / WhatsApp / email / LinkedIn) — no form.
  A Formspree form can be added later without redesign.
- Footer: logo, © year, minimal links.

## 5. Tech Stack

Chosen for: GitHub Pages hosting (fully static), top-tier scroll animation, fast loads.

| Layer      | Choice                                   | Why |
|------------|------------------------------------------|-----|
| Framework  | **Astro 5**                              | Static-first, near-zero JS by default, first-class GitHub Pages deploy, built-in i18n routing for the EN/HE bilingual site |
| Styling    | **Tailwind CSS 4**                       | Fast to build a strict design system, tiny output |
| Animation  | **GSAP 3 + ScrollTrigger** (100% free)   | Industry standard for scroll-pinned storytelling — exactly the car-descent mechanic |
| Smooth scroll | **Lenis**                             | Buttery scroll feel that GSAP syncs to |
| Car/tower art | **Inline SVG** drawn to match the logo | Crisp at any size, cheap to animate along a path |
| Lightbox   | GLightbox (or tiny custom)               | Project photo galleries |
| Images     | Astro `<Image>` → AVIF/WebP, lazy        | WhatsApp JPEGs must be renamed + optimized |
| Deploy     | **GitHub Actions → GitHub Pages**        | Push to `main` = live site |
| Contact    | Direct buttons (tel / WhatsApp / mailto / LinkedIn) | No backend needed; form can come later |
| i18n       | **Astro built-in i18n** — `/` (EN) + `/he/` (Hebrew, RTL) | Language switcher in the header; copy stored per-locale |

No paid services required. No backend. Everything lives in the GitHub repo.

### Bilingual (decided)
- Two locales from day one: **English (default) and Hebrew (RTL)**, switchable via a
  header toggle (EN | עב). Astro i18n routing: `/…` and `/he/…`.
- All copy in `src/content/site.{en,he}.ts` — same shape, two files.
- Layout built with CSS logical properties so RTL "just works"; `dir="rtl"` +
  `lang="he"` set at the layout level. Hebrew webfont: a matching Hebrew sans
  (e.g. IBM Plex Sans Hebrew / Heebo).
- **Hebrew translations of all plan.txt copy are needed** (see CONTENT-TODO.md).

## 6. Repository Layout (target)

```
igor-website/
├─ PLAN.md              ← this file
├─ CLAUDE.md            ← build conventions for AI-assisted coding
├─ CONTENT-TODO.md      ← missing info checklist
├─ astro.config.mjs
├─ public/
│  └─ favicon, og-image
├─ src/
│  ├─ assets/
│  │  ├─ logo.svg (re-traced from logo.jpeg)
│  │  ├─ igor/           (portrait photos, renamed)
│  │  └─ projects/
│  │     ├─ herzliya-sokolov/
│  │     ├─ telaviv-a/
│  │     └─ telaviv-b/
│  ├─ components/       (Hero, StatTile, LevelSection, ServiceTimeline, …)
│  ├─ content/
│  │  ├─ site.en.ts     (ALL English copy — one file to edit text)
│  │  └─ site.he.ts     (Hebrew copy, same shape)
│  ├─ layouts/Base.astro (sets lang/dir per locale)
│  ├─ scripts/scroll.ts (GSAP timeline: the descent)
│  └─ pages/
│     ├─ index.astro    (EN)
│     └─ he/index.astro (HE, RTL)
└─ .github/workflows/deploy.yml
```

Raw source folders (`Igor-Pic/`, `Sokolov-Hertslia/`, …, `plan.txt`) stay out of the
built site; curated/renamed copies go into `src/assets/`.

## 7. Build Phases

1. **Phase 0 — Foundation** ✦ git init, GitHub repo, Astro scaffold, Tailwind,
   deploy workflow. *Exit: blank page live on GitHub Pages.*
2. **Phase 1 — Content & layout** ✦ all 7 sections built static (no animation),
   copy wired from `site.ts`, design system (colors/type/spacing), responsive.
   *Exit: complete readable site, Lighthouse ≥ 90.*
3. **Phase 2 — The Descent** ✦ SVG tower + car, GSAP ScrollTrigger master timeline,
   level indicator nav, Lenis, reduced-motion fallback, mobile simplification.
   *Exit: scroll story works on desktop + mobile.*
4. **Phase 3 — Media** ✦ curate/rename/optimize photos, galleries + lightbox,
   portrait selection, OG image.
5. **Phase 4 — Polish & launch** ✦ SEO meta + JSON-LD (Person/ProfessionalService),
   accessibility pass, favicon, 404, analytics (optional, privacy-friendly),
   custom domain if bought.

## 8. Open Questions / Missing Info

See `CONTENT-TODO.md` — must be answered before Phase 1 completes (contact info,
language(s), photo↔project mapping, portrait, domain, GitHub repo name).
