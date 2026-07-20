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
          {h.bio}
        </motion.p>

        <motion.div variants={item} className="flex flex-wrap items-center justify-center gap-4">
          <a
            href="#work"
            data-umami-event="hero-cta"
            data-umami-event-target="work"
            className="px-6 py-3 rounded-lg bg-[#6c63ff] text-white font-medium hover:bg-[#5b52e0] transition-all duration-200 hover:shadow-lg hover:shadow-[rgba(108,99,255,0.3)]"
          >
            {h.cta1}
          </a>
          <a
            href="#contact"
            data-umami-event="hero-cta"
            data-umami-event-target="contact"
            className="px-6 py-3 rounded-lg border border-[var(--border)] text-[var(--text)] font-medium hover:border-[var(--accent)] hover:text-[var(--accent)] transition-all duration-200"
          >
            {h.cta2}
          </a>
        </motion.div>

        <motion.div variants={item} className="mt-16 flex items-center justify-center gap-5">
          <a href="https://github.com/feragusper" target="_blank" rel="noopener noreferrer"
            data-umami-event="social-click"
            data-umami-event-network="github"
            data-umami-event-location="hero"
            className="flex items-center gap-2 text-sm text-[var(--muted)] hover:text-[var(--text-heading)] transition-colors group">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
            </svg>
            GitHub
          </a>
          <span className="text-[var(--border)]">·</span>
          <a href="https://linkedin.com/in/fernandoagustinperez" target="_blank" rel="noopener noreferrer"
            data-umami-event="social-click"
            data-umami-event-network="linkedin"
            data-umami-event-location="hero"
            className="flex items-center gap-2 text-sm text-[var(--muted)] hover:text-[var(--text-heading)] transition-colors group">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
            LinkedIn
          </a>
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
