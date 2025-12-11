"use server"
import { serverFetchGet } from "@/lib/server-fetch";
/* eslint-disable @typescript-eslint/no-explicit-any */


export async function getParticipantsOfHost() {
    try {
        const response = await serverFetchGet(`/event/host/participants`);
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