/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import { serverFetch } from "@/lib/server-fetch";
import { loginUser } from "./loginUser";
import { revalidateTag } from "next/cache";
import { zodValidator } from "@/lib/zodValidator";
import { registerValidationZodSchema } from "@/zod/auth.validation";

export const registerUser = async (_currentState: any, formData: FormData): Promise<any> => {

    const validationPayload = {
        email: formData.get('email'),
        password: formData.get('password'),
        confirmPassword: formData.get('confirmPassword'),
        profilePhoto: formData.get('profilePhoto'),
        name: formData.get('name'),
        contactNumber: formData.get('contactNumber'),
    };

    const validatedPayload = zodValidator(validationPayload, registerValidationZodSchema);

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
    const clientData = {
        password: validatedPayload.data.password,
        client: {
            name: validatedPayload.data.name,
            email: validatedPayload.data.email,
            contactNumber: validatedPayload.data.contactNumber,
        }
    }
    newFormData.append("data", JSON.stringify(clientData));
    newFormData.append("file", formData.get("profilePhoto") as Blob);


    try {
        const res = await serverFetch.post("/user/register", {
            body: newFormData,
        });

        const result = await res.json();

        if (result.success) {
            await loginUser(_currentState, formData);
            revalidateTag("landing-page-stats", { expire: 0 });
        }

        return result;
    } catch (error: any) {
        console.error(error);
        if (error?.digest?.startsWith('NEXT_REDIRECT')) {
            throw error;
        }
        return { success: false, message: error.message };
    }
};
