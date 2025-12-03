import { UserRole } from "@/types/user.interface";

const publicNavItems = [
    { href: "/", label: "Home" },
    { href: "/events", label: "Explore Events" },
    { href: "/become-host", label: "Become Host" },
];
const userNavItems = [
    { href: "/", label: "Home" },
    { href: "/events", label: "Explore Events" },
    { href: "/my-events", label: "My Events" },
    { href: "/profile", label: "Profile" },
];
const hostNavItems = [
    { href: "/", label: "Home" },
    { href: "/events", label: "Explore Events" },
    { href: "/my-events", label: "My Events" },
    { href: "/create-event", label: "Create Event" },
    { href: "/profile", label: "Profile" },
];

const adminNavItems = [
    { href: "/", label: "Home" },
    { href: "/manage-users", label: "Manage Users" },
    { href: "/manage-hosts", label: "Manage Hosts" },
    { href: "/manage-events", label: "Manage Events" },
    { href: "/profile", label: "Profile" },
    { href: "admin/dashboard", label: "Admin Dashboard" },
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
