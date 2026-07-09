export default function SpeedCubingStep3() {
  return (
    <div id="step3s" className="text-md max-w-5xl text-justify pt-5">
      <h2 className="text-3xl font-semibold">Step 3 - OLL Edges</h2>
      <div className="flex flex-col gap-4 pt-5">
        <span>
          Now, when you're solving the cube using the full CFOP method, the
          whole last layer is supposed to be solved in two steps:
        </span>
        <ul className="list-inside list-decimal">
          <li className="pl-6">
            <span className="font-semibold">OLL</span>, or Orientation of the
            Last Layer
          </li>
          <li className="pl-6">
            <span className="font-semibold">PLL</span>, or Permutation of the
            Last Layer
          </li>
        </ul>
        <span>
          These steps are solved using only one algorithm each. So the first
          algorithm orients all the last layer pieces (makes them all face the
          right way, i.e. with yellow on top) and the second permutes them (puts
          them all in the right places). 'Orientation' always refers to the way
          a cubie is rotated, and 'permutation' always refers to where it is on
          the cube. As you might well imagine, this means that full CFOP has a
          lot of algorithms in it - one for every situation you might encounter.
          If you clicked the link to the algorithm page before, you'll have seen
          that the list is indeed quite long. I assure you that the rabbit hole
          goes even deeper than that, and every situation actually has multiple
          algorithms for your learning pleasure.
        </span>
        <span>
          So instead, what we're going to do, you and I, is cheat a little. It's
          ok, no one has to know. I'm going to show you a slightly different way
          of approaching the last layer, so that you only need to know a few
          algorithms instead. Then, once you know those few algorithms, you can
          begin to learn the rest of the last layer algorithms while always
          being able to fall back on the ones you know. What's even better is
          that these few algorithms are used in the full CFOP method anyway, so
          we're not wasting any time!
        </span>
        <span>
          The way it works is to split up the steps into two smaller steps each.
          So for OLL, instead of orienting every piece in the last layer at
          once, we'll do the edges first and then the corners. This is called
          2-look OLL, as it's OLL but done in two steps. Makes sense. PLL gets
          the same treatment, as we'll be permuting the corners first and then
          the edges. That's called 2-look PLL.
        </span>
        <span>
          So the first step of 2-look OLL is to orient the edge pieces, like
          this:
        </span>
        <img
          src="/images/GuidePage/speedcubings/oll1.png"
          alt="oll1image"
          className="w-[100px]"
        />
        <span>
          This is also called EOLL, or Edge Orientation of the Last Layer. It's
          quite an easy step, as it is essentially the same as step 4 from the
          beginner guide, which is to get a cross on the top face. But because
          you're not a beginner any more, you can be a little clever if you find
          yourself presented with this:
        </span>

        <div className="flex flex-col items-center gap-1 w-[340px] bg-grey-100 px-20 py-5 border border-grey-400">
          <img
            src="/images/GuidePage/speedcubings/oll2.png"
            alt="oll2image"
            className="w-[100px]"
          />
          <span className="underline text-xs">
            R U2 (R2' F R F') U2 (R' F R F')
          </span>
        </div>
        <span>
          If you remember, the beginner method solves a dot situation by using
          both F U R U' R' F' and F R U R' U' F' and also having to spin the
          cube about in the middle. Using this algorithm is much faster, as it
          makes a cross in one go. There are lots of algorithms for doing this,
          but I like this one the best. Even though you can already solve this
          case using the beginner way, I would take the time to practise and
          learn this algorithm now. Not only will it help you speed up whenever
          you find yourself with a dot on the last layer, but when you see this
          algorithm again during proper 1-look OLL, you'll feel all smug because
          you already know it.
        </span>
        <span>
          Much like the Sexy Move highlighted in red before, the sequence (R' F
          R F') is a trigger called the Sledgehammer, and you'll spot it lurking
          about in other places and algorithms. Being able to recognise it and
          perform it without thinking will make the task of learning lots of
          algorithms much, much easier.
        </span>
      </div>
    </div>
  );
}
