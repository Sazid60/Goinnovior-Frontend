
import z from "zod";


export const registerValidationZodSchema = z
    .object({
        name: z.string().min(1, { message: "Name is required" }),
        contactNumber: z.string().min(11, { message: "11 digit Contact Number is required" }),
        email: z
            .string()
            .email({ message: "Valid email is required" }),
        password: z
            .string()
            .min(6, { message: "Password must be at least 6 characters" })
            .max(100, { message: "Password must be at most 100 characters" }),

        profilePhoto: z
            .any()
            .refine(
                (file) => file instanceof File && file.size > 0,
                { message: "Profile photo is required" }
            )
            .optional(),
    })


export const loginValidationZodSchema = z.object({
    email: z
        .string()
        .email({ message: "Valid email is required" }),

    password: z
        .string()
        .min(6, { message: "Password must be at least 6 characters" })
        .max(100, { message: "Password must be at most 100 characters" }),
});
