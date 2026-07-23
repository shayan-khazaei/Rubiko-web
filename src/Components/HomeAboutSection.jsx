import Button from "./Button";
import { TfiHandPointRight } from "react-icons/tfi";

export default function AboutSection() {
  return (
    <div className="pt-5 flex flex-col  ">
      <section className="flex flex-col items-center gap-5 text-sm md:text-xl w-full ">
        <div className="flex flex-col gap-2 ">
          <h2 className="text-center text-xl sm:text-2xl md:text-4xl font-semibold text-grey-800">
            where did the rubik’s cube come from?
          </h2>
          <p className="text-center">
            Was it an accident? School project? Did aliens make it? The world’s
            most iconic puzzle has a rich history.
            <br />
            Learn about it here!
          </p>
        </div>

        <div>
          <Button to="/history" variant="outline">
            Learn More
          </Button>
        </div>
      </section>
      <section className="flex flex-col sm:flex-row sm:gap-5 xl:gap-80 pt-10 sm:w-full">
        <img
          className="cursor-pointer w-[90px] ml-25 md:ml-0 md:w-xl"
          src="images/aboutPic.jpg"
          alt="heroLogo"
        />
        <div className="md:pt-10 lg:pt-50 flex flex-col gap-5 mt-5 md:mt-0">
          <p className="font-semibold text-md sm:text-lg md:text-3xl">
            Every minute, the world record <br />
            can be break as fast as <br />
            you can not imagine
          </p>
          <div className="flex gap-3 items-center text-md sm:text-lg">
            <h2 className="text-grey-700 flex items-center gap-5">
              You can see live results and records here
              <TfiHandPointRight className="text-green-700" />
            </h2>
            <Button
              to="https://live.worldcubeassociation.org/competitions/10763"
              variant="outline"
              external={true}
            >
              Live Results
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
