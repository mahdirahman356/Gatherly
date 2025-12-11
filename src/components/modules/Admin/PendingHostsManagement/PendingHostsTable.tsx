"use client";

import ManagementTable from "@/components/shared/ManagementTable";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { IHostRequest } from "@/types/user.interface";
import { pendingHostsColumns } from "./pendingHostsColumns";
import UpdatePendingHostsDialog from "./UpdatePendingHostsDialog";

interface PendingHostsTableProps {
    hostRequests: IHostRequest[];
}

export default function PendingHostsTable({
    hostRequests = [],
}: PendingHostsTableProps) {
    const router = useRouter();
    const [updatingHostRequest, setUpdatingHostRequest] = useState<IHostRequest | null>(null);

    const handleEditClick = (hostRequest: IHostRequest) => {
        setUpdatingHostRequest(hostRequest);
    };

    const handleView = (hostRequest: IHostRequest) => {
         router.push(`/profile/${hostRequest.user.id}`)
    }


    return (
        <>
            <ManagementTable
                data={hostRequests}
                columns={pendingHostsColumns}
                onEdit={handleEditClick}
                onView={handleView}
            />

            {/* Change Status Dialog */}
            {updatingHostRequest && (
                <UpdatePendingHostsDialog
                    hostRequest={updatingHostRequest}
                    isOpen={!!updatingHostRequest}
                    onClose={() => {
                        setUpdatingHostRequest(null);
                        router.refresh();
                    }}
                />
            )}
        </>
    );
}