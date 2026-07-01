# Product Requirements Document — Developer Portfolio Website

## 1. Overview
Build a single-page, responsive developer portfolio website for **Shikher Waiskar**, a Backend Engineer / Computer Science student. The site should look and feel like GitHub's dark UI. Primary goals: get hired (visible to hiring managers) and attract freelance/client interest, while also serving as a personal showcase.

## 2. Audience
- Hiring managers / recruiters
- Potential freelance clients
- General visitors (GitHub, LinkedIn referrals)

## 3. Tech Stack
- React (functional components, hooks)
- Tailwind CSS or plain CSS (CSS variables for theming)
- Icons: lucide-react
- Should be deployable as a static/SPA site (e.g. Vercel)

## 4. Site Structure / Sections
Single page with smooth-scroll navigation between sections (sticky top nav):

1. **Header/Nav** — logo/initials avatar, username handle, nav links to each section (About, Skills, Projects, Experience, Contact)
2. **Profile Banner (Hero)** — avatar, name, title, bio, status badges
3. **About** — README-style card with a short narrative bio
4. **Skills** — list of skills with proficiency bars
5. **Projects** — GitHub "pinned repo" style cards
6. **Experience** — commit-history / timeline style list
7. **Contact** — card grid with email, GitHub, LinkedIn links
8. **Footer**

## 5. Content (use exactly this content)

**Name:** Shikher Waiskar
**Title:** Backend Engineer
**Status badges:** "Open to opportunities", "📍 India", "🎓 CS Student"

**Bio (About section):**
"I'm a backend-leaning developer building toward a strong foundation in Java and software engineering fundamentals. My current focus is on writing clean, correct backend code, understanding data structures deeply, and applying that knowledge to real projects — including a working AI-powered code review tool. I'm preparing for technical interviews and actively growing my skills in databases, networking, and backend frameworks."

**Short tagline bio (hero):**
"Computer Science student with a strong interest in Java development and backend technologies. Currently focused on improving Java, SQL, data structures, and software development fundamentals while preparing for interviews. Enjoys learning how computers, networks, databases, and programming concepts work in depth."

**Skills (name — proficiency %):**
- Java — 85%
- SQL — 80%
- JavaScript — 70%
- Spring Boot — 75%
- Spring Framework — 75%
- Git / GitHub — 85%
- Eclipse — 80%

**Projects:**
1. **code-review-ai-system**
   - Description: "An AI-powered code review tool. Code is sent to an LLM (OpenAI API) which returns review comments and improvement suggestions, surfaced through a clean web UI."
   - Tech: Next.js, React, Tailwind CSS, Node.js, OpenAI API
   - Primary language: TypeScript
   - Live demo: https://code-review-theta.vercel.app/
   - Repo: https://github.com/Shikher-iwaiskar
   - Status: Live/deployed (show green "Live" indicator)

**Experience:**
- Computer Science Student — "Building backend engineering fundamentals — Java, Spring Boot, SQL, and data structures — while developing real projects and preparing for technical interviews."
- Status: "Currently seeking opportunities" (highlighted badge)

**Contact:**
- Email: shikher.waiskar@outlook.com
- GitHub: https://github.com/Shikher-iwaiskar
- LinkedIn: https://www.linkedin.com/in/shikher-waiskar-71460b3a1/

## 6. Functional Requirements
- Sticky header nav that highlights/underlines the active section and smooth-scrolls to it on click
- Fully responsive: mobile (single column), tablet, desktop
- Skill bars animate or render filled to the correct % on load
- Project cards link out to live demo and GitHub repo in new tabs
- Contact cards are clickable (mailto: link for email, external links for GitHub/LinkedIn)
- Visible keyboard focus states on all interactive elements
- Respect reduced-motion preference (no animation if user has `prefers-reduced-motion`)

## 7. Non-functional Requirements
- Fast load, no heavy dependencies beyond icon library
- Accessible color contrast (WCAG AA minimum) against dark background
- Clean semantic HTML (header, nav, section, footer)

---

# Design Specification (GitHub Dark Theme)

## Color Tokens
| Token | Hex | Usage |
|---|---|---|
| `--bg-canvas` | `#0d1117` | Page background |
| `--bg-default` | `#161b22` | Card/header background |
| `--bg-subtle` | `#1c2128` | Nested surfaces, chips, track bars |
| `--border-default` | `#30363d` | Card/section borders |
| `--border-muted` | `#21262d` | Subtle dividers |
| `--fg-default` | `#e6edf3` | Primary text |
| `--fg-muted` | `#8b949e` | Secondary text |
| `--fg-subtle` | `#6e7681` | Tertiary/label text |
| `--accent-fg` | `#58a6ff` | Links, repo names |
| `--accent-emphasis` | `#1f6feb` | Primary accent, gradient start |
| `--success-fg` | `#3fb950` | "Live"/status indicators |
| `--done-fg` | `#a371f7` | Secondary accent (gradient) |
| `--attention-fg` | `#d29922` | Warnings/highlights (optional use) |

## Typography
- **Sans (UI/body):** -apple-system, "Segoe UI", "Noto Sans", Helvetica, Arial, sans-serif
- **Mono (labels, code, eyebrows, badges):** "SF Mono", "Cascadia Code", "JetBrains Mono", Consolas, monospace
- Name/H1: 26px, weight 600
- Section titles (H2): 20px, weight 600
- Eyebrow labels: 11px, mono, uppercase, letter-spacing 0.08em, color `--fg-subtle`
- Body text: 13–14px, line-height 1.5–1.7

## Layout
- Max content width: 900px, centered
- Header: full-width, sticky, border-bottom, flex layout (logo+handle left, nav right), wraps on mobile
- Hero/banner: avatar (96px circle, gradient fill `#1f6feb → #a371f7 → #f778ba`) + name/title/bio block, flex row, wraps to column on mobile
- Sections: vertical stack, ~40px top padding each, eyebrow label above title
- Skills: 2-column grid (1 column on mobile <600px), each row = label+percentage above a thin progress track
- Projects: full-width "repo cards" — bordered rounded boxes, language dot + star count + live status row, tech chips below, link row at bottom
- Experience: timeline with connecting vertical line and circular dot per entry
- Contact: responsive card grid (`repeat(auto-fit, minmax(220px,1fr))`), icon-in-box + label/value per card
- Footer: centered, mono font, small, top border

## Components & Signature Details
- **Avatar/logo:** circular, mono-font initials, gradient background
- **Status badge (hero):** pill shape, `--bg-subtle` background, border, small green dot for "active" status
- **Repo card:** mirrors a GitHub pinned-repository card — repo icon + name in accent color + "Public" badge top row, description, meta row (language dot, stars, live indicator), tech chips, footer links with icons (external-link icon for demo, GitHub icon for repo)
- **Skill bar:** label row (name left, percentage right in mono font) over a 6px rounded track; fill is a blue gradient (`#1f6feb → #58a6ff`)
- **Timeline dot:** 12px circle, transparent fill, 2px success-green border, connected by a 2px vertical line to the next entry
- **Contact card:** icon swatch (36px rounded square, `--bg-subtle` background) + uppercase mono label + value text; border brightens to accent color on hover

## Interaction & Motion
- Nav buttons: subtle background highlight on hover; active section gets a 2px bottom border accent (`#f78166`)
- Contact/repo cards: border color transitions to `--accent-fg` on hover (150ms ease)
- Smooth-scroll on nav click
- No large/flashy animations — motion should be quiet and functional (hover states, smooth scroll only)

## Icons
Use `lucide-react`: Github, Linkedin, Mail, ExternalLink, Terminal, GitBranch, GitCommit, Star, Circle
