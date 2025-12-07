/* eslint-disable @typescript-eslint/no-explicit-any */
"use server"
import { serverFetch } from "@/lib/server-fetch";
import { zodValidator } from "@/lib/zodValidator";
import { createEventSchema, updateEventSchema } from "@/zod/event.validation";


export async function getHostEvents() {
    try {
        const response = await serverFetch.get(`/event/host-events`);
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

export const createEvent = async (_currentState: any, formData: any): Promise<any> => {

    const minParticipantsValue = formData.get("minParticipants");
    const maxParticipantsValue = formData.get("maxParticipants");
    const joiningFeeValue = formData.get("joiningFee");
    const dateValue = formData.get("date") as string;
    const isoDate = new Date(dateValue).toISOString();

    const payload = {
        title: formData.get('title'),
        type: formData.get('type'),
        description: formData.get('description'),
        date: isoDate,
        location: formData.get('location'),
        image: formData.get("file") as File,
        minParticipants: minParticipantsValue ? Number(minParticipantsValue) : 0,
        maxParticipants: maxParticipantsValue ? Number(maxParticipantsValue) : 0,
        joiningFee: joiningFeeValue ? Number(joiningFeeValue) : 0,
    }


    if (zodValidator(payload, createEventSchema).success === false) {
        return zodValidator(payload, createEventSchema);
    }

    const validatedPayload: any = zodValidator(payload, createEventSchema);

    console.log("validatedPayload:", validatedPayload)
    console.log("payload:", payload)

    const backendPayload = {
        title: validatedPayload.data.title,
        type: validatedPayload.data.type,
        description: validatedPayload.data.description,
        date: validatedPayload.data.date,
        location: validatedPayload.data.location,
        minParticipants: validatedPayload.data.minParticipants,
        maxParticipants: validatedPayload.data.maxParticipants,
        joiningFee: validatedPayload.data.joiningFee,

    };

    console.log("backendPayload", backendPayload)

    const newFormData = new FormData()
    newFormData.append("data", JSON.stringify(backendPayload))
    newFormData.append("file", formData.get("file") as Blob)
    try {

        const response = await serverFetch.post("/event", {
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
                    : "Registration Failed. Please try again."}`
        };
    }


}

export const updateEvent = async (id: string, _currentState: any, formData: any): Promise<any> => {

    const minParticipantsValue = formData.get("minParticipants");
    const maxParticipantsValue = formData.get("maxParticipants");
    const joiningFeeValue = formData.get("joiningFee");
    const dateValue = formData.get("date") as string;
    const isoDate = new Date(dateValue).toISOString();
    const file = formData.get("file");


    const payload = {
        title: formData.get('title'),
        type: formData.get('type'),
        description: formData.get('description'),
        date: isoDate,
        location: formData.get('location'),
        status: formData.get("status") as File,
        minParticipants: minParticipantsValue ? Number(minParticipantsValue) : 0,
        maxParticipants: maxParticipantsValue ? Number(maxParticipantsValue) : 0,
        joiningFee: joiningFeeValue ? Number(joiningFeeValue) : 0,
    }


    if (zodValidator(payload, updateEventSchema).success === false) {
        return zodValidator(payload, updateEventSchema);
    }

    const validatedPayload: any = zodValidator(payload, updateEventSchema);

    console.log("validatedPayload:", validatedPayload)
    console.log("payload:", payload)

    const backendPayload = {
        title: validatedPayload.data.title,
        type: validatedPayload.data.type,
        description: validatedPayload.data.description,
        date: validatedPayload.data.date,
        location: validatedPayload.data.location,
        status: validatedPayload.data.status,
        minParticipants: validatedPayload.data.minParticipants,
        maxParticipants: validatedPayload.data.maxParticipants,
        joiningFee: validatedPayload.data.joiningFee,

    };

    console.log("backendPayload", backendPayload)

    const newFormData = new FormData()
    newFormData.append("data", JSON.stringify(backendPayload))
    if (file instanceof File && file.size > 0) {
        newFormData.append("file", file);
    }
    try {

        const response = await serverFetch.patch(`/event/update-event/${id}`, {
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
                    : "Registration Failed. Please try again."}`
        };
    }


}