import EventDetails from "@/components/modules/Events/EventDetails";
import { getMyProfile } from "@/services/profile/getMyProfile";
import { getEventDetails } from "@/services/user/evenet.services";

interface EventDetailsPageProps {
    params: { id: string };
}

export default async function EventDetailsPage({ params }: EventDetailsPageProps) {
    const { id } = await params;
    const result = await getEventDetails(id)
    const userData = await getMyProfile()
    const userId = userData?.data?.id
    const event = result.data;

    return <EventDetails {...event} userId={userId} />
}
