import { Link } from "react-router-dom";
import { Table, Td, Th, Tr } from "../Algorithms/Table";
import { F2LData } from "./SpeedCubingData";

export default function SpeedCubingStep2() {
  return (
    <div id="step2s" className="text-md max-w-5xl text-justify pt-5">
      <h2 className="text-3xl font-semibold">Step 2 - F2L </h2>
      <div className="flex flex-col gap-4 pt-5">
        <span>
          The next step is to solve the rest of the first two layers (which is
          what F2L stands for) at the same time, to get this:
        </span>
        <img
          src="/images/GuidePage/speedcubings/f2l1.png"
          alt="f2l1image"
          className="w-[100px]"
        />
        <span>
          The idea of F2L is to pair each of the four bottom layer corners with
          the corresponding edge piece and then insert them into the correct
          place. Here's a simple example:
        </span>
        <div className="flex flex-col items-center gap-1 w-[340px] bg-grey-100 px-20 py-5 border border-grey-400">
          <img
            src="/images/GuidePage/speedcubings/f2l2.png"
            alt="f2l2image"
            className="w-[100px]"
          />
          <span className="underline text-xs">R U R'</span>
        </div>
        <span>
          The corner piece is paired with the edge piece, and the pair is
          inserted into the right place. Easy peasy. There are, however, a few
          situations you might find yourself in where this procedure is not
          quite so obvious. Here's a similar example:
        </span>
        <div className="flex flex-col items-center gap-1 w-[340px] bg-grey-100 px-20 py-5 border border-grey-400">
          <img
            src="/images/GuidePage/speedcubings/f2l3.png"
            alt="f2l3image"
            className="w-[100px]"
          />
          <span className="underline text-xs">R U R'</span>
        </div>
        <span>
          This can't be solved as simply, but the idea is exactly the same. The
          two sections of the algorithm show the two steps in the same procedure
          as before - the first bracketed section shows the pairing of the two
          cubies, and the second section shows the pair being inserted
          correctly. You simply repeat these steps for each of the four corners,
          and solve each F2L pair in turn.
        </span>
        <span>
          The important part of F2L is being able to solve each of the pairs
          without affecting any of the other previously solved pairs. For
          example, here are two ways of pairing the corner and edge pieces:
        </span>
        <ul className="list-inside flex gap-3">
          <li>
            <div className="flex flex-col items-center gap-1 w-[340px] bg-grey-100 px-20 py-5 border border-grey-400">
              <img
                src="/images/GuidePage/speedcubings/f2l4.png"
                alt="f2l4image"
                className="w-[100px]"
              />
              <span className="underline text-xs">F U2 F'</span>
            </div>
          </li>
          <li>
            <div className="flex flex-col items-center gap-1 w-[340px] bg-grey-100 px-20 py-5 border border-grey-400">
              <img
                src="/images/GuidePage/speedcubings/f2l5.png"
                alt="f2l5image"
                className="w-[100px]"
              />
              <span className="underline text-xs">U' R U2 R'</span>
            </div>
          </li>
        </ul>
        <span>
          The first algorithm does successfully pair the red-blue corner and
          edge pieces, but it also lifts out the blue-orange pair from its
          proper place, thereby undoing any hard work it took to put it there.
          Instead, a simple U' before the algorithm means that when you then
          pair the red-blue corner and edge piece, you avoid affecting the
          blue-orange pair. Instead, the pieces that do get affected are ones
          you don't care about, as they were occupying the space that you want
          to put the red-blue pair into.
        </span>
        <span>
          This idea of finding an empty space on the cube and using it to build
          a corner-edge pair is crucial to F2L, as of course you want to be able
          to construct each of the four F2L pairs without disturbing any
          previously solved ones. But sometimes it can be advantageous to
          disturb unsolved spaces by choosing a space to build your corner-edge
          pair that also assists the creation of the next pair. For example:
        </span>
        <ul className="list-inside flex gap-3">
          <li>
            <div className="flex flex-col items-center gap-1 w-[340px] bg-grey-100 px-20 py-5 border border-grey-400">
              <img
                src="/images/GuidePage/speedcubings/f2l6.png"
                alt="f2l6image"
                className="w-[100px]"
              />
              <span className="underline text-xs">U' F U F' U</span>
            </div>
          </li>
          <li>
            <div className="flex flex-col items-center gap-1 w-[340px] bg-grey-100 px-20 py-5 border border-grey-400">
              <img
                src="/images/GuidePage/speedcubings/f2l7.png"
                alt="f2l7image"
                className="w-[100px]"
              />
              <span className="underline text-xs">F' U F</span>
            </div>
          </li>
        </ul>
        <span>
          In this situation, the first algorithm uses the empty space between
          the red and blue faces to move the red-blue edge piece so it can be
          easily paired and inserted. This doesn't disturb any of the other F2L
          spaces, but you can see that the red-green pieces are looking rather
          unsolved and unhappy. If you used the second algorithm instead, then
          the same thing happens to red-blue corner and edge pieces, but now the
          red-green pieces are much happier and are in a position to be solved
          much more easily.
        </span>
        <span>
          You now know the basic ideas of F2L. Have a go on your cube, and see
          if you can work out how to solve any of the pairs. Rather than relying
          on a big table of algorithms, F2L is best done intuitively. This is
          for the same reason as the cross in step 1 - you need to be able to
          look at the cube and produce an efficient way of solving each F2L
          pair. Just like with the happy red-green pieces before, sometimes you
          will come to an F2L situation that you've solved many times, but solve
          it in a different way because you want to set up the next F2L pair for
          easy solving.
        </span>
        <span>
          However, there is such a list on the{" "}
          <Link to={"/solution-guides/algorithms"} className="text-blue-500">
            Algorithm page
          </Link>{" "}
          , where you can see each F2L case and how to solve it. They are there
          so you can see an optimal way to solve each case, but try to not rely
          on them for every single F2L case you encounter. Instead, really try
          and solve each case intuitively. Don't worry if you struggle! It takes
          practise, and the next little section is all about how to be better at
          F2L.
        </span>
        <h2 className="text-2xl font-semibold">How To be better at F2L </h2>
        <span>
          F2L can be a little difficult to get your head around. Even if you
          understand the basic ideas above, it isn't always obvious how best to
          proceed. I shall now try to explain some further concepts that you can
          use to improve your F2L.
        </span>
        <h2 className="text-2xl">1. Intuition isn't always best</h2>
        <span>
          I know, I know, I said that F2L should be solved intuitively, and that
          you shouldn't rely on a big table of algorithms. If you can
          intuitively solve every F2L situation you come across then jolly well
          done, but there are a few cases where there is just a better, faster,
          much less obvious algorithm to solve it. For example, consider the
          following two algorithms:
        </span>
        <ul className="list-inside flex gap-3">
          <li>
            <div className="flex flex-col items-center gap-1 w-[340px] bg-grey-100 px-20 py-5 border border-grey-400">
              <img
                src="/images/GuidePage/speedcubings/f2l8.png"
                alt="f2l8image"
                className="w-[100px]"
              />
              <span className="underline text-xs">
                (R U2 R') (F' U2 F) (U' R U R')
              </span>
            </div>
          </li>
          <li>
            <div className="flex flex-col items-center gap-1 w-[340px] bg-grey-100 px-20 py-5 border border-grey-400">
              <img
                src="/images/GuidePage/speedcubings/f2l9.png"
                alt="f2l9image"
                className="w-[100px]"
              />
              <span className="underline text-xs">
                (R U R' U') (R U R' U') (R U R')
              </span>
            </div>
          </li>
        </ul>
        <span>
          An intuitive way of thinking about this situation might produce
          something like the first algorithm, as it follows the usual principles
          of pairing the edge and corner piece and inserting them together.
          However, the second algorithm is much faster to perform, as it is
          essentially the same few moves performed three times. You will also
          have noticed that the first two brackets are written in red. This is
          because (R U R' U') is well-known 'trigger' called the Sexy Move. I'm
          not even kidding. A trigger is simply a sequence of moves that is easy
          to perform very quickly, and the Sexy Move trigger comes up a lot.
          Being able to identify it easily will make algorithms that use it
          easier to learn, so whenever it is used in this guide it will be
          highlighted in red. This is also why you'll see things like (R U R'
          U') U', even though you might think it could just be (R U R' U2). It's
          easier to perform the quick trigger first and then add on the U', as
          opposed to modifying a well-practised sequence.
        </span>
        <span>
          There are five such cases that you should learn the algorithmic
          solution for, and they're all in this nice little table:
        </span>
        <Table>
          <Tr>
            <Th>That nice little table</Th>
          </Tr>
          {F2LData.slice(0, 5).map((data) => (
            <Tr>
              <Td>
                <img
                  src={data.image}
                  alt={`f2lt${data.id}`}
                  className="w-[80px]"
                />
                <span>{data.algorithms}</span>
              </Td>
            </Tr>
          ))}
        </Table>
        <h2 className="text-2xl">2. Cube rotations are bad</h2>
        <span>
          Turning the whole cube in your hands is a slow waste of time. Wasting
          time is bad. Therefore, rotate the cube as little as possible. This
          might seem like a trivial difference to you, but each little pause
          adds up, and when you're trying to really push down your solve time
          every second counts. To this end, the vast majority of the algorithms
          on this page are comprised of many Rs and Us, as they are easy to
          perform (sorry lefties). They also tend to use more double layer turns
          like d as opposed U y'. Both have the same effect, but a double layer
          turn is quicker. Compare these two algorithms:
        </span>
        <ul className="list-inside flex gap-3">
          <li>
            <div className="flex flex-col items-center gap-1 w-[340px] bg-grey-100 px-20 py-5 border border-grey-400">
              <img
                src="/images/GuidePage/speedcubings/f2l5.png"
                alt="f2l5image"
                className="w-[100px]"
              />
              <span className="underline text-xs">(R U' R') U (F' U' F)</span>
            </div>
          </li>
          <li>
            <div className="flex flex-col items-center gap-1 w-[340px] bg-grey-100 px-20 py-5 border border-grey-400">
              <img
                src="/images/GuidePage/speedcubings/f2l16.png"
                alt="f2l16image"
                className="w-[100px]"
              />
              <span className="underline text-xs">(R U' R') d (R' U' R)</span>
            </div>
          </li>
        </ul>
        <span>
          Both algorithms solve the F2L pair and use the same number of moves.
          But the second algorithm is considerably quicker to perform, as you
          don't have to adjust your hand position at all. The first algorithm
          either requires you to shift your hand position to twist the F face or
          start using some peculiar thumb movements.
        </span>
        <span>
          Try to also remember that you (probably) have two hands. While this is
          also an excellent life tip, some situations are just better handled on
          a specific side of the cube. Take this example:
        </span>
        <ul className="list-inside flex gap-3">
          <li>
            <div className="flex flex-col items-center gap-1 w-[340px] bg-grey-100 px-20 py-5 border border-grey-400">
              <img
                src="/images/GuidePage/speedcubings/f2l7.png"
                alt="f2l7image"
                className="w-[100px]"
              />
              <span className="underline text-xs">
                y' U R U' R' U y' R' U' R
              </span>
            </div>
          </li>
          <li>
            <div className="flex flex-col items-center gap-1 w-[340px] bg-grey-100 px-20 py-5 border border-grey-400">
              <img
                src="/images/GuidePage/speedcubings/f2l18.png"
                alt="f2l18image"
                className="w-[100px]"
              />
              <span className="underline text-xs">(L' U L) U (L' U' L)</span>
            </div>
          </li>
        </ul>
        <span>
          Your natural instinct may be to use your right hand, which produces
          the first algorithm. But just look at it. It's an abomination. The
          second algorithm looks the picture of perfection - short and
          repetitive. It's beautiful, and no horrid cube rotations.
        </span>
        <h2 className="text-2xl">3. Slow and steady wins the race</h2>
        <span>
          It's all very well and good being able to perform algorithms quickly,
          but perhaps the most important thing with F2L is to perform the
          algorithms continuously. If you perform each algorithm as quickly as
          humanly possible, you don't leave yourself much time to analyse the
          cube and isolate the next corner-edge pair you want to solve. This
          leaves you with a very start-stop, stuttery solve as you rapidly
          perform an algorithm and then stop to find the next one.
        </span>
        <span>
          Instead, it is much better to perform the algorithms slightly more
          slowly in one continuous stream. This practise is called lookahead,
          and is vital if you want to achieve solve times under 20 seconds.
          Although the idea of slowing down in order to speed up may be
          counter-intuitive, a useful exercise is to practise F2L at an
          exaggeratedly slow speed. Very slow indeed, about 1-2 seconds per
          quarter turn of a face. At this pace, you remove the temptation to
          focus only on the pieces that you are currently applying an algorithm
          to, and you can easily be looking at the rest of the cube to find the
          next F2L pair.
        </span>
        <span>
          This idea does not mean that the previous advice of how to perform the
          algorithms is redundant. Remember when I said 'wasting time is bad'?
          That's still true. You want to eliminate wasted time searching for
          pieces. Going slowly isn't better - going faster is better, but you'll
          get faster by going slower. Through practice, your lookahead will
          improve to a point where you can perform every algorithm very quickly,
          but without losing the ability to know what you're doing next. This
          advice applies to all of steps in this guide, but it is most important
          during F2L and step 1, the cross. Try practising going from a
          scrambled cube to completed F2L very slowly, and making sure you have
          a continuous steady flow.
        </span>
      </div>
    </div>
  );
}
