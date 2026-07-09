export default function BeginnerStep1() {
  return (
    <div id="step1" className="text-md max-w-5xl text-justify pt-5">
      <h2 className="text-3xl font-semibold">Step 1 - The Cross </h2>
      <div className="flex flex-col gap-4 pt-5">
        <div>
          The first thing to do is to be aware of two facts:
          <ul className="list-inside pt-3">
            <li className="pl-5">1. The centre pieces don't move.</li>
            <li className="pl-5">
              2. The cube is solved later by layer, not face by face
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-4">
          <span>
            Well now you're aware of them, so that's a good start. But here's
            why they're important: because the centre pieces don't move, the
            face with a white sticker in the centre will always be the white
            face. You can test this quite easily by rotating any face of the
            cube - you can see that the centre pieces only ever rotate, and
            never move around in relation to each other. This is really very
            important, as it means that instead of trying to shuffle around the
            54 stickers of the cube, you're actually only moving 20 pieces (8
            corner pieces and 12 edge pieces). Just like how the centre piece of
            any face is always that colour, every piece will always have the
            same stickers on (unless you're the worst sort of cheater, but you
            wouldn't be reading this if you were).
          </span>
          <span>
            Fact number 2 (that the cube is solved in layers) is a direct result
            of this. For example, because the white and red piece has a white
            sticker and a red sticker, whenever you use it to solve the white
            face, you are also starting to solve the red face. The same goes for
            the three other edge pieces and the four corner pieces that make up
            the white face. So whenever you solve the white face, you're
            actually solving the first few pieces of the four adjacent faces,
            aka the first layer, at the same time.
          </span>
          <span>
            Without further ado then, and as you might have guessed from "Step 1
            - The Cross" written in very big letters just up there, the first
            thing to do is to create a cross, like this:
          </span>
          <img
            src="images/GuidePage/beginners/cross1.png"
            alt="cross1image"
            className="w-[100px]"
          />
          <span>
            Where the colours in the other faces correctly match up with the
            centre pieces of the same colour, and not like this:
          </span>
          <img
            src="images/GuidePage/beginners/cross2.png"
            alt="cross2image"
            className="w-[100px]"
          />
          <span>
            where they don't. Any 'cubies' (the 20 pieces that make up the
            Rubik's Cube) that are grey can can just be ignored, as they are
            just cubies that aren't important yet.
          </span>
          <span>
            You will also notice that the crosses here are white, a decision not
            made at random. Every single time you do the cube, you should start
            with white at the top so you get used to always looking out for the
            same colours at different stages. If I were to pick up a cube and
            start with, say, the green face, I would get terribly confused when
            it came to the last layer because I am so used to looking for yellow
            pieces instead of blue ones. Most other Rubik's Cube resources also
            start with the white face, so if you get used to it now you'll
            always know precisely what's going on.
          </span>
          <span>
            Explaining exactly how to create this cross can be a little
            challenging, as it relies mostly on logic - I can't tell you exactly
            what moves to do, because your cube will be shuffled differently to
            mine. I heartily recommend you sit and devote some brain power to
            trying to work it out yourself, as both a mental exercise and a bit
            of fun. However, if you are struggling, or don't think this
            qualifies as fun, or perhaps if you're only here to learn to solve a
            Rubik's Cube as soon as possible in order to win a bet and aren't
            interested in whimsical things like fun, then here's what you should
            do in some specific situations:
          </span>
          <div className="flex gap-20">
            <div className="flex flex-col items-center gap-1 w-[340px] bg-grey-100 px-20 py-5 border border-grey-400">
              <img
                src="images/GuidePage/beginners/cross3.png"
                alt="cross3image"
                className="w-[100px]"
              />
              <span className="underline text-xs">R</span>
            </div>
            <div className="flex flex-col items-center gap-1 w-[340px] bg-grey-100 px-20 py-5 border border-grey-400">
              <img
                src="images/GuidePage/beginners/cross4.png"
                alt="cross4image"
                className="w-[100px]"
              />
              <span className="underline text-xs">F R</span>
            </div>
            <div className="flex flex-col items-center gap-1 w-[340px] bg-grey-100 px-20 py-5 border border-grey-400">
              <img
                src="images/GuidePage/beginners/cross5.png"
                alt="cross5image"
                className="w-[100px]"
              />
              <span className="underline text-xs">F R U</span>
            </div>
          </div>
          <span>
            If you haven't already explored the notation page, you might be
            slightly confused at the Rs, Fs, and Us lurking about next to the
            above images, but worry not! It's really rather simple - each letter
            denotes a face of the cube:
          </span>
          <ul className="pl-6 list-disc">
            <li>
              <span>U </span>for Up
            </li>
            <li>
              <span>D </span>for Down
            </li>
            <li>
              <span>L </span>for Left
            </li>
            <li>
              <span>R </span>for Right
            </li>
            <li>
              <span>F </span>for Front
            </li>
            <li>
              <span>B </span>for Back
            </li>
          </ul>
          <span>
            Each letter simply tells you to move that face clockwise by 90
            degrees. An apostrophe after a letter (like F', said 'anti-front')
            tells you to move that face anticlockwise instead, and 2 after a
            letter (like R2) tells you to move that face twice, so by 180
            degrees. These letters are chained together in sequences called
            algorithms, so the algorithm F R U above is telling you to rotate
            the Front face clockwise by one turn of 90 degrees, the Right face
            clockwise one turn, and the Up face clockwise one turn.
          </span>
          <span>
            Just remember that 'clockwise' can be different depending on how
            you're looking at something. Turning a face clockwise on the cube is
            always done as if you were looking directly at that face. If you
            ever need help with a step in an algorithm, you can hover over any
            step to see how it is performed. You can also look at the notation
            page for an overview of the various notations used on this website.
          </span>
          <span>A common situation to end up in is this:</span>
          <img
            src="images/GuidePage/beginners/cross6.png"
            alt="cross6image"
            className="w-[100px]"
          />
          <span>
            Here, the blue and red edge pieces don't match up with the correct
            centre pieces. They can be swapped around without affecting the rest
            of the cross like so:
          </span>
          <div className="flex flex-col items-center gap-1 w-[340px] bg-grey-100 px-20 py-5 border border-grey-400">
            <img
              src="images/GuidePage/beginners/cross7.png"
              alt="cross7image"
              className="w-[100px]"
            />
            <span className="underline text-xs">R</span>
          </div>
        </div>
      </div>
    </div>
  );
}
