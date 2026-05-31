import SiteHeader         from "@/components/SiteHeader";
import HeroBanner         from "@/components/HeroBanner";
import ElectionCountdown  from "@/components/ElectionCountdown";
import ImportantDatesSection from "@/components/ImportantDatesSection";
import WardByElections    from "@/components/WardByElections";
import VoterInformation   from "@/components/VoterInformation";
import CommunityDev       from "@/components/CommunityDev";
import SiteFooter         from "@/components/SiteFooter";

export default function Home() {
  return (
    <main>
      <SiteHeader />
      <HeroBanner />
      <ElectionCountdown />
      <ImportantDatesSection />
      <WardByElections />
      <VoterInformation />
      <CommunityDev />
      <SiteFooter />
    </main>
  );
}
