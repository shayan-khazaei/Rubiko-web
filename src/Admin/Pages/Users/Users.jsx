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
import { useState } from "react";
import AddUser from "./AddUser";
import { GrAdd } from "react-icons/gr";

export default function Users() {
  const [searchInput, setSearchInput] = useState("");
  const [selectedRole, setSelectedRole] = useState("role");
  const [selectedStatus, setSelectedStatus] = useState("status");
  const [selectedDate, setSelectedDate] = useState("date");
  const [startIndex, setStartIndex] = useState(0);
  const [endIndex, setEndIndex] = useState(10);
  const [pageNumber, setPageNumber] = useState(1);
  const [showForm, setShowForm] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const nextPageHandler = () => {
    if (endIndex < filteredUsers.length) {
      setStartIndex((prev) => prev + 10);
      setEndIndex((prev) => prev + 10);
      setPageNumber((prev) => prev + 1);
    }
  };

  const prevPageHandler = () => {
    if (startIndex > 0) {
      setStartIndex((prev) => prev - 10);
      setEndIndex((prev) => prev - 10);
      setPageNumber((prev) => prev - 1);
    }
  };

  const CheckDateFilter = (joinedAt) => {
    if (selectedDate === "date") return true;

    const userDate = new Date(joinedAt);
    const today = new Date();

    if (isNaN(userDate.getTime())) return false;

    const difference = today - userDate;
    const differenceInDays = difference / (1000 * 60 * 60 * 24);

    if (selectedDate === "30days") {
      return differenceInDays >= 0 && differenceInDays <= 30;
    }

    if (selectedDate === "6month") {
      return differenceInDays >= 0 && differenceInDays <= 180;
    }

    if (selectedDate === "1year") {
      return differenceInDays >= 0 && differenceInDays <= 365;
    }

    return true;
  };

  const filteredUsers = UsersData.filter((user) => {
    const matchesSearch = user.user
      .toLowerCase()
      .includes(searchInput.toLowerCase());

    const matchesRole =
      selectedRole === "role" ||
      user.role.toLowerCase() === selectedRole.toLowerCase();

    const matchesStatus =
      selectedStatus === "status" ||
      user.status.toLowerCase() === selectedStatus.toLowerCase();

    const matchesDate = CheckDateFilter(user.joinedAt);

    return matchesSearch && matchesRole && matchesStatus && matchesDate;
  });

  const exportUsers = () => {
    const headers = ["User", "Email", "JoinedAt", "Role", "Status"];

    const rows = filteredUsers.map((user) => [
      user.user,
      user.email,
      user.joinedAt,
      user.role,
      user.status,
    ]);

    const escapeSCV = (value) => {
      return `"${String(value ?? "").replace(/"/g, '""')}"`;
    };

    const csvContent =
      "\uFEFF" +
      [headers, ...rows]
        .map((row) => row.map(escapeSCV).join(","))
        .join("\r\n");

    const blob = new Blob([csvContent], {
      type: "text/csv;charset=utf-8;",
    });

    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.download = "filtered-users.scv";

    document.body.appendChild(link);
    link.click();
    link.remove();

    URL.revokeObjectURL(url);
  };

  const deleteUserHandler = () => {
    // filteredUsers.filter((user) => user.id !== id);
  };

  const statusStyle = {
    Active: "bg-green-700 text-green-400",
    Inactive: "bg-gray-700 text-gray-400",
    Pending: "bg-yellow-700 text-yellow-400",
    Suspended: "bg-orange-700 text-orange-400",
    Banned: "bg-red-700 text-red-400",
  };

  return (
    <>
      <div className="w-[79%] mx-auto mt-6 relative">
        <section className="text-center space-y-1">
          <h2 className="text-4xl text-gray-100">User Management</h2>
          <h4 className="text-xl text-gray-400">
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
                className=" bg-gray-600 text-gray-300 placeholder:text-gray-300 px-2 py-2.5 w-70 rounded-lg focus:outline-0 focus:border-1 focus:border-green-800"
                onChange={(e) => setSearchInput(e.target.value)}
              />
            </div>
            <div className="relative">
              <select
                name="userRole"
                id="user_role"
                className="text-gray-300 shadow-2xl w-29 text-center bg-radial-[at_25%_25%] from-zinc-800 to-green-900 to-95% pl-3 pr-8 py-2.5 rounded-lg cursor-pointer hover:text-gray-400 focus:outline-none appearance-none"
                onChange={(e) => setSelectedRole(e.target.value)}
              >
                <option
                  value="role"
                  className="bg-green-900 hover:bg-green-600"
                >
                  Role
                </option>
                <option
                  value="user"
                  className="bg-green-900 hover:bg-green-600"
                >
                  User
                </option>
                <option
                  value="admin"
                  className="bg-green-900 hover:bg-green-600"
                >
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
                onChange={(e) => setSelectedStatus(e.target.value)}
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
                onChange={(e) => setSelectedDate(e.target.value)}
              >
                <option
                  value="date"
                  className="bg-green-900 hover:bg-green-600"
                >
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
                <option
                  value="1year"
                  className="bg-green-900 hover:bg-green-600"
                >
                  1 year
                </option>
              </select>
              <MdArrowDropDown className="absolute pointer-events-none text-xl top-1/2 -translate-y-1/2 right-0 text-gray-400" />
            </div>
          </section>
          <section className="flex items-center gap-10 ">
            <Button onClick={exportUsers}>
              <span className="flex items-center gap-2">
                <PiExportLight /> Export
              </span>
            </Button>
            <Button
              variant="outline"
              onClick={() => setShowForm((prev) => !prev)}
            >
              Add User
            </Button>
          </section>
        </section>
        <section>
          <div>
            <table className="w-full mx-auto mt-5 text-left ">
              <thead>
                <tr className="border border-green-800 text-lg text-gray-100 ">
                  {theadData.map((thead) => (
                    <td key={thead} className="px-2 py-1">
                      {thead}
                    </td>
                  ))}
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredUsers.slice(startIndex, endIndex).map((user) => (
                  <tr
                    key={user.id}
                    className="border border-green-800 text-gray-300"
                  >
                    <th className="px-2 py-1 flex items-center gap-3">
                      <img
                        src={user.image || "/images/logoIcon.png"}
                        alt="userImage"
                        className="w-9 h-9 rounded-full border border-gray-700"
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
                      <CiEdit className="text-red-500 cursor-pointer" />
                      <RiDeleteBin5Line
                        className="text-green-500 cursor-pointer"
                        onClick={() => setShowDeleteModal((prev) => !prev)}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
        <section className="mt-3 flex items-center justify-between">
          <div className="text-gray-300">
            Page <span>{pageNumber}</span> of
            <span className="ml-1">
              {" "}
              {Math.ceil(filteredUsers.length / 10)}
            </span>
          </div>
          <div className="bg-radial-[at_25%_25%] from-zinc-950 to-green-900 to-95% text-green-300">
            <button
              className=" px-2 py-2 text-xl border border-green-900 cursor-pointer "
              onClick={prevPageHandler}
            >
              <MdOutlineKeyboardArrowLeft />
            </button>
            <button
              className=" px-2 py-2 text-xl border border-green-900 border-l-0 cursor-pointer "
              onClick={nextPageHandler}
            >
              <MdOutlineKeyboardArrowRight />
            </button>
          </div>
        </section>
      </div>
      {showForm && (
        <div className="fixed inset-0 z-50 bg-black/50">
          <AddUser onClose={() => setShowForm(false)} />
        </div>
      )}
      {showDeleteModal && (
        <div className="bg-radial-[at_15%_15%] from-zinc-800 to-green-900 to-98% opacity-99 w-sm h-46 rounded-lg flex flex-col items-center fixed top-10 left-1/2 -translate-x-1/2 p-3">
          <p className="text-gray-200 relative text-2xl">Delete The User !?</p>
          <p className="text-gray-400 relative text-md text-center mt-2">
            The deleted user cannot be restored and must signup again.
          </p>
          <div className="flex gap-2 absolute bottom-2 right-2">
            <button className="bg-radial-[at_25%_25%] from-zinc-900 to-green-900 to-70% px-10 py-3 rounded-md text-gray-200 text-lg cursor-pointer hover:to-80%">
              yes
            </button>
            <button
              className="bg-radial-[at_25%_25%] from-zinc-900 to-green-900 to-70% px-10 py-3 rounded-md text-gray-200 text-lg cursor-pointer hover:to-80%"
              onClick={() => {
                setShowDeleteModal(false);
              }}
            >
              no
            </button>
          </div>
          <div
            className="absolute top-2 right-2 text-lg text-gray-300 rotate-45 cursor-pointer"
            onClick={() => {
              setShowDeleteModal(false);
            }}
          >
            <GrAdd />
          </div>
        </div>
      )}
    </>
  );
}
