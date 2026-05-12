export default function Hero() {
  return (
    <div id="hero" className="min-h-screen flex flex-col items-center justify-center text-center px-6 pt-[120px] pb-20 relative overflow-hidden bg-bg2">
      {/* Multi-color ambient glows matching app screenshots */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] -translate-x-1/2 -translate-y-1/2" style={{ background: "radial-gradient(circle, rgba(155,108,255,0.12) 0%, transparent 65%)" }} />
        <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] translate-x-1/2 -translate-y-1/2" style={{ background: "radial-gradient(circle, rgba(0,200,255,0.08) 0%, transparent 65%)" }} />
        <div className="absolute bottom-1/4 left-1/2 w-[450px] h-[450px] -translate-x-1/2 translate-y-1/2" style={{ background: "radial-gradient(circle, rgba(198,255,78,0.07) 0%, transparent 65%)" }} />
        <div className="absolute top-2/3 right-1/3 w-[300px] h-[300px]" style={{ background: "radial-gradient(circle, rgba(255,45,85,0.07) 0%, transparent 65%)" }} />
      </div>

      <div className="relative z-10 max-w-[760px]">
        <h1 className="font-grotesk font-bold leading-none tracking-[-2px] mb-6 text-text" style={{ fontSize: "clamp(48px, 8vw, 96px)" }}>
          Find events
          <br />
          <span className="text-neon">near you.</span>
        </h1>

        <p className="text-lg text-text2 max-w-[520px] mb-10 leading-[1.7] mx-auto">Pulse puts the best concerts, festivals, and local events on a live map so you never miss what's happening around you.</p>

        <div className="flex gap-3 flex-wrap justify-center mb-16">
          <a href="#" className="bg-neon text-bg2 px-8 py-3.5 rounded-[12px] font-bold text-[15px] no-underline transition-opacity duration-200 hover:opacity-85">
            Soon available
          </a>
          <a href="#partners" className="bg-transparent text-text px-8 py-3.5 rounded-[12px] font-semibold text-[15px] no-underline border border-border transition-colors duration-200 hover:border-white/50">
            Become a partner →
          </a>
        </div>

        {/* Color pill legend matching the app's event type system */}
      </div>
    </div>
  );
}
