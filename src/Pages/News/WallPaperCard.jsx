import { FaArrowUpRightFromSquare } from "react-icons/fa6";

export default function WallPaperCard({ image, desktopImage, mobileImage }) {
  return (
    <div className="relative bg-grey-100 shadow-sm rounded-xl">
      <div>
        <img
          src={image}
          alt={`${""}Image`}
          className="rounded-t-xl object-cover lg:h-[250px] w-full "
        />
      </div>
      <div className="p-5">
        <a href={desktopImage} target="blank">
          <div className="flex items-center justify-between">
            <div className="text-2xl uppercase font-semibold flex gap-5 cursor-pointer">
              Desktop
            </div>
            <FaArrowUpRightFromSquare className="text-lg" />
          </div>
        </a>
        <div className="h-px bg-green-700"></div>
        <a href={mobileImage} target="blank">
          <div className="flex items-center justify-between">
            <div className="text-2xl uppercase font-semibold flex gap-5 cursor-pointer">
              Mobile
            </div>
            <FaArrowUpRightFromSquare className="text-lg" />
          </div>
        </a>
      </div>
    </div>
  );
}
