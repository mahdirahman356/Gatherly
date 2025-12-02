import { Button } from '@/components/ui/button'
import { SearchIcon } from 'lucide-react'
import Link from 'next/link'
export function Hero() {
  return (
    <section className="relative bg-linear-to-br from-(--color-primary) via-(--color-accent) to-(--color-secondary) text-white overflow-hidden">
      <div className="absolute inset-0 bg-black opacity-10"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Never Miss Out on Life&apos;s Best Moments
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90">
            Find your perfect event companion. Connect with like-minded people
            who share your passions.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Link href="/explore">
              <Button
                size="lg"
                className="bg-white text-(--color-primary) hover:bg-gray-100 w-full sm:w-auto"
              >
                <SearchIcon className="w-5 h-5 mr-2 inline" />
                Explore Events
              </Button>
            </Link>
            <Link href="/become-host">
              <Button
                size="lg"
                variant="outline"
                className="bg-white text-(--color-primary) hover:bg-gray-100 hover:text-(--color-primary) w-full sm:w-auto"
              >
                Become a Host
              </Button>
            </Link>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-3 gap-6 max-w-2xl">
            <div>
              <div className="text-3xl font-bold mb-1">10K+</div>
              <div className="text-white/80 text-sm">Active Events</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-1">50K+</div>
              <div className="text-white/80 text-sm">Community Members</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-1">200+</div>
              <div className="text-white/80 text-sm">Cities</div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
      <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
    </section>
  )
}
