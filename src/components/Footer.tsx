import { Link } from "react-router";

export default function Footer() {
  return (
    <footer className="bg-bg2 border-t border-border px-12 py-12 flex items-center justify-between flex-wrap gap-4 max-md:px-5 max-md:py-8 max-md:flex-col max-md:items-start">
      <div className="font-grotesk font-bold text-[18px] tracking-[3px] text-text">
        PULSE<span className="text-neon">.</span>
      </div>
      <p className="text-[13px] text-text3">© 2026 Pulse. All rights reserved.</p>
      <nav className="max-md:hidden">
        <ul className="flex gap-6 list-none">
          <li>
            <Link to="/privacy" className="text-text2 no-underline text-sm font-medium transition-colors duration-200 hover:text-text">
              Privacy
            </Link>
          </li>
          <li>
            <Link to="/terms" className="text-text2 no-underline text-sm font-medium transition-colors duration-200 hover:text-text">
              Terms
            </Link>
          </li>
          <li>
            <a href="#partners" className="text-text2 no-underline text-sm font-medium transition-colors duration-200 hover:text-text">
              Partners
            </a>
          </li>
        </ul>
      </nav>
    </footer>
  );
}
