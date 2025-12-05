import HostTable from "@/components/modules/Admin/HostManagement/HostsTable";
import { getHosts } from "@/services/admin/usersManagement";

const ManageHostPage = async () => {

    const data = await getHosts()
    const hostsData = data.data

    console.log("hostsData:", hostsData)


    return (
        <div className="space-y-6">
            {/* Host Table */}
            <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                <div className="p-6 border-b border-gray-200">
                    <h3 className="text-lg font-bold text-(--color-dark)">
                        Host Management
                    </h3>
                </div>
                <HostTable hosts={hostsData} />
            </div>
        </div>
    );
};

export default ManageHostPage;