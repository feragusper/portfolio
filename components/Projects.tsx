"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

type BilingualField = { en: string; es: string };

type PetProject = {
  name: string;
  description: BilingualField;
  tags: string[];
  github: string;
};

const featured: PetProject = {
  name: "SmokeAnalytics",
  description: {
    en: "Analytics tool for tracking and visualizing smoking habits. Built with modern Android architecture patterns — Clean Architecture, Kotlin, and Jetpack Compose.",
    es: "Herramienta de analytics para rastrear y visualizar hábitos de fumar. Construida con patrones modernos de arquitectura Android — Clean Architecture, Kotlin y Jetpack Compose.",
  },
  tags: ["Kotlin", "Jetpack Compose", "Clean Architecture", "Analytics"],
  github: "https://github.com/feragusper/SmokeAnalytics",
};

const petProjects: PetProject[] = [
  {
    name: "Harmonia",
    description: {
      en: "Rehearsal and show planner for my piano and voice duo. Manage setlists, track songs, plan rehearsals, and organize upcoming performances.",
      es: "Planificador de ensayos y shows para mi dúo de piano y voz. Gestiona setlists, canciones, ensayos y próximas actuaciones.",
    },
    tags: ["Kotlin", "Jetpack Compose", "Music"],
    github: "https://github.com/feragusper/harmonia",
  },
  {
    name: "TuneVid",
    description: {
      en: "Built during the pandemic to detect COVID-19 using special sound frequencies emitted by the device. An exploration of audio signal processing for health screening.",
      es: "Construido durante la pandemia para detectar COVID-19 mediante frecuencias de sonido especiales. Exploración del procesamiento de señales de audio para screening de salud.",
    },
    tags: ["Kotlin", "Android SDK", "Audio", "Signal Processing"],
    github: "https://github.com/feragusper/TuneVid",
  },
  {
    name: "Buenos Aires Antes y Después",
    description: {
      en: "Side-by-side historical photo comparison of Buenos Aires neighborhoods — before and after views documenting the city's transformation over decades.",
      es: "Comparación fotográfica histórica de barrios de Buenos Aires — vistas antes y después que documentan la transformación de la ciudad a lo largo de décadas.",
    },
    tags: ["Android SDK", "Photos", "Buenos Aires"],
    github: "https://github.com/feragusper/BuenosAiresAntesYDespues",
  },
  {
    name: "Barrani",
    description: {
      en: "Personal finance app for managing accounts, expenses, income, investments, profitability, and financial forecasting.",
      es: "App de finanzas personales para gestionar cuentas, gastos, ingresos, inversiones, rentabilidad y planificación financiera.",
    },
    tags: ["Kotlin", "Jetpack Compose", "Finance"],
    github: "https://github.com/feragusper/barrani",
  },
  {
    name: "Labulog",
    description: {
      en: "Job-application tracker with market intel: pipeline stages, per-application timeline, metrics like response and interview rates, and an anti ghost-job lookup by posting URL.",
      es: "Tracker de búsquedas laborales con inteligencia de mercado: pipeline por etapas, timeline por aplicación, métricas de respuesta y entrevistas, y lookup anti ghost-job por URL.",
    },
    tags: ["TypeScript", "Web", "Job Hunting"],
    github: "https://github.com/feragusper/labulog",
  },
  {
    name: "Calendar Insights",
    description: {
      en: "Analytics for Google Calendar — visualize where your time actually goes: meetings, focus time, and trends over weeks and months.",
      es: "Analytics para Google Calendar — visualizá a dónde se va tu tiempo: reuniones, tiempo de foco y tendencias a lo largo de semanas y meses.",
    },
    tags: ["TypeScript", "Next.js", "Google Calendar API"],
    github: "https://github.com/feragusper/CalendarInsights",
  },
  {
    name: "Portfolio",
    description: {
      en: "This very site. Personal portfolio built with Next.js, Tailwind CSS and Framer Motion, with bilingual content, dark mode, and Umami analytics.",
      es: "Este mismo sitio. Portfolio personal construido con Next.js, Tailwind CSS y Framer Motion, con contenido bilingüe, dark mode y analytics con Umami.",
    },
    tags: ["Next.js", "TypeScript", "Tailwind"],
    github: "https://github.com/feragusper/portfolio",
  },
  {
    name: "Comidas Pérez Edelberg",
    description: {
      en: "Family meal planner built around our household's specific dietary rules and use cases — for the three of us, each with different needs.",
      es: "Planificador de comidas familiar diseñado en torno a las reglas y casos de uso específicos de nuestra familia, los tres con necesidades distintas.",
    },
    tags: ["Web", "Next.js", "TypeScript", "Family"],
    github: "https://github.com/feragusper/comidas-perez-edelberg",
  },
];

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
          <p className="text-[var(--muted)] mt-3 max-w-xl mx-auto">
            {t.projects.subtitle}
          </p>
        </motion.div>

        <motion.a
          href={featured.github}
          target="_blank"
          rel="noopener noreferrer"
          data-umami-event="project-click"
          data-umami-event-project={featured.name}
          data-umami-event-featured="true"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          whileHover={{ y: -4 }}
          className="group relative max-w-xl mx-auto p-6 rounded-xl border border-[#6c63ff]/40 bg-[var(--surface)] flex flex-col gap-4 transition-all duration-300 cursor-pointer hover:border-[#6c63ff] block"
        >
          <span className="absolute top-4 right-4 text-xs px-2 py-0.5 rounded-full bg-[#6c63ff]/10 text-[#6c63ff] border border-[#6c63ff]/20">
            {t.projects.featured}
          </span>

          <div className="flex items-start justify-between">
            <svg className="w-8 h-8 text-[#6c63ff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
            </svg>
            <svg className="w-4 h-4 text-[var(--muted)] group-hover:text-[var(--text-heading)] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </div>

          <div>
            <h3 className="text-[var(--text-heading)] font-semibold text-lg mb-2 group-hover:text-[#6c63ff] transition-colors">
              {featured.name}
            </h3>
            <p className="text-sm text-[var(--muted)] leading-relaxed">{featured.description[lang]}</p>
          </div>

          <div className="flex flex-wrap gap-2 mt-auto">
            {featured.tags.map((tag) => (
              <span key={tag} className="text-xs px-2 py-0.5 rounded-md bg-[var(--bg)] border border-[var(--border)] text-[var(--muted)]">
                {tag}
              </span>
            ))}
          </div>
        </motion.a>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
          {petProjects.map((project, i) => (
            <motion.a
              key={project.name}
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              data-umami-event="project-click"
              data-umami-event-project={project.name}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: 0.2 + i * 0.07 }}
              whileHover={{ y: -3 }}
              className="group p-5 rounded-xl border border-[var(--border)] bg-[var(--surface)] hover:border-[#6c63ff]/40 transition-all duration-300 flex flex-col gap-3 cursor-pointer"
            >
              <div className="flex items-start justify-between">
                <svg className="w-6 h-6 text-[var(--muted)] group-hover:text-[#6c63ff] transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
                <svg className="w-3.5 h-3.5 text-[var(--muted)] group-hover:text-[#6c63ff] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </div>
              <div>
                <h3 className="text-[var(--text)] font-semibold text-sm mb-1.5 group-hover:text-[#6c63ff] transition-colors">
                  {project.name}
                </h3>
                <p className="text-xs text-[var(--muted)] leading-relaxed">{project.description[lang]}</p>
              </div>
              <div className="flex flex-wrap gap-1.5 mt-auto">
                {project.tags.map((tag) => (
                  <span key={tag} className="text-xs px-2 py-0.5 rounded-md bg-[var(--bg)] border border-[var(--border)] text-[var(--muted)]">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.65 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 mt-8"
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
