/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import ManagementTable, { Column } from '@/components/shared/ManagementTable'
import { Button } from '@/components/ui/button'
import { IUser } from '@/types/user.interface'

const ManageUserPage = () => {
    const usersData = [
        {
            id: 1,
            name: 'Sarah Mitchell',
            email: 'sarah@example.com',
            joinDate: 'Jan 15, 2023',
            eventsJoined: 156,
            eventsHosted: 23,
            location: "Dhaka, Uttora",
            status: 'Active',
            role: 'Host',
        },
        {
            id: 2,
            name: 'Marcus Chen',
            email: 'marcus@example.com',
            joinDate: 'Feb 20, 2023',
            eventsJoined: 89,
            eventsHosted: 15,
            location: "Sylhet, Bondor",
            status: 'Active',
            role: 'Host',
        },
        {
            id: 3,
            name: 'Emily Rodriguez',
            email: 'emily@example.com',
            joinDate: 'Mar 10, 2023',
            eventsJoined: 124,
            eventsHosted: 0,
            location: "Dhaka, Mirpur",
            status: 'Active',
            role: 'User',
        },
        {
            id: 4,
            name: 'David Park',
            email: 'david@example.com',
            joinDate: 'Apr 5, 2023',
            eventsJoined: 67,
            eventsHosted: 18,
            location: "Dhaka, Mohammodpur",
            status: 'Active',
            role: 'Host',
        },
        {
            id: 5,
            name: 'Lisa Thompson',
            email: 'lisa@example.com',
            joinDate: 'May 12, 2023',
            eventsJoined: 92,
            eventsHosted: 8,
            location: "Dhaka, Mohammodpur",
            status: 'Active',
            role: 'Host',
        },
        {
            id: 6,
            name: 'John Suspended',
            email: 'john@example.com',
            joinDate: 'Jun 8, 2023',
            eventsJoined: 12,
            eventsHosted: 0,
            location: "Dhaka, Mohammodpur",
            status: 'Suspended',
            role: 'User',
        },
        {
            id: 7,
            name: 'Alex Johnson',
            email: 'alex@example.com',
            joinDate: 'Jul 22, 2023',
            eventsJoined: 45,
            eventsHosted: 0,
            location: "Dhaka, Mohammodpur",
            status: 'Active',
            role: 'User',
        },
        {
            id: 8,
            name: 'Maria Garcia',
            email: 'maria@example.com',
            joinDate: 'Aug 15, 2023',
            eventsJoined: 78,
            eventsHosted: 0,
            location: "Dhaka, Mohammodpur",
            status: 'Active',
            role: 'User',
        },
    ]
    const columns: Column<IUser>[] = [
        {
            key: 'name',
            label: 'Name',
            render: (row: any) => (
                <div className="flex items-center gap-x-2">
                    <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                        <span className="text-sm font-semibold text-primary">
                            {row.email.charAt(0).toUpperCase()}
                        </span>
                    </div>
                    <div>
                        <h2 className="text-sm font-medium text-gray-800">
                            {row.name}
                        </h2>
                        <p className="text-xs font-normal text-gray-600">
                            {row.email}
                        </p>
                    </div>
                </div>
            ),
        },
        {
            key: 'location',
            label: 'Location',
        },
        {
            key: 'joinDate',
            label: 'Join Date',
        },
        {
            key: 'eventsJoined',
            label: 'Events Joined',
        },
        {
            key: 'eventsHosted',
            label: 'Events Hosted',
        },
        {
            key: 'status',
            label: 'Status',
        },
        {
            key: 'role',
            label: 'Role',
        }
    ]
    return (
        <div className="space-y-6">
            {/* Users Table */}
            <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                <div className="p-6 border-b border-gray-200 flex justify-between items-center">
                    <h3 className="text-lg font-bold text-(--color-dark)">
                        User Management
                    </h3>
                    <Button variant="outline" size="sm">
                        Export Data
                    </Button>
                </div>
                <ManagementTable columns={columns} data={usersData} />
            </div>
        </div>
    )
}

export default ManageUserPage
