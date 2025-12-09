import { UserEvents } from "@/components/modules/User/Events/UserEvents";
import { getUpcomingEvemts } from "@/services/user/evenet.services";

export default async function UpcomingEventPage() {
    const data = await getUpcomingEvemts()
    const upcomingEvents = data.data
    console.log(upcomingEvents)

    return (
       <div className="space-y-6">
            {/* Upcoming Events */}
            <div className="overflow-hidden">
                <div className="p-6">
                    <h3 className="text-lg font-bold text-(--color-dark)">
                        Upcoming Events
                    </h3>
                </div>
                <UserEvents events={upcomingEvents} />
            </div>
        </div>
    );
}
