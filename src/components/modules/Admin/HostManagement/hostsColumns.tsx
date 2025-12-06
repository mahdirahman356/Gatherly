"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Column } from "@/components/shared/ManagementTable";
import { IUser } from "@/types/user.interface";
import { format } from "date-fns";
import Image from "next/image";
import { statusStyles } from "../UserManagement/usersColumns";

export const hostsColumns: Column<IUser>[] = [
    {
        key: 'profile',
        label: 'Profile',
        render: (row: any) => (
            <div className="flex items-center gap-x-2">
                <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                    {row.profile.image ? (
                        <>
                            <Image
                                src={row.profile.image}
                                alt={row.profile.fullName}
                                width={48}
                                height={48}
                                className="object-cover w-8 h-8 rounded-full"
                            />
                        </>
                    ) : <span className="text-sm font-semibold text-primary">
                        {row.email.charAt(0).toUpperCase()}
                    </span>}

                </div>
                <div>
                    <h2 className="text-sm font-medium text-gray-800">
                        {row.profile.fullName}
                    </h2>
                    <p className="text-xs font-normal text-gray-600">
                        {row.email}
                    </p>
                </div>
            </div>
        ),
    },
    {
        key: 'profile',
        label: 'Location',
        render: (row) => (
            <p className="text-sm">{row.profile.location}</p>
        ),
    },
    {
        key: 'createdAt',
        label: 'Join Date',
        render: (row) => (
            <div className="text-sm">
                <p>
                    {format(
                        new Date(row.createdAt),
                        "MMM d, yyyy"
                    )}
                </p>
            </div>
        )
    },
    {
        key: 'eventsCount',
        label: 'Total Events',
        render: (row) => (
            <p className="text-sm">{row.eventsCount}</p>
        ),
    },
    {
        key: 'status',
        label: 'Status',
        render: (row: any) => {
            const status = row?.status?.toLowerCase() || "active";
            const currentStatus = statusStyles[status] || statusStyles.active;
            return (
                <div
                    className={`inline-flex items-center gap-x-2 px-3 py-1 rounded-full dark:bg-gray-800 ${currentStatus.bg}`}
                >
                    <span
                        className={`h-1.5 w-1.5 rounded-full ${currentStatus.dot}`}
                    ></span>

                    <p className={`font-normal text-xs ${currentStatus.text}`}>
                        {status.charAt(0).toUpperCase() + status.slice(1)}
                    </p>
                </div>
            )
        }
    },
    {
        key: 'role',
        label: 'Role',
        render: (row: any) => (
            <div className="flex items-center gap-x-2">
                <p className="px-3 py-1 text-xs text-indigo-500 rounded-full dark:bg-gray-800 bg-indigo-100/60">
                    {row?.role?.charAt(0).toUpperCase() + row?.role?.slice(1).toLowerCase()}
                </p>
            </div>
        ),
    },
]