import { TfiHandPointRight } from "react-icons/tfi";
import Button from "./Button";


export default function HomeEndSection() {
  return (
    <section className="relative min-h-[427px]">
      <img
        className="absolute right-[-50px] top-[-420px] cursor-pointer hover:opacity-0 "
        src="images/aboutPic2.png"
        alt="heroLogo"
      />
      <img
        className="absolute right-[-47.5px] top-[-420px] cursor-pointer opacity-0 hover:opacity-100 hover:rotate-1 "
        src="images/aboutPic3.png"
        alt="heroLogo"
      />

      <div className="flex flex-col gap-5 pt-15">
        <h2 className="text-4xl font-semibold text-grey-800">
          Ready for your next challenges ?
        </h2>
        <h3 className="text-2xl font-semibold text-grey-700 ">
          Join the Rubiko Community
        </h3>
        <div className="flex items-end gap-5 text-xl">
          <p className="text-grey-700  flex items-end ">
            Create your account,
            <br />
            save your progress,
            <br />
            and never miss a world record.
            <TfiHandPointRight className="text-green-700 ml-5" />
          </p>
          <Button to="/signup" variant="outline">
            Start now
          </Button>
        </div>
      </div>
    </section>
  );
}
