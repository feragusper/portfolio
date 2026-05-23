"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

const toolGroups = [
  {
    key: "code" as const,
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
  },
  {
    key: "research" as const,
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
  },
  {
    key: "build" as const,
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
  },
  {
    key: "creative" as const,
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
      </svg>
    ),
  },
];

const highlightCards = [
  {
    key: "built",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
      </svg>
    ),
    accent: "#6c63ff",
    border: "border-[#6c63ff]/30 hover:border-[#6c63ff]/70",
    glow: "bg-[#6c63ff]/5",
    iconBg: "bg-[#6c63ff]/15 text-[#6c63ff]",
    tag: "MCP",
  },
  {
    key: "rewe",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    accent: "#f4a261",
    border: "border-[#f4a261]/30 hover:border-[#f4a261]/70",
    glow: "bg-[#f4a261]/5",
    iconBg: "bg-[#f4a261]/15 text-[#f4a261]",
    tag: "REWE",
  },
  {
    key: "creative",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
      </svg>
    ),
    accent: "#ec4899",
    border: "border-[#ec4899]/30 hover:border-[#ec4899]/70",
    glow: "bg-[#ec4899]/5",
    iconBg: "bg-[#ec4899]/15 text-[#ec4899]",
    tag: "Music + Code",
  },
];

export default function AISection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const { t } = useLanguage();
  const ai = t.ai;

  return (
    <section id="ai" className="py-24 px-6 relative overflow-hidden" ref={ref}>
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[var(--bg)]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#6c63ff]/40 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#6c63ff]/20 to-transparent" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-[#6c63ff] opacity-[0.04] blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-[300px] h-[300px] rounded-full bg-[#ec4899] opacity-[0.03] blur-[80px] pointer-events-none" />

      <div className="relative max-w-5xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center"
        >
          <span className="text-sm font-mono text-[#6c63ff] mb-3 block">{ai.label}</span>
          <h2 className="text-3xl md:text-5xl font-bold text-[var(--text-heading)] mb-5 leading-tight">
            {ai.title}
          </h2>
          <p className="text-[var(--muted)] max-w-lg mx-auto text-base">{ai.subtitle}</p>
        </motion.div>

        {/* Pitch paragraphs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-14 max-w-3xl mx-auto space-y-4 text-[var(--text-subtle)] leading-relaxed text-[15px]"
        >
          <p>{ai.pitch}</p>
          <p className="text-[var(--text-heading)] font-medium">{ai.pitch2}</p>
          <p>{ai.pitch3}</p>
        </motion.div>

        {/* Tool groups */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, delay: 0.18 }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12"
        >
          {toolGroups.map((group, gi) => {
            const data = ai.tools[group.key];
            return (
              <motion.div
                key={group.key}
                initial={{ opacity: 0, y: 16 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.22 + gi * 0.07 }}
                className="p-5 rounded-xl border border-[var(--border)] bg-[var(--surface)] hover:border-[#6c63ff]/30 transition-colors duration-300"
              >
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-[#6c63ff]">{group.icon}</span>
                  <span className="text-xs font-semibold uppercase tracking-widest text-[#6c63ff]">
                    {data.label}
                  </span>
                </div>
                <div className="flex flex-col gap-2">
                  {data.tools.map((tool) => (
                    <div key={tool} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#6c63ff]/50 flex-shrink-0" />
                      <span className="text-sm text-[var(--text-subtle)]">{tool}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Highlight cards */}
        <div className="grid md:grid-cols-3 gap-5">
          {highlightCards.map((card, i) => {
            const data = {
              built: { title: ai.builtTitle, desc: ai.builtDesc },
              rewe: { title: ai.reweTitle, desc: ai.reweDesc },
              creative: { title: ai.creativeTitle, desc: ai.creativeDesc },
            }[card.key]!;
            return (
              <motion.div
                key={card.key}
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.35 + i * 0.1 }}
                className={`relative p-6 rounded-2xl border ${card.border} ${card.glow} bg-[var(--surface)] overflow-hidden transition-all duration-300`}
              >
                <div className="absolute -right-6 -top-6 w-24 h-24 rounded-full opacity-10 blur-xl"
                  style={{ backgroundColor: card.accent }} />
                <div className="relative">
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-11 h-11 rounded-xl flex items-center justify-center ${card.iconBg}`}>
                      {card.icon}
                    </div>
                    <span className="text-xs px-2.5 py-1 rounded-full font-mono border"
                      style={{ color: card.accent, borderColor: `${card.accent}40`, backgroundColor: `${card.accent}10` }}>
                      {card.tag}
                    </span>
                  </div>
                  <h3 className="text-[var(--text-heading)] font-bold text-base mb-2">{data.title}</h3>
                  <p className="text-sm text-[var(--muted)] leading-relaxed">{data.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
