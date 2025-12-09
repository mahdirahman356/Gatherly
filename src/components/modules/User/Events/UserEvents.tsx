"use client"
import EventCard from '@/components/shared/EventCard'
import { Card, CardContent } from '@/components/ui/card';
import { IEvent } from '@/types/event.interface';
import { CheckCircle2 } from 'lucide-react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

interface EventsProps {
    events: IEvent[];
}

export function UserEvents({ events = [] }: EventsProps) {

     const searchParams = useSearchParams();
    const router = useRouter();

     const paymentStatus = searchParams.get("payment");
    const [showSuccess, setShowSuccess] = useState(false);

    useEffect(() => {
        if (paymentStatus === "success") {
            // eslint-disable-next-line react-hooks/set-state-in-effect
            setShowSuccess(true);

            setTimeout(() => {
                setShowSuccess(false);
                router.replace("/dashboard/upcoming"); 
            }, 2000);
        }
    }, [paymentStatus, router]);

    if (showSuccess) {
        return (
            <div className="max-w-2xl mx-auto py-20">
                <Card className="border-green-200 bg-green-50">
                    <CardContent className="pt-6">
                        <div className="text-center space-y-4">
                            <div className="flex justify-center">
                                <CheckCircle2 className="h-16 w-16 text-green-600" />
                            </div>

                            <div>
                                <h2 className="text-2xl font-bold text-green-900">
                                    Successfully Joined!
                                </h2>

                                <p className="text-green-700 mt-2">
                                    You have successfully joined this event. Get ready for an amazing experience!
                                </p>
                            </div>

                            <div className="text-sm text-green-600 space-y-1">
                                <p>You can now see this event in your dashboard.</p>
                                <p>Host will be able to see you as a participant.</p>
                            </div>

                            <p className="text-sm text-green-600 pt-2">
                                Redirecting to your dashboard...
                            </p>
                        </div>
                    </CardContent>
                </Card>
            </div>
        );
    }

    return (
        <div className="space-y-6">
            {events.length === 0 && (
                <div className="bg-white rounded-xl p-12 text-center shadow-sm">
                    <p className="text-(--color-gray) text-lg">
                        No upcoming events found
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
