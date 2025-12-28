import { z } from "zod";

export const productValidationZodSchema = z.object({
    name: z.string().trim().min(1, { message: "Name is required" }),

    description: z.string().trim().min(1, { message: "Description is required" }),


    minPrice: z.coerce
        .number({ message: "Min price must be a number" })
        .positive({ message: "Min price must be greater than 0" })
        .min(1, { message: "Min price is required" }),


    maxPrice: z.coerce
        .number({ message: "Max price must be a number" })
        .positive({ message: "Max price must be greater than 0" })
        .min(1, { message: "Max price is required" }),


    quantity: z.coerce
        .number({ message: "Quantity must be a number" })
        .positive({ message: "Quantity must be greater than 0" })
        .min(1, { message: "Quantity is required" }),

    image: z
        .any()
        .refine((file) => file instanceof File, {
            message: "Product image is required",
        })
        .refine((file) => file?.size > 0, {
            message: "Image file cannot be empty",
        }),
})
    .refine((data) => data.maxPrice >= data.minPrice, {
        message: "Max price cannot be less than Min price",
        path: ["maxPrice"],
    });