"use client";
import { IJWTPayload } from "@/types/user.interface";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useEffect, useState } from "react";
import { DashboardNavItem } from "@/types/dashboard.interface";
import DashboardMobileSidebar from "./DashboardMobileSidebar";
import { MenuIcon } from "lucide-react";

interface DashboardNavbarContentProps {
    userInfo:  IJWTPayload;
    navItems: DashboardNavItem[];
}

const DashboardNavbarContent = ({
    userInfo,
    navItems,
}: DashboardNavbarContentProps) => {

    const [isOpen, setIsOpen] = useState(false)
    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        const checkSmallerScreen = () => {
            setIsMobile(window.innerWidth < 768)
        }
        checkSmallerScreen()
        window.addEventListener("resize", checkSmallerScreen)

        return () => {
            window.removeEventListener("resize", checkSmallerScreen)
        }

    }, [])

    return (
        <header className="sticky top-0 z-40 w-full border-b md:border-none bg-background/95 backdrop-blur">
            <div className="flex h-16 md:h-0 items-center justify-between gap-4 px-4 md:px-6">
                {/* Mobile Menu Toggle */}
                <Sheet open={isMobile && isOpen} onOpenChange={setIsOpen}>
                    <SheetTrigger asChild className="md:hidden">
                            <MenuIcon className="h-5 w-5" />
                    </SheetTrigger>
                    {/* Hide the overlay on medium and larger screens */}
                    <SheetContent side="left" className="w-64 p-0">
                        <DashboardMobileSidebar
                            userInfo={userInfo}
                            navItems={navItems}
                        />
                    </SheetContent>
                </Sheet>
            </div>
        </header>
    );
};

export default DashboardNavbarContent;