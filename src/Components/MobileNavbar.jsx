import toast from "react-hot-toast";
import List from "../Features/List";
import Button from "./Button";
import supabase from "../Services/Supabase";
import { useNavigate } from "react-router-dom";
import useAuth from "../Hook/useAuth";
import { useState } from "react";

export default function MobileNavbar({ setIsOpenNavBar }) {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const { session } = useAuth();

  const logoutHandler = async () => {
    setIsLoading(true);
    const { error } = await supabase.auth.signOut();
    setIsLoading(false);
    navigate("/");
    setIsOpenNavBar(false);

    if (error) toast.error("Something Went Wrong...");

    toast.success("You logged out successfully");
  };

  return (
    <>
      <nav className="md:hidden relative flex flex-col items-center h-screen border-r-2 border-green-700 gap-5 px-3 py-5 bg-grey-50 text-xl">
        <section className="flex items-center gap-2">
          <a href="/">
            <img
              className="cursor-pointer w-[3.5rem]"
              src="/images/logoIcon.png"
              alt="menuIcon"
            />
          </a>
          <h2 className="text-xl font-medium text-grey-800">Rubiko</h2>
        </section>
        <section>
          <ul className="flex flex-col items-center gap-8 text-grey-700 text-sm">
            <List to="/">Home</List>
            <List to="/solution-guides">Solution Guides</List>
            <List to="/history">History</List>
            <List to="/brand">Brand Use Guide</List>
            <List to="/news-events-more">News & More</List>
          </ul>
        </section>
      </nav>
      <section className="flex items-center gap-2 absolute bottom-2 left-2">
        {session ? (
          <Button
            disabled={isLoading}
            onClick={logoutHandler}
            variant="outline"
          >
            Log Out
          </Button>
        ) : (
          <Button to="/login" variant="outline">
            Log in
          </Button>
        )}
      </section>
    </>
  );
}
