/* eslint-disable @typescript-eslint/no-explicit-any */
import { serverFetch } from "@/lib/server-fetch";
import { zodValidator } from "@/lib/zodValidator";
import { updateUserSchema } from "@/zod/user.validation";


export async function getMyProfile() {
    try {
        const response = await serverFetch.get(`/user/my-profile`);
        const result = await response.json();
        return result;
    } catch (error: any) {
        console.log(error);
        return {
            success: false,
            message: `${process.env.NODE_ENV === 'development' ? error.message : 'Something went wrong'}`
        };
    }
}

export const updateProfile = async (_currentState: any, formData: any): Promise<any> => {

    const interestsValue = formData
        .get("interests")
        ?.toString()
        .split(",")
        .map((item: string) => item.trim())
        .filter(Boolean)
    const file = formData.get("file");

    const payload = {
        fullName: formData.get('fullName'),
        bio: formData.get('bio'),
        interests: interestsValue,
        location: formData.get("location") as File
    }

    if (zodValidator(payload, updateUserSchema).success === false) {
        return zodValidator(payload, updateUserSchema);
    }

    const validatedPayload: any = zodValidator(payload, updateUserSchema).data;

    const newFormData = new FormData()
    newFormData.append("data", JSON.stringify(validatedPayload))
    if (file instanceof File && file.size > 0) {
        newFormData.append("file", file);
    }

     try {

        const response = await serverFetch.patch(`/user/update-profile`, {
            body: newFormData,
        })

        const result = await response.json();
        console.log(result)
        return result

    } catch (error: any) {
        console.log(error);
        if (error?.digest?.startsWith('NEXT_REDIRECT')) {
            throw error
        }
        return {
            success: false, message:
                `${process.env.NODE_ENV === 'development'
                    ? error.message
                    : "Failed updating profile. Please try again."}`
        };
    }

}