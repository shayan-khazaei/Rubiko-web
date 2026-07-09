export default function Brand() {
  return (
    <div className="flex flex-col gap-24 pb-14">
      <section className="border-b-8 border-green-700">
        <img
          src="images/brandSection.png"
          alt="brandHeader"
          className="w-full object-cover h-[33rem] brightness-75"
        />
      </section>
      <section className="container mx-auto grid grid-cols-3 gap-[25rem]">
        <section className="col-span-1">
          <h2 className="sticky top-36 text-6xl w-xl uppercase font-bold">
            RUBIK’S® brand <br /> & trademark guidelines
          </h2>
        </section>
        <section className="flex flex-col gap-10 col-span-2 items-center">
          <p className="text-2xl w-2xl text-left">
            The RUBIK’S® brand is famous for the three-dimensional puzzle cube
            originally created by Ernő Rubik in 1974. The Rubik’s® Cube is
            revered as one of the most beloved toys of all time. Since the
            1980s, the RUBIK’S® brand name has been a registered trademark
            globally. Proper use of the RUBIK’S® trademarks is essential to
            protect it. Learn more about the correct use of our iconic
            trademark.
          </p>
          <div>
            <span className="uppercase text-3xl font-semibold">facts</span>
            <ul className="text-xl w-2xl text-left list-disc list-outside pl-6 flex flex-col gap-3 mt-5">
              <li>
                Spin Master currently owns over 400 trademarks worldwide
                protecting the Rubik’s® Cube and the RUBIK’S® brand.
              </li>
              <li>
                In addition to trademarks, Spin Master holds other forms of
                protection for its well-known Rubik’s® Cube, which it is
                committed to protect against unauthorized use.
              </li>
              <li>
                In fact, the Rubik’s® Cube’s product appearance, consisting of
                the 3×3×3 shape, the black grid, six colours and colour
                sequence, enjoys protection in several countries around the
                world regardless of whether the RUBIK’S® trademark is applied to
                it.
              </li>
              <li>
                Spin Master devotes substantial resources to defending the
                distinctiveness and recognition of this iconic toy and brand
                name.
              </li>
            </ul>
          </div>
          <div>
            <span className="uppercase text-3xl font-semibold">
              trademark guidelines
            </span>
            <ul className="text-xl w-2xl text-left list-disc list-outside ps-6 flex flex-col gap-3 mt-5">
              <li>
                The RUBIK’S® trademark can only be used in connection with
                original RUBIK’S® brand products manufactured or licensed by
                Spin Master.
              </li>
              <li>
                It is prohibited to use the RUBIK’S® trademark, including any
                variations of the spelling, when referring to third-party
                products. This means that if you are describing, advertising or
                selling a third-party product, you must use a generic term, such
                as “puzzle cube”, “magic cube” or “three-dimensional puzzle”,
                and NOT “Rubik’s cube”. The term Rubik’s® Cube is reserved for
                puzzle cubes manufactured or licensed by Spin Master only.
              </li>
              <li>
                Do not incorporate the RUBIK’S® trademark, including any
                variations of the spelling, into a company name, product name or
                trademark in combination with a branding style that references
                and/or depicts a puzzle cube, cube design and/or colors, fonts
                and stylizations used in connection with the RUBIK’S® brand.
              </li>
              <li>
                The RUBIK’S® trademark must always follow with the registration
                symbol ® if used in connection with toy products.
              </li>
              <li>
                Always add the following trademark notice when using the
                RUBIK’S® trademark with Spin Master’s prior permission: RUBIK’S®
                trademark(s) used with permission of Spin Master Toys UK
                Limited.
              </li>
            </ul>
          </div>
        </section>
      </section>
      <section className="w-[95%] mx-auto">
        <div className="text-green-700 border mb-10" />
        <div className="flex flex-col gap-2">
          <h4 className="text-grey-900 text-xl font-semibold">
            More information:
          </h4>
          <p className="font-grey-700 tet-xl">
            For questions regarding our legal information, please contact us at our social media
            accounts.
          </p>
        </div>
      </section>
    </div>
  );
}
