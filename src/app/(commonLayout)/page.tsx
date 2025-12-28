import FacilitiesSection from "@/components/modules/Home/Facilities";
import { HeroSection } from "@/components/modules/Home/Hero";
import MarqueeBar from "@/components/modules/Home/Marquee";

export default async function Home() {

  return (
    <>
      <main className="min-h-screen">
        <HeroSection/>
        <MarqueeBar/>
        <FacilitiesSection/>
      </main>
    </>
  );
}
