export default function BeginnerStep7() {
  return (
    <div id="step7" className="text-md max-w-5xl text-justify pt-5">
      <h2 className="text-2xl sm:text-3xl font-semibold">
        Step 7 - The Last Layer Corners 2{" "}
      </h2>
      <div className="flex flex-col gap-4 pt-5">
        <span>
          This is the last step! It will therefore result in the completed cube,
          which looks like this:
        </span>
        <div className="flex flex-col gap-4">
          <img
            src="images/GuidePage/beginners/lastlayercorners1.png"
            alt="lastlayercorners1image"
            className="w-[100px]"
          />
          <span>
            Unlike the previous step where you needed to find a correct corner,
            the first thing to do here is find one of the corner cubies that is
            incorrect. As the goal of this step is to make all of the corners
            have the yellow side on top, thereby completing the yellow face and
            whole cube, an incorrect cubie is therefore one that does not have
            yellow on the top. You need to hold the cube so that one of the
            incorrect corners is in the FRU corner. I'm sure that you remember
            that this is the corner formed by the Front, Right, and Up faces.
            This should look something like this:
          </span>
          <img
            src="images/GuidePage/beginners/lastlayercorners2.png"
            alt="lastlayercorners2image"
            className="w-[100px]"
          />
          <span>
            Here, you can see that there are three incorrect cubies, as three of
            them do not have yellow on top, and that one of these incorrect
            cubies is in the FRU corner. The way the yellow side of this corner
            is facing is important, as it could be one of two directions:
          </span>
          <ul className="list-inside flex flex-col gap-3 list-decimal">
            <li className="pl-6">
              <span>Facing to the right, as in the above example:</span>
              <div className="flex gap-7 mt-5">
                <img
                  src="images/GuidePage/beginners/lastlayercorners3.png"
                  alt="lastlayercorners3image"
                  className="w-[100px]"
                />
              </div>
            </li>
            <li className="pl-6">
              <span>Facing forwards, as in this different example:</span>
              <div className="flex gap-7 mt-5">
                <img
                  src="images/GuidePage/beginners/lastlayercorners4.png"
                  alt="lastlayercorners4image"
                  className="w-[100px]"
                />
              </div>
            </li>
          </ul>
          <span>
            Of course, it could also be facing up, but then it would not have
            counted as an incorrect cubie to begin with. The corners in these
            situations are solved using the following algorithms, but{" "}
            <span className="font-semibold">don't do them just quite yet!</span>
          </span>
          <ul className="list-inside flex flex-col gap-3 list-disc">
            <li className="pl-6">(R' D' R D) (R' D' R D)</li>
            <li className="pl-6">
              (R' D' R D) (R' D' R D) (R' D' R D) (R' D' R D)
            </li>
          </ul>
          <span>
            These algorithms require some explaining. Firstly, they have
            brackets in, which you've never seen before (in an algorithm, I know
            you've seen brackets before because I've used them a bunch of times.
            Like now!). They are only there to break the algorithm into chunks
            and make it easier to follow along, so they don't change the
            algorithm at all.
          </span>
          <span>
            Secondly, the first algorithm is just R' D' R D twice and the second
            algorithm is just the first algorithm twice. This is precisely why
            the brackets are there, as both algorithms are just R' D' R D
            multiple times. In the second situation above, where the yellow side
            of the FRU cubie is facing forwards, the first two sets of R' D' R D
            in the algorithm brings you to the first situation - the yellow side
            moves from the front of the FRU corner to the right. You can then do
            the next two sets of R' D' R D to move it to the top, just like the
            first situation!
          </span>
          Now that you understand these algorithms, you can go ahead and use
          them. But be warned! While these algorithms do leave you with the
          yellow side facing up, they also leave the bottom two layers in a
          jumbled mess. This is normal, so
          <span className="font-semibold">don't panic!</span>
          <span>
            If your FRU cubie has its yellow side facing to the right, you use
            this algorithm:
          </span>
          <div className="flex flex-col items-center gap-1 md:w-[340px] bg-grey-100 px-20 py-5 border border-grey-400">
            <img
              src="images/GuidePage/beginners/lastlayercorners5.png"
              alt="lastlayercorners5image"
              className="w-[100px]"
            />
            <span className="underline text-xs">(R' D' R D) (R' D' R D)</span>
          </div>
          <span>
            And if it is facing forward, you use exactly the same algorithm, but
            twice in a row:
          </span>
          <div className="flex flex-col items-center gap-1 md:w-[340px] bg-grey-100 px-20 py-5 border border-grey-400">
            <img
              src="images/GuidePage/beginners/lastlayercorners6.png"
              alt="lastlayercorners6image"
              className="w-[100px]"
            />
            <span className="underline text-xs text-center">
              (R' D' R D) (R' D' R D) (R' D' R D) (R' D' R D)
            </span>
          </div>
          <span>
            The corner cubie should now happily be yellow side up, and the
            bottom layers should now appear unhappily scrambled. This will
            happen every time you use these algorithms, but they will sort
            themselves out very shortly.
          </span>
          <span>
            Now for the next corner. Use either U or U' to move a new incorrect
            corner cubie into the FRU corner. The reason that bit is in bold is
            because it is tempting to move the whole cube instead.{" "}
            <span className="font-semibold">Do not do that.</span>
          </span>
          <span>So here is what the process so far has looked like:</span>
          <ul className="list-inside flex flex-col gap-3 list-decimal">
            <li className="pl-6">
              <span>We started off here, with an incorrect FRU corner:</span>
              <div className="flex gap-7 mt-5">
                <img
                  src="images/GuidePage/beginners/lastlayercorners7.png"
                  alt="lastlayercorners7image"
                  className="w-[100px]"
                />
              </div>
            </li>
            <li className="pl-6">
              <span>
                We performed (R' D' R D) (R' D' R D) to make it correct:
              </span>
              <div className="flex gap-7 mt-5">
                <img
                  src="images/GuidePage/beginners/lastlayercorners8.png"
                  alt="lastlayercorners8image"
                  className="w-[100px]"
                />
              </div>
            </li>
            <li className="pl-6">
              <span>
                We then did a U' to move the next incorrect corner cubie into
                the FRU corner:
              </span>
              <div className="flex gap-7 mt-5">
                <img
                  src="images/GuidePage/beginners/lastlayercorners9.png"
                  alt="lastlayercorners9image"
                  className="w-[100px]"
                />
              </div>
            </li>
          </ul>
          <span>
            You solve this new incorrect cubie in exactly the same way as the
            previous one. Use the above algorithms again on your new incorrect
            FRU corner (depending, of course, on if the yellow side of this
            corner is facing forward or to the right) until the yellow side is
            facing upwards.
          </span>
          <span>
            Then simply repeat the process. Use U or U' to move the next
            incorrect corner cubie into the FRU corner, and then use the
            algorithms again. Do try to not to worry about the bottom two layers
            being scrambled. I know it's a bit scary, but they are quite
            sensible and will resolve themselves when you're done.
          </span>
          <span>
            Once you have done this on all the incorrect corner cubies, you will
            be only one turn away from completing the Rubik's Cube!
          </span>
          <span>Congratulations!</span>
        </div>
      </div>
    </div>
  );
}
