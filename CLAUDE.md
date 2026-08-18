# CLAUDE.md — Build conventions for the Igor Gabriielian website

Read `PLAN.md` first (concept, sections, phases). This file is the *how*.

## Project facts
- Static one-page site. **Astro 5 + Tailwind CSS 4 + GSAP ScrollTrigger + Lenis.**
- **Bilingual: English (default, `/`) + Hebrew RTL (`/he/`)** with a header language
  switcher. Astro built-in i18n routing.
- Hosted on **GitHub Pages** via GitHub Actions (`.github/workflows/deploy.yml`).
  Remember to set `site` and `base` in `astro.config.mjs` to match the repo.
- No backend. Contact = direct buttons (tel / WhatsApp / mailto / LinkedIn). No form in v1.
- Raw content source: `plan.txt` (don't edit). Editable copy:
  `src/content/site.en.ts` + `src/content/site.he.ts` (identical shape).
- Raw photo folders in repo root (`Igor-Pic/`, `Sokolov-Hertslia/`, `Ertsel-Tel-Aviv/`,
  `Tel-Aviv-Bougrashove/`) are source material only — never imported directly.
  Curated, renamed, ASCII-named copies live in `src/assets/`.

## Hard rules
1. **All user-visible text lives in `src/content/site.en.ts` / `site.he.ts`** —
   never hardcode copy inside components. Components receive a locale object.
2. **Accessibility is not optional:** semantic landmarks, alt text on every photo,
   focus-visible styles, WCAG AA contrast, and full `prefers-reduced-motion`
   support — every GSAP effect needs a no-motion fallback (content simply visible).
3. **Performance budget:** Lighthouse ≥ 90 all categories on mobile.
   Images through Astro `<Image>` (AVIF/WebP, explicit dimensions, lazy below fold).
   GSAP is the only sizeable JS dependency; no React/Vue islands unless justified.
4. **Animation style:** mechanical easing (`power2.inOut`-family), no bounces/springs.
   One master ScrollTrigger timeline in `src/scripts/scroll.ts`; section-level
   effects registered from there. Kill/refresh triggers correctly on resize.
5. **Mobile-first.** The car-descent animation may be simplified or replaced by
   fade/slide reveals under 768px — never ship jank on phones.
6. **Design tokens** (colors, spacing, type scale) defined once in the Tailwind
   theme — components use tokens, never raw hex values.
7. **RTL is a first-class citizen:** only CSS logical properties (`ms-`/`me-`,
   `ps-`/`pe-`, `text-start`, `start-0`…), never `ml-`/`left-` for layout.
   Every visual check happens in BOTH locales. Directional icons/animations
   (arrows, the scroll car) must be verified to make sense in RTL.
8. No trademark manufacturer logos in v1 — text badges only (name + country).
9. Photos may show client sites: **do not add new photos beyond the provided
   folders without asking.** Never publish photos of identifiable third parties
   without confirmation.

## Commands (after scaffold)
```bash
npm run dev        # local dev server
npm run build      # production build to dist/
npm run preview    # preview the build
```

## Definition of done (per phase — see PLAN.md §7)
- Builds clean (`npm run build` with zero warnings that matter).
- Checked in the in-app browser at mobile (375px), tablet, desktop widths.
- Reduced-motion verified (emulate via devtools).
- Deployed preview on GitHub Pages before calling a phase complete.
