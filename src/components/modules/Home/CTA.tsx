import React from 'react'
import { SparklesIcon } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
export function CTA() {
  return (
    <section className="py-20 bg-linear-to-br from-(--color-primary) via-(--color-accent) to-(--color-secondary) text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-black opacity-10"></div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <SparklesIcon className="w-16 h-16 mx-auto mb-6 opacity-90" />

        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          Ready to Start Your Next Adventure?
        </h2>

        <p className="text-xl md:text-2xl mb-10 text-white/90 max-w-2xl mx-auto">
          Join thousands of people who&apos;ve found their perfect event companions.
          Your next great experience is just a click away.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/register">
            <Button
              size="lg"
              className="bg-white text-(--color-primary) hover:bg-gray-100 w-full sm:w-auto"
            >
              Get Started Free
            </Button>
          </Link>
          <Link href="/explore">
            <Button
              size="lg"
              variant="outline"
              className="bg-white text-(--color-primary) hover:bg-gray-100 hover:text-(--color-primary) w-full sm:w-auto"
            >
              Browse Events
            </Button>
          </Link>
        </div>

        <p className="mt-6 text-white/80 text-sm">
          No credit card required • Join in 30 seconds
        </p>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
      <div className="absolute top-0 right-0 w-48 h-48 bg-white/10 rounded-full blur-2xl"></div>
    </section>
  )
}
