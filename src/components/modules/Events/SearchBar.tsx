import React from 'react'
import { SearchIcon } from 'lucide-react'
interface SearchBarProps {
  value: string
  onChange: (value: string) => void
  placeholder?: string
}
export function SearchBar({
  value,
  onChange,
  placeholder = 'Search events...',
}: SearchBarProps) {
  return (
    <div className="relative">
      <SearchIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[var(--color-gray)]" />
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-[var(--color-primary)] transition-colors"
      />
    </div>
  )
}
