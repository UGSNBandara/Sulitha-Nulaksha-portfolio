# Sulitha Nulaksha — Portfolio

Personal portfolio website built with a cinematic, glassmorphism-inspired design aesthetic. Smooth scroll-driven animations, scattered card layouts, and a dark/cream palette inspired by [fluid.glass](https://fluid.glass/).

---

## Stack

- **Framework** — Next.js 14 (App Router)
- **Language** — TypeScript
- **Styling** — Tailwind CSS + CSS custom properties
- **Animations** — Framer Motion (scroll-driven parallax, spring physics, AnimatePresence)
- **Icons** — react-icons (Fi, Si families)

---

## Sections

| Section | Description |
|---------|-------------|
| **Hero** | Full-viewport video background with social icon column |
| **About** | Bio in quoted blockquote, circular profile image |
| **Projects** | Filterable project grid — each card links to a detail page |
| **Research** | Scroll-driven expanding panel — grows and shrinks as you scroll through |
| **Experience** | Scattered card layout with parallax scroll, ambient typography tags |
| **Contact** | Contact links with icons, CV download |

---

## Project Detail Pages

Each project at `/projects/[slug]` has its own full page with:
- Title, description, tags, external links
- YouTube embeds / video demos / cover images
- Structured content sections
- Light / dark theme toggle
- Responsive layout up to 1100px wide

---

## Design System

```
Colors:
  --color-void:     #0b1012   (background)
  --color-charcoal: #212325   (dark surface)
  --color-cream:    #f3f0ec   (text / light surface)
  --color-taupe:    #d4cec6   (muted)

Glass utilities:
  .glass            light frosted glass on dark
  .glass-dark       darker frosted layer
  .glass-on-cream   dark-tinted glass on cream sections

Typography:
  Raleway (headings) + Inter (labels/mono)
```

---

## Research Directions

- Intelligent Virtual Agents and Human–AI Interaction
- Immersive Digital Environments and Digital Twins
- Generative AI for Engineering Systems *(IEEE IES Challenge 2026 — shortlisted, 575 submissions / 57 countries)*

---


## Project Data

Projects and experience data live in `src/data/projects/` — each project is a separate `.ts` file exporting a `ProjectDetail` object with sections, links, videos, and tags.

---

*Built by Sulitha Nulaksha Bandara · Computer Engineering · University of Ruhuna*
