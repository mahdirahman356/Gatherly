import { UserEvents } from "@/components/modules/User/Events/UserEvents";
import { getUpcomingEvemts } from "@/services/user/evenet.services";

const PastEventsPage = async () => {

    const data = await getUpcomingEvemts("past")
    const upcomingEvents = data.data
    console.log(upcomingEvents)


    return (
        <div className="space-y-6">
            {/* Past Events */}
            <div className="overflow-hidden">
                <div className="p-6">
                    <h3 className="text-lg font-bold text-(--color-dark)">
                        Past Events
                    </h3>
                </div>
                <UserEvents events={upcomingEvents} />
            </div>
        </div>
    );
};

export default PastEventsPage;