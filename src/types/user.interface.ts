import { IEvent } from "./event.interface";

export type UserRole = "ADMIN" | "USER" | "HOST"
export type UserStatus = "ACTIVE" | "INACTIVE" | "BLOCK" | "DELETED"

export interface IJWTPayload {
   email: string,
   role: UserRole
}

export interface IUserProfile {
  id: string;
  fullName: string;
  image: string | null;
  bio: string | null;
  interests: string[];
  location: string;
  userId: string;
}

export interface IUser {
  id: string;
  email: string;
  role: UserRole,
  status: UserStatus,
  createdAt: string; 
  profile: IUserProfile;
  events: IEvent,
  eventsCount: number
}

