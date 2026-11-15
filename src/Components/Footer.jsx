import { SiGmail, SiInstagram, SiTelegram } from "react-icons/si";
import List from "../Features/List";

export default function Footer() {
  return (
    <div className="flex justify-end items-center px-5 py-1 h-[88px] text-gray-200 bg-radial-[at_25%_25%] from-green-600 to-zinc-800 to-75% text-xs md:text-xl">
      <ul className="flex gap-2 md:gap-5 items-center">
        <List border="noBorder">Contact Us</List>
        <div className="flex gap-2 md:gap-5">
          <List to="https://instagram.com/shayan_kze/" border="noBorder" changeColor>
            <SiInstagram className="text-green-600 hover:text-green-700" />
          </List>
          <List to="https://t.me/shayan_kze16/" border="noBorder" changeColor>
            <SiTelegram className="text-green-600 hover:text-green-700" />
          </List>
          <List to="mailto:shayankhazaie50@gmail.com" border="noBorder" changeColor>
            <SiGmail className="text-green-600 hover:text-green-700" />
          </List>
        </div>
      </ul>
    </div>
  );
}
