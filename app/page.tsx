import dynamic from "next/dynamic";
import Loader from "@/components/ui/Loader";
import Navbar from "@/components/ui/Navbar";
import HeroText from "@/components/ui/HeroText";
import AboutSection from "@/components/ui/AboutSection";
import EducationSection from "@/components/ui/EducationSection";
import SkillsSection from "@/components/ui/SkillsSection";
import ProjectsSection from "@/components/ui/ProjectsSection";
import LeadershipSection from "@/components/ui/LeadershipSection";
import LanguagesSection from "@/components/ui/LanguagesSection";
import ContactSection from "@/components/ui/ContactSection";
import Footer from "@/components/ui/Footer";
import LenisProvider from "@/components/ui/LenisProvider";
import { meta } from "@/data/content";

// Lazy-load the hero 3D canvas (no SSR)
const HeroCanvas = dynamic(() => import("@/components/three/HeroCanvas"), {
  ssr: false,
  loading: () => null,
});

export default function Home() {
  return (
    <LenisProvider>
      <Loader />
      <Navbar />

      {/* Hero — full-viewport 3D canvas with text layered on top */}
      <section
        id="hero"
        className="relative w-full h-screen overflow-hidden bg-navy-deep"
        aria-label="Hero section"
      >
        <HeroCanvas />
        <HeroText name={meta.name} tagline={meta.tagline} />
      </section>

      <main id="main-content">
        <AboutSection />
        <EducationSection />
        <SkillsSection />
        <ProjectsSection />
        <LeadershipSection />
        <LanguagesSection />
        <ContactSection />
      </main>

      <Footer />
    </LenisProvider>
  );
}
