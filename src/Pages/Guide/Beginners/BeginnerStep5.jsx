export default function BeginnerStep5() {
  return (
    <div id="step5" className="text-md max-w-5xl text-justify pt-5">
      <h2 className="text-2xl sm:text-3xl font-semibold">
        Step 5 - The Last Layer Edges{" "}
      </h2>
      <div className="flex flex-col gap-4 pt-5">
        <span>
          This step will move the edges of the cross you just created so they
          line up with the centres, like so:
        </span>
        <div className="flex flex-col gap-4">
          <img
            src="images/GuidePage/beginners/lastlayeredge1.png"
            alt="lastlayeredge1image"
            className="w-[100px]"
          />
          <span>There are three possibilities here:</span>
          <ul className="list-inside flex flex-col gap-3 list-decimal">
            <li className="pl-6">
              <span>
                The two edges that need to be swapped are adjacent to each
                other: <br />
                (Cube shown from front and back)
              </span>
              <div className="flex gap-7 mt-5">
                <img
                  src="images/GuidePage/beginners/lastlayeredge2.png"
                  alt="lastlayeredge2image"
                  className="w-[100px]"
                />
                <img
                  src="images/GuidePage/beginners/lastlayeredge3.png"
                  alt="lastlayeredge3image"
                  className="w-[100px]"
                />
              </div>
            </li>
            <li className="pl-6">
              <span>
                The two edges that need to be swapped are opposite each other:
              </span>
              <div className="flex gap-7 mt-5">
                <img
                  src="images/GuidePage/beginners/lastlayeredge4.png"
                  alt="lastlayeredge4image"
                  className="w-[100px]"
                />
                <img
                  src="images/GuidePage/beginners/lastlayeredge5.png"
                  alt="lastlayeredge5image"
                  className="w-[100px]"
                />
              </div>
            </li>
            <li className="pl-6">
              <span>None of the edges need to be swapped:</span>
              <div className="flex gap-7 mt-5">
                <img
                  src="images/GuidePage/beginners/lastlayeredge6.png"
                  alt="lastlayeredge6image"
                  className="w-[100px]"
                />
                <img
                  src="images/GuidePage/beginners/lastlayeredge7.png"
                  alt="lastlayeredge7image"
                  className="w-[100px]"
                />
              </div>
            </li>
          </ul>
          <span>
            In the first situation, where the two incorrect edges are adjacent
            to each other, the cube first needs to be rotated so that the two
            edges are in the Front and Right faces. In the example above, this
            is already the case so no rotation is needed. The algorithm can then
            be applied thusly:
          </span>
          <div className="flex flex-col items-center gap-1 md:w-[340px] bg-grey-100 px-20 py-5 border border-grey-400">
            <img
              src="images/GuidePage/beginners/lastlayeredge8.png"
              alt="lastlayeredge8image"
              className="w-[100px]"
            />
            <span className="underline text-xs">U R U R' U R U2 R'</span>
          </div>
          <span>
            In the second situation, you simply need to do the algorithm twice.
            Doing it the first time will make it so that the incorrect edges are
            now adjacent to each other, which you can solve exactly as the first
            situation. Remember to rotate the cube so that the incorrect edges
            are in the Front and Right faces!
          </span>
          <span>
            As before, if you found yourself in last third situation you can
            just move straight on to step 6. Some of you might have even been
            lucky twice and skipped from step 3 all the way to step 6!
          </span>
        </div>
      </div>
    </div>
  );
}
