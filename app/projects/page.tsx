import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";

export const metadata: Metadata = {
  title: "Pet Projects — Fernando Pérez",
  description:
    "Catalog of personal projects and experiments: Android apps, web tools, and side builds by Fernando Pérez.",
};

export default function ProjectsPage() {
  return (
    <main>
      <Navbar />
      <div className="pt-16">
        <Projects />
      </div>
    </main>
  );
}
