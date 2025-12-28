/* eslint-disable @typescript-eslint/no-explicit-any */
"use server"




import { serverFetch } from "@/lib/server-fetch";
import { BannerType } from "@/types/banner.interface";


export const getBanner = async (): Promise<BannerType | null> => {
    try {
        const response = await serverFetch.get("/cms/banner", {
            cache: "no-store",
            next: { tags: ["banner-info"] }
        });
        const result = await response.json();
        if (result.success && result.data) {
            return result.data as BannerType;
        }
        return null;
    } catch (error: any) {
        console.log(error);
        return null;
    }
}