import * as React from "react"

interface TextareaProps extends React.ComponentProps<"textarea"> {
  label?: string
  error?: string
}
function Textarea({ label, error, className = '', ...props }: TextareaProps) {
  return (

    <div className="w-full">
      {label && (
        <label className="block text-sm font-medium text-(--color-dark) mb-2">
          {label}
        </label>
      )}
      <textarea
        className={`w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-(--color-primary) transition-colors ${error ? 'border-red-500' : ''} ${className}`}
        {...props}
      />
      {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
    </div>
  )
}

export { Textarea }
