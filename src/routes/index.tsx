import { createFileRoute } from "@tanstack/react-router";
import { AmbientBackground } from "@/components/portfolio/Background";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Stats } from "@/components/portfolio/Stats";
import { Skills } from "@/components/portfolio/Skills";
import { Projects } from "@/components/portfolio/Projects";
import { Achievements } from "@/components/portfolio/Achievements";
import { Certifications } from "@/components/portfolio/Certifications";
import { Experience } from "@/components/portfolio/Experience";
import { Gallery } from "@/components/portfolio/Gallery";
import { TeachingImpact  } from "@/components/portfolio/TeachingImpact";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";
import { BackToTop, LoadingScreen, ScrollProgress } from "@/components/portfolio/Enhancements";

export const Route = createFileRoute("/")({
  component: PortfolioPage,
});

function PortfolioPage() {
  return (
    <div className="relative min-h-screen">
      <LoadingScreen />
      <ScrollProgress />
      <AmbientBackground />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Stats />
        <Skills />
        <Projects />
        <Achievements />
        <Certifications />
        <Experience />
        <Gallery />
        <TeachingImpact />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}
