import showcase from "../assets/pulse-app-showcase1.png";

export default function AppShowcase() {
  return (
    <section className="bg-black border-t border-border  px-6 pt-20 overflow-hidden">
      <div className="text-center mb-14">
        <div className="text-[11px] font-semibold tracking-[2px] uppercase text-neon mb-3">The app</div>
        <h2 className="font-grotesk font-bold tracking-[-1px] leading-[1.1] text-text" style={{ fontSize: "clamp(28px, 4vw, 48px)" }}>
          Built for night owls
          <br />
          and weekend warriors.
        </h2>
      </div>

      <img src={showcase} className="h-full w-full" />
    </section>
  );
}
