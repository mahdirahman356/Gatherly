"use server"
/* eslint-disable @typescript-eslint/no-explicit-any */
import { serverFetchPost } from "@/lib/server-fetch";


export async function requestBecomeHost() {
    try {
        const response = await serverFetchPost("/user/host/become-host", {
            headers: {
                "Content-Type": "application/json",
            },
        });

        const result = await response.json();
        return result;
    } catch (error: any) {
        console.error("Error creating review:", error);
        return {
            success: false,
            message:
                process.env.NODE_ENV === "development"
                    ? error.message
                    : "Failed to request",
        };
    }
}