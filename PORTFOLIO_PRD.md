# PRODUCT REQUIREMENTS DOCUMENT
## Full-Stack Developer Portfolio Website
**Version:** 1.0.0
**Status:** Ready for Development
**Document Type:** Startup-Grade PRD — Implementation Ready
**Prepared for:** AI Coding Agents (Cursor, Emergent, v0, etc.)

---

# TABLE OF CONTENTS

1. Product Overview
2. Goals and Objectives
3. Target Audience
4. Brand Personality
5. Design Philosophy
6. User Experience Goals
7. Site Architecture / Sitemap
8. Full User Flow
9. Landing Page Breakdown
10. Detailed Section-by-Section Features
11. UI/UX Guidelines
12. Typography System
13. Color Palette
14. Animation & Motion Guidelines
15. Mobile Responsiveness Strategy
16. Accessibility Requirements
17. Performance Optimization
18. SEO Requirements
19. Technical Stack Recommendations
20. Backend Requirements
21. CMS / Admin Requirements
22. Project Showcase Structure
23. Case Study Page Structure
24. Recruiter-Focused Features
25. Contact & Lead Generation Strategy
26. Resume Download Flow
27. GitHub Integration Ideas
28. Future Scalability Ideas
29. Deployment Strategy
30. Analytics & Tracking
31. Security Considerations
32. Final UI Inspirations
33. Suggested Folder Structure
34. Suggested Component Architecture
35. Suggested Animations Using Framer Motion
36. Tailwind CSS Styling Strategy
37. Suggested Libraries
38. Lighthouse Optimization Goals
39. Content Writing Tone
40. Final Development Roadmap

---

# 1. PRODUCT OVERVIEW

## What This Is

A premium, personal portfolio website for a full-stack web developer. This is not a simple resume page. This is a personal brand platform — a living, breathing digital identity that communicates technical excellence, creative thinking, and professional credibility to multiple distinct audiences simultaneously.

The portfolio will function as:
- A first impression for technical recruiters and HR professionals
- A credibility anchor for startup founders evaluating freelance or contract developers
- A project showcase for potential collaborators and the tech community
- A personal brand hub connecting all professional presence (GitHub, LinkedIn, Resume)

## The Developer Profile

A full-stack web developer with hands-on project experience, internship exposure, certifications, and a standout flagship project called MOCKMASTER — an AI-powered mock test generator platform. The developer is technically capable, design-conscious, and career-growth oriented.

## The Core Problem Being Solved

Most developer portfolios are:
- Generic and templated — they all look the same
- Technically adequate but visually forgettable
- Not optimized for multiple audience types
- Slow to load and poor on mobile
- Missing narrative — they list facts but tell no story

This portfolio solves all of the above by combining editorial design aesthetics, strong typographic hierarchy, strategic content architecture, and performance-first development to create an experience that recruiters remember, clients trust, and developers respect.

---

# 2. GOALS AND OBJECTIVES

## Primary Goals

**G1 — First Impression Excellence**
Within 3 seconds of landing, a recruiter must know exactly who this developer is, what they do, and why they matter.

**G2 — Project Credibility**
MOCKMASTER and other projects must be showcased with enough detail, visual polish, and technical depth to demonstrate real-world capability.

**G3 — Multi-Audience Adaptability**
The same page must simultaneously speak to technical reviewers (code quality, stack choices), business decision-makers (project impact, delivery), and creative communities (design sensibility, UX thinking).

**G4 — Lead Generation**
Every page visit is a potential job offer, freelance inquiry, or collaboration. The portfolio must make it frictionless to reach out.

**G5 — Brand Differentiation**
The portfolio must be visually distinct and memorable. It must feel like it belongs on Awwwards, not on a generic developer template gallery.

## Business Value

- Increases recruiter-to-outreach conversion rate
- Reduces time-to-hire by giving hiring managers all they need in one place
- Establishes thought leadership within tech communities
- Builds long-term digital equity as the developer's career grows
- Positions the developer as premium talent, not commodity talent

## Success Metrics

- Average session duration > 2 minutes
- Resume download rate > 15% of unique visitors
- Contact form submission rate > 5% of unique visitors
- Bounce rate < 40%
- Lighthouse Performance score > 95
- Lighthouse Accessibility score > 98
- Mobile usability 100%

---

# 3. TARGET AUDIENCE

## Audience Segment 1: Technical Recruiters

**Profile:** Work at mid-to-large tech companies or staffing agencies. Review 50+ portfolios per week. Have limited technical depth but strong pattern recognition. Spend 15–30 seconds on initial scan.

**Pain Points:** Portfolios with no clear summary. No visible tech stack. No GitHub link. No resume download button. Hard to scan on mobile.

**What They Need:** Clean headline, tech stack visible above the fold, easy resume download, LinkedIn link, project names with clear descriptions.

**Design Implication:** Heavy visual hierarchy. No information buried. Big, scannable text. CTA buttons prominent.

## Audience Segment 2: HR Professionals

**Profile:** Gate-keeps applications. Often non-technical. Evaluates culture fit, communication style, and professionalism.

**Pain Points:** Technical jargon without context. No personality. No way to assess communication skills.

**What They Need:** Clean writing. Professional tone. Easy contact method. Polished visual first impression.

**Design Implication:** Writing style must be accessible. Design must feel polished and legitimate, not experimental.

## Audience Segment 3: Startup Founders / Freelance Clients

**Profile:** Looking for a developer who can own a project end-to-end. Evaluates portfolio outcomes, not just technology.

**Pain Points:** Developers who can code but can't ship products. No evidence of independent work or initiative.

**What They Need:** Project outcomes (not just descriptions). Evidence of product thinking. MOCKMASTER is perfect here — it shows initiative, AI integration, and full product delivery.

**Design Implication:** Project case studies must include problem → solution → outcome narrative. Not just a tech stack list.

## Audience Segment 4: Tech Community / Developers

**Profile:** Peers, open-source collaborators, Twitter/X and LinkedIn connections. Evaluates code quality, tech choices, and community presence.

**Pain Points:** Portfolios with no GitHub activity. Developers who don't contribute or share.

**What They Need:** GitHub links, open-source indicators, interesting project choices, clean code reputation.

**Design Implication:** GitHub integration. Tech badges. Links to repos. Evidence of commits and contributions.

---

# 4. BRAND PERSONALITY

## Core Brand Archetype: The Maker

The portfolio should feel like it belongs to someone who builds things that matter. Not flashy for the sake of flashy — precise, intentional, and excellent.

## Brand Attributes

| Attribute | Expression |
|-----------|------------|
| Technical | Clean code aesthetic, precise grid, exact spacing |
| Creative | Unexpected typographic choices, editorial layout, bold moments |
| Modern | Scroll-based animations, premium interactions, up-to-date stack |
| Premium | Generous whitespace, confident typography, restraint over excess |
| Approachable | Warm micro-copy, human language, accessible tone |
| Confident | Bold claims, strong headline, no apologetic language |

## Brand Voice

- Confident but not arrogant
- Precise but not cold
- Technical but not jargon-heavy
- Creative but not chaotic
- Professional but not corporate

## What It Should NOT Feel Like

- Not a bootcamp grad template
- Not a flashy "look how many animations I can do" portfolio
- Not a corporate resume dump
- Not overcrowded with every framework the developer has touched
- Not dark-mode-for-the-sake-of-dark-mode

---

# 5. DESIGN PHILOSOPHY

## Swiss International Typographic Style (Swiss Design)

The foundational design philosophy is Swiss editorial design — the same visual language used by brands like Apple, Muji, and leading design agencies. Core principles:

**Grid Supremacy:** Everything lives on the grid. No arbitrary spacing. Consistent columns. Mathematical harmony.

**Typography as Interface:** Type does the heavy lifting. Headlines are architecture, not decoration. Text size, weight, and spacing communicate hierarchy more powerfully than color or ornamentation.

**Negative Space as a Design Element:** Whitespace is intentional. Empty areas create visual breathing room, focus, and premium feel. Crowded = cheap. Sparse = confident.

**Function Before Form:** Every visual choice serves communication. No decorative elements that don't earn their space.

**Reduction to Essence:** If it can be removed without losing meaning, remove it.

## Applied to This Portfolio

The Swiss design language is applied with modern digital sensibility — adding:
- Smooth motion (Framer Motion / GSAP)
- Scroll-driven storytelling
- Subtle interactive micro-moments
- Dark/light adaptive tones

The result is a portfolio that feels like an Awwwards site but is actually pleasant to use, not just pleasant to screenshot.

---

# 6. USER EXPERIENCE GOALS

## UX Principle 1: Immediate Clarity

A user must understand within 3 seconds:
1. Who is this person?
2. What do they do?
3. Why does it matter to me?

## UX Principle 2: Effortless Navigation

Zero friction. Sticky nav. Smooth scroll. Progress indicators. The user should never feel lost.

## UX Principle 3: Layered Information

First pass: skim (headlines, stats, badges).
Second pass: read (project descriptions, skills).
Third pass: deep dive (case studies, GitHub, resume).

Every content layer invites the next without overwhelming the previous.

## UX Principle 4: Emotional Journey

The scroll through the portfolio should feel like a curated experience, not a feature checklist. Each section transitions smoothly into the next with intentional pacing.

## UX Principle 5: Conversion Optimization

Every section has a reason to act. Hero → see work. Work → learn more. About → download resume or get in touch. Contact → submit form.

## Pain Points Being Eliminated

- Pain: Can't find tech stack → Fix: Skill section with visual badges above the fold
- Pain: No quick resume → Fix: Sticky "Resume" button in nav
- Pain: Projects feel vague → Fix: Tech tags, live links, GitHub links on every card
- Pain: Contact is buried → Fix: Floating contact CTA + dedicated contact section
- Pain: Mobile experience broken → Fix: Fully mobile-first responsive design
- Pain: Page feels slow → Fix: Vite build, lazy loading, optimized assets

---

# 7. SITE ARCHITECTURE / SITEMAP

```
portfolio.dev/
├── / (Home — Single Page App with sections)
│   ├── #hero
│   ├── #about
│   ├── #skills
│   ├── #projects
│   ├── #experience
│   ├── #certifications
│   ├── #contact
│
├── /projects/:slug (Individual Project / Case Study pages)
│   ├── /projects/mockmaster
│   └── /projects/[other-projects]
│
├── /resume (Redirect to PDF download or inline resume viewer)
│
└── 404 (Custom not-found page)
```

## Navigation Structure

**Primary Nav Links:**
- Work (→ #projects)
- About (→ #about)
- Skills (→ #skills)
- Experience (→ #experience)
- Contact (→ #contact)

**Nav CTAs:**
- Resume (opens PDF download)
- Hire Me / Let's Talk (→ #contact or opens modal)

---

# 8. FULL USER FLOW

## Flow 1: Recruiter Fast Track (Target: < 60 seconds)

1. Lands on homepage
2. Reads hero headline — understands role and identity
3. Scans tech stack badges in skills section
4. Sees MOCKMASTER card — clicks live demo or GitHub
5. Notices resume button in nav → Downloads PDF
6. Optionally visits LinkedIn link
7. Submits contact form or saves contact info

## Flow 2: Startup Founder Evaluation (Target: 3–5 minutes)

1. Lands on homepage
2. Reads hero and about section
3. Clicks through to MOCKMASTER case study
4. Reads full project story (problem → solution → outcome → tech)
5. Checks live demo
6. Returns to homepage, scrolls through other projects
7. Visits contact section → Sends inquiry

## Flow 3: Peer Developer Exploration (Target: 5–10 minutes)

1. Lands on homepage
2. Immediately clicks GitHub link in nav
3. Returns, scrolls through projects
4. Checks tech stack badges on projects
5. Reads experience section
6. Visits certifications
7. Follows GitHub or LinkedIn

## Flow 4: HR Quick Scan (Target: < 30 seconds)

1. Lands on homepage
2. Reads name, title, short bio
3. Sees certifications section
4. Downloads resume
5. Notes LinkedIn link

---

# 9. LANDING PAGE BREAKDOWN

The entire homepage is a single-page application with smooth scroll navigation. Sections appear in this exact order:

1. Navigation (sticky, always visible)
2. Hero Section
3. Marquee / Ticker Strip (optional)
4. About Section
5. Skills / Tech Stack Section
6. Featured Projects Section
7. Work Experience Section
8. Certifications Section
9. GitHub Activity Strip (optional)
10. Contact Section
11. Footer

---

# 10. DETAILED SECTION-BY-SECTION FEATURES

## 10.1 Navigation

**Behavior:**
- Starts transparent over the hero
- Transitions to frosted glass (backdrop-blur) with subtle border-bottom on scroll
- Sticky to top — never leaves the viewport
- Active section highlighted based on scroll position (Intersection Observer)

**Content:**
- Left: Developer name or monogram logo (text-based, no heavy image)
- Center: Nav links (Work, About, Skills, Experience, Contact)
- Right: Resume button (outlined) + Let's Talk button (filled)

**Mobile:**
- Hamburger icon replaces center nav links
- Full-screen overlay menu with large touch targets
- Menu closes on link click

**Technical Notes:**
- Use `useScrollPosition` custom hook to toggle nav style
- Active link state via `useInView` from Framer Motion or Intersection Observer API
- Resume button triggers download attribute on anchor tag

## 10.2 Hero Section

**Purpose:** Make an unforgettable first impression. Communicate identity, role, and attitude instantly.

**Layout:**
- Full viewport height (`min-h-screen`)
- Centered or left-aligned content (left-aligned preferred for editorial feel)
- Generous top padding to account for sticky nav

**Content Architecture:**

```
[Small label / eyebrow text]
"Full-Stack Developer"

[Massive display headline — 2 to 3 lines]
"Building Digital
Experiences That
Actually Matter."

[Short descriptor — 1–2 sentences]
"I design and build full-stack web applications with a focus on
performance, user experience, and scalable architecture."

[CTA Row]
[View My Work →]   [Download Resume]

[Social Links Row]
[GitHub]   [LinkedIn]   [Email]

[Scroll indicator — animated arrow or text]
```

**Typography:**
- Eyebrow: 12–14px, uppercase, tracked wide, muted color
- Headline: 80–120px desktop, 40–56px mobile, bold or black weight
- Descriptor: 16–18px, regular weight, 60–65% line length max
- CTA buttons: 14–16px, clear hierarchy between primary and secondary

**Animations:**
- Headline animates in word-by-word or line-by-line with Framer Motion stagger
- Descriptor fades up after headline completes
- CTAs slide up into view
- Background: Subtle grain texture or very slow-moving geometric element (not distracting)
- Optional: Cursor follower effect (small dot that follows mouse with lag)

**Background Options (choose one):**
- Pure white or off-white with no background element
- Very subtle dot grid pattern (CSS background-image)
- Animated gradient mesh (muted, slow-moving)
- Full-bleed background image with strong overlay (least recommended — can feel dated)

**DO NOT include:**
- Animated typing effect (overused, feels 2018)
- Particle.js or particle systems (heavy, distracting)
- Auto-playing video background (performance killer)
- Full-page image of the developer (not aligned with Swiss design aesthetic)

## 10.3 Marquee / Ticker Strip (Optional but Recommended)

A horizontal scrolling ticker between the hero and about sections. Repeating text that reinforces skills, values, or keywords.

**Example content:**
```
Full-Stack Development · React · Node.js · AI Integration · MOCKMASTER · 
Open to Opportunities · Clean Code · System Design · API Development · 
User Experience · Performance Optimization ·
```

**Style:**
- Monospace or condensed font
- Black background with white text (or inverted from site theme)
- Infinitely looping, slow scroll
- Slightly tilted or full-width — creates visual separation between sections

**Implementation:** CSS animation with `@keyframes` translate or `react-fast-marquee` library.

## 10.4 About Section

**Purpose:** Make the developer a human being, not a skill list. Build connection and context.

**Layout:**
- Two-column grid on desktop (text left, optional image or abstract visual right)
- Single column on mobile
- Left column takes 60% width

**Content:**

```
[Section label] "About Me"

[Subheadline — bold, 36–48px]
"Developer by craft,
designer by curiosity."

[Body paragraphs — 2–3 short paragraphs]
Paragraph 1: Who I am and what I do (high-level)
Paragraph 2: My approach to building software (philosophy/values)
Paragraph 3: Currently exploring / working on / open to

[Stats row — 3 to 4 key numbers]
[2+]        [5+]         [3]          [1]
Years       Projects     Certifications  AI Product
Coding      Shipped                      Launched

[CTA]
"Let's build something together →"
```

**Right Column Options:**
- Abstract illustration (geometric, coded in SVG)
- Developer photo with editorial crop (black and white preferred)
- Code snippet displayed as aesthetic element
- Terminal-style card with fake command output

**Animations:**
- Stats count up from 0 when section enters viewport
- Paragraphs fade and slide up staggered
- Right column element has parallax offset on scroll

## 10.5 Skills / Tech Stack Section

**Purpose:** Give technical reviewers a fast, comprehensive read of proficiencies. Give non-technical visitors a sense of capability breadth.

**Layout:**
- Section header
- Categorized skill groups with icon badges
- NOT a progress bar (progress bars are vague and subjective — avoid completely)

**Categories:**

```
Frontend Development
React.js | Next.js | TypeScript | JavaScript (ES6+) | HTML5 | CSS3 | Tailwind CSS | Framer Motion

Backend Development  
Node.js | Express.js | REST APIs | GraphQL (basic) | JWT Auth | WebSockets

Database & Storage
MongoDB | PostgreSQL | MySQL | Firebase | Prisma ORM | Redis (basic)

DevOps & Tools
Git | GitHub | Vercel | Docker (basic) | Vite | Webpack | npm / yarn

AI & Integrations
OpenAI API | Gemini API | LangChain (basic) | Prompt Engineering

Design Tools
Figma | Adobe XD | Canva (for assets)
```

**Visual Treatment:**
- Each skill as a pill/badge with icon (use Devicons or Simple Icons)
- Grouped by category with subtle category labels
- Hover state: slight lift or background tint
- NOT grid of logos — too corporate. Flowing tag layout preferred.

**Implementation Note:** Import `react-icons` or `devicons-react` for tech icons. Use a consistent icon set.

## 10.6 Featured Projects Section

**Purpose:** This is the most critical section. Showcase the best work with enough detail to earn a click-through or a hiring decision.

**Layout Options:**

Option A (Recommended): Asymmetric featured card + smaller grid
- First project (MOCKMASTER) takes full-width or 60% width card — large, detailed
- Remaining projects in a 2 or 3 column grid below

Option B: Equal 2-column grid with hover reveal
- All projects equal sized
- Hover reveals more info (tech stack, description)

Option C: Horizontal scroll list (editorial feel)
- Projects arranged horizontally
- User scrolls sideways to browse

**MOCKMASTER Featured Card Content:**

```
[Project number] "01"

[Project name — large]
"MOCKMASTER"

[One-line description]
"AI-powered mock test generator platform for exam preparation"

[Short description paragraph]
"MOCKMASTER uses OpenAI's GPT models to dynamically generate 
personalized mock tests based on topic, difficulty, and exam type.
Built with a full-stack architecture, it serves students preparing 
for competitive exams with intelligent question generation, 
performance analytics, and adaptive learning paths."

[Tech stack badges]
React | Node.js | Express | MongoDB | OpenAI API | Tailwind CSS | JWT Auth

[Action buttons]
[Live Demo →]   [View Code]   [Case Study →]

[Project thumbnail / mockup]
Browser mockup or abstract visual representation
```

**General Project Card Content:**
```
[Number] [Project Name]
[One-line description]
[3–4 tech badges]
[Thumbnail]
[Live →] [Code]
```

**Hover Behavior:**
- Card lifts with subtle shadow on hover
- Project number changes color
- Thumbnail has subtle scale or overlay effect
- CTA links slide into visibility

**"See All Projects" Link:**
If there are more than 6 projects, include a link to a separate projects listing page or show more button.

## 10.7 Work Experience Section

**Purpose:** Demonstrate professional context and credibility through internships, freelance work, or job history.

**Layout:** Vertical timeline or accordion-style list

**Each Experience Item:**
```
[Company Name]          [Date Range]
[Role / Title]
[Location / Type: Remote | On-site | Hybrid]

• Achievement-oriented bullet 1 (focus on impact, not task)
• Achievement-oriented bullet 2
• Achievement-oriented bullet 3

[Tech stack used at this role]
React | Node.js | MongoDB
```

**Visual Treatment:**
- Timeline line (thin vertical line) connecting entries
- Company logo (small, grayscale)
- Animated: each item fades in as it enters viewport
- If no full-time experience: rename section "Professional Experience" and include internships, freelance, and notable collaborations

## 10.8 Certifications Section

**Purpose:** Show verified external validation of skills.

**Layout:** Card grid — 2 or 3 columns

**Each Certification Card:**
```
[Issuer Logo] — grayscale
[Certification Name]
[Issuing Organization]
[Date Issued]
[Credential ID — optional]
[Verify →] link
```

**Visual Treatment:**
- Clean minimal card with thin border
- Grayscale issuer logo (colorize on hover)
- Hover: card lifts slightly

**Examples to include:**
- Meta Front-End Developer Certificate (Coursera)
- Google IT Support (if applicable)
- freeCodeCamp Responsive Web Design
- Any Udemy / Scrimba / LinkedIn Learning certificates

## 10.9 GitHub Activity Strip (Optional)

A horizontal strip showing GitHub contribution graph or recent activity. This adds authenticity and proof of active development.

**Options:**
- Embed GitHub contribution graph using `github-readme-stats` API
- Custom chart built from GitHub GraphQL API
- Simple "Latest Commits" feed showing recent public commit messages

**Note:** Keep this section subtle — supporting evidence, not a main feature.

## 10.10 Contact Section

**Purpose:** Make it dead simple to reach out. Remove every possible friction from starting a conversation.

**Layout:** Two-column — text/value prop left, form right

**Left Column:**
```
[Section Label] "Get In Touch"

[Headline — 48–64px bold]
"Let's Build
Something Great."

[Sub-copy]
"Whether you're looking for a developer to join your team, 
need a freelance collaborator, or just want to say hi — 
my inbox is always open."

[Contact Details]
📧 email@example.com
🔗 linkedin.com/in/yourhandle
🐙 github.com/yourusername

[Availability badge]
🟢 Open to Opportunities — Full-time & Freelance
```

**Right Column — Contact Form:**
```
Fields:
- Name (text input)
- Email (email input)
- Subject (dropdown or text: Job Opportunity | Freelance Project | Collaboration | Other)
- Message (textarea — min 4 rows)
- [Send Message →] button

On Submit:
- Loading spinner on button
- Success state: animated checkmark + "Message sent! I'll reply within 24 hours."
- Error state: clear error message with retry option
```

**Backend:** Form submission handled by Nodemailer (Node.js) or a serverless function. EmailJS as a simpler alternative (no backend needed).

---

# 11. UI/UX GUIDELINES

## Spacing System

Use an 8px base unit. All spacing is multiples of 8.

```
4px   — hairline gap
8px   — xs
16px  — sm
24px  — md
32px  — lg
48px  — xl
64px  — 2xl
96px  — 3xl
128px — 4xl
```

Section padding: 96px–128px vertical on desktop. 64px on tablet. 48px on mobile.

## Border Radius

- Buttons: 4–6px (slight, not pill)
- Cards: 8–12px
- Badges/pills: 9999px (fully rounded)
- Input fields: 6–8px

## Shadow System

Avoid heavy box shadows. Use subtle ones:
- Cards at rest: `0 1px 3px rgba(0,0,0,0.06)`
- Cards hovered: `0 8px 24px rgba(0,0,0,0.12)`
- Modal / overlay: `0 24px 48px rgba(0,0,0,0.2)`

## Cursor

Default system cursor. Optional: custom cursor dot (12px circle, black) with larger follower ring (40px, low opacity). Do not use novelty cursor replacements.

## Scroll Behavior

- Native smooth scroll for anchor links
- Lenis for overriding and smoothing momentum scroll
- Scroll-triggered animations via Framer Motion `useInView` or `whileInView`

---

# 12. TYPOGRAPHY SYSTEM

## Font Selections

### Display / Headline Font
**Option A (Recommended):** Clash Display (free, Google Fonts alternative via Fontshare)
**Option B:** Cabinet Grotesk (Fontshare — free)
**Option C:** Inter (universal fallback — slightly less editorial)
**Option D:** DM Serif Display for serif headlines combined with a sans-serif body

### Body Font
**Primary:** Inter (Google Fonts)
**Alternative:** Plus Jakarta Sans

### Monospace (for code snippets, labels, ticker)
**Primary:** JetBrains Mono
**Alternative:** Fira Code

## Type Scale

```
Display XL:  7rem / 112px — Hero headline (desktop)
Display L:   5rem / 80px  — Hero headline (tablet)
Display M:   3rem / 48px  — Section headlines
Display S:   2rem / 32px  — Subsection headlines
Body L:      1.125rem / 18px — Intro paragraphs, descriptions
Body M:      1rem / 16px    — Standard body text
Body S:      0.875rem / 14px — Captions, badges, labels
Caption:     0.75rem / 12px  — Fine print, dates, metadata
```

## Font Weight Usage

```
900 / Black   — Hero display text (sparingly)
700 / Bold    — Section headlines, card titles
600 / SemiBold — Subheadings, CTA labels
400 / Regular  — Body text
300 / Light    — Supporting text, captions (use sparingly)
```

## Line Height

```
Display: 0.95–1.05 (tight — editorial feel)
Headlines: 1.1–1.2
Body: 1.6–1.7 (comfortable reading)
Caption: 1.4
```

## Letter Spacing

```
Display text: -0.02em to -0.04em (slight tightening)
Eyebrow / label text: 0.08em to 0.12em (wide tracking)
Body: 0em (default)
Monospace: 0.02em
```

## Implementation

```javascript
// tailwind.config.js
fontFamily: {
  display: ['Clash Display', 'Cabinet Grotesk', 'Inter', 'sans-serif'],
  body: ['Inter', 'Plus Jakarta Sans', 'sans-serif'],
  mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
}
```

---

# 13. COLOR PALETTE

## Primary Theme: Black & White Editorial

The portfolio uses a near-monochromatic palette as the base, with strategic use of a single accent color for interactive elements and highlights.

### Core Colors

```
Background Primary:   #FFFFFF (Pure White)
Background Secondary: #F5F5F5 (Off-white / Warm Gray)
Background Dark:      #0A0A0A (Near Black)
Background Dark 2:    #111111 (Dark sections)

Text Primary:         #0A0A0A (Near Black — softer than pure black)
Text Secondary:       #404040 (Dark Gray)
Text Muted:          #888888 (Medium Gray)
Text Subtle:         #C0C0C0 (Light Gray)

Border Light:         #E5E5E5
Border Medium:        #D0D0D0
Border Dark:          #2A2A2A (for dark sections)
```

### Accent Color (Choose One)

Pick a SINGLE accent color and use it exclusively for:
- Primary CTA buttons
- Active nav links
- Hover states on interactive elements
- Key stat numbers
- Tag/badge outlines

**Option A:** Electric Blue — `#0066FF` (clean, tech-forward)
**Option B:** Warm Orange — `#FF5500` (energetic, creative)
**Option C:** Acid Green — `#AAFF00` (bold, memorable)
**Option D:** Pure Red — `#FF0000` (classic editorial Swiss)
**Recommended:** Electric Blue `#0066FF` — professional, trusted by tech industry

### Extended Color Usage

```javascript
// In Tailwind / CSS Variables
:root {
  --color-bg:          #FFFFFF;
  --color-bg-alt:      #F5F5F5;
  --color-bg-dark:     #0A0A0A;
  --color-text:        #0A0A0A;
  --color-text-muted:  #888888;
  --color-accent:      #0066FF;
  --color-accent-dark: #004FCC;
  --color-border:      #E5E5E5;
  --color-border-dark: #2A2A2A;
}
```

### Section Background Strategy

Alternate between white and very light gray to create visual breaks between sections without using borders or dividers:

```
Hero:           White (#FFFFFF)
About:          Off-white (#F5F5F5)
Skills:         White (#FFFFFF)
Projects:       Off-white (#F5F5F5)
Experience:     White (#FFFFFF)
Certifications: Off-white (#F5F5F5)
Contact:        Near-black (#0A0A0A) — dark finale for drama
Footer:         #111111
```

---

# 14. ANIMATION & MOTION GUIDELINES

## Core Philosophy

Motion should feel inevitable, not performative. Every animation must serve a purpose:
1. Guide attention
2. Communicate state change
3. Provide spatial context (where am I navigating to?)
4. Add delight without distraction

## Animation Vocabulary

### Entrance Animations (Scroll-Triggered)

All section content enters via a combination of:
- Fade in (opacity 0 → 1)
- Translate up (y: 30px → 0) or (y: 50px → 0 for larger elements)
- Scale (0.95 → 1.0 for cards, very subtle)

Never use:
- Rotate in (feels amateur)
- Flip / 3D perspective (distracting)
- Bounce (too playful for this aesthetic)
- Slide in from left/right (unless intentional storytelling element)

### Stagger Pattern

When multiple elements appear in sequence:
```javascript
// Framer Motion stagger container
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,  // 80ms between children
    }
  }
};

// Individual item
const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94]  // Custom ease curve
    }
  }
};
```

### Hero Headline Animation

The hero headline gets special treatment — words or lines animate in sequentially:
```javascript
// Split headline into lines, animate each
const heroLineVariants = {
  hidden: { opacity: 0, y: 60, skewY: 2 },
  visible: {
    opacity: 1,
    y: 0,
    skewY: 0,
    transition: {
      duration: 0.7,
      ease: [0.215, 0.61, 0.355, 1]
    }
  }
};
```

### Hover Animations

Cards and interactive elements:
```javascript
// Card hover
whileHover={{ y: -4, transition: { duration: 0.2, ease: "easeOut" } }}

// Button hover
whileHover={{ scale: 1.02 }}
whileTap={{ scale: 0.98 }}

// Link hover
// CSS: underline grows from left to right via scaleX transform
```

### Page Transition

Between homepage and case study pages:
```javascript
// Route transition wrapper
const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.3 } }
};
```

### Scroll-Based Parallax

Subtle parallax on hero background element or about section image:
```javascript
// Framer Motion useScroll + useTransform
const { scrollY } = useScroll();
const y = useTransform(scrollY, [0, 500], [0, -80]);
// Apply to background element: style={{ y }}
```

### Number Counter Animation

Stats section numbers count up from 0:
```javascript
// Use framer-motion's animate with onUpdate
// Or react-countup library
import CountUp from 'react-countup';
<CountUp end={5} duration={2} enableScrollSpy scrollSpyOnce />
```

## Lenis Smooth Scroll Setup

```javascript
// main.jsx or App.jsx
import Lenis from '@studio-freight/lenis';

const lenis = new Lenis({
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  smooth: true,
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);
```

## GSAP Integration (Optional)

For more complex scroll-driven storytelling in the hero or project sections:
```javascript
// Install: npm install gsap @gsap/react
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Example: Horizontal scroll section for projects
gsap.to(".projects-track", {
  xPercent: -100,
  ease: "none",
  scrollTrigger: {
    trigger: ".projects-section",
    pin: true,
    scrub: 1,
    end: "+=3000"
  }
});
```

Use GSAP only for complex scroll-pinning or horizontal scroll effects. For standard entrance animations, Framer Motion is preferred.

## Animation Performance Rules

- Always use `will-change: transform` on heavily animated elements
- Prefer `transform` and `opacity` only — never animate layout properties (width, height, top, left)
- Use `useReducedMotion` hook to respect `prefers-reduced-motion` accessibility setting
- Lazy initialize GSAP ScrollTrigger instances

```javascript
// Respect reduced motion preference
import { useReducedMotion } from 'framer-motion';
const shouldReduceMotion = useReducedMotion();
const animationVariants = shouldReduceMotion ? { hidden: {}, visible: {} } : fullVariants;
```

---

# 15. MOBILE RESPONSIVENESS STRATEGY

## Breakpoint System

```javascript
// tailwind.config.js — matching Tailwind defaults
screens: {
  'sm':  '640px',
  'md':  '768px',
  'lg':  '1024px',
  'xl':  '1280px',
  '2xl': '1536px',
}
```

## Mobile-First Development

Write all CSS mobile-first. Add complexity at larger breakpoints, not the reverse.

```css
/* Mobile default */
.hero-headline { font-size: 2.5rem; }

/* Tablet */
@media (min-width: 768px) { .hero-headline { font-size: 4rem; } }

/* Desktop */
@media (min-width: 1024px) { .hero-headline { font-size: 7rem; } }
```

## Section-by-Section Responsiveness

| Section | Desktop | Tablet | Mobile |
|---------|---------|--------|--------|
| Nav | Full links + CTAs | Full links, smaller CTAs | Hamburger menu |
| Hero | Large type, full layout | Medium type | Smaller type, stacked |
| About | 2-column | 2-column | Single column |
| Skills | 6-column tag flow | 4-column | 2-column |
| Projects | Featured + 3-col grid | 2-col grid | Single card stack |
| Experience | Timeline | Timeline, narrower | Stacked list |
| Certifications | 3-column grid | 2-column | Single column |
| Contact | 2-column | 2-column | Single column |

## Touch Interactions

- All tap targets minimum 44x44px (Apple HIG standard)
- No hover-only interactions that reveal critical content
- Swipeable project cards on mobile using `react-swipeable` or CSS scroll-snap
- Bottom sheet patterns for mobile overlays

## Mobile Typography

```
Mobile Hero:    36–40px (clamp)
Mobile H2:      28–32px
Mobile Body:    16px (minimum — never below 15px)
Mobile Caption: 13–14px
```

Use `clamp()` for fluid typography:
```css
.hero-headline {
  font-size: clamp(2.25rem, 6vw + 1rem, 7rem);
}
```

---

# 16. ACCESSIBILITY REQUIREMENTS

## Standards Target

WCAG 2.1 Level AA compliance minimum. Aim for AAA where feasible.

## Implementation Requirements

**Color Contrast:**
- Body text: minimum 4.5:1 contrast ratio
- Large text (18px+ bold or 24px+ regular): minimum 3:1
- Test all color combinations with a contrast checker
- The muted text color #888888 on white background (#FFFFFF) achieves 3.5:1 — use only for decorative text, not body content

**Keyboard Navigation:**
- All interactive elements reachable by Tab key
- Logical tab order matching visual order
- Visible focus indicator on all interactive elements (never `outline: none` without a custom replacement)
- Focus styles: `outline: 2px solid var(--color-accent); outline-offset: 3px;`

**Screen Reader Support:**
- Semantic HTML throughout (use `<nav>`, `<main>`, `<section>`, `<article>`, `<header>`, `<footer>`)
- All images have descriptive `alt` text (or `alt=""` for decorative images)
- Form inputs have associated `<label>` elements
- ARIA landmarks for major sections
- `aria-label` on icon-only buttons (GitHub icon button: `aria-label="View GitHub Profile"`)

**Reduced Motion:**
- All animations respect `prefers-reduced-motion: reduce` system setting
- Use `useReducedMotion` from Framer Motion

**Semantic Structure:**
- One `<h1>` per page (the developer's name or hero headline)
- Logical heading hierarchy (h1 → h2 → h3, never skip levels)
- Section headings inside `<section>` elements
- Skip-to-main-content link (hidden by default, visible on focus) as first element in `<body>`

**Forms:**
- All inputs labeled
- Errors announced via `aria-live="polite"` region
- Required fields marked with `aria-required="true"`
- Success/error state communicated both visually and to screen readers

---

# 17. PERFORMANCE OPTIMIZATION

## Target Scores

- Lighthouse Performance: 95+
- Lighthouse Accessibility: 98+
- Lighthouse Best Practices: 100
- Lighthouse SEO: 100
- Core Web Vitals: All green
  - LCP (Largest Contentful Paint): < 2.5s
  - CLS (Cumulative Layout Shift): < 0.1
  - FID / INP (Interaction to Next Paint): < 200ms

## Optimization Strategies

**Asset Optimization:**
- Use WebP format for all images (with JPEG/PNG fallback via `<picture>`)
- Implement `loading="lazy"` on all below-fold images
- Use `srcset` for responsive images at multiple resolutions
- Optimize all images before build (use `vite-plugin-imagemin` or `squoosh`)
- SVG icons where possible instead of PNG icon sets

**Font Loading:**
- Subset fonts to include only used characters
- Use `font-display: swap` to prevent invisible text during load
- Self-host fonts in `/public/fonts/` to avoid third-party DNS lookups
- Preload hero section fonts:
  ```html
  <link rel="preload" href="/fonts/ClashDisplay-Bold.woff2" as="font" type="font/woff2" crossorigin>
  ```

**JavaScript:**
- Vite automatic code splitting — each route loads only required code
- Lazy load heavy components (GSAP, case study content) with `React.lazy` + `Suspense`
- Minimize main bundle — keep < 200KB gzipped
- Tree-shake all libraries (avoid importing entire libraries)

**CSS:**
- Tailwind CSS purges unused styles in production
- No CSS-in-JS (Tailwind utility classes preferred)
- Critical CSS inlined in `<head>` for above-fold content

**Caching:**
- Vercel CDN caches static assets automatically
- Set long cache TTLs for hashed assets (fonts, images, JS chunks)
- Service worker for offline capability (optional — use Vite PWA plugin)

**Rendering:**
- React single-page app — hydrates instantly
- Use `React.memo` on heavy components that don't need re-renders
- Debounce scroll handlers — use `passive: true` event listeners
- Avoid layout thrashing in scroll animations — read then write to DOM

---

# 18. SEO REQUIREMENTS

## Metadata

```html
<!-- index.html / React Helmet -->
<title>[Developer Name] — Full-Stack Developer Portfolio</title>
<meta name="description" content="Full-stack web developer specializing in React, Node.js, and AI-powered applications. View projects including MOCKMASTER, an AI mock test generator." />
<meta name="keywords" content="full-stack developer, React developer, Node.js, portfolio, [Developer Name], web developer India" />
<meta name="author" content="[Developer Name]" />
<link rel="canonical" href="https://yourportfolio.com" />
```

## Open Graph (Social Sharing)

```html
<meta property="og:type" content="website" />
<meta property="og:url" content="https://yourportfolio.com" />
<meta property="og:title" content="[Developer Name] — Full-Stack Developer" />
<meta property="og:description" content="Building full-stack web applications with React, Node.js, and AI. See MOCKMASTER and more." />
<meta property="og:image" content="https://yourportfolio.com/og-image.png" />
<meta property="og:image:width" content="1200" />
<meta property="og:image:height" content="630" />
```

## Twitter Card

```html
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:creator" content="@yourtwitterhandle" />
<meta name="twitter:title" content="[Developer Name] — Full-Stack Developer" />
<meta name="twitter:description" content="Building full-stack web apps with React, Node.js, and AI." />
<meta name="twitter:image" content="https://yourportfolio.com/og-image.png" />
```

## Structured Data (JSON-LD)

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "[Developer Name]",
  "url": "https://yourportfolio.com",
  "jobTitle": "Full-Stack Web Developer",
  "description": "Full-stack developer specializing in React, Node.js, and AI-powered web applications.",
  "sameAs": [
    "https://github.com/yourusername",
    "https://linkedin.com/in/yourhandle"
  ]
}
</script>
```

## Technical SEO

- `sitemap.xml` generated automatically (use `vite-plugin-sitemap`)
- `robots.txt` allowing all crawlers
- Clean URL structure (no hash routing — use React Router with proper paths)
- All pages return HTTP 200
- 404 page returns HTTP 404 status code

---

# 19. TECHNICAL STACK RECOMMENDATIONS

## Core Frontend Stack

```
Framework:      React 18 (with Hooks — no class components)
Build Tool:     Vite 5+
Language:       JavaScript (TypeScript recommended for scalability)
Styling:        Tailwind CSS 3+
Animation:      Framer Motion 11+
Routing:        React Router v6
State:          React useState/useContext (no Redux needed for portfolio)
```

## Animation Stack

```
Primary:        Framer Motion (entrance animations, hover states, page transitions)
Advanced:       GSAP + ScrollTrigger (horizontal scrolling, complex timelines)
Smooth Scroll:  Lenis (@studio-freight/lenis)
```

## Utility Libraries

```
Icons:          Lucide React, React Icons (for brand icons)
Tech Icons:     Simple Icons (react-simple-icons)
Fonts:          Fontshare CDN (Clash Display, Cabinet Grotesk)
Analytics:      Vercel Analytics + Google Analytics 4
SEO:            React Helmet Async
Counting:       React CountUp
Marquee:        React Fast Marquee
Toast/Notify:   Sonner or React Hot Toast
```

## Development Tools

```
Linter:         ESLint (with eslint-config-airbnb or react-app)
Formatter:      Prettier
Git Hooks:      Husky + lint-staged
Version Control: Git + GitHub
Environment:    .env for API keys
```

## Optional Backend

```
Runtime:        Node.js 20+ LTS
Framework:      Express.js
Email:          Nodemailer + Gmail SMTP or Resend API
Deployment:     Vercel Serverless Functions (recommended — no separate server)
Alternative:    EmailJS (client-side — no backend needed at all)
```

---

# 20. BACKEND REQUIREMENTS

## Scope: Minimal

The portfolio requires minimal backend functionality. The primary need is contact form submission.

## Option A: Vercel Serverless Functions (Recommended)

Create an API route at `api/contact.js` in the project root:

```javascript
// api/contact.js
import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, subject, message } = req.body;

  // Validation
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Required fields missing' });
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  await transporter.sendMail({
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_USER,
    replyTo: email,
    subject: `Portfolio Contact: ${subject} from ${name}`,
    text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
  });

  return res.status(200).json({ success: true });
}
```

## Option B: EmailJS (No Backend — Fully Client-Side)

```javascript
import emailjs from '@emailjs/browser';

emailjs.send(
  'YOUR_SERVICE_ID',
  'YOUR_TEMPLATE_ID',
  { name, email, message },
  'YOUR_PUBLIC_KEY'
);
```

## Environment Variables

```bash
# .env (never committed to Git)
VITE_EMAIL_SERVICE_ID=emailjs_service_xxx
VITE_EMAIL_TEMPLATE_ID=template_xxx
VITE_EMAIL_PUBLIC_KEY=xxx
VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

---

# 21. CMS / ADMIN REQUIREMENTS

## Philosophy: No CMS (Keep It Simple)

For a personal portfolio at this stage, a full CMS (WordPress, Contentful, Sanity) adds unnecessary complexity and maintenance overhead.

**Recommended approach:** Store all content in structured JSON files or JavaScript data files. Edit them directly when updating the portfolio.

## Content Data Files Structure

```javascript
// src/data/projects.js
export const projects = [
  {
    id: 'mockmaster',
    title: 'MOCKMASTER',
    tagline: 'AI-powered mock test generator platform',
    description: 'Full description here...',
    longDescription: 'Detailed case study content...',
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'OpenAI API'],
    liveUrl: 'https://mockmaster.live',
    githubUrl: 'https://github.com/username/mockmaster',
    featured: true,
    year: 2024,
    category: 'Full-Stack + AI',
    thumbnail: '/images/projects/mockmaster.webp',
    mockup: '/images/projects/mockmaster-mockup.webp',
  },
  // more projects...
];

// src/data/experience.js
export const experience = [ /* ... */ ];

// src/data/certifications.js
export const certifications = [ /* ... */ ];

// src/data/skills.js
export const skills = { /* ... */ };
```

## Future CMS Option

If the portfolio grows and needs frequent updates without code changes:
- **Sanity.io** (free tier, excellent API, React integration)
- **Contentful** (generous free tier)
- **Notion as CMS** (via Notion API — unconventional but clever)

---

# 22. PROJECT SHOWCASE STRUCTURE

## Project Card Component Props

```typescript
interface ProjectCard {
  id: string;
  title: string;
  tagline: string;
  description: string;
  tech: string[];
  liveUrl: string;
  githubUrl: string;
  featured: boolean;
  year: number;
  category: string;
  thumbnail: string;
  caseStudySlug?: string;
}
```

## Featured Project Card (MOCKMASTER)

Full-width or dominant card with:
- Large title (48–64px)
- Problem statement (1 sentence)
- Solution overview (2–3 sentences)
- Tech stack badges (each badge shows icon + name)
- Live demo link (opens new tab)
- GitHub link (opens new tab)
- Case study link (navigates to `/projects/mockmaster`)
- High-quality mockup image (browser frame or device mockup)
- Year and category in top-right corner

## Standard Project Card

Smaller card (1/3 width on desktop) with:
- Project number (01, 02, 03...)
- Title
- One-line tagline
- 3–4 tech badges
- Thumbnail image
- Live + GitHub icons (appear on hover on desktop, always visible on mobile)

## Projects Page (All Projects)

If there are more than 6 projects, a dedicated `/projects` page with:
- Filter by category (Full-Stack, Frontend, AI, Open Source)
- Filter by tech (React, Node.js, etc.)
- List or grid layout toggle
- All project cards

---

# 23. CASE STUDY PAGE STRUCTURE

## Route: `/projects/mockmaster`

### MOCKMASTER Case Study Sections

```
1. Hero / Cover
   - Project title (large)
   - Tagline
   - Key metadata: Role | Timeline | Category | Status
   - Live demo + GitHub CTA buttons
   - Full-width hero image / screenshot

2. Overview
   - The Problem (1 paragraph — what pain point does this solve?)
   - The Solution (1 paragraph — what did you build?)
   - Your Role (what specifically did you do?)

3. Features / Core Functionality
   - AI Question Generation (describe how it works)
   - Mock Test Engine (timed tests, scoring)
   - Performance Analytics (user progress tracking)
   - User Authentication (JWT, sessions)
   - Feature list with icons

4. Technical Architecture
   - System diagram (simple visual — React frontend, Node/Express API, MongoDB, OpenAI API)
   - Database schema overview
   - API design decisions
   - Key technical challenges and how you solved them

5. Design Process (if you designed the UI)
   - Color palette, typography choices
   - Key UI components
   - Before/after if applicable

6. Challenges & Learnings
   - 2–3 specific technical challenges
   - How each was solved
   - What you learned

7. Results / Outcome
   - Live at URL
   - Number of test questions generated
   - Any usage metrics
   - Screenshots gallery

8. Tech Stack Breakdown
   - Frontend: React, Tailwind, Axios
   - Backend: Node.js, Express, JWT
   - Database: MongoDB, Mongoose
   - AI: OpenAI GPT API
   - Deployment: Vercel + Railway/Render

9. Navigation Footer
   - ← Previous Project
   - Back to All Projects
   - Next Project →
```

---

# 24. RECRUITER-FOCUSED FEATURES

## Features Specifically for Recruiters

**Quick Info Strip (above fold):**
A subtle horizontal band below the nav or embedded in the hero showing:
```
[💼 Open to Work]  [📍 India · Remote-Friendly]  [⚡ Full-Stack Developer]  [📄 Resume ↓]
```

**Resume Prominence:**
- Resume button in nav (never hidden)
- Secondary resume download CTA in hero section
- Resume download at bottom of experience section

**Tech Stack Immediately Visible:**
- Skills section positioned before the fold on desktop (partially visible)
- Tech stack tags on every project card

**No-Friction Contact:**
- Email address visible as plain text in the contact section (copyable without needing to fill a form)
- Phone number optional (if comfortable sharing)
- LinkedIn link prominent

**"Hire Me" or "Available for Opportunities" Badge:**
- Small green dot + "Open to Opportunities" label in hero or nav
- Toggleable if the developer gets a job (change to "Open to Freelance" or hide)

---

# 25. CONTACT & LEAD GENERATION STRATEGY

## Contact Points (Multiple Entry Points)

1. **Nav CTA:** "Let's Talk" or "Hire Me" button → scrolls to contact section
2. **Hero CTA:** "Get in Touch" button or email link
3. **About Section:** CTA link at the bottom
4. **Footer:** Email + social links always visible
5. **Floating CTA (optional):** Fixed bottom-right button on mobile — "💬 Contact"

## Contact Form Behavior

**Progressive Form (reduces drop-off):**
Step 1: Are you a recruiter, client, or collaborator? (buttons)
Step 2: Form pre-fills subject based on selection
Step 3: Rest of form

**Simple Form (recommended for MVP):**
- Name, Email, Subject (dropdown), Message
- Inline validation on blur
- Submit shows loading state
- On success: clear form + show success message
- Copy: "I'll get back to you within 24–48 hours."

## Lead Capture Without a Form

For visitors who don't want to fill forms:
- Email address as a `mailto:` link with pre-filled subject
- LinkedIn "Message" button
- Calendar link (optional): Cal.com or Calendly for scheduling calls

---

# 26. RESUME DOWNLOAD FLOW

## Implementation

Resume PDF hosted in `/public/resume/` directory.

```html
<!-- Nav button -->
<a href="/resume/YourName-Resume.pdf" download="YourName-FullStack-Developer.pdf">
  Download Resume
</a>
```

**Naming convention:** `[FirstName][LastName]-FullStack-Developer-Resume.pdf`
Do not use generic names like `resume.pdf` — this matters for recruiter file organization.

## Resume PDF Requirements

- One page (two pages maximum for 3+ years experience)
- ATS-friendly format (standard fonts, no tables for layout, no columns in complex structures)
- Includes: Name, contact info, skills, experience, projects, education, certifications
- PDF optimized to < 500KB
- Created with LaTeX, Typst, or a high-quality Figma template

## Analytics on Resume Downloads

Track resume download as a conversion event in Google Analytics:
```javascript
// On download click
gtag('event', 'resume_download', {
  event_category: 'engagement',
  event_label: 'Resume PDF',
});
```

---

# 27. GITHUB INTEGRATION IDEAS

## Option A: GitHub Contribution Graph

Embed the GitHub contribution graph via `github-readme-stats` API or a custom-rendered SVG.

```html
<img src="https://ghchart.rshah.org/yourusername" alt="GitHub Contribution Chart" />
```

## Option B: GitHub Stats Card

```html
<img src="https://github-readme-stats.vercel.app/api?username=yourusername&show_icons=true&theme=default" />
```

Note: Reduce reliance on third-party GitHub stat services if performance is a concern. Cache the response or render your own stats.

## Option C: GitHub API Integration (Custom Build)

```javascript
// Fetch pinned repos from GitHub GraphQL API
const GITHUB_QUERY = `
{
  user(login: "yourusername") {
    pinnedItems(first: 6, types: REPOSITORY) {
      nodes {
        ... on Repository {
          name
          description
          url
          stargazerCount
          primaryLanguage { name color }
        }
      }
    }
  }
}
`;
```

This allows you to display your pinned GitHub repos dynamically — auto-updating without changing the portfolio code.

## Option D: Minimal Approach (Recommended for MVP)

A simple "GitHub Stats" section with manually maintained:
- Total public repos count
- Top languages
- Most starred project
- Link to GitHub profile

This is faster to implement and always up-to-date (just update the data file quarterly).

---

# 28. FUTURE SCALABILITY IDEAS

## Phase 2 Features (After Launch)

1. **Blog / Writing Section:** Share technical articles, tutorials, or learning notes. Use MDX for content with a simple file-based CMS.

2. **Testimonials Section:** Add recommendations from colleagues, mentors, or clients. Request LinkedIn recommendations and display quotes.

3. **Speaking / Events:** If you speak at meetups or workshops, document them.

4. **Newsletter:** Simple email capture (Resend or Buttondown) for people who want to follow your work.

5. **Project Filtering:** Filter portfolio by category, tech stack, or year.

6. **Dark Mode Toggle:** The design supports this naturally given the black/white palette — add a mode toggle.

7. **Internationalization:** If targeting global clients, add English/Hindi language toggle.

8. **Interactive Resume:** An interactive web-based resume in addition to the PDF download.

9. **Micro-SaaS Landing Pages:** As MOCKMASTER and other products grow, each gets its own full landing page.

---

# 29. DEPLOYMENT STRATEGY

## Primary Deployment: Vercel

**Why Vercel:**
- Native React/Vite support
- Automatic HTTPS
- Global CDN
- Serverless function support (for contact form API)
- GitHub integration (auto-deploy on push to main)
- Analytics built-in
- Free tier is more than sufficient

## Setup Steps

```bash
# 1. Install Vercel CLI
npm install -g vercel

# 2. Login
vercel login

# 3. Deploy from project root
vercel

# 4. Production deploy
vercel --prod
```

## Custom Domain

1. Purchase domain on Namecheap, Google Domains, or Cloudflare
2. Add domain in Vercel dashboard
3. Update DNS records at registrar
4. SSL auto-provisioned by Vercel

**Recommended domain patterns:**
- `yourname.dev`
- `yourname.io`
- `iamyourname.com`
- `yourname.codes`

## Preview Deployments

Every PR / branch push creates a preview URL. Use this for:
- Testing new sections before going live
- Sharing with mentors for feedback
- Testing on real devices

## Build Configuration

```json
// vercel.json
{
  "buildCommand": "vite build",
  "outputDirectory": "dist",
  "framework": "vite",
  "routes": [
    { "src": "/(.*)", "dest": "/index.html" }
  ]
}
```

---

# 30. ANALYTICS & TRACKING

## Google Analytics 4 Setup

```javascript
// Install: npm install gtag
// Add to index.html <head>:
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

## Vercel Analytics

```javascript
// Install: npm install @vercel/analytics
import { Analytics } from '@vercel/analytics/react';

// Add to App.jsx
<Analytics />
```

## Custom Event Tracking

Track these key events:
```javascript
// Resume download
gtag('event', 'download', { file_name: 'resume.pdf' });

// Project click
gtag('event', 'project_view', { project_name: 'MOCKMASTER' });

// Contact form submit
gtag('event', 'form_submit', { form_name: 'contact' });

// CTA click
gtag('event', 'cta_click', { cta_location: 'hero', cta_text: 'View My Work' });

// GitHub link click
gtag('event', 'outbound_link', { link_url: 'github.com/username' });
```

## Heatmaps (Optional)

Microsoft Clarity (free) — adds heatmaps and session recordings to understand how visitors interact with the page. Excellent for optimization post-launch.

---

# 31. SECURITY CONSIDERATIONS

## API Keys and Secrets

- NEVER commit API keys to GitHub
- Use `.env` files for all secrets (listed in `.gitignore`)
- Use `VITE_` prefix for client-side environment variables
- Server-side secrets (email credentials) stay in Vercel Environment Variables — never in client bundle

## Contact Form Security

- Rate limiting on the API endpoint (max 5 submissions per IP per hour)
- Input sanitization before processing
- CORS configured to only accept requests from your portfolio domain
- Honeypot field to catch spam bots:

```jsx
// Hidden field — bots fill it, humans don't
<input
  type="text"
  name="website"
  className="hidden"
  tabIndex={-1}
  autoComplete="off"
/>
// On server: reject if req.body.website is not empty
```

## Content Security Policy

```html
<!-- index.html -->
<meta http-equiv="Content-Security-Policy" 
      content="default-src 'self'; 
               script-src 'self' 'unsafe-inline' www.googletagmanager.com;
               style-src 'self' 'unsafe-inline' fonts.googleapis.com;
               font-src 'self' fonts.gstatic.com;
               img-src 'self' data: https:;
               connect-src 'self' vitals.vercel-insights.com www.google-analytics.com;">
```

## HTTPS Only

Vercel provides HTTPS by default. Ensure no HTTP asset loads (mixed content warnings).

---

# 32. FINAL UI INSPIRATIONS

## Reference Sites to Study

These sites are studied for design patterns, NOT to be copied:

**Developer Portfolios:**
- bruno-simon.com — 3D creative portfolio (interaction inspiration)
- joshwcomeau.com — excellent typography and content architecture
- leerob.io — minimal, fast, perfect content hierarchy
- cassie.codes — personality-driven, memorable

**Agency / Awwwards:**
- obys.agency — bold typography + scroll animations
- activetheory.net — premium motion
- stripepress.com — Swiss editorial applied to web

**Inspiration Libraries:**
- awwwards.com/websites/portfolio
- behance.net/search/projects?search=developer+portfolio
- dribbble.com/search/portfolio+website

## Design Patterns to Adopt

From the above references:
- Large numbers as section headings (01, 02, 03)
- Full-viewport section transitions
- Horizontal scroll for project showcases
- Bold headline + muted supporting text contrast
- Mouse-tracking subtle effects on hero
- Monospace type for code/tech labels

---

# 33. SUGGESTED FOLDER STRUCTURE

```
portfolio/
├── public/
│   ├── fonts/
│   │   ├── ClashDisplay-Bold.woff2
│   │   ├── ClashDisplay-Regular.woff2
│   │   └── JetBrainsMono-Regular.woff2
│   ├── images/
│   │   ├── projects/
│   │   │   ├── mockmaster.webp
│   │   │   └── mockmaster-mockup.webp
│   │   └── og-image.png
│   ├── resume/
│   │   └── YourName-FullStack-Developer-Resume.pdf
│   └── favicon.ico
│
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.jsx
│   │   │   ├── Footer.jsx
│   │   │   └── Layout.jsx
│   │   ├── sections/
│   │   │   ├── Hero.jsx
│   │   │   ├── About.jsx
│   │   │   ├── Skills.jsx
│   │   │   ├── Projects.jsx
│   │   │   ├── Experience.jsx
│   │   │   ├── Certifications.jsx
│   │   │   ├── Contact.jsx
│   │   │   └── Marquee.jsx
│   │   ├── ui/
│   │   │   ├── Button.jsx
│   │   │   ├── Badge.jsx
│   │   │   ├── ProjectCard.jsx
│   │   │   ├── FeaturedProjectCard.jsx
│   │   │   ├── CertificationCard.jsx
│   │   │   ├── ExperienceItem.jsx
│   │   │   ├── SectionLabel.jsx
│   │   │   ├── AnimatedText.jsx
│   │   │   └── Cursor.jsx
│   │   └── animations/
│   │       ├── FadeIn.jsx
│   │       ├── SlideUp.jsx
│   │       └── StaggerContainer.jsx
│   │
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── ProjectCaseStudy.jsx
│   │   └── NotFound.jsx
│   │
│   ├── data/
│   │   ├── projects.js
│   │   ├── experience.js
│   │   ├── certifications.js
│   │   ├── skills.js
│   │   └── personal.js
│   │
│   ├── hooks/
│   │   ├── useScrollPosition.js
│   │   ├── useInView.js
│   │   └── useContactForm.js
│   │
│   ├── lib/
│   │   ├── analytics.js
│   │   ├── emailjs.js
│   │   └── lenis.js
│   │
│   ├── styles/
│   │   └── globals.css
│   │
│   ├── App.jsx
│   └── main.jsx
│
├── api/
│   └── contact.js          (Vercel Serverless Function)
│
├── .env
├── .env.example
├── .gitignore
├── index.html
├── tailwind.config.js
├── vite.config.js
├── vercel.json
└── package.json
```

---

# 34. SUGGESTED COMPONENT ARCHITECTURE

## Navbar Component

```jsx
// components/layout/Navbar.jsx
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  // useScrollPosition to toggle isScrolled
  // Intersection Observer to track activeSection

  return (
    <motion.nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/90 backdrop-blur-md border-b border-gray-100' : 'bg-transparent'
    }`}>
      {/* Logo */}
      {/* Nav links (hidden on mobile) */}
      {/* CTA buttons */}
      {/* Hamburger (mobile only) */}
      {/* Mobile menu overlay */}
    </motion.nav>
  );
};
```

## Section Wrapper Pattern

```jsx
// components/animations/FadeIn.jsx
const FadeIn = ({ children, delay = 0, className = '' }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
```

## Project Card Component

```jsx
// components/ui/ProjectCard.jsx
const ProjectCard = ({ project }) => {
  return (
    <motion.article
      whileHover={{ y: -6 }}
      transition={{ duration: 0.2, ease: 'easeOut' }}
      className="group rounded-xl border border-gray-100 overflow-hidden bg-white"
    >
      {/* Thumbnail */}
      <div className="relative overflow-hidden aspect-video bg-gray-50">
        <img
          src={project.thumbnail}
          alt={project.title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <span className="text-sm text-gray-400 font-mono">{project.year}</span>
          <span className="text-xs bg-gray-100 px-2 py-1 rounded-full">{project.category}</span>
        </div>
        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
        <p className="text-gray-500 text-sm mb-4">{project.tagline}</p>

        {/* Tech badges */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.map(t => (
            <span key={t} className="text-xs border border-gray-200 px-2 py-1 rounded-full">
              {t}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex items-center gap-4">
          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer"
             className="text-sm font-medium text-accent hover:underline">
            Live Demo →
          </a>
          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer"
             className="text-sm text-gray-400 hover:text-gray-700">
            GitHub
          </a>
        </div>
      </div>
    </motion.article>
  );
};
```

---

# 35. SUGGESTED ANIMATIONS USING FRAMER MOTION

## Animation Variants Library

```javascript
// src/lib/animations.js

export const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }
  }
};

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.5 }
  }
};

export const staggerContainer = (staggerChildren = 0.1, delayChildren = 0) => ({
  hidden: {},
  visible: {
    transition: { staggerChildren, delayChildren }
  }
});

export const heroHeadline = {
  hidden: { opacity: 0, y: 80, skewY: 3 },
  visible: {
    opacity: 1,
    y: 0,
    skewY: 0,
    transition: { duration: 0.8, ease: [0.215, 0.61, 0.355, 1] }
  }
};

export const cardHover = {
  rest: { y: 0, boxShadow: '0 1px 3px rgba(0,0,0,0.06)' },
  hover: {
    y: -6,
    boxShadow: '0 12px 32px rgba(0,0,0,0.12)',
    transition: { duration: 0.2, ease: 'easeOut' }
  }
};

export const navReveal = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' }
  }
};

export const pageTransition = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.4 } },
  exit: { opacity: 0, transition: { duration: 0.3 } }
};
```

## Usage in Components

```jsx
// In Hero section:
<motion.div
  variants={staggerContainer(0.12, 0.3)}
  initial="hidden"
  animate="visible"
>
  {heroLines.map((line, i) => (
    <div key={i} className="overflow-hidden">
      <motion.h1 variants={heroHeadline} className="text-display">
        {line}
      </motion.h1>
    </div>
  ))}
</motion.div>

// In any scroll section:
<motion.section
  variants={staggerContainer(0.08)}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, margin: "-100px" }}
>
  {items.map(item => (
    <motion.div key={item.id} variants={fadeInUp}>
      {/* content */}
    </motion.div>
  ))}
</motion.section>
```

---

# 36. TAILWIND CSS STYLING STRATEGY

## Configuration

```javascript
// tailwind.config.js
import defaultTheme from 'tailwindcss/defaultTheme';

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['Clash Display', ...defaultTheme.fontFamily.sans],
        body: ['Inter', ...defaultTheme.fontFamily.sans],
        mono: ['JetBrains Mono', ...defaultTheme.fontFamily.mono],
      },
      colors: {
        accent: {
          DEFAULT: '#0066FF',
          dark: '#004FCC',
          light: '#3385FF',
        },
        neutral: {
          950: '#0A0A0A',
        }
      },
      fontSize: {
        'display-xl': ['7rem', { lineHeight: '0.95', letterSpacing: '-0.04em' }],
        'display-lg': ['5rem', { lineHeight: '1.0', letterSpacing: '-0.03em' }],
        'display-md': ['3rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
      },
      spacing: {
        'section': '7rem',
        'section-sm': '4rem',
      },
      backdropBlur: {
        xs: '2px',
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'), // for case study prose
    require('@tailwindcss/forms'),      // for form styling reset
  ],
};
```

## Utility Class Conventions

```jsx
// Section wrapper — consistent padding
<section className="py-section px-4 sm:px-8 lg:px-16 max-w-7xl mx-auto">

// Section label — eyebrow text
<span className="text-sm font-mono uppercase tracking-widest text-gray-400">
  About Me
</span>

// Display headline
<h2 className="font-display text-display-md font-bold text-neutral-950 mt-4">

// Muted body text
<p className="text-gray-500 text-base leading-relaxed max-w-prose">

// Primary button
<button className="bg-neutral-950 text-white px-6 py-3 rounded text-sm font-medium 
                   hover:bg-neutral-800 transition-colors duration-200">

// Secondary button
<button className="border border-neutral-950 text-neutral-950 px-6 py-3 rounded text-sm font-medium 
                   hover:bg-neutral-950 hover:text-white transition-all duration-200">

// Tech badge
<span className="text-xs border border-gray-200 text-gray-600 px-3 py-1 rounded-full 
                 hover:border-accent hover:text-accent transition-colors">
```

---

# 37. SUGGESTED LIBRARIES

## Production Dependencies

```json
{
  "dependencies": {
    "react": "^18.3.0",
    "react-dom": "^18.3.0",
    "react-router-dom": "^6.22.0",
    "framer-motion": "^11.0.0",
    "@studio-freight/lenis": "^1.0.45",
    "react-fast-marquee": "^1.6.4",
    "react-countup": "^6.5.3",
    "react-icons": "^5.0.1",
    "react-hot-toast": "^2.4.1",
    "@emailjs/browser": "^4.3.3",
    "react-helmet-async": "^2.0.4",
    "@vercel/analytics": "^1.2.2"
  },
  "devDependencies": {
    "@vitejs/plugin-react": "^4.2.1",
    "vite": "^5.1.0",
    "tailwindcss": "^3.4.1",
    "autoprefixer": "^10.4.17",
    "postcss": "^8.4.35",
    "@tailwindcss/typography": "^0.5.10",
    "@tailwindcss/forms": "^0.5.7",
    "eslint": "^8.57.0",
    "prettier": "^3.2.5"
  }
}
```

## Optional Additions

```json
{
  "gsap": "^3.12.5",
  "react-intersection-observer": "^9.8.1",
  "react-use-measure": "^2.1.1",
  "@react-spring/web": "^9.7.3"
}
```

---

# 38. LIGHTHOUSE OPTIMIZATION GOALS

## Target Scores

```
Performance:    ≥ 95
Accessibility:  ≥ 98
Best Practices: 100
SEO:            100
```

## Audit Checklist

**Performance:**
- [ ] All images in WebP format with proper dimensions
- [ ] Hero image (if any) preloaded with `<link rel="preload">`
- [ ] Fonts self-hosted and preloaded
- [ ] JavaScript bundle < 200KB gzipped
- [ ] No unused CSS (Tailwind purge enabled)
- [ ] Lazy loading on all below-fold images
- [ ] No render-blocking resources
- [ ] Third-party scripts (analytics) deferred or async

**Accessibility:**
- [ ] All images have alt text
- [ ] Color contrast ratios meet WCAG AA
- [ ] All form inputs labeled
- [ ] Keyboard navigation fully functional
- [ ] Focus indicators visible and styled
- [ ] `<html lang="en">` set
- [ ] Skip-to-main-content link present

**Best Practices:**
- [ ] HTTPS only
- [ ] No mixed content
- [ ] No deprecated APIs
- [ ] Correct viewport meta tag
- [ ] Console error-free in production

**SEO:**
- [ ] Meta title and description on all pages
- [ ] Canonical URL set
- [ ] sitemap.xml accessible
- [ ] robots.txt configured
- [ ] No broken links
- [ ] Structured data (JSON-LD) implemented

---

# 39. CONTENT WRITING TONE

## Voice Guidelines

The developer's voice across the portfolio should be:

**Confident, not arrogant:**
- ✅ "I build fast, scalable web applications."
- ❌ "I am a world-class developer with unmatched skills."

**Specific, not vague:**
- ✅ "MOCKMASTER generates personalized exam questions using GPT-4."
- ❌ "I built an innovative AI-powered platform."

**Human, not robotic:**
- ✅ "I care about every pixel and every millisecond of load time."
- ❌ "Proficient in delivering high-quality software solutions."

**Active, not passive:**
- ✅ "I designed the architecture, built the API, and shipped in 6 weeks."
- ❌ "A full-stack application was developed."

## Copy Templates

**Hero Headline (choose one style):**
- "Turning ideas into digital experiences."
- "I build things for the web. Good ones."
- "Full-Stack Developer. Problem Solver. Builder."
- "Code that works. Design that breathes."

**Hero Subheadline:**
"I'm [Name], a full-stack web developer from India. I specialize in building performant, user-centered web applications using React, Node.js, and modern tooling. Currently open to full-time roles and freelance projects."

**About Paragraph:**
"I'm a developer who cares about both the code and the experience. Whether I'm designing a system architecture or obsessing over hover state transitions, I believe the details matter. I built MOCKMASTER from scratch — from initial concept to live deployment — and that process taught me what it means to own a product, not just write its code."

**CTA Micro-Copy:**
- Primary: "View My Work →"
- Secondary: "Download Resume"
- Contact: "Let's Talk →" or "Send a Message"
- Project: "Live Demo →" or "See It Live"
- GitHub: "View Source"

**Section Labels (eyebrow text):**
Use consistent style for all section labels:
- "Selected Work" (not "My Projects")
- "About Me" (not "Who Am I")
- "Professional Experience" (not "Work History")
- "Get In Touch" (not "Contact Me")

---

# 40. FINAL DEVELOPMENT ROADMAP

## Phase 0: Setup (Day 1)

- [ ] Initialize Vite + React project
- [ ] Install and configure Tailwind CSS
- [ ] Set up folder structure per Section 33
- [ ] Configure ESLint + Prettier
- [ ] Set up React Router
- [ ] Initialize Git repository
- [ ] Connect to GitHub repository
- [ ] Configure Vercel project (auto-deploy from main branch)
- [ ] Set up environment variables in Vercel dashboard

## Phase 1: Foundation (Days 2–4)

- [ ] Implement global CSS variables and Tailwind config
- [ ] Install and configure fonts (self-hosted)
- [ ] Build Layout component (Navbar + Footer)
- [ ] Build Navbar with scroll behavior and mobile menu
- [ ] Build Footer with links
- [ ] Set up Lenis smooth scroll
- [ ] Set up page transition with Framer Motion
- [ ] Build reusable animation components (FadeIn, SlideUp, StaggerContainer)
- [ ] Create all data files (projects.js, experience.js, etc.)

## Phase 2: Core Sections (Days 5–9)

- [ ] Build Hero section (headline animation, CTAs, scroll indicator)
- [ ] Build About section (bio, stats counter, visual element)
- [ ] Build Skills section (categorized badge layout)
- [ ] Build Projects section (featured card + grid)
- [ ] Build Experience section (timeline)
- [ ] Build Certifications section (card grid)
- [ ] Build Contact section (form + info)
- [ ] Build Marquee strip

## Phase 3: Project Case Study (Days 10–12)

- [ ] Build case study page template
- [ ] Write MOCKMASTER case study content
- [ ] Design and implement case study hero
- [ ] Build case study sections (architecture, tech stack, challenges, results)
- [ ] Add project navigation (prev/next)
- [ ] Configure React Router for `/projects/:slug`

## Phase 4: Polish & Animation (Days 13–15)

- [ ] Audit and refine all scroll-triggered animations
- [ ] Fine-tune typography scale across all sections
- [ ] Add hover states to all interactive elements
- [ ] Implement cursor follower (if using)
- [ ] Optimize all images to WebP
- [ ] Test all CTAs (resume download, live links, GitHub links, form)

## Phase 5: Performance & SEO (Days 16–17)

- [ ] Run Lighthouse audit — fix all issues below target scores
- [ ] Implement React Helmet for meta tags
- [ ] Add Open Graph and Twitter card meta
- [ ] Add JSON-LD structured data
- [ ] Generate and verify sitemap.xml
- [ ] Configure robots.txt
- [ ] Preload hero fonts
- [ ] Verify lazy loading on all images

## Phase 6: Accessibility (Day 18)

- [ ] Keyboard navigation full audit
- [ ] Screen reader test (NVDA / VoiceOver)
- [ ] Color contrast audit (all text)
- [ ] Add skip-to-main-content link
- [ ] Verify all form labels and ARIA attributes
- [ ] Test reduced motion preference

## Phase 7: Analytics & Final QA (Days 19–20)

- [ ] Set up Google Analytics 4
- [ ] Set up Vercel Analytics
- [ ] Configure Microsoft Clarity (optional)
- [ ] Implement custom event tracking (resume download, form submit, project clicks)
- [ ] Cross-browser testing (Chrome, Firefox, Safari, Edge)
- [ ] Mobile testing (iOS Safari, Android Chrome)
- [ ] Test contact form (end-to-end email delivery)
- [ ] Test all external links

## Phase 8: Launch (Day 21)

- [ ] Final Lighthouse audit — all scores confirmed
- [ ] Connect custom domain in Vercel
- [ ] Verify DNS propagation
- [ ] Test live site on custom domain
- [ ] Share on LinkedIn, GitHub profile, and Twitter/X
- [ ] Submit to Awwwards (optional but valuable for visibility)

---

# APPENDIX A: FEATURE PRIORITIZATION MATRIX

| Feature | Priority | Complexity | Impact |
|---------|----------|------------|--------|
| Hero Section | P0 | Medium | Critical |
| Projects Section | P0 | Medium | Critical |
| Contact Form | P0 | Low | Critical |
| Resume Download | P0 | Low | Critical |
| Mobile Responsive | P0 | Medium | Critical |
| Skills Section | P1 | Low | High |
| Experience Section | P1 | Low | High |
| Scroll Animations | P1 | Medium | High |
| MOCKMASTER Case Study | P1 | High | High |
| Certifications Section | P1 | Low | Medium |
| GitHub Integration | P2 | Medium | Medium |
| Blog / Writing | P3 | High | Low |
| Dark Mode Toggle | P3 | Medium | Low |
| GSAP Horizontal Scroll | P3 | High | Low |

**P0** = Must have for launch. P1 = Should have. P2 = Nice to have. P3 = Future.

---

# APPENDIX B: QUICK REFERENCE COMMANDS

```bash
# Initialize project
npm create vite@latest portfolio -- --template react
cd portfolio
npm install

# Install all dependencies
npm install framer-motion @studio-freight/lenis react-router-dom \
  react-fast-marquee react-countup react-icons \
  react-hot-toast @emailjs/browser react-helmet-async @vercel/analytics

# Install dev dependencies
npm install -D tailwindcss autoprefixer postcss \
  @tailwindcss/typography @tailwindcss/forms \
  eslint prettier

# Initialize Tailwind
npx tailwindcss init -p

# Run dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Deploy to Vercel
npx vercel --prod
```

---

*Document Version 1.0.0 — Ready for implementation. Update this document as requirements evolve. Keep it as the single source of truth for all design and development decisions on this project.*
