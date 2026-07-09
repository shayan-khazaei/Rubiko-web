import { FaTurnDown } from "react-icons/fa6";
import Button from "../../Components/Button";
export default function MainHistorySection() {
  return (
    <div className="flex justify-between">
      <section className="flex flex-col gap-6 pt-[140px]">
        <h1 className="text-6xl font-semibold text-grey-800 uppercase ">
          52 Years of <br /> Rubik's Cube
        </h1>
        <p className="flex flex-col gap-4 text-2xl text-grey-700 ">
          <span>
            If one Rubik’s Cube has more than 43 <br /> quintillion
            possibilities and millions of Rubik’s <br /> Cubes are sold and
            solved every year, <br /> multiply that by 52 years and you have
            <br />
            so many possibilities!
          </span>
          <span>
            Discover some of the milestones and iconic <br /> moments that have
            helped cement Rubik’s <br /> Cube as one of the best-selling puzzles
            of all <br /> time.
          </span>
        </p>
        <div>
          {" "}
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
          className="w-[600px]"
        />
      </section>
    </div>
  );
}
