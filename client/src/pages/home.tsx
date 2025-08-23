import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import ServicesSection from "@/components/services-section";
import AboutSection from "@/components/about-section";
import StatisticsSection from "@/components/statistics-section";
import TeamSection from "@/components/team-section";
import PartnersSection from "@/components/partners-section";
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
      <TeamSection />
      <PartnersSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
