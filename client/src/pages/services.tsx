import Navigation from "@/components/navigation";
import DetailedServicesSection from "@/components/detailed-services-section";
import Footer from "@/components/footer";

export default function Services() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      <DetailedServicesSection />
      <Footer />
    </div>
  );
}
