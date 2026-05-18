import { LuPlus } from "react-icons/lu";
import { useNavigate } from "react-router";

const CreateEventDashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-neon/5 border border-neon/20 rounded-xl flex items-center justify-center flex-col gap-md p-xl text-center">
      <div className="w-16 h-16 rounded-full bg-neon/10 flex items-center justify-center">
        <LuPlus size={28} className="text-neon" />
      </div>
      <div className="flex flex-col gap-xs">
        <h4 className="text-text font-semibold text-lg">Create New Event</h4>
        <p className="text-text3 text-sm">Submit a new event to get it featured on Pulse</p>
      </div>
      <button onClick={() => navigate("/partner/create-event")} className="bg-neon cursor-pointer text-black font-semibold px-xl py-sm rounded-lg hover:opacity-90 transition-opacity duration-200">
        Get Started
      </button>
    </div>
  );
};

export default CreateEventDashboard;
