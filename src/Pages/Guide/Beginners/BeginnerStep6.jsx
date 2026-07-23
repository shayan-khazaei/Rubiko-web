export default function BeginnerStep6() {
  return (
    <div id="step6" className="text-md max-w-5xl text-justify pt-5">
      <h2 className="text-2xl sm:text-3xl font-semibold">
        Step 6 - The Last Layer Corners 1{" "}
      </h2>
      <div className="flex flex-col gap-4 pt-5">
        <span>
          This step moves the corner pieces so that they are all in the right
          place, but not necessarily in the right orientation. So something like
          this:
        </span>
        <div className="flex flex-col gap-4">
          <img
            src="images/GuidePage/beginners/lastlayercorner1.png"
            alt="lastlayercorner1image"
            className="w-[100px]"
          />
          <span>
            First thing to do is to examine your cube and see if any of the
            corners in the top layer are already in the right place. Even though
            it isn't facing the right way, you should be able to see that red,
            blue, and yellow corner in the image above is in the correct place,
            as it is between the red, blue, and yellow faces. If there are any
            correct corners, there will either be only one or four. If they are
            all correct then you can merrily skip to the next step, but if there
            are only two or three correct, then you can merrily skip to this FAQ
            answer because, tragically, your cube is unsolvable.
          </span>
          <span>
            You should be looking at a cube that looks something like this:
          </span>
          <img
            src="images/GuidePage/beginners/lastlayercorner2.png"
            alt="lastlayercorner2image"
            className="w-[100px]"
          />
          <span>
            The blue-red-yellow corner in this image (the only corner in the
            correct place) is in a place on the cube imaginatively called the
            FRU corner. This is because it is the corner formed by the Front,
            Right, and Up faces. For this step, you need to turn the whole cube
            so that your correct corner (if you have one) is in the FRU corner
            before you do the algorithm. If you don't have any correct cubies,
            then it doesn't matter which cubie is in the FRU corner.
          </span>
          <span>You can then perform this algorithm:</span>
          <div className="flex flex-col items-center gap-1 md:w-[340px] bg-grey-100 px-20 py-5 border border-grey-400">
            <img
              src="images/GuidePage/beginners/lastlayercorner3.png"
              alt="lastlayercorner3image"
              className="w-[100px]"
            />
            <span className="underline text-xs">U R U' L' U R' U' L</span>
          </div>
          <span>
            The other corner cubies (not the one in the FRU corner) will have
            now changed around. This means that you will now certainly have at
            least one correctly positioned corner cubie. If you now only have
            one, do this step again, remembering to hold the correct cubie in
            the FRU corner. If you did have one correct corner to start with and
            the other corner cubies are still not all in the right place, you
            need to perform the algorithm one more time. This should mean that
            all the corners will now be in their correct places.
          </span>
        </div>
      </div>
    </div>
  );
}
