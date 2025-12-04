"use client"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table'

export type Column<T> = {
    key: keyof T
    label: string
    render?: keyof T | ((row: T) => React.ReactNode);
}

interface ManagementTableProps<T> {
    data: T[];
    columns: Column<T>[];
}

function ManagementTable<T>({
    data = [], columns = []
}: ManagementTableProps<T>) {
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
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {data.length === 0 ? (
                                <div className="text-center py-12 text-(--color-gray)">
                                    No data available
                                </div>
                            ) : (
                                data?.map((row, rowIndex) => (
                                    <TableRow key={rowIndex}>
                                        {columns.map((column, index) => (
                                            <TableCell key={index}
                                                className="px-6 py-4 text-sm text-(--color-gray)"
                                            >
                                                {column.render
                                                    ? column.render(row)
                                                    : row[column.key]}
                                            </TableCell>
                                        ))}
                                    </TableRow>
                                ))
                            )}
                        </TableBody>
                    </Table>
                </div>
    );
};

export default ManagementTable;