"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Column } from "@/components/shared/ManagementTable";
import { IHostRequest } from "@/types/user.interface";
import { format } from "date-fns";
import Image from "next/image";

export const pendingHostsColumns: Column<IHostRequest>[] = [
    {
        key: 'user',
        label: 'Profile',
        render: (row: any) => (
            <div className="flex items-center gap-x-2">
                <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                    {row?.user?.profile?.image ? (
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
                        {row?.user?.profile?.fullName.charAt(0).toUpperCase()}
                    </span>}

                </div>
                <div>
                    <h2 className="text-sm font-medium text-gray-800">
                        {row?.user?.profile?.fullName}
                    </h2>
                    <p className="text-xs font-normal text-gray-600">
                        {row?.user?.email}
                    </p>
                </div>
            </div>
        ),
    },
    {
        key: 'createdAt',
        label: 'Requested At',
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
        key: 'status',
        label: 'Status',
        render: (row: any) => (
            <div className="flex items-center gap-x-2">
                <p className="px-3 py-1 text-xs text-indigo-500 rounded-full dark:bg-gray-800 bg-indigo-100/60">
                    {row?.status?.charAt(0).toUpperCase() + row?.status?.slice(1).toLowerCase()}
                </p>
            </div>
        ),
    },
]