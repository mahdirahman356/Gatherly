"use client";

import ManagementTable from "@/components/shared/ManagementTable";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { IUser } from "@/types/user.interface";
import UpdateUserDialog from "@/components/shared/UpdateUserDialog";
import { hostsColumns } from "./hostsColumns";

interface UserTableProps {
    hosts: IUser[];
}

export default function HostTable({
    hosts = [],
}: UserTableProps) {
    const router = useRouter();
    const [updatingHost, setUpdatingHost] = useState<IUser | null>(null);

    const handleEditClick = (user: IUser) => {
        setUpdatingHost(user);
    };

    const handleView = (user: IUser) => {
        router.push(`/profile/${user.id}`)
    }

    return (
        <>
           {/* Table */}
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