/* eslint-disable @typescript-eslint/no-explicit-any */
import { Column } from "@/components/shared/ManagementTable";
import Image from "next/image";
import { format } from "date-fns";
import { IEvent } from "@/types/event.interface";

export const statusStyles: Record<string, { text: string; bg: string }> = {
    open: {
        text: "text-emerald-600",
        bg: "bg-emerald-100/60",
    },
    full: {
        text: "text-yellow-600",
        bg: "bg-yellow-100/60",
    },
    cancelled: {
        text: "text-red-600",
        bg: "bg-red-100/60",
    },
    completed: {
        text: "text-gray-600",
        bg: "bg-gray-200/60",
    },
};


export const eventsColumns: Column<IEvent>[] = [
  {
    key: "image",
    label: "Event",
    render: (row: any) => (
      <div className="flex items-center gap-x-2">
        <div className="h-12 w-12 rounded-lg overflow-hidden bg-gray-100 flex items-center justify-center">
          <Image
            src={row.image}
            alt={row.title}
            width={48}
            height={48}
            className="object-cover w-12 h-12"
          />
        </div>
        <div>
          <h2 className="text-sm font-medium text-gray-800"> {row.title.length > 25 ? row.title.slice(0, 25) + "..." : row.title}</h2>
          <p className="text-xs font-normal text-gray-600">{row.type}</p>
        </div>
      </div>
    ),
  },
  {
    key: "host",
    label: "Host",
    render: (row: any) => (
      <div className="flex items-center gap-x-2">
        <div className="h-8 w-8 rounded-full overflow-hidden bg-gray-100 flex items-center justify-center">
          {row.host.profile.image ? (
            <Image
              src={row.host.profile.image}
              alt={row.host.profile.fullName}
              width={32}
              height={32}
              className="object-cover w-8 h-8 rounded-full"
            />
          ) : (
            <span className="text-sm font-semibold text-primary">
              {row.host.email.charAt(0).toUpperCase()}
            </span>
          )}
        </div>
        <div>
          <p className="text-sm font-medium text-gray-800">
            {row.host.profile.fullName}
          </p>
          <p className="text-xs font-normal text-gray-600">{row.host.email}</p>
        </div>
      </div>
    ),
  },
  {
    key: "location",
    label: "Location",
    render: (row: any) => <p className="text-sm">{row.location}</p>,
  },
  {
    key: "date",
    label: "Date & Time",
    render: (row: any) => (
      <div className="text-sm flex">
        <p>
          {format(
            new Date(row.date),
            "MMM d, yyyy"
          )}
          {"-"}
        </p>
        <p>
          {format(new Date(row.date), "h:mm a")}
        </p>
      </div>
    ),
  },
  {
    key: "joiningFee",
    label: "Joining Fee",
    render: (row: any) => <p className="text-sm">{row.joiningFee}TK</p>,
  },
  {
    key: "status",
    label: "Status",
    render: (row: any) => {
      const status = row.status?.toLowerCase() || "open";
      const currentStatus = statusStyles[status] || statusStyles.active;

      return (
        <div className="flex items-center gap-x-2">
          <p className={`px-3 py-1 text-xs ${currentStatus.text} rounded-full ${currentStatus.bg}`}>
            {status.charAt(0).toUpperCase() + status.slice(1)}
          </p>
        </div>
      );
    },
  },
];
