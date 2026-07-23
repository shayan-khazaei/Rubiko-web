import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { datas } from "./NewsData";
import { wallDatas } from "./WalldData";
import NewsCard from "./NewsCard";
import WallPaperCard from "./WallPaperCard";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import { useState } from "react";

export default function News() {
  const [newsSlider, setNewsSlider] = useState(false);
  const [startIndex, setStartIndex] = useState(0);
  const [endIndex, setEndIndex] = useState(3);

  const clickHandler = () => {
    if (endIndex < datas.length) {
      setStartIndex((prev) => prev + 3);
      setEndIndex((prev) => prev + 3);
    } else {
      setStartIndex(0);
      setEndIndex(3);
    }
    setNewsSlider((prev) => !prev);
  };

  return (
    <div className="container mx-auto flex flex-col px-6 3xl:px-0">
      <section className="flex justify-between md:pt-34">
        <div className="flex flex-col gap-40">
          <div className="flex flex-col">
            <ul className="text-lg sm:text-4xl md:text-6xl uppercase font-semibold flex flex-col gap-2 ">
              <li>news,</li>
              <li className="lg:pl-16 mb-4">events & more</li>
            </ul>
            <h4 className="text-md sm:text-lg md:text-2xl lg:pl-16 mb-4">
              Discover the latest & greatest in the world of Rubik’s
            </h4>
          </div>
        </div>
        <img
          src="images/NewsPage/NewsHeader.png"
          alt="NewsHeader"
          className="w-[170px] sm:w-2xs md:w-sm object-cover"
        />
      </section>
      <section>
        <section className="relative flex items-center gap-5 bg-grey-100 shadow-sm rounded-xl p-5 hover:-translate-y-1 transition-transform">
          <section>
            <img
              src="images/NewsPage/wcaLogo.png"
              alt="wcaLogo"
              className="hidden md:block rounded-xl w-sm"
            />
          </section>
          <a
            href="https://www.worldcubeassociation.org/competitions?"
            target="blank"
          >
            <section className="flex flex-col gap-7 cursor-pointer">
              <h2 className="uppercase text-lg sm:text-xl lg:text-4xl font-semibold underline">
                Wca Speed Cubing Competitions
              </h2>
              <p className="md:max-w-2xl text-grey-700">
                Discover World Cubing Association competitions hosted <br />
                internationally around the world. Find one near you!
              </p>
              <div className="absolute top-0 right-0 text-green-700 bg-grey-300 p-1 md:p-3 rounded-tr-xl  ">
                <FaArrowUpRightFromSquare />
              </div>
            </section>
          </a>
        </section>
      </section>
      <section>
        <ul className="grid md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-7 mt-7 pb-5">
          {datas.slice(startIndex, endIndex).map((data) => (
            <li key={data.id}>
              <NewsCard
                image={data.image}
                date={data.date}
                publisher={data.publisher}
                description={data.description}
                id={data.id}
                newsLink={data.newsLink}
              />
            </li>
          ))}
        </ul>
        <div
          className="flex items-center justify-center w-8 h-8 md:w-10 md:h-10 bg-grey-100 rounded-full text-xl md:text-2xl cursor-pointer"
          onClick={clickHandler}
        >
          {newsSlider ? <GoArrowLeft /> : <GoArrowRight />}
        </div>
      </section>
      <section>
        <h2 className="text-lg sm:text-4xl uppercase font-semibold mt-10">
          Wallpapers
        </h2>
        <ul className="grid md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-7 mt-7 pb-7">
          {wallDatas.map((data) => (
            <li key={data.id}>
              <WallPaperCard
                image={data.image}
                desktopImage={data.desktopImage}
                mobileImage={data.mobileImage}
              />
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
