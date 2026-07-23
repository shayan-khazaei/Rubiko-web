import { useLocation } from "react-router-dom";
import { beginnerIcons, speedcubingIcons, algorithmsIcons } from "./GuideDatas";
import List from "./List";
import ShowGuidIcons from "./ShowGuidIcons";
import { useState } from "react";

export default function SideBar({setIsOpenSidebar}) {
  const location = useLocation();
  const [activeId, setActiveId] = useState("");

  const sidebarIcons =
    location.pathname === "/solution-guides" ||
    location.pathname.includes("speedcubing") ||
    location.pathname.includes("algorithms");

  const sidebars = [
    {
      path: "/solution-guides",
      exact: true,
      icons: beginnerIcons,
    },
    {
      path: "speedcubing",
      icons: speedcubingIcons,
    },
    {
      path: "algorithms",
      icons: algorithmsIcons,
    },
  ];

  const currentSidebar = sidebars.find((sidebar) => {
    return sidebar.exact
      ? location.pathname === sidebar.path
      : location.pathname.includes(sidebar.path);
  });

  return (
    <>
      <section className="relative bg-grey-100 flex-2">
        <ul className="flex flex-col items-center pt-10 cursor-pointer text-center">
          <List to="/solution-guides" end>
            Beginners
          </List>
          <List to="speedcubing">Speedcubing</List>
          <List to="timer">Timer</List>
          <List to="algorithms">Algorithms</List>
          <List to="notation">Notation</List>
        </ul>
      </section>

      {sidebarIcons && (
        <section className="relative flex-[1.4] 2xl:flex-[1.2] bg-grey-200 z-10 ">
          <div className="absolute w-[2px] h-[100%] bg-green-500 top-0 left-[50%] -z-10 "></div>
          <ul className="flex flex-col items-center gap-5 h-full justify-center">
            {currentSidebar?.icons.map((data) => (
              <ShowGuidIcons
                image={data.image}
                id={data.id}
                key={data.id}
                activeId={activeId}
                setActiveId={setActiveId}
                setIsOpenSidebar={setIsOpenSidebar}
              />
            ))}
          </ul>
        </section>
      )}
    </>
  );
}