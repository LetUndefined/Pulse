export default function Hero() {
  return (
    <div id="hero" className="min-h-screen flex flex-col items-center justify-center text-center px-6 pt-[120px] pb-20 relative overflow-hidden bg-bg ">
      <div className="absolute w-[600px] h-[600px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none" style={{ background: "radial-gradient(circle, rgba(198,255,78,0.08) 0%, transparent 70%)" }} />

      <h1 className="font-grotesk font-bold leading-none tracking-[-2px] mb-6 text-text" style={{ fontSize: "clamp(48px, 8vw, 96px)" }}>
        Find events
        <br />
        <span className="text-neon">near you.</span>
      </h1>

      <p className="text-lg text-text2 max-w-[520px] mb-10 leading-[1.7]">Pulse puts the best concerts, festivals, and local events on a live map so you never miss what's happening around you.</p>

      <div className="flex gap-3 flex-wrap justify-center">
        <a href="#" className="bg-neon text-bg2 px-8 py-3.5 rounded-[12px] font-bold text-[15px] no-underline transition-opacity duration-200 hover:opacity-85">
          Soon available
        </a>
        <a href="#partners" className="bg-transparent text-text px-8 py-3.5 rounded-[12px] font-semibold text-[15px] no-underline border border-border transition-colors duration-200 hover:border-white/50">
          Become a partner →
        </a>
      </div>
    </div>
  );
}
