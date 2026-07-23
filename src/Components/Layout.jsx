import { RxCross2 } from "react-icons/rx";
import Footer from "./Footer";
import Navbar from "./Navbar";
import MobileNavbar from "./MobileNavbar";
import { Outlet, useLocation } from "react-router-dom";
import { TbBaselineDensityMedium } from "react-icons/tb";
import { useState } from "react";
import { FaArrowDownShortWide } from "react-icons/fa6";
import MobileGuideNavBar from "./MobileGuideNavBar";

export default function Layout() {
  const location = useLocation();
  const isGuide = location.pathname.startsWith("/solution-guides");
  const isBrand = location.pathname.includes("brand");
  const hasNoPaddingTop = isGuide || isBrand;

  const [isOpenNavBar, setIsOpenNavBar] = useState(false);
  const [isOpenGuideNavBar, setIsOpenGuideNavBar] = useState(false);

  const NavBarHandler = () => {
    setIsOpenNavBar((prev) => !prev);
  };

  const GuideNavBarHandler = () => {
    setIsOpenGuideNavBar((prev) => !prev);
  };

  return (
    <div className="flex flex-col min-h-screen ">
      <Navbar />
      {!isGuide ? (
        <div
          className="fixed md:hidden right-2 top-4 text-lg cursor-pointer z-10"
          onClick={NavBarHandler}
        >
          {isOpenNavBar ? (
            <RxCross2 className="text-red-600" />
          ) : (
            <TbBaselineDensityMedium className="text-green-600" />
          )}
        </div>
      ) : (
        <button
          className="fixed md:hidden right-2 top-10 text-lg cursor-pointer z-10"
          onClick={GuideNavBarHandler}
        >
          <FaArrowDownShortWide
            className={`${
              isOpenGuideNavBar ? "text-grey-600" : "text-grey-800 rotate-90"
            }`}
          />
        </button>
      )}
      {isOpenNavBar && (
        <div className="fixed flex left-0 top-0 h-screen w-60 z-50">
          <MobileNavbar setIsOpenNavBar={setIsOpenNavBar} />
        </div>
      )}
      {isOpenGuideNavBar && <MobileGuideNavBar />}
      <main className={`flex-1 md:pt-0 ${!hasNoPaddingTop && "pt-8"}`}>
        <Outlet />
      </main>
      {!isGuide && <Footer />}
    </div>
  );
}
