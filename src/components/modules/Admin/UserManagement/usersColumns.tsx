"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Column } from "@/components/shared/ManagementTable";
import { IUser } from "@/types/user.interface";
import { format } from "date-fns";

export const userscolumns: Column<IUser>[] = [
    {
        key: 'profile',
        label: 'Profile',
        render: (row: any) => (
            <div className="flex items-center gap-x-2">
                <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-sm font-semibold text-primary">
                        {row.email.charAt(0).toUpperCase()}
                    </span>
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
            <p className="font-medium">{row.profile.location}</p>
        ),
    },
    {
        key: 'createdAt',
        label: 'Join Date',
        render: (row) => (
            <div className="text-sm">
                <p className="font-medium">
                    {format(
                        new Date(row.createdAt),
                        "MMM d, yyyy"
                    )}
                </p>
            </div>
        )
    },
    {
        key: 'role',
        label: 'Role',
        render: (row: any) => (
            <div className="flex items-center gap-x-2">
                <p className="px-3 py-1 text-xs text-indigo-500 rounded-full dark:bg-gray-800 bg-indigo-100/60">
                    {row.role.charAt(0).toUpperCase() + row.role.slice(1).toLowerCase()}
                </p>
            </div>
        ),
    }
]