import { useState } from "react";
import { Link } from "react-router";
import NavItems from "./NavItems";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const navItems = ["Features", "How it works"];

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-100 flex items-center justify-between px-12 py-[18px] bg-bg2/85 backdrop-blur-[12px] border-b border-border max-md:px-5 max-md:py-4">
        <Link to="/" className="font-grotesk font-bold text-[22px] tracking-[3px] text-text no-underline">
          PULSE<span className="text-neon">.</span>
        </Link>

        <ul className="flex gap-8 list-none max-md:hidden items-center">
          <NavItems items={navItems} />
          <a href="#partners" className="font-bold font-grotesk border bg-neon text-bg rounded-xl px-4 py-2">
            Become a partner
          </a>
        </ul>

        <button className="hidden max-md:flex flex-col gap-[5px] cursor-pointer bg-transparent border-none p-1" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          <span className={`block w-6 h-[2px] bg-text transition-all duration-200 ${open ? "rotate-45 translate-y-[7px]" : ""}`} />
          <span className={`block w-6 h-[2px] bg-text transition-all duration-200 ${open ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-[2px] bg-text transition-all duration-200 ${open ? "-rotate-45 -translate-y-[7px]" : ""}`} />
        </button>
      </nav>

      {open && (
        <div className="fixed top-[57px] left-0 right-0 z-99 bg-bg2 border-b border-border flex flex-col px-5 py-6 gap-5 md:hidden">
          {navItems.map((item) => (
            <a key={item} href={`#${item.toLowerCase().replace(/\s+/g, "-")}`} className="text-text font-grotesk font-bold text-[16px] no-underline" onClick={() => setOpen(false)}>
              {item}
            </a>
          ))}
          <a href="#partners" className="font-bold font-grotesk bg-neon text-bg rounded-xl px-4 py-2.5 text-center no-underline text-[15px]" onClick={() => setOpen(false)}>
            Become a partner
          </a>
        </div>
      )}
    </>
  );
}
