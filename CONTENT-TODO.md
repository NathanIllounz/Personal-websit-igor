# CONTENT-TODO.md — Missing info checklist

Answers get wired into `src/content/site.ts`. Blockers marked 🔴 (needed before
launch), nice-to-have marked 🟡.

## 🔴 Contact & identity
- [ ] Phone number (public? WhatsApp same number?)
- [ ] Email address for enquiries (also used by the contact form)
- [ ] LinkedIn profile URL (and any other professional profiles)
- [ ] Name spelling confirmation: logo shows **GABRIIELIAN** (double "II") — correct?
- [ ] Languages Igor works in (worth listing: e.g. English / Hebrew / Russian)

## 🔴 Site language(s) — DECIDED: bilingual EN + HE with a switcher
- [ ] Hebrew translations of all site copy (everything in plan.txt). Options:
      Igor writes/reviews them, or we machine-translate a first draft and Igor
      corrects it (recommended — he knows the industry terminology in Hebrew).

## 🔴 Photos
- [ ] CONFIRM photo↔project mapping (currently assumed from evidence in the photos:
      Parkomat-branded machinery in Bougrashove; "HERZEL 91" pallet markings in Ertsel):
      - `Ertsel-Tel-Aviv/` → 224 spaces · Sotefin · 2024 (live as `telaviv-ertsel`)
      - `Tel-Aviv-Bougrashove/` → 171 spaces · Parkomat · 2025–2026 (live as `telaviv-bograshov`)
      If wrong, swap the glob order in `src/components/Projects.astro`.
- [ ] A proper portrait/headshot of Igor (current `Igor-Pic/` photos are event
      shots with other people). Even a good phone photo against a clean wall works.
- [ ] Confirm permission to publish the project-site photos (client buildings).
- [x] Photos screened (2026-08-20): only images with NO identifiable faces and NO
      readable license plates were published (15 of 44). Excluded but worth
      rescuing with a plate-blur edit (they're the most impressive shots):
      - `Sokolov-Hertslia/...15.22.13 (1).jpeg` (commissioned bay, car on pallet — plate legible)
      - `Ertsel-Tel-Aviv/...15.25.42 (3).jpeg` (crane offloading pallets — plate legible)
      - `Tel-Aviv-Bougrashove/...15.35.06 (7).jpeg` (control cabinet + SUV — plate legible)
      Note: two WhatsApp chat screenshots with personal names sit in
      `Sokolov-Hertslia/` (`15.21.06 (5)` and `15.21.07 (1)`) — never publish.

## 🔴 GitHub / hosting
- [ ] GitHub username + desired repo name (affects the Pages URL and `base` config)
- [ ] Custom domain? (e.g. igorgabrielian.com) or fine with `<user>.github.io/<repo>`
      for now?

## 🟡 Content upgrades
- [ ] 1–3 short client testimonials or reference names (big trust boost for a
      consultant site)
- [ ] Project names/addresses for the 3 case studies (can we name the buildings,
      or keep them as "Herzliya / Tel Aviv"?)
- [ ] Logo source file — is there an SVG/vector of the logo, or only `logo.jpeg`?
      (If JPEG only, we re-trace it to SVG.)
- [ ] Contact form: create a free Formspree account (or we launch with
      phone/WhatsApp/email buttons only and add the form later)
- [ ] Analytics wanted? (privacy-friendly option: GoatCounter/Plausible — optional)
- [ ] Any certifications, licenses, or association memberships worth listing
- [ ] Downloadable one-page PDF profile? (common ask from developers/PMs)
