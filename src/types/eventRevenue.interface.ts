import { EventStatus } from "./event.interface";


export interface IEventRevenue {
  eventId: string;
  eventTitle: string;
  eventType: string;
  eventImage: string;
  eventDate: string;    
  eventStatus: EventStatus,       
  participantsCount: number;
  pricePerPerson: number;
  totalRevenue: number;
}