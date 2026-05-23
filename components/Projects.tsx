"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

type BilingualField = { en: string; es: string };

const featured: {
  name: string;
  description: BilingualField;
  tags: string[];
  github: string;
} = {
  name: "SmokeAnalytics",
  description: {
    en: "Analytics tool for tracking and visualizing smoking habits. Built with modern Android architecture patterns — Clean Architecture, Kotlin, and Jetpack Compose.",
    es: "Herramienta de analytics para rastrear y visualizar hábitos de fumar. Construida con patrones modernos de arquitectura Android — Clean Architecture, Kotlin y Jetpack Compose.",
  },
  tags: ["Kotlin", "Jetpack Compose", "Clean Architecture", "Analytics"],
  github: "https://github.com/feragusper/SmokeAnalytics",
};

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

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="text-center mt-8"
        >
          <a
            href="https://github.com/feragusper"
            target="_blank"
            rel="noopener noreferrer"
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
