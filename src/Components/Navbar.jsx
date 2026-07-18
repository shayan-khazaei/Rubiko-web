import toast from "react-hot-toast";
import List from "../Features/List";
import Button from "./Button";
import Logo from "./Logo";
import supabase from "../Services/Supabase";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  const logoutHandler = async () => {
    const { error } = await supabase.auth.signOut();
    navigate("/");

    if (error) toast.error("Something Went Wrong...");

    toast.success("You logged out successfully");
  };

  return (
    <nav className="flex justify-between items-center px-5 py-1 bg-grey-50 text-xl h-[88px]  ">
      <section className="flex items-center">
        <Logo />
      </section>
      <section>
        <ul className="flex items-center gap-8 text-grey-700">
          <List to="/">Home</List>
          <List to="/solution-guides">Solution Guides</List>
          <List to="/history">History</List>
          <List to="/brand">Brand Use Guide</List>
          <List to="/news-events-more">News & More</List>
        </ul>
      </section>
      <section className="flex items-center gap-2">
        <Button to="/login" variant="outline">
          Log in
        </Button>
        <Button onClick={logoutHandler} variant="outline">
          Log Out
        </Button>
      </section>
    </nav>
  );
}
