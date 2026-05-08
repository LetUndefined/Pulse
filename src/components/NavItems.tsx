type Props = {
  items: string[];
};

const NavItems = ({ items }: Props) => {
  return (
    <>
      {items.map((e) => (
        <li key={e}>
          <a href={`#${e.toLowerCase().replace(/\s+/g, "-")}`} className={"text-text font-grotesk font-bold"}>
            {e}
          </a>
        </li>
      ))}
    </>
  );
};

export default NavItems;
