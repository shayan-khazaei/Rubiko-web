import { NavLink } from "react-router-dom";

export default function List({ children, to, end }) {
  return (
    <li
      className={`w-full mt-2 flex justify-center hover:bg-green-500 transition-all duration-[0.2s]`}
    >
      <NavLink
        to={to}
        end={end}
        className={({ isActive }) =>
          `w-full py-2.5 ${isActive ? "border-l-5 border-green-600" : ""}`
        }
      >
        {children}
      </NavLink>
    </li>
  );
}
