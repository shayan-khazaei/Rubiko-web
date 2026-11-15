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

const DailyChartData = [
  { time: "Sun", attempts: 40 },
  { time: "Mon", attempts: 45 },
  { time: "Tues", attempts: 50 },
  { time: "Wed", attempts: 38 },
  { time: "Thurs ", attempts: 150 },
  { time: "Fri", attempts: 100 },
  { time: "Sat", attempts: 80 },
];

const WeeklyChartData = [
  { time: "Week 1 ", attempts: 230 },
  { time: "Week 2 ", attempts: 200 },
  { time: "Week 3 ", attempts: 110 },
  { time: "Week 4 ", attempts: 153 },
];

const MonthlyChartData = [
  { time: "Jan", attempts: 1200 },
  { time: "Feb", attempts: 1800 },
  { time: "Mar", attempts: 1500 },
  { time: "Apr", attempts: 2300 },
  { time: "May", attempts: 3400 },
  { time: "Jun", attempts: 2801 },
  { time: "July", attempts: 1205 },
  { time: "Aug", attempts: 1805 },
  { time: "Sep", attempts: 1509 },
  { time: "Oct", attempts: 2300 },
  { time: "Nov", attempts: 3400 },
  { time: "Dec", attempts: 2802 },
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
  DailyChartData,
  WeeklyChartData,
  MonthlyChartData,
  RecordsData,
  theadData,
  TopUsersData,
  BestTimeData,
};
