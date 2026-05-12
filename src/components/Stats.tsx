const STATS = [
  { number: "12k+", label: "Events indexed" },
  { number: "60km", label: "Radius coverage" },
  { number: "8", label: "Genre categories" },
];

export default function Stats() {
  return (
    <div className="flex justify-center gap-16 px-12 py-15 border-t border-border border-b bg-bg3 flex-wrap max-md:gap-8 max-md:px-5 max-md:py-10">
      {STATS.map((s) => (
        <div key={s.label} className="text-center">
          <div className="font-grotesk text-[42px] font-bold text-neon tracking-[-1px]">{s.number}</div>
          <div className="text-[13px] text-text3 uppercase tracking-[1px] mt-1">{s.label}</div>
        </div>
      ))}
    </div>
  );
}
