import { Link } from "react-router-dom";
import { Table, Td, Th, Tr } from "../Algorithms/Table";
import { OLLData } from "./SpeedCubingData";

export default function SpeedCubingStep4() {
  return (
    <div id="step4s" className="text-md max-w-5xl text-justify pt-5">
      <h2 className="text-2xl sm:text-3xl font-semibold">Step 4 - OLL Corners</h2>
      <div className="flex flex-col gap-4 pt-5">
        <span>The next step is to correctly orient the corner cubies:</span>
        <img
          src="/images/GuidePage/speedcubings/oll3.png"
          alt="oll3image"
          className="w-[100px]"
        />
        <span>
          This is called OCLL, or Orient Corners of the Last Layer. "Why isn't
          it called COLL?" I hear you ask. Because it was taken already, that's
          why. COLL and CLL both mean different things to other cubers, and
          sticking to convention makes things a lot easier for everyone
          involved. "I'm going to call it COLL anyway" I hear you petulantly
          respond. Well go ahead, but don't blame me when you're trying to make
          friends with other speedcubers and you have to listen to "Wait, do you
          mean COLL as in orienting and permuting last layer corners while
          preserving edge orientation, or just orienting the corners and
          preserving edge orientation but ignoring all last layer permutation?"
          every 30 seconds, and you have to say "I don't know, I chose arbitrary
          visual consistency on some website over internal clarity of naming
          structure and now I feel nervous and stressed".
        </span>
        <span>
          Just like the beginner guide, the rest of the last layer isn't an
          intuitive thing you can just work out (if you can, you and your
          mega-brain should probably be working for NASA or something). That's
          why there's a big scary table of algorithms lurking on the{" "}
          <Link to={"/solution-guides/algorithms"} className="text-blue-500">
            Algorithm page
          </Link>{" "}
          , but because we're using our clever 2-look shortcut, you only need to
          know the following seven. They don't look scary at all, and there's
          even some triggers in there that you've already seen!
        </span>

        <Table>
          <Tr>
            <Th>OCLL algorithms</Th>
          </Tr>
          {OLLData.slice(0, 7).map((data) => (
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
      </div>
    </div>
  );
}
