import { IoIosArrowRoundDown, IoIosArrowRoundUp } from "react-icons/io";

export default function DashboardCard({
  title,
  amount,
  rate,
  rank,
  color,
  icon: Icon,
}) {
  return (
    <div className="w-72 h-52 rounded-lg shadow-xl pl-5 flex flex-col justify-center border border-green-700 relative ">
      <section className="flex items-center gap-3">
        <div
          className={`${color} w-14 h-14 rounded-full flex items-center justify-center`}
        >
          <Icon />
        </div>
        <div>
          <h2 className="text-2xl text-gray-100">{title}</h2>
          <h4 className="text-3xl text-gray-400 font-semibold">{amount}</h4>
        </div>
      </section>
      <section className="text-sm space-x-4 absolute bottom-2 flex">
        <div className="flex">
          <span
            className={`text-lg ${
              rank === "up" ? "text-green-400" : "text-red-400"
            }`}
          >
            {rank === "up" ? <IoIosArrowRoundUp /> : <IoIosArrowRoundDown />}
          </span>
          <span className="text-gray-100">{rate}</span>
        </div>
        <span className="text-gray-200">vs last month</span>
      </section>
    </div>
  );
}
