import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import ServicesSection from "@/components/services-section";
import AboutSection from "@/components/about-section";
import StatisticsSection from "@/components/statistics-section";
import TeamPreviewSection from "@/components/team-preview-section";
import PartnersScrollingSection from "@/components/partners-scrolling-section";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <StatisticsSection />
      <TeamPreviewSection />
      <PartnersScrollingSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
