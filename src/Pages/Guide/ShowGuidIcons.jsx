import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ShowGuidIcons({
  image,
  id,
  activeId,
  setActiveId,
  setIsOpenSidebar,
}) {
  const location = useLocation();
  const clickHandler = () => {
    setActiveId(id);
    setIsOpenSidebar(false);
  };

  const isActive = id <= activeId;

  useEffect(() => {
    setActiveId("");
  }, [location.pathname, setActiveId]);

  return (
    <li
      className="transition-all duration-300 flex items-center justify-center rounded-full w-[70px] h-[70px] cursor-pointer border-1 border-green-500 bg-grey-200"
      onClick={clickHandler}
    >
      <a href={`#${id}`}>
        <img
          src={image}
          alt={`${id}image`}
          className={`w-[50px] hover:brightness-100 ${
            isActive ? "brightness-100" : "brightness-50"
          }`}
        />
      </a>
    </li>
  );
}
