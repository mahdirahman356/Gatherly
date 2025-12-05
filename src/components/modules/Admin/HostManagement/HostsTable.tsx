"use client";

import ManagementTable from "@/components/shared/ManagementTable";
import { useRouter } from "next/navigation";
import { useState, useTransition } from "react";
import { IUser } from "@/types/user.interface";
// import { usersColumns } from "./usersColumns";
import { toast } from "sonner";
import { deleteUser } from "@/services/admin/usersManagement";
import DeleteConfirmationDialog from "@/components/shared/DeleteConfirmationDialog";
import { hostsColumns } from "./hostColumns";
import UpdateUserDialog from "../UserManagement/UpdateUserDialog";
// import UpdateUserDialog from "./UpdateUserDialog";

interface UserTableProps {
    hosts: IUser[];
}

export default function HostTable({
    hosts = [],
}: UserTableProps) {
    const router = useRouter();
    const [updatingHost, setUpdatingHost] = useState<IUser | null>(null);
    const [, startTransition] = useTransition();

    // const handleRefresh = () => {
    //     startTransition(() => {
    //         router.refresh();
    //     });
    // };

    const handleEditClick = (user: IUser) => {
        setUpdatingHost(user);
    };

    const handleView = (user: IUser) => {
        router.push(`/profile/${user.id}`)
    }

    return (
        <>
            <ManagementTable
                data={hosts}
                columns={hostsColumns}
                onEdit={handleEditClick}
                onView={handleView}
            />

            {/* Change Status Dialog */}
            {updatingHost && (
                <UpdateUserDialog
                    user={updatingHost}
                    isOpen={!!updatingHost}
                    onClose={() => {
                        setUpdatingHost(null);
                        router.refresh();
                    }}
                />
            )}

        </>
    );
}