import { Link } from "react-router";

const THIRD_PARTIES = [
  { service: "Supabase", purpose: "Database and authentication", url: "supabase.com/privacy" },
  { service: "Google Maps", purpose: "Map display", url: "policies.google.com/privacy" },
  { service: "Ticketmaster API", purpose: "Event data", url: "ticketmaster.com/privacy" },
  { service: "Resend", purpose: "Transactional email delivery", url: "resend.com/privacy" },
];

export default function Privacy() {
  return (
    <div className="max-w-[780px] mx-auto px-6 pt-[120px] pb-20 max-md:px-5 max-md:pt-[90px]">
      <Link to="/" className="inline-flex items-center gap-2 text-text3 no-underline text-sm font-medium mb-10 transition-colors duration-200 hover:text-text">
        ← Back to Pulse
      </Link>

      <div className="text-[11px] font-semibold tracking-[2px] uppercase text-neon mb-3">Legal</div>
      <h1 className="font-grotesk font-bold tracking-[-1px] text-text mb-2" style={{ fontSize: "clamp(32px, 5vw, 52px)" }}>
        Privacy Policy
      </h1>
      <p className="text-[13px] text-text3 italic mb-12 pb-6 border-b border-border">Last updated: May 17, 2026</p>

      <div className="mb-10">
        <h2 className="font-grotesk text-[18px] font-bold text-text mb-3 pb-2 border-b-2 border-neon/30 tracking-normal">1. Who we are</h2>
        <p className="text-[15px] text-text2 leading-[1.8] mb-3">Pulse is a mobile application that helps you discover events near you. The app is developed and operated by Sandro D'Angelo.</p>
        <p className="text-[15px] text-text2 leading-[1.8] mb-3">
          If you have any questions about this policy, contact us at{" "}
          <a href="mailto:sandroodangelo@hotmail.com" className="text-neon no-underline hover:underline">
            sandroodangelo@hotmail.com
          </a>
          .
        </p>
      </div>

      {/* 2. What data we collect */}
      <div className="mb-10">
        <h2 className="font-grotesk text-[18px] font-bold text-text mb-3 pb-2 border-b-2 border-neon/30 tracking-normal">2. What data we collect</h2>
        <p className="text-[15px] text-text2 leading-[1.8] mb-3">
          <strong className="text-text">When you create an account:</strong>
        </p>
        <ul className="list-none p-0 my-2 mb-3 flex flex-col gap-2">
          {["Email address", "First name and last name", "Username", "Password (encrypted — never stored in plain text)"].map((item) => (
            <li key={item} className="text-[15px] text-text2 leading-[1.7] pl-5 relative before:content-['—'] before:absolute before:left-0 before:text-neon before:font-bold">
              {item}
            </li>
          ))}
        </ul>
        <p className="text-[15px] text-text2 leading-[1.8] mb-3">
          <strong className="text-text">When you use the app:</strong>
        </p>
        <ul className="list-none p-0 my-2 mb-3 flex flex-col gap-2">
          {["Precise location (GPS) — only while the app is open", 'Events you mark as "going"', "Friend connections made through friend codes"].map((item) => (
            <li key={item} className="text-[15px] text-text2 leading-[1.7] pl-5 relative before:content-['—'] before:absolute before:left-0 before:text-neon before:font-bold">
              {item}
            </li>
          ))}
        </ul>
        <p className="text-[15px] text-text2 leading-[1.8] mb-3">
          <strong className="text-text">When you submit a local event (partner accounts only):</strong>
        </p>
        <ul className="list-none p-0 my-2 mb-3 flex flex-col gap-2">
          {[
            "Event title, category, and description",
            "Event dates and times",
            "Event address and location",
            "Ticket URL and price",
            "Event flyer image (uploaded and stored in our media storage)",
            "Whether the event is child-friendly",
          ].map((item) => (
            <li key={item} className="text-[15px] text-text2 leading-[1.7] pl-5 relative before:content-['—'] before:absolute before:left-0 before:text-neon before:font-bold">
              {item}
            </li>
          ))}
        </ul>
        <p className="text-[15px] text-text2 leading-[1.8] mb-3">Submitted events and their images are publicly visible to all users of the app on the map.</p>
        <p className="text-[15px] text-text2 leading-[1.8] mb-3">Without an account, we create an anonymous session only. No personal information is collected.</p>
      </div>

      {/* 3. How we use your data */}
      <div className="mb-10">
        <h2 className="font-grotesk text-[18px] font-bold text-text mb-3 pb-2 border-b-2 border-neon/30 tracking-normal">3. How we use your data</h2>
        <ul className="list-none p-0 my-2 mb-3 flex flex-col gap-2">
          {[
            { label: "Location", text: "— to show events near you on the map. Never stored or shared." },
            { label: "Account info", text: "— to identify you, display your profile, and connect you with friends." },
            { label: "Events data", text: "— to show your plans and let friends see what you're attending." },
            { label: "Email", text: "— password reset and account notifications only. No marketing emails." },
            { label: "Submitted events", text: "— to display your events on the map for all users. Submitted event content (including images) is stored on our servers and publicly visible inside the app." },
          ].map(({ label, text }) => (
            <li key={label} className="text-[15px] text-text2 leading-[1.7] pl-5 relative before:content-['—'] before:absolute before:left-0 before:text-neon before:font-bold">
              <strong className="text-text">{label}</strong> {text}
            </li>
          ))}
        </ul>
      </div>

      {/* 4. What we share */}
      <div className="mb-10">
        <h2 className="font-grotesk text-[18px] font-bold text-text mb-3 pb-2 border-b-2 border-neon/30 tracking-normal">4. What we share</h2>
        <p className="text-[15px] text-text2 leading-[1.8] mb-3">Your username and events you mark as "going" are visible to your friends inside the app.</p>
        <p className="text-[15px] text-text2 leading-[1.8] mb-3">Events submitted by partner accounts — including the event title, details, address, and flyer image — are publicly visible to all users of the app.</p>
        <p className="text-[15px] text-text2 leading-[1.8] mb-3">We do not sell, rent, or trade your personal data to any third party.</p>
        <p className="text-[15px] text-text2 leading-[1.8] mb-3">
          <strong className="text-text">Third-party services we use:</strong>
        </p>
        <table className="w-full border-collapse my-4 text-[14px]">
          <thead>
            <tr>
              <th className="bg-bg text-text3 font-semibold text-[11px] tracking-[1px] uppercase px-3.5 py-2.5 text-left border-b border-border">Service</th>
              <th className="bg-bg text-text3 font-semibold text-[11px] tracking-[1px] uppercase px-3.5 py-2.5 text-left border-b border-border">Purpose</th>
              <th className="bg-bg text-text3 font-semibold text-[11px] tracking-[1px] uppercase px-3.5 py-2.5 text-left border-b border-border">Privacy Policy</th>
            </tr>
          </thead>
          <tbody>
            {THIRD_PARTIES.map(({ service, purpose, url }) => (
              <tr key={service}>
                <td className="px-3.5 py-2.5 text-text2 border-b border-border">{service}</td>
                <td className="px-3.5 py-2.5 text-text2 border-b border-border">{purpose}</td>
                <td className="px-3.5 py-2.5 border-b border-border">
                  <a href={`https://${url}`} target="_blank" rel="noopener noreferrer" className="text-neon no-underline text-[13px] hover:underline">
                    {url}
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <p className="text-[15px] text-text2 leading-[1.8] mb-3">These services may process your data in accordance with their own privacy policies.</p>
      </div>

      {/* 5. Retention */}
      <div className="mb-10">
        <h2 className="font-grotesk text-[18px] font-bold text-text mb-3 pb-2 border-b-2 border-neon/30 tracking-normal">5. How long we keep your data</h2>
        <p className="text-[15px] text-text2 leading-[1.8] mb-3">
          We keep your data for as long as your account is active. If you delete your account, all personal data — including your profile, friend connections, event history, and any events you submitted along with their images — is permanently deleted immediately.
        </p>
      </div>

      {/* 6. Rights */}
      <div className="mb-10">
        <h2 className="font-grotesk text-[18px] font-bold text-text mb-3 pb-2 border-b-2 border-neon/30 tracking-normal">6. Your rights</h2>
        <ul className="list-none p-0 my-2 mb-3 flex flex-col gap-2">
          <li className="text-[15px] text-text2 leading-[1.7] pl-5 relative before:content-['—'] before:absolute before:left-0 before:text-neon before:font-bold">Access the personal data we hold about you</li>
          <li className="text-[15px] text-text2 leading-[1.7] pl-5 relative before:content-['—'] before:absolute before:left-0 before:text-neon before:font-bold">Request correction of inaccurate data</li>
          <li className="text-[15px] text-text2 leading-[1.7] pl-5 relative before:content-['—'] before:absolute before:left-0 before:text-neon before:font-bold">
            Delete your account at any time via <strong className="text-text">Settings → Delete account</strong> in the app, or by contacting us
          </li>
          <li className="text-[15px] text-text2 leading-[1.7] pl-5 relative before:content-['—'] before:absolute before:left-0 before:text-neon before:font-bold">Withdraw consent at any time</li>
        </ul>
      </div>

      {/* 7. Children */}
      <div className="mb-10">
        <h2 className="font-grotesk text-[18px] font-bold text-text mb-3 pb-2 border-b-2 border-neon/30 tracking-normal">7. Children</h2>
        <p className="text-[15px] text-text2 leading-[1.8] mb-3">
          Pulse is not directed at children under 13. We do not knowingly collect data from children under 13. If you believe a child has provided us with personal data, contact us and we will delete it promptly.
        </p>
      </div>

      {/* 8. Changes */}
      <div className="mb-10">
        <h2 className="font-grotesk text-[18px] font-bold text-text mb-3 pb-2 border-b-2 border-neon/30 tracking-normal">8. Changes to this policy</h2>
        <p className="text-[15px] text-text2 leading-[1.8] mb-3">
          We may update this policy from time to time. We will notify you of significant changes via the app. Continued use of the app after changes constitutes acceptance of the updated policy.
        </p>
      </div>

      {/* 9. Contact */}
      <div className="mb-10">
        <h2 className="font-grotesk text-[18px] font-bold text-text mb-3 pb-2 border-b-2 border-neon/30 tracking-normal">9. Contact</h2>
        <div className="bg-bg border border-border rounded-[16px] px-7 py-6 flex flex-col gap-1.5">
          <p className="text-[15px] text-text font-semibold leading-[1.8]">Sandro D'Angelo</p>
          <p className="text-[15px] text-text2 leading-[1.8]">
            <a href="mailto:sandroodangelo@hotmail.com" className="text-neon no-underline hover:underline">
              sandroodangelo@hotmail.com
            </a>
          </p>
          <p className="text-[15px] text-text2 leading-[1.8]">
            <a href="https://sandrodangelo.com" className="text-neon no-underline hover:underline">
              sandrodangelo.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
