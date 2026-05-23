import React from "react";
import ReactPDF, {
  Document, Page, View, Text, StyleSheet, Font, Link,
} from "@react-pdf/renderer";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUT = path.join(__dirname, "../public/cv");

// ─── Palette ─────────────────────────────────────────────────────────────────
const C = {
  purple:    "#6c63ff",
  purpleD:   "#4e46e5",
  purpleFaint:"#f0effe",
  green:     "#2dc653",
  orange:    "#f4a261",
  dark:      "#0f0f1a",
  darkMid:   "#1a1a2e",
  mutedText: "#6e6e8a",
  bodyText:  "#2a2a3e",
  lightBg:   "#f8f8fc",
  white:     "#ffffff",
  border:    "#e2e2f0",
};

// ─── Data ─────────────────────────────────────────────────────────────────────
const ME = {
  name: "Fernando Pérez",
  title: "Software Engineer",
  email: "feragusper@gmail.com",
  linkedin: "linkedin.com/in/fernandoagustinperez",
  github: "github.com/feragusper",
  location: "Málaga, Spain",
  initials: "FP",
};

const ABOUT_SHORT =
  "Software Engineer with 20+ years in the industry — since 2002. Focused on mobile development (particularly Android), delivering products across fintech, e-commerce, aviation, streaming, IoT, and retail. Collaborative, proactive, and committed to clean code and agile practices.";

const ABOUT_FULL =
  "Software Engineer with 20+ years in the industry — since 2002. Throughout my career I focused on mobile development, particularly Android, delivering products across fintech, e-commerce, aviation, streaming, IoT, and retail. What drives me is the craft itself: software that works well, scales cleanly, and makes a genuine difference. I love collaborating proactively with teams of all sizes — startups, large tech companies, distributed squads across different countries and cultures. I believe in agile ways of working, clean code, and a real commitment to the product. Whether I'm engineering, leading, or advising — I bring the same passion to every role.";

const SKILLS = {
  core: ["Kotlin", "Android SDK", "Jetpack Compose", "Coroutines & Flow", "Hilt / Dagger", "Room", "Retrofit / OkHttp", "Ktor", "RxJava", "ExoPlayer", "React Native"],
  arch: ["Clean Architecture", "MVP", "MVVM", "MVI", "TDD", "Code Review", "REST", "GraphQL", "Agile / Scrum"],
  test: ["JUnit", "Mockk", "Mockito", "Turbine", "Espresso", "Robolectric"],
  cicd: ["Git", "GitHub Actions", "GitLab CI/CD", "CircleCI", "Bitrise", "Jenkins", "Gradle", "Firebase", "Bugsnag", "Datadog"],
  tools: ["Jira", "Confluence", "Figma", "Zeplin", "Linear", "Trello", "Swagger"],
  ai:   ["Claude", "Gemini / Google AI Studio", "GitHub Copilot", "MS Copilot", "Codex", "Lovable", "MCP Development"],
  earlier: ["Java", "PHP", "Symfony", "Laravel", "MySQL", "Node.js", "JavaScript", "Perl"],
};

type ExpEntry = {
  company: string; role: string; period: string; location: string; bullets: string[]; tags: string[];
};

const EXPERIENCE: ExpEntry[] = [
  {
    company: "REWE digital",
    role: "Senior Android Engineer",
    period: "Apr 2025 — Present",
    location: "Málaga, Spain · Hybrid",
    bullets: [
      "Building internal tools and customer-facing Android solutions for one of Germany's largest grocery retail platforms.",
      "Clean Architecture (MVI), Jetpack Compose, REWE Design System (RDS) integration.",
      "Led technical investigations and architectural documentation for hardware integrations and legacy refactors.",
      "Close collaboration with UX, Product, and Backend across multiple squads.",
    ],
    tags: ["Kotlin", "Compose", "MVI", "Hilt", "Coroutines", "Flow", "GitLab CI/CD"],
  },
  {
    company: "Latch",
    role: "Senior Android Engineer (Contract)",
    period: "Nov 2023 — Apr 2025",
    location: "Spain · Remote",
    bullets: [
      "Smart building & IoT platform — intercom integrations, access control, residential and commercial building management.",
      "Clean Architecture (MVI/VIPER), Jetpack Compose, Ktor, Coroutines, Flow.",
      "Integrated testing (JUnit, Mockk, Turbine) and monitoring (Bugsnag, Datadog). Streamlined CI/CD with GitHub Actions, CircleCI, Bitrise.",
    ],
    tags: ["Kotlin", "Compose", "Ktor", "MVI", "Coroutines", "Datadog"],
  },
  {
    company: "TheFork (TripAdvisor)",
    role: "Senior Android Engineer (Contract)",
    period: "Sep 2021 — Feb 2024",
    location: "Spain · Remote",
    bullets: [
      "2.5 years on one of Europe's largest restaurant reservation platforms.",
      "A/B testing at scale with Firebase, Apollo GraphQL, Jetpack Compose migration, MVP & Clean Architecture.",
      "CI/CD via GitHub Workflows and Jenkins. Automated testing with JUnit, Mockito, Spek.",
    ],
    tags: ["Kotlin", "Compose", "Apollo GraphQL", "RxJava", "Firebase"],
  },
  {
    company: "intive",
    role: "Senior Android Engineer (Contract)",
    period: "Nov 2019 — Sep 2021",
    location: "Argentina · Hybrid",
    bullets: [
      "Built Nubi, a digital wallet for Argentine fintech: biometric auth, transactions, real-time notifications.",
      "MVVM + Clean Architecture, RxJava, Retrofit, Biometrics, Firebase (Crashlytics, Analytics, Remote Config).",
    ],
    tags: ["Kotlin", "MVVM", "Biometrics", "RxJava", "Firebase", "Facephi"],
  },
  {
    company: "Coorva",
    role: "Senior Android Engineer (Contract)",
    period: "Sep 2018 — Sep 2021",
    location: "Digital Nomad (Europe & Americas)",
    bullets: [
      "Smithsonian Channel (CBS): Netflix-like streaming across Android TV, Amazon Fire TV, phones, and tablets (ExoPlayer, Google/Amazon IAP).",
      "Cleveland Museum of Art: AR collection explorer using Vuforia and visual recognition.",
    ],
    tags: ["Kotlin", "ExoPlayer", "Android TV", "Vuforia", "MVVM"],
  },
  {
    company: "Cardumen (Co-Founder)",
    role: "Co-Founder & Technical Lead",
    period: "Apr 2016 — Apr 2019",
    location: "Buenos Aires · Hybrid",
    bullets: [
      "Co-founded a software consultancy delivering web and Android products for multiple clients.",
      "Wore every hat: technical direction, client relationships, presales, hiring, and budgeting.",
    ],
    tags: ["Java", "PHP", "Android SDK", "Laravel", "Symfony"],
  },
  {
    company: "Mercado Libre",
    role: "Mobile Project Leader",
    period: "Oct 2017 — Sep 2018",
    location: "Buenos Aires · On-site",
    bullets: [
      "Scrum Master leading the team maintaining View Item Page, Shopping Cart, and Home — three critical modules of LatAm's largest marketplace.",
      "Agile management, roadmap ownership, developer career plans, CircleCI CI/CD.",
    ],
    tags: ["Java", "Android SDK", "Node.js", "CircleCI", "Agile Leadership"],
  },
  {
    company: "GlobalLogic",
    role: "Android Technical Leader → Practice Leader → Technical Manager",
    period: "Apr 2012 — Oct 2017",
    location: "Buenos Aires",
    bullets: [
      "Technical Leader on Gulfstream private jet Android apps (3 years, 20+ person team): cabin entertainment, ambiance, and system control.",
      "Android Practice Leader: managed PoCs and presales across LatAm for 4.5 years.",
      "Technical Manager: designed Career Plan / Skills Matrix for the entire LatAm region.",
    ],
    tags: ["Java", "Android SDK", "RxJava", "Dagger 2", "Agile", "Recruiting"],
  },
  {
    company: "TeraCode",
    role: "PHP Jr → Android Technical Leader",
    period: "Apr 2007 — Apr 2012",
    location: "Buenos Aires (+ 3 months NYC on-site)",
    bullets: [
      "Led development of SwiftKey first versions (team of 3) — later acquired by Microsoft.",
      "Defjam Rapstar social portal built on-site in NYC (Rockstar Games / 4mm).",
      "Built one of the first 100 Android apps ever published. 9 projects across PHP, Java, and Android.",
    ],
    tags: ["PHP", "Java", "Android SDK", "Symfony", "JNI"],
  },
];

const EDUCATION = {
  degree: "Computer Systems Engineering",
  school: "Universidad Argentina de la Empresa (UADE)",
  period: "2002 — 2016",
};

const LANGUAGES = [
  { lang: "Spanish", level: "Native" },
  { lang: "English", level: "Professional" },
];

// ─── Shared styles ─────────────────────────────────────────────────────────────
const shared = StyleSheet.create({
  page: { fontFamily: "Helvetica", fontSize: 9, color: C.bodyText, backgroundColor: C.white },
  sectionTitle: { fontSize: 8, fontFamily: "Helvetica-Bold", letterSpacing: 1.2, textTransform: "uppercase", color: C.purple, marginBottom: 5, marginTop: 12 },
  divider: { borderBottomWidth: 0.5, borderBottomColor: C.border, marginBottom: 6 },
});

// ─── SHORT CV (1 page, two-column, designed) ───────────────────────────────────
const shortStyles = StyleSheet.create({
  page: { ...shared.page, flexDirection: "row" },
  sidebar: { width: "33%", backgroundColor: C.dark, padding: 22, flexDirection: "column", gap: 0 },
  main: { width: "67%", backgroundColor: C.white, padding: 24, flexDirection: "column" },

  // Sidebar
  avatar: { width: 60, height: 60, borderRadius: 30, backgroundColor: C.purple, alignItems: "center", justifyContent: "center", marginBottom: 10, alignSelf: "center" },
  avatarText: { color: C.white, fontSize: 20, fontFamily: "Helvetica-Bold" },
  sidebarName: { color: C.white, fontSize: 14, fontFamily: "Helvetica-Bold", textAlign: "center", marginBottom: 2 },
  sidebarTitle: { color: C.purple, fontSize: 8.5, textAlign: "center", letterSpacing: 0.5, marginBottom: 16 },
  sidebarSectionTitle: { color: C.purple, fontSize: 7, fontFamily: "Helvetica-Bold", letterSpacing: 1.5, textTransform: "uppercase", marginBottom: 5, marginTop: 12 },
  sidebarText: { color: "#a0a0b8", fontSize: 7.5, lineHeight: 1.5, marginBottom: 2 },
  sidebarLink: { color: "#a0a0b8", fontSize: 7, lineHeight: 1.5, marginBottom: 2 },
  chip: { backgroundColor: "#1e1e3a", borderRadius: 3, paddingHorizontal: 5, paddingVertical: 2, marginBottom: 3, marginRight: 3 },
  chipText: { color: "#a0a0b8", fontSize: 6.5 },
  chipsRow: { flexDirection: "row", flexWrap: "wrap" },

  // Main
  mainName: { color: C.bodyText, fontSize: 20, fontFamily: "Helvetica-Bold", marginBottom: 2 },
  mainTitle: { color: C.purple, fontSize: 10, letterSpacing: 0.5, marginBottom: 10 },
  sectionTitle: { ...shared.sectionTitle },
  divider: { ...shared.divider },

  // Experience
  expHeader: { flexDirection: "row", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 2 },
  expCompany: { fontSize: 9, fontFamily: "Helvetica-Bold", color: C.bodyText },
  expRole: { color: C.purple, fontSize: 7.5, marginBottom: 3 },
  expMeta: { color: C.mutedText, fontSize: 7, textAlign: "right" },
  bullet: { color: C.bodyText, fontSize: 7.5, lineHeight: 1.5, marginBottom: 1.5, paddingLeft: 8 },
  expBlock: { marginBottom: 10 },
  aboutText: { fontSize: 8, color: C.bodyText, lineHeight: 1.6, marginBottom: 10 },
});

const SidebarSection = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <View>
    <Text style={shortStyles.sidebarSectionTitle}>{title}</Text>
    {children}
  </View>
);

const SkillChips = ({ skills }: { skills: string[] }) => (
  <View style={shortStyles.chipsRow}>
    {skills.map((s) => (
      <View key={s} style={shortStyles.chip}>
        <Text style={shortStyles.chipText}>{s}</Text>
      </View>
    ))}
  </View>
);

const ShortCV = () => (
  <Document title="Fernando Pérez — Short CV" author="Fernando Pérez">
    <Page size="A4" style={shortStyles.page}>
      {/* ── Sidebar ── */}
      <View style={shortStyles.sidebar}>
        <View style={shortStyles.avatar}>
          <Text style={shortStyles.avatarText}>{ME.initials}</Text>
        </View>
        <Text style={shortStyles.sidebarName}>{ME.name}</Text>
        <Text style={shortStyles.sidebarTitle}>{ME.title}</Text>

        <SidebarSection title="Contact">
          <Text style={shortStyles.sidebarText}>📍 {ME.location}</Text>
          <Text style={shortStyles.sidebarText}>✉ {ME.email}</Text>
          <Text style={shortStyles.sidebarLink}>{ME.linkedin}</Text>
          <Text style={shortStyles.sidebarLink}>{ME.github}</Text>
        </SidebarSection>

        <SidebarSection title="Core Skills">
          <SkillChips skills={["Kotlin", "Android SDK", "Jetpack Compose", "Coroutines & Flow", "Hilt / Dagger", "Room", "Retrofit", "Ktor", "RxJava"]} />
        </SidebarSection>

        <SidebarSection title="Architecture">
          <SkillChips skills={["Clean Architecture", "MVI", "MVP", "MVVM", "TDD"]} />
        </SidebarSection>

        <SidebarSection title="CI/CD & Tools">
          <SkillChips skills={["Git", "GitHub Actions", "GitLab CI", "CircleCI", "Gradle", "Firebase", "Bugsnag"]} />
        </SidebarSection>

        <SidebarSection title="Education">
          <Text style={shortStyles.sidebarText}>{EDUCATION.degree}</Text>
          <Text style={shortStyles.sidebarLink}>{EDUCATION.school}</Text>
          <Text style={shortStyles.sidebarLink}>{EDUCATION.period}</Text>
        </SidebarSection>

        <SidebarSection title="Languages">
          {LANGUAGES.map((l) => (
            <Text key={l.lang} style={shortStyles.sidebarText}>{l.lang} — {l.level}</Text>
          ))}
        </SidebarSection>
      </View>

      {/* ── Main ── */}
      <View style={shortStyles.main}>
        <Text style={shortStyles.mainName}>{ME.name}</Text>
        <Text style={shortStyles.mainTitle}>{ME.title.toUpperCase()}</Text>

        <Text style={shortStyles.sectionTitle}>About Me</Text>
        <View style={shortStyles.divider} />
        <Text style={shortStyles.aboutText}>{ABOUT_SHORT}</Text>

        <Text style={shortStyles.sectionTitle}>Recent Experience</Text>
        <View style={shortStyles.divider} />

        {EXPERIENCE.slice(0, 4).map((e) => (
          <View key={e.company} style={shortStyles.expBlock}>
            <View style={shortStyles.expHeader}>
              <View>
                <Text style={shortStyles.expCompany}>{e.company}</Text>
                <Text style={shortStyles.expRole}>{e.role}</Text>
              </View>
              <View>
                <Text style={shortStyles.expMeta}>{e.period}</Text>
                <Text style={shortStyles.expMeta}>{e.location}</Text>
              </View>
            </View>
            {e.bullets.slice(0, 2).map((b, i) => (
              <Text key={i} style={shortStyles.bullet}>• {b}</Text>
            ))}
          </View>
        ))}
      </View>
    </Page>
  </Document>
);

// ─── FULL CV (multi-page, same design) ────────────────────────────────────────
const fullStyles = StyleSheet.create({
  page: { ...shared.page, padding: 36 },
  header: { flexDirection: "row", alignItems: "center", marginBottom: 18, paddingBottom: 14, borderBottomWidth: 1.5, borderBottomColor: C.purple },
  avatar: { width: 52, height: 52, borderRadius: 26, backgroundColor: C.purple, alignItems: "center", justifyContent: "center", marginRight: 16 },
  avatarText: { color: C.white, fontSize: 18, fontFamily: "Helvetica-Bold" },
  headerInfo: { flex: 1 },
  headerName: { fontSize: 20, fontFamily: "Helvetica-Bold", color: C.bodyText, marginBottom: 2 },
  headerTitle: { fontSize: 9, color: C.purple, letterSpacing: 0.5, marginBottom: 4 },
  headerContact: { flexDirection: "row", flexWrap: "wrap", gap: 8 },
  headerContactItem: { fontSize: 7, color: C.mutedText },

  sectionTitle: { ...shared.sectionTitle },
  divider: { ...shared.divider },

  cols: { flexDirection: "row", gap: 20 },
  leftCol: { width: "62%" },
  rightCol: { width: "35%" },

  expBlock: { marginBottom: 11 },
  expHeader: { flexDirection: "row", justifyContent: "space-between", marginBottom: 2 },
  expCompany: { fontSize: 9, fontFamily: "Helvetica-Bold", color: C.bodyText },
  expRole: { color: C.purple, fontSize: 8, marginBottom: 3 },
  expMeta: { color: C.mutedText, fontSize: 7, textAlign: "right" },
  bullet: { color: C.bodyText, fontSize: 7.5, lineHeight: 1.55, marginBottom: 1.5, paddingLeft: 7 },
  aboutText: { fontSize: 8, color: C.bodyText, lineHeight: 1.65, marginBottom: 12 },

  skillGroup: { marginBottom: 8 },
  skillGroupTitle: { fontSize: 7.5, fontFamily: "Helvetica-Bold", color: C.bodyText, marginBottom: 3 },
  chip: { backgroundColor: C.purpleFaint, borderRadius: 3, paddingHorizontal: 4, paddingVertical: 1.5, marginBottom: 2.5, marginRight: 2 },
  chipText: { color: C.purple, fontSize: 6.5 },
  chipsRow: { flexDirection: "row", flexWrap: "wrap" },

  eduBlock: { marginBottom: 6 },
  eduDegree: { fontSize: 8, fontFamily: "Helvetica-Bold", color: C.bodyText },
  eduSchool: { fontSize: 7.5, color: C.purple },
  eduPeriod: { fontSize: 7, color: C.mutedText },
  langItem: { fontSize: 8, color: C.bodyText, marginBottom: 2 },
  tagChip: { backgroundColor: C.lightBg, borderRadius: 3, paddingHorizontal: 4, paddingVertical: 1.5, marginRight: 2, marginBottom: 2 },
  tagText: { color: C.mutedText, fontSize: 6.5 },
  tagsRow: { flexDirection: "row", flexWrap: "wrap", marginTop: 2 },
});

const FullCV = () => (
  <Document title="Fernando Pérez — Full CV" author="Fernando Pérez">
    <Page size="A4" style={fullStyles.page}>
      {/* Header */}
      <View style={fullStyles.header}>
        <View style={fullStyles.avatar}>
          <Text style={fullStyles.avatarText}>{ME.initials}</Text>
        </View>
        <View style={fullStyles.headerInfo}>
          <Text style={fullStyles.headerName}>{ME.name}</Text>
          <Text style={fullStyles.headerTitle}>{ME.title.toUpperCase()}</Text>
          <View style={fullStyles.headerContact}>
            <Text style={fullStyles.headerContactItem}>📍 {ME.location}</Text>
            <Text style={fullStyles.headerContactItem}>✉ {ME.email}</Text>
            <Text style={fullStyles.headerContactItem}>{ME.linkedin}</Text>
            <Text style={fullStyles.headerContactItem}>{ME.github}</Text>
          </View>
        </View>
      </View>

      {/* About */}
      <Text style={fullStyles.sectionTitle}>Profile</Text>
      <View style={fullStyles.divider} />
      <Text style={fullStyles.aboutText}>{ABOUT_FULL}</Text>

      {/* Two-col layout */}
      <View style={fullStyles.cols}>
        {/* Left: Experience */}
        <View style={fullStyles.leftCol}>
          <Text style={fullStyles.sectionTitle}>Experience</Text>
          <View style={fullStyles.divider} />

          {EXPERIENCE.slice(0, 5).map((e) => (
            <View key={e.company} style={fullStyles.expBlock}>
              <View style={fullStyles.expHeader}>
                <View>
                  <Text style={fullStyles.expCompany}>{e.company}</Text>
                  <Text style={fullStyles.expRole}>{e.role}</Text>
                </View>
                <View>
                  <Text style={fullStyles.expMeta}>{e.period}</Text>
                  <Text style={fullStyles.expMeta}>{e.location}</Text>
                </View>
              </View>
              {e.bullets.map((b, i) => (
                <Text key={i} style={fullStyles.bullet}>• {b}</Text>
              ))}
              <View style={fullStyles.tagsRow}>
                {e.tags.map((t) => (
                  <View key={t} style={fullStyles.tagChip}>
                    <Text style={fullStyles.tagText}>{t}</Text>
                  </View>
                ))}
              </View>
            </View>
          ))}
        </View>

        {/* Right: Skills, Education, Languages */}
        <View style={fullStyles.rightCol}>
          <Text style={fullStyles.sectionTitle}>Core Skills</Text>
          <View style={fullStyles.divider} />

          {[
            { label: "Android & Mobile", skills: SKILLS.core },
            { label: "Architecture", skills: SKILLS.arch },
            { label: "Testing", skills: SKILLS.test },
            { label: "CI/CD & DevOps", skills: SKILLS.cicd },
            { label: "AI & Productivity", skills: SKILLS.ai },
          ].map(({ label, skills }) => (
            <View key={label} style={fullStyles.skillGroup}>
              <Text style={fullStyles.skillGroupTitle}>{label}</Text>
              <View style={fullStyles.chipsRow}>
                {skills.map((s) => (
                  <View key={s} style={fullStyles.chip}>
                    <Text style={fullStyles.chipText}>{s}</Text>
                  </View>
                ))}
              </View>
            </View>
          ))}

          <Text style={[fullStyles.sectionTitle, { marginTop: 10 }]}>Education</Text>
          <View style={fullStyles.divider} />
          <View style={fullStyles.eduBlock}>
            <Text style={fullStyles.eduDegree}>{EDUCATION.degree}</Text>
            <Text style={fullStyles.eduSchool}>{EDUCATION.school}</Text>
            <Text style={fullStyles.eduPeriod}>{EDUCATION.period}</Text>
          </View>

          <Text style={[fullStyles.sectionTitle, { marginTop: 8 }]}>Languages</Text>
          <View style={fullStyles.divider} />
          {LANGUAGES.map((l) => (
            <Text key={l.lang} style={fullStyles.langItem}>{l.lang} — <Text style={{ color: C.mutedText }}>{l.level}</Text></Text>
          ))}

          <Text style={[fullStyles.sectionTitle, { marginTop: 8 }]}>Earlier Stack</Text>
          <View style={fullStyles.divider} />
          <View style={fullStyles.chipsRow}>
            {SKILLS.earlier.map((s) => (
              <View key={s} style={fullStyles.chip}>
                <Text style={fullStyles.chipText}>{s}</Text>
              </View>
            ))}
          </View>
        </View>
      </View>
    </Page>

    {/* Page 2: remaining experience */}
    <Page size="A4" style={fullStyles.page}>
      <View style={fullStyles.header}>
        <View style={fullStyles.avatar}>
          <Text style={fullStyles.avatarText}>{ME.initials}</Text>
        </View>
        <View style={fullStyles.headerInfo}>
          <Text style={fullStyles.headerName}>{ME.name}</Text>
          <Text style={fullStyles.headerTitle}>CONTINUED — FULL WORK HISTORY</Text>
        </View>
      </View>

      <Text style={fullStyles.sectionTitle}>Earlier Experience (2007 — 2018)</Text>
      <View style={fullStyles.divider} />

      {EXPERIENCE.slice(5).map((e) => (
        <View key={e.company} style={fullStyles.expBlock}>
          <View style={fullStyles.expHeader}>
            <View>
              <Text style={fullStyles.expCompany}>{e.company}</Text>
              <Text style={fullStyles.expRole}>{e.role}</Text>
            </View>
            <View>
              <Text style={fullStyles.expMeta}>{e.period}</Text>
              <Text style={fullStyles.expMeta}>{e.location}</Text>
            </View>
          </View>
          {e.bullets.map((b, i) => (
            <Text key={i} style={fullStyles.bullet}>• {b}</Text>
          ))}
          <View style={fullStyles.tagsRow}>
            {e.tags.map((t) => (
              <View key={t} style={fullStyles.tagChip}>
                <Text style={fullStyles.tagText}>{t}</Text>
              </View>
            ))}
          </View>
        </View>
      ))}

      <Text style={[fullStyles.sectionTitle, { marginTop: 14 }]}>Tools & Collaboration</Text>
      <View style={fullStyles.divider} />
      <View style={fullStyles.chipsRow}>
        {SKILLS.tools.map((s) => (
          <View key={s} style={fullStyles.chip}>
            <Text style={fullStyles.chipText}>{s}</Text>
          </View>
        ))}
      </View>
    </Page>
  </Document>
);

// ─── ATS CV (plain, single column) ────────────────────────────────────────────
const atsStyles = StyleSheet.create({
  page: { ...shared.page, padding: 45, color: "#1a1a1a" },
  name: { fontSize: 18, fontFamily: "Helvetica-Bold", marginBottom: 3 },
  title: { fontSize: 10, marginBottom: 4 },
  contact: { fontSize: 8.5, marginBottom: 16, lineHeight: 1.6 },
  sectionTitle: { fontSize: 9, fontFamily: "Helvetica-Bold", textTransform: "uppercase", letterSpacing: 0.8, marginTop: 14, marginBottom: 3 },
  divider: { borderBottomWidth: 0.75, borderBottomColor: "#333", marginBottom: 7 },
  body: { fontSize: 8.5, lineHeight: 1.65, marginBottom: 10 },
  expCompany: { fontSize: 9, fontFamily: "Helvetica-Bold", marginBottom: 1 },
  expRole: { fontSize: 8.5, marginBottom: 1 },
  expMeta: { fontSize: 8, color: "#555", marginBottom: 4 },
  bullet: { fontSize: 8.5, lineHeight: 1.6, marginBottom: 2, paddingLeft: 10 },
  expBlock: { marginBottom: 11 },
  skillLine: { fontSize: 8.5, lineHeight: 1.6, marginBottom: 3 },
  eduDegree: { fontSize: 9, fontFamily: "Helvetica-Bold" },
  eduSchool: { fontSize: 8.5 },
  eduPeriod: { fontSize: 8, color: "#555" },
});

const AtsSection = ({ title }: { title: string }) => (
  <View>
    <Text style={atsStyles.sectionTitle}>{title}</Text>
    <View style={atsStyles.divider} />
  </View>
);

const ATSCV = () => (
  <Document title="Fernando Pérez — ATS CV" author="Fernando Pérez">
    <Page size="A4" style={atsStyles.page}>
      <Text style={atsStyles.name}>{ME.name}</Text>
      <Text style={atsStyles.title}>{ME.title}</Text>
      <Text style={atsStyles.contact}>
        {ME.email} | {ME.location}{"\n"}{ME.linkedin} | {ME.github}
      </Text>

      <AtsSection title="Professional Summary" />
      <Text style={atsStyles.body}>{ABOUT_FULL}</Text>

      <AtsSection title="Work Experience" />
      {EXPERIENCE.map((e) => (
        <View key={e.company} style={atsStyles.expBlock}>
          <Text style={atsStyles.expCompany}>{e.company}</Text>
          <Text style={atsStyles.expRole}>{e.role}</Text>
          <Text style={atsStyles.expMeta}>{e.period} | {e.location}</Text>
          {e.bullets.map((b, i) => (
            <Text key={i} style={atsStyles.bullet}>- {b}</Text>
          ))}
          <Text style={atsStyles.expMeta}>Technologies: {e.tags.join(", ")}</Text>
        </View>
      ))}

      <AtsSection title="Technical Skills" />
      <Text style={atsStyles.skillLine}><Text style={{ fontFamily: "Helvetica-Bold" }}>Android & Mobile: </Text>{SKILLS.core.join(", ")}</Text>
      <Text style={atsStyles.skillLine}><Text style={{ fontFamily: "Helvetica-Bold" }}>Architecture & Practices: </Text>{SKILLS.arch.join(", ")}</Text>
      <Text style={atsStyles.skillLine}><Text style={{ fontFamily: "Helvetica-Bold" }}>Testing: </Text>{SKILLS.test.join(", ")}</Text>
      <Text style={atsStyles.skillLine}><Text style={{ fontFamily: "Helvetica-Bold" }}>CI/CD & Infrastructure: </Text>{SKILLS.cicd.join(", ")}</Text>
      <Text style={atsStyles.skillLine}><Text style={{ fontFamily: "Helvetica-Bold" }}>Tools & Collaboration: </Text>{SKILLS.tools.join(", ")}</Text>
      <Text style={atsStyles.skillLine}><Text style={{ fontFamily: "Helvetica-Bold" }}>AI & Productivity: </Text>{SKILLS.ai.join(", ")}</Text>
      <Text style={atsStyles.skillLine}><Text style={{ fontFamily: "Helvetica-Bold" }}>Earlier Stack: </Text>{SKILLS.earlier.join(", ")}</Text>

      <AtsSection title="Education" />
      <Text style={atsStyles.eduDegree}>{EDUCATION.degree}</Text>
      <Text style={atsStyles.eduSchool}>{EDUCATION.school}</Text>
      <Text style={atsStyles.eduPeriod}>{EDUCATION.period}</Text>

      <AtsSection title="Languages" />
      {LANGUAGES.map((l) => (
        <Text key={l.lang} style={atsStyles.skillLine}>{l.lang}: {l.level}</Text>
      ))}
    </Page>
  </Document>
);

// ─── Generate ──────────────────────────────────────────────────────────────────
async function main() {
  console.log("Generating CVs...");

  await ReactPDF.renderToFile(<ShortCV />, `${OUT}/fernando-perez-short.pdf`);
  console.log("✓ Short CV");

  await ReactPDF.renderToFile(<FullCV />, `${OUT}/fernando-perez-full.pdf`);
  console.log("✓ Full CV");

  await ReactPDF.renderToFile(<ATSCV />, `${OUT}/fernando-perez-ats.pdf`);
  console.log("✓ ATS CV");

  console.log("Done! → public/cv/");
}

main().catch((e) => { console.error(e); process.exit(1); });
