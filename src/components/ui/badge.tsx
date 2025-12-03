import React from 'react'
interface BadgeProps {
  children: React.ReactNode
  variant?: 'primary' | 'secondary' | 'gray'
}
export function Badge({ children, variant = 'primary' }: BadgeProps) {
  const variants = {
    primary: 'bg-[var(--color-primary)] text-white',
    secondary: 'bg-[var(--color-secondary)] text-white',
    gray: 'bg-gray-200 text-[var(--color-gray)]',
  }
  return (
    <span
      className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${variants[variant]}`}
    >
      {children}
    </span>
  )
}
