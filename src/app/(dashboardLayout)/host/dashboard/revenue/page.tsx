import { eventRevenueColumns } from "@/components/modules/Host/EventRevenue/eventRevenueColumns";
import ManagementTable from "@/components/shared/ManagementTable";
import { getHostEventsRevenue } from "@/services/host/eventRevenueManagement";

const RevenuePage = async () => {
    const data = await getHostEventsRevenue()
    const revenueData = data.data.revenueData
    console.log("revenueData", revenueData)
    return (
        <div className="space-y-6">
            {/* Event Revenue Table */}
            <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                <div className="p-6 border-b border-gray-200">
                    <h3 className="text-lg font-bold text-(--color-dark)">
                        Event Revenue
                    </h3>
                </div>
                <ManagementTable
                    data={revenueData}
                    columns={eventRevenueColumns}
                />
            </div>
        </div>
    );
};

export default RevenuePage;