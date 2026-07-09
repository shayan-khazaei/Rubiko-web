import Footer from "./Footer";
import Navbar from "./Navbar";
import { Outlet, useLocation } from "react-router-dom";

export default function Layout() {
  const location = useLocation();
  const isGuide = location.pathname.startsWith("/solution-guides");

  return (
    <div className="flex flex-col min-h-screen ">
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      {!isGuide && <Footer />}
    </div>
  );
}
