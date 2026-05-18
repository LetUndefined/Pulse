import { LuCalendarDays, LuCirclePlus, LuLayoutDashboard, LuLogOut, LuSettings } from "react-icons/lu";
import { NavLink, useNavigate } from "react-router";
import { supabase } from "../../lib/Supabase";

const PartnerNav = () => {
  const navigate = useNavigate();
  const navItems = [
    { label: "Dashboard", icon: <LuLayoutDashboard size={18} />, path: "dashboard" },
    { label: "My Events", icon: <LuCalendarDays size={18} />, path: "partner-events" },
    { label: "Create Event", icon: <LuCirclePlus size={18} />, path: "create-event" },
    { label: "Settings", icon: <LuSettings size={18} />, path: "partner-settings" },
  ];

  const handleLogOut = async () => {
    await supabase.auth.signOut();
    navigate("/partner/login");
  };
  return (
    <nav className="px-lg border-r border-bg sticky top-0 h-screen flex flex-col">
      <div className="py-lg">
        <h1 className="text-neon my-sm text-2xl">Pulse</h1>
        <span className="text-text my-sm text-sm">Partner Portal</span>
      </div>
      <section className="flex flex-col justify-between h-full">
        <div>
          <ul>
            {navItems.map((item) => (
              <NavLink
                to={item.path}
                className={({ isActive }) => ` my-sm py-md pl-md pr-xxl rounded-md items-center transition-colors duration-500 flex gap-md  ${isActive ? "text-black flex bg-neon" : "text-text"}`}
                key={item.label}
              >
                <span>{item.icon}</span>
                <p>{item.label}</p>
              </NavLink>
            ))}
          </ul>
        </div>
        <div className="flex justify-center items-center  gap-md border-[0.2rem] border-bg rounded-md p-sm mb-lg">
          <LuLogOut size={24} color="red" className="cursor-pointer hover:opacity-80" onClick={handleLogOut} />
          <div className="flex flex-col items-center">
            <span className="text-text">Sandro D'Angelo</span>
            <span className="text-text2 text-sm">Partner Account</span>
          </div>
        </div>
      </section>
    </nav>
  );
};

export default PartnerNav;
