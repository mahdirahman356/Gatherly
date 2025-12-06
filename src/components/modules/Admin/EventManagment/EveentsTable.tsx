"use client";

import ManagementTable from "@/components/shared/ManagementTable";
import { useRouter } from "next/navigation";
import { useState, useTransition } from "react";
import { IUser } from "@/types/user.interface";
import { toast } from "sonner";
import { deleteUser } from "@/services/admin/usersManagement";
import DeleteConfirmationDialog from "@/components/shared/DeleteConfirmationDialog";
import UpdateUserDialog from "@/components/shared/UpdateUserDialog";
import { eventsColumns } from "./eventsColumns";
import { IEvent } from "@/types/event.interface";
import { deleteEvent } from "@/services/admin/eventsManagement";
import UpdateEventDialog from "./UpdateEventDialog";

interface UserTableProps {
    events: IEvent[];
}

export default function EventTable({
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

    return (
        <>
            <ManagementTable
                data={events}
                columns={eventsColumns}
                onEdit={handleEditClick}
                onView={handleView}
                onDelete={handleDelete}
            />

            {/* Change Status Dialog */}
            {updatingEvent && (
                <UpdateEventDialog
                    event={updatingEvent}
                    isOpen={!!updatingEvent}
                    onClose={() => {
                        setUpdatingEvent(null);
                        router.refresh();
                    }}
                />
            )}

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