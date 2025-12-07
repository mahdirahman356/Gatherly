import HostEventsHeader from "@/components/modules/Host/HostEventsHeader";
import HostEventsTable from "@/components/modules/Host/HostEventsTable";
import { getHostEvents } from "@/services/host/eventManagement";

const ManageEventPage = async () => {
    const data = await getHostEvents()
    const eventsData = data.data

    return (
        <div className="space-y-6">
            {/* Events Table */}
            <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                <HostEventsHeader />
                <HostEventsTable events={eventsData} />
            </div>
        </div>
    );
};

export default ManageEventPage;