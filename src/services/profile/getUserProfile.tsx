/* eslint-disable @typescript-eslint/no-explicit-any */

import { serverFetchGet } from "@/lib/server-fetch";


export async function getUserProfile(id: string) {
    try {
        const response = await serverFetchGet(`/user/${id}`);
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