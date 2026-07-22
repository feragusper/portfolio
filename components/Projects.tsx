"use client";

import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

type BilingualField = { en: string; es: string };

type ProjectLinks = {
  site?: string; // GitHub Pages landing
  live?: string; // deployed app
  code?: string; // public repo
  press?: string; // press coverage
};

type PetProject = {
  name: string;
  tagline: BilingualField;
  description: BilingualField;
  tags: string[];
  links: ProjectLinks;
  isPrivate?: boolean;
  featured?: boolean;
};

const projects: PetProject[] = [
  {
    name: "SmokeAnalytics",
    featured: true,
    tagline: {
      en: "Awareness, not guilt.",
      es: "Conciencia, no culpa.",
    },
    description: {
      en: "A smoking journal that makes your patterns visible without turning the product into noise. Log with a single tap and get your pace, averages, goals and a map of where it happens — the same product running on Android, Web and Wear OS from one Kotlin Multiplatform codebase.",
      es: "Un diario de cigarrillos que hace visibles tus patrones sin convertir el producto en ruido. Registrás con un toque y ves tu ritmo, promedios, objetivos y un mapa de dónde pasa — el mismo producto en Android, Web y Wear OS desde una única base Kotlin Multiplatform.",
    },
    tags: ["Kotlin Multiplatform", "Compose", "Wear OS", "Firebase"],
    links: {
      site: "https://feragusper.github.io/SmokeAnalytics/",
      code: "https://github.com/feragusper/SmokeAnalytics",
    },
  },
  {
    name: "Calendar Insights",
    tagline: {
      en: "See where your time actually goes.",
      es: "Mirá a dónde se va tu tiempo.",
    },
    description: {
      en: "Syncs your Google Calendar, categorizes events with rules you control, and turns them into time-spent reports, period-over-period movers and a daily timeline — including time that never lands on a calendar.",
      es: "Sincroniza tu Google Calendar, categoriza eventos con reglas que vos controlás y los convierte en reportes de tiempo, comparativas período a período y un timeline diario — incluyendo el tiempo que nunca llega al calendario.",
    },
    tags: ["Next.js", "TypeScript", "Google Calendar", "Analytics"],
    links: {
      site: "https://feragusper.github.io/CalendarInsights/",
      live: "https://calendar-insights-mu.vercel.app",
      code: "https://github.com/feragusper/CalendarInsights",
    },
  },
  {
    name: "Labulog",
    tagline: {
      en: "Every application, under control.",
      es: "Cada postulación, bajo control.",
    },
    description: {
      en: "A job-application tracker with market intel: a granular pipeline, per-application timeline, funnel metrics, a Kanban board, and an anti ghost-job lookup that tells you whether you already applied to a posting and how it went.",
      es: "Un tracker de búsquedas laborales con inteligencia de mercado: pipeline granular, timeline por postulación, métricas de funnel, tablero Kanban y un lookup anti ghost-job que te dice si ya aplicaste a un aviso y cómo terminó.",
    },
    tags: ["FastAPI", "React", "TypeScript", "Job Hunting"],
    links: {
      site: "https://feragusper.github.io/labulog/",
      live: "https://labulog.onrender.com",
      code: "https://github.com/feragusper/labulog",
    },
  },
  {
    name: "Comidas Pérez Edelberg",
    tagline: {
      en: "The week's menu, sorted.",
      es: "El menú de la semana, resuelto.",
    },
    description: {
      en: "A private meal planner for a family of three: a weekly menu that respects each person's dietary rules, a pantry tracker, AI meal suggestions blending history with new ideas, and a shopping list with only what's missing.",
      es: "Un planificador de comidas privado para una familia de tres: un menú semanal que respeta las reglas de cada uno, control de despensa, sugerencias de IA que mezclan historial con ideas nuevas y una lista de compras con solo lo que falta.",
    },
    tags: ["React", "TypeScript", "Supabase", "AI"],
    links: {
      site: "https://feragusper.github.io/comidas-perez-edelberg/",
      code: "https://github.com/feragusper/comidas-perez-edelberg",
    },
  },
  {
    name: "Barrani",
    isPrivate: true,
    tagline: {
      en: "Household finance, in focus.",
      es: "Las finanzas del hogar, claras.",
    },
    description: {
      en: "Personal finance app to manage accounts, expenses, income and investments, with profitability tracking and forecasting so the whole household picture stays legible.",
      es: "App de finanzas personales para gestionar cuentas, gastos, ingresos e inversiones, con seguimiento de rentabilidad y proyección para mantener legible el panorama del hogar.",
    },
    tags: ["Next.js", "TypeScript", "Drizzle", "Finance"],
    links: {
      live: "https://barrani-black.vercel.app",
    },
  },
  {
    name: "TuneVid",
    tagline: {
      en: "Early COVID-19 screening by sound.",
      es: "Screening temprano de COVID-19 por sonido.",
    },
    description: {
      en: "A pandemic-era app for early COVID-19 detection: it measures acoustic impedance changes in the ear-nose-mouth channel, adds a cough and smell test, and flags who to prioritize for a PCR. Presented by UTN and covered by La Nación.",
      es: "Una app de la pandemia para detección temprana de COVID-19: mide cambios de impedancia acústica en el canal oído-nariz-boca, suma un test de tos y olfato, y prioriza a quién derivar a un PCR. Presentada por la UTN y cubierta por La Nación.",
    },
    tags: ["Android", "Health", "Signal Processing"],
    links: {
      code: "https://github.com/feragusper/TuneVid",
      press: "https://www.lanacion.com.ar/tecnologia/la-utn-presento-tunevid-app-deteccion-temprana-nid2506574/",
    },
  },
  {
    name: "Harmonia",
    isPrivate: true,
    tagline: {
      en: "Rehearsals and shows, organized.",
      es: "Ensayos y shows, organizados.",
    },
    description: {
      en: "A web product to organize rehearsals and shows for my piano-and-voice duo — setlists, songs, and upcoming performances in one place.",
      es: "Un producto web para organizar los ensayos y shows de mi dúo de piano y voz — setlists, canciones y próximas actuaciones en un solo lugar.",
    },
    tags: ["Next.js", "TypeScript", "Music"],
    links: {},
  },
  {
    name: "Shared Bookmarks",
    tagline: {
      en: "A bookmark folder for two.",
      es: "Una carpeta de favoritos para dos.",
    },
    description: {
      en: "A Manifest V3 Chrome extension that lets two people share a bookmark folder in real time, fully integrated with Chrome's native bookmark manager. Firebase backend over REST — no bundler, no SDK.",
      es: "Una extensión de Chrome (Manifest V3) que permite a dos personas compartir una carpeta de favoritos en tiempo real, integrada con el gestor nativo de Chrome. Backend Firebase por REST — sin bundler ni SDK.",
    },
    tags: ["Chrome Extension", "JavaScript", "Firebase"],
    links: {
      code: "https://github.com/feragusper/shared-bookmarks",
    },
  },
];

const featured = projects.find((p) => p.featured)!;
const rest = projects.filter((p) => !p.featured);

// --- icons ---

function FolderIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
        d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
    </svg>
  );
}

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

function ExternalIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
    </svg>
  );
}

function PressIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
        d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h9a2 2 0 012 2v12a2 2 0 002 2zm0 0a2 2 0 002-2v-7a2 2 0 00-2-2h-3m-9 4h6m-6 4h6m-6-8h6" />
    </svg>
  );
}

function LockIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
    </svg>
  );
}

// --- pieces ---

function LinkButton({
  href,
  label,
  icon,
  project,
  type,
  primary = false,
}: {
  href: string;
  label: string;
  icon: React.ReactNode;
  project: string;
  type: string;
  primary?: boolean;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      data-umami-event="project-link"
      data-umami-event-project={project}
      data-umami-event-type={type}
      className={`inline-flex items-center gap-1.5 text-xs font-medium px-2.5 py-1.5 rounded-md border transition-all duration-200 ${
        primary
          ? "border-[#6c63ff]/40 text-[#6c63ff] hover:bg-[#6c63ff]/10 hover:border-[#6c63ff]"
          : "border-[var(--border)] text-[var(--muted)] hover:text-[var(--text-heading)] hover:border-[var(--muted)]"
      }`}
    >
      {icon}
      {label}
    </a>
  );
}

function ProjectLinksRow({ project }: { project: PetProject }) {
  const { t } = useLanguage();
  const { site, live, code, press } = project.links;
  const hasAny = site || live || code || press;

  if (!hasAny) {
    return (
      <span className="inline-flex items-center gap-1.5 text-xs text-[var(--muted)] mt-auto">
        <LockIcon className="w-3.5 h-3.5" />
        {t.projects.private}
      </span>
    );
  }

  return (
    <div className="flex flex-wrap gap-2 mt-auto">
      {site && (
        <LinkButton href={site} label={t.projects.links.site} type="site" project={project.name} primary
          icon={<ExternalIcon className="w-3.5 h-3.5" />} />
      )}
      {live && (
        <LinkButton href={live} label={t.projects.links.live} type="live" project={project.name} primary={!site}
          icon={<ExternalIcon className="w-3.5 h-3.5" />} />
      )}
      {code && (
        <LinkButton href={code} label={t.projects.links.code} type="code" project={project.name}
          icon={<GithubIcon className="w-3.5 h-3.5" />} />
      )}
      {press && (
        <LinkButton href={press} label={t.projects.links.press} type="press" project={project.name}
          icon={<PressIcon className="w-3.5 h-3.5" />} />
      )}
    </div>
  );
}

function StatusBadge({ project }: { project: PetProject }) {
  const { t } = useLanguage();
  const isLive = !!(project.links.site || project.links.live);

  if (project.isPrivate) {
    return (
      <span className="inline-flex items-center gap-1 text-xs px-2 py-0.5 rounded-full bg-[var(--bg)] border border-[var(--border)] text-[var(--muted)]">
        <LockIcon className="w-3 h-3" />
        {t.projects.private}
      </span>
    );
  }
  if (isLive) {
    return (
      <span className="inline-flex items-center gap-1.5 text-xs px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-500">
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
        {t.projects.liveBadge}
      </span>
    );
  }
  return null;
}

function Tags({ tags }: { tags: string[] }) {
  return (
    <div className="flex flex-wrap gap-1.5">
      {tags.map((tag) => (
        <span key={tag} className="text-xs px-2 py-0.5 rounded-md bg-[var(--bg)] border border-[var(--border)] text-[var(--muted)]">
          {tag}
        </span>
      ))}
    </div>
  );
}

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const { lang, t } = useLanguage();

  return (
    <section id="projects" className="py-24 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="text-sm font-mono text-[#6c63ff] mb-3 block">{t.projects.label}</span>
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-heading)]">{t.projects.title}</h2>
          <p className="text-[var(--muted)] mt-3 max-w-xl mx-auto">{t.projects.subtitle}</p>
        </motion.div>

        {/* Featured */}
        <motion.article
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="group relative rounded-2xl border border-[#6c63ff]/40 bg-gradient-to-br from-[var(--surface)] to-[#6c63ff]/[0.04] p-6 md:p-8 flex flex-col gap-5"
        >
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <FolderIcon className="w-9 h-9 text-[#6c63ff]" />
              <span className="text-xs uppercase tracking-wider px-2 py-0.5 rounded-full bg-[#6c63ff]/10 text-[#6c63ff] border border-[#6c63ff]/20">
                {t.projects.featured}
              </span>
            </div>
            <StatusBadge project={featured} />
          </div>

          <div className="max-w-2xl">
            <h3 className="text-[var(--text-heading)] font-bold text-2xl mb-1">{featured.name}</h3>
            <p className="text-[#6c63ff] font-medium text-sm mb-3">{featured.tagline[lang]}</p>
            <p className="text-sm md:text-base text-[var(--muted)] leading-relaxed">{featured.description[lang]}</p>
          </div>

          <Tags tags={featured.tags} />
          <ProjectLinksRow project={featured} />
        </motion.article>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
          {rest.map((project, i) => (
            <motion.article
              key={project.name}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: 0.2 + i * 0.06 }}
              whileHover={{ y: -3 }}
              className="group rounded-xl border border-[var(--border)] bg-[var(--surface)] hover:border-[#6c63ff]/40 transition-colors duration-300 p-5 flex flex-col gap-3.5"
            >
              <div className="flex items-center justify-between gap-2">
                <FolderIcon className="w-6 h-6 text-[var(--muted)] group-hover:text-[#6c63ff] transition-colors" />
                <StatusBadge project={project} />
              </div>

              <div>
                <h3 className="text-[var(--text-heading)] font-semibold text-base mb-0.5">{project.name}</h3>
                <p className="text-[#6c63ff] text-xs font-medium mb-2">{project.tagline[lang]}</p>
                <p className="text-xs text-[var(--muted)] leading-relaxed">{project.description[lang]}</p>
              </div>

              <Tags tags={project.tags} />
              <ProjectLinksRow project={project} />
            </motion.article>
          ))}
        </div>

        {/* Footer nav */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.65 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 mt-12"
        >
          <Link
            href="/"
            data-umami-event="projects-back-home"
            className="inline-flex items-center gap-2 text-sm text-[var(--muted)] hover:text-[var(--text-heading)] transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
            </svg>
            {t.projects.backHome}
          </Link>

          <a
            href="https://github.com/feragusper"
            target="_blank"
            rel="noopener noreferrer"
            data-umami-event="social-click"
            data-umami-event-network="github"
            data-umami-event-location="projects"
            className="inline-flex items-center gap-2 text-sm text-[var(--muted)] hover:text-[var(--text-heading)] transition-colors"
          >
            {t.projects.github}
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
