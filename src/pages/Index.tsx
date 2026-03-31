import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import ExperienceSection from "@/components/ExperienceSection";
import ContactSection from "@/components/ContactSection";

const Index = () => (
  <div className="min-h-screen overflow-hidden">
    <Navbar />
    <HeroSection />
    <AboutSection />
    <SkillsSection />
    <ProjectsSection />
    <ExperienceSection />
    <ContactSection />
    <footer className="py-8 text-center text-sm text-muted-foreground border-t border-border">
      <p>© 2026 Shivanand Nishad. Built with passion.</p>
    </footer>
  </div>
);

export default Index;
