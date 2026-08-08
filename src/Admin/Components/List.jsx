import { NavLink } from "react-router-dom";

export default function List({ children, to, end }) {
  return (
    <NavLink
      to={to}
      end={end}
      className={({ isActive }) =>
        `flex items-center gap-3 px-2 py-2 rounded-lg w-[200px] transition-all duration-75 cursor-pointer hover:bg-green-700 ${
          isActive ? "bg-green-700" : ""
        } `
      }
    >
      {children}
    </NavLink>
  );
}
