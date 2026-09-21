# Darshika Vijaykumar — Portfolio Website

A premium, single-page 3D portfolio website for Darshika Vijaykumar, a second-year Business Management undergraduate at SLIIT City Uni, Sri Lanka.

## Tech Stack

- **Next.js 14** (App Router) + TypeScript
- **Tailwind CSS** — custom palette (navy, off-white, gold)
- **React Three Fiber** + **@react-three/drei** — 3D hero shape, particle field, skill cards
- **@react-three/postprocessing** — Bloom + Vignette
- **Framer Motion** — scroll animations, letter reveals
- **Lenis** — smooth scrolling (respects `prefers-reduced-motion`)

## Getting Started

### Prerequisites
- Node.js 18+
- npm 9+

### Install dependencies

```bash
npm install
```

### Run development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for production

```bash
npm run build
npm start
```

## Deploying to Vercel

1. Push the repository to GitHub.
2. Import the project at [vercel.com/new](https://vercel.com/new).
3. Vercel auto-detects Next.js — no additional config needed.
4. Click **Deploy**.

## Adding a Real CV

Replace `/public/darshika-cv.pdf` with the actual CV file. The **Download CV** button in the navbar and contact section will automatically serve it.

## Adding a Real Profile Photo

Replace `/public/profile.jpg` with a real portrait. The About section uses an arched CSS mask, so the photo will be automatically clipped to the arch frame.

## Content Updates

All site content is in a single file: [`/data/content.ts`](./data/content.ts)

Edit the exported constants to update:
- Personal info (name, email, phone, location)
- About text
- Education entries
- Skills
- Projects
- Leadership & Extracurricular
- Languages

## Project Structure

```
dharshika/
├── app/
│   ├── layout.tsx       # Root layout, fonts, SEO metadata
│   ├── page.tsx         # Main page assembling all sections
│   └── globals.css      # Tailwind + custom CSS
├── components/
│   ├── ui/              # Page sections and UI components
│   │   ├── Navbar.tsx
│   │   ├── Loader.tsx
│   │   ├── HeroText.tsx
│   │   ├── AboutSection.tsx
│   │   ├── EducationSection.tsx
│   │   ├── SkillsSection.tsx
│   │   ├── ProjectsSection.tsx
│   │   ├── LeadershipSection.tsx
│   │   ├── LanguagesSection.tsx
│   │   ├── ContactSection.tsx
│   │   ├── Footer.tsx
│   │   └── LenisProvider.tsx
│   └── three/           # React Three Fiber components
│       ├── HeroCanvas.tsx    # Full-viewport canvas + postprocessing
│       ├── HeroShape.tsx     # Glass refractive shape + mouse lerp
│       ├── ParticleField.tsx # Subtle particle cloud
│       ├── SkillsCanvas.tsx  # 6 floating arc skill cards
│       └── ScrollCamera.tsx  # Scroll-linked camera dolly
├── data/
│   └── content.ts       # ← Edit all content here
└── public/
    ├── profile.jpg      # Replace with real photo
    ├── darshika-cv.pdf  # Replace with real CV
    └── favicon.svg
```

## Accessibility

- Respects `prefers-reduced-motion` — all animations disabled, 3D frozen
- Keyboard-navigable navigation and form
- Semantic HTML with ARIA labels
- Alt text on all images
- WCAG-compliant contrast ratios

## License

© 2024 Darshika Vijaykumar. All rights reserved.
