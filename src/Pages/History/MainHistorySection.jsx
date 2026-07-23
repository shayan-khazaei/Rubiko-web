import { FaTurnDown } from "react-icons/fa6";
import Button from "../../Components/Button";
export default function MainHistorySection() {
  return (
    <div className="flex justify-between">
      <section className="flex flex-col gap-6 pt-[50px] md:pt-[140px]">
        <h1 className="text-4xl tet-4xl md:text-6xl font-semibold text-grey-800 uppercase ">
          52 Years of <br /> Rubik's Cube
        </h1>
        <p className="flex flex-col gap-4 text-sm md:text-2xl text-grey-700 max-w-xs md:max-w-xl text-justify ">
          <span>
            If one Rubik’s Cube has more than 43 quintillion possibilities and
            millions of Rubik’s Cubes are sold and solved every year, multiply
            that by 52 years and you have so many possibilities!
          </span>
          <span>
            Discover some of the milestones and iconic moments that have helped
            cement Rubik’s Cube as one of the best-selling puzzles of all time.
          </span>
        </p>
        <div>
          <Button
            variant="outline"
            onClick={() =>
              document
                .getElementById("history-list")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Explore Our History <FaTurnDown />
          </Button>
        </div>
      </section>

      <section>
        <img
          src="images/HistoryPage/TopHistory.png"
          alt="topHistoryPage"
          className="w-[200px] md:w-[600px] mt-20 sm:mt-50 md:mt-38 ml-5 "
        />
      </section>
    </div>
  );
}
