/* eslint-disable @typescript-eslint/no-explicit-any */

import { serverFetch } from "@/lib/server-fetch";

export async function changeEventStatus(
    eventId: string,
    status: string
) {
    try {
        const response = await serverFetch.patch(
            `/event/status/${eventId}`,
            {
                body: JSON.stringify({ status }),
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );

        const result = await response.json();
        console.log("Event Data:" ,result)
        return result;
    } catch (error: any) {
        console.error("Error changing event status:", error);
        return {
            success: false,
            message:
                process.env.NODE_ENV === "development"
                    ? error.message
                    : "Failed to change event staus",
        };
    }
}

export async function deleteEvent(eventId: string) {
    try {
        const response = await serverFetch.delete(`/event/${eventId}`);
        const result = await response.json();

        console.log("result:", result)

        return {
            success: result.success,
            message: result.message || "Event removed successfully",
        };
    } catch (error: any) {
        console.error("Delete event error:", error);
        return {
            success: false,
            message: error.message || "Failed to remove event",
        };
    }
}