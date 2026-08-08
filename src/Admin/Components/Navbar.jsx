// import { FaArrowDownShortWide } from "react-icons/fa6";
import { CiBellOn } from "react-icons/ci";
import { HiOutlineBars3 } from "react-icons/hi2";
import { IoMdArrowDropdown } from "react-icons/io";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between">
      <section className="flex gap-3">
        <HiOutlineBars3 className="text-2xl cursor-pointer" />
        {/* <FaArrowDownShortWide /> */}
        <div className="-mt-1">
          <h2 className="text-2xl font-semibold  ">Dashboard</h2>
          <h4 className="text-gray-500 text-sm">Welcome back, Shayan!</h4>
        </div>
      </section>
      <section className="flex items-center gap-14">
        <div>
          <input
            type="text"
            name="searchbox"
            id="searchbox"
            placeholder="🔍    Search..."
            className=" bg-white px-2 py-1.5 rounded-lg"
          />
        </div>
        <div className="flex items-center gap-8 ">
          <div className="relative">
            <CiBellOn className="text-3xl cursor-pointer" />
            <div className="absolute bottom-4.5 left-5 flex items-center justify-center bg-green-700 text-[10px] text-white w-4 h-4 rounded-full ">
              3
            </div>
          </div>

          <div className="flex gap-3">
            <img
              src="/images/mainProfile.jpg"
              alt="profileImg"
              className="w-12 rounded-full"
            />
            <div>
              <h2 className="text-gray-700">Shayan</h2>
              <h4 className="text-sm text-gray-400">Admin</h4>
            </div>
          </div>
          <IoMdArrowDropdown className="text-xl cursor-pointer" />
        </div>
      </section>
    </nav>
  );
}
