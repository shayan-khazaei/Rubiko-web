import List from "../Features/List";
import { FaHistory, FaHome } from "react-icons/fa";
import { SiBrandfolder } from "react-icons/si";
import { IoNewspaperOutline } from "react-icons/io5";

export default function MobileGuideNavBar() {
  return (
    <>
      <nav className="md:hidden fixed right-0 top-18 flex flex-col items-center gap-5 px-3 py-5 bg-grey-50 text-xl">
        <section>
          <ul className="flex flex-col items-center gap-8 text-grey-700 text-xl">
            <List to="/">
              <FaHome />
            </List>
            <List to="/history">
              <FaHistory />
            </List>
            <List to="/brand">
              <SiBrandfolder />
            </List>
            <List to="/news-events-more">
              <IoNewspaperOutline />
            </List>
          </ul>
        </section>
      </nav>
    </>
  );
}
