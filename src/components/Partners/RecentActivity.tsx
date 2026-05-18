import EventItem from "./EventItem";

const mockEvents = [
  { title: "Summer Music Festival", date: "Jun 15, 2026", status: "Live" as const, timeAgo: "2 hours ago" },
  { title: "Tech Startup Mixer", date: "May 28, 2026", status: "Pending" as const, timeAgo: "5 hours ago" },
  { title: "Food Truck Rally", date: "May 22, 2026", status: "Rejected" as const, timeAgo: "1 day ago" },
  { title: "Art Gallery Opening", date: "Jun 3, 2026", status: "Live" as const, timeAgo: "2 days ago" },
  { title: "Comedy Night Downtown", date: "May 30, 2026", status: "Pending" as const, timeAgo: "3 days ago" },
];

const RecentActivity = () => {
  return (
    <div className="bg-bg p-lg flex-1 rounded-xl flex flex-col gap-md">
      <div className="flex justify-between items-center">
        <h2 className="text-text font-semibold text-lg">Recent Activity</h2>
        <span className="text-neon text-sm cursor-pointer hover:underline">View all</span>
      </div>
      <div className="flex flex-col gap-md ">
        {mockEvents.map((event) => (
          <EventItem key={event.title} {...event} />
        ))}
      </div>
    </div>
  );
};

export default RecentActivity;
