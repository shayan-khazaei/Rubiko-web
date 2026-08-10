// import { FaArrowDownShortWide } from "react-icons/fa6";
import { CiBellOn } from "react-icons/ci";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between">
      <section className="flex flex-col">
        <h2 className="text-2xl font-semibold  ">Dashboard</h2>
        <h4 className="text-gray-600 text-sm">Welcome back, Shayan!</h4>
      </section>
      <section className="flex items-center gap-6">
        <div>
          <input
            type="text"
            name="searchbox"
            id="searchbox"
            placeholder="🔍    Search..."
            className=" bg-white px-2 py-1.5 rounded-lg focus:outline-0 focus:border-1 focus:border-green-800"
          />
        </div>
        <div className="relative">
          <CiBellOn className="text-3xl cursor-pointer" />
          <p className="absolute bottom-4.5 left-5 flex items-center justify-center text-white bg-green-700 text-[10px] w-4 h-4 rounded-full ">
            3
          </p>
        </div>
      </section>
    </nav>
  );
}
