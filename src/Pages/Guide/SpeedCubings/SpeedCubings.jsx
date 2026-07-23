import { Link } from "react-router-dom";
import SpeedCubingStep1 from "./SpeedCubingStep1";
import SpeedCubingStep2 from "./SpeedCubingStep2";
import SpeedCubingStep3 from "./SpeedCubingStep3";
import SpeedCubingStep4 from "./SpeedCubingStep4";
import SpeedCubingStep5 from "./SpeedCubingStep5";
import SpeedCubingStep6 from "./SpeedCubingStep6";

export default function SpeedCubingGuide() {
  return (
    <>
      <section>
        <h2 className="text-4xl sm:text-5xl font-semibold uppercase ">
          You can learn all you need here
        </h2>
      </section>
      <section>
        <h2 className="text-3xl sm:text-4xl font-semibold pt-15">Speedcubing Guide</h2>
        <div className="flex flex-col gap-3 pt-5 text-xl max-w-5xl text-justify">
          <span>
            So you've gone through the beginner's method a few times, and maybe
            you can solve the cube unaided every time. Maybe you're even getting
            pretty good, and can consistently do it in under 2 minutes. But now
            you're hooked. You aren't satisfied with people standing around for
            2 minutes while you solve it because that guy at the office didn't
            believe you. You want to be one of those people, who can just look
            at a cube, and ten seconds later boom, it's done. You want a taste
            of the high-flying, rock and roll lifestyle of the speedcuber. Well
            here is where your journey begins.
          </span>
          <span>
            This guide takes you through every step of the CFOP speedcubing
            method. The name CFOP comes from the steps involved (Cross, F2L,
            OLL, PLL), and you may also see it referred to as the Fridrich
            method (after Jessica Fridrich, who helped turn it into the most
            popular speedcubing technique). Learning and practising this method
            can take you all the way to the top of the game - it is used by a
            lot of the top speedcubers to set world records, including the
            current staggeringly low time of 3.05 seconds.
          </span>
          <span>
            Full CFOP takes some dedication. If you've just arrived at this
            website looking to learn how to solve a Rubik's Cube and thought to
            yourself "Beginner my left foot, I'm starting with the speedcubing
            guide, that sounds fast", then I warn you now: here be dragons. It
            is the greatest oak that has the strongest roots, and you'll grow
            your roots using the{" "}
            <Link className="text-blue-500" to="/solution-guides">
              beginner's guide
            </Link>
            . Go on, I'll wait right here.
          </span>
          <span>
            Are you back? Good. Now that you know the beginner method, you can
            begin to introduce the concepts in this guide into your solves. You
            needn't go through the steps in order - you can learn and practise
            each bit independently, falling back on the beginner method as and
            when you need it.
          </span>
          <span>Let's jump in!</span>
        </div>
      </section>
      <section className="flex flex-col gap-7 pb-10">
        <SpeedCubingStep1 />
        <SpeedCubingStep2 />
        <SpeedCubingStep3 />
        <SpeedCubingStep4 />
        <SpeedCubingStep5 />
        <SpeedCubingStep6 />
      </section>
    </>
  );
}
