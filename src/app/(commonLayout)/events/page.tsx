// app/events/page.tsx
import ExploreEvents from "@/components/modules/Events/ExploreEvents";
import { queryStringFormatter } from "@/lib/formatters";
import { getEvents } from "@/services/user/evenet.services";

export default async function EventsPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const searchParamsObj = await searchParams;
  const query = queryStringFormatter(searchParamsObj);
  console.log("query", query)

  const data = await getEvents(query);
  const events = data?.data || [];

  return <ExploreEvents events={events} />;
}
