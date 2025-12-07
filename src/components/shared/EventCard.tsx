import { MapPinIcon, CalendarIcon, UsersIcon, ClockIcon } from 'lucide-react'
import Image from 'next/image'
import { Badge } from '../ui/badge'
import Link from 'next/link'
interface EventCardProps {
  id: number
  title: string
  category: string
  image: string
  date: string
  time: string
  location: string
  attendees: number
  maxAttendees: number
  hostName: string
  hostAvatar: string
  viewMode?: 'grid' | 'list'
}
export function EventCard({
  id,
  title,
  category,
  image,
  date,
  time,
  location,
  attendees,
  maxAttendees,
  hostName,
  hostAvatar,
  viewMode = 'grid',
}: EventCardProps) {
  if (viewMode === 'list') {
    return (
      <Link href={`/event/${id}`} className="group">
        <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col md:flex-row">
          <div className="relative w-full md:w-64 h-48 md:h-auto overflow-hidden shrink-0">
            <Image
              src={image}
              alt={title}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              height={500}
              width={500}
            />
            <div className="absolute top-3 left-3">
              <Badge>{category}</Badge>
            </div>
          </div>

          <div className="flex-1 p-6 flex flex-col justify-between">
            <div>
              <h3 className="font-bold text-xl text-[(--color-dark)] mb-3 group-hover:text-[(--color-primary)] transition-colors">
                {title}
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-[(--color-gray)] mb-4">
                <div className="flex items-center">
                  <CalendarIcon className="w-4 h-4 mr-2 shrink-0" />
                  {date}
                </div>
                <div className="flex items-center">
                  <ClockIcon className="w-4 h-4 mr-2 shrink-0" />
                  {time}
                </div>
                <div className="flex items-center">
                  <MapPinIcon className="w-4 h-4 mr-2 shrink-0" />
                  {location}
                </div>
                <div className="flex items-center">
                  <UsersIcon className="w-4 h-4 mr-2 shrink-0" />
                  {attendees}/{maxAttendees} joined
                </div>
              </div>
            </div>

            <div className="flex items-center pt-4 border-t border-gray-100">
              <Image
                src={hostAvatar}
                alt={hostName}
                className="w-10 h-10 rounded-full object-cover mr-3"
                height={500}
                width={500}
              />
              <div>
                <div className="text-xs text-[(--color-gray)]">
                  Hosted by
                </div>
                <div className="font-semibold text-sm text-[(--color-dark)]">
                  {hostName}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
    )
  }
  return (
    <Link href={`/event/${id}`} className="group">
      <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300">
        <div className="relative h-48 overflow-hidden">
          <Image
            src={image}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
            height={500}
            width={500}
          />
          <div className="absolute top-3 left-3">
            <Badge>{category}</Badge>
          </div>
        </div>

        <div className="p-5">
          <h3 className="font-bold text-lg text-[(--color-dark)] mb-3 group-hover:text-[(--color-primary)] transition-colors line-clamp-2">
            {title}
          </h3>

          <div className="space-y-2 text-sm text-gray-600 mb-4">
            <div className="flex items-center">
              <CalendarIcon className="w-4 h-4 mr-2 shrink-0" />
              {date}
            </div>
            <div className="flex items-center">
              <ClockIcon className="w-4 h-4 mr-2 shrink-0" />
              {time}
            </div>
            <div className="flex items-center">
              <MapPinIcon className="w-4 h-4 mr-2 shrink-0" />
              <span className="line-clamp-1">{location}</span>
            </div>
            <div className="flex items-center">
              <UsersIcon className="w-4 h-4 mr-2 shrink-0" />
              {attendees}/{maxAttendees} joined
            </div>
          </div>

          <div className="flex items-center pt-4 border-t border-gray-100">
            <Image
              src={hostAvatar}
              alt={hostName}
              className="w-8 h-8 rounded-full object-cover mr-2"
              height={500}
              width={500}
            />
            <div className="text-xs text-gray-600">
              by{' '}
              <span className="font-semibold text-(--color-dark)">
                {hostName}
              </span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}
