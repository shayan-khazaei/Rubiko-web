import BeginnerStep1 from "./BeginnerStep1";
import BeginnerStep2 from "./BeginnerStep2";
import BeginnerStep3 from "./BeginnerStep3";
import BeginnerStep4 from "./BeginnerStep4";
import BeginnerStep5 from "./BeginnerStep5";
import BeginnerStep6 from "./BeginnerStep6";
import BeginnerStep7 from "./BeginnerStep7";

export default function Beginners() {
  return (
    <>
      <section>
        <h2 className="text-5xl font-semibold uppercase ">
          You can learn all you need here
        </h2>
      </section>
      <section>
        <h2 className="text-4xl font-semibold pt-15">Beginner's Guide</h2>
        <div className="flex flex-col gap-3 pt-5 text-xl max-w-5xl text-justify">
          <span>
            This beginner's guide will teach you how to solve the famous Rubik's
            Cube, even if you've never picked one up before! If you got given
            one for Christmas, found one in the dusty cupboard of an aging
            relative, or need to win a bet and soon, then read on to learn the
            method!
          </span>
          <span>
            If you can already solve one, then why not head over to the
            speedcubing page and really step up your game. My personal record is
            17.24 seconds - do you think you can beat it?
          </span>
          <span>Let's begin!</span>
        </div>
      </section>
      <section className="flex flex-col gap-7 pb-10">
        <BeginnerStep1 />
        <BeginnerStep2 />
        <BeginnerStep3 />
        <BeginnerStep4 />
        <BeginnerStep5 />
        <BeginnerStep6 />
        <BeginnerStep7 />
      </section>
    </>
  );
}
