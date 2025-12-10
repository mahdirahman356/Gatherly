"use client"
import EventCard from '@/components/shared/EventCard'
import { IEvent } from '@/types/event.interface';

interface EventsProps {
    events: IEvent[];
}

export function UserEvents({ events = [] }: EventsProps) {

    return (
        <div className="space-y-6">
            {events.length === 0 && (
                <div className="p-12 text-center">
                    <p className="text-(--color-gray) text-lg">
                        No events found
                    </p>
                </div>
            )}
            {/* Events Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {events?.map((event: IEvent) => (
                    <EventCard key={event.id} {...event} />
                ))}
            </div>
        </div>
    )
}
