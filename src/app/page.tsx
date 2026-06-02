import SiteHeader         from "@/components/SiteHeader";
import HeroBanner         from "@/components/HeroBanner";
import ImportantDatesSection from "@/components/ImportantDatesSection";
import WardByElections    from "@/components/WardByElections";
import VoterInformation   from "@/components/VoterInformation";
import SiteFooter         from "@/components/SiteFooter";

export default function Home() {
  return (
    <main>
      <SiteHeader />
      <HeroBanner />
      <ImportantDatesSection />
      <WardByElections />
      <VoterInformation />
      <SiteFooter />
    </main>
  );
}
