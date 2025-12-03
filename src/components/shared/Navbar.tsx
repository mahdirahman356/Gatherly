import { UsersIcon, MenuIcon } from 'lucide-react'
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "../ui/sheet";
import Link from 'next/link'
import { Button } from '../ui/button'
import { getUser } from '@/services/auth/getUser'
import { getNavItemsByRole } from '@/lib/navItems.config';
import LogoutButton from './LogoutButton';

export async function Navbar() {
    const isActive = (path: string) => "/" === path
    const user = await getUser()
    const navItems = getNavItemsByRole(user?.role)

    return (
        <nav className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <Link href="/" className="flex items-center space-x-2 group">
                        <div className="w-10 h-10 bg-linear-to-br from-primary to-(--color-accent) rounded-lg flex items-center justify-center group-hover:scale-105 transition-transform">
                            <UsersIcon className="w-6 h-6 text-white" />
                        </div>
                        <span className="text-xl font-bold text-(--color-dark)">
                            Gatherly
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navItems.map((link) => (
                            <Link
                                key={link.label}
                                href={link.href}
                                className={`font-medium transition-colors ${isActive(`${link.href}`) ? 'text-(--color-primary)' : 'text-(--color-gray) hover:text-(--color-primary)'}`}
                            >
                                {link.label}
                            </Link>
                        ))}

                        {user
                            ? <LogoutButton />
                            : <Link href="/login">
                                <Button variant="outline" className="bg-primary text-primary-foreground">Login</Button>
                            </Link>
                        }
                    </div>

                    <div className="md:hidden">
                        <Sheet>
                            <SheetTrigger asChild>
                                <MenuIcon />
                            </SheetTrigger>
                            <SheetContent side="right" className="w-[300px] sm:w-[400px] p-4">
                                <SheetTitle className="sr-only">Navigation Menu</SheetTitle>

                                <div className="py-4">
                                    <div className="flex flex-col space-y-4">

                                        {navItems.map((link) => (
                                            <Link
                                                key={link.label}
                                                href={link.href}
                                                className="font-medium text-(--color-gray) hover:text-(--color-primary)"
                                            >
                                                {link.label}
                                            </Link>
                                        ))}

                                        {user
                                            ? <LogoutButton />
                                            : <Link href="/login">
                                                <Button variant="outline" className="bg-primary text-primary-foreground">Login</Button>
                                            </Link>
                                        }
                                    </div>
                                </div>
                            </SheetContent>
                        </Sheet>
                    </div>
                </div>
            </div>
        </nav>
    )
}
