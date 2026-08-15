import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts";
import DashboardCard from "./DashboardCard";
import { CardsData, ChartData, UsersData, theadData } from "./DashboardData";
import { MdArrowDropDown } from "react-icons/md";
import Button from "../../Components/Button";

export default function Dashboard() {
  return (
    <div className="space-y-6 w-[79%] mx-auto">
      <section className="flex justify-center gap-12">
        {CardsData.map((item) => (
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
      <section className="flex flex-col items-center justify-center rounded-lg shadow-xl pt-5 pb-10 border border-gray-700">
        <div className="w-full flex justify-between px-5 mb-5">
          <h2 className="text-xl text-gray-100">User Registrations</h2>
          <div className="relative">
            <select
              name="filterUsers"
              id="filter_users"
              className="text-gray-200 shadow-2xl bg-gray-600 pl-3 pr-6 py-2.5 rounded-lg cursor-pointer hover:text-gray-400 focus:border-none focus:outline-0 appearance-none"
            >
              <option value="30days">Last 30 days</option>
              <option value="6month">6 month</option>
              <option value="1year">1 year</option>
            </select>
            <MdArrowDropDown className="absolute pointer-events-none text-xl top-1/2 -translate-y-1/2 right-0 text-gray-400" />
          </div>
        </div>
        <LineChart
          style={{
            width: "70%",
            height: 250,
          }}
          data={ChartData}
          responsive
          className="focus:border-none focus:outline-none"
        >
          <CartesianGrid stroke="var(--color-border-3)" strokeDasharray="5 5" />
          <XAxis
            dataKey="month"
            stroke="#d7e1db"
            padding={{ left: 20, right: 20 }}
          />
          <YAxis
            width="auto"
            ticks={[0, 100, 200, 300, 400]}
            stroke="#d7e1db"
            padding={{ top: 20, bottom: 20 }}
          />
          <Line
            type="monotone"
            dataKey="users"
            stroke="#08e95a"
            dot={{
              fill: "#3f4240",
            }}
            activeDot={{
              stroke: "#3f4240",
            }}
          />
          {/* <RechartsDevtools /> */}
        </LineChart>
      </section>
      <section className="flex flex-col justify-center rounded-lg shadow-xl pt-5 pb-5 border border-gray-700">
        <div className="w-full flex justify-between px-5 mb-1">
          <h2 className="text-xl text-gray-100">Recent Users</h2>
          <div className="relative">
            <Button>View all</Button>
          </div>
        </div>
        <table className="w-[85%] mx-auto text-left ">
          <thead>
            <tr className="border border-green-800 text-lg text-gray-100 ">
              {theadData.map((thead) => (
                <th className="px-2 py-1">{thead}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {UsersData.slice(0, 2).map((user) => (
              <tr className="border border-green-800 text-gray-300">
                <th className="px-2 py-1 flex items-center gap-3">
                  <img
                    src={user.image}
                    alt="userImage"
                    className="w-9 h-9 rounded-full border border-gray-700"
                  />
                  {user.user}
                </th>
                <td className="px-2 py-1">{user.email}</td>
                <td className="px-2 py-1">{user.joinedAt}</td>
                <td className="px-2 py-1">{user.role}</td>
                <td className="px-2 py-1">{user.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
}
