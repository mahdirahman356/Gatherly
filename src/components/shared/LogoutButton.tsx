"use client"
import { logoutUser } from "@/services/auth/logoutUser";
import { Button } from "../ui/button";

const LogoutButton = () => {
    const handleLogout = async () => {
        await logoutUser()
    }
    return <Button variant="outline" className="bg-primary text-primary-foreground" onClick={handleLogout}>Logout</Button>
};

export default LogoutButton;