import { Outlet } from "react-router";
import PartnerNav from "../components/Partners/PartnerNav";

const PartnerNavLayout = () => {
  return (
    <div className="flex min-h-screen bg-bg2">
      <PartnerNav />
      <main className="flex-1 p-xl">
        <Outlet />
      </main>
    </div>
  );
};

export default PartnerNavLayout;
