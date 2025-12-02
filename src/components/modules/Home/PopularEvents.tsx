import {
    MapPinIcon,
    CalendarIcon,
    UsersIcon,
    ArrowRightIcon,
} from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
export function PopularEvents() {
    const events = [
        {
            id: 1,
            title: 'Sunset Hiking Adventure',
            category: 'Outdoor',
            image:
                'https://images.unsplash.com/photo-1551632811-561732d1e306?w=800&h=600&fit=crop',
            date: 'Sat, Dec 28',
            location: 'Rocky Mountain Trail',
            attendees: 12,
            maxAttendees: 15,
        },
        {
            id: 2,
            title: 'Jazz Night at Blue Note',
            category: 'Music',
            image:
                'https://images.unsplash.com/photo-1511192336575-5a79af67a629?w=800&h=600&fit=crop',
            date: 'Fri, Dec 27',
            location: 'Blue Note Jazz Club',
            attendees: 8,
            maxAttendees: 20,
        },
        {
            id: 3,
            title: 'Board Game Marathon',
            category: 'Social',
            image:
                'https://images.unsplash.com/photo-1610890716171-6b1bb98ffd09?w=800&h=600&fit=crop',
            date: 'Sun, Dec 29',
            location: 'Game Café Downtown',
            attendees: 6,
            maxAttendees: 10,
        },
        {
            id: 4,
            title: 'Tech Startup Networking',
            category: 'Professional',
            image:
                'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=600&fit=crop',
            date: 'Thu, Jan 2',
            location: 'Innovation Hub',
            attendees: 24,
            maxAttendees: 30,
        },
    ]
    return (
        <section className="py-20 bg-(--color-light-gray)">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-end mb-12">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold text-(--color-dark) mb-4">
                            Popular Events
                        </h2>
                        <p className="text-xl text-(--color-gray)">
                            Join the most exciting activities happening near you
                        </p>
                    </div>
                    <Link href="/explore" className="hidden md:block">
                        <Button variant="ghost">
                            View All <ArrowRightIcon className="w-4 h-4 ml-2 inline" />
                        </Button>
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {events.map((event) => (
                        <Link key={event.id} href={`/event/${event.id}`} className="group">
                            <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
                                <div className="relative h-48 overflow-hidden">
                                    <Image
                                        src={event.image}
                                        alt={event.title}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                                        width={500}
                                        height={500}
                                    />
                                    <div className="absolute top-3 left-3">
                                        <Badge>{event.category}</Badge>
                                    </div>
                                </div>
                                <div className="p-5">
                                    <h3 className="font-bold text-lg text-(--color-dark) mb-3 group-hover:text-(--color-primary) transition-colors">
                                        {event.title}
                                    </h3>
                                    <div className="space-y-2 text-sm text-(--color-gray)">
                                        <div className="flex items-center">
                                            <CalendarIcon className="w-4 h-4 mr-2" />
                                            {event.date}
                                        </div>
                                        <div className="flex items-center">
                                            <MapPinIcon className="w-4 h-4 mr-2" />
                                            {event.location}
                                        </div>
                                        <div className="flex items-center">
                                            <UsersIcon className="w-4 h-4 mr-2" />
                                            {event.attendees}/{event.maxAttendees} joined
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

                <div className="text-center mt-8 md:hidden">
                    <Link href="/explore">
                        <Button variant="outline">
                            View All Events <ArrowRightIcon className="w-4 h-4 ml-2 inline" />
                        </Button>
                    </Link>
                </div>
            </div>
        </section>
    )
}
