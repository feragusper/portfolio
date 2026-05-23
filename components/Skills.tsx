"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

const skillGroups = [
  {
    category: { en: "Android & Mobile", es: "Android y Móvil" },
    color: "#6c63ff",
    primary: true,
    skills: [
      "Kotlin", "Android SDK", "Jetpack Compose", "Coroutines & Flow",
      "Hilt / Dagger", "Room", "Retrofit / OkHttp", "Ktor",
      "RxJava", "ExoPlayer", "React Native",
    ],
  },
  {
    category: { en: "Architecture & Practices", es: "Arquitectura y Prácticas" },
    color: "#818cf8",
    primary: true,
    skills: [
      "Clean Architecture", "MVP", "MVVM", "MVI",
      "TDD", "Code Review", "REST", "GraphQL", "Agile / Scrum", "OOP",
    ],
  },
  {
    category: { en: "Testing", es: "Testing" },
    color: "#a78bfa",
    primary: true,
    skills: [
      "JUnit", "Mockk", "Mockito", "Turbine",
      "Espresso", "Robolectric", "Spek",
    ],
  },
  {
    category: { en: "CI/CD & Infrastructure", es: "CI/CD e Infraestructura" },
    color: "#7c3aed",
    primary: true,
    skills: [
      "Git", "GitHub Actions", "GitLab CI/CD", "CircleCI",
      "Bitrise", "Jenkins", "Gradle", "Firebase",
      "Bugsnag", "Datadog", "Crashlytics",
    ],
  },
  {
    category: { en: "AI & Productivity", es: "IA y Productividad" },
    color: "#ec4899",
    primary: false,
    skills: [
      "Claude", "Gemini / Google AI Studio", "GitHub Copilot",
      "MS Copilot", "Codex", "Lovable",
      "MCP Development", "Suno", "Moises", "Udio",
    ],
  },
  {
    category: { en: "Tools & Collaboration", es: "Herramientas y Colaboración" },
    color: "#6d28d9",
    primary: false,
    skills: [
      "Jira", "Confluence", "Figma", "Zeplin",
      "Linear", "Trello", "GitHub", "Bitbucket",
      "Swagger", "InVision",
    ],
  },
  {
    category: { en: "Earlier Stack", es: "Stack Anterior" },
    color: "#5b21b6",
    primary: false,
    skills: [
      "Java", "PHP", "Symfony", "Laravel",
      "MySQL", "Node.js", "JavaScript", "Perl", "JNI",
    ],
  },
];

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [showAll, setShowAll] = useState(false);
  const { lang, t } = useLanguage();
  const s = t.skills;

  const primary = skillGroups.filter((g) => g.primary);
  const secondary = skillGroups.filter((g) => !g.primary);

  return (
    <section id="skills" className="py-24 px-6 bg-[var(--surface)]" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="text-sm font-mono text-[var(--accent)] mb-3 block">{s.label}</span>
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-heading)]">{s.title}</h2>
          <p className="text-[var(--muted)] mt-3 max-w-xl mx-auto">{s.subtitle}</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {primary.map((group, gi) => (
            <SkillCard key={group.category.en} group={group} gi={gi} inView={inView} lang={lang} />
          ))}
        </div>

        <AnimatePresence>
          {showAll && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <div className="grid md:grid-cols-2 gap-6 mt-6">
                {secondary.map((group, gi) => (
                  <SkillCard key={group.category.en} group={group} gi={gi + primary.length} inView={inView} lang={lang} />
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center mt-8"
        >
          <button
            onClick={() => setShowAll(!showAll)}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-[var(--border)] text-sm text-[var(--muted)] hover:border-[#6c63ff]/40 hover:text-[var(--text-heading)] transition-all duration-200"
          >
            {showAll ? s.showLess : s.showMore}
            <svg
              className={`w-4 h-4 transition-transform duration-200 ${showAll ? "rotate-180" : ""}`}
              fill="none" stroke="currentColor" viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </motion.div>
      </div>
    </section>
  );
}

function SkillCard({
  group,
  gi,
  inView,
  lang,
}: {
  group: typeof skillGroups[0];
  gi: number;
  inView: boolean;
  lang: "en" | "es";
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: gi * 0.08 }}
      className="p-6 rounded-xl border border-[var(--border)] bg-[var(--bg)] hover:border-[var(--border-hover)] transition-colors"
    >
      <h3 className="text-sm font-semibold uppercase tracking-widest mb-4" style={{ color: group.color }}>
        {group.category[lang]}
      </h3>
      <div className="flex flex-wrap gap-2">
        {group.skills.map((skill, si) => (
          <motion.span
            key={skill}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.3, delay: gi * 0.08 + si * 0.03 }}
            className="px-3 py-1.5 text-xs rounded-md border border-[var(--border)] text-[var(--muted)] hover:text-[var(--text-heading)] hover:border-[#6c63ff]/40 transition-all duration-200 cursor-default"
          >
            {skill}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
}
