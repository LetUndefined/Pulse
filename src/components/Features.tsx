import { LuMap, LuCalendar, LuUsers, LuUsersRound, LuTicket, LuZap } from "react-icons/lu";
import type { ReactNode } from "react";

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="bg-bg border border-border rounded-[20px] p-7 transition-colors duration-200 hover:border-neon/30">
      <div className="w-11 h-11 rounded-[12px] bg-neon/10 flex items-center justify-center text-neon mb-4">{icon}</div>
      <h3 className="font-grotesk text-[18px] font-bold mb-2 text-text">{title}</h3>
      <p className="text-[14px] text-text2 leading-[1.6]">{description}</p>
    </div>
  );
}

const FEATURES: FeatureCardProps[] = [
  {
    icon: <LuMap size={20} />,
    title: "Live map",
    description: "See every event around you on an interactive map, colour-coded by genre so you can find what you're into instantly.",
  },
  {
    icon: <LuCalendar size={20} />,
    title: "Date filtering",
    description: "Pick a date range and the map updates in real time. Planning a weekend away? Filter to exactly those days.",
  },
  {
    icon: <LuUsers size={20} />,
    title: "Kids mode",
    description: "Toggle kids mode to instantly switch to family-friendly events only — festivals, open days, and more.",
  },
  {
    icon: <LuUsersRound size={20} />,
    title: "Friends",
    description: "See which events your friends are going to. Add friends with a PULSE code and make plans together.",
  },
  {
    icon: <LuTicket size={20} />,
    title: "Buy tickets",
    description: "Tap any event to see details and buy tickets directly. No redirects, no friction.",
  },
  {
    icon: <LuZap size={20} />,
    title: "Always fresh",
    description: "Events are pulled from multiple sources and refreshed regularly so you're always seeing the latest listings.",
  },
];

export default function Features() {
  return (
    <section id="features" className=" px-40 py-25 max-md:px-5 max-md:py-15 bg-bg">
      <div className="text-[11px] font-semibold tracking-[2px] uppercase text-neon mb-3">Why Pulse</div>
      <h2 className="font-grotesk font-bold tracking-[-1px] leading-[1.1] mb-4 text-text" style={{ fontSize: "clamp(32px, 4vw, 52px)" }}>
        Everything you need
        <br />
        to find your next show.
      </h2>
      <p className="text-[16px] text-text2 mb-10 leading-[1.7]">From intimate local gigs to major festivals — Pulse surfaces the right events at the right time.</p>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-4">
        {FEATURES.map((f) => (
          <FeatureCard key={f.title} {...f} />
        ))}
      </div>
    </section>
  );
}
