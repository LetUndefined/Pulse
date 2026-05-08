interface StepProps {
  number: string;
  title: string;
  description: string;
}

function Step({ number, title, description }: StepProps) {
  return (
    <div className="bg-bg border border-border rounded-[20px] p-7 relative">
      <div className="font-grotesk text-[48px] font-bold text-neon/15 leading-none mb-4">{number}</div>
      <h3 className="font-grotesk text-[17px] font-bold mb-2 text-text">{title}</h3>
      <p className="text-[14px] text-text2 leading-[1.6]">{description}</p>
    </div>
  );
}

const STEPS: StepProps[] = [
  {
    number: "01",
    title: "Open the app",
    description: "Pulse detects your location and immediately loads events within 50km of you.",
  },
  {
    number: "02",
    title: "Browse the map",
    description: "Explore markers by genre, filter by date, or switch to list view for a scrollable feed.",
  },
  {
    number: "03",
    title: "Tap an event",
    description: "See the full details — date, venue, price, and a direct link to buy tickets.",
  },
  {
    number: "04",
    title: "Make plans",
    description: "Mark yourself as going, add friends with their PULSE code, and see who's joining you.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className=" bg-bg px-40 pb-25 pt-0 max-md:px-5 max-md:pb-15">
      <div className="text-[11px] font-semibold tracking-[2px] uppercase text-neon mb-3">How it works</div>
      <h2 className="font-grotesk font-bold tracking-[-1px] leading-[1.1] mb-4 text-text" style={{ fontSize: "clamp(32px, 4vw, 52px)" }}>
        Up and running
        <br />
        in seconds.
      </h2>
      <p className="text-[16px] text-text2 mb-10 leading-[1.7]">No account needed to browse. Just open the app and start exploring.</p>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-4">
        {STEPS.map((s) => (
          <Step key={s.number} {...s} />
        ))}
      </div>
    </section>
  );
}
