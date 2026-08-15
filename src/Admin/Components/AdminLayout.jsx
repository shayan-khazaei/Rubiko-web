import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

export default function AdminLayout() {
  return (
    <div className="">
      <aside className="fixed flex left-0 top-0 h-screen w-60">
        <Sidebar />
      </aside>
      <header className="fixed top-0 left-60 w-[calc(100%-15rem)] pt-5 px-5">
        <Navbar />
      </header>
      <main className="pl-64 pr-4 pt-20 bg-radial-[at_25%_25%] from-green-900 to-zinc-700 to-75% min-h-screen">
        <Outlet />
      </main>
    </div>
  );
}
