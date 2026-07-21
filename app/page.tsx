import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import ProfessionalProjects from "@/components/ProfessionalProjects";
import ProjectsTeaser from "@/components/ProjectsTeaser";
import Experience from "@/components/Experience";
import Roles from "@/components/Roles";
import Hobbies from "@/components/Hobbies";
import AISection from "@/components/AISection";
import CVDownload from "@/components/CVDownload";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <AISection />
      <ProfessionalProjects />
      <ProjectsTeaser />
      <Experience />
      <Roles />
      <Hobbies />
      <CVDownload />
      <Contact />
    </main>
  );
}
