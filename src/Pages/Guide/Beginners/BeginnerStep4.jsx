export default function BeginnerStep4() {
  return (
    <div id="step4" className="text-md max-w-5xl text-justify pt-5">
      <h2 className="text-2xl sm:text-3xl font-semibold">Step 4 - The Last Layer Cross </h2>
      <div className="flex flex-col gap-4 pt-5">
        <span>
          As the name suggests, this stage consists of creating a cross on the
          last layer, like this:
        </span>
        <div className="flex flex-col gap-4">
          <img
            src="images/GuidePage/beginners/lastlayer1.png"
            alt="lastlayer1image"
            className="w-[100px]"
          />
          <span>
            This can't be done in the same way as the first cross (as you'd
            destroy everything you've worked so hard to do so far), so there are
            two small algorithms to learn.
          </span>
          <span>
            Before you apply that algorithm, however, you need to identify which
            one of the following four situations you now find yourself in:
          </span>
          <ul className="list-inside flex flex-col gap-3 list-decimal">
            <li className="pl-6">
              <span>Backwards L, for example</span>
              <div className="grid grid-cols-2 sm:flex sm:gap-7 mt-5">
                <img
                  src="images/GuidePage/beginners/lastlayer2.png"
                  alt="lastlayer2image"
                  className="w-[100px]"
                />
                <img
                  src="images/GuidePage/beginners/lastlayer3.png"
                  alt="lastlayer3image"
                  className="w-[100px]"
                />
                <img
                  src="images/GuidePage/beginners/lastlayer4.png"
                  alt="lastlayer4image"
                  className="w-[100px]"
                />
              </div>
            </li>
            <li className="pl-6">
              <span>Line, for example</span>
              <div className="grid grid-cols-2 sm:flex sm:gap-7 mt-5">
                <img
                  src="images/GuidePage/beginners/lastlayer5.png"
                  alt="lastlayer5image"
                  className="w-[100px]"
                />
                <img
                  src="images/GuidePage/beginners/lastlayer6.png"
                  alt="lastlayer6image"
                  className="w-[100px]"
                />
                <img
                  src="images/GuidePage/beginners/lastlayer7.png"
                  alt="lastlayer7image"
                  className="w-[100px]"
                />
              </div>
            </li>
            <li className="pl-6">
              <span>Dot, for example</span>
              <div className="grid grid-cols-2 sm:flex sm:gap-7 mt-5">
                <img
                  src="images/GuidePage/beginners/lastlayer11.png"
                  alt="lastlayer11image"
                  className="w-[100px]"
                />
                <img
                  src="images/GuidePage/beginners/lastlayer9.png"
                  alt="lastlayer9image"
                  className="w-[100px]"
                />
                <img
                  src="images/GuidePage/beginners/lastlayer10.png"
                  alt="lastlayer10image"
                  className="w-[100px]"
                />
              </div>
            </li>
            <li className="pl-6">
              <span>Cross, for example</span>
              <div className="grid grid-cols-2 sm:flex sm:gap-7 mt-5">
                <img
                  src="images/GuidePage/beginners/lastlayer11.png"
                  alt="lastlayer11image"
                  className="w-[100px]"
                />
                <img
                  src="images/GuidePage/beginners/lastlayer12.png"
                  alt="lastlayer12image"
                  className="w-[100px]"
                />
                <img
                  src="images/GuidePage/beginners/lastlayer13.png"
                  alt="lastlayer13image"
                  className="w-[100px]"
                />
              </div>
            </li>
          </ul>
          <span>
            If you have a backwards L shape, then you need to make sure you hold
            the cube so that it is in the top left corner and apply the
            following algorithm:
          </span>
          <div className="flex flex-col items-center gap-1 md:w-[340px] bg-grey-100 px-20 py-5 border border-grey-400">
            <img
              src="images/GuidePage/beginners/lastlayer14.png"
              alt="lastlayer14image"
              className="w-[100px]"
            />
            <span className="underline text-xs">F U R U' R' F'</span>
          </div>
          <span>
            And if you have a line, then you need to hold the cube so it is
            horizontal and use this algorithm:
          </span>
          <div className="flex flex-col items-center gap-1 md:w-[340px] bg-grey-100 px-20 py-5 border border-grey-400">
            <img
              src="images/GuidePage/beginners/lastlayer15.png"
              alt="lastlayer15image"
              className="w-[100px]"
            />
            <span className="underline text-xs">F R U R' U' F'</span>
          </div>
          <span>
            If you have a dot, then you need to use both algorithms, in either
            order. Using the algorithm for the backwards L shape first will
            produce a line, which you can then solve with the line algorithm.
            The opposite happens if you use the line algorithm first - it
            produces the backwards L shape, which you can then solve using that
            algorithm. Either way, for both algorithms you need to first make
            sure that you are holding the cube in the right way - the line
            should always be horizontal and the backwards L should always be in
            the top left corner. If it isn't in the top left corner, it might be
            a different kind of L and I would have just typed the word backwards
            six times for no reason.
          </span>
          <span>
            If you were lucky, you might have started in situation 4 and already
            have a cross. This means you can just skip forward to step 5!
          </span>
          <span>
            If you were very unlucky, however, you might have ended up in secret
            situation number 5 and are looking at something like one of these:
          </span>
          <div className="flex gap-7">
            <img
              src="images/GuidePage/beginners/lastlayer16.png"
              alt="lastlayer16image"
              className="w-[100px]"
            />
            <img
              src="images/GuidePage/beginners/lastlayer17.png"
              alt="lastlayer17image"
              className="w-[100px]"
            />
          </div>
          <span>
            This means that, regrettably, your cube can not be solved. At all.
            Really. There is no algorithm that can help you. But all is not
            lost. Look at this answer on the FAQ page to see what you should do
            next.
          </span>
        </div>
      </div>
    </div>
  );
}
