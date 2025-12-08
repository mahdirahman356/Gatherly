"use client"
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Column } from "@/components/shared/ManagementTable";
import Image from "next/image";
import { format } from "date-fns";
import { HostParticipant } from "@/types/participants.interface";

export const participantsColumns: Column<HostParticipant>[] = [
    {
        key: "event",
        label: "Event",
        render: (row: any) => (
            <div className="flex items-center gap-x-2">
                <div className="h-12 w-12 rounded-lg overflow-hidden bg-gray-100 flex items-center justify-center">
                    <Image
                        src={row.event.image}
                        alt={row.event.title}
                        width={48}
                        height={48}
                        className="object-cover w-12 h-12"
                    />
                </div>
                <div>
                    <h2 className="text-sm font-medium text-gray-800"> {row.event.title.length > 25 ? row.event.title.slice(0, 25) + "..." : row.event.title}</h2>
                    <p className="text-xs font-normal text-gray-600">{row.event.type}</p>
                </div>
            </div>
        ),
    },
    {
        key: "user",
        label: "Profile",
        render: (row: any) => (
            <div className="flex items-center gap-x-2">
                <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                    {row.user.profile.image ? (
                        <>
                            <Image
                                src={row.user.profile.image}
                                alt={row.user.profile.fullName}
                                width={48}
                                height={48}
                                className="object-cover w-8 h-8 rounded-full"
                            />
                        </>
                    ) : <span className="text-sm font-semibold text-primary">
                        {row.user.profile.fullName.charAt(0).toUpperCase()}
                    </span>}

                </div>
                <div>
                    <h2 className="text-sm font-medium text-gray-800">
                        {row.user.profile.fullName}
                    </h2>
                    <p className="text-xs font-normal text-gray-600">
                        {row.user.profile.location}
                    </p>
                </div>
            </div>
        ),
    },
    {
        key: "joinedAt",
        label: "Joined At",
        render: (row: any) => (
            <div className="text-sm flex">
                <p>
                    {format(
                        new Date(row.joinedAt),
                        "MMM d, yyyy"
                    )}
                    {" - "}
                </p>
                <p>
                    {format(new Date(row.joinedAt), "h:mm a")}
                </p>
            </div>
        ),
    },
    {
        key: "event",
        label: "Event Date",
        render: (row: any) => (
            <div className="text-sm flex">
                <p>
                    {format(
                        new Date(row.event.date),
                        "MMM d, yyyy"
                    )}
                    {" - "}
                </p>
                <p>
                    {format(new Date(row.event.date), "h:mm a")}
                </p>
            </div>
        ),
    },
    {
        key: "paymentStatus",
        label: "Payment Status",
        render: (row: any) => (
            <div className="flex items-center gap-x-2">
                <p className="px-3 py-1 text-xs text-indigo-500 rounded-full dark:bg-gray-800 bg-indigo-100/60">
                    {row?.paymentStatus?.charAt(0).toUpperCase() + row?.paymentStatus?.slice(1).toLowerCase()}
                </p>
            </div>
        ),
    },
];
