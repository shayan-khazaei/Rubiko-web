import { MdArrowDropDown } from "react-icons/md";
import DashboardCard from "../Dashboard/DashboardCard";
import { CardData, ChartData, RecordsData, theadData } from "./ReportsData";
import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts";
import ReportsRankCard from "./ReportsRankCard";
import { TopUsersData, BestTimeData } from "./ReportsData";

export default function Reports() {
  return (
    <div className="space-y-6 w-[79%] mx-auto">
      <section className="flex-2 flex justify-center gap-12">
        {CardData.map((item) => (
          <DashboardCard
            title={item.Title}
            amount={item.Amount}
            rate={item.rate}
            rank={item.rank}
            icon={item.icon}
            color={item.color}
          />
        ))}
      </section>
      <section className="grid grid-cols-3">
        <section className="col-span-2 space-y-6">
          <section className="col-span-2">
            <section className="flex flex-col items-center justify-center rounded-lg shadow-xl pt-5 pb-10 border border-grey-100">
              <div className="w-full flex justify-between px-5 mb-5">
                <h2 className="text-xl">User Registrations</h2>
                <div className="relative">
                  <select
                    name="filterUsers"
                    id="filter_users"
                    className="text-gray-300 shadow-2xl bg-radial-[at_25%_25%] from-zinc-800 to-green-900 to-95% px-3 py-2.5 rounded-lg cursor-pointer hover:text-gray-400 focus:border-none focus:outline-0 appearance-none"
                  >
                    <option value="daily">Daily</option>
                    <option value="weekly">Weekly</option>
                    <option value="monthly">Monthly</option>
                  </select>
                  <MdArrowDropDown className="absolute pointer-events-none text-xl top-1/2 -translate-y-1/2 right-0 text-gray-400" />
                </div>
              </div>
              <AreaChart
                style={{
                  width: "70%",
                  height: 250,
                }}
                data={ChartData}
                responsive
                className="focus:border-none focus:outline-none"
              >
                <CartesianGrid
                  stroke="var(--color-border-3)"
                  strokeDasharray="5 5"
                />
                <XAxis
                  dataKey="time"
                  stroke="var(--color-text-3)"
                  padding={{ left: 20, right: 20 }}
                />
                <YAxis
                  width={50}
                  stroke="var(--color-text-3)"
                  padding={{ top: 20, bottom: 20 }}
                />
                <Area
                  type="monotone"
                  dataKey="attempt"
                  stroke="#22c55e"
                  fill="#116f08"
                  fillOpacity={0.15}
                />
                {/* <RechartsDevtools /> */}
              </AreaChart>
            </section>
          </section>
          <section className="col-span-1 justify-center rounded-lg shadow-xl pt-5 pb-5 border border-grey-100">
            <table className="w-[85%] mx-auto text-left ">
              <thead>
                <tr className="border border-gray-300 text-lg ">
                  {theadData.map((thead) => (
                    <th className="px-2 py-1">{thead}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {RecordsData.slice(0, 2).map((user) => (
                  <tr className="border border-gray-300">
                    <th className="px-2 py-1 flex items-center gap-3">
                      <img
                        src={user.image}
                        alt="userImage"
                        className="w-9 h-9 rounded-full border border-green-300"
                      />
                      {user.user}
                    </th>
                    <td className="px-2 py-1">{user.time}</td>
                    <td className="px-2 py-1">{user.type}</td>
                    <td className="px-2 py-1">{user.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>
        </section>
        <section className="col-span-1 space-y-2.5">
          <section>
            <ReportsRankCard data={TopUsersData} attempt />
          </section>
          <section>
            <ReportsRankCard data={BestTimeData} />
          </section>
        </section>
      </section>
    </div>
  );
}
