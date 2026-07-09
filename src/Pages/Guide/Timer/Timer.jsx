export default function Timer() {
  return (
    <div id="step6" className="text-md max-w-5xl text-justify pt-5">
      <section>
        <h2 className="text-5xl font-semibold uppercase ">
          Use Timer To See Your Progress
        </h2>
        <div className="pt-15">
          Simply touch the timer or press your Spacebar to start and stop! I'd
          recommend using 15 seconds inspection time, as that is what official
          Rubik's Cube competitions give you to look at the cube before starting
          your solve. And if we're going to care about official Rubik's Cube
          rules (who doesn't), then{" "}
          <a
            href="https://www.worldcubeassociation.org/regulations/#4d1"
            target="blank"
            className="text-blue-500"
          >
            WCA regulation 4d1
          </a>{" "}
          says that cubes should be scrambled starting with the white face on
          top and the green face on the front.
        </div>
      </section>
      <section>
        <div className="bg-grey-200 border border-green-500 h-[400px] flex items-center justify-center mt-7 cursor-pointer">
          <p className="text-5xl">
            <span>0 : 00</span> <span cla>00</span>
          </p>
        </div>
        <div className="w-[100px] bg-grey-200 border border-green-500 flex items-center justify-center mt-7 cursor-pointer">
          <span>Reset</span>
        </div>
      </section>
    </div>
  );
}
