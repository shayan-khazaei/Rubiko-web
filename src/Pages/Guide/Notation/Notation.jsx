export default function Notation() {
  return (
    <div id="step1" className="text-md max-w-5xl text-justify pt-5 pb-7">
      <h2 className="text-5xl font-semibold uppercase ">
        You can learn all you need here
      </h2>
      <h2 className="text-3xl font-semibold pt-20">Notation</h2>
      <div className="flex flex-col gap-4 pt-5">
        <span>
          In order to write down sequences of movements on the cube, we use a
          notation of six main letters:
          <ul className="list-inside list-disc pt-3">
            <li className="pl-6">
              <span className="font-semibold text-2xl">U</span> for Up
            </li>
            <li className="pl-6">
              <span className="font-semibold text-2xl">D</span> for Down
            </li>
            <li className="pl-6">
              <span className="font-semibold text-2xl">L</span> for Left
            </li>
            <li className="pl-6">
              <span className="font-semibold text-2xl">R</span> for Right
            </li>
            <li className="pl-6">
              <span className="font-semibold text-2xl">F</span> for Front
            </li>
            <li className="pl-6">
              <span className="font-semibold text-2xl">B</span> for Back
            </li>
          </ul>
        </span>
        <div className="flex flex-col gap-4">
          <span>
            These letters are used in sequences known as algorithms, and you
            just perform each letter in the algorithm from left to right. Each
            letter simply tells you to move that face clockwise by 90 degrees.
            An apostrophe after a letter (like F', said 'anti-front') tells you
            to move that face anticlockwise instead, and 2 after a letter (like
            R2) tells you to move that face by 180 degrees.
          </span>
          <span>Here's an example for you:</span>
          <div className="flex flex-col items-center gap-1 w-[340px] bg-grey-100 px-20 py-5 border border-grey-400">
            <img
              src="/images/GuidePage/rotation.png"
              alt="rotationimage"
              className="w-[100px]"
            />
            <span className="underline text-xs">R</span>
          </div>
          <span>
            If you managed to followed that correctly by turning each face of
            your cube twice, you should have achieved a rather charming
            checkerboard pattern. Use this simple algorithm to impress your
            friends and family!
          </span>
          <span>
            You may have noticed that you could hover over each move in the
            algorithm to follow along at every step. If you're feeling a bit
            confident, you can turn this off using the 'Algorithm helper' switch
            at the bottom of the menu.
          </span>
          <h2 className="text-3xl font-semibold">Notation</h2>
          <span>
            For the intermediate and advanced methods, other letters for
            notation will be used. These include:
          </span>
          <ul className="list-inside list-disc pt-3">
            <li className="pl-6">
              <span className="font-semibold text-2xl">X</span> for rotating the
              cube like an R
            </li>
            <li className="pl-6">
              <span className="font-semibold text-2xl">Y</span> for rotating the
              cube like a U
            </li>
            <li className="pl-6">
              <span className="font-semibold text-2xl">Z</span> for rotating the
              cube like an F
            </li>
            <li className="pl-6">
              <span className="font-semibold text-2xl">M</span> for the layer
              between L and R
            </li>
            <li className="pl-6">
              <span className="font-semibold text-2xl">E</span> for the layer
              between U and D
            </li>
            <li className="pl-6">
              <span className="font-semibold text-2xl">S</span> for the layer
              between F and B
            </li>
          </ul>
          <span>
            E and S are used very rarely, as they are quite awkward to perform
            and can easily be replaced in algorithms with other turns.
          </span>
        </div>
      </div>
    </div>
  );
}
