/* eslint-disable @typescript-eslint/no-explicit-any */
import { IUser } from "./user.interface";

export type EventStatus = "OPEN" | "FULL" | "CANCELLED" | "COMPLETED";

export interface IEvent {
  id: string;
  title: string;
  type: string;
  description: string;
  date: string;
  location: string;
  image: string;
  minParticipants: number;
  maxParticipants: number;
  joiningFee: number;
  status: EventStatus;
  hostId: string;
  host: IUser,
  participants: any,
  _count: {
    participants: number
  }
  createdAt: string;
  updatedAt: string;
}
