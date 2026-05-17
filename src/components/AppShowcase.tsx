import transMap from "../assets/trans-map.png";
import transEventDetail from "../assets/trans-eventdetail.png";
import transFriend from "../assets/trans-friend.png";
import transList from "../assets/trans-list.png";

const screens = [
  { src: transMap, alt: "Map view", glow: "rgba(186,255,41,0.18)", offset: false },
  { src: transFriend, alt: "Friends", glow: "rgba(155,108,255,0.22)", offset: true },
  { src: transEventDetail, alt: "Event detail", glow: "rgba(0,200,255,0.18)", offset: true },
  { src: transList, alt: "List view", glow: "rgba(255,45,130,0.16)", offset: false },
];

export default function AppShowcase() {
  return (
    <section className="border-t border-border pt-20 pb-0 overflow-hidden relative bg-bg2">
      <div className="relative z-10">
        <div className="text-center mb-16 px-6">
          <div className="text-[11px] font-semibold tracking-[2px] uppercase text-neon mb-3">The app</div>
          <h2 className="font-grotesk font-bold tracking-[-1px] leading-[1.1] text-text" style={{ fontSize: "clamp(28px, 4vw, 48px)" }}>
            Built for night owls
            <br />
            and weekend warriors.
          </h2>
        </div>

        <div className="max-w-[1600px] mx-auto px-6">
          <div className="flex items-end gap-3 max-md:overflow-x-auto max-md:pb-6 max-md:snap-x max-md:snap-mandatory" style={{ scrollbarWidth: "none" }}>
            {screens.map((screen) => (
              <div key={screen.alt} className="relative flex-1 min-w-[220px] max-md:flex-shrink-0 max-md:w-[72vw] max-md:snap-center" style={{ transform: screen.offset ? "translateY(-48px)" : "none" }}>
                {/* Glow behind phone */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background: `radial-gradient(circle at 50% 60%, ${screen.glow} 0%, transparent 65%)`,
                  }}
                />
                <img src={screen.src} alt={screen.alt} className="relative z-10 w-full h-auto block" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
