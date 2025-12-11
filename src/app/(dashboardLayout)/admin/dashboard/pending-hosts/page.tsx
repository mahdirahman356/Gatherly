import PendingHostsTable from "@/components/modules/Admin/PendingHostsManagement/PendingHostsTable";
import { getPendingHostRequests } from "@/services/admin/usersManagement";

const PendingHostsPage = async () => {

    const data = await getPendingHostRequests()
    const hostRequests = data.data
    console.log("hostRequests:", hostRequests)

    return (
        <div className="space-y-6">
            {/* Pending Hosts */}
            <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                <div className="p-6 border-b border-gray-200">
                    <h3 className="text-lg font-bold text-(--color-dark)">
                        Pending Hosts
                    </h3>
                </div>
                <PendingHostsTable hostRequests={hostRequests}/>
            </div>
        </div>
    );
};

export default PendingHostsPage;