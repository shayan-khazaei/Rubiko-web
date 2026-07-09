import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { datas } from "./NewsData";
import { wallDatas } from "./WalldData";
import NewsCard from "./NewsCard";
import WallPaperCard from "./WallPaperCard";
import { GoArrowRight } from "react-icons/go";

export default function News() {
  return (
    <div className="container mx-auto flex flex-col">
      <section className="flex justify-between pt-[140px]">
        <div className="flex flex-col gap-40">
          <div className="flex flex-col">
            <ul className="text-6xl uppercase font-semibold flex flex-col gap-2 ">
              <li>news,</li>
              <li className="pl-16">events & more</li>
            </ul>
            <h4 className="text-2xl pl-16">
              Discover the latest & greatest in the world of Rubik’s
            </h4>
          </div>
        </div>
        <img
          src="images/NewsPage/NewsHeader.png"
          alt="NewsHeader"
          className="w-[300px] h-[400px] object-cover"
        />
      </section>
      <section>
        <section className="relative h-[14rem] flex items-center gap-5 bg-grey-100 shadow-sm rounded-xl p-5 hover:-translate-y-1 transition-transform">
          <section>
            <img
              src="images/NewsPage/wcaLogo.png"
              alt="wcaLogo"
              className="rounded-xl w-[22rem]"
            />
          </section>
          <a
            href="https://www.worldcubeassociation.org/competitions?"
            target="blank"
          >
            <section className="flex flex-col gap-7 cursor-pointer">
              <h2 className="uppercase text-4xl font-semibold underline">
                Wca Speed Cubing Competitions
              </h2>
              <p className="w-2xl text-grey-700">
                Discover World Cubing Association competitions hosted <br />
                internationally around the world. Find one near you!
              </p>
              <div className="absolute top-0 right-0  text-green-700 bg-grey-300 p-3 rounded-tr-xl  ">
                <FaArrowUpRightFromSquare />
              </div>
            </section>
          </a>
        </section>
      </section>
      <section>
        <ul className="grid grid-cols-3 gap-7 mt-7 pb-5">
          {datas.map((data) => (
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
        <div className="flex items-center justify-center w-10 h-10 bg-grey-100 rounded-full text-2xl cursor-pointer">
          <GoArrowRight />
        </div>
      </section>
      <section>
        <h2 className="text-5xl uppercase font-semibold mt-10">Wallpapers</h2>
        <ul className="grid grid-cols-3 gap-7 mt-7 pb-7">
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
