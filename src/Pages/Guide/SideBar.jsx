import { useLocation } from "react-router-dom";
import { beginnerIcons, speedcubingIcons, algorithmsIcons } from "./GuideDatas";
import List from "./List";
import ShowGuidIcons from "./ShowGuidIcons";

export default function SideBar() {
  const location = useLocation();
  const sidebarIcons =
    location.pathname === "/solution-guides" ||
    location.pathname.includes("speedcubing") ||
    location.pathname.includes("algorithms");

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
        <section className="relative flex-1 bg-grey-200 z-10 ">
          <div className="absolute w-[2px] h-[100%] bg-green-500 top-0 left-[52px] -z-10 "></div>
          <ul className="flex flex-col items-center gap-5 h-full justify-center">
            {location.pathname === "/solution-guides" &&
              beginnerIcons.map((data) => (
                <ShowGuidIcons image={data.image} id={data.id} key={data.id} />
              ))}
            {location.pathname.includes("speedcubing") &&
              speedcubingIcons.map((data) => (
                <ShowGuidIcons image={data.image} id={data.id} key={data.id} />
              ))}
            {location.pathname.includes("algorithms") &&
              algorithmsIcons.map((data) => (
                <ShowGuidIcons image={data.image} id={data.id} key={data.id} />
              ))}
          </ul>
        </section>
      )}
    </>
  );
}
