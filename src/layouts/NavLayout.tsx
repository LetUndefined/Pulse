import { Outlet } from "react-router";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";

const NavLayout = () => {
  return (
    <>
      <ScrollToTop />
      <Nav />
      <Outlet />
      <Footer />
    </>
  );
};

export default NavLayout;
