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

const ChartData = [
  { month: "Jan", users: 120 },
  { month: "Feb", users: 180 },
  { month: "Mar", users: 150 },
  { month: "Apr", users: 230 },
  { month: "May", users: 340 },
  { month: "Jun", users: 280 },
];

const UsersData = [
  {
    id: 1,
    image: "/images/mainProfile.jpg",
    user: "Shayan",
    email: "shayankhazaei50@gmail.com",
    joinedAt: "Jun 7, 2025",
    role: "Admin",
    status: "Suspended",
  },
  {
    id: 2,
    image: "/images/profilebg.png",
    user: "Ali",
    email: "aliakbari557@gmail.com",
    joinedAt: "May 17, 2027",
    role: "User",
    status: "Active",
  },
  {
    id: 3,
    image: "/images/profilebg.png",
    user: "Ali",
    email: "aliakbari557@gmail.com",
    joinedAt: "May 17, 2027",
    role: "User",
    status: "Banned",
  },
  {
    id: 4,
    image: "/images/profilebg.png",
    user: "Ali",
    email: "aliakbari557@gmail.com",
    joinedAt: "May 17, 2027",
    role: "User",
    status: "Active",
  },
  {
    id: 5,
    image: "/images/profilebg.png",
    user: "Ali",
    email: "aliakbari557@gmail.com",
    joinedAt: "May 17, 2027",
    role: "User",
    status: "Inactive",
  },
  {
    id: 6,
    image: "/images/profilebg.png",
    user: "Ali",
    email: "aliakbari557@gmail.com",
    joinedAt: "May 17, 2027",
    role: "User",
    status: "Active",
  },
  {
    id: 7,
    image: "/images/profilebg.png",
    user: "Ali",
    email: "aliakbari557@gmail.com",
    joinedAt: "May 17, 2027",
    role: "User",
    status: "Active",
  },
  {
    id: 8,
    image: "/images/profilebg.png",
    user: "Ali",
    email: "aliakbari557@gmail.com",
    joinedAt: "May 17, 2027",
    role: "User",
    status: "Pending",
  },
  {
    id: 9,
    image: "/images/profilebg.png",
    user: "Ali",
    email: "aliakbari557@gmail.com",
    joinedAt: "May 17, 2027",
    role: "User",
    status: "Active",
  },
  {
    id: 10,
    image: "/images/profilebg.png",
    user: "Ali",
    email: "aliakbari557@gmail.com",
    joinedAt: "May 17, 2027",
    role: "User",
    status: "Active",
  },
];

const theadData = ["User", "Email", "Joined At", "Role", "Status"];

export { CardsData, ChartData, UsersData, theadData };