import NavItems from "./NavItems";

export default function Nav() {
  const navItems = ["Features", "How it works"];
  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-100 flex items-center justify-between px-12 py-[18px] bg-bg2/85 backdrop-blur-[12px] border-b border-border md:px-12 max-md:px-5 max-md:py-4">
        <a href="#hero" className="font-grotesk font-bold text-[22px] tracking-[3px] text-text no-underline">
          PULSE<span className="text-neon">.</span>
        </a>
        <ul className="flex gap-8 list-none max-md:hidden items-center">
          <NavItems items={navItems} />
          <a href="#partners" className="font-bold font-grotesk border bg-neon text-bg rounded-xl p-2 ">
            Become a partner
          </a>
        </ul>
      </nav>
    </>
  );
}
