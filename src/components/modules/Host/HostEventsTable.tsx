"use client";

import ManagementTable from "@/components/shared/ManagementTable";
import { useRouter } from "next/navigation";
import { useState, useTransition } from "react";
import { toast } from "sonner";
import DeleteConfirmationDialog from "@/components/shared/DeleteConfirmationDialog";
import { IEvent } from "@/types/event.interface";
import { deleteEvent } from "@/services/admin/eventsManagement";
import { hostEventsColumns } from "./hostEventsColumns";
import HostFormDialog from "./HostFormDialog";
// import UpdateEventDialog from "./UpdateEventDialog";

interface UserTableProps {
    events: IEvent[];
}

export default function HostEventsTable({
    events = [],
}: UserTableProps) {
    const router = useRouter();
    const [updatingEvent, setUpdatingEvent] = useState<IEvent | null>(null);
    const [deletingEvent, setDeletingEvent] = useState<IEvent | null>(null);
    const [isDeleting, setIsDeleting] = useState(false);
    const [, startTransition] = useTransition();

    const handleRefresh = () => {
        startTransition(() => {
            router.refresh();
        });
    };

    const handleEditClick = (event: IEvent) => {
        setUpdatingEvent(event);
    };

    const handleView = (event: IEvent) => {
        router.push(`/events/${event.id}`)
    }

    const handleDelete = (event: IEvent) => {
        setDeletingEvent(event);
    };

    const confirmDelete = async () => {
        if (!deletingEvent) return;

        setIsDeleting(true);
        const result = await deleteEvent(deletingEvent.id);
        setIsDeleting(false);

        if (result.success) {
            toast.success(result.message || "Event deleted successfully");
            setDeletingEvent(null);
            handleRefresh();
        } else {
            toast.error(result.message || "Failed to delete event");
        }
    };

    console.log("updatingEvent", updatingEvent)

    return (
        <>
            <ManagementTable
                data={events}
                columns={hostEventsColumns}
                onEdit={handleEditClick}
                onView={handleView}
                onDelete={handleDelete}
            />

            {/* Change Status Dialog */}
            {/* {updatingEvent && (
                <UpdateEventDialog
                    event={updatingEvent}
                    isOpen={!!updatingEvent}
                    onClose={() => {
                        setUpdatingEvent(null);
                        router.refresh();
                    }}
                />
            )} */}

            <HostFormDialog
                open={!!updatingEvent}
                onClose={() => setUpdatingEvent(null)}
                onSuccess={() => {
                    setUpdatingEvent(null);
                    handleRefresh();
                }}
                event={updatingEvent}
            />

            {/* Delete Confirmation Dialog */}
            <DeleteConfirmationDialog
                open={!!deletingEvent}
                onOpenChange={(open) => !open && setDeletingEvent(null)}
                onConfirm={confirmDelete}
                title="Delete Event"
                description="Are you sure you want to delete this event? This action cannot be undone."
                isDeleting={isDeleting}
            />
        </>
    );
}