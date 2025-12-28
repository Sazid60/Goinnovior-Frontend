import { getBanner } from "@/services/banner/banner";
import BannerPageClient from "../../../../components/modules/Admin/BannerPageClient";

const ManageBannerPage = async () => {
  const banner = await getBanner();

  if (!banner) {
    return (
      <div className="p-6 container mx-auto">
        <div className="flex items-center justify-center min-h-[60vh]">
          <div className="text-center">
            <p className="text-gray-500 text-lg">No banner found.</p>
          </div>
        </div>
      </div>
    );
  }

  return <BannerPageClient banner={banner} />;
};

export default ManageBannerPage;
