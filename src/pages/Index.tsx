import { useState } from "react";
import Navbar from "@/components/portfolio/Navbar";
import HeroSection from "@/components/portfolio/HeroSection";
import AboutSection from "@/components/portfolio/AboutSection";
import SkillsSection from "@/components/portfolio/SkillsSection";
import ExperienceSection from "@/components/portfolio/ExperienceSection";
import EducationSection from "@/components/portfolio/EducationSection";
import ProjectsSection from "@/components/portfolio/ProjectsSection";
import ServicesSection from "@/components/portfolio/ServicesSection";
import PhilosophySection from "@/components/portfolio/PhilosophySection";
import ContactSection from "@/components/portfolio/ContactSection";
import Footer from "@/components/portfolio/Footer";
import CommandMenu from "@/components/portfolio/CommandMenu";

const Index = () => {
  const [cmdOpen, setCmdOpen] = useState(false);

  return (
    <>
      <Navbar onCommandOpen={() => setCmdOpen(true)} />
      <CommandMenu open={cmdOpen} onOpenChange={setCmdOpen} />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <SkillsSection />
        <ExperienceSection />
        <EducationSection />
        <ProjectsSection />
        <PhilosophySection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
};

export default Index;
