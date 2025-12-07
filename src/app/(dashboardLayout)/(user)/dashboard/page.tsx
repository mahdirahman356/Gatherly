import React from 'react'
import { CalendarIcon, TrendingUpIcon, AwardIcon } from 'lucide-react'
import { EventCard } from '@/components/shared/EventCard'
export default function UserOverviewPage() {
  const upcomingEvents = [
    {
      id: 1,
      title: 'Jazz Night at Blue Note',
      category: 'Music',
      image:
        'https://images.unsplash.com/photo-1511192336575-5a79af67a629?w=800&h=600&fit=crop',
      date: 'Fri, Dec 27',
      time: '8:00 PM',
      location: 'Blue Note Jazz Club',
      attendees: 8,
      maxAttendees: 20,
      hostName: 'Marcus Chen',
      hostAvatar:
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop',
    },
    {
      id: 2,
      title: 'Board Game Marathon',
      category: 'Social',
      image:
        'https://images.unsplash.com/photo-1610890716171-6b1bb98ffd09?w=800&h=600&fit=crop',
      date: 'Sun, Dec 29',
      time: '2:00 PM',
      location: 'Game Café Downtown',
      attendees: 6,
      maxAttendees: 10,
      hostName: 'Emily Rodriguez',
      hostAvatar:
        'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop',
    },
  ]
  return (
    <div className="space-y-6">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <span className="text-sm font-medium text-[(--color-gray)]">
              Upcoming Events
            </span>
            <CalendarIcon className="w-5 h-5 text-[(--color-primary)]" />
          </div>
          <div className="text-3xl font-bold text-[(--color-dark)] mb-1">
            3
          </div>
          <div className="text-xs text-[(--color-gray)]">Next 7 days</div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <span className="text-sm font-medium text-[(--color-gray)]">
              Events This Month
            </span>
            <TrendingUpIcon className="w-5 h-5 text-[(--color-secondary)]" />
          </div>
          <div className="text-3xl font-bold text-[(--color-dark)] mb-1">
            12
          </div>
          <div className="text-xs text-green-600">+3 from last month</div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <span className="text-sm font-medium text-[(--color-gray)]">
              Total Events
            </span>
            <AwardIcon className="w-5 h-5 text-[(--color-accent)]" />
          </div>
          <div className="text-3xl font-bold text-[(--color-dark)] mb-1">
            156
          </div>
          <div className="text-xs text-[(--color-gray)]">All time</div>
        </div>
      </div>

      {/* Upcoming Events */}
      <div className="bg-white rounded-xl p-6 shadow-sm">
        <h2 className="text-xl font-bold text-[(--color-dark)] mb-4">
          Your Next Events
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {upcomingEvents.map((event) => (
            <EventCard key={event.id} {...event} />
          ))}
        </div>
      </div>

      {/* Activity Summary */}
      <div className="bg-white rounded-xl p-6 shadow-sm">
        <h2 className="text-xl font-bold text-(--color-dark) mb-4">
          Recent Activity
        </h2>
        <div className="space-y-4">
          <div className="flex items-start space-x-4 pb-4 border-b border-gray-100">
            <div className="w-2 h-2 bg-(--color-primary) rounded-full mt-2"></div>
            <div className="flex-1">
              <div className="font-medium text-(--color-dark)">
                Joined &quot;Jazz Night at Blue Note&quot;
              </div>
              <div className="text-sm text-[(--color-gray)]">
                2 hours ago
              </div>
            </div>
          </div>
          <div className="flex items-start space-x-4 pb-4 border-b border-gray-100">
            <div className="w-2 h-2 bg-secondary rounded-full mt-2"></div>
            <div className="flex-1">
              <div className="font-medium text-[(--color-dark)]">
                Saved &quot;Morning Yoga in the Park&quot;
              </div>
              <div className="text-sm text-[(--color-gray)]">1 day ago</div>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <div className="w-2 h-2 bg-gray-300 rounded-full mt-2"></div>
            <div className="flex-1">
              <div className="font-medium text-[(--color-dark)]">
                Completed &quot;Photography Workshop&quot;
              </div>
              <div className="text-sm text-[(--color-gray)]">3 days ago</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
