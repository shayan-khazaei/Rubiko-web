export default function BeginnerStep2() {
  return (
    <div id="step2" className="text-md max-w-5xl text-justify pt-5">
      <h2 className="text-2xl sm:text-3xl font-semibold">
        Step 2 - The Corners{" "}
      </h2>
      <div className="flex flex-col gap-4 pt-5">
        <span>The next step is to put the corners in, like this:</span>
        <div className="flex flex-col gap-4">
          <img
            src="images/GuidePage/beginners/corner1.png"
            alt="corner1image"
            className="w-[100px]"
          />
          <span>
            Just like the cross before, it is important that the corner pieces
            match with the pieces around it, i.e. not like this:
          </span>
          <img
            src="images/GuidePage/beginners/corner2.png"
            alt="corner2image"
            className="w-[100px]"
          />
          <span>
            It's likely that at least one white corner piece will be on the
            bottom layer. To correctly place such a corner, first put the cubie
            underneath where it needs to go (for example, the white-blue-red
            cubie should be underneath the white-blue-red corner). Then,
            depending on which of the three ways the white side of the cubie
            could be facing, use one of these algorithms:
          </span>
          <div className="flex flex-col gap-20">
            <div className="flex flex-col items-center gap-1 md:w-[340px] bg-grey-100 px-20 py-5 border border-grey-400">
              <img
                src="images/GuidePage/beginners/corner3.png"
                alt="corner3image"
                className="w-[100px]"
              />
              <span className="underline text-xs">F D F'</span>
            </div>
            <div className="flex flex-col items-center gap-1 md:w-[340px] bg-grey-100 px-20 py-5 border border-grey-400">
              <img
                src="images/GuidePage/beginners/corner4.png"
                alt="corner4image"
                className="w-[100px]"
              />
              <span className="underline text-xs">R' D' R</span>
            </div>
            <div className="flex flex-col items-center gap-1 md:w-[340px] bg-grey-100 px-20 py-5 border border-grey-400">
              <img
                src="images/GuidePage/beginners/corner5.png"
                alt="corner5image"
                className="w-[100px]"
              />
              <span className="underline text-xs">R' D R F D2 F'</span>
            </div>
          </div>
          <span>
            The algorithms for taking a corner from the bottom layer and putting
            it into the top layer are relatively simple, so you should do these
            cases first. This also has the added benefit of displacing any
            incorrectly placed white corners in the top layer. Look at this
            example:
          </span>
          <img
            src="images/GuidePage/beginners/corner6.png"
            alt="corner6image"
            className="w-[100px]"
          />
          <span>
            You can see that the white-orange-green piece is clearly in the
            wrong place, so you might you think that you should solve that one
            first. In fact, you should solve the white-blue-red first (using the
            above algorithms) because it will displace the white-orange-green
            into the bottom layer, which you can then solve as normal. Thinking
            about the order in which you do things like this will help to reduce
            the amount of work you have to do, and therefore take less time and
            make the whole process that much more enjoyable.
          </span>
          <span>
            If, as in the previous example, the white-red-blue piece is also in
            the top layer, you can bring it down to the bottom layer by using
            the above algorithms. You simply put some other piece in its place,
            like so:
          </span>
          <div className="flex flex-col items-center gap-1 md:w-[340px] bg-grey-100 px-20 py-5 border border-grey-400">
            <img
              src="images/GuidePage/beginners/corner7.png"
              alt="corner7image"
              className="w-[100px]"
            />
            <span className="underline text-xs">F D F'</span>
          </div>
          <span>
            This puts the white-red-blue piece that you wanted in the bottom
            layer, so you can solve it as described before to bring the
            white-orange-green piece to the bottom layer, which can solved next.
          </span>
          <span>
            The remaining case that you might run into is where the corner will
            be in the correct place in the top layer, but just needs
            reorienting. For example:
          </span>
          <div className="flex flex-col items-center gap-1 md:w-[340px] bg-grey-100 px-20 py-5 border border-grey-400">
            <img
              src="images/GuidePage/beginners/corner8.png"
              alt="corner8image"
              className="w-[100px]"
            />
            <span className="underline text-xs">R' D R F D F'</span>
          </div>
          <span>
            You should be able see that this algorithm works in precisely the
            same way - it brings the cubie down into the bottom layer, then puts
            it back facing the right way.
          </span>
        </div>
      </div>
    </div>
  );
}
