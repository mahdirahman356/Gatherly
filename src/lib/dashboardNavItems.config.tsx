
import { DashboardNavItem } from "@/types/dashboard.interface";
import { UserRole } from "@/types/user.interface";


const userDashboardNavItems: DashboardNavItem[] = [
    {
      id: 'overview',
      label: 'Overview',
      icon: "dashboard",
      path: '/dashboard',
    },
    {
      id: 'upcoming',
      label: 'Upcoming',
      icon: "calendar",
      path: '/dashboard/upcoming',
    },
    {
      id: 'past',
      label: 'Past Events',
      icon: "history",
      path: '/dashboard/past',
    },
    {
      id: 'saved',
      label: 'Saved Events',
      icon: "bookmark",
      path: '/dashboard/saved',
    },
    {
      id: 'settings',
      label: 'Settings',
      icon: "settings",
      path: '/dashboard/settings',
    },
]
const hostDashboardNavItems: DashboardNavItem[] = [
     {
      id: 'overview',
      label: 'Overview',
      icon: "dashboard",
      path: '/host/dashboard',
    },
    {
      id: 'events',
      label: 'My Events',
      icon: "calendar",
      path: '/host/dashboard/events',
    },
    {
      id: 'participants',
      label: 'Participants',
      icon: "users",
      path: '/host/dashboard/participants',
    },
    {
      id: 'revenue',
      label: 'Revenue',
      icon: "dollar",
      path: '/host/dashboard/revenue',
    },
    {
      id: 'analytics',
      label: 'Analytics',
      icon: "analytics",
      path: '/host/dashboard/analytics',
    },
    {
      id: 'settings',
      label: 'Settings',
      icon: "settings",
      path: '/dashboard/settings',
    },
]
const adminDashboardNavItems: DashboardNavItem[] = [
  {
      id: 'overview',
      label: 'Overview',
      icon: "dashboard",
      path: '/admin/dashboard',
    },
    {
      id: 'users',
      label: 'Manage Users',
      icon: "users",
      path: '/admin/dashboard/users',
    },
    {
      id: 'hosts',
      label: 'Manage Hosts',
      icon: "shield",
      path: '/admin/dashboard/hosts',
    },
    {
      id: 'events',
      label: 'Manage Events',
      icon: "calendar",
      path: '/admin/dashboard/events',
    },
    {
      id: 'pandings',
      label: 'Pending Hosts',
      icon: "inbox",
      path: '/admin/dashboard/pending-hosts',
    },
    {
      id: 'reports',
      label: 'Reports',
      icon: "analytics",
      path: '/admin/dashboard/reports',
    },
    {
      id: 'settings',
      label: 'Settings',
      icon: "settings",
      path: '/admin/dashboard/settings',
    },
]


export const getDashboardNavItemsByRole  = (role: UserRole) => {
    switch (role) {
        case "USER":
            return [...userDashboardNavItems];
        case "HOST":
            return [...hostDashboardNavItems];
        case "ADMIN":
            return [...adminDashboardNavItems];
        default:
            return []
    }
}