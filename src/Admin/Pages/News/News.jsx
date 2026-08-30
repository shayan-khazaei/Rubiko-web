import { datas } from "../../../Pages/News/NewsData";
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";
import NewsCard from "./NewsCard";
import NewsAnatomy from "./NewsAnatomy";
import { useState } from "react";

export default function News() {
  const [startIndex, setStartIndex] = useState(0);
  const [endIndex, setEndIndex] = useState(3);
  const [pageNumber, setPageNumber] = useState(1);

  const nextPageHandler = () => {
    if (endIndex < datas.length) {
      setStartIndex((prev) => prev + 3);
      setEndIndex((prev) => prev + 3);
      setPageNumber((prev) => prev + 1);
    }
  };

  const prevPageHandler = () => {
    if (startIndex > 0) {
      setStartIndex((prev) => prev - 3);
      setEndIndex((prev) => prev - 3);
      setPageNumber((prev) => prev - 1);
    }
  };

  return (
    <div className="w-[79%] mx-auto mt-auto">
      <section className="grid grid-cols-3 gap-5">
        {datas.slice(startIndex, endIndex).map((data) => (
          <NewsCard
            key={data.id}
            image={data.image}
            title={data.description}
            publisher={data.publisher}
            status={data.status}
            newsLink={data.newsLink}
            date={data.date}
            height={100}
          />
        ))}
      </section>
      <section className="mt-3 flex items-center justify-between">
        <div className="text-gray-300">
          Page <span>{pageNumber}</span> of{" "}
          <span className="ml-1">{Math.ceil(datas.length / 3)}</span>
        </div>
        <div className="bg-radial-[at_25%_25%] from-zinc-950 to-green-900 to-95% text-green-300">
          <button
            className=" px-2 py-2 text-xl border border-green-900 cursor-pointer "
            onClick={prevPageHandler}
          >
            <MdOutlineKeyboardArrowLeft />
          </button>
          <button
            className=" px-2 py-2 text-xl border border-green-900 border-l-0 cursor-pointer "
            onClick={nextPageHandler}
          >
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
