"use client"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table'

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Button } from '../ui/button';
import { Edit, Eye, MoreHorizontal, Trash } from 'lucide-react';

export type Column<T> = {
    key: keyof T
    label: string
    render?: keyof T | ((row: T) => React.ReactNode);
}

interface ManagementTableProps<T> {
    data: T[];
    columns: Column<T>[],
    onEdit?: (row: T) => void;
    onDelete?: (row: T) => void;
    onView?: (row: T) => void;
}

function ManagementTable<T>({
    data = [], columns = [], onEdit, onDelete, onView,
}: ManagementTableProps<T>) {
    console.log("data:", data)
    const hasActions = onEdit || onDelete || onView
    return (
        <div className="overflow-x-auto">
            <Table>
                <TableHeader>
                    <TableRow>
                        {columns.map((column, index) => (
                            <TableHead key={index}
                                className="px-6 py-4 text-left text-sm font-semibold text-(--color-dark)">
                                {column.label}
                            </TableHead>
                        ))}
                        {hasActions && (
                            <TableHead className="w-[70px]">Actions</TableHead>
                        )}
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {data.length === 0 ? (
                        <div className="text-center py-12 text-(--color-gray)">
                            No data available
                        </div>
                    ) : (
                        data.map((row, rowIndex) => (
                            <TableRow key={rowIndex}>
                                {columns.map((column, index) => (
                                    <TableCell key={index}
                                        className="px-6 py-4 text-sm text-(--color-gray)"
                                    >
                                        {typeof column.render === "function"
                                            ? column.render(row)
                                            : String(row[column.key])}
                                    </TableCell>

                                ))}
                                {hasActions && (
                                    <TableCell>
                                        <DropdownMenu>
                                            <DropdownMenuTrigger asChild>
                                                <Button variant="ghost" size="icon">
                                                    <MoreHorizontal className="h-4 w-4" />
                                                </Button>
                                            </DropdownMenuTrigger>
                                            <DropdownMenuContent align="end">
                                                {onView && (
                                                    <DropdownMenuItem onClick={() => onView(row)}>
                                                        <Eye className="h-4 w-4" />
                                                        View
                                                    </DropdownMenuItem>
                                                )}
                                                {onEdit && (
                                                    <DropdownMenuItem onClick={() => onEdit(row)}>
                                                        <Edit className="h-4 w-4" />
                                                        Edit
                                                    </DropdownMenuItem>
                                                )}
                                                {onDelete && (
                                                    <DropdownMenuItem
                                                        onClick={() => onDelete(row)}
                                                        className="text-destructive"
                                                    >
                                                        <Trash className="h-4 w-4 text-destructive" />
                                                        Delete
                                                    </DropdownMenuItem>
                                                )}
                                            </DropdownMenuContent>
                                        </DropdownMenu>
                                    </TableCell>
                                )}
                            </TableRow>

                        ))
                    )}
                </TableBody>
            </Table>
        </div>
    );
};

export default ManagementTable;