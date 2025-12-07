"use client"
import { Button } from "@/components/ui/button";
import { BadgePlus } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState, useTransition } from "react";
import HostFormDialog from "./HostFormDialog";

const HostEventsHeader = () => {
    const router = useRouter();
    const [, startTransition] = useTransition();
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [dialogKey, setDialogKey] = useState(0);


    const handleSuccess = () => {
        startTransition(() => {
            router.refresh();
        });
    };

    const handleOpenDialog = () => {
        setDialogKey((prev) => prev + 1); 
        setIsDialogOpen(true);
    };

    const handleCloseDialog = () => {
        setIsDialogOpen(false);
    };
    return (
        <div>
            <HostFormDialog
                key={dialogKey}
                open={isDialogOpen}
                onClose={handleCloseDialog}
                onSuccess={handleSuccess}
            />
            <div className="p-6 border-b flex justify-between border-gray-200">
                <h3 className="text-lg font-bold text-(--color-dark)">
                    Event Management
                </h3>
                {/* Action Button */}
                <Button onClick={handleOpenDialog}>
                    <BadgePlus />
                    Create New Event
                </Button>
            </div>
        </div>
    );
};

export default HostEventsHeader;