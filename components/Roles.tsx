"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

const engineerTrackSkills = [
  ["PHP", "Perl", "MySQL", "Java", "HTML/CSS/JS", "Apache", "SVN"],
  ["PHP", "Symfony", "Java", "J2SE", "Struts", "Hibernate", "Android SDK (0.9–1.5)"],
  [
    "Kotlin", "Java", "Android SDK", "Jetpack Compose", "Clean Architecture",
    "MVVM", "MVI", "MVP", "RxJava", "Coroutines", "Flow",
    "Hilt / Dagger 2", "Retrofit", "OkHttp", "Ktor", "Room",
    "JUnit", "Mockk", "Turbine", "Espresso",
    "Gradle", "GitLab CI/CD", "GitHub Actions", "CircleCI",
    "Firebase", "Bugsnag", "Datadog",
  ],
];

const leaderTrackSkills = [
  ["Architecture", "Code Review", "Mentoring", "Client Communication", "Agile"],
  ["Practice Management", "PoC Direction", "Presales", "L&D", "Recruitment"],
  ["Multi-project Management", "Career Plan Design", "Cross-team Leadership", "Strategic Hiring"],
  ["Scrum Master", "Roadmap Ownership", "Sprint Planning", "Stakeholder Management"],
];

const managementTools = [
  "Jira", "Confluence", "Trello", "Rally", "Redmine",
  "Agile / Scrum", "OKRs", "Figma", "Zeplin", "Linear",
];

export default function Roles() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const { t } = useLanguage();

  const engineerLevels = [t.roles.levels.jr, t.roles.levels.ssr, t.roles.levels.sr];
  const leaderLevels = [t.roles.levels.tl, t.roles.levels.pl, t.roles.levels.tm, t.roles.levels.pjl];

  return (
    <section id="roles" className="py-24 px-6 bg-[var(--surface)]" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="text-sm font-mono text-[#6c63ff] mb-3 block">{t.roles.label}</span>
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-heading)]">{t.roles.title}</h2>
          <p className="text-[var(--muted)] mt-3 max-w-xl mx-auto">
            {t.roles.subtitle}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Engineer */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="p-6 rounded-2xl border border-[#6c63ff]/30 bg-[var(--bg)]"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 rounded-lg bg-[#6c63ff]/10 border border-[#6c63ff]/30 flex items-center justify-center">
                <svg className="w-4 h-4 text-[#6c63ff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="text-[var(--text-heading)] font-bold text-lg">{t.roles.engineer}</h3>
            </div>

            <div className="relative space-y-6">
              <div className="absolute left-[5px] top-2 bottom-2 w-px bg-[var(--border)]" />
              {engineerLevels.map((phase, i) => (
                <motion.div
                  key={phase.level}
                  initial={{ opacity: 0, x: -12 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  className="relative pl-6"
                >
                  <div className="absolute left-0 top-1.5 w-2.5 h-2.5 rounded-full bg-[#6c63ff] border-2 border-[var(--bg)]" />
                  <div className="flex items-baseline gap-2 mb-2 flex-wrap">
                    <p className="text-[var(--text-heading)] font-semibold text-sm">{phase.level}</p>
                    <span className="text-xs font-mono text-[var(--muted)]">{phase.period}</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {engineerTrackSkills[i].map((skill) => (
                      <span
                        key={skill}
                        className="text-xs px-2 py-0.5 rounded-md bg-[var(--surface)] border border-[var(--border)] text-[var(--muted)]"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Leader */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="p-6 rounded-2xl border border-[#f4a261]/30 bg-[var(--bg)]"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 rounded-lg bg-[#f4a261]/10 border border-[#f4a261]/30 flex items-center justify-center">
                <svg className="w-4 h-4 text-[#f4a261]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-[var(--text-heading)] font-bold text-lg">{t.roles.leader}</h3>
            </div>

            <div className="relative space-y-5">
              <div className="absolute left-[5px] top-2 bottom-2 w-px bg-[var(--border)]" />
              {leaderLevels.map((level, i) => (
                <motion.div
                  key={level.level}
                  initial={{ opacity: 0, x: 12 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  className="relative pl-6"
                >
                  <div className="absolute left-0 top-1.5 w-2.5 h-2.5 rounded-full bg-[#f4a261] border-2 border-[var(--bg)]" />
                  <div className="flex items-baseline gap-2 mb-1 flex-wrap">
                    <p className="text-[var(--text-heading)] font-semibold text-sm">{level.level}</p>
                    <span className="text-xs font-mono text-[var(--muted)]">{t.roles.since} {level.period}</span>
                  </div>
                  <p className="text-xs text-[var(--muted)] leading-relaxed mb-2">{level.description}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {leaderTrackSkills[i].map((skill) => (
                      <span
                        key={skill}
                        className="text-xs px-2 py-0.5 rounded-md bg-[var(--surface)] border border-[var(--border)] text-[var(--muted)]"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-6 pt-5 border-t border-[var(--border)]">
              <p className="text-xs text-[var(--muted)] mb-2">{t.roles.mgmtTools}</p>
              <div className="flex flex-wrap gap-1.5 mb-5">
                {managementTools.map((tool) => (
                  <span
                    key={tool}
                    className="text-xs px-2 py-0.5 rounded-md bg-[var(--surface)] border border-[#f4a261]/20 text-[var(--muted)]"
                  >
                    {tool}
                  </span>
                ))}
              </div>
              <div className="p-4 rounded-xl border border-[#f4a261]/20 bg-[var(--surface)]">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-2 h-2 rounded-full bg-[#f4a261] flex-shrink-0" />
                  <p className="text-[var(--text-heading)] font-semibold text-sm">Co-Founder · Cardumen</p>
                  <span className="text-xs font-mono text-[var(--muted)]">2016 — 2019</span>
                </div>
                <p className="text-xs text-[var(--muted)] leading-relaxed pl-4">
                  {t.roles.cofounderNote}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
