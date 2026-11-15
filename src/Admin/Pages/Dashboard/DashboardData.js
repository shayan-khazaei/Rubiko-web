import { FaRegNewspaper } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { LuFileClock } from "react-icons/lu";
import { PiChalkboardTeacher } from "react-icons/pi";

const CardsData = [
  {
    icon: FiUsers,
    Title: "Total Users",
    Amount: 1248,
    rate: 12.5,
    rank: "up",
    color: "bg-blue-100",
  },
  {
    icon: PiChalkboardTeacher,
    Title: "Solution Guides",
    Amount: 24,
    rate: 8.3,
    rank: "up",
    color: "bg-green-100",
  },
  {
    icon: FaRegNewspaper,
    Title: "News",
    Amount: 18,
    rate: 2.1,
    rank: "down",
    color: "bg-grey-100",
  },
  {
    icon: LuFileClock,
    Title: "Total Records",
    Amount: 8532,
    rate: 15.7,
    rank: "up",
    color: "bg-yellow-100",
  },
];

const UsersData = [
  {
    id: 1,
    image: "/images/mainProfile.jpg",
    user: "Shayan",
    email: "shayankhazaei50@gmail.com",
    joinedAt: "Sep 30, 2025",
    role: "Admin",
    status: "Active",
  },
  {
    id: 2,
    image: "/images/profilebg.png",
    user: "Ali",
    email: "aliakbari557@gmail.com",
    joinedAt: "July 27, 2026",
    role: "User",
    status: "Active",
  },
  {
    id: 3,
    image: "",
    user: "Milad",
    email: "aliakbari557@gmail.com",
    joinedAt: "May 27, 2026",
    role: "User",
    status: "Banned",
  },
  {
    id: 4,
    image: "",
    user: "Reza",
    email: "aliakbari557@gmail.com",
    joinedAt: "May 27, 2026",
    role: "User",
    status: "Active",
  },
  {
    id: 5,
    image: "/images/profilebg.png",
    user: "aram",
    email: "aliakbari557@gmail.com",
    joinedAt: "July 27, 2026",
    role: "User",
    status: "Inactive",
  },
  {
    id: 6,
    image: "/images/profilebg.png",
    user: "Mostafa",
    email: "aliakbari557@gmail.com",
    joinedAt: "Aug 27, 2026",
    role: "User",
    status: "Active",
  },
  {
    id: 7,
    image: "/images/profilebg.png",
    user: "Soheil",
    email: "aliakbari557@gmail.com",
    joinedAt: "July 2, 2026",
    role: "User",
    status: "Active",
  },
  {
    id: 8,
    image: "",
    user: "Mitra",
    email: "aliakbari557@gmail.com",
    joinedAt: "July 23, 2026",
    role: "User",
    status: "Pending",
  },
  {
    id: 9,
    image: "/images/profilebg.png",
    user: "Ali",
    email: "aliakbari557@gmail.com",
    joinedAt: "Aug 28, 2026",
    role: "User",
    status: "Active",
  },
  {
    id: 10,
    image: "/images/profilebg.png",
    user: "Solmaz",
    email: "aliakbari557@gmail.com",
    joinedAt: "July 27, 2026",
    role: "User",
    status: "Active",
  },
  {
    id: 11,
    image: "/images/profilebg.png",
    user: "Sara",
    email: "sara256@gmail.com",
    joinedAt: "July 25, 2026",
    role: "User",
    status: "Banned",
  },
];

const ChartData = [
  { month: "Jan", users: 120 },
  { month: "Feb", users: 180 },
  { month: "Mar", users: 150 },
  { month: "Apr", users: 230 },
  { month: "May", users: 340 },
  { month: "Jun", users: 280 },
  { month: "July", users: 120 },
  { month: "Aug", users: 180 },
  { month: "Sep", users: 150 },
  { month: "Oct", users: 230 },
  { month: "Nov", users: 340 },
  { month: "Dec", users: 280 },
];


const theadData = ["User", "Email", "Joined At", "Role", "Status"];

export { CardsData, ChartData, UsersData, theadData };
