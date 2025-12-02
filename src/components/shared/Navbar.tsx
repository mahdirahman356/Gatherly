"use client"
import React, { useState } from 'react'
import { UsersIcon, MenuIcon, XIcon } from 'lucide-react'
import Link from 'next/link'
import { Button } from '../ui/button'
import { usePathname } from 'next/navigation'
export function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const pathname = usePathname()
    const isActive = (path: string) => pathname === path
    return (
        <nav className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <Link href="/" className="flex items-center space-x-2 group">
                        <div className="w-10 h-10 bg-linear-to-br from-(--color-primary) to-(--color-accent) rounded-lg flex items-center justify-center group-hover:scale-105 transition-transform">
                            <UsersIcon className="w-6 h-6 text-white" />
                        </div>
                        <span className="text-xl font-bold text-(--color-dark)">
                            Gatherly
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        <Link
                            href="/explore"
                            className={`font-medium transition-colors ${isActive('/explore') ? 'text-(--color-primary)' : 'text-(--color-gray) hover:text-(--color-primary)'}`}
                        >
                            Explore Events
                        </Link>
                        <Link
                            href="/become-host"
                            className={`font-medium transition-colors ${isActive('/become-host') ? 'text-(--color-primary)' : 'text-(--color-gray) hover:text-(--color-primary)'}`}
                        >
                            Become a Host
                        </Link>
                        <Link href="/login">
                            <Button variant="outline" size="sm">
                                Login
                            </Button>
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden p-2"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        {mobileMenuOpen ? (
                            <XIcon className="w-6 h-6 text-(--color-dark)" />
                        ) : (
                            <MenuIcon className="w-6 h-6 text-(--color-dark)" />
                        )}
                    </button>
                </div>

                {/* Mobile Menu */}
                {mobileMenuOpen && (
                    <div className="md:hidden py-4 border-t border-gray-200">
                        <div className="flex flex-col space-y-4">
                            <Link
                                href="/explore"
                                className="font-medium text-(--color-gray) hover:text-(--color-primary)"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                Explore Events
                            </Link>
                            <Link
                                href="/become-host"
                                className="font-medium text-(--color-gray) hover:text-(--color-primary)"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                Become a Host
                            </Link>
                            <Link href="/login" onClick={() => setMobileMenuOpen(false)}>
                                <Button variant="outline" size="sm" className="w-full">
                                    Login
                                </Button>
                            </Link>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    )
}
