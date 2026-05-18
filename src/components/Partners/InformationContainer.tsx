import { LuCalendarDays, LuCircleCheckBig, LuClock } from "react-icons/lu";

const InformationContainer = () => {
  const information = [
    { label: "Total Events", icon: <LuCalendarDays size={24} />, color: "neon" },
    { label: "Live Now", icon: <LuCircleCheckBig size={24} />, color: "cyan" },
    { label: "Pending Reivew", icon: <LuClock size={24} />, color: "violet" },
  ];
  return (
    <>
      {information.map((item) => (
        <div className="text-text bg-bg p-lg flex-1 flex flex-col gap-md rounded-xl">
          <span className={`text-${item.color}`}>{item.icon}</span>
          <div className="flex flex-col gap-sm">
            <span className="text-2xl">0</span>
            <p>{item.label}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default InformationContainer;
