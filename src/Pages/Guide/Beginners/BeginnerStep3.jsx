export default function BeginnerStep3() {
  return (
    <div id="step3" className="text-md max-w-5xl text-justify pt-5">
      <h2 className="text-2xl sm:text-3xl font-semibold">Step 3 - The Second Layer </h2>
      <div className="flex flex-col gap-4 pt-5">
        <span>
          Now that the first layer is complete, it's on to the second layer:
        </span>
        <div className="flex flex-col gap-4">
          <img
            src="images/GuidePage/beginners/secondlayer1.png"
            alt="secondlayer1image"
            className="w-[100px]"
          />
          <span>
            Some of you will have noticed something very peculiar about this
            picture. If you haven't, I'll spoil it for you: the cube is now
            upside-down. This is the first thing to do when tackling the second
            layer, so you can see what you are doing. I'll give you a moment for
            you to go ahead and do that now.
          </span>
          <span>
            Next, look in the top layer (which is now the layer with the yellow
            face) to find one of the second layer pieces that needs to be
            solved. In this case we'll do the the blue and red edge piece first.
            Turn the top layer until the piece forms an upside-down 'T' shape,
            which will be one of two possible colours depending on which way
            around the piece is:
          </span>
          <div className="flex gap-7">
            <img
              src="images/GuidePage/beginners/secondlayer2.png"
              alt="secondlayer2image"
              className="w-[100px]"
            />
            <img
              src="images/GuidePage/beginners/secondlayer3.png"
              alt="secondlayer3image"
              className="w-[100px]"
            />
          </div>
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
                src="images/GuidePage/beginners/secondlayer4.png"
                alt="secondlayer4image"
                className="w-[100px]"
              />
              <span className="underline text-xs">U R U' R' U' F' U F</span>
              <span className="text-center text-sm text-grey-600 mt-1">
                Move the top layer edge piece tp the right
              </span>
            </div>
            <div className="flex flex-col items-center gap-1 md:w-[340px] bg-grey-100 px-20 py-5 border border-grey-400">
              <img
                src="images/GuidePage/beginners/secondlayer5.png"
                alt="secondlayer5image"
                className="w-[100px]"
              />
              <span className="underline text-xs">U' L' U L U F U' F'</span>
              <span className="text-center text-sm text-grey-600 mt-1">
                Move the top layer edge piece to the left
              </span>
            </div>
          </div>
          <span>
            Sometimes, the second layer is sneaky and will throw this sort of
            situation at you:
          </span>
          <img
            src="images/GuidePage/beginners/secondlayer6.png"
            alt="secondlayer6image"
            className="w-[100px]"
          />
          <span>
            Here, none of the second layer pieces are in the right places but
            you can't get to one of the above 'T' situations. To fix this, just
            go ahead and do one of the algorithms anyway. In the above picture,
            using the first algorithm on the yellow-red edge piece will displace
            the orange-green piece, causing it to move to the top layer like so:
          </span>
          <div className="flex flex-col items-center gap-1 md:w-[340px] bg-grey-100 px-20 py-5 border border-grey-400">
            <img
              src="images/GuidePage/beginners/secondlayer7.png"
              alt="secondlayer7image"
              className="w-[100px]"
            />
            <span className="underline text-xs">U R U' R' R' F' U F</span>
          </div>
          <span>
            Now that the orange-green piece is in the top layer, you can solve
            it like normal by rotating the top layer until you find the green
            upside-down 'T'. Sometimes, you may meet this situation:
          </span>
          <img
            src="images/GuidePage/beginners/secondlayer8.png"
            alt="secondlayer8image"
            className="w-[100px]"
          />
          <span>
            You can solve this in exactly the same way, by using the normal
            algorithm on a yellow edge piece to displace the red-blue piece
            which can be solved as normal. Or, if you're feeling particularly
            clever, you can show it who's boss and see how it likes one of
            these:
          </span>
          <div className="flex flex-col items-center gap-1 md:w-[340px] bg-grey-100 px-20 py-5 border border-grey-400">
            <img
              src="images/GuidePage/beginners/secondlayer9.png"
              alt="secondlayer9image"
              className="w-[100px]"
            />
            <span className="underline text-xs">
              R U' R' U F' U2 F U F' U2 F
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
