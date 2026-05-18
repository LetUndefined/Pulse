type Status = "Live" | "Pending" | "Rejected";

interface EventItemProps {
  title: string;
  date: string;
  status: Status;
  timeAgo: string;
}

const statusStyles: Record<Status, string> = {
  Live: "bg-neon/15 text-neon",
  Pending: "bg-yellow-400/15 text-yellow-400",
  Rejected: "bg-pink/15 text-pink",
};

const EventItem = ({ title, date, status, timeAgo }: EventItemProps) => {
  return (
    <div className="flex justify-between items-center p-md rounded-xl bg-bg3 ">
      <div className="flex flex-col gap-xs">
        <h3 className="text-text font-semibold">{title}</h3>
        <p className="text-text3 text-sm">{date}</p>
      </div>
      <div className="flex items-center gap-md">
        <span className={`text-sm font-medium px-md py-xs rounded-full ${statusStyles[status]}`}>{status}</span>
        <span className="text-text3 text-sm">{timeAgo}</span>
      </div>
    </div>
  );
};

export default EventItem;
