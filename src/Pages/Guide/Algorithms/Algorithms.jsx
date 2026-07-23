import AlgorithmStep1 from "./AlgorithmStep1";
import AlgorithmStep2 from "./AlgorithmStep2";
import AlgorithmStep3 from "./AlgorithmStep3";

export default function Alogorithms() {
  return (
    <>
      <section>
        <h2 className="text-4xl sm:text-5xl font-semibold uppercase ">
          You can learn all you need here
        </h2>
      </section>
      <section>
        <h2 className=" text-3xl sm:text-4xl font-semibold pt-15">
          Algorithms
        </h2>
        <div className="flex flex-col gap-3 pt-5 text-xl max-w-5xl text-justify">
          <span>
            Here you will find big long lists of algorithms for the sections of
            the CFOP method. I have taken care to choose algorithms that I think
            are easy to both memorise and perform, and I have arranged them in
            an order that I think facilitates learning. While I have also
            endeavoured to ensure they are error free, if you do spot any
            mistakes you can{" "}
            <a
              className="text-blue-700"
              href="mailto:shayankhazaie50@gmail.com"
            >
              send me an email
            </a>
          </span>
        </div>
      </section>
      <section className="flex flex-col gap-7 pb-10">
        <AlgorithmStep1 />
        <AlgorithmStep2 />
        <AlgorithmStep3 />
      </section>
    </>
  );
}
