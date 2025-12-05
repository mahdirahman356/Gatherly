"use client";

import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { changeUserRole } from "@/services/admin/usersManagement";
import { IUser, UserRole } from "@/types/user.interface";
import { Loader2 } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

interface ChangeUserRoleDialogProps {
    user: IUser;
    isOpen: boolean;
    onClose: () => void;
}

export default function ChangeUserRoleDialog({
    user,
    isOpen,
    onClose,
}: ChangeUserRoleDialogProps) {
    const [newRole, setNewRole] = useState<UserRole>(
        user.role
    );
    const [isSubmitting, setIsSubmitting] = useState(false);

    const roleOptions = [
        { value: "USER", label: "User" },
        { value: "HOST", label: "Host" },
        { value: "ADMIN", label: "Admin" },
    ];

    const handleSubmit = async () => {
        if (newRole === user.role) {
            toast.info("No changes made");
            onClose();
            return;
        }

        setIsSubmitting(true);

        try {
            const result = await changeUserRole(user.id, newRole);

            if (result.success) {
                toast.success("User role updated successfully")
            }
        } catch (error) {
            toast.error("An error occurred while updating role");
            console.error(error);
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleClose = () => {
        if (!isSubmitting) {
            onClose();
        }
    };

    return (
        <Dialog open={isOpen} onOpenChange={(open) => !open && handleClose()}>
            <DialogContent className="max-w-md">
                <DialogHeader>
                    <DialogTitle>Change User Role</DialogTitle>
                    <DialogDescription>
                        Update the role for {user.profile.fullName}
                    </DialogDescription>
                </DialogHeader>

                <div className="space-y-4 py-4">
                    {/* Current Status */}
                    <div className="space-y-2 flex items-center gap-2">
                        <Label>Current Role</Label>
                        <div className="flex items-center gap-x-2">
                            <p className="px-3 py-1 mb-1 text-xs text-indigo-500 rounded-full dark:bg-gray-800 bg-indigo-100/60">
                                {
                                    roleOptions.find((opt) => opt.value === user.role)
                                        ?.label
                                }
                            </p>
                        </div>
                    </div>

                    {/* New Status */}
                    <div className="space-y-2">
                        <Label htmlFor="status">Change Role</Label>
                        <Select
                            value={newRole}
                            onValueChange={(value) =>
                                setNewRole(value as UserRole)
                            }
                            disabled={isSubmitting}
                        >
                            <SelectTrigger id="status" className="w-full">
                                <SelectValue placeholder="Select status" />
                            </SelectTrigger>
                            <SelectContent className="w-full">
                                {roleOptions.map((option) => (
                                    <SelectItem key={option.value} value={option.value}>
                                        {option.label}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>
                </div>

                <DialogFooter>
                    <Button
                        type="button"
                        variant="outline"
                        onClick={handleClose}
                        disabled={isSubmitting}
                    >
                        Cancel
                    </Button>
                    <Button onClick={handleSubmit} disabled={isSubmitting}>
                        {isSubmitting ? (
                            <>
                                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                Updating...
                            </>
                        ) : (
                            "Confirm Change"
                        )}
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}