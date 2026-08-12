import Logo from "./Logo";
import { FaHome } from "react-icons/fa";
import List from "./List";
import { FiUsers } from "react-icons/fi";
import { FaRegNewspaper } from "react-icons/fa6";
import { LuFileClock } from "react-icons/lu";
import { VscReport } from "react-icons/vsc";
import { CiSettings } from "react-icons/ci";
import Button from "./Button";
import { IoExitOutline } from "react-icons/io5";

export default function Sidebar() {
  return (
    <aside className="relative flex flex-col items-start w-60 px-5 py-1 bg-radial-[at_25%_25%] from-zinc-950 to-green-900 to-95% text-xl">
      <section className="flex items-center">
        <Logo />
      </section>
      <section>
        <ul className="flex flex-col gap-6 text-gray-300 text-xl mt-5">
          <List to="/dashboard" end>
            <FaHome />
            Overview
          </List>
          <List to="users">
            <FiUsers />
            Users
          </List>
          <List to="news">
            <FaRegNewspaper /> News
          </List>
          <List to="records">
            <LuFileClock />
            Records
          </List>
          <List to="reports">
            <VscReport />
            Reports
          </List>
          <List to="settings">
            <CiSettings />
            Settings
          </List>
        </ul>
      </section>
      <section className="absolute bottom-0 left-0 w-full px-2 py-10 flex flex-col gap-3">
        <div className="flex py-5 items-center gap-3 shadow-2xl rounded-lg">
          <img
            src="/images/mainProfile.jpg"
            alt="profileImg"
            className="w-12 rounded-full"
          />
          <div>
            <h2 className="text-gray-200">Shayan</h2>
            <h4 className="text-sm text-gray-400">Admin</h4>
          </div>
        </div>
        <Button
        //   disabled={isLoading}
        //   onClick={logoutHandler}
        >
          <IoExitOutline className="text-2xl" />
          Log Out
        </Button>
      </section>
    </aside>
  );
}
