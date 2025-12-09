"use client"
/* eslint-disable @typescript-eslint/no-explicit-any */
import { IEvent } from "@/types/event.interface";
import Image from "next/image";
import { MapPinIcon, CalendarIcon, ClockIcon, UsersIcon, CheckCircle2, Loader2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { format } from "date-fns";
import { useState } from "react";
import { joinEvent } from "@/services/user/evenet.services";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";


const EventDetails = ({ id, title, image, _count, date, description, host, joiningFee, location, maxParticipants, status, type, participants }: IEvent) => {
    const formattedDate = format(new Date(date), "MMM dd, yyyy");
    const formattedTime = format(new Date(date), "hh:mm a");


    const [isJoining, setIsJoining] = useState(false);

    const handleConfirmBooking = async () => {
        setIsJoining(true);

        try {
            const result = await joinEvent(id);

            if (result.success) {
                if (result.data?.paymentUrl) {
                    window.location.href = result.data.paymentUrl;
                    return;
                }
                toast.success("You have joined event successfully!");
            } else {
                setIsJoining(false);
                toast.error(result.message || "Failed to join event");
            }
        } catch (error) {
            toast.error("An error occurred while joining the event");
            console.error(error);
        } finally {
            setIsJoining(false);
        }
    };


    return (
        <div className="min-h-screen bg-(--color-light-gray)">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                    {/* ✅ LEFT SIDE — MAIN EVENT INFO */}
                    <div className="lg:col-span-2 space-y-6">

                        {/* Event Image */}
                        <div className="bg-white rounded-xl overflow-hidden shadow-sm">
                            <div className="relative h-[350px]">
                                <Image
                                    src={image}
                                    alt={title}
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute top-4 left-4">
                                    <Badge>{type}</Badge>
                                </div>
                            </div>
                        </div>

                        {/* Event Info */}
                        <div className="bg-white rounded-xl shadow-sm p-6">
                            <h1 className="text-2xl font-bold text-(--color-dark) mb-4">
                                {title}
                            </h1>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-600 mb-6">
                                <div className="flex items-center">
                                    <CalendarIcon className="w-4 h-4 mr-2" />
                                    {formattedDate}
                                </div>

                                <div className="flex items-center">
                                    <ClockIcon className="w-4 h-4 mr-2" />
                                    {formattedTime}
                                </div>

                                <div className="flex items-center">
                                    <MapPinIcon className="w-4 h-4 mr-2" />
                                    {location}
                                </div>
                                <div className="flex items-center">
                                    <UsersIcon className="w-4 h-4 mr-2" />
                                    {_count.participants}/{maxParticipants} Joined
                                </div>
                            </div>

                            {/* Description */}
                            <h3 className="font-semibold text-(--color-dark) mb-2">
                                About This Event
                            </h3>
                            <p className="text-sm text-gray-600 leading-relaxed">
                                {description}
                            </p>
                        </div>

                        {/* ✅ PARTICIPANTS LIST */}
                        <div className="bg-white rounded-xl shadow-sm p-6">
                            {_count.participants === 0
                                ? <p className="text-center my-6 text-gray-500">No participants joined yet</p>
                                : <div>
                                    <h3 className="font-semibold text-(--color-dark) mb-4">
                                        Participants ({_count.participants})
                                    </h3>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                                        {participants.map((p: any) => (
                                            <div key={p.id} className="flex items-center gap-3">
                                                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center overflow-hidden">
                                                    {p.user.profile.image ? (
                                                        <Image
                                                            src={p.user.profile.image}
                                                            alt={p.user.profile.fullName}
                                                            width={40}
                                                            height={40}
                                                            className="w-10 h-10 object-cover rounded-full"
                                                        />
                                                    ) : (
                                                        <span className="text-sm font-semibold text-primary">
                                                            {p.user.profile.fullName?.charAt(0).toUpperCase()}
                                                        </span>
                                                    )}
                                                </div>

                                                <p className="text-sm font-medium text-(--color-dark)">
                                                    {p.user.profile.fullName}
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                </div>}
                        </div>
                    </div>

                    {/* ✅ RIGHT SIDE — HOST + JOIN + FEE + STATUS IN ONE CARD */}
                    <div className="space-y-6">

                        <div className="bg-white rounded-xl shadow-sm p-6 space-y-6">

                            {/* EVENT STATUS */}
                            <div className="flex justify-between items-center">
                                <h4 className="font-semibold text-(--color-dark)">
                                    Event Status
                                </h4>

                                <span
                                    className={`px-3 py-1 text-xs rounded-full font-semibold
                                         ${status === "OPEN"
                                            ? "bg-green-100 text-green-700"
                                            : status === "FULL"
                                                ? "bg-yellow-100 text-yellow-700"
                                                : status === "CANCELLED"
                                                    ? "bg-red-100 text-red-700"
                                                    : "bg-gray-100 text-gray-700"
                                        }
                                                `}
                                >
                                    {status?.charAt(0).toUpperCase() + status?.slice(1).toLowerCase()}
                                </span>
                            </div>

                            {/* JOINING FEE */}
                            <div className="flex justify-between items-center">
                                <p className="text-sm text-gray-600">Joining Fee</p>
                                <p className="font-semibold text-(--color-dark)">
                                    {joiningFee === 0 ? "Free" : <>

                                        <span>{joiningFee}</span>{" "}
                                        <span className="text-xl mb-1">৳</span>
                                    </>}
                                </p>
                            </div>

                            {/*  PARTICIPANT COUNT */}
                            <div className="flex justify-between items-center text-sm">
                                <span className="text-gray-600">Participants</span>
                                <span className="font-semibold text-(--color-dark)">
                                    {_count.participants} / {maxParticipants}
                                </span>
                            </div>
                            {/* HOST INFO */}
                            <div>
                                <div className="flex items-center gap-3">
                                    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center overflow-hidden">
                                        {host.profile.image ? (
                                            <Image
                                                src={host.profile.image}
                                                alt={host.profile.fullName}
                                                width={48}
                                                height={48}
                                                className="object-cover w-12 h-12 rounded-full"
                                            />
                                        ) : (
                                            <span className="text-lg font-semibold text-primary">
                                                {host.profile.fullName?.charAt(0).toUpperCase()}
                                            </span>
                                        )}
                                    </div>

                                    <div>
                                        <p className="font-semibold text-(--color-dark)">
                                            {host.profile.fullName}
                                        </p>
                                        <p className="text-xs text-gray-500">
                                            Host Organizer
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* JOIN / LEAVE BUTTON */}
                            <div className="pt-4 border-t space-y-2">

                                {/* SHOW THIS IF NOT JOINED */}
                                <Button
                                    onClick={handleConfirmBooking}
                                    disabled={isJoining}
                                    className="w-full"
                                    size="lg"
                                >
                                    {isJoining ? (
                                        <>
                                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                            Joining...
                                        </>
                                    ) : (
                                        <>
                                            <CheckCircle2 className="mr-2 h-4 w-4" />
                                            Confirm & Join Event
                                        </>
                                    )}
                                </Button>
                                <p className="text-xs text-gray-500 text-center">
                                    Secure your participation now
                                </p>

                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default EventDetails;