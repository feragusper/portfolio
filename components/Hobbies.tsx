"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Hobbies() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const { t } = useLanguage();

  const hobbies = [
    {
      title: t.life.travelTitle,
      description: t.life.travelDesc,
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: t.life.cyclingTitle,
      description: t.life.cyclingDesc,
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
          <circle cx="5" cy="17" r="3" strokeWidth={1.6} />
          <circle cx="19" cy="17" r="3" strokeWidth={1.6} />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M12 12L9 7h6l4 5" />
        </svg>
      ),
    },
    {
      title: t.life.cookingTitle,
      description: t.life.cookingDesc,
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
    },
  ];

  return (
    <section id="life" className="py-24 px-6" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="text-sm font-mono text-[#6c63ff] mb-3 block">{t.life.label}</span>
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-heading)]">{t.life.title}</h2>
          <p className="text-[var(--muted)] mt-3 max-w-md mx-auto">
            {t.life.subtitle}
          </p>
        </motion.div>

        {/* Music — featured */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-5 p-8 rounded-2xl border border-[#6c63ff]/40 bg-[var(--bg)] relative overflow-hidden group hover:border-[#6c63ff] transition-all duration-300"
        >
          {/* decorative */}
          <div className="absolute -right-10 -top-10 w-48 h-48 rounded-full bg-[#6c63ff]/5 blur-2xl pointer-events-none" />
          <div className="absolute -right-4 -bottom-4 w-32 h-32 rounded-full bg-[#6c63ff]/8 blur-xl pointer-events-none" />

          <div className="relative flex items-start gap-6">
            <div className="w-14 h-14 rounded-xl bg-[#6c63ff]/15 border border-[#6c63ff]/30 flex items-center justify-center flex-shrink-0">
              <svg className="w-7 h-7 text-[#6c63ff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
              </svg>
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2 flex-wrap">
                <h3 className="text-[var(--text-heading)] font-bold text-xl">{t.life.musicTitle}</h3>
                <span className="text-xs px-2.5 py-0.5 rounded-full border border-[#6c63ff]/30 bg-[#6c63ff]/10 text-[#6c63ff]">
                  🎹 Piano
                </span>
                <span className="text-xs text-[var(--muted)]">{t.life.musicalTraining}</span>
                <span className="text-xs px-2.5 py-0.5 rounded-full border border-[#ec4899]/30 bg-[#ec4899]/10 text-[#ec4899]">
                  🤖 Suno
                </span>
                <span className="text-xs px-2.5 py-0.5 rounded-full border border-[#ec4899]/30 bg-[#ec4899]/10 text-[#ec4899]">
                  Moises
                </span>
                <span className="text-xs px-2.5 py-0.5 rounded-full border border-[#ec4899]/30 bg-[#ec4899]/10 text-[#ec4899]">
                  Udio
                </span>
              </div>
              <p className="text-[var(--text-subtle)] leading-relaxed max-w-2xl">
                {t.life.musicDesc}
              </p>
            </div>
          </div>
        </motion.div>

        {/* Others */}
        <div className="grid md:grid-cols-3 gap-4">
          {hobbies.map((hobby, i) => (
            <motion.div
              key={hobby.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.25 + i * 0.08 }}
              className="p-5 rounded-xl border border-[var(--border)] bg-[var(--bg)] hover:border-[#6c63ff]/30 transition-all duration-300 flex flex-col gap-3"
            >
              <div className="w-10 h-10 rounded-lg bg-[var(--surface)] border border-[var(--border)] flex items-center justify-center text-[var(--muted)]">
                {hobby.icon}
              </div>
              <h4 className="text-[var(--text-heading)] font-semibold">{hobby.title}</h4>
              <p className="text-sm text-[var(--muted)] leading-relaxed">{hobby.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
