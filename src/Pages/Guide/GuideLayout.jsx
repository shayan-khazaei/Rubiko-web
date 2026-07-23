import { Outlet, useLocation } from "react-router-dom";
import SideBar from "./SideBar";
import RightLogo from "./RightLogo";
import { TbBaselineDensityMedium } from "react-icons/tb";
import { useEffect, useState } from "react";
import { RxCross2 } from "react-icons/rx";

export default function Guide() {
  const location = useLocation();
  const isTimerPage = location.pathname.includes("timer");
  const [isOpenSidebar, setIsOpenSidebar] = useState(false);

  const sideBarHandler = () => {
    setIsOpenSidebar((prev) => !prev);
  };

  useEffect(() => {
    setIsOpenSidebar(false);
  }, [location.pathname]);

  return (
    <div className="grid grid-cols-6">
      <section
        className={`col-span-1 xl:flex xl:justify-between xl:sticky xl:top-0 hidden xl:block"   ${
          isTimerPage ? "h-[calc(100vh-88px)]" : "h-screen"
        }`}
      >
        <SideBar />
      </section>
      <div
        className="fixed md:hidden right-2 top-4 text-lg cursor-pointer z-10"
        onClick={sideBarHandler}
      >
        {isOpenSidebar ? (
          <RxCross2 className="text-red-600" />
        ) : (
          <TbBaselineDensityMedium className="text-green-600" />
        )}
      </div>
      {isOpenSidebar && (
        <div className="fixed flex left-0 top-0 h-screen w-60">
          <SideBar setIsOpenSidebar={setIsOpenSidebar} />
        </div>
      )}
      <section className="col-span-5 container mx-auto pt-10 pl-5 sm:w-md md:w-full overflow-hidden ">
        <Outlet />
      </section>
      <section>
        <RightLogo />
      </section>
    </div>
  );
}
