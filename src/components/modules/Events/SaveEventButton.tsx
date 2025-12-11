"use client"
/* eslint-disable @typescript-eslint/no-unused-vars */

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { toggleSaveEvent } from "@/services/user/evenet.services";
import { Bookmark, BookmarkCheck, Loader2 } from "lucide-react";
import { toast } from "sonner";

interface SaveEventButtonProps {
    eventId: string;
    defaultSaved?: boolean;
}

const SaveEventButton = ({
    eventId,
    defaultSaved,
}: SaveEventButtonProps) => {
    const [isSaved, setIsSaved] = useState(defaultSaved);
    const [isLoading, setIsLoading] = useState(false);

    // IMPORTANT: Sync state if backend value changes
    useEffect(() => {
        setIsSaved(defaultSaved);
    }, [defaultSaved]);

    const handleToggleSave = async () => {
        if (isLoading) return;

        const previousState = isSaved;
        setIsSaved(!previousState);
        setIsLoading(true);

        try {
            const res = await toggleSaveEvent(eventId);

            if (!res?.success) {
                toast.error(res?.message || "Failed to update");
            }

            toast.success(res.message || "Updated successfully");
        } catch (error) {
            setIsSaved(previousState);
            toast.error("Failed to update saved status");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <Button
            aria-label="Save Event"
            disabled={isLoading}
            onClick={handleToggleSave}
            className="mt-3.5 bg-gray-100 hover:bg-gray-200 shadow-2xl rounded-full"
            size="icon"
        >
            {isSaved ? (
                <BookmarkCheck size={20} className="text-gray-600" />
            ) : (
                <Bookmark size={20} className="text-gray-600" />
            )}
        </Button>
    );
};

export default SaveEventButton;
