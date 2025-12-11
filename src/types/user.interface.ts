import { IEvent } from "./event.interface";

export type UserRole = "ADMIN" | "USER" | "HOST"
export type UserStatus = "ACTIVE" | "INACTIVE" | "BLOCK" | "DELETED"
export type HostRequestStatus = "PENDING" | "APPROVED" | "REJECTED"

export interface IJWTPayload {
  email: string,
  role: UserRole
}

export interface IUserProfile {
  id: string;
  fullName: string;
  image: string;
  bio: string;
  interests: string[];
  location: string;
  userId: string;
  createdAt?: string
}

export interface IHostRequest {
  id: string,
  userId: string,
  user: IUser
  status: HostRequestStatus,
  createdAt: string,
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

