import { participantsColumns } from "@/components/modules/Host/Participants/participantsColumns";
import ManagementTable from "@/components/shared/ManagementTable";
import { getParticipantsOfHost } from "@/services/host/participantManagement";

const ParticipantsPage = async () => {
    const data = await getParticipantsOfHost()
    const participants = data.data
    console.log("participants", participants)
    return (
        <div className="space-y-6">
            {/* Participants Table */}
            <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                <div className="p-6 border-b border-gray-200">
                    <h3 className="text-lg font-bold text-(--color-dark)">
                        Participants
                    </h3>
                </div>
                <ManagementTable
                    data={participants}
                    columns={participantsColumns}
                />
            </div>
        </div>
    );
};

export default ParticipantsPage;