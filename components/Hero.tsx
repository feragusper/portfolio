"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.3 } },
};
const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

export default function Hero() {
  const { t } = useLanguage();
  const h = t.hero;

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: "linear-gradient(var(--accent) 1px, transparent 1px), linear-gradient(90deg, var(--accent) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#6c63ff] opacity-[0.06] blur-[120px] pointer-events-none" />

      <motion.div variants={container} initial="hidden" animate="show" className="relative max-w-4xl mx-auto text-center">
        <motion.div variants={item} className="mb-6">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[var(--border)] bg-[var(--surface)] text-sm text-[var(--muted)]">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            {h.badge}
          </span>
        </motion.div>

        <motion.h1 variants={item} className="text-5xl md:text-7xl font-bold tracking-tight text-[var(--text-heading)] mb-6 leading-[1.1]">
          Fernando <span className="gradient-text">Pérez</span>
        </motion.h1>

        <motion.p variants={item} className="text-xl md:text-2xl text-[var(--muted)] mb-4 font-medium">
          {h.subtitle}
        </motion.p>

        <motion.p variants={item} className="text-base md:text-lg text-[var(--muted)] max-w-2xl mx-auto mb-10 leading-relaxed">
          {h.bio}{" "}
          <span className="text-[var(--text)]">{h.bioAt}</span>{" "}
          {h.bioLocation}
        </motion.p>

        <motion.div variants={item} className="flex flex-wrap items-center justify-center gap-4">
          <a href="#work" className="px-6 py-3 rounded-lg bg-[#6c63ff] text-white font-medium hover:bg-[#5b52e0] transition-all duration-200 hover:shadow-lg hover:shadow-[rgba(108,99,255,0.3)]">
            {h.cta1}
          </a>
          <a href="#contact" className="px-6 py-3 rounded-lg border border-[var(--border)] text-[var(--text)] font-medium hover:border-[var(--accent)] hover:text-[var(--accent)] transition-all duration-200">
            {h.cta2}
          </a>
        </motion.div>

        <motion.div variants={item} className="mt-16 flex items-center justify-center gap-6">
          {[
            { label: "GitHub", href: "https://github.com/feragusper" },
            { label: "LinkedIn", href: "https://linkedin.com/in/fernandoagustinperez" },
          ].map((link) => (
            <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer"
              className="text-sm text-[var(--muted)] hover:text-[var(--text-heading)] transition-colors underline underline-offset-4">
              {link.label}
            </a>
          ))}
        </motion.div>
      </motion.div>

      <motion.div className="absolute bottom-10 left-1/2 -translate-x-1/2" animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 2 }}>
        <svg className="w-5 h-5 text-[var(--muted)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </motion.div>
    </section>
  );
}
