import React from 'react'
import { XIcon } from 'lucide-react'
interface ModalProps {
  isOpen: boolean
  onClose: () => void
  title: string
  children: React.ReactNode
  size?: 'sm' | 'md' | 'lg'
}
export function Modal({
  isOpen,
  onClose,
  title,
  children,
  size = 'md',
}: ModalProps) {
  if (!isOpen) return null
  const sizes = {
    sm: 'max-w-md',
    md: 'max-w-2xl',
    lg: 'max-w-4xl',
  }
  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex min-h-screen items-center justify-center p-4">
        {/* Backdrop */}
        <div
          className="fixed inset-0 bg-black bg-opacity-50 transition-opacity"
          onClick={onClose}
        ></div>

        {/* Modal */}
        <div
          className={`relative bg-white rounded-2xl shadow-2xl ${sizes[size]} w-full max-h-[90vh] overflow-y-auto`}
        >
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-200">
            <h2 className="text-2xl font-bold text-[var(--color-dark)]">
              {title}
            </h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              aria-label="Close modal"
            >
              <XIcon className="w-5 h-5 text-[var(--color-gray)]" />
            </button>
          </div>

          {/* Content */}
          <div className="p-6">{children}</div>
        </div>
      </div>
    </div>
  )
}
