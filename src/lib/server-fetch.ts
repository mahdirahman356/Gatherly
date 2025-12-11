"use server"
import { getCookie } from "@/services/auth/tokenHandlers";

const BACKEND_API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api/v1";

const serverFetchHelper = async (endpoint: string, options: RequestInit): Promise<Response> => {
    const { headers, ...restOptions } = options
    const accessToken = await getCookie("accessToken")

    const response = await fetch(`${BACKEND_API_URL}${endpoint}`, {
        headers: {
            Cookie: accessToken ? `accessToken=${accessToken}` : "",
            ...headers,
        },
        ...restOptions,
        credentials: "include",
    })
    return response

}


export async function serverFetchGet(endpoint: string, options: RequestInit = {}) {
    return serverFetchHelper(endpoint, { ...options, method: "GET" });
}

export async function serverFetchPost(endpoint: string, options: RequestInit = {}) {
    return serverFetchHelper(endpoint, { ...options, method: "POST" });
}

export async function serverFetchPut(endpoint: string, options: RequestInit = {}) {
    return serverFetchHelper(endpoint, { ...options, method: "PUT" });
}

export async function serverFetchPatch(endpoint: string, options: RequestInit = {}) {
    return serverFetchHelper(endpoint, { ...options, method: "PATCH" });
}

export async function serverFetchDelete(endpoint: string, options: RequestInit = {}) {
    return serverFetchHelper(endpoint, { ...options, method: "DELETE" });
}