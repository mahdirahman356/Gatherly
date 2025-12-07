"use client"
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Column } from "@/components/shared/ManagementTable";
import Image from "next/image";
import { IEventRevenue } from "@/types/eventRevenue.interface";
import { format } from "date-fns";

export const eventRevenueColumns: Column<IEventRevenue>[] = [
    {
        key: "eventImage",
        label: "Event",
        render: (row: any) => (
            <div className="flex items-center gap-x-2">
                <div className="h-12 w-12 rounded-lg overflow-hidden bg-gray-100 flex items-center justify-center">
                    <Image
                        src={row.eventImage}
                        alt={row.eventTitle}
                        width={48}
                        height={48}
                        className="object-cover w-12 h-12"
                    />
                </div>
                <div>
                    <h2 className="text-sm font-medium text-gray-800"> {row.eventTitle.length > 25 ? row.eventTitle.slice(0, 25) + "..." : row.eventTitle}</h2>
                    <p className="text-xs font-normal text-gray-600">{row.eventType}</p>
                </div>
            </div>
        ),
    },
    {
        key: "eventDate",
        label: "Event Date",
        render: (row: any) => (
            <div className="text-sm flex">
                <p>
                    {format(
                        new Date(row.eventDate),
                        "MMM d, yyyy"
                    )}
                    {" - "}
                </p>
                <p>
                    {format(new Date(row.eventDate), "h:mm a")}
                </p>
            </div>
        ),
    },
    {
        key: "participantsCount",
        label: "Participants",
        render: (row: any) => <p className="text-sm">{row.participantsCount}</p>,
    },

    {
        key: "pricePerPerson",
        label: "Price Per Person",
        render: (row: any) => <p className="text-sm">{row.pricePerPerson}</p>,

    },
    {
        key: "eventStatus",
        label: "Event Status",
        render: (row: any) => (
            <div className="flex items-center gap-x-2">
                <p className="px-3 py-1 text-xs text-indigo-500 rounded-full dark:bg-gray-800 bg-indigo-100/60">
                    {row?.eventStatus?.charAt(0).toUpperCase() + row?.eventStatus?.slice(1).toLowerCase()}
                </p>
            </div>
        ),
    },
    {
        key: "totalRevenue",
        label: "Total Revenue",
        render: (row: any) => <p className="text-sm">{row.totalRevenue}TK</p>,
    },
];
