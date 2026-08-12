import { CiUser } from "react-icons/ci";
import { FaArrowUpWideShort } from "react-icons/fa6";
import { LuFileClock } from "react-icons/lu";
import { TfiCup } from "react-icons/tfi";

const CardData = [
  {
    icon: LuFileClock,
    Title: "Total Attempts",
    Amount: 8532,
    rate: 12.5,
    rank: "down",
    color: "bg-green-100",
  },
  {
    icon: FaArrowUpWideShort,
    Title: "Average Time",
    Amount: 8.42,
    rate: 3.1,
    rank: "up",
    color: "bg-purple-100",
  },
  {
    icon: TfiCup,
    Title: "Best Time",
    Amount: 2.76,
    rank: "up",
    rate: 0.2,
    color: "bg-yellow-100",
  },
  {
    icon: CiUser,
    Title: "Active Users",
    Amount: 342,
    rate: 8.1,
    rank: "down",
    color: "bg-blue-100",
  },
];

const ChartData = [
  { time: "May 12", attempt: 120 },
  { time: "May 16", attempt: 180 },
  { time: "May 20", attempt: 150 },
  { time: "May 24", attempt: 230 },
  { time: "May 28", attempt: 340 },
  { time: "Jun 1", attempt: 280 },
  { time: "Jun 5", attempt: 280 },
  { time: "Jun 9", attempt: 280 },
  { time: "Jun 12", attempt: 280 },
];

const RecordsData = [
  {
    image: "/images/mainProfile.jpg",
    user: "Shayan",
    time: 3.13,
    type: "3*3*3 Cube",
    date: "May 17, 2027",
  },
  {
    image: "/images/profilebg.png",
    user: "Ali",
    time: 4.21,
    type: "3*3*3 Cube",
    date: "May 10, 2027",
  },
  {
    image: "/images/profilebg.png",
    user: "Milad",
    time: 5.18,
    type: "3*3*3-OH Cube",
    date: "May 01, 2027",
  },
];

const TopUsersData = [
  {
    id: 1,
    image: "/images/mainProfile.jpg",
    user: "Shayan",
    count: 128,
  },
  {
    id: 2,
    image: "/images/profilebg.png",
    user: "Mahsa",
    count: 128,
  },
  {
    id: 3,
    image: "/images/profilebg.png",
    user: "Ali",
    count: 98,
  },
  {
    id: 4,
    image: "/images/profilebg.png",
    user: "Milad",
    count: 98,
  },
  {
    id: 5,
    image: "/images/profilebg.png",
    user: "Reza",
    count: 76,
  },
  {
    id: 6,
    image: "/images/profilebg.png",
    user: "Raha",
    count: 64,
  },
];

const BestTimeData = [
  {
    id: 1,
    image: "/images/profilebg.png",
    user: "Ahmad",
    count: 2.76,
  },
  {
    id: 2,
    image: "/images/mainProfile.jpg",
    user: "Mohammad",
    count: 3.12,
  },
  {
    id: 3,
    image: "/images/mainProfile.jpg",
    user: "Shayan",
    count: 3.75,
  },
  {
    id: 4,
    image: "/images/profilebg.png",
    user: "Mohsen",
    count: 4.02,
  },
  {
    id: 5,
    image: "/images/profilebg.png",
    user: "moein",
    count: 4.03,
  },
  {
    id: 6,
    image: "/images/profilebg.png",
    user: "Sajad",
    count: 4.04,
  },
];

const theadData = ["User", "Time", "Type", "Date"];

export {
  CardData,
  ChartData,
  RecordsData,
  theadData,
  TopUsersData,
  BestTimeData,
};
