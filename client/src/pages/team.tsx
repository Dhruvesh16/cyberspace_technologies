import Navigation from "@/components/navigation";
import TeamSection from "@/components/team-section";
import Footer from "@/components/footer";

export default function Team() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      <TeamSection />
      <Footer />
    </div>
  );
}
