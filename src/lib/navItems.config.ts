import { UserRole } from "@/types/user.interface";

const publicNavItems = [
    { href: "/", label: "Home" },
    { href: "/events", label: "Explore Events" },
    { href: "/become-host", label: "Become Host" },
];
const userNavItems = [
    { href: "/", label: "Home" },
    { href: "/events", label: "Explore Events" },
    { href: "/dashboard/upcoming", label: "My Events" },
    { href: "/profile", label: "Profile" },
];
const hostNavItems = [
    { href: "/", label: "Home" },
    { href: "/events", label: "Explore Events" },
    { href: "/host/dashboard/events", label: "Create Event" },
    { href: "/profile", label: "Profile" },
];

const adminNavItems = [
    { href: "/", label: "Home" },
    { href: "/admin/dashboard/users", label: "Manage Users" },
    { href: "/admin/dashboard/hosts", label: "Manage Hosts" },
    { href: "/admin/dashboard/events", label: "Manage Events" },
    { href: "/profile", label: "Profile" },
    { href: "/admin/dashboard", label: "Admin Dashboard" },
];

export const getNavItemsByRole  = (role: UserRole) => {
    switch (role) {
        case "ADMIN":
            return [...adminNavItems];
        case "HOST":
            return [...hostNavItems];
        case "USER":
            return [...userNavItems];
        default:
            return [...publicNavItems]
    }
}
