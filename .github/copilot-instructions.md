# Copilot Instructions — Aryan Sherigar Portfolio

This file is read automatically by GitHub Copilot on every interaction in this
repo. Follow every section below without needing to be reminded.

---

## 1. Project Identity

This is the personal portfolio website of **Aryan Keshav Sherigar**, a
final-year B.Tech student at IIT (ISM) Dhanbad (graduating May 2026),
specialising in Software Engineering and AI/GenAI systems. The site's sole
purpose is to **get Aryan hired** — every design and copy decision should serve
that goal: clarity, credibility, and making it effortless for a recruiter or
hiring manager to understand his skills, see his work, and reach out.

---

## 2. Tech Stack — Non-Negotiable

| Layer | Choice |
|---|---|
| Framework | Next.js (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS |
| Animation | Framer Motion |
| Deployment | Vercel (all code must be edge/serverless-safe) |

- Do **not** suggest alternative frameworks, CSS-in-JS solutions, or
  server-only packages that would break on the Vercel edge runtime.
- Keep `package.json` lean — no experimental, unmaintained, or redundant
  dependencies.

---

## 3. Visual Design System

### Aesthetic Reference
LangChain's website (langchain.com) — developer-focused, clean, generous
whitespace, crisp typography, subtle grid/line details, understated but
polished. Not flashy. Not a creative agency site.

### Color Palette
- Base: muted monochrome — blacks, whites, and grays.
- Accent: **one** accent color used sparingly for CTAs, active states, links,
  and highlights. Placeholder: `[ACCENT_COLOR_HEX]` — replace before first
  deploy.
- Both **dark mode** and **light mode** must be supported with a toggle.
  - Persist user preference in `localStorage`.
  - Default to `prefers-color-scheme` system setting.
  - Define all color tokens as CSS custom properties (`--color-*`) so both
    themes share the same token names.

### Typography
- Body/UI: **Inter** or **Geist Sans** (clean, modern, professional).
- Code labels / tech tags / monospace accents: **Geist Mono** or
  **JetBrains Mono**.
- Type scale defined in `tailwind.config.ts` — do not use arbitrary font-size
  values scattered throughout components.

### Motion & Animation
- Match the LangChain aesthetic: **subtle and purposeful**.
  - Fade/slide-in on scroll for section entrances.
  - Smooth hover states on cards, buttons, and links.
  - A light reveal or gradient-shift effect on the hero section.
- Always wrap Framer Motion usage with a `useReducedMotion()` check — if the
  user prefers reduced motion, skip or minimise all animations.
- No gimmicks: no infinite looping background blobs, no heavy particle
  systems, no distracting transitions.

### Layout
- Single-page app — all content lives on `/`, each section reachable via
  smooth-scroll anchor links.
- Fully responsive: mobile-first. Breakpoints: `sm` (640), `md` (768),
  `lg` (1024), `xl` (1280).
- Mobile nav collapses into a clean hamburger/drawer menu.

---

## 4. Component Architecture

Organise under `src/components/` with one file per component. Required
components:

```
src/
├── app/
│   ├── layout.tsx          # Root layout — fonts, theme provider, metadata
│   ├── page.tsx            # Assembles all sections in order
│   └── api/
│       └── contact/
│           └── route.ts    # Contact form API route (Resend)
├── components/
│   ├── Navbar.tsx          # Sticky nav, scroll-spy, theme toggle
│   ├── ThemeToggle.tsx     # Dark/light switch
│   ├── Hero.tsx            # Hero / landing section
│   ├── About.tsx           # Bio + skills + experience + achievements
│   ├── SkillBadge.tsx      # Reusable pill/tag for tech skills
│   ├── Projects.tsx        # Projects section wrapper
│   ├── ProjectCard.tsx     # Individual project card (reusable)
│   ├── Resume.tsx          # Resume section + download CTA
│   ├── Contact.tsx         # Contact form + social links section
│   └── Footer.tsx          # Minimal footer
├── lib/
│   └── sendEmail.ts        # Resend email helper
└── types/
    └── index.ts            # Shared TypeScript types
```

Rules:
- Every component is a named export **and** a default export.
- No component file exceeds ~150 lines — split if it grows beyond that.
- No inline styles. All styling via Tailwind utility classes or CSS custom
  properties.
- Use `"use client"` only where strictly needed (interactive components,
  Framer Motion wrappers). Keep as much as possible as React Server Components.

---

## 5. Page Sections & Content

Sections appear in this exact order on the page:

### 5.1 Hero
- **Name:** Aryan Sherigar
- **Title:** Software Engineer & AI Builder *(or similar punchy single line)*
- **One-liner:** Something like "I build full-stack GenAI systems — from RAG
  pipelines and LLM-powered backends to interactive React frontends."
- Primary CTA: "View Projects" → scrolls to `#projects`
- Secondary CTA: "Download Resume" → `/resume.pdf` (file lives in `/public`)
- Subtle animated background — gradient shift, grid lines, or a minimal
  ambient effect. No heavy particle systems.

### 5.2 About
**Bio (use this text — lightly polish flow but keep every fact accurate):**

> I'm a final-year B.Tech student at IIT (ISM) Dhanbad, graduating in May
> 2026, focused on software and AI engineering. I build full-stack and GenAI
> systems — from RAG pipelines and LLM-powered backends to interactive React
> frontends — and I enjoy turning messy, unstructured model output into
> reliable, production-ready systems. Currently working as a Coding & Math
> Annotator at Outlier AI, where I evaluate and correct LLM-generated code and
> math solutions, design adversarial test cases to stress-test model
> performance, and help improve dataset quality for LLM training and fine-
> tuning. I've solved 200+ DSA problems, placed 2nd runner-up (top 3 of 200+
> teams) at the BlockBash Hackathon, and hold a summer internship offer as a
> Technology Analyst at Barclays UK (Northampton).

**Experience entry:**
- **Outlier AI** — Coding & Math Annotator (Remote), January 2025 – Present
  - Evaluated and corrected LLM-generated solutions for algorithmic and
    mathematical problems.
  - Identified failure patterns (edge cases, flawed logic, inefficiencies)
    through code analysis and debugging.
  - Designed adversarial test cases and coding scenarios to stress-test model
    performance.
  - Improved dataset quality for LLM training and fine-tuning.

**Skills — grouped exactly as below:**
| Group | Items |
|---|---|
| Languages | Python, C++, TypeScript/JavaScript |
| Core CS | Data Structures & Algorithms, OOP, Multithreading, OS Basics |
| Backend & Web | Node.js, Express.js, Next.js, FastAPI, SQL, REST APIs |
| GenAI | Prompt Engineering, RAG, LLM APIs (Gemini / OpenAI-compatible), Embeddings, Semantic Search, HuggingFace |
| Tools | LangChain, LangGraph, ChromaDB, Git, Linux, Postman |

**Achievements strip:**
- Solved 200+ DSA problems (arrays, trees, graphs, DP, greedy)
- Summer Internship Offer — Technology Analyst, Barclays UK (Northampton)
- 2nd Runner-up (Top 3 / 200+ teams) — BlockBash Hackathon, CrewSphere / ICP Hub India
- Finalist — HackFest '22, IIT (ISM) Dhanbad
- Selected participant — Web3Dapps Hackathon, Major Hacking League
- Mentored 20+ students in blockchain dev, Cyberlabs Winter of Code (95% completion rate)

**Profile photo:** leave a clearly marked slot `{/* PROFILE_PHOTO */}` with a
placeholder avatar — Aryan will drop in his own image file.

### 5.3 Projects
Exactly **2 featured projects** for now. Build `ProjectCard.tsx` as a reusable
component so a 3rd can be added later with zero structural changes.

**Project 1: News Story Arc Tracker**
- Tags: `React` `FastAPI` `AWS Bedrock` `LangChain` `Pinecone` `WebSockets`
- Description: A narrative intelligence platform that extracts timelines,
  entities, and sentiment from real-world events using AWS Bedrock LLMs.
  Features a scalable RAG pipeline (LangChain + Titan Embeddings + Pinecone /
  OpenSearch), an interactive React frontend with dynamic relationship graphs
  and data visualisations, real-time voice chat over WebSockets with streaming
  transcription and TTS, and a FastAPI backend with streaming endpoints, model
  fallbacks, and reliability-focused safeguards.
- GitHub: `[GITHUB_REPO_URL_1]`
- Live demo: `[LIVE_DEMO_URL_1]` *(leave blank/hidden if not applicable)*

**Project 2: Chronos: AI Story Engine**
- Tags: `React` `TypeScript` `Google Gemini 3 Flash` `Vite` `Tailwind CSS`
- Description: An AI-powered interactive story engine with a dual-phase
  streaming pipeline (Gemini 3 Flash) that emits narrative text and structured
  JSON state in a single request. Includes a deterministic state machine that
  transforms unstructured LLM output into tracked game variables, a
  lightweight RAG-style "Story Card" system for injecting relevant lore and
  memory with minimal context overhead, and a "Director Mode" for real-time
  human-in-the-loop control over tension parameters and plot flow.
- GitHub: `[GITHUB_REPO_URL_2]`
- Live demo: `[LIVE_DEMO_URL_2]` *(leave blank/hidden if not applicable)*

Give each project enough visual weight to feel substantial — alternating layout
or a "featured project" block treatment, not small thumbnails in a crowded grid.

### 5.4 Resume
- A dedicated section with a prominent "Download Resume" button and a
  "View Resume" option.
- PDF file lives at `/public/resume.pdf`.
- This is separate from the hero CTA — both should exist.

### 5.5 Contact
- **Contact form:** fields for name, email, and message. Use a Next.js API
  route (`/api/contact`) with [Resend](https://resend.com) to send email to
  `sherigararyan90@gmail.com`. Provide clear setup instructions in `README.md`
  and use env vars (`RESEND_API_KEY`) — never hardcode keys.
- **Social links:**
  - Email: `sherigararyan90@gmail.com`
  - LinkedIn: `[LINKEDIN_PROFILE_URL]`
  - GitHub: `[GITHUB_PROFILE_URL]`
  - Phone: `[OPTIONAL — only add if Aryan explicitly confirms he wants it public]`
- Form must have: client-side validation, loading state on submit, and
  success/error feedback toast or inline message.

---

## 6. Navigation

- **Sticky** navbar — stays fixed at the top on scroll.
- **Logo/name** on the left (Aryan Sherigar or initials monogram).
- **Section links** in the center/right: About · Projects · Resume · Contact
- **Dark/light toggle** at the far right.
- **Scroll-spy:** active section link highlights as user scrolls.
- **Mobile:** hamburger menu that opens a full-width drawer. Close on link
  click or outside tap.

---

## 7. SEO & Metadata

Set in `app/layout.tsx` using Next.js `Metadata` API:

```ts
export const metadata: Metadata = {
  title: "Aryan Sherigar — Software Engineer & AI Builder",
  description:
    "Portfolio of Aryan Sherigar — IIT ISM Dhanbad, Software Engineer " +
    "specialising in GenAI, RAG pipelines, and full-stack development.",
  openGraph: {
    title: "Aryan Sherigar — Software Engineer & AI Builder",
    description: "...",
    url: "[SITE_URL]",
    siteName: "Aryan Sherigar",
    type: "website",
  },
};
```

- Add a `favicon.ico` and `apple-touch-icon.png` in `/public`. Leave
  placeholders if Aryan hasn't provided assets yet.
- Use semantic HTML throughout: `<header>`, `<main>`, `<section>`,
  `<article>`, `<footer>` with appropriate `aria-label` attributes.

---

## 8. Accessibility

- Minimum WCAG AA contrast ratio in both dark and light themes.
- All interactive elements keyboard-navigable with visible focus rings.
- All images have descriptive `alt` text.
- `aria-label` on icon-only buttons (e.g. the theme toggle, social icon links).
- Respect `prefers-reduced-motion` — no animation when set.

---

## 9. What Copilot Must Never Do

- **Never invent or embellish** personal details, project descriptions,
  employers, or credentials. Every fact must come from Section 5 above.
- **Never hardcode** API keys, email addresses in server logic, or any secret.
  Use environment variables with a `.env.example` file.
- **Never use `<form>` HTML tags in React components** — use controlled inputs
  with `onChange`/`onClick` handlers instead.
- **Never use `localStorage` or `sessionStorage` inside Artifacts or
  SSR-rendered components** — only access browser storage inside `useEffect`
  or client-only hooks.
- **Never suggest replacing Next.js** with another framework, even if the
  request seems simpler to handle in a different tool.
- **Never add a dependency** without checking it is actively maintained and
  compatible with the current Next.js App Router and Vercel edge runtime.

---

## 10. README Requirements

`README.md` must include:

1. Project overview (one paragraph)
2. Local dev setup (`npm install`, `npm run dev`)
3. Environment variables table (name, description, where to get it)
4. How to add/edit projects (which file to update)
5. How to swap the resume PDF
6. How to deploy to Vercel (one-click deploy button if possible)
7. How to update contact details

---

## 11. Remaining Placeholders (fill before deploy)

| Placeholder | What to replace with |
|---|---|
| `[ACCENT_COLOR_HEX]` | Your chosen accent color hex |
| `[GITHUB_PROFILE_URL]` | Your GitHub profile link |
| `[LINKEDIN_PROFILE_URL]` | Your LinkedIn profile link |
| `[GITHUB_REPO_URL_1]` | News Story Arc Tracker repo URL |
| `[LIVE_DEMO_URL_1]` | News Story Arc Tracker live demo (if any) |
| `[GITHUB_REPO_URL_2]` | Chronos repo URL |
| `[LIVE_DEMO_URL_2]` | Chronos live demo (if any) |
| `[SITE_URL]` | Your deployed Vercel URL |
| `{/* PROFILE_PHOTO */}` | Your profile image file in `/public` |
| `RESEND_API_KEY` | Your Resend API key (in `.env.local`, never committed) |