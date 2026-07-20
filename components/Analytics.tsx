"use client";

import Script from "next/script";
import { useEffect } from "react";
import { track } from "@/lib/umami";

const WEBSITE_ID = process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID;
const SCRIPT_SRC =
  process.env.NEXT_PUBLIC_UMAMI_SRC ?? "https://cloud.umami.is/script.js";

const SCROLL_MILESTONES = [25, 50, 75, 100];
const SECTION_IDS = [
  "about",
  "skills",
  "ai",
  "work",
  "projects",
  "experience",
  "roles",
  "life",
  "cv",
  "contact",
];

export default function Analytics() {
  useEffect(() => {
    if (!WEBSITE_ID) return;

    // Scroll depth: fire once per milestone per page load
    const reached = new Set<number>();
    const onScroll = () => {
      const scrollable =
        document.documentElement.scrollHeight - window.innerHeight;
      if (scrollable <= 0) return;
      const percent = (window.scrollY / scrollable) * 100;
      for (const milestone of SCROLL_MILESTONES) {
        if (percent >= milestone && !reached.has(milestone)) {
          reached.add(milestone);
          track("scroll-depth", { percent: milestone });
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    // Section views: fire once per section when 25% visible
    const seen = new Set<string>();
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const id = entry.target.id;
          if (entry.isIntersecting && !seen.has(id)) {
            seen.add(id);
            track("section-view", { section: id });
          }
        }
      },
      { threshold: 0.25 }
    );
    for (const id of SECTION_IDS) {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    }

    return () => {
      window.removeEventListener("scroll", onScroll);
      observer.disconnect();
    };
  }, []);

  if (!WEBSITE_ID) return null;

  return (
    <Script
      src={SCRIPT_SRC}
      data-website-id={WEBSITE_ID}
      strategy="afterInteractive"
    />
  );
}
