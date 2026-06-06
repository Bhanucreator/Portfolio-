import HeroSection from "@/components/HeroSection";
import ExperienceSection from "@/components/ExperienceSection";
import AboutSection from "@/components/AboutSection";
import ProjectShowcase from "@/components/ProjectShowcase";
import SkillsSection from "@/components/SkillsSection";
import PublicationsSection from "@/components/PublicationsSection";
import EducationSection from "@/components/EducationSection";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <div className="w-full flex flex-col">
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <ProjectShowcase />
      <SkillsSection />
      <PublicationsSection />
      <EducationSection />
      <ContactSection />
    </div>
  );
}
