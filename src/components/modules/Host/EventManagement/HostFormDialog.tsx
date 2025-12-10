/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import { Field, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { useActionState, useEffect, useRef, useState } from "react";
import InputFieldError from "@/components/shared/InputFieldError";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { IEvent } from "@/types/event.interface";
import { Textarea } from "@/components/ui/textarea";
import { createEvent, updateEvent } from "@/services/host/eventManagement";
import { format } from "date-fns";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";


interface IHostFormDialogProps {
    open: boolean;
    onClose: () => void;
    onSuccess: () => void;
    event?: IEvent | null;
}

const HostFormDialog = ({
    open,
    onClose,
    onSuccess,
    event,
}: IHostFormDialogProps) => {

    const isEdit = !!event;
    console.log("event", event)
    const [state, formAction, isPending] = useActionState(
        isEdit ? updateEvent.bind(null, event.id!) : createEvent,
        { message: null }
    );

    const formRef = useRef<HTMLFormElement>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const [selectedFile, setSelectedFile] = useState<File | null>(null);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0]
        setSelectedFile(file || null)
    }

    const handleClose = () => {
        if (fileInputRef.current) {
            fileInputRef.current.value = "";
        }
        if (selectedFile) {
            setSelectedFile(null);
        }
        formRef.current?.reset();
        onClose();
    };

    const prevStateRef = useRef<any>(null);

    useEffect(() => {
        if (state && state !== prevStateRef.current) {
            if (state.success) {
                toast.success(state.message);

                if (formRef.current) {
                    formRef.current.reset();
                }

                onSuccess();
                onClose();
            } else if (!state.success) {
                toast.error(state.message);

                if (selectedFile && fileInputRef.current) {
                    const dataTransfer = new DataTransfer();
                    dataTransfer.items.add(selectedFile);
                    fileInputRef.current.files = dataTransfer.files;
                }
            }

            // ✅ Save current state as previous
            prevStateRef.current = state;
        }
    }, [state, onSuccess, onClose, selectedFile]);

    return (
        <Dialog open={open} onOpenChange={handleClose}>
            <DialogContent className="max-h-[90vh] flex flex-col p-0">
                <DialogHeader className="px-6 pt-6 pb-4">
                    <DialogTitle>{isEdit ? "Edit Event" : "Add New Event"}</DialogTitle>
                </DialogHeader>

                <form action={formAction} ref={formRef} className="p-6 space-y-6 overflow-y-auto">
                    {isEdit && <>
                        <Field>
                            <FieldLabel htmlFor="status">Status</FieldLabel>
                            <Select name="status" defaultValue={event?.status}>
                                <SelectTrigger>
                                    <SelectValue placeholder="Select status" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="OPEN">Open</SelectItem>
                                    <SelectItem value="FULL">Full</SelectItem>
                                    <SelectItem value="CANCELLED">Cancelled</SelectItem>
                                    <SelectItem value="COMPLETED">Completed</SelectItem>
                                </SelectContent>
                            </Select>
                            <InputFieldError state={state} field="status" />
                        </Field>
                    </>}
                    {/* Title */}
                    <Field >
                        <FieldLabel>Title</FieldLabel>
                        <Input
                            name="title"
                            placeholder="Title"
                            defaultValue={
                                isEdit ? event?.title : ""
                            } />
                        <InputFieldError state={state} field="title" />
                    </Field>

                    {/* Type */}
                    <Field >
                        <FieldLabel>Type</FieldLabel>
                        <Input
                            name="type"
                            placeholder="Type"
                            defaultValue={
                                isEdit ? event?.type : ""
                            } />
                        <InputFieldError state={state} field="type" />
                    </Field>

                    {/* Description */}
                    <Field >
                        <FieldLabel>Description</FieldLabel>
                        <Textarea
                            name="description"
                            placeholder="Event Description"
                            defaultValue={
                                isEdit ? event?.description : ""
                            } />
                        <InputFieldError state={state} field="description" />
                    </Field>


                    {/* Date */}
                    <Field >
                        <FieldLabel>Event Date</FieldLabel>
                        <Input
                            type="datetime-local"
                            name="date"
                            className="relative"
                            defaultValue={
                                isEdit && event?.date
                                    ? format(new Date(event.date), "yyyy-MM-dd'T'HH:mm")
                                    : ""
                            }
                        />
                        <InputFieldError state={state} field="date" />
                    </Field>

                    {/* Location */}
                    <Field >
                        <FieldLabel>Location</FieldLabel>
                        <Input
                            name="location"
                            placeholder="Event Location"
                            defaultValue={
                                isEdit ? event?.location : ""

                            } />
                        <InputFieldError state={state} field="location" />
                    </Field>

                    {/* Min Participants */}
                    <Field >
                        <FieldLabel>Min Participants</FieldLabel>
                        <Input
                            type="number"
                            name="minParticipants"
                            placeholder="Min Participants"
                            defaultValue={
                                isEdit ? event?.minParticipants : ""
                            } />
                        <InputFieldError state={state} field="minParticipants" />
                    </Field>

                    {/* Max Participants */}
                    <Field >
                        <FieldLabel>Max Participants</FieldLabel>
                        <Input
                            type="number"
                            name="maxParticipants"
                            placeholder="Max Participants"
                            defaultValue={
                                isEdit ? event?.maxParticipants : ""
                            } />
                        <InputFieldError state={state} field="maxParticipants" />

                    </Field>

                    {/* Joining Fee */}
                    <Field >
                        <FieldLabel>Joining Fee</FieldLabel>
                        <Input
                            type="number"
                            name="joiningFee"
                            placeholder="joining Fee"
                            defaultValue={
                                isEdit ? event?.joiningFee : ""
                            } />
                        <InputFieldError state={state} field="joiningFee" />
                    </Field>

                    <Field>
                        <FieldLabel htmlFor="file">Photo</FieldLabel>

                        {isEdit && event.image
                            ? <Image
                                src={event?.image}
                                alt="event-image"
                                width={50}
                                height={50}
                                className="mb-2 rounded-lg"
                            />
                            : <>
                                {selectedFile && (
                                    <Image
                                        src={
                                            (typeof selectedFile === "string"
                                                ? selectedFile
                                                : URL.createObjectURL(selectedFile))
                                        }
                                        alt="Profile Photo Preview"
                                        width={50}
                                        height={50}
                                        className="mb-2 rounded-lg"
                                    />
                                )}
                            </>}
                        <Input
                            ref={fileInputRef}
                            id="file"
                            name="file"
                            type="file"
                            accept="image/*"
                            onChange={handleFileChange}
                        />
                        <InputFieldError state={state} field="image" />
                    </Field>
                    {/* Submit Button */}
                    {isEdit
                        ? <Button type="submit" className="w-full">
                            {isPending ? "Updating..." : "Update Event"}
                        </Button>
                        : <Button type="submit" disabled={isPending}>
                            {isPending ? "Creating..." : "Create Event"}
                        </Button>}
                </form>
            </DialogContent>
        </Dialog>
    );
};

export default HostFormDialog;