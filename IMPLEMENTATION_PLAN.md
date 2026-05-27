# Portfolio Implementation Plan

Derived from `PORTFOLIO_PRD.md` v1.0.0. This document tracks phased delivery; update checkboxes as work completes.

## Summary

| Item | Decision |
|------|----------|
| Stack | React 18 + Vite 5 + Tailwind 3 + Framer Motion + React Router v6 |
| Accent | Electric Blue `#0066FF` |
| Fonts | Clash Display (display), Inter (body), JetBrains Mono (mono) via Fontshare/Google |
| Deploy | Vercel (SPA fallback in `vercel.json`) |
| Contact | EmailJS client-side first; Vercel serverless optional in Phase 7 |

## Phase 0: Setup (Day 1) — **DONE**

- [x] Implementation plan document
- [x] Initialize Vite + React in repo root
- [x] Install core dependencies (Framer Motion, Router, Lenis, etc.)
- [x] Configure Tailwind + PostCSS + plugins
- [x] Folder structure per PRD §33
- [x] ESLint + Prettier
- [x] React Router + `vercel.json`
- [x] `.env.example` + `.gitignore`
- [ ] Git init + GitHub remote (manual)

## Phase 1: Foundation (Days 2–4) — **DONE**

- [x] Global CSS variables + Tailwind theme (colors, fonts, spacing)
- [x] `Layout`, `Navbar` (scroll + mobile), `Footer`
- [x] Lenis smooth scroll provider
- [x] Page transitions (Framer Motion)
- [x] `FadeIn`, `SlideUp`, `StaggerContainer`
- [x] Data modules: `personal.js`, `projects.js`, `skills.js`, `experience.js`, `certifications.js`
- [x] Hooks: `useScrollPosition`, `useActiveSection`, `useContactForm`

## Phase 2: Core Sections (Days 5–9) — **DONE**

| Section | PRD ref | Priority |
|---------|---------|----------|
| Hero | §10.2 | P0 | Done |
| Marquee | §10.3 | P1 | Done |
| About | §10.4 | P0 | Done |
| Skills | §10.5 | P1 | Done |
| Projects (MOCKMASTER featured) | §10.6 | P0 | Done |
| Experience | §10.7 | P1 | Done |
| Certifications | §10.8 | P1 | Done |
| Contact + form | §10.10 | P0 | Done |
| Footer | §10.1 | P0 | Done |

## Phase 3: Case Study (Days 10–12) — **PARTIAL**

- [x] `ProjectCaseStudy.jsx` template
- [x] Route `/projects/:slug`
- [x] MOCKMASTER case study content (starter copy in data)
- [x] Prev/next project navigation
- [ ] Rich case study layout (architecture diagrams, gallery)

## Phase 4: Polish & Animation (Days 13–15)

- [ ] Scroll animations audit
- [ ] Typography scale pass
- [ ] Hover states on all interactives
- [ ] WebP assets + placeholders
- [ ] Resume download + external links QA

## Phase 5: Performance & SEO (Days 16–17)

- [ ] Lighthouse ≥95 performance, ≥98 a11y
- [ ] `react-helmet-async` meta + OG + Twitter
- [ ] JSON-LD Person + WebSite
- [ ] `sitemap.xml`, `robots.txt`

## Phase 6: Accessibility (Day 18)

- [ ] Keyboard nav, skip link, focus styles
- [ ] `prefers-reduced-motion`
- [ ] Form labels + ARIA

## Phase 7: Analytics & QA (Days 19–20)

- [ ] GA4 + Vercel Analytics + custom events
- [ ] Contact form E2E
- [ ] Cross-browser / mobile testing

## Phase 8: Launch (Day 21)

- [ ] Custom domain on Vercel
- [ ] Final Lighthouse sign-off

## Deferred (P2–P3)

- GitHub activity strip
- GSAP horizontal scroll
- Dark mode toggle
- Blog

## Content placeholders to replace

Update `src/data/personal.js` with real name, email, LinkedIn, GitHub, and add `public/resume/*.pdf` before launch.

---

**Current focus:** Phase 4 polish — real assets, copy, links; then Phase 5 SEO (Helmet OG, sitemap, JSON-LD).
