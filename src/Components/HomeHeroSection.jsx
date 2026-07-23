import Button from "./Button";

export default function HeroSection() {
  return (
    <div className="flex items-center justify-between ">
      <section className="flex flex-col gap-10">
        <h1 className="text-lg sm:text-4xl md:text-6xl font-semibold text-grey-800 uppercase ">
          Train your mind <br /> with the most iconic <br /> puzzle in the world
        </h1>
        <div className="flex items-center gap-10 text-md sm:text-lg md:text-2xl text-grey-700 ">
          <p>how to start being a speed cuber ? </p>
          <Button to="/solution-guides" variant="outline">
            Click To Learn
          </Button>
        </div>
      </section>
      <section className="relative w-[30rem] h-[24rem] md:w-[34rem] md:h-[39rem] lg:w-[47rem] lg:h-[52rem] md:pt-28 lg:pt-16 ">
        <img
          className="absolute cursor-pointer hover:opacity-0 "
          src="images/heroPic.png"
          alt="heroLogo"
        />
        <img
          className="absolute cursor-pointer opacity-0 hover:opacity-100 "
          src="images/heroPic2.png"
          alt="heroLogo"
        />
      </section>
    </div>
  );
}
