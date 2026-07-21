"use client";

import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

const projectNames = [
  "SmokeAnalytics",
  "Harmonia",
  "TuneVid",
  "Buenos Aires Antes y Después",
  "Barrani",
  "Labulog",
  "Calendar Insights",
  "Portfolio",
  "Comidas Pérez Edelberg",
];

export default function ProjectsTeaser() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const { t } = useLanguage();

  return (
    <section id="projects" className="py-24 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="text-sm font-mono text-[#6c63ff] mb-3 block">{t.projects.label}</span>
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-heading)]">{t.projects.title}</h2>
          <p className="text-[var(--muted)] mt-3 max-w-xl mx-auto">
            {t.projects.subtitle}
          </p>

          <div className="flex flex-wrap justify-center gap-2 mt-8 max-w-2xl mx-auto">
            {projectNames.map((name) => (
              <span
                key={name}
                className="text-xs px-3 py-1 rounded-full bg-[var(--surface)] border border-[var(--border)] text-[var(--muted)]"
              >
                {name}
              </span>
            ))}
          </div>

          <Link
            href="/projects"
            data-umami-event="projects-catalog-click"
            data-umami-event-location="home-teaser"
            className="inline-flex items-center gap-2 mt-10 px-6 py-3 rounded-lg border border-[#6c63ff]/40 text-sm text-[var(--text-heading)] hover:border-[#6c63ff] hover:text-[#6c63ff] transition-all duration-200"
          >
            {t.projects.viewAll}
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
