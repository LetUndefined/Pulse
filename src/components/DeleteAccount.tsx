import { useState } from "react";
import { Link } from "react-router";

export default function DeleteAccount() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Opens the user's mail client with a pre-filled deletion request
    window.location.href = `mailto:sandroodangelo@hotmail.com?subject=Account%20Deletion%20Request&body=Please%20delete%20my%20Pulse%20account%20associated%20with%20the%20email%20address%3A%20${encodeURIComponent(email)}%0A%0AI%20understand%20that%20this%20will%20permanently%20delete%20my%20profile%2C%20friend%20connections%2C%20and%20event%20history.`;
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 500);
  };

  return (
    <div className="max-w-[780px] mx-auto px-6 pt-[120px] pb-20 max-md:px-5 max-md:pt-[90px]">
      <Link to="/" className="inline-flex items-center gap-2 text-text3 no-underline text-sm font-medium mb-10 transition-colors duration-200 hover:text-text">
        ← Back to Pulse
      </Link>

      <div className="text-[11px] font-semibold tracking-[2px] uppercase text-neon mb-3">Account</div>
      <h1 className="font-grotesk font-bold tracking-[-1px] text-text mb-2" style={{ fontSize: "clamp(32px, 5vw, 52px)" }}>
        Delete your account
      </h1>
      <p className="text-[13px] text-text3 italic mb-12 pb-6 border-b border-border">
        Permanently remove your Pulse account and all associated data
      </p>

      <div className="mb-10">
        <h2 className="font-grotesk text-[18px] font-bold text-text mb-3 pb-2 border-b-2 border-neon/30 tracking-normal">What gets deleted</h2>
        <ul className="list-none p-0 my-2 mb-3 flex flex-col gap-2">
          {[
            "Your profile — username, name, and avatar",
            "Your account credentials and email address",
            "All events you marked as going or saved",
            "All friend connections and friend codes",
          ].map((item) => (
            <li key={item} className="text-[15px] text-text2 leading-[1.7] pl-5 relative before:content-['—'] before:absolute before:left-0 before:text-neon before:font-bold">
              {item}
            </li>
          ))}
        </ul>
        <p className="text-[15px] text-text2 leading-[1.8] mt-4">
          Deletion is permanent and cannot be undone. We will process your request within <strong className="text-text">5 business days</strong>.
        </p>
      </div>

      <div className="mb-10">
        <h2 className="font-grotesk text-[18px] font-bold text-text mb-3 pb-2 border-b-2 border-neon/30 tracking-normal">Request deletion</h2>

        {submitted ? (
          <div className="bg-bg border border-neon/30 rounded-[16px] px-7 py-8 flex flex-col gap-3">
            <div className="text-neon text-[22px]">✓</div>
            <p className="text-[15px] text-text font-semibold">Request sent</p>
            <p className="text-[15px] text-text2 leading-[1.8]">
              Your deletion request has been submitted. We'll process it within 5 business days and confirm via email.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-[13px] text-text3 font-medium tracking-[0.5px] uppercase">
                Email address on your Pulse account
              </label>
              <input
                id="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="bg-bg border border-border rounded-[12px] px-4 py-3.5 text-[15px] text-text placeholder:text-text3 outline-none transition-colors duration-200 focus:border-neon/50"
                style={{ fontFamily: "inherit" }}
              />
            </div>

            <div className="bg-bg border border-border rounded-[12px] px-5 py-4">
              <p className="text-[13px] text-text3 leading-[1.7]">
                By submitting this form you confirm that you want to permanently delete your account. This action cannot be undone.
              </p>
            </div>

            <button
              type="submit"
              disabled={loading || !email}
              className="bg-danger text-white font-grotesk font-bold text-[15px] rounded-[12px] px-6 py-4 border-none cursor-pointer transition-opacity duration-200 disabled:opacity-40 disabled:cursor-not-allowed hover:opacity-90"
              style={{ fontFamily: "inherit" }}
            >
              {loading ? "Opening mail client..." : "Submit deletion request"}
            </button>
          </form>
        )}
      </div>

      <div className="mb-10">
        <h2 className="font-grotesk text-[18px] font-bold text-text mb-3 pb-2 border-b-2 border-neon/30 tracking-normal">Alternative — delete in the app</h2>
        <p className="text-[15px] text-text2 leading-[1.8]">
          You can also delete your account directly in the app by going to <strong className="text-text">Me → Settings → Delete account</strong>. This takes effect immediately.
        </p>
      </div>

      <div className="mb-10">
        <h2 className="font-grotesk text-[18px] font-bold text-text mb-3 pb-2 border-b-2 border-neon/30 tracking-normal">Contact</h2>
        <div className="bg-bg border border-border rounded-[16px] px-7 py-6 flex flex-col gap-1.5">
          <p className="text-[15px] text-text font-semibold leading-[1.8]">Sandro D'Angelo</p>
          <p className="text-[15px] text-text2 leading-[1.8]">
            <a href="mailto:sandroodangelo@hotmail.com" className="text-neon no-underline hover:underline">
              sandroodangelo@hotmail.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
