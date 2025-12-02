import { SearchIcon, UsersIcon, CalendarCheckIcon } from 'lucide-react'
export function HowItWorks() {
  const steps = [
    {
      icon: SearchIcon,
      title: 'Discover Events',
      description:
        'Browse thousands of activities, from concerts to hiking trips, in your area.',
    },
    {
      icon: UsersIcon,
      title: 'Connect with People',
      description:
        'Find like-minded companions who share your interests and enthusiasm.',
    },
    {
      icon: CalendarCheckIcon,
      title: 'Join & Enjoy',
      description:
        'RSVP to events and create unforgettable memories with new friends.',
    },
  ]
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-(--color-dark) mb-4">
            How It Works
          </h2>
          <p className="text-xl text-(--color-gray) max-w-2xl mx-auto">
            Three simple steps to start your next adventure
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-linear-to-br from-(--color-primary) to-(--color-accent) rounded-2xl mb-6 shadow-lg">
                  <step.icon className="w-10 h-10 text-white" />
                </div>
                <div className="absolute top-8 left-1/2 transform -translate-x-1/2 -z-10">
                  <div className="w-16 h-16 bg-(--color-primary) opacity-20 rounded-full blur-xl"></div>
                </div>
                <h3 className="text-xl font-bold text-(--color-dark) mb-3">
                  {step.title}
                </h3>
                <p className="text-(--color-gray)">{step.description}</p>
              </div>

              {/* Connector Line (hidden on mobile, last item) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-10 left-[60%] w-[80%] h-0.5 bg-linear-to-r from-(--color-primary) to-transparent"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
