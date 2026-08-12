import {
  MdArrowDropDown,
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";
import Button from "../../Components/Button";
import { PiExportLight } from "react-icons/pi";
import { UsersData, theadData } from "../Dashboard/DashboardData";
import { CiEdit } from "react-icons/ci";
import { RiDeleteBin5Line } from "react-icons/ri";

export default function Users() {
  const statusStyle = {
    Active: "bg-green-100 text-green-700",
    Inactive: "bg-gray-100 text-gray-700",
    Pending: "bg-yellow-100 text-yellow-700",
    Suspended: "bg-orange-100 text-orange-700",
    Banned: "bg-red-100 text-red-700",
  };

  return (
    <div className="w-[79%] mx-auto mt-6">
      <section className="text-center space-y-1">
        <h2 className="text-4xl text-gray-600">User Management</h2>
        <h4 className="text-xl text-gray-500">
          Manage all users in one place, Control access, assign roles, and
          monitor activity...
        </h4>
      </section>
      <section className="flex items-center justify-between mt-10">
        <section className="flex items-center gap-5">
          <div>
            <input
              type="text"
              name="searchbox"
              id="searchbox"
              placeholder="🔍    Search User..."
              className=" bg-white px-2 py-2.5 w-70 rounded-lg focus:outline-0 focus:border-1 focus:border-green-800"
            />
          </div>
          <div className="relative">
            <select
              name="userRole"
              id="user_role"
              className="text-gray-300 shadow-2xl w-29 text-center bg-radial-[at_25%_25%] from-zinc-800 to-green-900 to-95% pl-3 pr-8 py-2.5 rounded-lg cursor-pointer hover:text-gray-400 focus:outline-none appearance-none"
            >
              <option value="role" className="bg-green-900 hover:bg-green-600">
                Role
              </option>
              <option value="user" className="bg-green-900 hover:bg-green-600">
                User
              </option>
              <option value="admin" className="bg-green-900 hover:bg-green-600">
                Admin
              </option>
            </select>
            <MdArrowDropDown className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none text-xl text-gray-400" />
          </div>
          <div className="relative">
            <select
              name="userStatus"
              id="user_status"
              className="text-gray-300 shadow-2xl w-29 text-center bg-radial-[at_25%_25%] from-zinc-800 to-green-900 to-95% pl-3 pr-8 py-2.5 rounded-lg cursor-pointer hover:text-gray-400 focus:outline-none appearance-none"
            >
              <option
                value="status"
                className="bg-green-900 hover:bg-green-600"
              >
                Status
              </option>
              <option
                value="active"
                className="bg-green-900 hover:bg-green-600"
              >
                Active
              </option>
              <option
                value="inactive"
                className="bg-green-900 hover:bg-green-600"
              >
                Inactive
              </option>
              <option
                value="pending"
                className="bg-green-900 hover:bg-green-600"
              >
                Pending
              </option>
              <option
                value="suspended"
                className="bg-green-900 hover:bg-green-600"
              >
                Suspended
              </option>
              <option
                value="banned"
                className="bg-green-900 hover:bg-green-600"
              >
                Banned
              </option>
            </select>

            <MdArrowDropDown className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none text-xl text-gray-400" />
          </div>
          <div className="relative">
            <select
              name="filterUsers"
              id="filter_users"
              className="text-gray-300 shadow-2xl w-29 text-center bg-radial-[at_25%_25%] from-zinc-800 to-green-900 to-95% pl-3 pr-6 py-2.5 rounded-lg cursor-pointer hover:text-gray-400 focus:border-none focus:outline-0 appearance-none"
            >
              <option value="date" className="bg-green-900 hover:bg-green-600">
                Date
              </option>
              <option
                value="30days"
                className="bg-green-900 hover:bg-green-600"
              >
                Last 30 days
              </option>
              <option
                value="6month"
                className="bg-green-900 hover:bg-green-600"
              >
                6 month
              </option>
              <option value="1year" className="bg-green-900 hover:bg-green-600">
                1 year
              </option>
            </select>
            <MdArrowDropDown className="absolute pointer-events-none text-xl top-1/2 -translate-y-1/2 right-0 text-gray-400" />
          </div>
        </section>
        <section className="flex items-center gap-10 ">
          <Button light={true}>
            <a
              href="path_to_file"
              download="proposed_file_name"
              className="flex items-center gap-2"
            >
              <PiExportLight /> Export
            </a>
          </Button>
          <Button variant="outline">Add User</Button>
        </section>
      </section>
      <section>
        <div>
          <table className="w-full mx-auto mt-5 text-left ">
            <thead>
              <tr className="border border-gray-300 text-lg ">
                {theadData.map((thead) => (
                  <td key={thead} className="px-2 py-1">
                    {thead}
                  </td>
                ))}
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {UsersData.map((user) => (
                <tr key={user.email} className="border border-gray-300">
                  <th className="px-2 py-1 flex items-center gap-3">
                    <img
                      src={user.image}
                      alt="userImage"
                      className="w-9 h-9 rounded-full border border-green-300"
                    />
                    {user.user}
                  </th>
                  <td className="px-2 py-1">{user.email}</td>
                  <td className="px-2 py-1">{user.joinedAt}</td>
                  <td className="px-2 py-1">{user.role}</td>
                  <td className="px-2 py-1">
                    <div
                      className={`w-20 py-1 text-center rounded-2xl ${
                        statusStyle[user.status]
                      }`}
                    >
                      {user.status}
                    </div>
                  </td>
                  <td className="flex items-center gap-5 text-lg -translate-y-1/2">
                    <CiEdit className="text-red-900 cursor-pointer" />
                    <RiDeleteBin5Line className="text-green-900 cursor-pointer" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
      <section className="mt-3 flex items-center justify-between">
        <div>
          Page <span>1</span> of <span className="ml-1">5</span>
        </div>
        <div className="bg-radial-[at_25%_25%] from-zinc-950 to-green-900 to-95% text-green-300">
          <button className=" px-2 py-2 text-xl border border-green-900 cursor-pointer ">
            <MdOutlineKeyboardArrowLeft />
          </button>
          <button className=" px-2 py-2 text-xl border border-green-900 border-l-0 cursor-pointer ">
            <MdOutlineKeyboardArrowRight />
          </button>
        </div>
      </section>
    </div>
  );
}
