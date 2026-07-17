import { Outlet, useLocation } from "react-router-dom";
import SideBar from "./SideBar";
import RightLogo from "./RightLogo";

export default function Guide() {
  const location = useLocation();
  const isTimerPage = location.pathname.includes("timer");

  return (
    <div className="grid grid-cols-6">
      <section
        className={`col-span-1 flex justify-between sticky top-0 ${
          isTimerPage ? "h-[calc(100vh-88px)]" : "h-screen"
        }`}
      >
        <SideBar />
      </section>
      <section className="col-span-5 container mx-auto pt-10 pl-5 ">
        <Outlet />
      </section>
      <section>
        <RightLogo />
      </section>
    </div>
  );
}
