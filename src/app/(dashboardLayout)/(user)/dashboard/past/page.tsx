import { UserEvents } from "@/components/modules/User/Events/UserEvents";
import { getUserEvents } from "@/services/user/evenet.services";

const PastEventsPage = async () => {

    const data = await getUserEvents("past")
    const pastEvents = data.data

    return (
        <div className="space-y-6">
            {/* Past Events */}
            <div>
                <div className="p-6">
                    <h3 className="text-lg font-bold">
                        Past Events
                    </h3>
                </div>
                <UserEvents events={pastEvents} />
            </div>
        </div>
    );
};

export default PastEventsPage;