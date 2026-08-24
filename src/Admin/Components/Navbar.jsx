// import { FaArrowDownShortWide } from "react-icons/fa6";
import { CiBellOn } from "react-icons/ci";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between">
      <section className="flex flex-col">
        <h2 className="text-2xl text-gray-200 font-semibold">Dashboard</h2>
        <h4 className="text-gray-300 text-sm">Welcome back, Shayan!</h4>
      </section>
      <section className="flex items-center gap-6">
        <div className="relative">
          <CiBellOn className="text-3xl text-gray-200 cursor-pointer" />
          <p className="absolute bottom-4.5 left-5 flex items-center justify-center text-black font-semibold bg-green-500 text-[10px] w-4 h-4 rounded-full ">
            3
          </p>
        </div>
      </section>
    </nav>
  );
}
