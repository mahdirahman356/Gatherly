import EventJoinSuccess from "@/components/modules/User/Events/JoinSuccessCard";
import { UserEvents } from "@/components/modules/User/Events/UserEvents";
import { getUserEvents } from "@/services/user/evenet.services";

export default async function UpcomingEventPage() {
    const data = await getUserEvents()
    const upcomingEvents = data.data

    return (
        <div className="space-y-6">
            <EventJoinSuccess />
            {/* Upcoming Events */}
            <div>
                <div className="p-6">
                    <h3 className="text-lg font-bold">
                        Upcoming Events
                    </h3>
                </div>
                <UserEvents events={upcomingEvents} />
            </div>
        </div>
    );
}
