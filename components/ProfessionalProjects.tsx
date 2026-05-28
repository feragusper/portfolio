"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

type BilingualField = { en: string; es: string };

type Project = {
  client: string;
  via?: string;
  period: string;
  headline: BilingualField;
  description: BilingualField;
  tags: string[];
  badge?: string;
  link?: string;
};

type FeaturedProject = Project & {
  badge: string;
  badgeColor: string;
};

const featured: FeaturedProject[] = [
  {
    client: "Microsoft SwiftKey",
    via: "via TeraCode",
    period: "2010",
    headline: {
      en: "Led the first Android versions of SwiftKey",
      es: "Lideré las primeras versiones Android de SwiftKey",
    },
    description: {
      en: "Led a team of 3 to build the first stable version of SwiftKey, the predictive keyboard for Android. Later acquired by Microsoft for $250M.",
      es: "Lideré un equipo de 3 para construir la primera versión estable de SwiftKey, el teclado predictivo para Android. Más tarde adquirido por Microsoft por 250 millones de dólares.",
    },
    badge: "Acquired by Microsoft",
    badgeColor: "text-[#00b4d8] border-[#00b4d8]/30 bg-[#00b4d8]/10",
    tags: ["Java", "Android SDK", "JNI", "Android Services", "Gerrit"],
    link: "https://play.google.com/store/apps/details?id=com.touchtype.swiftkey",
  },
  {
    client: "Gulfstream Aerospace",
    via: "via GlobalLogic",
    period: "2013 — 2016",
    headline: {
      en: "Android apps for private jet cabin control",
      es: "Apps Android para el control de cabina en jets privados",
    },
    description: {
      en: "Technical Leader on a 20+ person cross-functional team building Android apps for Gulfstream jets. Passengers control in-flight entertainment, lighting, water tanks, electricity, and cabin environment.",
      es: "Tech Leader en un equipo multifuncional de más de 20 personas construyendo apps Android para jets Gulfstream. Los pasajeros controlan entretenimiento, iluminación, depósitos de agua, electricidad y el entorno de la cabina.",
    },
    badge: "Private aviation",
    badgeColor: "text-[#f4a261] border-[#f4a261]/30 bg-[#f4a261]/10",
    tags: ["Java", "Android SDK", "Dagger 2", "ButterKnife", "RxJava", "Retrofit"],
    link: "https://play.google.com/store/apps/details?id=com.gulfstream.cabincomfort",
  },
  {
    client: "Mercado Libre",
    via: "",
    period: "2017 — 2018",
    headline: {
      en: "Mobile Project Leader — View Item, Cart & Home",
      es: "Mobile Project Leader — Vista de ítem, Carrito y Home",
    },
    description: {
      en: "Scrum Master for the team maintaining three core modules of LatAm's biggest marketplace: View Item Page, Shopping Cart, and Home. Led roadmap, recruiting, and career plans for the mobile team.",
      es: "Scrum Master para el equipo que mantiene tres módulos clave del marketplace más grande de LatAm: Vista de Ítem, Carrito y Home. Lideré el roadmap, el reclutamiento y los planes de carrera del equipo móvil.",
    },
    badge: "Millions of users · LatAm",
    badgeColor: "text-[#2dc653] border-[#2dc653]/30 bg-[#2dc653]/10",
    tags: ["Java", "Android SDK", "Node.js", "CircleCI", "Agile Leadership"],
    link: "https://play.google.com/store/apps/details?id=com.mercadolibre",
  },
];

const secondary: Project[] = [
  {
    client: "TheFork (TripAdvisor)",
    period: "2021 — 2024",
    headline: {
      en: "Restaurant reservation platform",
      es: "Plataforma de reservas de restaurantes",
    },
    description: {
      en: "Senior Android Engineer on one of Europe's largest restaurant booking platforms. A/B testing, Apollo GraphQL, Jetpack Compose migration, Firebase.",
      es: "Senior Android Engineer en una de las plataformas de reservas de restaurantes más grandes de Europa. A/B testing, Apollo GraphQL, migración a Jetpack Compose, Firebase.",
    },
    tags: ["Kotlin", "Compose", "RxJava", "Apollo GraphQL", "Firebase"],
    link: "https://play.google.com/store/apps/details?id=com.lafourchette.lafourchette",
  },
  {
    client: "Latch",
    period: "2023 — 2025",
    headline: {
      en: "Smart building & IoT platform",
      es: "Plataforma de edificios inteligentes e IoT",
    },
    description: {
      en: "Android features for smart access control. Intercoms, IoT devices, residential and commercial building management. Clean Architecture with VIPER/MVI.",
      es: "Features Android para control de acceso inteligente. Intercomunicadores, dispositivos IoT, gestión de edificios. Arquitectura Limpia con VIPER/MVI.",
    },
    tags: ["Kotlin", "Compose", "Ktor", "MVI", "Coroutines", "Bugsnag"],
    link: "https://play.google.com/store/apps/details?id=com.latch.android.latchapp",
  },
  {
    client: "Smithsonian Channel (CBS)",
    via: "via Coorva",
    period: "2018 — 2021",
    headline: {
      en: "Multiplatform streaming app",
      es: "App de streaming multiplataforma",
    },
    description: {
      en: "Netflix-like streaming for Smithsonian Channel across Android TV, Amazon Fire TV, phones, and tablets. Team of 4 Android + Backend developers. In-app purchases, background playback.",
      es: "Streaming tipo Netflix para Smithsonian Channel en Android TV, Amazon Fire TV, teléfonos y tablets. Equipo de 4 desarrolladores. Compras in-app, reproducción en segundo plano.",
    },
    tags: ["Kotlin", "ExoPlayer", "Android TV", "MVVM", "Google/Amazon IAP"],
  },
  {
    client: "Acronis",
    via: "via GlobalLogic",
    period: "2012 — 2014",
    headline: {
      en: "Enterprise mobile file sync & secure access",
      es: "Sincronización de archivos empresariales y acceso seguro",
    },
    description: {
      en: "Android app integrating devices with corporate file servers and SharePoint via JNI and native C++. Secure mobile access to enterprise content.",
      es: "App Android que integra dispositivos con servidores de archivos corporativos y SharePoint via JNI y C++ nativo. Acceso móvil seguro a contenido empresarial.",
    },
    tags: ["Java", "Android SDK", "JNI", "C++", "ORMLite", "TeamCity"],
  },
  {
    client: "Nubi",
    via: "via intive",
    period: "2019 — 2021",
    headline: {
      en: "Fintech digital wallet — Argentina",
      es: "Billetera digital fintech — Argentina",
    },
    description: {
      en: "Secure digital wallet: biometric auth, transaction handling, real-time push notifications. MVVM + Clean Architecture with Firebase and Facephi.",
      es: "Billetera digital segura: autenticación biométrica, manejo de transacciones, notificaciones push en tiempo real. MVVM + Arquitectura Limpia con Firebase y Facephi.",
    },
    tags: ["Kotlin", "MVVM", "Biometrics", "RxJava", "Firebase", "Facephi"],
  },
  {
    client: "Cleveland Museum of Art",
    via: "via Coorva",
    period: "2018 — 2021",
    headline: {
      en: "AR museum collection explorer",
      es: "Explorador de colección de museo con AR",
    },
    description: {
      en: "Android app for the Cleveland Museum. Visual recognition and AR via Vuforia to explore the permanent collection.",
      es: "App Android para el Cleveland Museum of Art. Reconocimiento visual y AR con Vuforia para explorar la colección permanente.",
    },
    tags: ["Kotlin", "Vuforia", "MVVM", "Android SDK"],
  },
  {
    client: "LA Galaxy",
    via: "via GlobalLogic",
    period: "2016 — 2017",
    headline: {
      en: "In-stadium fan experience app",
      es: "App de experiencia de fans en el estadio",
    },
    description: {
      en: "Match experience app for LA Galaxy fans. Real-time match data and in-stadium interactive features.",
      es: "App de experiencia de partido para fans del LA Galaxy. Datos en tiempo real y funcionalidades interactivas en el estadio.",
    },
    tags: ["Java", "Android SDK", "Firebase", "iOS HealthKit"],
  },
  {
    client: "Cardumen",
    via: "Co-founder",
    period: "2016 — 2019",
    headline: {
      en: "Android & web software studio",
      es: "Estudio de software Android y web",
    },
    description: {
      en: "Co-founded Cardumen, a software studio in Buenos Aires. Web and Android products, technical leadership, presales, hiring.",
      es: "Co-fundé Cardumen, un estudio de software en Buenos Aires. Productos web y Android, liderazgo técnico, preventa, contrataciones.",
    },
    tags: ["Java", "Android SDK", "PHP", "Symfony", "Laravel", "MySQL"],
  },
  {
    client: "Def Jam Rapstar",
    via: "via TeraCode · NYC",
    period: "2010 — 2012",
    headline: {
      en: "Rap karaoke game — web portal and social community",
      es: "Juego de karaoke de rap — portal web y comunidad social",
    },
    description: {
      en: "Full web platform for the Def Jam Rapstar console game (4mm Games, Rockstar Games partner). Joomla social community and PHP portal: rap karaoke, video upload and sharing, user video battles. Three months on-site in New York.",
      es: "Plataforma web completa para el juego Def Jam Rapstar (4mm Games, partner de Rockstar Games). Comunidad social en Joomla y portal PHP: karaoke de rap, subida y compartición de videos, batallas. Tres meses on-site en Nueva York.",
    },
    badge: "On-site NYC",
    tags: ["PHP", "Symfony", "Doctrine", "MySQL", "jQuery", "Gerrit"],
  },
  {
    client: "Voknow",
    via: "via TeraCode",
    period: "2011 — 2012",
    headline: {
      en: "Twitter feed reader for blind users and drivers",
      es: "Lector de Twitter para usuarios ciegos y conductores",
    },
    description: {
      en: "Android app that reads Twitter feeds aloud via TTS. Built for blind users, ended up being used a lot by drivers too.",
      es: "App Android que lee el feed de Twitter en voz alta via TTS. Construida para usuarios ciegos, terminó siendo muy usada también por conductores.",
    },
    tags: ["Java", "Android SDK", "TTS API", "Twitter API"],
  },
  {
    client: "Splatt",
    via: "via TeraCode",
    period: "2011",
    headline: {
      en: "Animated social messaging app",
      es: "App de mensajes animados social",
    },
    description: {
      en: "Android social app for sending animated messages between friends — Facebook & Twitter integration, push notifications, local storage, and in-app purchases.",
      es: "App Android social para enviar mensajes animados entre amigos — integración con Facebook y Twitter, notificaciones push, almacenamiento local y compras in-app.",
    },
    tags: ["Java", "Android SDK", "Facebook SDK", "Twitter API", "IAP"],
  },
  {
    client: "Goby",
    via: "via TeraCode",
    period: "2010",
    headline: {
      en: "Android search for nearby activities",
      es: "Búsqueda Android de actividades cercanas",
    },
    description: {
      en: "Android frontend for Goby (goby.com), a location-based search for things to do nearby.",
      es: "Frontend Android para Goby (goby.com), búsqueda basada en ubicación para encontrar cosas que hacer cerca.",
    },
    tags: ["Java", "Android SDK", "Location Services", "REST"],
  },
  {
    client: "Mewbox",
    via: "via TeraCode",
    period: "2009 — 2010",
    headline: {
      en: "DRM-free music store for Android",
      es: "Tienda de música DRM-free para Android",
    },
    description: {
      en: "Android app with PHP backend for a DRM-free music store. Search, preview, and buy songs or albums. Early Android commerce.",
      es: "App Android con backend PHP para una tienda de música sin DRM. Búsqueda, preescucha y compra de canciones o álbumes. Comercio Android temprano.",
    },
    tags: ["Java", "Android SDK", "PHP", "MySQL", "Audio"],
  },
  {
    client: "BuzzD",
    via: "via TeraCode",
    period: "2009",
    headline: {
      en: "One of the first 100 Android apps",
      es: "Una de las primeras 100 apps de Android",
    },
    description: {
      en: "Multi-frontend social event finder (Web, mobile web, SMS, Android). Launched one of the very first 100 applications on the Google Play Store.",
      es: "Buscador social de eventos multi-frontend (Web, web móvil, SMS, Android). Lanzó una de las primeras 100 aplicaciones en la Google Play Store.",
    },
    badge: "First 100 Android apps",
    tags: ["PHP", "Symfony", "Android SDK 0.9", "MySQL", "SMS"],
  },
  {
    client: "Dakar Rally",
    via: "via TeraCode",
    period: "2010",
    headline: {
      en: "Official race tracking app — Argentina",
      es: "App oficial de seguimiento de carrera — Argentina",
    },
    description: {
      en: "Android app for the Dakar Rally Argentina. Live stats and race tracking.",
      es: "App Android para el Rally Dakar Argentina. Estadísticas en vivo y seguimiento de carrera.",
    },
    tags: ["Java", "Android SDK", "REST"],
  },
  {
    client: "Jumptap",
    via: "via TeraCode",
    period: "2008 — 2009",
    headline: {
      en: "Mobile ad network admin platform",
      es: "Plataforma de administración de red de publicidad móvil",
    },
    description: {
      en: "Admin tool for Jumptap, a mobile ad network. Bid management for mobile campaigns, reporting, and operational tooling.",
      es: "Herramienta administrativa para Jumptap, una red de publicidad móvil. Gestión de pujas para campañas, reportes y tooling operativo.",
    },
    tags: ["Java", "Struts", "Ibatis", "Hibernate", "JSP", "Spring"],
  },
];

const INITIAL_SHOW = 5;

function LinkIcon() {
  return (
    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
    </svg>
  );
}

export default function ProfessionalProjects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [showAll, setShowAll] = useState(false);
  const { lang, t } = useLanguage();

  const hiddenCount = secondary.length - INITIAL_SHOW;
  const visibleSecondary = showAll ? secondary : secondary.slice(0, INITIAL_SHOW);

  return (
    <section id="work" className="py-24 px-6 bg-[var(--surface)]" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="text-sm font-mono text-[#6c63ff] mb-3 block">{t.work.label}</span>
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-heading)]">{t.work.title}</h2>
          <p className="text-[var(--muted)] mt-3 max-w-xl mx-auto">
            {t.work.subtitle}
          </p>
        </motion.div>

        {/* Featured */}
        <div className="grid md:grid-cols-3 gap-5 mb-5">
          {featured.map((project, i) => (
            <motion.div
              key={project.client}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: i * 0.1 }}
              className="relative p-6 rounded-xl border border-[#6c63ff]/30 bg-[var(--bg)] hover:border-[#6c63ff] transition-all duration-300 flex flex-col gap-4 group"
            >
              <div className="flex items-start justify-between gap-2 flex-wrap">
                <div>
                  <p className="text-[var(--text-heading)] font-bold text-base leading-tight">{project.client}</p>
                  {project.via && <p className="text-xs text-[var(--muted)] mt-0.5">{project.via}</p>}
                </div>
                <span className={`text-xs px-2 py-0.5 rounded-full border font-medium whitespace-nowrap ${project.badgeColor}`}>
                  {project.badge}
                </span>
              </div>
              <div>
                <h3 className="text-[var(--text)] font-semibold text-sm mb-2 group-hover:text-[var(--text-heading)] transition-colors">
                  {project.headline[lang]}
                </h3>
                <p className="text-xs text-[var(--muted)] leading-relaxed">{project.description[lang]}</p>
              </div>
              <div className="flex flex-wrap gap-1.5 mt-auto">
                {project.tags.map((tag) => (
                  <span key={tag} className="text-xs px-2 py-0.5 rounded-md bg-[var(--surface)] border border-[var(--border)] text-[var(--muted)]">{tag}</span>
                ))}
              </div>
              <div className="flex items-center justify-between pt-2 border-t border-[var(--border)]">
                <span className="text-xs font-mono text-[var(--muted)]">{project.period}</span>
                {project.link && (
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-xs text-[#6c63ff] hover:text-[var(--text-heading)] transition-colors flex items-center gap-1">
                    {t.work.playStore} <LinkIcon />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Secondary */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {visibleSecondary.map((project, i) => (
            <motion.div
              key={project.client}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: 0.3 + i * 0.05 }}
              className="p-5 rounded-xl border border-[var(--border)] bg-[var(--bg)] hover:border-[#6c63ff]/30 transition-all duration-300 flex flex-col gap-3 group"
            >
              <div>
                <div className="flex items-baseline gap-2 flex-wrap">
                  <p className="text-[var(--text)] font-semibold text-sm">{project.client}</p>
                  {project.via && <span className="text-xs text-[var(--muted)]">{project.via}</span>}
                </div>
                <div className="flex items-center gap-2 mt-0.5 flex-wrap">
                  <p className="text-xs text-[#6c63ff]">{project.headline[lang]}</p>
                  {project.badge && (
                    <span className="text-xs px-1.5 py-0.5 rounded-full border border-[#6c63ff]/30 bg-[#6c63ff]/10 text-[#6c63ff] whitespace-nowrap">
                      {project.badge}
                    </span>
                  )}
                </div>
              </div>
              <p className="text-xs text-[var(--muted)] leading-relaxed">{project.description[lang]}</p>
              <div className="flex flex-wrap gap-1.5 mt-auto">
                {project.tags.map((tag) => (
                  <span key={tag} className="text-xs px-2 py-0.5 rounded-md bg-[var(--surface)] border border-[var(--border)] text-[var(--muted)]">{tag}</span>
                ))}
              </div>
              <div className="flex items-center justify-between pt-2 border-t border-[var(--border)]">
                <span className="text-xs font-mono text-[var(--muted)]">{project.period}</span>
                {project.link && (
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-xs text-[#6c63ff] hover:text-[var(--text-heading)] transition-colors flex items-center gap-1">
                    {t.work.playStore} <LinkIcon />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Toggle button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="text-center mt-8"
        >
          <button
            onClick={() => setShowAll((v) => !v)}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-[var(--border)] text-sm text-[var(--muted)] hover:border-[#6c63ff]/40 hover:text-[var(--text-heading)] transition-all duration-200"
          >
            {showAll ? (
              <>
                {t.work.showLess}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                </svg>
              </>
            ) : (
              <>
                {t.work.showMore(hiddenCount)}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </>
            )}
          </button>
        </motion.div>
      </div>
    </section>
  );
}
