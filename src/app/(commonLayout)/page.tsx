
import FacilitiesSection from "@/components/modules/Home/Facilities";
import FeaturedProducts from "@/components/modules/Home/FeaturedProducts";
import { HeroSection } from "@/components/modules/Home/Hero";
import MarqueeBar from "@/components/modules/Home/Marquee";
import { getBanner } from "@/services/banner/banner";
import { getAllProducts } from "@/services/product/product";
import SpinnerLoader from "@/components/shared/SpinnerLoader";
import { Suspense } from "react";


export default async function Home() {
  const bannerData = await getBanner();
  const products = await getAllProducts();

  return (
    <>
      <main className="min-h-screen">
        <Suspense fallback={<SpinnerLoader />}>
          <HeroSection banner={bannerData} />
          <MarqueeBar />
          <FacilitiesSection />
          <FeaturedProducts products={products} />
        </Suspense>

      </main>
    </>
  );
}