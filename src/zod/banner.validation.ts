// @/zod/banner.validation.ts
import { z } from "zod";

const MAX_VIDEO_SIZE = 4.5 * 1024 * 1024; 

export const bannerUpdateSchema = z
  .object({
    id: z.string().min(1, { message: "Banner ID is required" }),
    title: z
      .string()
      .trim()
      .min(1, { message: "Title is required" })
      .optional(),
    description: z
      .string()
      .trim()
      .min(1, { message: "Description is required" })
      .optional(),
    email: z
      .string()
      .trim()
      .email({ message: "Valid email is required" })
      .optional(),
    phone: z
      .string()
      .trim()
      .min(1, { message: "Phone/Location is required" })
      .optional(),
    video: z.any().optional(),
  })
  .refine(
    (data) => {
      if (!data.video) return true;
      return data.video instanceof File;
    },
    {
      message: "Video must be a valid file",
      path: ["video"],
    }
  )
  .refine(
    (data) => {
      if (!data.video || !(data.video instanceof File)) return true;
      return data.video.size <= MAX_VIDEO_SIZE;
    },
    {
      message: "Video file size must be less than 4.5 MB",
      path: ["video"],
    }
  );
