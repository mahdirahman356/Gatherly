"use server"
/* eslint-disable @typescript-eslint/no-explicit-any */
import { serverFetch } from "@/lib/server-fetch";


export async function getUsers() {
    try {
        const response = await serverFetch.get(`/user?role=USER`);
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


export async function changeUserRole(
    userId: string,
    role: string
) {
    try {
        const response = await serverFetch.patch(
            `/user/change-role/${userId}`,
            {
                body: JSON.stringify({ role }),
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );

        const result = await response.json();
        console.log("User Data:" ,result)
        return result;
    } catch (error: any) {
        console.error("Error changing user role:", error);
        return {
            success: false,
            message:
                process.env.NODE_ENV === "development"
                    ? error.message
                    : "Failed to change user role",
        };
    }
}


export async function changeUserStatus(
    userId: string,
    status: string
) {
    try {
        const response = await serverFetch.patch(
            `/user/status/${userId}`,
            {
                body: JSON.stringify({ status }),
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );

        const result = await response.json();
        console.log("User Data:" ,result)
        return result;
    } catch (error: any) {
        console.error("Error changing user status:", error);
        return {
            success: false,
            message:
                process.env.NODE_ENV === "development"
                    ? error.message
                    : "Failed to change user staus",
        };
    }
}

export async function deleteUser(userId: string) {
    try {
        const response = await serverFetch.delete(`/user/${userId}`);
        const result = await response.json();

        return {
            success: result.success,
            message: result.message || "User removed successfully",
        };
    } catch (error: any) {
        console.error("Delete user error:", error);
        return {
            success: false,
            message: error.message || "Failed to remove user",
        };
    }
}