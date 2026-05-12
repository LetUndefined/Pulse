import { LuMapPin, LuLayoutDashboard, LuTicket, LuChartBar, LuRocket } from "react-icons/lu";
import type { ReactNode } from "react";

interface PerkProps {
  icon: ReactNode;
  title: string;
  description: string;
}

const PERKS: PerkProps[] = [
  {
    icon: <LuMapPin size={16} />,
    title: "Map placement",
    description: "Your events appear as markers on the live map, visible to everyone browsing your area.",
  },
  {
    icon: <LuLayoutDashboard size={16} />,
    title: "Self-managed listings",
    description: "Add, edit and remove your own events through a dedicated partner dashboard.",
  },
  {
    icon: <LuTicket size={16} />,
    title: "Ticket link integration",
    description: "Link directly to your ticketing platform so users can buy without leaving Pulse.",
  },
  {
    icon: <LuChartBar size={16} />,
    title: "Audience insights",
    description: "See how many people viewed your event, marked themselves as going, or clicked your ticket link.",
  },
];

export default function Partners() {
  return (
    <div id="partners" className="bg-bg3 border-t border-border border-b px-12 py-25 max-md:px-5 max-md:py-15">
      <div className="max-w-[1200px] mx-auto grid grid-cols-2 gap-20 items-start max-md:grid-cols-1 max-md:gap-10">
        <div>
          <div className="text-[11px] font-semibold tracking-[2px] uppercase text-cyan mb-3">Partner program</div>
          <h2 className="font-grotesk font-bold tracking-[-1px] leading-[1.1] mb-4 text-text" style={{ fontSize: "clamp(32px, 4vw, 52px)" }}>
            List your events
            <br />
            on Pulse.
          </h2>
          <p className="text-[16px] text-text2 leading-[1.7]">Reach thousands of people actively looking for events near them. As a Pulse partner you get a direct channel to add and manage your own events in the app.</p>
          <div className="flex flex-col gap-5 mt-10">
            {PERKS.map((p) => (
              <div className="flex gap-4 items-start">
                <div className="w-9 h-9 rounded-[10px] bg-violet/15 border border-violet/30 flex items-center justify-center text-violet flex-shrink-0">{p.icon}</div>
                <div>
                  <h4 className="font-grotesk text-[15px] font-bold mb-1 text-text">{p.title}</h4>
                  <p className="text-[13px] text-text2 leading-[1.5]">{p.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-bg border border-border rounded-[24px] p-9 flex flex-col items-center justify-center text-center min-h-[280px] gap-4">
          <div className="w-16 h-16 rounded-full bg-cyan/10 border-2 border-cyan/30 flex items-center justify-center text-cyan">
            <LuRocket size={28} />
          </div>
          <h3 className="font-grotesk text-[24px] font-bold text-cyan tracking-[-0.5px]">Coming soon</h3>
          <p className="text-[14px] text-text2 max-w-[280px] leading-[1.6]">Partner applications are opening shortly. Check back soon to list your events on Pulse.</p>
        </div>
      </div>
    </div>
  );
}
