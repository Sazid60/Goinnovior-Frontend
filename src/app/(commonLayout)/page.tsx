import FacilitiesSection from "@/components/modules/Home/Facilities";
import MarqueeBar from "@/components/modules/Home/Marquee";

export default async function Home() {

  return (
    <>
      <main className="min-h-screen">
        <MarqueeBar/>
        <FacilitiesSection/>
      </main>
    </>
  );
}
