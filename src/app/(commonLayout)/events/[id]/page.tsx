import EventDetails from "@/components/modules/Events/EventDetails";
import { getEventDetails } from "@/services/user/evenet.services";

interface EventDetailsPageProps {
    params: { id: string };
}

export default async function EventDetailsPage({ params }: EventDetailsPageProps) {
    const { id } = await params;
    const result = await getEventDetails(id)
    const event = result.data;

    return <EventDetails {...event} />
}
