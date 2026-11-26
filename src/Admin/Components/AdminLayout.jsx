import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

export default function AdminLayout() {
  return (
    <>
      <div className="block min-[1900px]:hidden bg-radial-[at_25%_25%] from-green-900 to-zinc-800 to-75% min-h-screen">
        <div className="bg-radial-[at_25%_25%] from-green-900 to-zinc-900 to-65% text-center md:w-xl p-5 fixed top-1/2 left-1/2 -translate-1/2">
          <p className="text-gray-100 text-lg">
            Please use a laptop or desktop computer to access the dashboard
          </p>
        </div>
      </div>
      <div className="hidden min-[1900px]:block  ">
        <aside className="fixed flex left-0 top-0 h-screen w-60">
          <Sidebar />
        </aside>
        <header className="fixed top-0 left-60 w-[calc(100%-15rem)] pt-5 px-5">
          <Navbar />
        </header>
        <main className="pl-64 pr-4 pt-20 bg-radial-[at_25%_25%] from-green-900 to-zinc-800 to-75% min-h-screen">
          <Outlet />
        </main>
      </div>
    </>
  );
}
