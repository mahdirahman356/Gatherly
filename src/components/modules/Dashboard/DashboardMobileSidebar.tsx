/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { SheetTitle } from "@/components/ui/sheet";
import { DashboardNavItem } from "@/types/dashboard.interface";
import { IJWTPayload } from "@/types/user.interface";
import { ScrollArea } from "@radix-ui/react-scroll-area";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BarChart3Icon, BookmarkIcon, CalendarIcon, DollarSignIcon, HistoryIcon, LayoutDashboardIcon, SettingsIcon, ShieldIcon, UsersIcon } from "lucide-react";


interface DashboardMobileSidebarContentProps {
    userInfo: IJWTPayload;
    navItems: DashboardNavItem[];
}

const DashboardMobileSidebar = ({
    userInfo,
    navItems,
}: DashboardMobileSidebarContentProps) => {
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
        <div className=" flex h-full flex-col">
            <div className="flex h-16 items-center px-6 py-6">
                {/* Logo */}
                <Link href="/" className="flex items-center space-x-2 group">
                    <div className="w-10 h-10 bg-linear-to-br from-(--color-primary) to-(--color-accent) rounded-lg flex items-center justify-center group-hover:scale-105 transition-transform">
                        <UsersIcon className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-xl font-bold text-(--color-dark)">
                        Gatherly
                    </span>
                </Link>
            </div>
            <SheetTitle className="sr-only">Navigation Menu</SheetTitle>

            {/* Navigation */}
            <ScrollArea className="flex-1 px-3">
                <nav className="flex-1 overflow-y-auto p-4">
                    <ul className="space-y-3">
                        {navItems.map((item) => {
                            const Icon = iconMap[item.icon];
                            const isActive = pathname === item.path;
                            return (
                                <li key={item.id}>
                                    <Link
                                        href={item.path}
                                        className={`flex items-center justify-between px-4 py-2 rounded-lg transition-all
                                        ${isActive
                                                ? 'bg-(--color-primary) text-white shadow-sm'
                                                : 'text-(--color-gray) hover:bg-(--color-light-gray) hover:text-(--color-dark)'} `}
                                    >
                                        <div className="flex items-center space-x-3">
                                            <Icon className="w-5 h-5" />
                                            <span className="font-medium text-sm">{item.label}</span>
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

export default DashboardMobileSidebar;