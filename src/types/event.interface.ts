
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
  createdAt: string; 
  updatedAt: string; 
}
