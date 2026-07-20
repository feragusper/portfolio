"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

const cvOptions = [
  {
    id: "short",
    file: "/cv/fernando-perez-short.pdf",
    filename: "Fernando-Perez-CV-Short.pdf",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6}
          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    accent: "#6c63ff",
    borderClass: "border-[#6c63ff]/30 hover:border-[#6c63ff]",
    badgeClass: "bg-[#6c63ff]/10 text-[#6c63ff] border-[#6c63ff]/20",
    iconBgClass: "bg-[#6c63ff]/10 border-[#6c63ff]/30 text-[#6c63ff]",
  },
  {
    id: "full",
    file: "/cv/fernando-perez-full.pdf",
    filename: "Fernando-Perez-CV-Full.pdf",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6}
          d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    ),
    accent: "#2dc653",
    borderClass: "border-[#2dc653]/30 hover:border-[#2dc653]",
    badgeClass: "bg-[#2dc653]/10 text-[#2dc653] border-[#2dc653]/20",
    iconBgClass: "bg-[#2dc653]/10 border-[#2dc653]/30 text-[#2dc653]",
  },
  {
    id: "ats",
    file: "/cv/fernando-perez-ats.pdf",
    filename: "Fernando-Perez-CV-ATS.pdf",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6}
          d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18" />
      </svg>
    ),
    accent: "#f4a261",
    borderClass: "border-[#f4a261]/30 hover:border-[#f4a261]",
    badgeClass: "bg-[#f4a261]/10 text-[#f4a261] border-[#f4a261]/20",
    iconBgClass: "bg-[#f4a261]/10 border-[#f4a261]/30 text-[#f4a261]",
  },
];

export default function CVDownload() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const { t } = useLanguage();
  const cv = t.cv;

  return (
    <section id="cv" className="py-24 px-6 bg-[var(--surface)]" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <span className="text-sm font-mono text-[#6c63ff] mb-3 block">{cv.label}</span>
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-heading)]">{cv.title}</h2>
          <p className="text-[var(--muted)] mt-3 max-w-md mx-auto">{cv.subtitle}</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-5">
          {cvOptions.map((opt, i) => {
            const label = cv.options[opt.id as keyof typeof cv.options];
            return (
              <motion.div
                key={opt.id}
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`group p-6 rounded-2xl border bg-[var(--bg)] transition-all duration-300 flex flex-col gap-4 ${opt.borderClass}`}
              >
                <div className="flex items-start justify-between">
                  <div className={`w-12 h-12 rounded-xl border flex items-center justify-center flex-shrink-0 ${opt.iconBgClass}`}>
                    {opt.icon}
                  </div>
                  <span className={`text-xs px-2.5 py-0.5 rounded-full border font-mono ${opt.badgeClass}`}>
                    {label.tag}
                  </span>
                </div>

                <div className="flex-1">
                  <h3 className="text-[var(--text-heading)] font-bold text-lg mb-1">{label.title}</h3>
                  <p className="text-sm text-[var(--muted)] leading-relaxed">{label.description}</p>
                </div>

                <a
                  href={opt.file}
                  download={opt.filename}
                  data-umami-event="cv-download"
                  data-umami-event-variant={opt.id}
                  style={{ color: "#ffffff", backgroundColor: opt.accent }}
                  className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 hover:opacity-90 group-hover:shadow-lg"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                  {cv.download}
                </a>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
