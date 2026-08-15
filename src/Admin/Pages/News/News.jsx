import { datas } from "../../../Pages/News/NewsData";
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";
import NewsCard from "./NewsCard";
import NewsAnatomy from "./NewsAnatomy";

export default function News() {
  return (
    <div className="w-[79%] mx-auto mt-auto">
      <section className="grid grid-cols-3 gap-5">
        {datas.slice(0, 3).map((data) => (
          <NewsCard
            key={data.id}
            image={data.image}
            title={data.description}
            publisher={data.publisher}
            status={data.status}
            date={data.date}
            height={100}
          />
        ))}
      </section>
      <section className="mt-3 flex items-center justify-between">
        <div className="text-gray-300">
          Page <span>1</span> of <span className="ml-1">2</span>
        </div>
        <div className="bg-radial-[at_25%_25%] from-zinc-950 to-green-900 to-95% text-green-300">
          <button className=" px-2 py-2 text-xl border border-green-900 cursor-pointer ">
            <MdOutlineKeyboardArrowLeft />
          </button>
          <button className=" px-2 py-2 text-xl border border-green-900 border-l-0 cursor-pointer ">
            <MdOutlineKeyboardArrowRight />
          </button>
        </div>
      </section>
      <section>
        <NewsAnatomy />
      </section>
    </div>
  );
}
