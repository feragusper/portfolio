"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

const statValues = ["20+", "10+", "6+", "5+"];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const { t } = useLanguage();
  const a = t.about;

  return (
    <section id="about" className="py-24 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-2 gap-16 items-center"
        >
          <div>
            <span className="text-sm font-mono text-[var(--accent)] mb-3 block">{a.label}</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-heading)] mb-6 leading-tight">
              {a.h1}<br />
              <span className="gradient-text">{a.h2}</span>
            </h2>
            <div className="space-y-4 text-[var(--muted)] leading-relaxed">
              <p>{a.p1}</p>
              <p>{a.p2}</p>
              <p>{a.p3}</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {statValues.map((val, i) => (
              <motion.div
                key={a.stats[i]}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-6 rounded-xl border border-[var(--border)] bg-[var(--surface)] hover:border-[#6c63ff]/50 transition-colors duration-300"
              >
                <div className="text-3xl font-bold gradient-text mb-2">{val}</div>
                <div className="text-sm text-[var(--muted)]">{a.stats[i]}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
