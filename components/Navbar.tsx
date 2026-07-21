"use client";

import { motion, useScroll } from "framer-motion";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { useLanguage } from "@/contexts/LanguageContext";
import type { Lang } from "@/lib/i18n";

function SunIcon() {
  return (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="5" strokeWidth={2} />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
        d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
        d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
    </svg>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const { lang, setLang, t } = useLanguage();

  useEffect(() => { setMounted(true); }, []);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: t.nav.about, href: "/#about" },
    { label: t.nav.ai, href: "/#ai" },
    { label: t.nav.work, href: "/#work" },
    { label: t.nav.projects, href: "/projects" },
    { label: t.nav.experience, href: "/#experience" },
    { label: t.nav.roles, href: "/#roles" },
    { label: t.nav.life, href: "/#life" },
    { label: t.nav.cv, href: "/#cv" },
    { label: t.nav.contact, href: "/#contact" },
  ];

  const isDark = theme === "dark";

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "backdrop-blur-md border-b border-[var(--border)]" : "bg-transparent"
      }`}
      style={scrolled ? { backgroundColor: "var(--nav-bg)" } : undefined}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a
          href="/"
          data-umami-event="nav-logo-click"
          className="text-[var(--text-heading)] font-bold text-lg tracking-tight hover:text-[var(--accent)] transition-colors"
        >
          fp<span className="text-[var(--accent)]">.</span>
        </a>

        <ul className="hidden md:flex items-center gap-6">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                data-umami-event="nav-click"
                data-umami-event-section={link.href.replace(/^\/#?/, "")}
                className="text-sm text-[var(--muted)] hover:text-[var(--text-heading)] transition-colors duration-200"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          {/* Language toggle */}
          <button
            onClick={() => setLang(lang === "en" ? "es" : "en")}
            data-umami-event="language-toggle"
            data-umami-event-to={lang === "en" ? "es" : "en"}
            className="hidden md:flex items-center gap-1 px-2.5 py-1.5 rounded-md border border-[var(--border)] text-xs font-mono text-[var(--muted)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-all duration-200"
            aria-label="Toggle language"
          >
            {lang === "en" ? "ES" : "EN"}
          </button>

          {/* Theme toggle */}
          {mounted && (
            <button
              onClick={() => setTheme(isDark ? "light" : "dark")}
              data-umami-event="theme-toggle"
              data-umami-event-to={isDark ? "light" : "dark"}
              className="hidden md:flex items-center justify-center w-8 h-8 rounded-md border border-[var(--border)] text-[var(--muted)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-all duration-200"
              aria-label="Toggle theme"
            >
              {isDark ? <SunIcon /> : <MoonIcon />}
            </button>
          )}

          {/* GitHub */}
          <a
            href="https://github.com/feragusper"
            target="_blank"
            rel="noopener noreferrer"
            data-umami-event="social-click"
            data-umami-event-network="github"
            data-umami-event-location="navbar"
            className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-[var(--border)] text-sm text-[var(--text)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-all duration-200"
          >
            GitHub
          </a>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-[var(--muted)] hover:text-[var(--text-heading)]"
            onClick={() => setMenuOpen(!menuOpen)}
            data-umami-event="mobile-menu-toggle"
            data-umami-event-action={menuOpen ? "close" : "open"}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden border-b border-[var(--border)] px-6 pb-4"
          style={{ backgroundColor: "var(--surface)" }}
        >
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              data-umami-event="nav-click"
              data-umami-event-section={link.href.replace(/^\/#?/, "")}
              data-umami-event-menu="mobile"
              className="block py-2 text-sm text-[var(--muted)] hover:text-[var(--text-heading)] transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <div className="flex items-center gap-2 pt-3 border-t border-[var(--border)] mt-2">
            <button
              onClick={() => setLang(lang === "en" ? "es" : "en")}
              data-umami-event="language-toggle"
              data-umami-event-to={lang === "en" ? "es" : "en"}
              className="flex items-center gap-1 px-2.5 py-1.5 rounded-md border border-[var(--border)] text-xs font-mono text-[var(--muted)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-all"
            >
              {lang === "en" ? "ES" : "EN"}
            </button>
            {mounted && (
              <button
                onClick={() => setTheme(isDark ? "light" : "dark")}
                data-umami-event="theme-toggle"
                data-umami-event-to={isDark ? "light" : "dark"}
                className="flex items-center justify-center w-8 h-8 rounded-md border border-[var(--border)] text-[var(--muted)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-all"
              >
                {isDark ? <SunIcon /> : <MoonIcon />}
              </button>
            )}
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}
