# Portfolio — Fernando Pérez

Personal portfolio site for Fernando Pérez, a Software Engineer with 20+ years across mobile, fintech, e-commerce, aviation, IoT and retail. Single-page site with animated sections, light/dark theme, English/Spanish switching, and downloadable CVs generated as PDFs.

🔗 **Live:** https://feragusper.vercel.app

---

## What it does

- **Single-page portfolio** — hero, about, skills, AI work, professional & personal projects, experience, roles, hobbies, CV downloads, and contact, all composed in [`app/page.tsx`](app/page.tsx).
- **Bilingual (EN/ES)** — all copy lives in a typed dictionary ([`lib/i18n.ts`](lib/i18n.ts)) and is switched at runtime through a React context ([`contexts/LanguageContext.tsx`](contexts/LanguageContext.tsx)).
- **Light / dark theme** — handled by [`next-themes`](https://github.com/pacocoursey/next-themes) via [`components/Providers.tsx`](components/Providers.tsx).
- **Animations** — section reveals and transitions powered by [`framer-motion`](https://www.framer.com/motion/).
- **Generated CVs** — three PDF variants (full, short, ATS) built from code with `@react-pdf/renderer` and served from [`public/cv/`](public/cv).
- **SEO / social** — Open Graph + Twitter metadata and a dynamically rendered OG image ([`app/opengraph-image.tsx`](app/opengraph-image.tsx)), favicon and apple-icon also generated at build time.

---

## Tech stack

| Area | Tech |
|------|------|
| Framework | [Next.js 16](https://nextjs.org) (App Router) |
| UI | [React 19](https://react.dev) |
| Language | [TypeScript 5](https://www.typescriptlang.org) |
| Styling | [Tailwind CSS 4](https://tailwindcss.com) (via `@tailwindcss/postcss`) |
| Animation | [Framer Motion](https://www.framer.com/motion/) |
| Theming | [next-themes](https://github.com/pacocoursey/next-themes) |
| Icons | [lucide-react](https://lucide.dev) |
| PDF generation | [@react-pdf/renderer](https://react-pdf.org) |
| Linting | ESLint 9 + `eslint-config-next` |
| Hosting | [Vercel](https://vercel.com) |

> **Note:** this repo pins Next.js 16, which introduces breaking changes vs older majors. See [`AGENTS.md`](AGENTS.md) — consult `node_modules/next/dist/docs/` before changing framework code.

---

## Architecture

```
app/                 App Router entry
├── layout.tsx       Root layout, metadata (SEO/OG/Twitter), Providers
├── page.tsx         Single-page composition of all sections
├── globals.css      Tailwind + global styles
├── opengraph-image.tsx   Dynamic OG image
├── icon.tsx / apple-icon.tsx   Generated favicons
components/          One component per section (Hero, About, Skills, …)
│                    plus Navbar, Contact, CVDownload, Providers
contexts/            LanguageContext (EN/ES runtime switching)
lib/                 i18n.ts — typed translation dictionary
scripts/             generate-cv.tsx — builds the PDF CVs
public/cv/           Output PDFs (full / short / ATS)
```

The page is fully static-friendly: content is component-driven, copy is centralized in `lib/i18n.ts`, and there is no backend or database.

---

## Getting started

Requires Node.js 18.18+ (Node 20+ recommended).

```bash
npm install
npm run dev
```

Open http://localhost:3000.

### Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start the dev server (hot reload) |
| `npm run build` | Production build |
| `npm run start` | Serve the production build |
| `npm run lint` | Run ESLint |
| `npm run generate-cv` | Regenerate the PDF CVs into `public/cv/` |

---

## Environment

No environment variables are required to run or build the site — it is fully static and content-driven. `metadataBase` (the canonical URL used for OG/Twitter) is hard-coded in [`app/layout.tsx`](app/layout.tsx); update it there if the domain changes.

`.env*` files are gitignored, so any future secrets stay out of version control.

---

## CI/CD & Deploy

Deployed on **Vercel** (project linked via `.vercel/project.json`).

- **Push to `main`** → Vercel builds and deploys to production (`npm run build`).
- **Pull requests / other branches** → Vercel creates preview deployments automatically.

To deploy manually:

```bash
npx vercel        # preview deployment
npx vercel --prod # production deployment
```

Build output and `.vercel/` are gitignored.

---

## License

Personal project — all rights reserved.
