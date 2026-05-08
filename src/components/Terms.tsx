import { Link } from "react-router";

export default function Terms() {
  return (
    <div className="max-w-[780px] mx-auto px-6 pt-[120px] pb-20 max-md:px-5 max-md:pt-[90px]">
      <Link to="/" className="inline-flex items-center gap-2 text-text3 no-underline text-sm font-medium mb-10 transition-colors duration-200 hover:text-text">
        ← Back to Pulse
      </Link>

      <div className="text-[11px] font-semibold tracking-[2px] uppercase text-neon mb-3">Legal</div>
      <h1 className="font-grotesk font-bold tracking-[-1px] text-text mb-2" style={{ fontSize: "clamp(32px, 5vw, 52px)" }}>
        Terms of Service
      </h1>
      <p className="text-[13px] text-text3 italic mb-12 pb-6 border-b border-border">Last updated: May 8, 2026</p>

      {/* 1. Acceptance */}
      <div className="mb-10">
        <h2 className="font-grotesk text-[18px] font-bold text-text mb-3 pb-2 border-b-2 border-neon/30 tracking-normal">1. Acceptance</h2>
        <p className="text-[15px] text-text2 leading-[1.8] mb-3">By downloading or using Pulse, you agree to these Terms. If you do not agree, do not use the app.</p>
      </div>

      {/* 2. The service */}
      <div className="mb-10">
        <h2 className="font-grotesk text-[18px] font-bold text-text mb-3 pb-2 border-b-2 border-neon/30 tracking-normal">2. The service</h2>
        <p className="text-[15px] text-text2 leading-[1.8] mb-3">
          Pulse is a mobile application that helps you discover events near you. Event data is sourced from third-party providers and may not always be complete or accurate. We do not sell tickets directly — all ticket
          purchases happen on the relevant third-party platform.
        </p>
      </div>

      {/* 3. Your account */}
      <div className="mb-10">
        <h2 className="font-grotesk text-[18px] font-bold text-text mb-3 pb-2 border-b-2 border-neon/30 tracking-normal">3. Your account</h2>
        <ul className="list-none p-0 my-2 mb-3 flex flex-col gap-2">
          {[
            "You must be at least 13 years old to create an account.",
            "You are responsible for keeping your credentials secure.",
            "You must provide accurate information when registering.",
            "One account per person. Do not create accounts on behalf of others without their consent.",
          ].map((item) => (
            <li key={item} className="text-[15px] text-text2 leading-[1.7] pl-5 relative before:content-['—'] before:absolute before:left-0 before:text-neon before:font-bold">
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* 4. Acceptable use */}
      <div className="mb-10">
        <h2 className="font-grotesk text-[18px] font-bold text-text mb-3 pb-2 border-b-2 border-neon/30 tracking-normal">4. Acceptable use</h2>
        <p className="text-[15px] text-text2 leading-[1.8] mb-3">You agree not to:</p>
        <ul className="list-none p-0 my-2 mb-3 flex flex-col gap-2">
          {[
            "Use the app for any unlawful purpose",
            "Attempt to reverse-engineer, scrape, or interfere with the service",
            "Harass, impersonate, or harm other users",
            "Post or transmit harmful, offensive, or misleading content",
            "Use automated tools to interact with the app",
          ].map((item) => (
            <li key={item} className="text-[15px] text-text2 leading-[1.7] pl-5 relative before:content-['—'] before:absolute before:left-0 before:text-neon before:font-bold">
              {item}
            </li>
          ))}
        </ul>
        <p className="text-[15px] text-text2 leading-[1.8] mb-3">We reserve the right to suspend or terminate accounts that violate these terms.</p>
      </div>

      {/* 5. Friends and social features */}
      <div className="mb-10">
        <h2 className="font-grotesk text-[18px] font-bold text-text mb-3 pb-2 border-b-2 border-neon/30 tracking-normal">5. Friends and social features</h2>
        <p className="text-[15px] text-text2 leading-[1.8] mb-3">
          Friend connections are opt-in and made via PULSE codes. Your username and events you mark as "going" are visible to your friends. You can remove friends or delete your account at any time.
        </p>
      </div>

      {/* 6. Intellectual property */}
      <div className="mb-10">
        <h2 className="font-grotesk text-[18px] font-bold text-text mb-3 pb-2 border-b-2 border-neon/30 tracking-normal">6. Intellectual property</h2>
        <p className="text-[15px] text-text2 leading-[1.8] mb-3">
          The Pulse name, logo, and app design are the property of Sandro D'Angelo. You may not reproduce or use them without written permission. Event data is owned by the respective third-party providers.
        </p>
      </div>

      {/* 7. Disclaimers */}
      <div className="mb-10">
        <h2 className="font-grotesk text-[18px] font-bold text-text mb-3 pb-2 border-b-2 border-neon/30 tracking-normal">7. Disclaimers</h2>
        <p className="text-[15px] text-text2 leading-[1.8] mb-3">Pulse is provided "as is". We do not guarantee that:</p>
        <ul className="list-none p-0 my-2 mb-3 flex flex-col gap-2">
          {["Event listings are always accurate or up to date", "The service will be available at all times", "The app is free of bugs or errors"].map((item) => (
            <li key={item} className="text-[15px] text-text2 leading-[1.7] pl-5 relative before:content-['—'] before:absolute before:left-0 before:text-neon before:font-bold">
              {item}
            </li>
          ))}
        </ul>
        <p className="text-[15px] text-text2 leading-[1.8] mb-3">Use of the app is at your own risk.</p>
      </div>

      {/* 8. Limitation of liability */}
      <div className="mb-10">
        <h2 className="font-grotesk text-[18px] font-bold text-text mb-3 pb-2 border-b-2 border-neon/30 tracking-normal">8. Limitation of liability</h2>
        <p className="text-[15px] text-text2 leading-[1.8] mb-3">
          To the maximum extent permitted by law, Sandro D'Angelo is not liable for any indirect, incidental, or consequential damages arising from your use of Pulse, including but not limited to missed events, incorrect
          information, or service interruptions.
        </p>
      </div>

      {/* 9. Changes to the service */}
      <div className="mb-10">
        <h2 className="font-grotesk text-[18px] font-bold text-text mb-3 pb-2 border-b-2 border-neon/30 tracking-normal">9. Changes to the service</h2>
        <p className="text-[15px] text-text2 leading-[1.8] mb-3">
          We may modify, suspend, or discontinue Pulse at any time without notice. We may also update these Terms. Continued use of the app after changes constitutes acceptance.
        </p>
      </div>

      {/* 10. Governing law */}
      <div className="mb-10">
        <h2 className="font-grotesk text-[18px] font-bold text-text mb-3 pb-2 border-b-2 border-neon/30 tracking-normal">10. Governing law</h2>
        <p className="text-[15px] text-text2 leading-[1.8] mb-3">These Terms are governed by the laws of Belgium. Any disputes will be handled in the courts of Belgium.</p>
      </div>

      {/* 11. Contact */}
      <div className="mb-10">
        <h2 className="font-grotesk text-[18px] font-bold text-text mb-3 pb-2 border-b-2 border-neon/30 tracking-normal">11. Contact</h2>
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
