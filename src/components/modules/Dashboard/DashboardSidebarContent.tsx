/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { ScrollArea } from "@radix-ui/react-scroll-area";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { DashboardNavItem } from "@/types/dashboard.interface";
import { IJWTPayload } from "@/types/user.interface";
import { BarChart3Icon, BookmarkIcon, CalendarIcon, DollarSignIcon, HistoryIcon, LayoutDashboardIcon, SettingsIcon, ShieldIcon, UsersIcon } from "lucide-react";

interface DashboardSidebarContentProps {
    userInfo: IJWTPayload;
    navItems: DashboardNavItem[];
}

const DashboardSidebarContent = ({
    userInfo,
    navItems,
}: DashboardSidebarContentProps) => {
    const pathname = usePathname();
    const iconMap: Record<string, any> = {
        dashboard: LayoutDashboardIcon,
        calendar: CalendarIcon,
        history: HistoryIcon,
        bookmark: BookmarkIcon,
        settings: SettingsIcon,
        users: UsersIcon,
        shield: ShieldIcon,
        dollar: DollarSignIcon,
        analytics: BarChart3Icon,
    };

    return (
        <div className="hidden md:flex h-full w-64 flex-col border-r bg-card">
            <div className="flex h-16 items-center px-6 py-11">
                {/* Logo */}
                <Link href="/" className="flex items-center space-x-2 group">
                    <div className="w-10 h-10 bg-linear-to-br from-primary to-(--color-accent) rounded-lg flex items-center justify-center group-hover:scale-105 transition-transform">
                        <UsersIcon className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-xl font-bold text-(--color-dark)">
                        Gatherly
                    </span>
                </Link>
            </div>

            {/* Navigation */}
            <ScrollArea className="flex-1 px-3">
                <nav className="flex-1 overflow-y-auto p-4">
                    <ul className="space-y-3">
                        {navItems?.map((item) => {
                            const Icon = iconMap[item.icon];
                            const isActive = pathname === item.path;
                            return (
                                <li key={item.id}>
                                    <Link
                                        href={item.path}
                                        className={`flex items-center justify-between px-4 py-2 rounded-lg transition-all
                                            ${isActive
                                                ? 'bg-primary text-white shadow-sm'
                                                : 'text-(--color-gray) hover:bg-(--color-light-gray) hover:text-(--color-dark)'}`}
                                    >
                                        <div className="flex items-center space-x-3">
                                            <Icon className="w-5 h-5" />
                                            <span className="font-medium text-sm text-nowrap">{item.label}</span>
                                        </div>
                                        {item.badge !== undefined && (
                                            <span
                                                className={`px-2 py-0.5 rounded-full text-xs font-semibold
                                              ${isActive
                                                        ? 'bg-white text-(--color-primary)'
                                                        : 'bg-gray-200 text-(--color-gray)'}`}
                                            >
                                                {item.badge}
                                            </span>
                                        )}
                                    </Link>
                                </li>
                            )
                        })}
                    </ul>
                </nav>
            </ScrollArea>

            <div className="p-4 border-t border-gray-200">
                <div className="bg-gray-200 rounded-lg p-4">

                    <div className="text-xs text-(--color-gray) mb-2">
                        Quick Stats
                    </div>
                    {/* {userInfo === 'USER' && ( */}
                    <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                            <span className="text-(--color-gray)">Events Joined</span>
                            <span className="font-semibold text-(--color-dark)">
                                156
                            </span>
                        </div>
                        <div className="flex justify-between text-sm">
                            <span className="text-(--color-gray)">This Month</span>
                            <span className="font-semibold text-(--color-dark)">
                                12
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            {/* )} */}

            {/* User Info at Bottom */}
            <div className="border-t p-4">
                <div className="flex items-center gap-3">
                    <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                        <span className="text-sm font-semibold text-primary">
                            {userInfo.email.charAt(0).toUpperCase()}
                        </span>
                    </div>
                    <div className="flex-1 overflow-hidden">
                        <p className="text-sm font-medium truncate">{userInfo?.email}</p>
                        <p className="text-xs text-muted-foreground capitalize">
                            {userInfo?.role.toLowerCase()}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashboardSidebarContent;