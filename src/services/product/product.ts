/* eslint-disable @typescript-eslint/no-explicit-any */
"use server"




import { serverFetch } from "@/lib/server-fetch";
import { zodValidator } from "@/lib/zodValidator";
import { ProductType } from "@/types/product.interface";
import { productValidationZodSchema } from "@/zod/product.validation";
import { revalidateTag } from "next/cache";



export const getAllProducts = async (): Promise<ProductType[]> => {
    try {
        const response = await serverFetch.get("/cms/product", {
            cache: "no-store",
            next: { tags: ["product-list"] }
        });
        const result = await response.json();
        if (result.success && result.data) {
            return result.data as ProductType[];
        }
        return [];
    } catch (error: any) {
        console.log(error);
        return [];
    }
}


export const createProduct = async (_currentState: any, formData: FormData): Promise<any> => {

    const validationPayload = {
        name: formData.get('name'),
        description: formData.get('description'),
        minPrice: formData.get('minPrice'),
        maxPrice: formData.get('maxPrice'),
        quantity: formData.get('quantity'),
        image: formData.get('imageFile'), 
    };

    const validatedPayload = zodValidator(validationPayload, productValidationZodSchema);

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
    const productData = {
        name: validatedPayload.data.name,
        description: validatedPayload.data.description,
        minPrice: validatedPayload.data.minPrice,
        maxPrice: validatedPayload.data.maxPrice,
        quantity: validatedPayload.data.quantity,
    };

    newFormData.append("data", JSON.stringify(productData));

    const imageFile = formData.get("imageFile");
    if (imageFile instanceof File) {
        newFormData.append("image", imageFile); 
    }

    try {
        const res = await serverFetch.post("/cms/product", {
            body: newFormData,
        });

        const result = await res.json();
        if (result.success) {
            revalidateTag("product-list", { expire: 0 });
        }
        return result;
    } catch (error: any) {
        console.error("Create Product Error:", error);
        if (error?.digest?.startsWith('NEXT_REDIRECT')) throw error;
        return { success: false, message: error.message || "Server Error" };
    }
};