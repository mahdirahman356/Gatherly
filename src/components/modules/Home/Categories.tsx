import {
  DumbbellIcon,
  MusicIcon,
  UtensilsIcon,
  CodeIcon,
  PaletteIcon,
  CameraIcon,
  BookOpenIcon,
  PlaneIcon,
} from 'lucide-react'
import Link from 'next/link'
export function Categories() {
  const categories = [
    {
      name: 'Sports & Fitness',
      icon: DumbbellIcon,
      color: 'from-orange-400 to-red-500',
      count: 1240,
    },
    {
      name: 'Music & Concerts',
      icon: MusicIcon,
      color: 'from-purple-400 to-pink-500',
      count: 856,
    },
    {
      name: 'Food & Dining',
      icon: UtensilsIcon,
      color: 'from-yellow-400 to-orange-500',
      count: 632,
    },
    {
      name: 'Tech & Networking',
      icon: CodeIcon,
      color: 'from-blue-400 to-cyan-500',
      count: 445,
    },
    {
      name: 'Arts & Crafts',
      icon: PaletteIcon,
      color: 'from-pink-400 to-rose-500',
      count: 328,
    },
    {
      name: 'Photography',
      icon: CameraIcon,
      color: 'from-indigo-400 to-purple-500',
      count: 291,
    },
    {
      name: 'Book Clubs',
      icon: BookOpenIcon,
      color: 'from-green-400 to-teal-500',
      count: 187,
    },
    {
      name: 'Travel & Adventure',
      icon: PlaneIcon,
      color: 'from-cyan-400 to-blue-500',
      count: 512,
    },
  ]
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-(--color-dark) mb-4">
            Explore Categories
          </h2>
          <p className="text-xl text-(--color-gray) max-w-2xl mx-auto">
            Find events that match your interests and passions
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {categories.map((category, index) => (
            <Link
              key={index}
              href={`/explore?category=${category.name.toLowerCase().replace(/\s+/g, '-')}`}
              className="group"
            >
              <div className="bg-white border-2 border-gray-100 rounded-2xl p-6 text-center hover:border-(--color-primary) hover:shadow-lg transition-all duration-300">
                <div
                  className={`inline-flex items-center justify-center w-16 h-16 bg-linear-to-br ${category.color} rounded-xl mb-4 group-hover:scale-110 transition-transform`}
                >
                  <category.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-semibold text-(--color-dark) mb-2 group-hover:text-(--color-primary) transition-colors">
                  {category.name}
                </h3>
                <p className="text-sm text-(--color-gray)">
                  {category.count} events
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
