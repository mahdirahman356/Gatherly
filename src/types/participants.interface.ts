
export interface ParticipantUser {
    profile: {
        fullName: string;
        image: string;
        location: string
    }
}

export interface ParticipantEvent {
    id: string;
    title: string;
    type: string;
    image: string;
    date: string;
}

export interface HostParticipant {
    id: string;
    joinedAt: string;
    paymentStatus: "FREE" | "PAID";
    user: ParticipantUser;
    event: ParticipantEvent;
}
