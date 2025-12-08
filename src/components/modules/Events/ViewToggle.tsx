import React from 'react'
import { GridIcon, ListIcon } from 'lucide-react'
interface ViewToggleProps {
  viewMode: 'grid' | 'list'
  onViewModeChange: (mode: 'grid' | 'list') => void
}
export function ViewToggle({ viewMode, onViewModeChange }: ViewToggleProps) {
  return (
    <div className="flex items-center bg-white rounded-lg border-2 border-gray-200 p-1">
      <button
        onClick={() => onViewModeChange('grid')}
        className={`p-2 rounded transition-colors ${viewMode === 'grid' ? 'bg-[var(--color-primary)] text-white' : 'text-[var(--color-gray)] hover:text-[var(--color-primary)]'}`}
        aria-label="Grid view"
      >
        <GridIcon className="w-5 h-5" />
      </button>
      <button
        onClick={() => onViewModeChange('list')}
        className={`p-2 rounded transition-colors ${viewMode === 'list' ? 'bg-[var(--color-primary)] text-white' : 'text-[var(--color-gray)] hover:text-[var(--color-primary)]'}`}
        aria-label="List view"
      >
        <ListIcon className="w-5 h-5" />
      </button>
    </div>
  )
}
