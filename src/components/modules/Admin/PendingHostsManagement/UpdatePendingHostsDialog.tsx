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
import { changeHostRequestStatus } from "@/services/admin/usersManagement";
import { HostRequestStatus, IHostRequest } from "@/types/user.interface";
import { Loader2 } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

interface UpdatePendingHostsDialogProps {
    hostRequest: IHostRequest;
    isOpen: boolean;
    onClose: () => void;
}

export default function UpdatePendingHostsDialog({
    hostRequest,
    isOpen,
    onClose,
}: UpdatePendingHostsDialogProps) {
    const [newStatus, setNewStatus] = useState<HostRequestStatus>(hostRequest.status);

    const [isSubmitting, setIsSubmitting] = useState(false);

    const statusOptions = [
        { value: "APPROVED", label: "Approved" },
        { value: "REJECTED", label: "Rejected" },
    ];



    const handleSubmit = async () => {

        if (newStatus === hostRequest.status) {
            toast.info("No changes made");
            onClose();
            return;
        }
        setIsSubmitting(true);

        try {
            const result = await changeHostRequestStatus(hostRequest.id, newStatus);
            if (result.success) {
                toast.success("Status updated successfully")

            }

        } catch (error) {
            toast.error("An error occurred while updating status");
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
                    <DialogTitle>Approve or Reject Request</DialogTitle>
                    <DialogDescription>
                        Approve or reject request for this user
                    </DialogDescription>
                </DialogHeader>

                <div className="space-y-4 py-4">
                    {/* Current status */}
                    <div className="space-y-2">
                        <Label>Current Status</Label>
                        <p className="px-3 py-1 text-xs rounded-full bg-indigo-100 text-indigo-600 w-fit">
                            {hostRequest.status}
                        </p>
                    </div>

                    {/* Change Status */}
                    <div className="space-y-2">
                        <Label>Change Status</Label>
                        <Select
                            onValueChange={(value) => setNewStatus(value as HostRequestStatus)}
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