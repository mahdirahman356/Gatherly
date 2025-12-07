import EventTable from "@/components/modules/Admin/EventManagment/EveentsTable";
import { getEvents } from "@/services/admin/eventsManagement";

const ManageEventsPage = async () => {

    const data = await getEvents()
    const eventsData = data.data

    return (
        <div className="space-y-6">
                   {/* Events Table */}
                   <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                       <div className="p-6 border-b border-gray-200">
                           <h3 className="text-lg font-bold text-(--color-dark)">
                               Event Management
                           </h3>
                       </div>
                       <EventTable events={eventsData}/>
                   </div>
               </div>
    );
};

export default ManageEventsPage;