/* eslint-disable @typescript-eslint/no-explicit-any */
import { serverFetch } from "@/lib/server-fetch";

export async function getEvents(query?: string) {
    try {
        const response = await serverFetch.get(`/event${query ? `?${query}` : ""}`);
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

export async function getEventDetails(id?: string) {
    try {
        const response = await serverFetch.get(`/event/${id}`);
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

export async function joinEvent(id: string) {
    try {
        const response = await serverFetch.post(`/event/${id}/join`, {
            headers: {
                "Content-Type": "application/json",
            },
        });

        const result = await response.json();
        return result;
    } catch (error: any) {
        console.error("Error Joining event:", error);
        return {
            success: false,
            message:
                process.env.NODE_ENV === "development"
                    ? error.message
                    : "Failed to book appointment",
        };
    }
}

export async function getUserEvents(query?: string) {
    try {
        const response = await serverFetch.get(`/event/user/upcoming-events?type=${query}`);
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

export async function getSavedEvents() {
    try {
        const response = await serverFetch.get(`/event/saved/my-saved-events`);
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


export async function toggleSaveEvent(id: string) {
    try {
        const response = await serverFetch.post(`/event/saved/${id}`, {
            headers: {
                "Content-Type": "application/json",
            },
        });

        const result = await response.json();
        return result;
    } catch (error: any) {
        console.error("Error saving event:", error);
        return {
            success: false,
            message:
                process.env.NODE_ENV === "development"
                    ? error.message
                    : "Failed to save event",
        };
    }
}

const data = await getSavedEvents()
const savedEvents = data.data
export const savedIds = savedEvents.map((s: { id: string; }) => s.id);