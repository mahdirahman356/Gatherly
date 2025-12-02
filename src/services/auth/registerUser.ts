/* eslint-disable @typescript-eslint/no-explicit-any */
"use server"
import { serverFetch } from "@/lib/server-fetch";
import { loginUser } from "./loginUser";
import { registerValidationZodSchema } from "@/zod/auth.validation";
import { zodValidator } from "@/lib/zodValidator";

export const registerUser = async (_currentState: any, formData: any): Promise<any> => {

    try {
        const payload = {
            fullName: formData.get('fullName'),
            email: formData.get('email'),
            location: formData.get('location'),
            password: formData.get('password'),
        }


        if (zodValidator(payload, registerValidationZodSchema).success === false) {
            return zodValidator(payload, registerValidationZodSchema);
        }

        const validatedPayload = zodValidator(payload, registerValidationZodSchema).data;

        const res = await serverFetch.post(`/user`, {
            body: JSON.stringify(validatedPayload),
            headers: {
                "Content-Type": "application/json",
            }
        })

        const result = await res.json()
        if (result.success) {
            await loginUser(_currentState, formData)
        }

        return res;

    } catch (error: any) {
        console.log(error);
        if (error?.digest?.startsWith('NEXT_REDIRECT')) {
            throw error
        }
        return {
            success: false, message:
                `${process.env.NODE_ENV === 'development'
                    ? error.message
                    : "Registration Failed. Please try again."}`
        };
    }


}