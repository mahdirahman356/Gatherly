"use client"
import { useState } from 'react'
import { FilterIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { EventCard } from '@/components/shared/EventCard'
import { SearchBar } from '@/components/modules/Events/SearchBar'
import { ViewToggle } from '@/components/modules/Events/ViewToggle'
import { FilterSidebar } from '@/components/modules/Events/FilterSidebar'
export default function ExploreEventsPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All Categories')
  const [selectedDate, setSelectedDate] = useState('Any Date')
  const [selectedLocation, setSelectedLocation] = useState('All Locations')
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)
  const events = [
    {
      id: 1,
      title: 'Sunset Hiking Adventure',
      category: 'Outdoor',
      image:
        'https://images.unsplash.com/photo-1551632811-561732d1e306?w=800&h=600&fit=crop',
      date: 'Sat, Dec 28',
      time: '5:00 PM',
      location: 'Rocky Mountain Trail',
      attendees: 12,
      maxAttendees: 15,
      hostName: 'Sarah Mitchell',
      hostAvatar:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop',
    },
    {
      id: 2,
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
      id: 3,
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
    {
      id: 4,
      title: 'Tech Startup Networking',
      category: 'Professional',
      image:
        'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=600&fit=crop',
      date: 'Thu, Jan 2',
      time: '6:30 PM',
      location: 'Innovation Hub',
      attendees: 24,
      maxAttendees: 30,
      hostName: 'David Park',
      hostAvatar:
        'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop',
    },
    {
      id: 5,
      title: 'Morning Yoga in the Park',
      category: 'Wellness',
      image:
        'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&h=600&fit=crop',
      date: 'Sat, Dec 28',
      time: '7:00 AM',
      location: 'Central Park',
      attendees: 15,
      maxAttendees: 20,
      hostName: 'Lisa Thompson',
      hostAvatar:
        'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=200&h=200&fit=crop',
    },
    {
      id: 6,
      title: 'Photography Walk: Urban Landscapes',
      category: 'Photography',
      image:
        'https://images.unsplash.com/photo-1452587925148-ce544e77e70d?w=800&h=600&fit=crop',
      date: 'Sun, Dec 29',
      time: '10:00 AM',
      location: 'Downtown Arts District',
      attendees: 9,
      maxAttendees: 12,
      hostName: 'Alex Johnson',
      hostAvatar:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop',
    },
  ]
  const handleClearFilters = () => {
    setSelectedCategory('All Categories')
    setSelectedDate('Any Date')
    setSelectedLocation('All Locations')
    setSearchQuery('')
  }
  return (
    <div className="min-h-screen bg-(--color-light-gray)">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-(--color-dark) mb-2">
            Explore Events
          </h1>
          <p className="text-lg text-(--color-gray)">
            Find your next adventure and connect with amazing people
          </p>
        </div>

        {/* Search Bar */}
        <div className="mb-6">
          <SearchBar
            value={searchQuery}
            onChange={setSearchQuery}
            placeholder="Search for events, activities, or interests..."
          />
        </div>

        {/* Controls */}
        <div className="flex justify-between items-center mb-6">
          <div className="text-sm text-(--color-gray)">
            Showing{' '}
            <span className="font-semibold text-(--color-dark)">
              {events.length}
            </span>{' '}
            events
          </div>
          <div className="flex items-center gap-3">
            <Button
              variant="outline"
              size="sm"
              className="md:hidden"
              onClick={() => setMobileFiltersOpen(true)}
            >
              <FilterIcon className="w-4 h-4 mr-2" />
              Filters
            </Button>
            <ViewToggle viewMode={viewMode} onViewModeChange={setViewMode} />
          </div>
        </div>

        {/* Main Content */}
        <div className="flex gap-8">
          {/* Sidebar Filters - Desktop */}
          <aside className="hidden md:block w-80 shrink-0">
            <FilterSidebar
              selectedCategory={selectedCategory}
              selectedDate={selectedDate}
              selectedLocation={selectedLocation}
              onCategoryChange={setSelectedCategory}
              onDateChange={setSelectedDate}
              onLocationChange={setSelectedLocation}
              onClearFilters={handleClearFilters}
            />
          </aside>

          {/* Mobile Filters */}
          {mobileFiltersOpen && (
            <FilterSidebar
              selectedCategory={selectedCategory}
              selectedDate={selectedDate}
              selectedLocation={selectedLocation}
              onCategoryChange={setSelectedCategory}
              onDateChange={setSelectedDate}
              onLocationChange={setSelectedLocation}
              onClearFilters={handleClearFilters}
              isMobileOpen={mobileFiltersOpen}
              onMobileClose={() => setMobileFiltersOpen(false)}
            />
          )}

          {/* Events Grid/List */}
          <div className="flex-1">
            {viewMode === 'grid' ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {events.map((event) => (
                  <EventCard key={event.id} {...event} viewMode="grid" />
                ))}
              </div>
            ) : (
              <div className="space-y-6">
                {events.map((event) => (
                  <EventCard key={event.id} {...event} viewMode="list" />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
