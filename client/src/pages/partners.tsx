import Navigation from "@/components/navigation";
import PartnersSection from "@/components/partners-section";
import Footer from "@/components/footer";

export default function Partners() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      <PartnersSection />
      <Footer />
    </div>
  );
}
