/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import { serverFetch } from "@/lib/server-fetch";
import { BannerType } from "@/types/banner.interface";
import { zodValidator } from "@/lib/zodValidator";

import { revalidateTag } from "next/cache";
import { bannerUpdateSchema } from "@/zod/banner.validation";

export const getBanner = async (): Promise<BannerType | null> => {
  try {
    const response = await serverFetch.get("/cms/banner", {
      cache: "no-store",
      next: { tags: ["banner-info"] },
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
};

export const updateBanner = async (
  _currentState: any,
  formData: FormData
): Promise<any> => {
  const validationPayload = {
    id: formData.get("id"),
    title: formData.get("title"),
    description: formData.get("description"),
    email: formData.get("email"),
    phone: formData.get("phone"),
    video: formData.get("videoFile"),
  };

  const validatedPayload = zodValidator(validationPayload, bannerUpdateSchema);

  if (!validatedPayload.success) {
    return {
      success: false,
      message: "Validation failed",
      formData: validationPayload,
      errors: validatedPayload.errors,
    };
  }

  if (!validatedPayload.data) {
    return {
      success: false,
      message: "Validation failed",
      formData: validationPayload,
    };
  }

  const newFormData = new FormData();
  const bannerData = {
    title: validatedPayload.data.title,
    description: validatedPayload.data.description,
    email: validatedPayload.data.email,
    phone: validatedPayload.data.phone,
  };
  newFormData.append("data", JSON.stringify(bannerData));
  const videoFile = formData.get("videoFile");
  if (videoFile instanceof File && videoFile.size > 0) {
    newFormData.append("video", videoFile);
  }
  try {
    const res = await serverFetch.patch(`/cms/banner/${formData.get("id")}`, {
      body: newFormData,
    });
    const result = await res.json();
    if (result.success) {
      revalidateTag("banner-info", { expire: 0 });
    }
    return result;
  } catch (error: any) {
    console.error("Update Banner Error:", error);
    if (error?.digest?.startsWith("NEXT_REDIRECT")) throw error;
    return { success: false, message: error.message || "Server Error" };
  }
};
