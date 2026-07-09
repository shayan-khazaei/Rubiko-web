export default function SpeedCubingStep5() {
  return (
    <div id="step5s" className="text-md max-w-5xl text-justify pt-5">
      <h2 className="text-3xl font-semibold">Step 5 - PLL Corners</h2>
      <div className="flex flex-col gap-4 pt-5">
        <span>
          Now that the OLL is done, you can start PLL. This step is called CPLL,
          as it aims to permute the corners - that is, move them to their
          correct positions like this:
        </span>
        <img
          src="/images/GuidePage/speedcubings/pll1.png"
          alt="pll1image"
          className="w-[100px]"
        />
        <span>
          To do this, you need to look for 'headlights' - a face where both top
          layer corners are the same colour (presumably named due to their
          resemblance to the headlights of a car). In the following example, you
          can see that the 'headlights' are on the Front face, as the top layer
          corners are both blue.
        </span>
        <img
          src="/images/GuidePage/speedcubings/pll2.png"
          alt="pll2image"
          className="w-[100px]"
        />
        <span>
          You then hold the headlights so they are facing to the right, and
          perform this algorithm:
        </span>
        <div className="flex flex-col items-center gap-1 w-[340px] bg-grey-100 px-20 py-5 border border-grey-400">
          <img
            src="/images/GuidePage/speedcubings/pll3.png"
            alt="pll3image"
            className="w-[100px]"
          />
          <span className="underline text-xs">
            x (R2 D2) (R U R') D2 (R U' R)
          </span>
        </div>
        <span>
          The corner pieces should then be permuted correctly in relation to
          each other - but you might need to turn the top layer so that they are
          back in the right places.
        </span>
        <span>Sometimes there are no headlights to be found, like this:</span>
        <img
          src="/images/GuidePage/speedcubings/pll4.png"
          alt="pll4image"
          className="w-[100px]"
        />
        <span>
          You have two options here. First, you can just use the above algorithm
          anyway, which will make some headlights for you to solve as above. The
          second option is this algorithm:
        </span>
        <div className="flex flex-col items-center gap-1 w-[340px] bg-grey-100 px-20 py-5 border border-grey-400">
          <img
            src="/images/GuidePage/speedcubings/pll5.png"
            alt="pll5image"
            className="w-[100px]"
          />
          <span className="underline text-xs">
            F R U' R' U' R U R' F' (R U R' U') (R' F R F')
          </span>
        </div>
        <span>
          As above, you might now need to turn the top layer to realign the
          corner pieces. Using this algorithm is preferable than using the first
          algorithm twice, as it will be much faster to perform. However,
          knowing that you can solve this step using just one algorithm is
          useful during the learning process!
        </span>
      </div>
    </div>
  );
}
