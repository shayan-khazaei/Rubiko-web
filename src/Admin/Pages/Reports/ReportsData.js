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
    
  { date: "May 12", attempts: 20 },
  { date: "May 16", attempts: 45 },
  { date: "May 20", attempts: 11 },
  { date: "May 24", attempts: 3 },
  { date: "May 28", attempts: 150 },
  { date: "Jun 1", attempts: 200 },
  { date: "Jun 5", attempts: 100 },
  { date: "Jun 9", attempts: 12 },
  { date: "Jun 12", attempts: 10 },
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
