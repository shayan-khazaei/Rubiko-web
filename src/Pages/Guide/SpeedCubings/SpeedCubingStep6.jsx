import { Link } from "react-router-dom";

export default function SpeedCubingStep6() {
  return (
    <div id="step6s" className="text-md max-w-5xl text-justify pt-5">
      <h2 className="text-3xl font-semibold">Step 6 - PLL Edges</h2>
      <div className="flex flex-col gap-4 pt-5">
        <span>
          This step aims to permute the edge pieces, which by now you have
          probably worked out is also called EPLL. This completes the cube,
          which you probably know looks like this:
        </span>
        <img
          src="/images/GuidePage/speedcubings/pll6.png"
          alt="pll6image"
          className="w-[100px]"
        />
        <span>
          To start with, you will either have only one correct edge or none at
          all. If you only have one, then which algorithm you use depends on the
          direction that the other edges need to be cycled. If they need to move
          clockwise, then use this algorithm:
        </span>
        <div className="flex flex-col items-center gap-1 w-[340px] bg-grey-100 px-20 py-5 border border-grey-400">
          <img
            src="/images/GuidePage/speedcubings/pll7.png"
            alt="pll7image"
            className="w-[100px]"
          />
          <span className="underline text-xs">
            (R' U R' U') R' U' (R' U R) U R2
          </span>
        </div>
        <span>And if they need to move anticlockwise, use this algorithm:</span>
        <div className="flex flex-col items-center gap-1 w-[340px] bg-grey-100 px-20 py-5 border border-grey-400">
          <img
            src="/images/GuidePage/speedcubings/pll8.png"
            alt="pll8image"
            className="w-[100px]"
          />
          <span className="underline text-xs">
            R2 U' (R' U' R) U R U (R U' R)
          </span>
        </div>
        <span>
          If you had no correct edges in your last layer, you can just use one
          of the above algorithms anyway, like with the corners in the previous
          step. This will correctly permute one of the edges, allowing you to
          solve the rest with one more use of the above algorithms.
        </span>
        <span>
          There are, however, some more optimal algorithms. If you need to swap
          opposite edges, you can use this algorithm:
        </span>
        <div className="flex flex-col items-center gap-1 w-[340px] bg-grey-100 px-20 py-5 border border-grey-400">
          <img
            src="/images/GuidePage/speedcubings/pll9.png"
            alt="pll9image"
            className="w-[100px]"
          />
          <span className="underline text-xs">(M2 U M2) U2 (M2 U M2)</span>
        </div>
        <span>And if you need to swap adjacent edges, use this algorithm:</span>
        <div className="flex flex-col items-center gap-1 w-[340px] bg-grey-100 px-20 py-5 border border-grey-400">
          <img
            src="/images/GuidePage/speedcubings/pll10.png"
            alt="pll10image"
            className="w-[100px]"
          />
          <span className="underline text-xs">
            R' U' R2 U (R U R' U') R U R U' R U' R' U2
          </span>
        </div>
        <span>
          And that's it! You solved a Rubik's Cube using the CFOP method!
        </span>
        <span>Congratulations!</span>
        <h2 className="text-3xl font-semibold">Transitioning to full CFOP</h2>
        <span>
          I would recommend that you keep using the 2-look algorithms until you
          feel confident with most of this speedcubing guide. You will have to
          rely on them in practically every solve until you learn every other
          OLL and PLL algorithm, which will take you some time and effort. As
          you practise incorporating the techniques on this page into your
          solves, you will learn to recognise the various other OLL and PLL
          situations, which will help immensely in their memorisation.
        </span>
        <span>
          Mostly, people learn 1-look PLL before 1-look OLL, as there are fewer
          of them to learn and they are more easily identified. Start using the
          <Link to={"/solution-guides/algorithms"} className="text-blue-500">
            Algorithm page
          </Link>{" "}
          to learn each of the PLL algorithms. You can do this in whatever order
          you choose but I have arranged them in what I think is a sensible
          order to learn them - I have grouped similar algorithms, and put what
          I think are the easier ones first.
        </span>
        <span>
          Once you have learned a few more PLL algorithms, you can start
          learning OLL. The{" "}
          <Link to={"/solution-guides/algorithms"} className="text-blue-500">
            Algorithm page
          </Link>{" "}
          has each OLL algorithm ordered by the shape they resemble, so you can
          find which situation you need easily. You can also order the table by
          trigger, which I think is much more conducive to memorisation. Once
          you know the first trigger, you almost know 22 OLL algorithms straight
          away - that's about 40% already! Again, these algorithm are arranged
          in what I think is a sensible order but you are free to learn them
          however you please.
        </span>
        <span>
          It is worth knowing that each and every F2L, OLL, and PLL situation
          have many, many different algorithms that can solve them. I have gone
          through each of these situations and chosen algorithms that I think
          are easy to both perform and learn, but you may feel differently.
          Fortunately, there is a{" "}
          <a
            href="https://www.speedsolving.com/wiki/index.php/Special:MediawikiAlgDB?mode=view&view=default&puzzle=3&group=OLL"
            className="text-blue-500"
            target="blank"
          >
            huge algorithm database
          </a>{" "}
          for your perusal, where you can find the perfect algorithms for you.
          This database is part of the{" "}
          <a
            href="https://www.speedsolving.com/wiki/index.php/Main_Page"
            className="text-blue-500"
            target="blank"
          >
            speedsolving.com wiki
          </a>{" "}
          , which has a wealth of information about everything speedcubing
          related.
        </span>
        <span>
          I sincerely hope that you have enjoyed this introduction to
          speedcubing, a hobby that I and many others enjoy very much. Why not
          see how well you can do with the{" "}
          <Link to={"/solution-guides/timer"} className="text-blue-500">
            timer
          </Link>{" "}
          .
        </span>
      </div>
    </div>
  );
}
