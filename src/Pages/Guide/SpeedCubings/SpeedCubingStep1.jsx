import { Link } from "react-router-dom";

export default function SpeedCubingStep1() {
  return (
    <div id="step1s" className="text-md max-w-5xl text-justify pt-5">
      <h2 className="text-2xl sm:text-3xl font-semibold">Step 1 - The Cross </h2>
      <span>
        This step is the same as the beginner method - forming a cross on the
        first layer to get this:
      </span>
      <div className="flex flex-col gap-4">
        <img
          src="/images/GuidePage/speedcubings/cross1.png"
          alt="cross1image"
          className="w-[100px]"
        />
        <span>
          But not exactly the same, as you'll have noticed - the cube is upside
          down. Indeed, the whole cross is assembled on the bottom layer instead
          of the top. This will be awkward the first few times you attempt it,
          but it is certainly worth practising. Not having to turn the cube over
          after completing the cross on the top layer saves a lot of time, and
          it also means that you can be looking for the pieces for the next step
          whilst completing the cross on the bottom.
        </span>
        <span>
          At this stage, a lot of people still find it quite difficult to
          intuitively manipulate the cube. This means that doing the cross on
          the bottom is difficult, as they have come to rely on algorithms for
          situations that are suddenly upside-down. It is difficult to teach
          intuition, but through practice it should eventually just 'click' in
          your head. If doing the cross on the bottom takes much longer than
          when doing it on the top, don't be disheartened! It does take time to
          get used to, and it doesn't really matter how long you take when
          you're practising.
        </span>
        <span>
          As mentioned above, the sections in this method don't have to be
          learned sequentially. Move on to the next sections, but keep starting
          with the cross on the bottom. I have found that the next step (F2L) is
          a huge help for people to understand how to move cubies to where they
          want them, a skill that they can later use when returning to the
          cross.
        </span>
        <span>
          All of that being said, I can give you some situations to hopefully
          make the process easier. In this example:
        </span>
        <img
          src="/images/GuidePage/speedcubings/cross2.png"
          alt="cross2image"
          className="w-[100px]"
        />
        <span>
          It should be obvious to you that you can simply do F2 to correctly
          place the white-blue edge piece on the bottom layer. But you could
          also place the white-red piece by doing this:
        </span>
        <div className="flex flex-col items-center gap-1 md:w-[340px] bg-grey-100 px-20 py-5 border border-grey-400">
          <img
            src="/images/GuidePage/speedcubings/cross3.png"
            alt="cross3image"
            className="w-[100px]"
          />
          <span className="underline text-xs">F U F R'</span>
        </div>
        <span>
          Something else to bear in mind is that you don't always need to put
          the edge pieces in the correct place straight away. Consider this
          situation, and the two approaches to solving it:
        </span>
        <ul className="list-inside flex flex-col sm:flex-row gap-3">
          <li>
            <div className="flex flex-col items-center gap-1 md:w-[340px] bg-grey-100 px-20 py-5 border border-grey-400">
              <img
                src="/images/GuidePage/speedcubings/cross4.png"
                alt="cross4image"
                className="w-[100px]"
              />
              <span className="underline text-xs">U' B2 F' U' R2</span>
            </div>
          </li>
          <li>
            <div className="flex flex-col items-center gap-1 md:w-[340px] bg-grey-100 px-20 py-5 border border-grey-400">
              <img
                src="/images/GuidePage/speedcubings/cross5.png"
                alt="cross5image"
                className="w-[100px]"
              />
              <span className="underline text-xs">F R2 D</span>
            </div>
          </li>
        </ul>
        <span>
          The first approach involves taking each edge piece, putting it above
          where it needs to go, and turning the appropriate face twice to place
          the piece on the bottom layer. This works, and is an intuitive way to
          solve the problem, but the second solution is much simpler. It simply
          solves each piece relative to each other, and then places them in one
          go. So instead of producing the cross by finding each white edge piece
          and solving them one by one, what you actually want to be doing is
          solving each piece at the same time in an efficient way.
        </span>
        <span>
          You might think that this sounds quite challenging, and you'd be
          right. But what is life without a bit of a challenge every now and
          then. If you are thinking "how the dickens is anyone supposed to do
          this in 3.05 seconds", then the answer is twofold: practice, and
          inspection time.{" "}
          <a
            href="https://www.worldcubeassociation.org/regulations/#A3a1"
            target="blank"
            className="text-blue-500"
          >
            World Cube Association
          </a>{" "}
          Regulation A3a1 states that a competitor has up to 15 seconds of
          inspection time before attempting a solve, and you would want to be
          spending this time mentally formulating a complete solution to the
          cross which you could then execute very quickly at the start of your
          solve. Of course, when you're just sat at home on a lazy Sunday idling
          the afternoon away with a Rubik's Cube you likely won't be paying much
          attention to official WCA competition rules, but it does give you
          something to aim for. Why don't you give it a try - go to the{" "}
          <Link to={"/solution-guides/timer"} className="text-blue-500">
            timer page
          </Link>{" "}
          , set inspection time to 15 seconds and see if you can produce a
          solution to the cross entirely in your head. It can be quite difficult
          (certainly so if you've only just started doing it upside down) but
          with practice it will become very easy to isolate only the four edge
          pieces you need and formulate a basic plan to get them into a cross.
        </span>
      </div>
    </div>
  );
}
