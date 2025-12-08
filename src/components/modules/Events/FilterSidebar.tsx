import React from 'react'
import { CalendarIcon, MapPinIcon, TagIcon, XIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'
interface FilterSidebarProps {
  selectedCategory: string
  selectedDate: string
  selectedLocation: string
  onCategoryChange: (category: string) => void
  onDateChange: (date: string) => void
  onLocationChange: (location: string) => void
  onClearFilters: () => void
  isMobileOpen?: boolean
  onMobileClose?: () => void
}
export function FilterSidebar({
  selectedCategory,
  selectedDate,
  selectedLocation,
  onCategoryChange,
  onDateChange,
  onLocationChange,
  onClearFilters,
  isMobileOpen = false,
  onMobileClose,
}: FilterSidebarProps) {
  const categories = [
    'All Categories',
    'Sports & Fitness',
    'Music & Concerts',
    'Food & Dining',
    'Tech & Networking',
    'Arts & Crafts',
    'Photography',
    'Book Clubs',
    'Travel & Adventure',
  ]
  const dates = [
    'Any Date',
    'Today',
    'This Week',
    'This Weekend',
    'Next Week',
    'This Month',
  ]
  const locations = [
    'All Locations',
    'Downtown',
    'North Side',
    'South Side',
    'East Side',
    'West Side',
    'Suburbs',
  ]
  const content = (
    <>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-[var(--color-dark)]">Filters</h2>
        {isMobileOpen && (
          <button onClick={onMobileClose} className="md:hidden">
            <XIcon className="w-6 h-6 text-[var(--color-gray)]" />
          </button>
        )}
      </div>

      {/* Category Filter */}
      <div className="mb-8">
        <div className="flex items-center mb-3">
          <TagIcon className="w-5 h-5 text-[var(--color-primary)] mr-2" />
          <h3 className="font-semibold text-[var(--color-dark)]">Category</h3>
        </div>
        <div className="space-y-2">
          {categories.map((category) => (
            <label
              key={category}
              className="flex items-center cursor-pointer group"
            >
              <input
                type="radio"
                name="category"
                checked={selectedCategory === category}
                onChange={() => onCategoryChange(category)}
                className="mr-3"
              />
              <span className="text-sm text-[var(--color-gray)] group-hover:text-[var(--color-primary)] transition-colors">
                {category}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Date Filter */}
      <div className="mb-8">
        <div className="flex items-center mb-3">
          <CalendarIcon className="w-5 h-5 text-[var(--color-primary)] mr-2" />
          <h3 className="font-semibold text-[var(--color-dark)]">Date</h3>
        </div>
        <div className="space-y-2">
          {dates.map((date) => (
            <label
              key={date}
              className="flex items-center cursor-pointer group"
            >
              <input
                type="radio"
                name="date"
                checked={selectedDate === date}
                onChange={() => onDateChange(date)}
                className="mr-3"
              />
              <span className="text-sm text-[var(--color-gray)] group-hover:text-[var(--color-primary)] transition-colors">
                {date}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Location Filter */}
      <div className="mb-8">
        <div className="flex items-center mb-3">
          <MapPinIcon className="w-5 h-5 text-[var(--color-primary)] mr-2" />
          <h3 className="font-semibold text-[var(--color-dark)]">Location</h3>
        </div>
        <div className="space-y-2">
          {locations.map((location) => (
            <label
              key={location}
              className="flex items-center cursor-pointer group"
            >
              <input
                type="radio"
                name="location"
                checked={selectedLocation === location}
                onChange={() => onLocationChange(location)}
                className="mr-3"
              />
              <span className="text-sm text-[var(--color-gray)] group-hover:text-[var(--color-primary)] transition-colors">
                {location}
              </span>
            </label>
          ))}
        </div>
      </div>

      <Button
        variant="outline"
        size="sm"
        onClick={onClearFilters}
        className="w-full"
      >
        Clear All Filters
      </Button>
    </>
  )
  if (isMobileOpen) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 z-50 md:hidden">
        <div className="absolute right-0 top-0 bottom-0 w-80 bg-white p-6 overflow-y-auto">
          {content}
        </div>
      </div>
    )
  }
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm sticky top-20">
      {content}
    </div>
  )
}
