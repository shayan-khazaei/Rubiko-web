import { useEffect, useRef, useState } from "react";

export default function Timer() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  const startTimeRef = useRef(0);
  const intervalRef = useRef(null);

  function startTimer() {
    setIsRunning(true);
    setTime(0);

    startTimeRef.current = Date.now();

    intervalRef.current = setInterval(() => {
      const currentTime = Date.now();

      setTime(currentTime - startTimeRef.current);
    }, 10);
  }

  function stopTimer() {
    setIsRunning(false);

    clearInterval(intervalRef.current);
  }

  function resetTimer() {
    clearInterval(intervalRef.current);
    setTime(0);
    setIsRunning(false);
  }

  useEffect(() => {
    const keyHandler = (e) => {
      if (e.code === "Space") {
        e.preventDefault();

        if (isRunning) {
          stopTimer();
        } else {
          startTimer();
        }
      }
    };

    window.addEventListener("keydown", keyHandler);

    return () => {
      window.removeEventListener("keydown", keyHandler);
    };
  }, [isRunning]);

  const minutes = Math.floor(time / 60000);

  const seconds = Math.floor((time % 60000) / 1000);

  const milliseconds = Math.floor(time % 1000);

  return (
    <div id="step6" className="text-md max-w-5xl text-justify pt-5 h-full">
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
          <h1 className="text-5xl">
            <span> {String(minutes).padStart(2, "0")} :</span>
            <span> {String(seconds).padStart(2, "0")}</span>
          </h1>

          <span className="text-xl mt-10 ml-1">
            {String(milliseconds).padStart(3, "0")}
          </span>
        </div>
        <div
          onClick={resetTimer}
          className="w-[100px] bg-grey-200 border border-green-500 flex items-center justify-center mt-7 cursor-pointer"
        >
          <span>Reset</span>
        </div>
      </section>
    </div>
  );
}
