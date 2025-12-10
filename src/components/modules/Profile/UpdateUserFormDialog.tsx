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
import { IUserProfile } from "@/types/user.interface";
import { updateProfile } from "@/services/profile/getMyProfile";


interface IUpdateUserFormDialogProps {
    open: boolean;
    onClose: () => void;
    onSuccess: () => void;
    profile?: IUserProfile;
}

const UpdateUserFormDialog = ({
    open,
    onClose,
    onSuccess,
    profile,
}: IUpdateUserFormDialogProps) => {

    console.log("profile", profile)
    const [state, formAction, isPending] = useActionState(
        updateProfile,
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
                    <DialogTitle>Update Your Profile</DialogTitle>
                </DialogHeader>

                <form action={formAction} ref={formRef} className="p-6 space-y-6 overflow-y-auto">

                    {/* Full Name */}
                    <Field >
                        <FieldLabel>Full Name</FieldLabel>
                        <Input
                            name="fullName"
                            placeholder="Full Name"
                            defaultValue={
                                profile ? profile?.fullName : ""
                            } />
                        <InputFieldError state={state} field="fullName" />
                    </Field>

                    {/* Bio */}
                    <Field >
                        <FieldLabel>Bio</FieldLabel>
                        <Input
                            name="bio"
                            placeholder="Bio"
                            defaultValue={
                                profile ? profile?.bio : ""
                            } />
                        <InputFieldError state={state} field="bio" />
                    </Field>

                    {/* Location */}
                    <Field >
                        <FieldLabel>location</FieldLabel>
                        <Input
                            name="location"
                            placeholder="Location"
                            defaultValue={
                                profile ? profile?.location : ""
                            } />
                        <InputFieldError state={state} field="location" />
                    </Field>


                    {/* Interests */}
                    <Field >
                        <FieldLabel>Interests</FieldLabel>
                        <Input
                            type="text"
                            name="interests"
                            placeholder="Interests"
                            defaultValue={
                                profile ? profile?.interests : ""

                            }
                        />
                        <InputFieldError state={state} field="interests" />
                    </Field>
                    <Field>
                        <FieldLabel htmlFor="file">Photo</FieldLabel>

                        {profile && profile.image
                            ? <Image
                                src={profile?.image}
                                alt="Profile Photo Preview"
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
                    <Button type="submit" className="w-full">
                        {isPending ? "Updating..." : "Update User"}
                    </Button>
                </form>
            </DialogContent>
        </Dialog>
    );
};

export default UpdateUserFormDialog;