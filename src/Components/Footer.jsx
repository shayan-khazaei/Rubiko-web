import { SiGmail, SiInstagram, SiTelegram } from "react-icons/si";
import List from "../Features/List";

export default function Footer() {
  return (
    <div className="flex justify-end items-center px-5 py-1 h-[88px] bg-grey-50 text-xl">
      <ul className="flex gap-5 items-center">
        <List border="noBorder">Contact Us</List>
        <List to="https://instagram.com/shayan_kze/" border="noBorder">
          <SiInstagram className="text-green-700" />
        </List>
        <List to="https://t.me/shayan_kze16/" border="noBorder">
          <SiTelegram className="text-green-700" />
        </List>
        <List to="mailto:shayankhazaie50@gmail.com" border="noBorder">
          <SiGmail className="text-green-700" />
        </List>
      </ul>
    </div>
  );
}
