import EventJoinSuccess from "@/components/modules/User/Events/JoinSuccessCard";
import { getUserEvents } from "@/services/user/evenet.services";

export default async function UpcomingEventPage() {
    const data = await getUserEvents()
    const upcomingEvents = data.data

    return  (<EventJoinSuccess events={upcomingEvents}/>)
}
