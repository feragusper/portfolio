"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

type BilingualField = { en: string; es: string };

type Company = {
  name: string;
  period: string;
  roles: string;
  location: string;
  description: BilingualField;
  tags: string[];
};

type Era = {
  id: string;
  label: BilingualField;
  period: string;
  location: string;
  tagline: BilingualField;
  description: BilingualField;
  accent: string;
  borderClass: string;
  badgeClass: string;
  dotClass: string;
  companies: Company[];
};

const eras: Era[] = [
  {
    id: "foundation",
    label: { en: "Foundation", es: "Fundación" },
    period: "2007 — 2018",
    location: "Buenos Aires, Argentina",
    tagline: {
      en: "Formal employment. Learning the craft.",
      es: "Empleo formal. Aprendiendo el oficio.",
    },
    description: {
      en: "11 years employed in-house at two companies — growing from PHP junior to Android Technical Leader, then Mobile Project Leader at LatAm's biggest marketplace.",
      es: "11 años empleado en dos empresas — creciendo de junior PHP a Android Technical Leader, y luego Mobile Project Leader en el marketplace más grande de LatAm.",
    },
    accent: "#6c63ff",
    borderClass: "border-[#6c63ff]/40 hover:border-[#6c63ff]",
    badgeClass: "bg-[#6c63ff]/10 text-[#6c63ff] border-[#6c63ff]/30",
    dotClass: "bg-[#6c63ff]",
    companies: [
      {
        name: "TeraCode",
        period: "2007 — 2012",
        roles: "PHP Jr → Android Technical Leader",
        location: "Buenos Aires (+ 3 months in NYC)",
        description: {
          en: "5 years across 9 projects — from PHP/Java to early Android. Highlights: SwiftKey's first version (team of 3), Defjam Rapstar portal built on-site in NYC, and one of the first 100 Android apps ever published.",
          es: "5 años en 9 proyectos — desde PHP/Java hasta Android temprano. Destacados: primera versión de SwiftKey (equipo de 3), portal Defjam Rapstar construido on-site en Nueva York, y una de las primeras 100 apps de Android publicadas.",
        },
        tags: ["PHP", "Java", "Android SDK", "Symfony", "JNI", "Gerrit"],
      },
      {
        name: "GlobalLogic",
        period: "2012 — 2017",
        roles: "Android Sr → Practice Leader → Tech Leader → Technical Manager",
        location: "Buenos Aires",
        description: {
          en: "Multiple concurrent roles: Technical Leader on Gulfstream private jet apps (3 years, 20+ person team), Android Practice Leader managing PoCs and presales across LatAm, and Technical Manager for the entire region.",
          es: "Múltiples roles simultáneos: Technical Leader en apps Android para jets privados Gulfstream (3 años, equipo de 20+), Android Practice Leader gestionando PoCs y preventa en LatAm, y Technical Manager para toda la región.",
        },
        tags: ["Java", "Android SDK", "RxJava", "Dagger 2", "Agile", "Recruiting"],
      },
      {
        name: "Mercado Libre",
        period: "2017 — 2018",
        roles: "Mobile Project Leader",
        location: "Buenos Aires",
        description: {
          en: "Scrum Master leading the team maintaining View Item Page, Shopping Cart, and Home — three of the most critical modules of LatAm's largest marketplace, impacting millions of daily users.",
          es: "Scrum Master liderando el equipo que mantiene Vista de Ítem, Carrito y Home — tres de los módulos más críticos del marketplace más grande de LatAm, impactando millones de usuarios diarios.",
        },
        tags: ["Java", "Android SDK", "Node.js", "CircleCI", "Agile Leadership"],
      },
    ],
  },
  {
    id: "nomad",
    label: { en: "On My Own", es: "Por mi cuenta" },
    period: "2018 — 2025",
    location: "Spain · Argentina · USA",
    tagline: {
      en: "Independent contractor. Remote. Traveling the world.",
      es: "Contractor independiente. Remoto. Viajando el mundo.",
    },
    description: {
      en: "Went independent — first co-founding Cardumen, a software consultancy in Buenos Aires, then contracting with product companies across Europe and the Americas while living in different countries: Smithsonian Channel, Nubi fintech, TheFork, and Latch.",
      es: "Me independicé — primero co-fundando Cardumen, una consultora de software en Buenos Aires, luego trabajando como contractor con empresas de producto en Europa y las Américas mientras vivía en distintos países: Smithsonian Channel, fintech Nubi, TheFork y Latch.",
    },
    accent: "#2dc653",
    borderClass: "border-[#2dc653]/40 hover:border-[#2dc653]",
    badgeClass: "bg-[#2dc653]/10 text-[#2dc653] border-[#2dc653]/30",
    dotClass: "bg-[#2dc653]",
    companies: [
      {
        name: "Cardumen",
        period: "2016 — 2019",
        roles: "Co-Founder",
        location: "Buenos Aires",
        description: {
          en: "I co-founded Cardumen alongside a group of colleagues, betting on building our own software consultancy. We delivered web and Android products for clients across different industries, wearing every hat along the way — technical direction, client relationships, presales, hiring, and budgeting. It was a full-stack experience in the entrepreneurial sense: building a product company from scratch while staying hands-on with code.",
          es: "Co-fundé Cardumen junto a un grupo de colegas, apostando a construir nuestra propia consultora de software. Entregamos productos web y Android para clientes de distintas industrias, ocupándonos de todo — dirección técnica, relaciones con clientes, preventa, contrataciones y presupuesto. Una experiencia integral en el sentido emprendedor: construir una empresa de software desde cero sin dejar de programar.",
        },
        tags: ["Java", "PHP", "Android SDK", "Laravel", "Symfony", "Agile", "Presales"],
      },
      {
        name: "Coorva",
        period: "2018 — 2021",
        roles: "Senior Android Engineer",
        location: "Remote (Digital Nomad)",
        description: {
          en: "Two major projects: Netflix-like streaming for Smithsonian Channel (CBS) across Android TV, Amazon Fire TV, phones, and tablets — and an AR collection explorer for the Cleveland Museum of Art.",
          es: "Dos proyectos importantes: streaming tipo Netflix para Smithsonian Channel (CBS) en Android TV, Amazon Fire TV, teléfonos y tablets — y un explorador de colección con AR para el Cleveland Museum of Art.",
        },
        tags: ["Kotlin", "ExoPlayer", "Android TV", "Vuforia", "MVVM"],
      },
      {
        name: "intive",
        period: "2019 — 2021",
        roles: "Senior Android Engineer",
        location: "Argentina · Remote",
        description: {
          en: "Built Nubi — a digital wallet for Argentine fintech. Biometric auth, transaction handling, real-time notifications, and secure financial UX for the local market.",
          es: "Construí Nubi — una billetera digital para fintech argentina. Autenticación biométrica, manejo de transacciones, notificaciones en tiempo real y UX financiero seguro.",
        },
        tags: ["Kotlin", "MVVM", "Biometrics", "RxJava", "Firebase", "Facephi"],
      },
      {
        name: "TheFork (TripAdvisor)",
        period: "2021 — 2024",
        roles: "Senior Android Engineer",
        location: "Spain · Remote",
        description: {
          en: "2.5 years contributing to one of Europe's largest restaurant reservation platforms. A/B testing at scale, GraphQL APIs, Jetpack Compose migration, Firebase analytics.",
          es: "2 años y medio contribuyendo a una de las plataformas de reservas de restaurantes más grandes de Europa. A/B testing a escala, APIs GraphQL, migración a Jetpack Compose, Firebase analytics.",
        },
        tags: ["Kotlin", "Compose", "Apollo GraphQL", "RxJava", "Firebase"],
      },
      {
        name: "Latch",
        period: "2023 — 2025",
        roles: "Senior Android Engineer",
        location: "Spain · Remote",
        description: {
          en: "Smart building & IoT platform — intercom integrations, access control systems, residential and commercial building management for Latch's Android app.",
          es: "Plataforma de acceso inteligente y IoT — integración con intercomunicadores, sistemas de control de acceso, gestión de edificios residenciales y comerciales.",
        },
        tags: ["Kotlin", "Compose", "Ktor", "MVI", "Coroutines", "Datadog"],
      },
    ],
  },
  {
    id: "rewe",
    label: { en: "New Chapter", es: "Nuevo Capítulo" },
    period: "2025 — Present",
    location: "Málaga, Spain · Hybrid",
    tagline: {
      en: "Back to formal employment. Settled in Spain.",
      es: "De vuelta al empleo formal. Instalado en España.",
    },
    description: {
      en: "Joined REWE digital as Senior Android Engineer — contributing to one of Germany's largest retail ecosystems from Málaga, with a hybrid setup and renewed focus on long-term impact.",
      es: "Me uní a REWE digital como Senior Android Engineer — contribuyendo a uno de los ecosistemas minoristas más grandes de Alemania desde Málaga, con formato híbrido.",
    },
    accent: "#f4a261",
    borderClass: "border-[#f4a261]/40 hover:border-[#f4a261]",
    badgeClass: "bg-[#f4a261]/10 text-[#f4a261] border-[#f4a261]/30",
    dotClass: "bg-[#f4a261]",
    companies: [
      {
        name: "REWE digital",
        period: "Apr 2025 — Present",
        roles: "Senior Android Engineer",
        location: "Málaga, Spain · Hybrid",
        description: {
          en: "Building internal tools and customer-facing Android solutions for one of Germany's largest grocery retail platforms. Clean Architecture (MVI), Jetpack Compose, REWE Design System (RDS) integration. Collaborating closely with UX, Product, and Backend teams.",
          es: "Construyendo herramientas internas y soluciones Android para uno de los mayores ecosistemas minoristas de Alemania. Arquitectura Limpia (MVI), Jetpack Compose, integración del Sistema de Diseño REWE (RDS). Colaboración estrecha con UX, Producto y Backend.",
        },
        tags: ["Kotlin", "Compose", "MVI", "Hilt", "Coroutines", "Flow", "GitLab CI/CD"],
      },
    ],
  },
];

const education = [
  {
    institution: "Universidad Argentina de la Empresa",
    degree: "Computer Systems Engineering",
    period: "2002 — 2016",
  },
];

export default function Experience() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [openEra, setOpenEra] = useState<string | null>(null);
  const { lang, t } = useLanguage();

  return (
    <section id="experience" className="py-24 px-6" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="text-sm font-mono text-[#6c63ff] mb-3 block">{t.experience.label}</span>
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-heading)]">{t.experience.title}</h2>
          <p className="text-[var(--muted)] mt-3 max-w-xl mx-auto">
            {t.experience.subtitle}
          </p>
        </motion.div>

        <div className="space-y-4">
          {eras.map((era, i) => {
            const isOpen = openEra === era.id;
            return (
              <motion.div
                key={era.id}
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.55, delay: i * 0.12 }}
                className={`rounded-2xl border bg-[var(--bg)] transition-all duration-300 overflow-hidden ${era.borderClass}`}
              >
                {/* Era header */}
                <button
                  onClick={() => setOpenEra(isOpen ? null : era.id)}
                  className="w-full text-left p-6 flex items-start gap-4"
                >
                  <div className={`mt-1 w-2.5 h-2.5 rounded-full flex-shrink-0 ${era.dotClass}`} />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 flex-wrap mb-1">
                      <h3 className="text-[var(--text-heading)] font-bold text-lg">{era.label[lang]}</h3>
                      <span className={`text-xs px-2.5 py-0.5 rounded-full border font-mono ${era.badgeClass}`}>
                        {era.period}
                      </span>
                    </div>
                    <p className="text-xs text-[var(--muted)] mb-2">{era.location}</p>
                    <p className="text-sm text-[var(--muted)] italic mb-1">{era.tagline[lang]}</p>
                    <p className="text-sm text-[var(--text-subtle)] leading-relaxed">{era.description[lang]}</p>
                  </div>
                  <div className="flex-shrink-0 mt-1">
                    <svg
                      className={`w-5 h-5 text-[var(--muted)] transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                      fill="none" stroke="currentColor" viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </button>

                {/* Expanded companies */}
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.35, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 space-y-3 border-t border-[var(--border)] pt-4">
                        {era.companies.map((company, j) => (
                          <motion.div
                            key={company.name}
                            initial={{ opacity: 0, x: -12 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: j * 0.06 }}
                            className="p-4 rounded-xl border border-[var(--border)] bg-[var(--surface)] hover:border-[var(--border-hover)] transition-colors"
                          >
                            <div className="flex items-start justify-between gap-3 flex-wrap mb-1">
                              <div>
                                <p className="text-[var(--text-heading)] font-semibold text-sm">{company.name}</p>
                                <p style={{ color: era.accent }} className="text-xs font-medium mt-0.5">{company.roles}</p>
                              </div>
                              <div className="text-right">
                                <span className="text-xs font-mono text-[var(--muted)]">{company.period}</span>
                                <p className="text-xs text-[var(--muted)] mt-0.5">{company.location}</p>
                              </div>
                            </div>
                            <p className="text-xs text-[var(--muted)] leading-relaxed mb-3">{company.description[lang]}</p>
                            <div className="flex flex-wrap gap-1.5">
                              {company.tags.map((tag) => (
                                <span key={tag} className="text-xs px-2 py-0.5 rounded bg-[var(--bg)] border border-[var(--border)] text-[var(--muted)]">
                                  {tag}
                                </span>
                              ))}
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Education */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16"
        >
          <h3 className="text-xl font-bold text-[var(--text-heading)] mb-6 text-center">{t.experience.education}</h3>
          {education.map((edu) => (
            <div
              key={edu.institution}
              className="p-5 rounded-xl border border-[var(--border)] bg-[var(--bg)] flex items-center justify-between flex-wrap gap-4"
            >
              <div>
                <p className="text-[var(--text-heading)] font-semibold">{edu.degree}</p>
                <p className="text-[#6c63ff] text-sm">{edu.institution}</p>
              </div>
              <span className="text-sm font-mono text-[var(--muted)]">{edu.period}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
