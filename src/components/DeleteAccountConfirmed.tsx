import { Link } from "react-router";

export default function DeleteAccountConfirmed() {
  return (
    <div className="max-w-[780px] mx-auto px-6 pt-[120px] pb-20 max-md:px-5 max-md:pt-[90px]">
      <div className="text-[11px] font-semibold tracking-[2px] uppercase text-neon mb-3">Account</div>
      <h1 className="font-grotesk font-bold tracking-[-1px] text-text mb-2" style={{ fontSize: "clamp(32px, 5vw, 52px)" }}>
        Account deleted
      </h1>
      <p className="text-[13px] text-text3 italic mb-12 pb-6 border-b border-border">
        Your account has been permanently removed
      </p>

      <div className="bg-bg border border-neon/30 rounded-[16px] px-7 py-8 flex flex-col gap-4 mb-10">
        <div className="text-neon text-[32px]">✓</div>
        <p className="text-[18px] text-text font-semibold">Done — your account is gone</p>
        <p className="text-[15px] text-text2 leading-[1.8]">
          Your Pulse account and all associated data has been permanently deleted. This includes your profile, saved events, and friend connections.
        </p>
        <p className="text-[15px] text-text2 leading-[1.8]">
          Thanks for using Pulse. If you ever want to come back, you're always welcome.
        </p>
      </div>

      <Link
        to="/"
        className="inline-flex items-center gap-2 text-neon no-underline text-sm font-medium transition-colors duration-200 hover:opacity-80"
      >
        ← Back to Pulse
      </Link>
    </div>
  );
}
