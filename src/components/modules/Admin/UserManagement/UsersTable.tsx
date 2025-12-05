"use client";

import ManagementTable from "@/components/shared/ManagementTable";
import { useRouter } from "next/navigation";
import { useState, useTransition } from "react";
import { IUser } from "@/types/user.interface";
import { usersColumns } from "./usersColumns";
import { toast } from "sonner";
import { deleteUser } from "@/services/admin/usersManagement";
import DeleteConfirmationDialog from "@/components/shared/DeleteConfirmationDialog";
import UpdateUserDialog from "./UpdateUserDialog";

interface UserTableProps {
    users: IUser[];
}

export default function UserTable({
    users = [],
}: UserTableProps) {
    const router = useRouter();
    const [updatingUser, setUpdatingUser] = useState<IUser | null>(null);
    const [deletingUser, setDeletingUser] = useState<IUser | null>(null);
    const [isDeleting, setIsDeleting] = useState(false);
    const [, startTransition] = useTransition();

    const handleRefresh = () => {
        startTransition(() => {
            router.refresh();
        });
    };

    const handleEditClick = (user: IUser) => {
        setUpdatingUser(user);
    };

    const handleView = (user: IUser) => {
         router.push(`/profile/${user.id}`)
    }

    const handleDelete = (schedule: IUser) => {
        setDeletingUser(schedule);
    };

    const confirmDelete = async () => {
        if (!deletingUser) return;

        setIsDeleting(true);
        const result = await deleteUser(deletingUser.id);
        setIsDeleting(false);

        if (result.success) {
            toast.success(result.message || "Schedule deleted successfully");
            setDeletingUser(null);
            handleRefresh();
        } else {
            toast.error(result.message || "Failed to delete schedule");
        }
    };

    return (
        <>
            <ManagementTable
                data={users}
                columns={usersColumns}
                onEdit={handleEditClick}
                onView={handleView}
                onDelete={handleDelete}
            />

            {/* Change Status Dialog */}
            {updatingUser && (
                <UpdateUserDialog
                    user={updatingUser}
                    isOpen={!!updatingUser}
                    onClose={() => {
                        setUpdatingUser(null);
                        router.refresh();
                    }}
                />
            )}

            {/* Delete Confirmation Dialog */}
            <DeleteConfirmationDialog
                open={!!deletingUser}
                onOpenChange={(open) => !open && setDeletingUser(null)}
                onConfirm={confirmDelete}
                title="Delete User"
                description="Are you sure you want to delete this user? This action cannot be undone."
                isDeleting={isDeleting}
            />
        </>
    );
}