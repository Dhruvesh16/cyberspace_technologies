import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import AnimatedCompaniesSection from "@/components/animated-companies-section";
import AboutSection from "@/components/about-section";
import HowItWorksSection from "@/components/how-it-works-section";
import ServicesSection from "@/components/services-section";
import StatisticsSection from "@/components/statistics-section";
import TeamSection from "@/components/team-section";
import PartnersClientsSection from "@/components/partners-clients-section";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 dark-section">
      <Navigation />
      <HeroSection />
      <AnimatedCompaniesSection />
      <HowItWorksSection />
      <AboutSection />
      <ServicesSection />
      <StatisticsSection />
      <TeamSection />
      <PartnersClientsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
