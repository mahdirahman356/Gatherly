import { StarIcon, QuoteIcon } from 'lucide-react'
import Image from 'next/image'
export function TestimonialsSection() {
  const testimonials = [
    {
      name: 'Sarah Mitchell',
      role: 'Joined 15+ events',
      avatar:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop',
      rating: 5,
      text: "I moved to a new city and EventBuddy helped me make amazing friends through shared interests. I've joined hiking groups, book clubs, and even found my running buddy!",
    },
    {
      name: 'Marcus Chen',
      role: 'Event Host',
      avatar:
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop',
      rating: 5,
      text: 'As a host, I love how easy it is to organize events and connect with enthusiastic people. The platform makes it simple to manage attendees and communicate with everyone.',
    },
    {
      name: 'Emily Rodriguez',
      role: 'Active Member',
      avatar:
        'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop',
      rating: 5,
      text: "I was tired of missing concerts because none of my friends shared my music taste. Now I never go alone! I've met so many cool people who love the same bands.",
    },
  ]
  return (
    <section className="py-20 bg-linear-to-br from-(--color-light-gray) to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-(--color-dark) mb-4">
            What Our Community Says
          </h2>
          <p className="text-xl text-(--color-gray) max-w-2xl mx-auto">
            Real stories from real people who found their tribe
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow"
            >
              <QuoteIcon className="w-10 h-10 text-(--color-primary) opacity-20 mb-4" />

              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <StarIcon
                    key={i}
                    className="w-5 h-5 text-yellow-400 fill-current"
                  />
                ))}
              </div>

              <p className="text-(--color-gray) mb-6 leading-relaxed">
                {testimonial.text}
              </p>

              <div className="flex items-center">
                <Image
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                  height={500}
                  width={500}
                />
                <div>
                  <div className="font-semibold text-(--color-dark)">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-(--color-gray)">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
