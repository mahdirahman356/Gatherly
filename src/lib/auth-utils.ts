import { UserRole } from "@/types/user.interface"

export type RouteConfig = {
    exact: string[],
    patterns: RegExp[]
}

export const authRoutes = ["/login", "/register", "/forgot-password"]
export const commonProtectedRoutes: RouteConfig = {
    exact: ["/profile"],
    patterns: []
}
export const userProtectedRoutes: RouteConfig = {
    patterns: [/^\/dashboard/],
    exact: [],
}

export const hostProtectedRoutes: RouteConfig = {
    patterns: [/^\/host/],
    exact: [],
}

export const adminProtectedRoutes: RouteConfig = {
    patterns: [/^\/admin/],
    exact: [],
}


export const isAuthRoute = (pathname: string) => {
    return authRoutes.some((route: string) => route === pathname)
}

export const isRouteMatches = (pathname: string, routes: RouteConfig) => {
    if (routes.exact.includes(pathname)) {
        return true
    }

    return routes.patterns.some((pattern: RegExp) => pattern.test(pathname))
}


export const getRouteOwner = (pathname: string): "ADMIN" | "USER" | "HOST" | "COMMON" | null => {
    if (isRouteMatches(pathname, userProtectedRoutes)) {
        return "USER";
    }
    if (isRouteMatches(pathname, hostProtectedRoutes)) {
        return "HOST";
    }
    if (isRouteMatches(pathname, adminProtectedRoutes)) {
        return "ADMIN";
    }
    if (isRouteMatches(pathname, commonProtectedRoutes)) {
        return "COMMON";
    }
    return null;
}

export const getDefaultDashboardRoute = (role: UserRole): string => {
    if (role === "ADMIN") {
        return "/admin/dashboard";
    }
    if (role === "HOST") {
        return "/host/dashboard";
    }
    if (role === "USER") {
        return "/dashboard";
    }
    return "/";
}

export const isValidRedirectForRole = (redirectPath: string, role: UserRole) => {

    const routerOwner = getRouteOwner(redirectPath)
    if (routerOwner === null || routerOwner === "COMMON") {
        return true
    }

    if(routerOwner === role){
        return true
    }

    return false

}