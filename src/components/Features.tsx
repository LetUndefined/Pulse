import { LuMap, LuCalendar, LuUsers, LuUsersRound, LuTicket, LuZap } from "react-icons/lu";
import type { ReactNode } from "react";

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  accent: "neon" | "pink" | "cyan" | "violet";
}

const ACCENT_STYLES: Record<FeatureCardProps["accent"], { bg: string; text: string; border: string }> = {
  neon:   { bg: "bg-neon/10",   text: "text-neon",   border: "hover:border-neon/30"   },
  pink:   { bg: "bg-pink/10",   text: "text-pink",   border: "hover:border-pink/30"   },
  cyan:   { bg: "bg-cyan/10",   text: "text-cyan",   border: "hover:border-cyan/30"   },
  violet: { bg: "bg-violet/10", text: "text-violet", border: "hover:border-violet/30" },
};

function FeatureCard({ icon, title, description, accent }: FeatureCardProps) {
  const s = ACCENT_STYLES[accent];
  return (
    <div className={`bg-bg border border-border rounded-[20px] p-7 transition-colors duration-200 ${s.border}`}>
      <div className={`w-11 h-11 rounded-[12px] ${s.bg} flex items-center justify-center ${s.text} mb-4`}>{icon}</div>
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
    accent: "neon",
  },
  {
    icon: <LuCalendar size={20} />,
    title: "Date filtering",
    description: "Pick a date range and the map updates in real time. Planning a weekend away? Filter to exactly those days.",
    accent: "cyan",
  },
  {
    icon: <LuUsers size={20} />,
    title: "Kids mode",
    description: "Toggle kids mode to instantly switch to family-friendly events only — festivals, open days, and more.",
    accent: "violet",
  },
  {
    icon: <LuUsersRound size={20} />,
    title: "Friends",
    description: "See which events your friends are going to. Add friends with a PULSE code and make plans together.",
    accent: "pink",
  },
  {
    icon: <LuTicket size={20} />,
    title: "Buy tickets",
    description: "Tap any event to see details and buy tickets directly. No redirects, no friction.",
    accent: "neon",
  },
  {
    icon: <LuZap size={20} />,
    title: "Always fresh",
    description: "Events are pulled from multiple sources and refreshed regularly so you're always seeing the latest listings.",
    accent: "cyan",
  },
];

export default function Features() {
  return (
    <section id="features" className="px-40 py-25 max-md:px-5 max-md:py-15 bg-bg">
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
