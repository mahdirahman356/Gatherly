// "use server"
/* eslint-disable @typescript-eslint/no-explicit-any */
import jwt, { JwtPayload } from "jsonwebtoken";
import { getCookie } from "./tokenHandlers";
import { IJWTPayload } from "@/types/user.interface";


export const getUser = async (): Promise<IJWTPayload | any> => {
    let user: IJWTPayload | any;
    try {
        const accessToken = await getCookie("accessToken");
        if (!accessToken) {
            throw new Error("No access token found");
        }
        const verifiedToken = jwt.verify(accessToken, process.env.JWT_ACCESS_SECRET as string) as JwtPayload;

        user = {
            email: verifiedToken.email,
            role: verifiedToken.role,
        }

        return user;

    } catch {
        return null
    }

}