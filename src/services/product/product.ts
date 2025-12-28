/* eslint-disable @typescript-eslint/no-explicit-any */
"use server"




import { serverFetch } from "@/lib/server-fetch";
import { zodValidator } from "@/lib/zodValidator";

import { productUpdateValidationZodSchema, productValidationZodSchema } from "@/zod/product.validation";
import { revalidateTag } from "next/cache";



export const getAllProducts = async (queryString?: string): Promise<any> => {
    try {
        const response = await serverFetch.get(`/cms/product${queryString ? `?${queryString}` : ""}`, {
            cache: "no-store",
            next: { tags: ["product-list"] }
        });
        const result = await response.json();
        return result; 
    } catch (error: any) {
        console.log(error);
        return { success: false, data: [], meta: {} };
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


export const updateProduct = async (_currentState: any, formData: FormData): Promise<any> => {
    const validationPayload = {
        id: formData.get("id"),
        name: formData.get("name"),
        description: formData.get("description"),
        minPrice: formData.get("minPrice"),
        maxPrice: formData.get("maxPrice"),
        quantity: formData.get("quantity"),
        image: formData.get("imageFile"),
    };

    const validatedPayload = zodValidator(validationPayload, productUpdateValidationZodSchema);

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
        id: validatedPayload.data.id,
        name: validatedPayload.data.name,
        description: validatedPayload.data.description,
        minPrice: validatedPayload.data.minPrice,
        maxPrice: validatedPayload.data.maxPrice,
        quantity: validatedPayload.data.quantity,
    };
    newFormData.append("data", JSON.stringify(productData));
    const imageFile = formData.get("imageFile");
    if (imageFile instanceof File && imageFile.size > 0) {
        newFormData.append("image", imageFile);
    }
    try {
        const res = await serverFetch.patch(`/cms/product/${productData.id}`, {
            body: newFormData,
        });
        const result = await res.json();
        if (result.success) {
            revalidateTag("product-list", { expire: 0 });
        }
        return result;
    } catch (error: any) {
        console.error("Update Product Error:", error);
        if (error?.digest?.startsWith('NEXT_REDIRECT')) throw error;
        return { success: false, message: error.message || "Server Error" };
    }
};


export const deleteProduct = async (id: string): Promise<any> => {
    try {
        const res = await serverFetch.delete(`/cms/product/${id}`);
        const result = await res.json();
        if (result.success) {
            revalidateTag("product-list", { expire: 0 });
        }
        return result;
    } catch (error: any) {
        return { success: false, message: error.message || "Server Error" };
    }
};
