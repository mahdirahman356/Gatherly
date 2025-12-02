import {
  UsersIcon,
  FacebookIcon,
  TwitterIcon,
  InstagramIcon,
  LinkedinIcon,
} from 'lucide-react'
import Link from 'next/link'
export function Footer() {
  return (
    <footer className="bg-(--color-dark) text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-linear-to-br from-(--color-primary) to-(--color-accent) rounded-lg flex items-center justify-center">
                <UsersIcon className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold">EventBuddy</span>
            </div>
            <p className="text-gray-400 text-sm">
              Connect with like-minded people and never miss an event again.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/explore"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Explore Events
                </Link>
              </li>
              <li>
                <Link
                  href="/become-host"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Become a Host
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="font-semibold mb-4">Categories</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/explore?category=sports"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Sports & Fitness
                </Link>
              </li>
              <li>
                <Link
                  href="/explore?category=music"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Music & Concerts
                </Link>
              </li>
              <li>
                <Link
                  href="/explore?category=food"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Food & Dining
                </Link>
              </li>
              <li>
                <Link
                  href="/explore?category=tech"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Tech & Networking
                </Link>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <FacebookIcon className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Twitter"
              >
                <TwitterIcon className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} EventBuddy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
