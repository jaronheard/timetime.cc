import EventList from "@/components/EventList";
import { api } from "@/trpc/server";

export default async function Page() {
  const events = await api.event.getAll.query();

  const pastEvents = events.filter((item) => item.endDateTime < new Date());

  const currentEvents = events.filter(
    (item) => item.startDateTime < new Date() && item.endDateTime > new Date()
  );
  const futureEvents = events.filter(
    (item) => item.startDateTime >= new Date()
  );

  return (
    <>
      <div className="p-4"></div>
      <h2 className="text-sm font-medium text-gray-500">All Events</h2>
      <EventList
        currentEvents={currentEvents}
        futureEvents={futureEvents}
        pastEvents={pastEvents}
      />
      <div className="p-5"></div>
    </>
  );
}
