import { IEvent } from "./event.interface";
import { IUser } from "./user.interface";

export interface IReview {
    id: string;
    userId: string;
    user?: IUser;
    hostId: string;
    host?: IUser;
    eventId: string;
    event?: IEvent;
    rating: number;
    comment: string;
    createdAt: string;
    updatedAt: string;
}

export interface IReviewFormData {
    eventId: string;
    rating: number;
    comment: string;
}