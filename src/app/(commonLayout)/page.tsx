import FacilitiesSection from "@/components/modules/Home/Facilities";
import FeaturedProducts from "@/components/modules/Home/FeaturedProducts";
import { HeroSection } from "@/components/modules/Home/Hero";
import MarqueeBar from "@/components/modules/Home/Marquee";

export default async function Home() {
  

  return (
    <>
      <main className="min-h-screen">
        <HeroSection/>
        <MarqueeBar/>
        <FacilitiesSection/>
        <FeaturedProducts/>
      </main>
    </>
  );
}
