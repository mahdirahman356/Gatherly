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
import { changeUserRole, changeUserStatus } from "@/services/admin/usersManagement";
import { IUser, UserRole, UserStatus } from "@/types/user.interface";
import { Loader2 } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

interface ChangeUserRoleDialogProps {
    user: IUser;
    isOpen: boolean;
    onClose: () => void;
}

export default function UpdateUserDialog({
    user,
    isOpen,
    onClose,
}: ChangeUserRoleDialogProps) {
    const [newRole, setNewRole] = useState<UserRole>(user.role);
    const [newStatus, setNewStatus] = useState<UserStatus>(user.status);

    const [isSubmitting, setIsSubmitting] = useState(false);

    const roleOptions = [
        { value: "USER", label: "User" },
        { value: "HOST", label: "Host" },
        { value: "ADMIN", label: "Admin" },
    ];

    const statusOptions = [
        { value: "ACTIVE", label: "Active" },
        { value: "INACTIVE", label: "Inactive" },
        { value: "BLOCKED", label: "Blocked" },
    ];

    const handleSubmit = async () => {
        const isRoleChanged = newRole !== user.role;
        const isStatusChanged = newStatus !== user.status;

        if (!isRoleChanged && !isStatusChanged) {
            toast.info("No changes made");
            onClose();
            return;
        }

        setIsSubmitting(true);

        try {
            if (isRoleChanged) {
                await changeUserRole(user.id, newRole);
            }

            if (isStatusChanged) {
                await changeUserStatus(user.id, newStatus);
            }
            toast.success("User updated successfully")
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
                    <DialogTitle>Change user role and status</DialogTitle>
                    <DialogDescription>
                        Update the role or status for {user.profile.fullName}
                    </DialogDescription>
                </DialogHeader>

                <div className="space-y-4 py-4">
                    {/* Current Role */}
                    <div className="space-y-2">
                        <Label>Current Role</Label>
                        <p className="px-3 py-1 text-xs rounded-full bg-indigo-100 text-indigo-600 w-fit">
                            {user.role}
                        </p>
                    </div>

                    {/* Change Role */}
                    <div className="space-y-2">
                        <Label>Change Role</Label>
                        <Select
                            value={newRole}
                            onValueChange={(value) => setNewRole(value as UserRole)}
                            disabled={isSubmitting}
                        >
                            <SelectTrigger className="w-full">
                                <SelectValue placeholder="Select role" />
                            </SelectTrigger>
                            <SelectContent>
                                {roleOptions.map((option) => (
                                    <SelectItem key={option.value} value={option.value}>
                                        {option.label}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>

                    {/* Current Status */}
                    <div className="space-y-2">
                        <Label>Current Status</Label>
                        <p className="px-3 py-1 text-xs rounded-full bg-emerald-100 text-emerald-600 w-fit">
                            {user.status}
                        </p>
                    </div>

                    {/* Change Status */}
                    <div className="space-y-2">
                        <Label>Change Status</Label>
                        <Select
                            value={newStatus}
                            onValueChange={(value) => setNewStatus(value as UserStatus)}
                            disabled={isSubmitting}
                        >
                            <SelectTrigger className="w-full">
                                <SelectValue placeholder="Select status" />
                            </SelectTrigger>
                            <SelectContent>
                                {statusOptions.map((option) => (
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