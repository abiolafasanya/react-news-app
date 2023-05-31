import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = () => {
  return (
    <div
      className={
        "w-full min-h-screen max-w-[1440px] container mx-auto bg-primary-50 overflow-hidden"
      }
    >
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
