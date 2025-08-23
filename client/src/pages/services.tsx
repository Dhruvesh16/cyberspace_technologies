import Navigation from "@/components/navigation";
import DetailedServicesSection from "@/components/detailed-services-section";
import Footer from "@/components/footer";

export default function Services() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <DetailedServicesSection />
      <Footer />
    </div>
  );
}
